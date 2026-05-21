import SectionWrapper from "@/components/shared/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { cn } from "@/lib/cn";
import { PRICING_PLANS } from "@/lib/constants";

export default function Pricing() {
  return (
    <SectionWrapper variant="cream-light" spacing="loose" containerClassName="max-w-4xl">
      <FadeIn>
        <h2 className="text-center font-serif text-2xl leading-relaxed text-ink md:text-3xl">
          料金プラン
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-4 text-center text-earth">
        <p className="text-sm tracking-widest">
          LUCID（グループサロン・月額制）
        </p>
      </FadeIn>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {PRICING_PLANS.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.1}>
            <article
              className={cn(
                "relative flex h-full flex-col bg-cream px-6 py-10 text-center",
                p.featured
                  ? "border-2 border-ink"
                  : "border border-ink/15"
              )}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ink px-4 py-1 text-[10px] tracking-widest text-cream">
                  限定
                </span>
              )}
              <h3 className="font-medium text-ink">{p.name}</h3>
              <div className="mt-6 flex items-baseline justify-center gap-1">
                <span className="font-serif text-4xl text-ink md:text-5xl">
                  {p.price}
                </span>
                <span className="text-sm text-earth">{p.unit}</span>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-earth">
                {p.note}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4} className="my-20 flex justify-center">
        <span className="block h-px w-16 bg-ink/30" />
      </FadeIn>

      <FadeIn delay={0.45}>
        <div className="mx-auto max-w-xl">
          <h3 className="text-center font-serif text-xl text-ink">
            クラス（1on1・3ヶ月制）
          </h3>
          <div className="mt-6 border border-ink/15 bg-cream px-6 py-6 text-center">
            <p className="font-serif text-2xl text-ink">
              16,500
              <span className="ml-1 text-sm text-earth">円 / 月</span>
            </p>
            <p className="mt-3 text-xs text-earth">
              新規入会 ／ 3ヶ月で入れ替え制
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.55} className="mt-12">
        <div className="mx-auto max-w-xl">
          <h3 className="text-center font-serif text-xl text-ink">単発1on1</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="border border-ink/15 bg-cream px-6 py-6 text-center">
              <p className="text-sm text-earth">クラス卒業生</p>
              <p className="mt-3 font-serif text-2xl text-ink">
                5,500
                <span className="ml-1 text-sm text-earth">円 / 60分</span>
              </p>
            </div>
            <div className="border border-ink/15 bg-cream px-6 py-6 text-center">
              <p className="text-sm text-earth">クラス・LUCID非所属</p>
              <p className="mt-3 font-serif text-2xl text-ink">
                11,000
                <span className="ml-1 text-sm text-earth">円 / 60分</span>
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
