"use client";

import { OCTreatmentPlanFlow } from "optum-perks-web-oc-sdk";

export default function TreatmentPlan() {
  return (
    <div>
      <h1>Testing h1 from consumer</h1>
      <OCTreatmentPlanFlow visitId="12345" />
    </div>
  );
}
