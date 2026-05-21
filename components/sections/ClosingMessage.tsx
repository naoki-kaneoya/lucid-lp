import CTAButton from "@/components/ui/CTAButton";
import SectionWrapper from "@/components/shared/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { INSTAGRAM_DM_URL } from "@/lib/constants";

export default function ClosingMessage() {
  return (
    <SectionWrapper id="cta" variant="ink" spacing="loose">
      <FadeIn>
        <h2 className="text-center font-serif text-2xl leading-relaxed text-cream md:text-3xl">
          Lovegraphの評価は、
          <br className="md:hidden" />
          一人ひとりの現場で決まる。
        </h2>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-12 space-y-3 text-center">
        <p className="font-serif italic text-cream/80">
          「あそこのフォトグラファー、すごいよ」
        </p>
        <p className="font-serif italic text-cream/80">
          「ちゃんといい人に、撮ってもらえた」
        </p>
      </FadeIn>

      <FadeIn delay={0.35} className="mt-12 space-y-4 text-center text-cream/80">
        <p>そう言われる機会を、当たり前にしていきたい。</p>
      </FadeIn>

      <FadeIn delay={0.5} className="mt-16 space-y-4 text-center">
        <p className="text-cream/80">技術の話ではありません。</p>
        <p className="font-medium text-cream">
          判断の質を、変えていく話です。
        </p>
      </FadeIn>

      <FadeIn delay={0.65} className="my-20 flex justify-center">
        <span className="block h-px w-16 bg-cream/30" />
      </FadeIn>

      <FadeIn delay={0.7} className="text-center">
        <h3 className="font-serif text-4xl leading-tight text-cream md:text-6xl">
          Back to the Basics.
        </h3>
        <p className="mt-4 font-serif text-xl text-cream/90 md:text-2xl">
          基礎に、戻ろう。
        </p>
      </FadeIn>

      <FadeIn delay={0.85} className="mt-12 text-center text-cream/80">
        <p>まず10名から、はじめます。</p>
      </FadeIn>

      <FadeIn
        delay={1}
        className="mt-16 flex flex-col items-center gap-5"
      >
        <CTAButton
          variant="primary"
          className="bg-cream text-ink hover:bg-cream-dark border-cream hover:border-cream-dark"
        >
          プレオープンメンバーとして応募する
        </CTAButton>
        <CTAButton
          variant="secondary"
          href={INSTAGRAM_DM_URL}
          className="border-cream/50 text-cream hover:bg-cream hover:text-ink"
        >
          話を聞いてから、決める
        </CTAButton>
      </FadeIn>
    </SectionWrapper>
  );
}
