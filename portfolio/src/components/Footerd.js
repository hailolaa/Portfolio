import '../styles/App.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
function Footer(){
    return(
        <footer className='footer ' style={{padding: '10px', textAlign: 'center'}}>
            <strong>Follow me on:</strong>
            <div>
                 <a href="https://github.com/hailolaa" target="_blank" rel="noreferrer" className="me-3 footer-contact-link">
                                <FaGithub size={20} />
                              </a>
                <a href="https://linkedin.com/in/hailemichael-molla-31672225a" target="_blank" rel="noreferrer" className="me-3 footer-contact-link">
                                <FaLinkedin size={20} />
                </a>
                <a href="https://x.com/hailolaa21" target="_blank" rel="noreferrer" className="footer-contact-link">
                                <FaTwitter size={20} />
                 </a>

            </div>
           
        </footer>
    );


}

export default Footer;