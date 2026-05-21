import SectionWrapper from "@/components/shared/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { AUDIENCE_INVITE } from "@/lib/constants";

export default function Audience() {
  return (
    <SectionWrapper>
      <FadeIn>
        <h2 className="text-center font-serif text-2xl leading-relaxed text-ink md:text-3xl">
          LUCIDは、こういう方のための場所です。
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <ul className="mx-auto mt-14 max-w-xl space-y-4">
          {AUDIENCE_INVITE.map((line) => (
            <li key={line} className="flex items-start gap-3 text-ink">
              <span
                aria-hidden
                className="mt-[6px] inline-block h-4 w-4 flex-shrink-0 text-accent"
              >
                <svg viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8.5 L7 12 L13 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn delay={0.35} className="my-20 flex justify-center">
        <span className="block h-px w-16 bg-ink/30" />
      </FadeIn>

      <FadeIn delay={0.4}>
        <h3 className="text-center font-serif text-2xl leading-relaxed text-ink md:text-3xl">
          逆に、こういう方は、お断りしています。
        </h3>
      </FadeIn>

      <FadeIn delay={0.55} className="mt-12 space-y-4 text-earth">
        <p>教えてもらおうという、受け身の姿勢の方。</p>
        <p>愚痴や不満を、場に持ち込む方。</p>
        <p>他のフォトグラファーや業界を、見下す方。</p>
        <p>努力している人を、冷ややかに見る方。</p>
        <p>「楽しく交流できれば」を求めている方。</p>
        <p>効率よくテクニックだけ得ようとする方。</p>
      </FadeIn>

      <FadeIn delay={0.7} className="mt-12 space-y-4">
        <p className="text-earth">申し訳ありません。</p>
        <p className="font-medium text-ink">
          LUCIDは、そういう場所ではありません。
        </p>
      </FadeIn>

      <FadeIn delay={0.85} className="my-20 flex justify-center">
        <span className="block h-px w-16 bg-ink/30" />
      </FadeIn>

      <FadeIn delay={0.9}>
        <blockquote className="lucid-quote space-y-3 text-base">
          <p>LUCIDは10名の少人数サロンです。</p>
          <p>だからこそ、ここに集まる人の質が、すべてを決めます。</p>
          <p>たった一人の冷笑が、十人の挑戦を冷ましてしまうから。</p>
        </blockquote>
      </FadeIn>
    </SectionWrapper>
  );
}
