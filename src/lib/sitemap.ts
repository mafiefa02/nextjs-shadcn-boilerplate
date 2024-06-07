// change this based on your need
const webUrl = "http://localhost:3000";

export const metadataSitemap = [
  {
    url: webUrl,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 1,
  },
];
