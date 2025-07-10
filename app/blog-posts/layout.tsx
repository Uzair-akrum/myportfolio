import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Posts - Sukka',
  description: 'List of blog posts that I am proud of.',
}

export default function BlogPostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}