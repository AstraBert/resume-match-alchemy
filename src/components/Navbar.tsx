
import { Github, LogIn, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#1A1F2C]/90 backdrop-blur-sm border-b border-[#1A1F2C] py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              <span className="text-[#9b87f5]">M</span>atch-<span className="text-[#9b87f5]">Y</span>our-<span className="text-[#9b87f5]">R</span>esume
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
          <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
          <Link to="/support" className="text-gray-300 hover:text-white transition-colors">Support</Link>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com/AstraBert/resume-matcher" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="text-gray-300 hover:text-white gap-2">
              <Star className="h-4 w-4" />
              <span className="hidden sm:inline">Star on GitHub</span>
            </Button>
          </a>
          <a href="https://app.match-your-resume.fyi" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              <LogIn className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Log in</span>
            </Button>
          </a>
          <a href="https://register.match-your-resume.fyi" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
              Sign up
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
