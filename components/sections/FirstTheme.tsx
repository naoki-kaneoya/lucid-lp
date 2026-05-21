import SectionWrapper from "@/components/shared/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { FIRST_THEME_QUESTIONS } from "@/lib/constants";

export default function FirstTheme() {
  return (
    <SectionWrapper>
      <FadeIn>
        <h2 className="text-center font-serif text-2xl leading-relaxed text-ink md:text-3xl">
          初月のテーマ
        </h2>
        <p className="mt-4 text-center text-earth">
          「あなたのベストショット」
        </p>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-16 space-y-5 text-earth">
        <p>直近の撮影から、自分でベストだと思う1枚を選び、</p>
        <p>3つの問いに答える形で提出していただきます。</p>
      </FadeIn>

      <ol className="mt-12 space-y-4">
        {FIRST_THEME_QUESTIONS.map((q, i) => (
          <FadeIn key={q} as="li" delay={0.1 + i * 0.1} className="list-none">
            <article className="flex gap-5 border border-ink/15 bg-cream-light px-6 py-5">
              <span className="font-serif text-lg text-earth">{i + 1}.</span>
              <p className="text-ink">{q}</p>
            </article>
          </FadeIn>
        ))}
      </ol>

      <FadeIn delay={0.5} className="mt-16 text-center">
        <p className="text-earth">
          初月の狙いは、
          <span className="font-medium text-ink">
            あなた自身の「判断基準の現在地」を把握すること
          </span>
          。
        </p>
      </FadeIn>
    </SectionWrapper>
  );
}
