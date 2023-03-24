import { ArticleItem } from './ArticleItem';

export const ArticleList = ({ articles }) => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  );
};
