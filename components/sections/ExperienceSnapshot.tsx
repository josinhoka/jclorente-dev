export default function ExperienceSnapshot() {

  const highlights = [

    {
      title:
        "Backend Development",

      text:
        "Java, Spring Boot, PHP, REST APIs and software architecture."
    },

    {
      title:
        "Systems Background",

      text:
        "Linux, automation, databases and production troubleshooting."
    },

    {
      title:
        "Product Mindset",

      text:
        "UX, project management and full software lifecycle understanding."
    }

  ];

  return (

    <section
      className="
        py-20
      "
    >

      <h2
        className="
          text-4xl
          font-bold
        "
      >

        What I Bring

      </h2>

      <div
        className="
          grid

          md:grid-cols-3

          gap-6

          mt-10
        "
      >

        {

          highlights.map(
            (
              item
            ) => (

              <article

                key={
                  item.title
                }

                className="
                  p-8

                  rounded-2xl

                  border

                  border-slate-800

                  bg-slate-900
                "
              >

                <h3
                  className="
                    text-xl

                    font-semibold
                  "
                >

                  {item.title}

                </h3>

                <p
                  className="
                    mt-4

                    text-slate-300
                  "
                >

                  {item.text}

                </p>

              </article>

            )
          )

        }

      </div>

    </section>

  );

}