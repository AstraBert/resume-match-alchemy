
import { Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const GithubSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-8 bg-gradient-to-r from-[#1A1F2C] to-[#262c3b] rounded-lg border border-[#1A1F2C]">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-4">Open Source Project</h2>
            <p className="text-gray-300 mb-6">
              Match-Your-Resume is an open source project. We believe in transparency and community 
              collaboration. Star our repository on GitHub to stay updated with the latest features 
              and improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://github.com/AstraBert/resume-matcher" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-6">
                  <Star className="mr-2 h-5 w-5" />
                  Star on GitHub
                </Button>
              </a>
              <a href="https://github.com/sponsors/AstraBert" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10 px-6">
                  <Github className="mr-2 h-5 w-5" />
                  Sponsor
                </Button>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center w-full md:w-auto">
            <div className="bg-[#1A1F2C] p-2 rounded-lg border border-[#2a2f3c] shadow-xl">
              <div className="flex items-center gap-2 border-b border-[#2a2f3c] p-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-gray-400 text-sm ml-2">resume-matcher</div>
              </div>
              <div className="font-mono text-sm text-gray-300 p-4">
                <div className="text-blue-400">$ git clone https://github.com/AstraBert/resume-matcher.git</div>
                <div className="text-green-400">Cloning into 'resume-matcher'...</div>
                <div className="text-[#9b87f5]">$ cd resume-matcher</div>
                <div className="text-blue-400">$ docker compose up -d</div>
                <div className="text-green-400">Starting containers...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
