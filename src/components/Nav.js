import Link from 'next/link';

export const Nav = () => {
  return (
    <div className='flex gap-6 bg-slate-500 text-white p-4'>
      <Link href='/'>Home</Link>
      <Link href='/events'> Events</Link>
      <Link href='/about-us'> About us</Link>
    </div>
  );
};
