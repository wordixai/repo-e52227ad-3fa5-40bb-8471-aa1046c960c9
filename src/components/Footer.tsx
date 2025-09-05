const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-center items-center flex-wrap gap-3">
          <a 
            href="https://www.geekbang.org/" 
            rel="noopener noreferrer" 
            target="_blank"
            className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
          >
            极客邦科技
          </a>
          <span className="text-gray-300">|</span>
          <a 
            href="https://www.geekbang.org/aboutus" 
            rel="noopener noreferrer" 
            target="_blank"
            className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
          >
            关于我们
          </a>
          <span className="text-gray-300">|</span>
          <a 
            href="/faq"
            className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
          >
            常见问题
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;