"use client";

import { OCQuestionnaireFlow } from "optum-perks-web-oc-sdk";

export default function Questionnaire() {
  const onComplete = () => {
    console.log("Completed!");
  };

  return (
    <div>
      <h1>Testing h1 from consumer</h1>
      <OCQuestionnaireFlow onComplete={onComplete} conditionId="12345" />
    </div>
  );
}
