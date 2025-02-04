import React from 'react';
import { featuredArticle } from '../../constants';
import { articles } from '../../constants';

const BlogPage = () => {

  return (
    <div className="font-sans p-5">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <div className="flex-2 text-center">
          <h2 className="text-xl md:text-2xl font-medium mb-3 max-w-2xl mx-auto">
            <a href={featuredArticle.link} className="text-black hover:underline">
              {featuredArticle.title}
            </a>
          </h2>
          <a href={featuredArticle.link}>
            <img 
              src={featuredArticle.image} 
              alt={featuredArticle.title} 
              className="w-full max-w-4xl max-h-[400px] object-cover rounded-lg"
            />
          </a>
        </div>
        <div className="flex-1 text-left">
          <p className="mb-4 text-sm md:text-base leading-relaxed max-w-xl text-gray-700">
            {featuredArticle.description}
          </p>
          <a 
            href={featuredArticle.link} 
            className="inline-block px-4 py-2 bg-gradient-to-r from-[#5c8d2f] to-[#215153] text-white rounded focus:outline-none focus:ring focus:ring-blue-300"
          >
            Saiba mais
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {articles.map((article, index) => (
          <a 
            key={index} 
            href={article.link} 
            className="border border-gray-300 rounded-lg p-4 text-center hover:shadow-lg hover:border-[#5c8d2f]"
          >
            <h3 className="text-xl font-semibold mb-3 text-black hover:underline">{article.title}</h3>
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full rounded mb-3"
            />
            <p>{article.description}</p>
          </a>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a 
          href={featuredArticle.link} 
          className="inline-block px-4 py-2 bg-gradient-to-r from-[#5c8d2f] to-[#215153] text-white rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
          Load more
        </a>
      </div>
    </div>
  );
};

export default BlogPage;
