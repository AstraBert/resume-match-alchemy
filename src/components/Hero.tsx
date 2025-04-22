
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-radial from-[#7E69AB]/20 via-transparent to-transparent" style={{ zIndex: -1 }}></div>
      
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          AI <span className="text-[#9b87f5]">Resume</span> Matching<br />
          <span className="text-4xl md:text-6xl">Job Search <span className="text-[#9b87f5]">Without Limits</span></span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Meet Match-Your-Resume.fyi, the AI that finds your perfect job matches. 
          Your resume, your skills, your next opportunity. Use our powerful LlamaIndex-based 
          technology to find jobs that truly align with your experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="https://register.match-your-resume.fyi" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 text-lg">
              Sign Up
            </Button>
          </a>
          <a href="https://github.com/sponsors/AstraBert" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10 px-8 py-6 text-lg">
              <Github className="mr-2 h-5 w-5" />
              Support the project
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
