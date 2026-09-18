"use client";

import { useState } from "react";

import { Card } from "@/components/ui/card";
import { SparkIcon } from "@/components/ui/icons";
import { Pill } from "@/components/ui/pill";
import { CardLabel } from "@/components/ui/typography";

const blindSpots = [
  {
    index: "01",
    text: "Growth depends heavily on continued hyperscaler spending.",
  },
  {
    index: "02",
    text: "You haven't defined how long growth could stay below 25% before you would reconsider.",
  },
];

/**
 * The challenge is revealed by default: it is the clearest demonstration of the
 * product's value, so visitors who never click still see it.
 */
export function AssumptionChallenge() {
  const [challenged, setChallenged] = useState(true);

  return (
    <div className="flex min-w-0 flex-col gap-3">
      <Card tone="inset" className="p-[22px]">
        <CardLabel>Your assumption</CardLabel>
        <p className="mt-3 text-[16.5px] leading-[1.45] font-light text-ink-100">
          Data Center revenue growth will remain above 25%.
        </p>
        <button
          type="button"
          onClick={() => setChallenged((value) => !value)}
          aria-expanded={challenged}
          aria-controls="assumption-challenge"
          className="mt-[18px] cursor-pointer rounded-full bg-accent-deep px-[18px] py-2.5 text-[13px] font-semibold text-ink-100 transition-colors hover:bg-accent-deep-hover"
        >
          {challenged ? "Hide the challenge" : "Challenge this assumption"}
        </button>
      </Card>

      {challenged ? (
        <Card id="assumption-challenge" tone="accent" className="p-[22px]">
          <div className="flex items-center gap-[9px]">
            <SparkIcon className="text-accent-soft" />
            <span className="text-[13.5px] font-semibold text-ink-100">
              You may be overlooking two things
            </span>
          </div>

          <div className="mt-[18px] flex flex-col gap-4">
            {blindSpots.map((item) => (
              <div key={item.index} className="flex gap-3.5">
                <span className="pt-0.5 text-[11px] font-semibold tracking-[0.1em] text-ink-600">
                  {item.index}
                </span>
                <span className="text-sm leading-[1.55] text-pretty text-ink-200">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-[22px] border-t border-line-300 pt-[18px]">
            <CardLabel>Consider monitoring</CardLabel>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Pill>Hyperscaler capex</Pill>
              <Pill>Data Center growth</Pill>
              <span className="ml-auto text-[12.5px] font-semibold text-accent-soft">
                Add to thesis →
              </span>
            </div>
          </div>
        </Card>
      ) : null}
    </div>
  );
}
