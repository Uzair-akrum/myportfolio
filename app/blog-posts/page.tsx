import BlogPost from "@/components/BlogPost";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";


export default function BlogPostsPage() {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <BlogPost />
    </div>
  )
}