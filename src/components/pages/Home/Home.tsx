import React from "react";
import { Layout } from "../../Layout";
import { Hero } from "./Hero";
import { Badges } from "./Badges";
import { FAQ } from "./FAQ";
import { Profiles } from "./Profiles";
import { Stats } from "./Stats";
import { Formations } from "./Formations";
import { Newsletter } from "./Newsletter";

export function Home() {
  return (
    <Layout>
      <Hero />
      <Badges />
      <Formations />
      <FAQ />
      <Stats />
      <Profiles />
      <Newsletter />
    </Layout>
  );
}
