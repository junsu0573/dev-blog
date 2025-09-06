export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-8">
        <header>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About</h1>
          <p className="text-xl text-gray-600">
            {`Hello! I'm a passionate web developer who loves sharing knowledge and experiences.`}
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who I Am</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {`I'm a full-stack developer with a passion for modern web
            technologies. I enjoy building scalable applications using React,
            Next.js, TypeScript, and Node.js. This blog is where I share my
            learnings, tutorials, and thoughts on web development.`}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What I Do</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Full-stack web development with modern technologies
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Building responsive and accessible user interfaces
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              API design and backend development
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Database design and optimization
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              DevOps and deployment strategies
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Backend</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Node.js</li>
                <li>Express</li>
                <li>Prisma</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Database</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>SQLite</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            Get in Touch
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {`I'm always interested in connecting with fellow developers and
            discussing new ideas. Feel free to reach out if you'd like to
            collaborate on a project or just chat about tech!`}
          </p>

          <div className="flex space-x-6 mt-6">
            <a
              href="mailto:hello@example.com"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Email
            </a>
            <a
              href="https://github.com"
              className="text-blue-600 hover:text-blue-800 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-600 hover:text-blue-800 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-600 hover:text-blue-800 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
