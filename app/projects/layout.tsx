import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Sukka',
  description: 'List of projects that I am proud of.',
}

export default function ProjectsLayout({
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