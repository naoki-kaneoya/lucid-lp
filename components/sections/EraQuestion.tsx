import SectionWrapper from "@/components/shared/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";

export default function EraQuestion() {
  return (
    <SectionWrapper variant="cream-light">
      <FadeIn className="text-center">
        <h2 className="font-serif text-2xl leading-relaxed text-ink md:text-3xl">
          「個性が大事」と、
          <br className="md:hidden" />
          言われ続けてきました。
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-16 space-y-3 text-center text-earth">
        <p>自分らしさを出そう。</p>
        <p>他にはないスタイルを作ろう。</p>
        <p>真似ではなく、独自の表現を。</p>
      </FadeIn>

      <FadeIn delay={0.3} className="mt-16 text-center text-earth">
        <p>そう聞いてきたはずです。</p>
      </FadeIn>

      <FadeIn delay={0.45} className="mt-20 space-y-6 text-center">
        <p className="text-earth">
          でも、ふと立ち止まって考えてみてください。
        </p>
        <p className="font-serif text-xl leading-relaxed text-ink md:text-2xl">
          その「個性」は、
          <br className="md:hidden" />
          何の上に乗っていますか。
        </p>
      </FadeIn>
    </SectionWrapper>
  );
}
