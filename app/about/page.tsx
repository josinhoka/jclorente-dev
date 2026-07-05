import SectionTitle
from "@/components/ui/SectionTitle";

import { about } from "@/data/about";
import PageTitle from "@/components/ui/PageTitle";

export default function AboutPage() {

  return (

    <main className="max-w-5xl mx-auto px-6 py-12 md:px-8">

      <PageTitle
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