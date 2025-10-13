import { Navbar } from '@/components/navbar'
import { Homepage } from '@/components/homepage'
import { Hero } from '@/components/hero';
import { MouseFollower } from '@/components/mouse-follower';

export default function Home() {
  return (
   <div className='relative h-screen'>
    <Homepage/>
    <Navbar/>
    <Hero />
    <MouseFollower />
   </div>
  );
}
