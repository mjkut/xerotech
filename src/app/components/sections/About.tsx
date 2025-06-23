'use client'; 
// REMOVED: import { motion } from 'framer-motion'; 
// Motion is not used directly in this file as AnimatedSection handles animations.

import { useState, useEffect } from 'react';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number; // 1-100
  }[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const skills: Skill[] = [
  {
    category: "Frontend Development",
    items: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Django", level: 90 },
      { name: "Wagtail CMS", level: 85 },
      { name: "Python", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "PHP/XAMPP", level: 75 },
    ],
  },
  {
    category: "ERP Development",
    items: [
      { name: "Odoo Development", level: 85 },
      { name: "Python/ORM", level: 85 },
      { name: "QWeb & OWL", level: 80 },
      { name: "XML & XPath", level: 80 },
    ],
  },
  {
    category: "Emerging Tech & Tools",
    items: [
      { name: "Machine Learning (scikit-learn, TensorFlow)", level: 70 },
      { name: "OpenCV (Object Recognition)", level: 70 },
      { name: "Blockchain (Document Verification)", level: 65 },
      { name: "Git & GitHub", level: 90 },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Team Collaboration", level: 90 },
      { name: "Problem Solving", level: 85 },
      { name: "Self-Learning & Research", level: 95 },
      { name: "Presentation & Communication", level: 80 },
      { name: "Time Management", level: 85 },
    ],
  }
];

const experiences: Experience[] = [
  {
    title: "Development Team Intern",
    company: "ZINGSA",
    period: "2023 - 2024",
    description: [
      "Developed company website using Django framework",
      "Created custom Odoo modules to enhance business operations",
      "Collaborated with development team on various web projects",
      "Gained hands-on experience in full-stack development"
    ],
    technologies: ["Django", "Python", "Odoo", "JavaScript", "HTML/CSS"]
  },
  {
    title: "Freelance Web & Software Developer",
    company: "Self-Employed",
    period: "2022 - Present",
    description: [
      "Developed custom web applications for various clients",
      "Built modern, responsive websites using Django, Next.js and React",
      "Created Python-based software solutions for automation and data processing",
      "Delivered end-to-end development services from design to deployment"
    ],
    technologies: ["Python", "Next.js", "React", "JavaScript", "TypeScript"]
  },
  {
    title: "AI/ML Enthusiast & Student Researcher",
    company: "Harare Institute of Technology",
    period: "2024 - Present",
    description: [
      "Built machine learning models such as Iris flower classification as part of learning projects",
      "Prototyping an object recognition tool using computer vision and AI",
      "Researching blockchain-based document verification and digital identity management"
    ],
    technologies: ["Python", "scikit-learn", "OpenCV", "TensorFlow", "Blockchain"]
  }
];

const education: Education[] = [
  {
    degree: "Bachelor of Information Technology Honours Degree",
    institution: "Harare Institute of Technology (HIT)",
    period: "2022 - Present",
    description: "Focused on software engineering, web development and emerging technologies such as AI and blockchain."
  },
  {
    degree: "High School Certificate (Advanced Level)",
    institution: "Silveira High School",
    period: "2020 - 2021",
    description: "Majored in Mathematics, Physics and Geography, with a strong foundation in analytical and problem-solving skills."
  }
];

const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }, delay: number }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(skill.level);
    }, delay * 100);
    
    return () => clearTimeout(timer);
  }, [skill.level, delay]);

  return (
    <div>
      <div className="flex justify-between text-sm text-gray-300 mb-1">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {children}
    </div>
  );
};

export default function About() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate software developers with expertise in full-stack development,
              creating scalable solutions and delivering exceptional user experiences.
            </p>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection delay={200}>
          <div className="mb-20">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-12 text-center">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillCategory, categoryIndex) => (
                <div
                  key={skillCategory.category}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <h4 className="text-xl font-semibold text-white mb-6 text-center border-b border-gray-600 pb-2">
                    {skillCategory.category}
                  </h4>
                  <div className="space-y-4">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <SkillBar 
                        key={skill.name} 
                        skill={skill} 
                        delay={categoryIndex * 2 + skillIndex + 5} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection delay={400}>
          <div className="mb-20">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-12 text-center">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((experience) => ( // 'index' parameter removed from here
                <div
                  key={experience.title}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="flex flex-wrap justify-between items-start mb-6">
                    <div>
                      <h4 className="text-2xl font-semibold text-white mb-2">
                        {experience.title}
                      </h4>
                      <p className="text-lg text-blue-400 font-medium">{experience.company}</p>
                    </div>
                    <span className="text-gray-400 bg-gray-700/50 px-4 py-2 rounded-full text-sm">
                      {experience.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2 text-lg">
                    {experience.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-blue-300 rounded-full border border-blue-500/30 hover:border-blue-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection delay={600}>
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-12 text-center">
              Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu) => ( // 'index' parameter removed from here
                <div
                  key={edu.degree}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <h4 className="text-xl font-semibold text-white mb-3 leading-tight">
                    {edu.degree}
                  </h4>
                  <p className="text-green-400 mb-3 font-medium text-lg">{edu.institution}</p>
                  <p className="text-gray-400 mb-4 bg-gray-700/50 px-3 py-1 rounded-full inline-block text-sm">
                    {edu.period}
                  </p>
                  <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}