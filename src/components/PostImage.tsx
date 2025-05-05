import { urlFor } from "@/sanity/lib/image";

type Props = {
  mainImage?: any;
  coverImageUrl?: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  crop?: boolean;
};

export default function PostImage({
  mainImage,
  coverImageUrl,
  alt = "Post image",
  className = "",
  width = 400,
  height = 300,
  crop = false,
}: Props) {
  if (!mainImage && !coverImageUrl) return null;

  const src = mainImage
    ? crop
      ? urlFor(mainImage).width(width).height(height).fit("crop").url()
      : urlFor(mainImage).width(width).url()
    : coverImageUrl;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
}
