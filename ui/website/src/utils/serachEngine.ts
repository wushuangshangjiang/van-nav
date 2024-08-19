export const generateSearchEngineCard = (searchString: string) => {
  if (!searchString.trim()) return [];
  const result = [
    {
      name: "使用 Google 搜索",
      url: searchGoogle(searchString),
      desc: `在 Google 中搜索 「${searchString}」`,
      id: 8800880001,
      logo: "google.ico",
      hide: false
    },
    {
      name: "使用百度搜索",
      url: searchBaidu(searchString),
      desc: `在百度中搜索 「${searchString}」`,
      id: 8800880003,
      logo: "baidu.ico",
      hide: false
    }
  ]
  return result;
}
const searchGoogle = (q: string) => {
  return `https://www.google.com/search?q=${q}`
}

const searchBaidu = (q: string) => {
  return `https://www.baidu.com/s?wd=${q}`
}

