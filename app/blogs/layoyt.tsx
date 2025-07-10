import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs - Sukka',
  description: 'List of blogs that I am proud of.',
}

export default function BlogsLayout({
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