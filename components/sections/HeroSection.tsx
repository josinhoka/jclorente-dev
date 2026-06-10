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
        text-5xl
        md:text-7xl
        font-bold
        leading-[1.05]
        tracking.tight
        mt-3
        "
      >
        {profile.name}
      </h1>

      <h2
        className="
        mt-5
        text-2xl
        md:text-3xl
        text-slate-300
        font-medium
        "
      >
        {profile.headline}
      </h2>

      <p
        className="
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-slate-400
        "
      >
        {profile.description}
      </p>

      <div
        className="
          mt-12
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