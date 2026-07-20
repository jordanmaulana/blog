export type Social = {
  label: string;
  handle: string;
  url: string;
  /** Follower count, updated manually. Omit for platforms without one. */
  followers?: number;
};

export const socials: Social[] = [
  {
    label: "LinkedIn",
    handle: "jordan-maulana",
    url: "https://www.linkedin.com/in/jordan-maulana/",
    followers: 1562,
  },
  {
    label: "Instagram",
    handle: "@jordan.maulana",
    url: "https://www.instagram.com/jordan.maulana",
    followers: 1224,
  },
  {
    label: "TikTok",
    handle: "@joewannalearn",
    url: "https://www.tiktok.com/@joewannalearn",
    followers: 207,
  },
  {
    label: "Threads",
    handle: "@jordan.maulana",
    url: "https://www.threads.com/@jordan.maulana",
    followers: 667,
  },
  {
    label: "YouTube",
    handle: "@jordan.maulana",
    url: "https://www.youtube.com/@jordan.maulana",
    followers: 189,
  },
];

export const socialsWithFollowers = socials.filter((s) => s.followers);

export const totalFollowers = socials.reduce(
  (sum, s) => sum + (s.followers ?? 0),
  0,
);
