export default function Role({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="about"
      className="nav-change my-20 flex select-none flex-col items-center justify-center overflow-hidden py-10 md:my-[12%]"
      aria-label=""
    >
      <div className="flex w-full items-center space-x-20">
        <h1 className="text-heading-1 font-medium leading-[1.25em] text-secondary-400 md:leading-[1.08em]">
          I craft powerful digital solutions that drive innovation and connect
          people through robust development and cutting-edge technology.
        </h1>
      </div>
    </section>
  );
}
