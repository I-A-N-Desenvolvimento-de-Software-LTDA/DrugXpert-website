import React from 'react';
import { articles } from '../constants';

const BlogSection = () => {
  return (
    <div className="font-sans font-semibold p-5 text-gray-800">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Latest Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {articles.slice(0, 3).map((article, index) => (
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
        <h1>
          <a href="https://blog.drugxpert.net/" className="underline text-lg hover:text-gradient-to-r hover:from-[#5c8d2f] hover:to-[#a4d4a5] transition-colors">See more</a>
        </h1>
      </div>
    </div>
  );
};

export default BlogSection;
