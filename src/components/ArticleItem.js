import Link from 'next/link';
export const ArticleItem = ({ article }) => {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`} legacyBehavior>
      <a className=' w-40 rounded-md'>
        <h3>{article.title}</h3>
      </a>
    </Link>
  );
};
