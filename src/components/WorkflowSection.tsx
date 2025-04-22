
import { FileSearch, Globe, Search, Check } from "lucide-react";

const WorkflowStep = ({ icon: Icon, title, description, color }: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  color: string;
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-[#1A1F2C]/60 backdrop-blur-sm rounded-lg border border-[#1A1F2C]">
      <div className={`rounded-full p-4 mb-4 ${color}`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
};

const WorkflowSection = () => {
  return (
    <section className="py-20 bg-[#161a25]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          AI-Powered <span className="text-[#9b87f5]">Resume Matching</span> Workflow
        </h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Our advanced AI technology processes your resume through a sophisticated workflow to find the best job matches for your skills and experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <WorkflowStep 
            icon={FileSearch} 
            title="Resume Extraction" 
            description="🦙 LlamaExtract parses your resume and extracts valuable data that represent your profile"
            color="bg-[#9b87f5]"
          />
          <WorkflowStep 
            icon={Search} 
            title="Job Matching" 
            description="🗄️ The structured data are passed to a Job Matching Agent (built with LlamaIndex) that builds a web search query based on your resume"
            color="bg-[#7E69AB]"
          />
          <WorkflowStep 
            icon={Globe} 
            title="Web Search" 
            description="🌐 The web search is handled by Linkup, which finds the top matches and returns them to the Agent"
            color="bg-[#9b87f5]"
          />
          <WorkflowStep 
            icon={Check} 
            title="Evaluation" 
            description="🔎 The agent evaluates the match between your profile and the jobs, and then returns a final answer to you"
            color="bg-[#7E69AB]"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
