/**
 * Reveal-mask image treatment — pure CSS so photos render immediately in
 * SSR markup and still get a gentle eased entrance. No hydration required.
 */
export function ImageReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
}) {
  return (
    <figure className={`reveal-img ${className}`} style={{ animationDelay: `${delay}s` }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${imgClassName}`}
        loading="lazy"
      />
    </figure>
  );
}
