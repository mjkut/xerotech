'use client';

import { useState } from 'react'; // Removed useEffect as it's no longer used
import { ExternalLink, Github, X, Eye, Code, Star } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define the project type interface
interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  results: string[];
  liveUrl: string; // Ensure this is always a URL, even if a placeholder
  githubUrl: string; // Ensure this is always a URL, even if a placeholder
  category: string;
}

// Sample project data - you can replace with your actual projects
const projects: Project[] = [
  {
    id: 1,
    title: "ZINGSA Website Redesign",
    shortDescription: "A modern, responsive redesign of the Zimbabwe National Geospatial and Space Agency's official website.",
    fullDescription: "Redesigned and improved the user interface and experience of the ZINGSA website using HTML, CSS and JavaScript. Ensured the site was mobile-friendly, optimized for performance, and visually aligned with the agency's brand. Integrated updated content and added sections for news, services, and contact forms.",
    technologies: ["Django", "Python", "HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/projects/zingsa.png",
    results: [
      "Improved site navigation and readability",
      "Faster load times and responsiveness",
      "Increased user engagement and feedback"
    ],
    liveUrl: "https://www.zingsa.org.zw/", // Example: replace with actual URL
    githubUrl: "https://github.com/mjkut/zingsa-website-redesign", // Example: replace with actual URL
    category: "Web Application"
  },
  {
    id: 2,
    title: "Django Admin Product Display System",
    shortDescription: "A backend-managed web system for managing in-stock and out-of-stock products.",
    fullDescription: "Created a Django-based web application that allows admin users to manage a product catalog, including in-stock and out-of-stock products. The system includes dynamic product filtering, request forms for unavailable items, and notification handling for product interest.",
    technologies: ["Django", "Python", "SQLite", "HTML", "Bootstrap"],
    image: "/projects/products.png",
    results: [
      "Admin dashboard with CRUD functionality",
      "Request system for out-of-stock products",
      "Improved stock management process"
    ],
    liveUrl: "#", // Placeholder if no live demo
    githubUrl: "https://github.com/mjkut/robust",
    category: "Web Application"
  },
  {
    id: 3,
    title: "Tour Zimbabwe Portal",
    shortDescription: "A tourism web app showcasing Zimbabwe's top destinations with monetization features.",
    fullDescription: "Built a tourism-focused platform promoting top travel spots in Zimbabwe, with destination images, descriptions and visitor tips. Monetization plans include affiliate links, sponsored content and bookings. The site supports multi-category listings and dynamic filtering by region or interest.",
    technologies: ["DjangoCMS", "CSS", "JavaScript", "HTML", "Bootstrap", "SQLite"],
    image: "/projects/tour-zim.png",
    results: [
      "Showcases 50+ tourist attractions",
      "Responsive layout for all devices",
      "Foundation for affiliate-based revenue"
    ],
    liveUrl: "#", // Placeholder if no live demo
    githubUrl: "https://github.com/mjkut/tour-zimbabwe",
    category: "Web Application"
  },
  {
    id: 4,
    title: "Anonymous Evidence Sharing App",
    shortDescription: "A secure platform for whistleblowers to share evidence without revealing identity.",
    fullDescription: "Developed a secure web app where users can anonymously upload and share evidence related to corruption or misconduct. Built with privacy, encryption, and user safety in mind. Admin features include file review, access logs, and moderation tools.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js"],
    image: "/projects/evidence.png",
    results: [
      "Anonymous upload system with metadata removal",
      "Admin moderation panel",
      "Secure file handling and link expiration"
    ],
    liveUrl: "#", // Placeholder if no live demo
    githubUrl: "https://github.com/mjkut/anon-evidence",
    category: "Security & Privacy"
  }
];

const categories = ["All", "Web Application", "Security & Privacy"];

const ProjectCard = ({ project, onClick }: { project: Project, onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Determine if both Live Demo and GitHub links are valid
  const hasLiveUrl = project.liveUrl && project.liveUrl !== '#';
  const hasGithubUrl = project.githubUrl && project.githubUrl !== '#';

  return (
    <div
      className="bg-gray-800/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick} // Make the whole card clickable for details
    >
      {/* Project Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill // Fill the parent div
          className={`object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-70" />
        <div className={`absolute inset-0 bg-purple-600/20 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Overlay Icons (Star) */}
        <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}>
          <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
            <Star className="w-4 h-4 text-yellow-400" />
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-xs rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-700/50 text-blue-400 rounded-full hover:bg-gray-600/50 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 text-sm bg-gray-700/50 text-blue-400 rounded-full">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {hasLiveUrl && ( // Only show if liveUrl is valid
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevent modal from opening
              className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <ExternalLink className="w-4 h-4" /> {/* ExternalLink icon used here */}
              Live Demo
            </a>
          )}
          {hasGithubUrl && ( // Only show if githubUrl is valid
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevent modal from opening
              className="flex-1 px-4 py-2 bg-gray-700/50 text-white rounded-lg hover:bg-gray-600/50 transition-colors duration-300 flex items-center justify-center gap-2 border border-gray-600/50 hover:border-gray-500 text-sm"
            >
              <Github className="w-4 h-4" /> {/* Github icon used here */}
              Code
            </a>
          )}
          {/* If no live or github, still keep the View Details option visible and primary */}
          {!hasLiveUrl && !hasGithubUrl && (
             <button
                onClick={onClick} // This button still opens the modal for details
                className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <Eye className="w-4 h-4" />
                View Details
              </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore some of my most impactful work. Each project represents a unique challenge solved through innovative solutions and technical expertise.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50 hover:border-purple-500/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }} // Staggered animation
              viewport={{ once: true }}
            >
              <ProjectCard 
                project={project} 
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800/95 backdrop-blur-xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72 w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" // Optimize modal image loading
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
                  aria-label="Close project details"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-sm rounded-full mb-3 inline-block">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-purple-400" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm bg-gray-700/50 text-blue-400 rounded-full border border-gray-600/50 hover:border-blue-400/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    Key Results
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.results.map((result, _index) => ( // Use _index to ignore unused index
                      <li key={_index} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons in Modal */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 text-center flex items-center justify-center gap-2 text-base"
                    >
                      <ExternalLink className="w-5 h-5" /> {/* ExternalLink icon used here */}
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gray-700/50 text-white rounded-lg hover:bg-gray-600/50 transition-colors duration-300 text-center flex items-center justify-center gap-2 border border-gray-600/50 hover:border-gray-500 text-base"
                    >
                      <Github className="w-5 h-5" /> {/* Github icon used here */}
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}