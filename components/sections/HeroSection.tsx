import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="py-20">

      <h1 className="text-5xl font-bold mb-4">
        {profile.name}
      </h1>

      <h2 className="text-2xl text-slate-400 mb-4">
        {profile.headline}
      </h2>

      <p className="text-slate-300 mb-8">
        {profile.tagline}
      </p>

      <p className="max-w-3xl text-lg text-slate-400">
        {profile.description}
      </p>

    </section>
  );
}