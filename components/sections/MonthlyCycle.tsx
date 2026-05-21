import SectionWrapper from "@/components/shared/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { MONTHLY_CYCLE } from "@/lib/constants";

export default function MonthlyCycle() {
  return (
    <SectionWrapper variant="cream-light">
      <FadeIn>
        <h2 className="text-center font-serif text-2xl leading-relaxed text-ink md:text-3xl">
          LUCIDの月間サイクル
        </h2>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-16">
        <ol className="flex flex-col gap-6 md:grid md:grid-cols-7 md:items-center md:gap-3">
          {MONTHLY_CYCLE.map((s, i) => (
            <li key={s.step} className="contents">
              <article className="md:col-span-1 border border-ink/15 bg-cream px-5 py-6 text-center md:flex md:flex-col md:justify-center md:min-h-[180px]">
                <div className="font-serif text-2xl text-ink">{s.step}</div>
                <h3 className="mt-3 font-medium text-ink">{s.title}</h3>
                <p className="mt-2 text-xs text-earth">{s.body}</p>
              </article>
              {i < MONTHLY_CYCLE.length - 1 && (
                <div
                  aria-hidden
                  className="flex items-center justify-center text-ink/40 md:col-span-1"
                >
                  <span className="md:hidden">↓</span>
                  <span className="hidden md:inline">→</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </FadeIn>
    </SectionWrapper>
  );
}
