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

// 最終確認セクションで見せる定員情報
export const FINAL_CAPACITY = {
  label: "定員",
  value: "最大10名",
} as const;

// 主宰プロフィール
export const PROFILE = {
  name: "金親 直樹",
  nameEn: "NAOKI KANEOYA",
  intro: [
    "Lovegraphプラチナフォトグラファー",
    "写真サロン「Lucid」主宰",
    "関西を拠点に、ウェディング・商業撮影・教育に従事",
  ],
  credentials: [
    "世界遺産・京都二条城 本丸御殿 竣工写真撮影 担当",
    "サントリー宇治川工場 50周年記念棟 竣工撮影（写真・映像）担当",
    "岡山村田製作所 工場見学動線 竣工撮影 担当",
    "象印魔法瓶記念館 竣工撮影 担当",
    "グランディア芳泉 旅館客室写真・料理写真・採用PVスチール 担当",
    "2025 EXPO ベナン／クウェートパビリオン 写真・映像を複数回担当",
    "カンマサスキッド MVスチール 担当",
    "2024年 ゼクシィ12月号「街撮り特集」写真掲載",
  ],
  awards: [
    "2022年 総合写真展 優秀賞",
    "2022年 Lovegraph mini journey 秋 ウエディング部門 優秀賞",
    "2023年 Lovegraph mini journey 春 チャレンジ部門 優秀賞",
    "2023年 Lovegraph mini journey 夏 最優秀賞（ウエディング）",
    "2023年 IPA Pro部門 Wedding 佳作",
    "2023年 Lovegraph mini journey 秋 特別審査員",
    "2024年 Lovegraph journey 2024 年間特別賞",
  ],
} as const;
