import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });

  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });
  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      {/* logo */}
      <a href="#hero" aria-label="Logo" className="z-50">
        <svg
          width="50"
          height="50"
          viewBox="0 0 324 314"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M225.393 292.946C300.474 257.935 332.957 168.688 297.946 93.6073C297.743 93.171 297.537 92.7361 297.33 92.3027C292.802 82.0573 290.413 61.2603 313.666 50.4172C313.636 50.3852 313.606 50.3532 313.576 50.3212L139.715 131.394C139.715 131.394 130.879 135.514 134.999 144.351C139.12 153.187 147.956 149.067 147.956 149.067L157.133 144.788C157.133 144.788 189.76 129.574 204.974 162.201C220.188 194.828 187.561 210.042 187.561 210.042L61.8069 268.682C105.192 307.568 169.252 319.125 225.393 292.946Z"
            stroke="currentColor"
            stroke-width="12"
          />
          <path
            d="M10.4239 263.679C10.3941 263.647 10.3642 263.615 10.3339 263.583C33.5872 252.74 31.198 231.943 26.6696 221.697C26.4625 221.264 26.2573 220.829 26.0538 220.393C-8.95701 145.312 23.5263 56.0647 98.6073 21.0538C154.748 -5.12486 218.808 6.43251 262.193 45.3178L128.622 107.603C128.622 107.603 95.9946 122.817 111.209 155.445C126.423 188.072 159.05 172.857 159.05 172.857L168.227 168.578C168.227 168.578 177.063 164.458 181.184 173.294C185.304 182.131 176.468 186.251 176.468 186.251L10.4239 263.679Z"
            stroke="currentColor"
            stroke-width="12"
          />
        </svg>
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>About</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span>Services</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>Projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Let&apos;s Talk.</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
