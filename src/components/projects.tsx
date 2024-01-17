import React, { Fragment } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectPops = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectPops) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>

      <Image src={imageUrl} alt="Project I worked on" quality={95} />
    </section>
  );
}
