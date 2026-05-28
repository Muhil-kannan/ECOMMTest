import React from 'react';
import { Facebook, Twitter, Instagram, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'New Arrivals', href: '#' },
        { name: 'Best Sellers', href: '#' },
        { name: 'Sale', href: '#' },
        { name: 'All Products', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Shipping Policy', href: '#' },
        { name: 'Returns & Exchanges', href: '#' },
        { name: 'FAQs', href: '#' },
        { name: 'Contact Us', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-1">
            <a href="/" className="text-xl font-bold tracking-tight text-slate-900 mb-4 block">
              ECOMM<span className="text-blue-600">SITE</span>
            </a>
            <p className="text-sm text-slate-500 mb-6 max-w-xs">
              Elevating your lifestyle with premium products and exceptional service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © {currentYear} ECOMMSITE Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Mail size={14} />
            <span>support@ecommsite.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
