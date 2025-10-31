import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © 2025 IT LOGIC LABS | All Rights Reserved
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/sirajlekhak/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
