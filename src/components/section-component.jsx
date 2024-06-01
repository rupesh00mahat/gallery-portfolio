import React from "react";

function SectionComponent({ children}) {
  return (
    <section className="infos">
      <h2>Infos</h2>
      <div className="divider"></div>
      {children}
    </section>
  );
}

export default SectionComponent;
