import { Navbar } from "@/components/homepage/navbar";
import { Homepage } from "@/components/homepage";
import { Hero } from "@/components/homepage/hero";
import { MouseFollower } from "@/components/mouse-follower";
import { About } from "@/components/about";
import { Process } from "@/components/process";
import { Footer } from "@/components/footer";
import { Last } from "@/components/last";
import ImageCards from "@/components/hotel";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <section id="home">
        <Homepage />
      </section>
      <MouseFollower />
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <ImageCards />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="footer">
        <Footer />
      </section>
      <Last />
    </div>
  );
}
