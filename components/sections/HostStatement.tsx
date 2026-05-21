import SectionWrapper from "@/components/shared/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";

export default function HostStatement() {
  return (
    <SectionWrapper>
      <FadeIn>
        <h2 className="text-center font-serif text-2xl leading-relaxed text-ink md:text-3xl">
          僕は、基礎を磨き続けてきました。
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} className="mx-auto mt-16 max-w-md">
        <div
          role="img"
          aria-label="主宰の作品（プレースホルダー）"
          className="aspect-[3/4] w-full bg-gradient-to-br from-ink-light/30 via-earth/20 to-cream-dark/40"
        />
      </FadeIn>

      <FadeIn delay={0.3} className="mt-16 space-y-6 text-earth">
        <p>派手なテクニックではなく、</p>
        <p>構図のひとつ、光の読み方ひとつ、</p>
        <p>シャッターを切る前の判断ひとつ。</p>
        <p className="pt-4">当たり前のことを、当たり前にやり続ける。</p>
        <p>そういう道を、ずっと選んできました。</p>
      </FadeIn>

      <FadeIn delay={0.45} className="my-16 flex justify-center">
        <span className="block h-px w-16 bg-ink/30" />
      </FadeIn>

      <FadeIn delay={0.5} className="space-y-6 text-earth">
        <p>その結果、賞をいただくことも、</p>
        <p>信頼ある仕事をいただくことも、</p>
        <p>周りとは少し違う歩み方をすることも、できるようになりました。</p>
        <p className="pt-4">それでも、まだ磨いている分野があります。</p>
        <p className="font-medium text-ink">この道は、終わらないからです。</p>
      </FadeIn>
    </SectionWrapper>
  );
}
