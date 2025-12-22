import React from "react";

function Footer() {
  return (
    <footer className="py-6 md:py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs md:text-sm text-gray-500">
        <p>© 2024 Susmitha Gopireddy. All rights reserved.</p>
        <p>Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;