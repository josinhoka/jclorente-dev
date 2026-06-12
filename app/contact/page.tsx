import SectionTitle from "@/components/ui/SectionTitle";
import {profile} from "@/data/profile";
import ButtonLink from "@/components/ui/ButtonLink";

export default function ContactPage() {

    return (

        <main
            className="
            py-20
            ">
            <SectionTitle title="Contact"/>

            <p className="
            mt-8
            max-w-2xl
            text-slate-300
            text-lg
            ">
                Interested in backend development,
                software engineering or collaborating
                on projects?

                Let's talk.
            </p>

            <div className="
            mt-12
            flex
            justify-center
            gap-4
            text-slate-400
            ">
                <a href={`mailto:${profile.email}`}
                className="
                hover:text-sky-400
                transition
                ">
                    Email
                </a>

                <span>|</span>

                <a href={profile.github} 
                target="_blank"
                rel="noopener noreferrer"
                className="
                hover:text-sky-400
                transition
                ">
                    GitHub
                </a>

                <span>|</span>

                <a href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                hover:text-sky-400
                transition
                ">
                    LinkedIn
                </a>
            </div>
        </main>
    );
}