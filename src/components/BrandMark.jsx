// Netanel Marchum: premium brand logo.
// `size`: "sm" (nav/footer), "md" (watermark), "lg" (hero brand moment).
export default function BrandMark({ size = "sm" }) {
  return (
    <span className={`brandmark brandmark-${size}`}>
      <span className="brandmark-word1">Netanel Marchum</span>
    </span>
  );
}
