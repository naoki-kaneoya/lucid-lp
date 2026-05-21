import SectionWrapper from "@/components/shared/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { FINAL_CHECK_QUESTIONS, FINAL_DETAILS } from "@/lib/constants";

export default function FinalCheck() {
  return (
    <SectionWrapper>
      <FadeIn>
        <h2 className="text-center font-serif text-2xl leading-relaxed text-ink md:text-3xl">
          参加にあたって、最後に問わせてください
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-12 text-center text-earth">
        <p>申し込みの前に、3つだけ確認させてください。</p>
      </FadeIn>

      <ol className="mt-16 space-y-10">
        {FINAL_CHECK_QUESTIONS.map((q, i) => (
          <FadeIn key={q} as="li" delay={0.1 + i * 0.15} className="list-none">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-baseline md:gap-6">
              <span className="font-serif text-3xl text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg leading-relaxed text-ink">{q}</p>
            </div>
          </FadeIn>
        ))}
      </ol>

      <FadeIn delay={0.65} className="mt-20 space-y-3 text-center">
        <p className="text-earth">
          すべてに「はい」と答えられた方だけ、応募してください。
        </p>
        <p className="font-medium text-ink">
          焦って入る場所ではありません。
        </p>
      </FadeIn>

      <FadeIn delay={0.8} className="my-16 flex justify-center">
        <span className="block h-px w-16 bg-ink/30" />
      </FadeIn>

      <FadeIn delay={0.85}>
        <dl className="mx-auto max-w-xl divide-y divide-ink/10 border-y border-ink/10">
          {FINAL_DETAILS.map((d) => (
            <div
              key={d.label}
              className="grid grid-cols-[7rem_1fr] gap-4 py-4 text-sm md:grid-cols-[8rem_1fr]"
            >
              <dt className="text-earth">{d.label}</dt>
              <dd className="text-ink">{d.value}</dd>
            </div>
          ))}
        </dl>
      </FadeIn>
    </SectionWrapper>
  );
}
