import SectionWrapper from "@/components/shared/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { cn } from "@/lib/cn";
import { KNOW_VS_USE_STAGES } from "@/lib/constants";

export default function KnowVsUse() {
  return (
    <SectionWrapper>
      <FadeIn>
        <h2 className="text-center font-serif text-2xl leading-relaxed text-ink md:text-3xl">
          「知っている」と「使える」は、
          <br className="md:hidden" />
          別の話。
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-12 text-center text-earth">
        <p>学びには、4つの段階があると言われています。</p>
      </FadeIn>

      <ol className="mx-auto mt-16 max-w-md">
        {KNOW_VS_USE_STAGES.map((stage, i) => (
          <FadeIn
            key={stage.n}
            as="li"
            delay={0.1 + i * 0.12}
            className="list-none"
          >
            <div
              className={cn(
                "flex flex-col items-start gap-2 border bg-cream-light px-6 py-5 transition-colors",
                stage.highlight
                  ? "border-2 border-accent bg-accent/10 text-ink"
                  : "border-ink/15 text-ink/80"
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "font-serif text-lg",
                    stage.highlight ? "text-ink" : "text-earth"
                  )}
                >
                  {stage.n}.
                </span>
                <span
                  className={cn(
                    "font-medium",
                    stage.highlight && "text-ink"
                  )}
                >
                  {stage.title}
                </span>
                {stage.highlight && (
                  <span
                    aria-hidden
                    className="ml-auto text-accent"
                    title="使える"
                  >
                    ★
                  </span>
                )}
              </div>
              <p className="pl-7 text-sm text-earth">{stage.body}</p>
            </div>
            {i < KNOW_VS_USE_STAGES.length - 1 && (
              <div
                aria-hidden
                className="flex h-8 items-center justify-center text-ink/30"
              >
                ↓
              </div>
            )}
          </FadeIn>
        ))}
      </ol>

      <FadeIn delay={0.5} className="mt-20 space-y-6 text-earth">
        <p>写真の世界では、</p>
        <p>「知っている」「分かる」までで止まってしまう人が多くいます。</p>
        <p className="pt-2">
          本を読み、講座を受け、Webで情報を集め、知識は十分にある。
        </p>
        <p>理屈も理解している。</p>
        <p className="pt-2">でも、現場でシャッターを切る瞬間、迷ってしまう。</p>
        <p>意図を持って構えるはずが、なんとなくで撮ってしまう。</p>
      </FadeIn>

      <FadeIn delay={0.6} className="my-16 flex justify-center">
        <span className="block h-px w-16 bg-ink/30" />
      </FadeIn>

      <FadeIn delay={0.65} className="space-y-6 text-earth">
        <p>「できる」までは、繰り返しの練習でたどり着けます。</p>
        <p className="pt-2">
          でも、現場の一瞬で{" "}
          <span className="font-medium text-ink">「使える」状態</span>{" "}
          になるためには、
        </p>
        <p>学んだ技術を「自分のもの」にするステップが必要です。</p>
        <p className="pt-4">判断の理由を、自分の言葉で説明できる。</p>
        <p>状況に応じて、技術を選び取れる。</p>
        <p className="pt-4">そこまで来て、初めて「使える」と言えます。</p>
      </FadeIn>

      <FadeIn delay={0.8} className="mt-20">
        <blockquote className="lucid-quote text-lg md:text-xl">
          LUCIDは、その「使える」状態をつくるための場所です。
        </blockquote>
      </FadeIn>
    </SectionWrapper>
  );
}
