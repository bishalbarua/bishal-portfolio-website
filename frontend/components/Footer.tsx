import { Mail, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      name: 'Email',
      href: 'mailto:baruabishal123@gmail.com',
      icon: Mail
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bishalbarua/',
      icon: ExternalLink
    },
    {
      name: 'Fiverr',
      href: 'https://www.fiverr.com/bishalbarua',
      icon: ExternalLink
    },
    {
      name: 'Upwork',
      href: 'https://www.upwork.com/freelancers/~012f13b9ab484f9c34',
      icon: ExternalLink
    },
    {
      name: 'Behance',
      href: 'https://www.behance.net/bishalbarua/',
      icon: ExternalLink
    }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Bishal Barua</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI-Driven Marketing Expert & Project Manager helping businesses achieve 
              exceptional growth through innovative strategies and cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="/" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                Home
              </a>
              <a href="/about" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                About
              </a>
              <a href="/projects" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                Projects
              </a>
              <a href="/contact" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-400 hover:text-orange-400 text-sm transition-colors"
                >
                  <link.icon className="h-4 w-4 mr-2" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Bishal Barua. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-orange-400" /> for your business growth
          </p>
        </div>
      </div>
    </footer>
  );
}
