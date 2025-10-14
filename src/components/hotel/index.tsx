import { HotelCard } from "./card";

const cards = [
  {
    logo: "/3.png",
    title: "Explore the world's most beautiful places.",
    desc: "Experience breathtaking views and fresh air.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=60",
  },
  {
    logo: "/2.png",
    title: "Discover the hidden gems of nature.",
    desc: "Find the best urban spots for food and culture.",
    img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=900&q=60",
  },
  {
    logo: "/1.png",
    title: "Unwind by the ocean.",
    desc: "Relax and unwind by the ocean.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",
  },
  {
    logo: "/4.png",
    title: "Explore the world's most beautiful places.",
    desc: "Experience breathtaking views and fresh air.",
    img: "a.png",
  },
  {
    logo: "/5.png",
    title: "Discover the hidden gems of nature.",
    desc: "Find the best urban spots for food and culture.",
    img: "b.jpg",
  },
  {
    logo: "/6.png",
    title: "Unwind by the ocean.",
    desc: "Relax and unwind by the ocean.",
    img: "c.jpg",
  },
  {
    logo: "/7.png",
    title: "Explore the world's most beautiful places.",
    desc: "Experience breathtaking views and fresh air.",
    img: "d.jpg",
  },
  {
    logo: "/8.png",
    title: "Discover the hidden gems of nature.",
    desc: "Find the best urban spots for food and culture.",
    img: "e.jpg",
  },
  {
    logo: "/9.png",
    title: "Unwind by the ocean.",
    desc: "Relax and unwind by the ocean.",
    img: "f.jpg",
  },
];

export default function Hotel() {
  return (
    <section className="bg-black text-white px-10 py-50">
      {/* Section Heading */}
      <div className="flex items-center justify-center py-10 mb-6">
        <h1 className="font-quattrocento text-white text-4xl">
          Hotels Concept Studies
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {cards.map((card, i) => (
          <HotelCard
            key={i}
            logo={card.logo}
            title={card.title}
            desc={card.desc}
            img={card.img}
          />
        ))}
      </div>
    </section>
  );
}
