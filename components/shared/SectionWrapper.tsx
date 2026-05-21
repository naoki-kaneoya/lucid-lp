import { cn } from "@/lib/cn";

type Variant = "cream" | "ink" | "cream-light";
type Spacing = "default" | "loose";

type Props = {
  id?: string;
  variant?: Variant;
  spacing?: Spacing;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

const variantClass: Record<Variant, string> = {
  cream: "bg-cream text-ink",
  "cream-light": "bg-cream-light text-ink",
  ink: "bg-ink text-cream",
};

export default function SectionWrapper({
  id,
  variant = "cream",
  spacing = "default",
  className,
  containerClassName,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        spacing === "loose" ? "py-32 md:py-40" : "py-24 md:py-32",
        "px-6",
        variantClass[variant],
        className
      )}
    >
      <div className={cn("mx-auto w-full max-w-3xl", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
