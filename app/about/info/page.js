import Link from 'next/link';

const AboutInfoPage = () => {
  return (
    <div>
      <h1 className="text-7xl">Info Page</h1>
      <Link href="/" className="text-2xl">
        Home
      </Link>
    </div>
  );
};

export default AboutInfoPage;
