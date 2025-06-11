'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the type for a single node in the neural network visualization
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

// Define the type for a line connecting two nodes
interface Line {
  node1: Node;
  node2: Node;
  distance: number;
}

interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  icon: string; // Using emoji as placeholder, can be replaced with actual icons
}

const services: ServiceDetail[] = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end web application development with modern technologies and best practices. From concept to deployment, I create scalable and maintainable solutions that drive business growth.",
    features: [
      "Custom web application development",
      "Progressive Web Apps (PWA)",
      "API development and integration",
      "Database design and optimization",
      "Performance optimization",
      "Security implementation"
    ],
    deliverables: [
      "Production-ready web application",
      "Complete source code",
      "API documentation",
      "Database schema",
      "Deployment configuration",
      "User and technical documentation"
    ],
    timeline: "8-12 weeks typical timeline, varies by project scope",
    icon: "🌐"
  },
  {
    title: "Odoo Development",
    description: "Specialized in custom Odoo module development and implementation. From business-specific modules to complex integrations, I help organizations maximize their Odoo ERP potential.",
    features: [
      "Custom Odoo module development",
      "Odoo ERP customization",
      "Module integration with existing systems",
      "Business process automation",
      "Custom report development",
      "Data migration and synchronization"
    ],
    deliverables: [
      "Custom Odoo modules",
      "Technical documentation",
      "User training materials",
      "Integration specifications",
      "Test reports and scenarios",
      "Deployment and upgrade guides"
    ],
    timeline: "4-8 weeks typical timeline for custom modules, varies by complexity",
    icon: "⚡"
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications that provide native-like experience. Using React Native and other modern frameworks to build high-performance mobile solutions.",
    features: [
      "Cross-platform development",
      "Native feature integration",
      "Push notifications",
      "App store deployment",
      "Analytics integration"
    ],
    deliverables: [
      "iOS and Android applications",
      "Source code",
      "App store assets",
      "API integration documentation",
      "User guide",
      "Analytics dashboard"
    ],
    timeline: "10-14 weeks typical timeline, varies by complexity",
    icon: "📱"
  },
  {
    title: "Technical Consultation",
    description: "Expert guidance on technical architecture, technology selection, and implementation strategies. Help teams make informed decisions and implement best practices.",
    features: [
      "Architecture review and design",
      "Technology stack selection",
      "Code review and optimization",
      "Performance assessment",
      "Security audit",
      "Team training and mentoring"
    ],
    deliverables: [
      "Detailed architecture documentation",
      "Technology recommendations",
      "Implementation roadmap",
      "Best practices guide",
      "Training materials",
      "Regular progress reports"
    ],
    timeline: "Flexible engagement, from one-time consultation to ongoing support",
    icon: "💡"
  },
  {
    title: "Custom Software Solutions",
    description: "Tailored software solutions designed to address specific business challenges. From automation tools to complex enterprise systems.",
    features: [
      "Requirements analysis",
      "Custom software development",
      "System integration",
      "Data migration",
      "Automated testing",
      "Maintenance and support"
    ],
    deliverables: [
      "Custom software solution",
      "Source code and documentation",
      "Test reports",
      "Deployment guide",
      "Training sessions",
      "Support documentation"
    ],
    timeline: "12-16 weeks typical timeline, varies by project requirements",
    icon: "⚙️"
  }
];

// Neural Network Visualization Component
const NeuralNetworkVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null); 
  // FIX: Explicitly type nodes and lines
  const nodes = useRef<Node[]>([]); 
  const lines = useRef<Line[]>([]); 
  const mouse = useRef({ x: 0, y: 0, radius: 100 }); // Mouse influence radius

  const initNodes = useCallback((canvas: HTMLCanvasElement) => {
    const numNodes = 50; // Number of nodes in the network
    nodes.current = Array.from({ length: numNodes }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5, // Reduced velocity for subtler movement
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 0.5, // Smaller nodes
      color: `rgba(0, 191, 255, ${Math.random() * 0.5 + 0.2})`, // Blueish-green
    }));
  }, []);

  const updateAndDraw = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    nodes.current.forEach(node => {
      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off walls
      if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
      if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

      // Mouse repulsion/attraction (subtle)
      const dx = node.x - mouse.current.x;
      const dy = node.y - mouse.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouse.current.radius) {
        const force = (mouse.current.radius - dist) / mouse.current.radius;
        node.x += dx * force * 0.01; // Weaker repulsion
        node.y += dy * force * 0.01;
      }

      // Draw node
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.fill();
    });

    // Draw lines between nearby nodes
    lines.current = [];
    for (let i = 0; i < nodes.current.length; i++) {
      for (let j = i + 1; j < nodes.current.length; j++) {
        const node1 = nodes.current[i];
        const node2 = nodes.current[j];
        const distance = Math.sqrt(
          Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)
        );

        const maxDistance = 150; // Maximum distance for a line to be drawn
        if (distance < maxDistance) {
          lines.current.push({ node1, node2, distance });

          ctx.beginPath();
          ctx.moveTo(node1.x, node1.y);
          ctx.lineTo(node2.x, node2.y);
          ctx.strokeStyle = `rgba(0, 191, 255, ${1 - distance / maxDistance})`; // Fade lines
          ctx.lineWidth = 0.5; // Thinner lines
          ctx.stroke();
        }
      }
    }

    animationFrameId.current = requestAnimationFrame(() => updateAndDraw(ctx, canvas));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initNodes(canvas); // Reinitialize nodes on resize
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial resize

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Start animation
    animationFrameId.current = requestAnimationFrame(() => updateAndDraw(ctx, canvas));

    return () => {
      // FIX: Check if animationFrameId.current is a number before cancelling
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [initNodes, updateAndDraw]);

  return (
    <div className="relative w-full h-full bg-transparent overflow-hidden rounded-xl">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h3 className="text-4xl md:text-6xl font-extrabold gradient-text bg-clip-text text-transparent bg-gradient-to-r from-[#00bfff] to-[#00ffcc] opacity-90">
          XeroTech {/* Consider changing this to your actual brand name if XeroTech is a placeholder */}
        </h3>
      </div>
    </div>
  );
};


export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <section className="py-20 bg-[#0a0a0a] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView for scroll-triggered animation
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} // Ensures animation only plays once
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional software development services tailored to your needs.
            From concept to deployment, I deliver high-quality solutions that drive results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }} // Ensures animation only plays once
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{service.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <button
                    className="text-[#00bfff] hover:text-[#00bfff]/80 transition-colors duration-300"
                    onClick={() => setSelectedService(service)} // This button will open the modal
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
          transition={{ duration: 0.6, delay: services.length * 0.1 + 0.2 }}
          viewport={{ once: true }} // Ensures animation only plays once
          className="relative w-full h-[300px] md:h-[400px] bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700/50"
        >
          <NeuralNetworkVisualizer />
        </motion.div>

        {/* Service Details Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{selectedService.icon}</span>
                      <h3 className="text-2xl font-bold text-white">
                        {selectedService.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="bg-gray-700/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-600/50 transition-colors duration-300"
                      aria-label="Close service details" // Added for accessibility
                    >
                      ✕
                    </button>
                  </div>

                  <p className="text-gray-300 mb-8">
                    {selectedService.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Features & Services
                      </h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        {selectedService.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Deliverables
                      </h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        {selectedService.deliverables.map((deliverable, index) => (
                          <li key={index}>{deliverable}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Timeline
                    </h4>
                    <p className="text-gray-300">
                      {selectedService.timeline}
                    </p>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-3 bg-[#00bfff] text-white rounded-lg hover:bg-[#00bfff]/80 transition-colors duration-300"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}