"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Mock blog posts data (replace with actual data fetching logic)
  const blogPosts = [
    {
      id: 1,
      title: "I have special Surge configuration and usage tips",
      content: "I have been using Surge Mac as the core of my network for some time. Although Surge officially provides a \"recommended minimum configuration for Chinese users\", in order to fully tap the potential of Surge, fully recoup the price of Surge, and meet my complex needs, I added many custom configurations.",
      date: "2024-04-17",
      category: "Sharing Environment",
      image: "/path-to-blog-image.jpg"
    },
    {
      id: 1,
      title: "I have special Surge configuration and usage tips", 
      content: "I have been using Surge Mac as the core of my network for some time. Although Surge officially provides a \"recommended minimum configuration for Chinese users\", in order to fully tap the potential of Surge, fully recoup the price of Surge, and meet my complex needs, I added many custom configurations.",
      date: "2024-04-17",
      category: "Sharing Environment",
      image: "/path-to-blog-image.jpg"
    },
    // Add more blog posts...
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag);
    // You can add additional logic here, such as filtering blog posts by tag
  };

  return (
    <div className="flex flex-col md:flex-row bg-black text-white p-16 py-16 max-w-full md:ml-64">
      {/* Left Column */}
      <div className="w-full md:w-1/4 mb-4 md:mb-0 md:mr-4">
        {/* Popular tags */}
        <div className="bg-gray-800 rounded-lg p-4 md:sticky md:top-20">
          <h3 className="text-lg mb-2">Popular tags</h3>
          <div className="flex flex-wrap">
            {['JavaScript', 'macOS', 'React', 'NextJS', 'TypeScript'].map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`bg-gray-700 rounded px-2 py-1 text-sm mr-1 mb-1 transition-colors duration-300 hover:bg-gray-600 ${selectedTag === tag ? 'bg-blue-600 hover:bg-blue-700' : ''
                  }`}
              >
                # {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Column (Blog Posts) */}
      <div className="w-full md:w-1/2 mx-0 md:mx-4 mb-4 md:mb-0">
        {/* Search Bar */}
        <div className="mb-6 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full p-3 pl-10 pr-4 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {searchTerm && (
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
              onClick={() => setSearchTerm('')}
            >
              Clear
            </button>
          )}
        </div>

        {/* Blog Posts */}
        {filteredPosts.map(post => (
          <div key={post.id} className="bg-gray-800 rounded-lg p-4 mb-4">
            <Image
              src={post.image}
              alt="Blog post image"
              width={500}
              height={300}
              className="rounded-lg mb-4 w-full h-auto"
            />
            <h2 className="text-xl mb-2">{post.title}</h2>
            <p className="text-sm mb-2">{post.content}</p>
            <div className="flex flex-col sm:flex-row justify-between text-xs">
              <span className="mb-2 sm:mb-0">{post.date} · {post.category}</span>
              <a href="#" className="text-blue-400">Continue reading</a>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/4 md:ml-4">
        {/* Recent Articles */}
        <div className="bg-gray-800 rounded-lg p-4 mb-4 md:sticky md:top-20">
          <h3 className="text-lg mb-2">Recent Articles</h3>
          <ul>
            <li className="mb-2">
              <div className="text-xs text-gray-500">2024-04-17</div>
              <a href="#" className="text-sm hover:text-blue-400">I have special Surge configuration and usage tips</a>
            </li>
            {/* Add more recent articles */}
          </ul>
        </div>

        {/* Archive */}
        <div className="bg-gray-800 rounded-lg p-4 md:sticky md:top-64">
          <h3 className="text-lg mb-2">Archive</h3>
          <ul>
            <li className="flex justify-between mb-1">
              <span>2024</span>
              <span>3</span>
            </li>
            <li className="flex justify-between mb-1">
              <span>2023</span>
              <span>3</span>
            </li>
            {/* Add more archive years */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;