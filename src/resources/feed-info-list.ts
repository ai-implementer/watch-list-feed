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
  ['2ality – JavaScript and more', 'https://2ality.com/feeds/posts.atom'],
  ['Stories by Kazuki Kyakuno on Medium', 'https://medium.com/feed/@kyakuno'],

  // 企業のBlog
  ['OpenAI News', 'https://openai.com/news/rss.xml'],
  ['TECH BLOG | 株式会社AI Shift', 'https://www.ai-shift.co.jp/techblog/feed'],
  ['Platinum Data Blog by BrainPad ブレインパッド', 'https://blog.brainpad.co.jp/rss'],
  ['PublicKey', 'https://www.publickey1.jp/atom.xml'],
  ['メルカリエンジニアリングブログ', 'https://engineering.mercari.com/blog/feed.xml'],
  ['リクルートTech Blog', 'https://blog.recruit.co.jp/data/index.xml'],
  ['LINEヤフーTech Blog', 'https://techblog.lycorp.co.jp/ja/feed/index.xml'],
  ['DeNA Engineering on DeNA Engineering', 'https://engineering.dena.com/index.xml'],
  ["NTT Communications Engineers' Blog", 'https://engineers.ntt.com/feed'],
  ['Microsoft AI Blogs', 'https://www.microsoft.com/en-us/ai/blog/feed/'],
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

  // Zenn, Qiita, Noteが提供しているfeed
  ['Zennの「LLM」のフィード', 'https://zenn.dev/topics/llm/feed'],
  ['LLMタグが付けられた新着記事 - Qiita', 'https://qiita.com/tags/llm/feed'],
  ['「#LLM」の人気タグ記事一覧｜note ――つくる、つながる、とどける。', 'https://note.com/hashtag/LLM/rss'],
]);
