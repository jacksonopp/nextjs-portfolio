import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import Particle from '../components/Particle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='content'>
        <Navigation />
        <Particle />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
