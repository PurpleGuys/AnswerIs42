export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="text-sm text-white/40 font-mono">
          © {new Date().getFullYear()} Answer is 42
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <a href="mailto:contact@answeris42.com" className="text-sm text-white/60 hover:text-white transition-colors">
            contact@answeris42.com
          </a>
          <span className="text-sm text-white/20 select-none">LinkedIn</span>
        </div>
      </div>
    </footer>
  );
}
