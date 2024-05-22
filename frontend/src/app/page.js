import CarouselHome from '@/components/client/carousel'
import MainGridHome from '@/components/client/mainGridHome'
import MeilleuresOffres from '@/components/client/meilleuresOffres'
import Footer from '@/components/client/footer'


export default function Home() {
  return (
    <>
    <CarouselHome/>

<MainGridHome/>
<MeilleuresOffres/>
<Footer/>
    </>
  );
}
