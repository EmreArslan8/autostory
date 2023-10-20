import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleClick = () => {
      router.push('/product'); // Burada '/product' yerine yönlendirmek istediğiniz sayfanın yolu olmalıdır
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [router]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Click anywhere to go to the product page.</p>
    </div>
  );
}
