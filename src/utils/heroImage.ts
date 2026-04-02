import type { ImageMetadata } from "astro";

const heroImages = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/hero/*.png",
  { eager: true }
);

export function getHeroImage(slug: string): ImageMetadata | undefined {
  const key = Object.keys(heroImages).find((k) =>
    k.endsWith(`/${slug}.png`)
  );
  const mod = key ? heroImages[key] : undefined;
  return mod?.default;
}
