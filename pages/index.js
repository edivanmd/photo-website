import Head from 'next/head'
import Image from 'next/image';
import Banner from '../components/Banner'
import Instagram from '../components/instagram/Instagram';
import Slider from '../components/slider/Slider';
import { sliderData } from '../components/slider/sliderData';

export default function Home() {
  return (
    <main>
      <Banner heading='Côncavo Photography' message='I preserve natural moments by photographing them.' />
      <Slider slides={sliderData} />
      <Instagram />
    </main>
  )
}
