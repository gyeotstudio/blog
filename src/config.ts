export const SITE = {
  website: "https://gyeot-studio.vercel.app/",
  author: "gyeot studio",
  profile: "https://gyeot-studio.vercel.app/",
  desc: "심리·사회복지 현장을 위한 도구를 만드는 작은 작업실",
  title: "gyeot · 곁",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/gyeot-studio/blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "ko",
  timezone: "Asia/Seoul",
} as const;

export const SOCIALS = [
  { name: "LinkedIn", href: "https://linkedin.com/in/gyeot", linkTitle: "LinkedIn", active: true },
  { name: "Mail", href: "mailto:gyeotstudio@gmail.com", linkTitle: "Email", active: true },
  // GitHub·YouTube 등은 채널 생기면 추가
];
