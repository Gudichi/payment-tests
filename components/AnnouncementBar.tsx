export function AnnouncementBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-wine text-ivory h-10 text-center flex items-center justify-center">
      <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.1em]">
        {children}
      </p>
    </div>
  );
}

