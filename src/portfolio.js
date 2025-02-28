import React from 'react';
import { motion } from 'framer-motion';
import './style.css'; // Ensure this file exists in the same directory

const Portfolio = () => {
    return (
        <div className="container">
            <header className="header">
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="title">
                    SHABEEB C
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="subtitle">
                    Flutter Developer | Data Analyst | IT Support
                </motion.p>
                <nav className="nav">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <section id="about" className="section">
                <h2>About Me</h2>
                <p>A passionate developer skilled in Flutter, Python, and IT support. Looking for opportunities to grow and contribute.</p>
            </section>

            <section id="projects" className="section">
                <h2>Projects</h2>
                <div className="projects">
                    <motion.div whileHover={{ scale: 1.1 }} className="project-card">
                        <h3>Social Media App</h3>
                        <p>Built using Flutter and BLoC with Firebase backend.</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="project-card">
                        <h3>AI Finance Manager</h3>
                        <p>An AI-powered personal finance manager built in Flutter.</p>
                    </motion.div>
                </div>
            </section>

            <section id="resume" className="section">
                <h2>Resume</h2>
                <a href="/Shabeeb_CV.pdf" download className="btn">Download My Resume</a>
            </section>

            <section id="contact" className="section">
                <h2>Contact Me</h2>
                <p>Email:<a href="https://mailto:shabeebckpm@gmail.com">shabeebckpm@gmail.com</a> </p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/shabeebckpm/">Shabeeb C</a></p>
                <p>GitHub: <a href="https://github.com/shabeebckpm">Shabeebckpm github</a></p>
            </section>

            <footer className="footer">
                <p>&copy; 2025 Shabeeb C. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Portfolio;
