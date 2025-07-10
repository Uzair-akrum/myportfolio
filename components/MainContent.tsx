'use client'
import Link from 'next/link'
import { FaBlog, FaGithub, FaTelegram, FaTwitter } from 'react-icons/fa'
import { SiMastodon, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiPostgresql, SiDocker } from 'react-icons/si'

export default function MainContent() {
  return (
    <main className="flex-1 p-10 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Hello,<br />
          I&apos;m <span className="text-purple-400">Uzair</span> <span className="text-gray-400 text-2xl">/ˈsʊkə/</span>
        </h1>
        <p className="mb-6">Full Stack Developer  / Blogger</p>

        <div className="space-x-4 mb-10">
          <Link href="/blogs" className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 inline-flex items-center">
            <FaBlog className="mr-2" /> Blog
          </Link>
          <Link href="#" className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 inline-flex items-center">
            <FaGithub className="mr-2" /> GitHub
          </Link>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-4">
            <TechIcon icon={SiNextdotjs} name="Next.js" />
            <TechIcon icon={SiTypescript} name="TypeScript" />
            <TechIcon icon={SiNodedotjs} name="Node.js" />
            <TechIcon icon={SiMongodb} name="MongoDB" />
            <TechIcon icon={SiPostgresql} name="PostgreSQL" />
            <TechIcon icon={SiDocker} name="Docker" />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">I am</h2>
          <ul className="list-disc list-inside">
            <li>Full Stack Developer</li>
            <li>Team member of RSSHub</li>
            <li>Founder of OpenIPDB</li>
            <li>Active contributor of Next.js, htmlnano, and many more.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">About me</h2>
          <p className="mb-4">
            I am a self-taught coder who is passionate about open source. I have created 1152 Pull
            Requests toward 142 repositories, gained 3286 followers, and earned 8828 stars on
            GitHub.
          </p>
          <p className="mb-4">
            Besides contributing to the open source community, I am also a minimalist obsessed
            with the idea of speed and lightweight.
          </p>
          <p>
            Outside of coding, I am a fan of railway, aviation, and mechanical engineering. I also
            enjoy watching documentaries, animes, and movies, playing sandbox / tower-defense
            video games, and reading sci-fi novels by Jules Verne.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Find me at</h2>
          <div className="flex flex-wrap gap-2">
            <SocialLink icon={FaGithub} name="GITHUB" />
            <SocialLink icon={FaTelegram} name="TELEGRAM" />
            <SocialLink icon={FaTwitter} name="TWITTER" />
            <SocialLink icon={SiMastodon} name="MASTODON" />

          </div>
        </section>

      </div>
    </main>
  )
}

function SocialLink({ icon: Icon, name }: { icon: React.ElementType, name: string }) {
  return (
    <a href="#" className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700 flex items-center space-x-2">
      <Icon />
      <span>{name}</span>
    </a>
  )
}

function TechIcon({ icon: Icon, name }: { icon: React.ElementType, name: string }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="bg-gray-800 p-3 rounded-full transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:bg-gray-700 relative overflow-hidden">
        <Icon className="text-3xl relative z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300 animate-gradient-x"></div>
      </div>
      <span className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{name}</span>
    </div>
  )
}