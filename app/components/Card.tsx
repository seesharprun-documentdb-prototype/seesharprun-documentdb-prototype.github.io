import { JSX } from 'react';
import { Post } from '../types/Post';

export function BlogCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const icons: Record<string, JSX.Element> = {
    'microsoft-open-source-blog': (
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    ),
    'aws-blog': (
      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
    ),
    'azure-cosmos-db-blog': (
      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
    ),
    'yugabytedb-blog': (
      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
    ),
  };

  const icon = icons[post.category as keyof typeof icons];

  const styles = {
    'microsoft-open-source-blog': {
      label: 'Microsoft Open Source Blog',
      timestamp: 'August 25, 2025',
      gradientFrom: 'blue-500',
      gradientTo: 'blue-600',
      textColor: 'blue-400',
      hoverColor: 'blue-300',
      bgGradient: 'from-blue-500/10 to-purple-500/10',
      borderHover: 'border-blue-500/50',
    },
    'aws-blog': {
      label: 'AWS Blogs',
      timestamp: 'Recent',
      gradientFrom: 'orange-500',
      gradientTo: 'orange-600',
      textColor: 'orange-400',
      hoverColor: 'orange-300',
      bgGradient: 'from-orange-500/10 to-amber-500/10',
      borderHover: 'border-orange-500/50',
    },
    'azure-cosmos-db-blog': {
      label: 'Azure Cosmos DB Blog',
      timestamp: 'Recent',
      gradientFrom: 'purple-500',
      gradientTo: 'purple-600',
      textColor: 'purple-400',
      hoverColor: 'purple-300',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      borderHover: 'border-purple-500/50',
    },
    'yugabytedb-blog': {
      label: 'YugabyteDB Blog',
      timestamp: 'Partner Content',
      gradientFrom: 'green-500',
      gradientTo: 'green-600',
      textColor: 'green-400',
      hoverColor: 'green-300',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      borderHover: 'border-green-500/50',
    },
  };

  const style = styles[post.category as keyof typeof styles];

  const tagColors = [
    'bg-blue-500/20 text-blue-400',
    'bg-purple-500/20 text-purple-400',
    'bg-green-500/20 text-green-400',
    'bg-orange-500/20 text-orange-400',
  ];

  return (
    <article className="group relative">
      <div className={`absolute inset-0 bg-gradient-to-r ${style.bgGradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`}></div>
      <div className={`relative bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-700/50 hover:${style.borderHover} transition-all duration-500 group-hover:transform ${featured ? 'group-hover:scale-[1.02]' : 'group-hover:scale-105 h-full'} overflow-hidden`}>
        <div className={featured ? 'p-8' : 'p-6'}>
          <div className="flex items-center space-x-3 mb-4">
            <div className={`${featured ? 'w-10 h-10' : 'w-8 h-8'} bg-gradient-to-br from-${style.gradientFrom} to-${style.gradientTo} rounded-lg flex items-center justify-center`}>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                {icon}
              </svg>
            </div>
            <div>
              <span className={`text-${style.textColor} text-sm font-medium`}>
                {style.label}
              </span>
              <p className="text-gray-500 text-xs">{style.timestamp}</p>
            </div>
          </div>

          <h2 className={`${featured ? 'text-2xl sm:text-3xl mb-4' : 'text-xl mb-3'} font-bold text-white group-hover:text-${style.hoverColor} transition-colors`}>
            {post.title}
          </h2>

          <p className={`text-gray-400 ${featured ? 'mb-6' : 'mb-4 text-sm'} leading-relaxed`}>
            {post.description}
          </p>

          <div className={`flex flex-wrap gap-2 ${featured ? 'mb-6' : 'mb-4'}`}>
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className={`${featured ? 'px-3 py-1 font-medium' : 'px-2 py-1'} ${tagColors[index % tagColors.length]} rounded-full text-xs`}
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={post.uri}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center text-${style.textColor} hover:text-${style.hoverColor} transition-colors font-medium ${featured ? '' : 'text-sm'}`}
          >
            {featured ? 'Read full article' : 'Read more'}
            <svg
              className={`${featured ? 'w-4 h-4 ml-2' : 'w-3 h-3 ml-1'} group-hover:translate-x-1 transition-transform`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
