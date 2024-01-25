"use client";

import React, { Fragment } from "react";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { Project } from "./project";
import { useSectionInView } from "@/lib/Hook";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  
  return (
    <section 
    id="projects" className="scroll-mt-28" ref={ref}>
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

