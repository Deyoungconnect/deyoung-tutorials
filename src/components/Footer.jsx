const Footer = () => {
  return (
    <footer className="bg-deyoung-dark-bg text-gray-300 py-12">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section - Using footer-specific font size */}
          <div>
            <h3 className="font-logo-footer text-white mb-3">
              Deyoung<span className="text-deyoung-terracotta">Tutorials</span>
            </h3>
            <p className="text-sm text-gray-400">Certified. Experienced. Global.</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-deyoung-terracotta transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-deyoung-terracotta transition-colors">About</a></li>
              <li><a href="#why-choose-us" className="hover:text-deyoung-terracotta transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-deyoung-terracotta transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Subjects</h4>
            <ul className="space-y-2 text-sm">
              <li>Biology / Basic Science</li>
              <li>Cambridge Science</li>
              <li>Coding & Web Dev</li>
              <li>English, Maths, Chemistry, Physics</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 07060771730 (Call/WhatsApp)</li>
              <li>✉️ deyoung_tutorials@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; 2026 Deyoung Tutorials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer