import Hero from "../app/sections/hero/Page";
import Client from "../app/sections/clients/Page";
import Services from "../app/sections/services/Page";
import About from "../app/sections/about/Page";

export default function Home() {
  return (
    <div className="bg-background overflow-hidden">
      <Hero />
      <Services />
      <About />
      <Client />
    </div>
  );
}
