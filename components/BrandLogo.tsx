import Image from "next/image";

interface BrandLogoProps {
  size?: number; // Height of the logo
  textSize?: string; // Tailwind class for text size
  showText?: boolean;
  isPdf?: boolean; // If true, uses a raw img tag instead of next/image for PDF compatibility
  className?: string; // Additional classes for the container
}

export function BrandLogo({
  size = 48, // Default h-12 (48px)
  textSize = "text-xl",
  showText = false,
  isPdf = false,
  className = "",
}: BrandLogoProps) {
  // We use the aspect ratio of the image. The user's image is a wide rectangle logo.
  // We specify width to be a bit larger to prevent clipping, and use object-contain.
  // Using an estimated aspect ratio for width vs height.
  const estWidth = Math.round(size * 3.5); 

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {isPdf ? (
        <img
          src="/assets/logo/logo.jpg"
          alt="Alien.fi"
          style={{ height: size, width: 'auto' }}
          className="object-contain"
        />
      ) : (
        <Image
          src="/assets/logo/logo.jpg"
          alt="Alien.fi"
          width={estWidth}
          height={size}
          style={{ height: size, width: 'auto' }}
          className="object-contain"
          priority
        />
      )}
      {showText && (
        <span className={`font-bold tracking-tight text-[#1a1a1a] ${textSize}`}>
          Alien.fi
        </span>
      )}
    </div>
  );
}
