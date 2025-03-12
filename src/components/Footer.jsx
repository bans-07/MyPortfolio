function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4 text-center mt-8">
        <p>© 2025 My Portfolio | Connect with me:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://stackoverflow.com/users/yourid" target="_blank" rel="noopener noreferrer">
            Stack Overflow
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  