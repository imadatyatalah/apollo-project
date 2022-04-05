import React from "react";

import ClientOnly from "../components/ClientOnly";
import Countries from "../components/Countries";

const Home = () => {
  return (
    <section>
      <ClientOnly>
        <Countries />
      </ClientOnly>
    </section>
  );
};

export default Home;
