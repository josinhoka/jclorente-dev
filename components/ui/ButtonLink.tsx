import Link from "next/link";

interface ButtonLinkProps {

  href: string;

  children: React.ReactNode;

  variant?: "primary" | "secondary";

  target?: string;

  rel?: string;

}

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  target,
  rel,
}: ButtonLinkProps) {

  const styles = {

    primary:
      `
      bg-sky-500

      text-white

      hover:bg-sky-800

      hover:text-slate-950
      `,

    secondary:
      `
      border

      border-slate-700

      hover:border-sky-400
      `,

  };

    const classes = `
px-6
py-3

rounded

transition

inline-block

${styles[variant]}
`;

  const external =
    href.startsWith("http");

  if (external) {

    return (

      <a

        href={href}

        target={target}

        rel={rel}

        className={classes}

      >

        {children}

      </a>

    );

  }

  return (

    <Link

      href={href}

      className={classes}

    >

      {children}

    </Link>

  );

}