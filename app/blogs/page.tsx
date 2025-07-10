import Blog from "@/components/Blogs";
import Sidebar from "@/components/Sidebar";


export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />

      <Blog />

    </div>
  )
}