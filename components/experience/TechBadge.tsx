interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50 shadow-sm">
      {label}
    </span>
  );
}