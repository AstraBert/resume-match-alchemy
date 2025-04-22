import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Navbar />
      <div className="container mx-auto flex flex-col items-center justify-center pt-40">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-[#9b87f5]">404</h1>
          <p className="text-2xl text-white mb-4">Oops! We couldn't find that page</p>
          <p className="text-gray-300 mb-8 max-w-lg">The page you're looking for doesn't seem to exist. It might have been moved or deleted.</p>
          <a href="/">
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-6">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
