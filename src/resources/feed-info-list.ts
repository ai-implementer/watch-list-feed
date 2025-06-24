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
  ['https://2ality.com', 'https://2ality.com/feeds/posts.atom'],
  ['OpenAI News', 'https://openai.com/news/rss.xml'],
  ['TECH BLOG | 株式会社AI Shift', 'https://www.ai-shift.co.jp/techblog/feed'],
  ['Zennの「LLM」のフィード', 'https://zenn.dev/topics/llm/feed'],
  ['LLMタグが付けられた新着記事 - Qiita', 'https://qiita.com/tags/llm/feed'],
  ['#LLMタグ', 'https://note.com/hashtag/LLM/rss'],
  ['Platinum Data Blog by BrainPad ブレインパッド', 'https://blog.brainpad.co.jp/rss'],
  ['Stories by Kazuki Kyakuno on Medium', 'https://medium.com/feed/@kyakuno'],
]);
