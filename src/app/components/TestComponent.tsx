"use client";

import { OCQuestionnaireFlow } from "optum-perks-web-oc-sdk";

export default function Home() {
  const onComplete = () => {
    console.log("Completed!");
  };

  return <OCQuestionnaireFlow onComplete={onComplete} conditionId="12345" />;
}
