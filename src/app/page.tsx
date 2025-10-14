import { Navbar } from '@/components/navbar'
import { Homepage } from '@/components/homepage'
import { Hero } from '@/components/hero';
import { MouseFollower } from '@/components/mouse-follower';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
   <div className=''>
    <Navbar/>
    <section id="home">
      <Homepage/>
    </section>
    <MouseFollower />
    <section id="about">
      <About />
    </section>
    <section id="contact">
      <Contact />
    </section>

   </div>
  );
}
