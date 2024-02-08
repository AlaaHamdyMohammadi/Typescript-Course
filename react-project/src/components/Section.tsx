import React, { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};
const Section = ({title = "SubHeading", children}: SectionProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{children}</h2>
    </div>
  );
};

export default Section;
