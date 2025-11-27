import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// ----- Mongoose connection caching -----
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((m) => m.connection);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// ----- Schema & Model -----
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  githubLink: String,
  demoLink: String,
  image: String,
  date: { type: Date, default: Date.now },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

// ----- API Handler -----
export default async function handler(req, res) {
  await connect();

  // GET: fetch all projects
  if (req.method === "GET") {
    try {
      const projects = await Project.find().sort({ date: -1 });
      return res.status(200).json(projects);
    } catch (err) {
      return res.status(500).json({ error: "Error fetching projects" });
    }
  }

  // POST: add a new project
  if (req.method === "POST") {
    try {
      const { title, description, githubLink, demoLink, image } = req.body || {};

      if (!title || !description) {
        return res
          .status(400)
          .json({ error: "Title and description are required" });
      }

      const newProject = new Project({
        title,
        description,
        githubLink,
        demoLink,
        image,
      });

      await newProject.save();
      return res.status(201).json(newProject);
    } catch (err) {
      console.error("Error saving project:", err);
      return res.status(500).json({ error: "Error saving project" });
    }
  }

  // If other methods are hit
  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
