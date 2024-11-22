import Image from 'next/image';
import Link from 'next/link';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch a drink');
  }

  return res.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  console.log(title, imgSrc);

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Back to drinks
      </Link>
      <Image src={imgSrc} className='w-48 h-48 rounded-lg shadow-lg' priority height={300} width={300} alt='drink'/>
      <h1 className='text-4xl mb-8 '>{title}  </h1>
    </div>
  );
};

export default SingleDrinkPage;
