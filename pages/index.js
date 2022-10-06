import Head from 'next/head'
import Image from 'next/image';
import Banner from '../components/Banner'
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner heading='Côncavo Photography' message='I preserve natural moments by photographing them.' />
        <Slider slides={SliderData} />
      </main>

    </div>
  )
}
