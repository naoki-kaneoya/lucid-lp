import SectionWrapper from "@/components/shared/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";

export default function Philosophy() {
  return (
    <SectionWrapper variant="ink" spacing="loose">
      <FadeIn className="text-center">
        <h2 className="font-serif text-5xl leading-tight text-cream md:text-7xl">
          Back to the Basics.
        </h2>
        <p className="mt-6 font-serif text-2xl text-cream/90 md:text-3xl">
          基礎に、戻ろう。
        </p>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-20 text-center text-cream/80">
        <p>LUCIDは、その思想を共有する仲間と歩む場所です。</p>
      </FadeIn>

      <FadeIn delay={0.35} className="my-20 flex justify-center">
        <span className="block h-px w-16 bg-cream/30" />
      </FadeIn>

      <FadeIn delay={0.4} className="space-y-10 text-cream/90">
        <p className="text-center font-serif text-xl text-cream md:text-2xl">
          個性は、基礎の上にしか乗りません。
        </p>

        <div className="space-y-4 text-cream/80">
          <p>
            自分の写真を、自分の言葉で語れるようになるためには、
          </p>
          <p>
            自分が何をやっているかを、根っこから理解している必要があります。
          </p>
        </div>

        <div className="space-y-3 border-l-2 border-accent pl-6 font-serif italic text-cream/90">
          <p>「なぜ、この構図なのか」</p>
          <p>「なぜ、このレンズなのか」</p>
          <p>「なぜ、この瞬間にシャッターを切ったのか」</p>
        </div>

        <div className="space-y-4 text-cream/80">
          <p>基礎を磨くとは、</p>
          <p>
            これらすべてに自分の言葉で答えられるようになることです。
          </p>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
