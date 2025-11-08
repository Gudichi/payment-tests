type FeatureCardProps = {
  body: string;
};

export function FeatureCard({ body }: FeatureCardProps) {
  return (
    <div className="flex gap-3 rounded-2xl border border-blush bg-white p-5 text-left shadow-glow">
      <span className="mt-1 text-cherry">●</span>
      <p className="text-sm text-espresso/80">{body}</p>
    </div>
  );
}
