import SectionWrapper from "@/components/shared/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { cn } from "@/lib/cn";
import { FIVE_LAYERS } from "@/lib/constants";

export default function FiveLayers() {
  return (
    <SectionWrapper>
      <FadeIn>
        <h2 className="text-center font-serif text-2xl leading-relaxed text-ink md:text-3xl">
          LUCIDで扱う領域
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-12 space-y-3 text-center text-earth">
        <p>フォトグラファーの技術を5つの層で考えたとき、</p>
        <p>
          LUCIDが扱うのは{" "}
          <span className="font-medium text-ink">Layer 3 と Layer 4</span>{" "}
          を中核としています。
        </p>
      </FadeIn>

      <ol className="mt-16 space-y-4">
        {FIVE_LAYERS.map((l, i) => (
          <FadeIn key={l.layer} as="li" delay={i * 0.1} className="list-none">
            <article
              className={cn(
                "border bg-cream-light px-6 py-6",
                l.core
                  ? "border-2 border-ink"
                  : "border-ink/15"
              )}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-sm tracking-widest text-earth">
                  {l.layer}
                </span>
                <h3 className="font-medium text-ink">{l.title}</h3>
                {l.core && (
                  <span className="ml-auto text-xs tracking-widest text-accent">
                    ★ 中核
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-earth">
                {l.body}
              </p>
            </article>
          </FadeIn>
        ))}
      </ol>
    </SectionWrapper>
  );
}
