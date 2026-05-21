import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { PROFILE } from "@/lib/constants";

export default function Profile() {
  return (
    <SectionWrapper>
      <FadeIn>
        <h2 className="text-center font-serif text-xl tracking-widest text-earth md:text-2xl">
          主宰
        </h2>
        <p className="mt-3 text-center font-serif text-2xl text-ink md:text-3xl">
          {PROFILE.name}
          <span className="ml-3 text-sm tracking-widest text-earth">
            {PROFILE.nameEn}
          </span>
        </p>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-16">
        <div className="grid items-center gap-10 md:grid-cols-[200px_1fr]">
          <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full">
            <Image
              src="/images/profile.jpg"
              alt="主宰 金親直樹のポートレート"
              fill
              sizes="12rem"
              className="object-cover"
            />
          </div>
          <ul className="space-y-3 text-earth">
            {PROFILE.intro.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </FadeIn>

      <FadeIn delay={0.15} className="mx-auto mt-20 max-w-2xl">
        <h3 className="text-center font-serif text-sm tracking-widest text-earth">
          実績
        </h3>
        <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
          {PROFILE.credentials.map((c) => (
            <li
              key={c}
              className="py-3 text-sm leading-relaxed text-earth"
            >
              {c}
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn delay={0.15} className="mx-auto mt-14 max-w-2xl">
        <h3 className="text-center font-serif text-sm tracking-widest text-earth">
          受賞歴
        </h3>
        <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
          {PROFILE.awards.map((a) => (
            <li
              key={a}
              className="py-3 text-sm leading-relaxed text-earth"
            >
              {a}
            </li>
          ))}
        </ul>
      </FadeIn>
    </SectionWrapper>
  );
}
