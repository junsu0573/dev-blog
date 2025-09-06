import Link from 'next/link'

export default function Home() {
  const recentPosts = [
    {
      id: '1',
      title: 'Getting Started with Next.js 15',
      summary: 'Learn about the new features and improvements in Next.js 15.',
      slug: 'getting-started-nextjs-15',
      publishedAt: '2024-01-15',
      category: 'React'
    },
    {
      id: '2',
      title: 'TypeScript Best Practices in 2024',
      summary: 'Discover the latest TypeScript best practices and patterns.',
      slug: 'typescript-best-practices-2024',
      publishedAt: '2024-01-10',
      category: 'TypeScript'
    },
    {
      id: '3',
      title: 'Building APIs with Prisma and PostgreSQL',
      summary: 'A comprehensive guide to building robust APIs.',
      slug: 'building-apis-prisma-postgresql',
      publishedAt: '2024-01-05',
      category: 'Backend'
    }
  ]

  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="text-center py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight px-4">
          Welcome to DevBlog
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
          A place where I share my thoughts on web development, programming, and technology.
          Join me on this journey of continuous learning and growth.
        </p>
      </section>

      <section>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-10 space-y-4 sm:space-y-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Recent Posts</h2>
          <Link 
            href="/blog" 
            className="text-primary hover:text-primary/80 font-medium transition-colors duration-200 group self-start sm:self-auto"
          >
            View all posts 
            <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
        
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <article 
              key={post.id}
              className="group bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
                <span className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full self-start">
                  {post.category}
                </span>
                <time className="text-sm text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString('ko-KR')}
                </time>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="hover:underline decoration-primary underline-offset-4"
                >
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
                {post.summary}
              </p>
              
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-200 group/link"
              >
                Read more 
                <span className="ml-1 group-hover/link:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
