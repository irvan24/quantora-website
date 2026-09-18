import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/typography";

const steps = [
  { step: "01", title: "Learn", description: "Understand the basics." },
  { step: "02", title: "Plan", description: "Decide how you want to invest." },
  { step: "03", title: "Research", description: "Understand what you're considering." },
  { step: "04", title: "Thesis", description: "Write why you would invest." },
  { step: "05", title: "Review", description: "Check if your reasons still hold." },
];

export function HowItWorks() {
  return (
    <Section id="how" className="pt-[150px] sm:pt-[190px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center">
          <Eyebrow>In ten seconds</Eyebrow>
          <h2 className="mt-5 text-[clamp(28px,3.8vw,44px)] font-light tracking-[-0.025em] text-ink-100">
            Investing doesn&apos;t have to feel complicated.
          </h2>
        </div>

        <ol className="mt-16 auto-grid-170 gap-7">
          {steps.map((item) => (
            <li key={item.step} className="flex flex-col gap-2.5">
              <div className="text-[11px] font-semibold tracking-[0.14em] text-accent-soft">
                {item.step}
              </div>
              <div className="h-px bg-gradient-to-r from-[#2a3050] to-line-200" />
              <div className="mt-1.5 text-[17px] font-semibold text-ink-100">{item.title}</div>
              <div className="text-[13.5px] leading-[1.55] text-ink-300">{item.description}</div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
