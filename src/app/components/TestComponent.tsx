"use client";

import { mySdkFunction, OCTestComponent } from "optum-perks-web-oc-sdk";

export default function Home() {
  mySdkFunction();

  const testProps = {
    heading: "Testing",
  };

  return <OCTestComponent {...testProps} />;
}
