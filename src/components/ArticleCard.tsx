import React from "react";
import { Article } from "../types";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="article-card">
      <Link to={`/article/${article.id}`}>
        <img src={article.image_url} alt={article.title} />
        <h2>{article.title}</h2>
        <p>{new Date(article.published_at).toLocaleDateString()}</p>
      </Link>
    </div>
  );
};

export default ArticleCard;
