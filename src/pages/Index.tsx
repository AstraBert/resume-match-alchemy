
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkflowSection from "@/components/WorkflowSection";
import GithubSection from "@/components/GithubSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WorkflowSection />
        <GithubSection />
        
        <footer className="py-10 bg-[#161a25] border-t border-[#2a2f3c]">
          <div className="container mx-auto text-center">
            <p className="text-gray-400 mb-4">© {new Date().getFullYear()} Match-Your-Resume.fyi</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-[#9b87f5]">Privacy Policy</a>
              <a href="#" className="hover:text-[#9b87f5]">Terms of Service</a>
              <a href="#" className="hover:text-[#9b87f5]">Contact</a>
              <a href="https://github.com/AstraBert/resume-matcher" target="_blank" rel="noopener noreferrer" className="hover:text-[#9b87f5]">GitHub</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
