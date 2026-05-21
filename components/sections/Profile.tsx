import SectionWrapper from "@/components/shared/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";

export default function Profile() {
  return (
    <SectionWrapper>
      <FadeIn>
        <h2 className="text-center font-serif text-xl tracking-widest text-earth md:text-2xl">
          主宰
        </h2>
        <p className="mt-3 text-center font-serif text-2xl text-ink md:text-3xl">
          金親 直樹
          <span className="ml-3 text-sm tracking-widest text-earth">
            NAOKI KANEOYA
          </span>
        </p>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-16">
        <div className="grid items-center gap-10 md:grid-cols-[200px_1fr]">
          <div
            role="img"
            aria-label="主宰ポートレート（プレースホルダー）"
            className="mx-auto h-48 w-48 rounded-full bg-gradient-to-br from-ink-light/40 via-earth/30 to-cream-dark/50"
          />
          <ul className="space-y-3 text-earth">
            <li>Lovegraphプラチナフォトグラファー</li>
            <li>写真サロン「Lucid」主宰</li>
            <li>関西を拠点に、ウェディング・商業撮影・教育に従事</li>
            <li className="text-earth/70">受賞歴：[調整中]</li>
          </ul>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
