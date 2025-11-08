type StatProps = {
  children: React.ReactNode;
};

export function Stat({ children }: StatProps) {
  return (
    <div className="rounded-2xl border border-blush bg-ivory/60 px-4 py-2 text-sm text-espresso/80 shadow-glow">
      {children}
    </div>
  );
}
