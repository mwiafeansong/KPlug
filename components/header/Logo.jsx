import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-4xl font-bold">
        <span className="text-gold">K</span>Plug.
      </h1>
    </Link>
  );
};

export default Logo;
