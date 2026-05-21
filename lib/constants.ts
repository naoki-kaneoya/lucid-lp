export const SITE = {
  name: "LUCID",
  tagline: "Back to the Basics.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lucid-lp.vercel.app",
} as const;

export function getFormUrl(): string {
  return process.env.NEXT_PUBLIC_FORM_URL ?? "#";
}

export const HERO = {
  copy1: "「なんとなく」を、終わらせる。",
  copy2: "本気で、磨いていく。",
  description: "Lovegraphフォトグラファーのための、基礎を磨き直すサロン。",
  cta: "プレオープン応募",
} as const;

export const FIVE_LAYERS = [
  {
    layer: "Layer 1",
    title: "カメラ操作",
    body: "シャッタースピード、絞り、ISO。基本操作を迷いなく行えること。",
    core: false,
  },
  {
    layer: "Layer 2",
    title: "カメラ知識と機材理解",
    body: "レンズの特性、機材の選択基準。なぜそれを使うのかを説明できる。",
    core: false,
  },
  {
    layer: "Layer 3",
    title: "背景処理と引き算",
    body: "余計な要素を削ぎ落とす判断。何を見せ、何を見せないか。",
    core: true,
  },
  {
    layer: "Layer 4",
    title: "デザイン的スキル",
    body: "構図・配置・視線誘導。一枚を成立させる設計の力。",
    core: true,
  },
  {
    layer: "Layer 5",
    title: "現像",
    body: "撮って終わりではなく、最後の意図まで通すための後工程。",
    core: false,
  },
] as const;

export const KNOW_VS_USE_STAGES = [
  {
    n: 1,
    title: "知っている",
    body: "情報として認識している",
    highlight: false,
  },
  {
    n: 2,
    title: "分かる",
    body: "仕組みや理屈を理解している",
    highlight: false,
  },
  {
    n: 3,
    title: "できる",
    body: "実際に手を動かして実行できる",
    highlight: false,
  },
  {
    n: 4,
    title: "使える",
    body: "現場の状況に応じて、自在に使いこなせる",
    highlight: true,
  },
] as const;

export const MONTHLY_CYCLE = [
  {
    step: "①",
    title: "課題提出",
    body: "Slack・月1回",
  },
  {
    step: "②",
    title: "相互フィードバック",
    body: "Slack",
  },
  {
    step: "③",
    title: "グループセッション",
    body: "オンライン・月1回",
  },
  {
    step: "④",
    title: "クラス会",
    body: "オンライン・月1回",
  },
] as const;

export const FIRST_THEME_QUESTIONS = [
  "この1枚を選んだ理由は何か",
  "撮影時にどんな意図を持っていたか",
  "自分で見て、うまくいった点と課題だと思う点は何か",
] as const;

export const AUDIENCE_INVITE = [
  "「個性」より「基礎」を、今選び直したい人",
  "自分の写真を、自分の言葉で語れるようになりたい人",
  "表面的な上達ではなく、本質的に上手くなりたい人",
  "業界全体の質を、自分の手で底上げしたい人",
] as const;

// published: false にすると料金カードを非表示にできる（再公開は true に戻すだけ）
export const PRICING_PLANS = [
  {
    name: "通常プラン",
    price: "6,600",
    unit: "円 / 月",
    note: "LUCID（グループサロン・月額制）",
    featured: false,
    published: true,
  },
  {
    name: "クラス卒業生プラン",
    price: "3,850",
    unit: "円 / 月",
    note: "クラス1on1卒業生向け",
    featured: false,
    published: false,
  },
  {
    name: "プレオープン参加感謝プラン",
    price: "3,300",
    unit: "円 / 月",
    note: "先着10名限定",
    featured: true,
    published: true,
  },
] as const;

// 「単発1on1」セクションの表示切り替え（再公開は true に戻すだけ）
export const SHOW_SINGLE_SESSION = false;

export const FINAL_CHECK_QUESTIONS = [
  "自分の写真を、自分の言葉で語れるようになりたいですか？",
  "表面的な技術ではなく、本質的に上手くなりたいですか？",
  "その努力を、自分で続けていく覚悟がありますか？",
] as const;

export const FINAL_DETAILS = [
  { label: "対象", value: "Lovegraph専属フォトグラファー" },
  { label: "定員", value: "最大10名" },
  { label: "最低継続期間", value: "なし" },
  { label: "途中退会", value: "申し出た翌月末で退会" },
  { label: "入会審査", value: "あり" },
  { label: "募集方法", value: "Slackで一斉告知" },
] as const;
