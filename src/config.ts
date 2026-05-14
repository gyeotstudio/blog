export const SITE = {
  website: "https://gyeot-studio.vercel.app/",
  author: "gyeot studio",
  profile: "https://gyeot-studio.vercel.app/",
  desc: "기분장애인의 알상을 위한 도구를 만듭니다.",
  title: "gyeot · 곁",
  ogImage: "assets/gyeot.jpg",
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
  { name: "Github", href: "https://github.com/gyeotstudio", linkTitle: "GitHub", active: true },
  { name: "Youtube", href: "https://www.youtube.com/@gyeot-studio", linkTitle: "Youtube", active: true },
];
