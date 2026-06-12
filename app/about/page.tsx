import SectionTitle
from "@/components/ui/SectionTitle";

import { about }
from "@/data/about";

export default function AboutPage() {

  return (

    <main
      className="
        py-16
        max-w-4xl
      ">

      <SectionTitle
        title={about.title}
      />

      <div
        className="
          mt-10
          space-y-8
        ">

        {about.paragraphs.map((paragraph,index) => (
              <p
                key={index}
                className="
                text-lg
                text-slate-300
                leading-8
                ">
                {paragraph}
              </p>

            )
          )
        }
      </div>
    </main>
  );
}