export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center">
          <p className="text-muted-foreground mb-6 text-sm sm:text-base">&copy; 2024 DevBlog. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a 
              href="https://github.com" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://twitter.com" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}