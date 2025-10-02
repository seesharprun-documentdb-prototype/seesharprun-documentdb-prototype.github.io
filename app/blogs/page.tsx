import { getAllPosts } from '../services/blogService';
import { Card } from '../components/Card';
import { Post } from '../types/Post';

export default function Blogs() {
  const posts: Post[] = getAllPosts();
  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-neutral-900 relative overflow-hidden">
      {/* Artistic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-32 right-32 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-36 h-36 bg-orange-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-3 h-3 bg-green-400 rounded-full opacity-50 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "2.5s" }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Latest from our Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Insights, updates, and deep dives into the world of document databases and open-source innovation
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto rounded-full"></div>
        </div>


        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-12 mb-12">
          {/* Featured Posts */}
          {featuredPosts.map((post, index) => (
            <Card key={index} post={post} featured={true} />
          ))}

          {/* Regular Posts */}
          {regularPosts.map((post, index) => (
            <Card key={index} post={post} featured={false} />
          ))}
        </div>
      </div>
    </div>
  );
}