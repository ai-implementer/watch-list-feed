type ValidUrl = `${'http' | 'https'}://${string}.${string}`;

type FeedInfoTuple = [label: string, url: ValidUrl];

export interface FeedInfo {
  label: string;
  url: ValidUrl;
}

const createFeedInfoList = (feedInfoTuples: FeedInfoTuple[]) => {
  const feedInfoList: FeedInfo[] = [];

  for (const [label, url] of feedInfoTuples) {
    feedInfoList.push({
      label,
      url,
    });
  }

  return feedInfoList;
};

/**
 * フィード情報一覧。追加順
 * ラベルが被るとバリデーションエラーになるので別のラベルを設定してください
 */
// prettier-ignore
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['企業名・製品名など', 'RSS/AtomフィードのURL'],

  // 個人ブログ
  ['2ality – JavaScript and more', 'https://2ality.com/feeds/posts.atom'],
  ['Stories by Kazuki Kyakuno on Medium', 'https://medium.com/feed/@kyakuno'],
  ['Mitsuyuki.Shiiba', 'https://bufferings.hatenablog.com/rss'],
  ['橋本商会', 'https://scrapbox.io/api/feed/shokai'],
  ['yhara.jp', 'https://yhara.jp/_feed.xml'],
  ['きしだのはてな', 'https://nowokay.hatenablog.com/feed'],
  ["Simon Willison's Weblog", 'https://simonwillison.net/atom/everything/'],
  ['hang-up | note', 'https://note.com/git_yamazaki/rss'],
  ['akira_cloudjob | Zenn', 'https://zenn.dev/akira_cloudjob/feed'],
  ['TooMe | Qiita', 'https://qiita.com/TooMe/feed'],

  // 企業テックブログ
  ['OpenAI News', 'https://openai.com/news/rss.xml'],
  ['TECH BLOG | 株式会社AI Shift', 'https://www.ai-shift.co.jp/techblog/feed'],
  ['Platinum Data Blog by BrainPad ブレインパッド', 'https://blog.brainpad.co.jp/rss'],
  ['メルカリエンジニアリングブログ', 'https://engineering.mercari.com/blog/feed.xml'],
  ['リクルートTech Blog', 'https://blog.recruit.co.jp/data/index.xml'],
  ['LINEヤフーTech Blog', 'https://techblog.lycorp.co.jp/ja/feed/index.xml'],
  ["NTT Communications Engineers' Blog", 'https://engineers.ntt.com/feed'],
  ['Google Research Blog', 'https://research.google/blog/rss/'],
  ['カミナシ エンジニアブログ', 'https://kaminashi-developer.hatenablog.jp/feed'],
  ['Wantedly Engineer Blog', 'https://www.wantedly.com/stories/s/wantedly_engineers/rss.xml'],
  ['Sansan Tech Blog', 'https://buildersbox.corp-sansan.com/feed'],
  ['KAKEHASHI Tech Blog', 'https://kakehashi-dev.hatenablog.com/feed'],
  ['エムスリーテックブログ', 'https://www.m3tech.blog/feed'],
  ['ログラス', 'https://prd-blog.loglass.co.jp/feed'],
  ['ログラス (Zenn)', 'https://zenn.dev/p/loglass/feed'],
  ['一休.com Developers Blog', 'https://user-first.ikyu.co.jp/feed'],
  ['タイミー', 'https://tech.timee.co.jp/feed'],
  ['Socket', 'https://socket.dev/api/blog/feed.atom'],
  ['Cybozu Inside Out', 'https://blog.cybozu.io/rss'],

  // テックメディア
  ['WWW WATCH', 'https://feeds.feedburner.com/wacth'],
  ['PYMNTS.com', 'https://www.pymnts.com/feed/'],
  ['PublicKey', 'https://www.publickey1.jp/atom.xml'],
  ["O'Reilly Radar", 'https://feeds.feedburner.com/oreilly/radar/atom'],
  ['Developers.IO', 'https://dev.classmethod.jp/feed/'],

  // トピックフィード
  ['Zennの「LLM」のフィード', 'https://zenn.dev/topics/llm/feed'],
  ['LLMタグが付けられた新着記事 - Qiita', 'https://qiita.com/tags/llm/feed'],
  // ['「#LLM」の人気タグ記事一覧｜note ――つくる、つながる、とどける。', 'https://note.com/hashtag/LLM/rss'],

  // Eコマース
  ['Shopify Engineering', 'https://shopify.engineering/blog.atom'],
  ['Shopify Blog', 'https://www.shopify.com/blog/feed'],
  ['Practical Ecommerce', 'https://www.practicalecommerce.com/feed'],
  ['Digital Commerce 360', 'https://www.digitalcommerce360.com/feed/'],
  ['Ecommerce News Europe', 'https://ecommercenews.eu/feed/'],
  ['Retail Dive', 'https://www.retaildive.com/feeds/news/'],
  ['Baymard Institute', 'https://baymard.com/blog.atom'],
  ['ECのミカタ', 'https://ecnomikata.com/rss/'],
  ['E-Commerce Times', 'https://www.ecommercetimes.com/rss-feed'],
  ['WooCommerce Blog', 'https://woocommerce.com/blog/feed/'],
  ['Stripe Blog', 'https://stripe.com/blog/feed.rss'],
  ['Etsy Engineering (Code as Craft)', 'https://www.etsy.com/codeascraft/rss'],
  ['ECzine', 'https://eczine.jp/rss/new/20/index.xml'],
  ['ZOZO TECH BLOG', 'https://techblog.zozo.com/feed'],
  ['BASEプロダクトチームブログ', 'https://devblog.thebase.in/feed'],
]);
