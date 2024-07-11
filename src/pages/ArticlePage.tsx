import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleDetail from "../components/ArticleDetail";
import { Article } from "../types";

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setArticle(data))
      .catch((error) => setError(error.message));
  }, [id]);

  return (
    <div className="article-page">
      {error ? (
        <p>Error: {error}</p>
      ) : article ? (
        <ArticleDetail article={article} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArticlePage;
