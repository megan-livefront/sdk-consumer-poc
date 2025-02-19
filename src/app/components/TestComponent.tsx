"use client";

import { OCTestComponent } from "optum-perks-web-oc-sdk";

export default function Home() {
  const testProps = {
    heading: "Testing",
  };

  return <OCTestComponent {...testProps} />;
}
