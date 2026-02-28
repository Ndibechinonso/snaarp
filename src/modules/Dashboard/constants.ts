export const countries = [
  { name: "Nigeria", flag: "🇳🇬", percent: 61 },
  { name: "UAE", flag: "🇦🇪", percent: 45 },
  { name: "Canada", flag: "🇨🇦", percent: 59 },
  { name: "United States of America", flag: "🇺🇸", percent: 78 },
];

export const deviceTypeCardsData = [
  { name: "Windows", value: "1,403", unit: "devices" },
  { name: "Mac", value: "632", unit: "devices" },
  { name: "Linux", value: "1,801", unit: "devices" },
];

export const userTypesData = [
  { name: "Organizations", value: "1,403", unit: "users" },
  { name: "Departments", value: "632", unit: "users" },
  { name: "Groups", value: "1,801", unit: "users" },
];

export const emailStatusData = [
  { label: "Read", value: "1,403", unit: "emails" },
  { label: "Unread", value: "632", unit: "emails" },
];

export const EMAIL_CHART_BLUE = "#2563eb";

export const emailDonutData = [
  { name: "Received", value: 2500, fill: "#2563eb" },
  { name: "Send", value: 3200, fill: "#eab308" },
  { name: "Draft", value: 721, fill: "#dc2626" },
];

export const emailLineData = [
  { month: "JAN", value: 1800 },
  { month: "FEB", value: 2200 },
  { month: "MARCH", value: 1900 },
  { month: "MAY", value: 2815 },
  { month: "JUL", value: 3200 },
  { month: "SEP", value: 2900 },
  { month: "NOV", value: 3100 },
];

export const PUBLIC_COLOR = "#1e40af";
export const ANYONE_WITH_LINK_COLOR = "#2563eb";
export const WITHIN_ORG_COLOR = "#93c5fd";

export const fileSharingData = [
  { month: "JAN", public: 12, anyoneWithLink: 8, withinOrg: 25 },
  { month: "FEB", public: 15, anyoneWithLink: 10, withinOrg: 28 },
  { month: "MAR", public: 10, anyoneWithLink: 12, withinOrg: 22 },
  { month: "APR", public: 18, anyoneWithLink: 9, withinOrg: 30 },
  { month: "MAY", public: 14, anyoneWithLink: 11, withinOrg: 26 },
  { month: "JUN", public: 20, anyoneWithLink: 14, withinOrg: 32 },
  { month: "JUL", public: 15, anyoneWithLink: 8, withinOrg: 30 },
  { month: "AUG", public: 16, anyoneWithLink: 10, withinOrg: 28 },
  { month: "SEP", public: 13, anyoneWithLink: 9, withinOrg: 24 },
  { month: "OCT", public: 17, anyoneWithLink: 11, withinOrg: 29 },
  { month: "NOV", public: 11, anyoneWithLink: 7, withinOrg: 20 },
  { month: "DEC", public: 14, anyoneWithLink: 10, withinOrg: 26 },
];

export const storageCategories = [
  { name: "Files", color: "#a855f7" },
  { name: "Folders", color: "#eab308" },
  { name: "Videos", color: "#22c55e" },
  { name: "Apps", color: "#38bdf8" },
  { name: "Audios", color: "#dc2626" },
  { name: "Miscellaneous", color: "#1e40af" },
  { name: "Available Space", color: "#94a3b8" },
];

export const storageData = [
  { name: "Files", value: 18, fill: "#a855f7" },
  { name: "Folders", value: 12, fill: "#eab308" },
  { name: "Videos", value: 15, fill: "#22c55e" },
  { name: "Apps", value: 14, fill: "#38bdf8" },
  { name: "Audios", value: 8, fill: "#dc2626" },
  { name: "Miscellaneous", value: 13, fill: "#1e40af" },
  { name: "Available Space", value: 20, fill: "#94a3b8" },
];

export const sparkData = [
  { v: 10 },
  { v: 8 },
  { v: 12 },
  { v: 7 },
  { v: 5 },
  { v: 6 },
  { v: 4 },
];

export const apps = [
  { name: "Google Chrome", users: 21, time: "2 hours 30 minutes", date: "2024-06-25 15:30:42" },
  { name: "YouTube", users: 15, time: "1 hour 45 minutes", date: "2024-06-25 14:22:10" },
  { name: "WhatsApp", users: 40, time: "3 hours 12 minutes", date: "2024-06-25 12:18:33" },
  { name: "Opera Mini", users: 8, time: "45 minutes", date: "2024-06-24 16:45:00" },
  { name: "Telegram", users: 12, time: "1 hour 20 minutes", date: "2024-06-24 11:30:22" },
  { name: "Instagram", users: 28, time: "2 hours 05 minutes", date: "2024-06-24 09:15:41" },
];

export const webActivities = [
  { name: "Google Chrome", percent: 85, time: "2 hours 30 minutes" },
  { name: "Gmail", percent: 70, time: "1 hour 27 minutes" },
  { name: "TikTok", percent: 90, time: "2 hours 45 minutes" },
  { name: "Instagram", percent: 75, time: "1 hour 50 minutes" },
  { name: "X (Twitter)", percent: 60, time: "55 minutes" },
  { name: "Facebook", percent: 45, time: "38 minutes" },
];

export const onlineUsers = [
  {
    name: "Anna Smith",
    location: "Dubai, UAE",
    org: "VSBM. Dubai",
    devices: ["Windows", "Mac"],
    channels: ["Chrome", "Teams", "Instagram"],
    usage: "2 hours 30 minutes",
    online: true,
  },
  {
    name: "Ryan Miller",
    location: "London, UK",
    org: "VSBM. London",
    devices: ["Mac", "Mobile"],
    channels: ["Chrome", "Slack", "YouTube"],
    usage: "1 hour 45 minutes",
    online: true,
  },
  {
    name: "Sarah Jones",
    location: "New York, USA",
    org: "VSBM. New York",
    devices: ["Windows", "Linux"],
    channels: ["Teams", "Gmail", "Slack"],
    usage: "3 hours 15 minutes",
    online: true,
  },
];
