import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { Article, ApiResponse } from "../types";

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: ApiResponse) => setArticles(data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="home-page">
      <h1>Latest Articles</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="articles-list">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
