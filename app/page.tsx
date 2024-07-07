import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import { ModeToggle } from "@/components/toggle-mode";
import { UserButton } from "@clerk/nextjs";

const PublicRoute = () => {
  return (
    <div>
      <Sidebar />
      <MobileNav />

      {/* <video
        src="/assets/videos/ai2.mp4"
        className="h-[100vh] sm:bg-black "
        loop
        autoPlay
        muted
        style={{ zIndex: "30" }}
      ></video> */}
    </div>
  );
};

export default PublicRoute;
