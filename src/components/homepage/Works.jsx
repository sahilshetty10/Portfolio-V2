import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";
import solarsystem from "/src/assets/videos/3d-solar-system.mp4";
import dashboardzen from "/src/assets/videos/dashboardzen.mp4";
import movieapp from "/src/assets/videos/movie-app.mp4";
import livescrapehls from "/src/assets/videos/live-scrape-hls.mp4";
import whatsappfix from "/src/assets/images/whatsappfix.jpg";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change my-[10%] overflow-hidden"
    >
      <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://movie.sahilshetty.com/"
            vid={movieapp}
            name="Movie App"
            type="FullStack Development"
            year="2023"
            tools="NextJs • TailwindCSS • Web Scraping"
          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://github.com/sahilshetty10/3D-Solar-System"
            vid={solarsystem}
            name="3D Solar System"
            type="Frontend Development"
            year="2024"
            tools="ThreeJs • NodeJs • JavaScript • Blender"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            vid={dashboardzen}
            name="Dashboard Zen"
            type="FullStack Development"
            year="2024"
            tools="ReactJs • NodeJs • TailwindCSS • Figma"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://github.com/sahilshetty10/sports-streaming"
            vid={livescrapehls}
            name="Live Scraping with HLS"
            type="Backend Development"
            year="2024"
            tools="NodeJs • Web Scraping • HLS"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
          <Projects
            link="https://github.com/sahilshetty10/whatsapp-date-fixer"
            img={whatsappfix}
            alt="whatsapp date fix project mockup"
            name="WhatsApp Date Fix"
            type="Python Scripting"
            year="2023"
            tools="Python • Multi-Processing"
          />
        </div>
      </div>
    </section>
  );
}
