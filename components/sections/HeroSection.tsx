import { profile } from "@/data/profile";
import ButtonLink from "@/components/ui/ButtonLink";

export default function HeroSection() {

  return (

    <section
      className="
        py-20
        md:py-28
      "
    >

      <p
        className="
          text-sky-400
          uppercase
          tracking-widest
          mb-6
        "
      >
        Portfolio
      </p>

      <h1
        className="
        text-4xl
        md:text-6xl
        font-bold
        leading-tight
        "
      >
        {profile.name}
      </h1>

      <h2
        className="
        text-xl
        md:text-3xl
        text-slate-300
        mt-6
        "
      >
        {profile.headline}
      </h2>

      <p
        className="
          mt-6
          max-w-3xl
          text-lg
          text-slate-400
        "
      >
        {profile.description}
      </p>

      <div
        className="
          mt-10
          flex
          flex-col
          sm:flex-row
          gap-4
        "
      >

        <ButtonLink
          href="/projects"
          //variant="primary"
        >
          View Projects
        </ButtonLink>

        <ButtonLink
            href="/experience"
            variant="secondary"
        >Experience
        </ButtonLink>

      </div>

    </section>

  );

}