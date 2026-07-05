interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-200 whitespace-nowrap">
        {title}
      </h2>
      <div className="h-px w-full bg-gradient-to-r from-slate-700/80 to-transparent" />
    </div>
  );
}