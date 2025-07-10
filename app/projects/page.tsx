import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";


export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <Projects />
    </div>
  )
}