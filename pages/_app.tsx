import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import Particle from '../components/Particle';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Navigation currentPath={router.pathname} />
      <Particle />
      <div className='content'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
