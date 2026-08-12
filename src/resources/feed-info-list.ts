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
  // AIクローラー対策でサイト一時閉鎖中（2026-07時点）。復旧したら戻す
  // ['2ality – JavaScript and more', 'https://2ality.com/feeds/posts.atom'],
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
  // GitHub ActionsからのアクセスがWAFに403でブロックされるためコメントアウト（2026-07時点）
  // ['メルカリエンジニアリングブログ', 'https://engineering.mercari.com/blog/feed.xml'],
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
  ['playpark | Zenn', 'https://zenn.dev/playpark/feed'],
  ['New Relic EOL（提供終了）情報', 'https://docs.newrelic.com/jp/eol/feed.xml'],

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
  ['MarkeZine（CommerceZine）', 'https://markezine.jp/rss/new/20/index.xml'],
  ['ZOZO TECH BLOG', 'https://techblog.zozo.com/feed'],
  ['BASEプロダクトチームブログ', 'https://devblog.thebase.in/feed'],

  // フロントエンド
  ['CSS-Tricks', 'https://css-tricks.com/feed/'],
  ['Smashing Magazine', 'https://www.smashingmagazine.com/feed/'],
  ['web.dev Blog', 'https://web.dev/static/blog/feed.xml'],
  ['TypeScript Blog', 'https://devblogs.microsoft.com/typescript/feed/'],
  ['コリス', 'https://coliss.com/feed/'],
  ['Overreacted (Dan Abramov)', 'https://overreacted.io/rss.xml'],
  ['Josh W. Comeau', 'https://www.joshwcomeau.com/rss.xml'],
  ['Zennの「フロントエンド」のフィード', 'https://zenn.dev/topics/frontend/feed'],

  // AI
  ['Hugging Face Blog', 'https://huggingface.co/blog/feed.xml'],
  ['Google DeepMind Blog', 'https://deepmind.google/blog/rss.xml'],
  ['Ahead of AI (Sebastian Raschka)', 'https://magazine.sebastianraschka.com/feed'],
  ['Latent Space', 'https://www.latent.space/feed'],
  ['Import AI (Jack Clark)', 'https://importai.substack.com/feed'],
  ['BAIR Blog (UC Berkeley)', 'https://bair.berkeley.edu/blog/feed.xml'],

  // キーボード・ガジェット
  ['自作キーボード温泉街の歩き方', 'https://salicylic-acid3.hatenablog.com/feed'],
  ['遊舎工房 ニュース', 'https://shop.yushakobo.jp/blogs/news.atom'],
  [
    'Zennの「自作キーボード」のフィード',
    'https://zenn.dev/topics/%E8%87%AA%E4%BD%9C%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89/feed',
  ],
  ['PC Watch', 'https://pc.watch.impress.co.jp/data/rss/1.0/pcw/feed.rdf'],
  ['ギズモード・ジャパン', 'https://www.gizmodo.jp/index.xml'],
  ['The Verge', 'https://www.theverge.com/rss/index.xml'],
  ['Daily Gadget', 'https://daily-gadget.net/feed/'],
]);
