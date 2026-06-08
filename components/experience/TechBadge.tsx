interface TechBadgeProps {

  label: string;

}

export default function TechBadge({
  label,
}: TechBadgeProps) {

  return (

    <span
      className="
        px-3
        py-1

        rounded

        bg-slate-800

        text-slate-200

        text-sm
      "
    >

      {label}

    </span>

  );

}