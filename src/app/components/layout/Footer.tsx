'use client';

import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            {/* Logo goes here */}
            <div className="mb-4">
              <Link href="/dashboard">
                <Image
                  src="/logo.png" 
                  alt="XeroTech Solutions Logo"
                  width={150} // Adjust width as needed
                  height={40} // Adjust height as needed
                  className="h-10 w-auto" // Tailwind classes for responsive sizing
                />
              </Link>
            </div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">XeroTech Solutions</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Software Developers & Web Developers passionate about creating innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                <a href="mailto:mujakutonde@gmail.com" className="hover:text-gray-900 dark:hover:text-white">
                  mujakutonde@gmail.com
                </a>
              </li>
              <li>
                <div className="flex space-x-4">
                  {/* Add your social media links here */}
                  <a href="https://github.com/mjkut" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/mujakutonde@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    LinkedIn
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {currentYear} XeroTech Softwares. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}