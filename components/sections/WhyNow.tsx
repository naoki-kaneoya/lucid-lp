import SectionWrapper from "@/components/shared/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";

export default function WhyNow() {
  return (
    <SectionWrapper variant="cream-light">
      <FadeIn>
        <h2 className="text-center font-serif text-2xl leading-relaxed text-ink md:text-3xl">
          今は、誰でもカメラを持てば
          <br className="md:hidden" />
          プロを名乗れる時代です。
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-16 space-y-6 text-earth">
        <p>スマホでも、ミラーレスでも、シャッターは誰でも切れる。</p>
        <p className="pt-2">でも、シャッターを切ることと、</p>
        <p>お客様の期待に応えることは、別の話です。</p>
      </FadeIn>

      <FadeIn delay={0.3} className="my-16 flex justify-center">
        <span className="block h-px w-16 bg-ink/30" />
      </FadeIn>

      <FadeIn delay={0.35} className="space-y-6 text-earth">
        <p>結婚式、前撮り、家族写真。</p>
        <p>一生に一度の瞬間に、お金を払って写真を頼む。</p>
        <p>ゲストが望んでいるのは、本物のプロです。</p>
      </FadeIn>

      <FadeIn delay={0.5} className="mt-20">
        <blockquote className="lucid-quote text-xl md:text-2xl not-italic font-serif">
          「ちゃんといい人に、撮ってもらえた。」
        </blockquote>
      </FadeIn>

      <FadeIn delay={0.65} className="mt-16 space-y-6 text-earth">
        <p>その当たり前を、業界全体で守っていきたい。</p>
        <p>誰に頼んでも、信頼できる写真が残る。</p>
        <p>そんな未来を、つくっていきたい。</p>
      </FadeIn>

      <FadeIn delay={0.8} className="mt-12">
        <p className="font-medium text-ink">
          LUCIDは、その第一歩の場所です。
        </p>
        <p className="mt-2 text-earth">
          Lovegraphの中から、業界全体に届く何かを始めたい。
        </p>
      </FadeIn>
    </SectionWrapper>
  );
}
