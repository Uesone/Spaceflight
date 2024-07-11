import React from "react";
import { Article } from "../types";

interface ArticleDetailProps {
  article: Article;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  return (
    <div className="article-detail">
      <img src={article.image_url} alt={article.title} />
      <h1>{article.title}</h1>
      <p>{new Date(article.published_at).toLocaleDateString()}</p>
      <p>
        <strong>News Site:</strong> {article.news_site}
      </p>
      <div>{article.summary}</div>
      <div>
        <h3>Launches</h3>
        <ul>
          {article.launches.map((launch) => (
            <li key={launch.launch_id}>{launch.provider}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Events</h3>
        <ul>
          {article.events.map((event) => (
            <li key={event.event_id}>{event.provider}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArticleDetail;
