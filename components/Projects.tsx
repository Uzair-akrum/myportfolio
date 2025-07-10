import React from 'react';
import { FaReact, FaJs, FaGlobe, FaChrome, FaGithub, FaTerminal, FaBlog } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiReact } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';

interface Project {
  title: string;
  description: string;
  icons: React.ReactNode[];
  externalLink?: boolean;
  githubLink?: boolean;
  blogLink?: boolean;  // New property
  type: 'professional' | 'personal';
}

const projects: Project[] = [
  {
    title: "Forth Group",
    description: "A property management software designed to streamline and automate the various tasks involved in managing rental properties",
    icons: [<SiReact key="react" />, <SiTypescript key="ts" />],
    blogLink: true,  // Added blogLink
    type: 'professional',
  },
  {
    title: "Check My IP Address",
    description: "Find out your IP address, local DNS setup, Network connectivity, CDN availability, and more",
    icons: [<SiNextdotjs key="next" />, <FaJs key="js" />],
    externalLink: true,
    type: 'professional',
  },
  {
    title: "Sukka's Lab",
    description: "My Lab for proof of concepts and experimenting web technologies",
    icons: [<SiNextdotjs key="next" />, <FaJs key="js" />],
    externalLink: true,
    type: 'professional',
  },
  {
    title: "Browser & Network Debug",
    description: "Collect debug information of your IP, DNS, Browser, Network connection, etc.",
    icons: [<FaChrome key="chrome" />, <FaJs key="js" />, <FaReact key="react" />],
    externalLink: true,
    type: 'professional',
  },

  {
    title: "DisqusJS",
    description: "Render a lightweight Disqus comments list from Disqus RESTful API",
    icons: [<SiNextdotjs key="next" />, <FaJs key="js" />, <FaGlobe key="web" />],
    githubLink: true,
    type: 'professional', // Changed to 'professional'
  },
  {
    title: "Nali CLI",
    description: "Get geolocation information of IP Address in stdout/stderr without leaving your terminal",
    icons: [<FaTerminal key="terminal" />, <FaJs key="js" />, <SiTypescript key="ts" />],
    githubLink: true,
    type: 'professional', // Changed to 'professional'
  },
  {
    title: "cloudflare-workers-async-goo...",
    description: "An extremely light weight, asynchronous Google Analytics implementation built on top of Cloudflare",
    icons: [<FaJs key="js" />],
    githubLink: true,
    type: 'professional', // Changed to 'professional'
  },
  {
    title: "vercel-dns-console",
    description: "An unofficial implementation of Vercel DNS dashboard, built with Next.js & SWR",
    icons: [<SiNextdotjs key="next" />, <SiTypescript key="ts" />],
    githubLink: true,
    type: 'professional', // Changed to 'professional'
  },
  {
    title: "rollup-plugin-swc",
    description: "Use SWC with Rollup to transform ESNext/TypeScript code",
    icons: [<FaTerminal key="terminal" />, <SiTypescript key="ts" />],
    githubLink: true,
    type: 'professional', // Changed to 'professional'
  },

  {
    title: "hexo-theme-doku",
    description: "A Hexo theme designed for documentations",
    icons: [<FaChrome key="chrome" />, <FaJs key="js" />, <FaReact key="react" />],
    githubLink: true,
    type: 'personal',
  },
];

export default function Projects() {
  const professionalProjects = projects.filter(project => project.type === 'professional');
  const personalProjects = projects.filter(project => project.type === 'personal');

  return (
    <div className="bg-black text-white p-8 max-w-8xl  max-w-full md:ml-64">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Projects</h2>
          <HiOutlineExternalLink className="text-2xl" />
        </div>
        <p className="text-gray-400 mb-6">List of projects that I am proud of.</p>

        <h3 className="text-2xl font-semibold mb-4">Professional</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {professionalProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-4 flex flex-col justify-between
                         transition-all duration-300 ease-in-out
                         hover:scale-105 hover:shadow-lg
                         cursor-pointer
                         hover:bg-gradient-to-br from-blue-500 to-purple-600
                         hover:animate-gradient-xy"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold flex items-center">
                    {project.title}
                    <span className="ml-2 flex space-x-1">
                      {project.icons.map((icon, i) => (
                        <span key={i} className="text-gray-400">{icon}</span>
                      ))}
                    </span>
                  </h3>
                  {project.externalLink && <FaGlobe className="text-gray-400" />}
                  {project.githubLink && <FaGithub className="text-gray-400" />}
                  {project.blogLink && <FaBlog className="text-gray-400" />}  {/* Added blog icon */}
                </div>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4">Personal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personalProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-4 flex flex-col justify-between
                         transition-all duration-300 ease-in-out
                         hover:scale-105 hover:shadow-lg
                         cursor-pointer
                         hover:bg-gradient-to-br from-blue-500 to-purple-600
                         hover:animate-gradient-xy"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold flex items-center">
                    {project.title}
                    <span className="ml-2 flex space-x-1">
                      {project.icons.map((icon, i) => (
                        <span key={i} className="text-gray-400">{icon}</span>
                      ))}
                    </span>
                  </h3>
                  {project.externalLink && <FaGlobe className="text-gray-400" />}
                  {project.githubLink && <FaGithub className="text-gray-400" />}
                  {project.blogLink && <FaBlog className="text-gray-400" />}  {/* Added blog icon */}
                </div>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}