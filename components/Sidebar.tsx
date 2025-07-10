'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome, FaCode, FaPencilAlt, FaUsers, FaShieldAlt, FaGithub, FaTelegram, FaTwitter, FaSteam, FaFacebook, FaKeybase, FaExternalLinkAlt, FaBars } from 'react-icons/fa'
import { useState } from 'react'

const menuItems = [
  { name: 'Home', icon: FaHome, href: '/' },
  { name: 'Projects', icon: FaCode, href: '/projects' },
  { name: 'Writings', icon: FaPencilAlt, href: '/blogs' },
  { name: 'Friends', icon: FaUsers, href: '/friends' },
  { name: 'Privacy Policy', icon: FaShieldAlt, href: '/privacy-policy' },
]

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/yourusername' },
  { name: 'Telegram', icon: FaTelegram, href: 'https://t.me/yourusername' },
  { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com/yourusername' },
  { name: 'Steam', icon: FaSteam, href: 'https://steamcommunity.com/id/yourusername' },
  { name: 'Facebook', icon: FaFacebook, href: 'https://facebook.com/yourusername' },
  { name: 'Keybase', icon: FaKeybase, href: 'https://keybase.io/yourusername' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className="fixed top-4 left-4 z-20 md:hidden bg-gray-800 p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars className="text-white" />
      </button>
      <aside className={`w-64 bg-black text-white flex flex-col h-screen border-r border-gray-800 fixed left-0 top-0 overflow-y-auto z-10 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <h1 className="text-xl font-semibold p-4 border-b border-gray-800">Sukka</h1>
        <nav className="flex-grow">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-2 hover:bg-gray-900 ${pathname === item.href ? 'bg-gray-900 text-white' : ''}`}
            >
              <item.icon className="mr-3 text-lg" /> {item.name}
            </Link>
          ))}
          <h2 className="text-xs uppercase text-gray-800 px-4 py-2 mt-4">Online</h2>
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-900"
            >
              <span className="flex items-center">
                <link.icon className="mr-3 text-lg" /> {link.name}
              </span>
              <FaExternalLinkAlt className="text-xs" />
            </Link>
          ))}
        </nav>
        <div className="text-xs text-gray-800 p-4 border-t border-gray-800">
          © 2018 - 2024 Uzair<br />
          All rights reserved.
        </div>
      </aside>
    </>
  )
}