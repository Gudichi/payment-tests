type TestimonialCardProps = {
  quote: string;
  author?: string;
};

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <figure className="rounded-2xl border border-blush bg-white p-5 shadow-glow text-left">
      <blockquote className="text-base text-espresso/90">&ldquo;{quote}&rdquo;</blockquote>
      {author && (
        <figcaption className="mt-3 text-sm font-semibold text-espresso">{author}</figcaption>
      )}
    </figure>
  );
}
