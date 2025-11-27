import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    link: String,
    demoLink: String,
    image: String,
    date: Date,
    techStack: [String],
  },
  { timestamps: true }
);

// Prevent model overwrite in serverless environments
export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
