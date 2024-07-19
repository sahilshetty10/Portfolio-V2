export default function Projects({
  name,
  vid,
  img,
  alt,
  type,
  link,
  year,
  tools,
}) {
  const mediaComponet = vid ? (
    <video
      className="w-screen duration-700 ease-in-out group-hover:scale-105"
      src={vid}
      autoPlay
      loop
      muted
      playsInline
    ></video>
  ) : (
    <img
      className="w-screen duration-700 ease-in-out group-hover:scale-105"
      src={img}
      alt={alt}
      width="800"
      height="600"
    />
  );
  return (
    <div>
      {link ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={link}
          className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
        >
          {mediaComponet}
        </a>
      ) : (
        <div className="group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl">
          {mediaComponet}
        </div>
      )}
      <div className="mt-4">
        <div className="mb-3 flex space-x-2">
          <p className="flex items-center justify-center rounded-full border border-secondary-600 bg-transparent px-4 py-1 text-body-4 text-secondary-600 2xl:text-3xl">
            {year}
          </p>
          <p className="flex items-center justify-center rounded-full border border-secondary-600 bg-transparent px-4 py-1 text-body-4 text-secondary-600 2xl:text-3xl">
            {tools}
          </p>
        </div>
        <div className="2xl:space-y-3">
          <h3 className="text-works-title font-medium uppercase text-primary-200 2xl:text-5xl">
            {name}
          </h3>
          <p className="text-body-2 font-light text-primary-400 2xl:text-4xl">
            {type}
          </p>
        </div>
      </div>
    </div>
  );
}
