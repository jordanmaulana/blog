// Hours (0–23, viewer's local time) each study recommends, indexed by
// Date#getDay() (0 = Sunday). A window like "2–6 p.m." becomes [14, 15, 16, 17].
type Study = { name: string; url: string; detail: string; hours: number[][] };

export const platforms: { name: string; studies: Study[] }[] = [
  {
    name: "TikTok",
    studies: [
      {
        name: "Buffer",
        url: "https://buffer.com/resources/best-time-to-post-on-tiktok/",
        detail: "7.1M posts, Sep 2026",
        hours: [[9, 12, 13], [8, 11, 13], [6, 7, 22], [6, 21, 22], [6, 13, 22], [18, 20, 22], [15, 16, 17]],
      },
      {
        name: "Sprout Social",
        url: "https://sproutsocial.com/insights/best-times-to-post-on-tiktok/",
        detail: "2B engagements, Nov 2025–Feb 2026",
        // No weekend picks: Sprout says skip weekends.
        hours: [[], [15, 16], [14, 15, 16, 17], [13, 14, 15, 16, 17, 18, 19], [13, 14, 15, 16], [15, 16], []],
      },
      {
        name: "Metricool",
        url: "https://metricool.com/best-time-post-tiktok/",
        detail: "2.3M posts, Jun 2026",
        hours: [[20], [20], [20], [19, 20], [20], [20], [18, 19]],
      },
    ],
  },
  {
    name: "Instagram Reels",
    studies: [
      {
        name: "Buffer",
        url: "https://buffer.com/resources/when-is-the-best-time-to-post-on-instagram/",
        detail: "9.6M posts, 2024–2025",
        hours: [[20, 21, 22], [18, 19, 20], [15, 17, 19], [8, 12, 18], [7, 8, 9], [21, 22], [20, 21, 22]],
      },
      {
        name: "Sprout Social",
        url: "https://sproutsocial.com/insights/best-times-to-post-on-instagram/",
        detail: "2B engagements, Nov 2025–Feb 2026",
        hours: [[], [14, 15], [13, 14, 15, 16, 17, 18], [12, 13, 14, 15, 16, 17, 18, 19, 20, 23], [12, 13], [], []],
      },
      {
        name: "Metricool",
        url: "https://metricool.com/best-time-to-post-on-instagram/",
        detail: "24M posts, Jun 2026",
        hours: [[20], [20], [20], [20], [18, 19], [18, 19], [18, 19]],
      },
    ],
  },
  {
    name: "YouTube Shorts",
    studies: [
      {
        name: "Buffer",
        url: "https://buffer.com/resources/best-time-to-post-on-youtube/",
        detail: "1.8M videos, Jul 2026",
        hours: [[17, 19, 20], [17, 18, 20], [19, 20, 21], [19, 20, 21], [19, 20, 21], [16, 18, 19], [11, 18, 19]],
      },
      {
        name: "SocialPilot",
        url: "https://www.socialpilot.co/insights/best-time-to-post-on-youtube",
        detail: "301K videos, 2026",
        hours: [[10, 15, 16], [7, 12], [7, 8, 9, 10, 17, 18], [12, 15, 16, 17], [19, 20, 21, 22], [7, 8, 11, 12], [9, 15, 16, 17]],
      },
    ],
  },
];
