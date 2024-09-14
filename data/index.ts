export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "XP", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize collaboration with PM, Design & Engineering teams, fostering open communication throughout the SDLC",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very comfortable working collaboratively across multiple time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Blockchain Token Ecosystem and gaming platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Recruiting for a great Frontend SWE Role?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

const appIcons = {
  next: {
    img: "./next.svg",
    title: "NextJS",
  },
  tail: {
    img: "./tail.svg",
    title: "TailwindCSS",
  },
  ts: {
    img: "./ts.svg",
    title: "TypeScript",
  },
  liveblocks: {
    img: "./liveblocks.svg",
    title: "Liveblocks.io",
  },
  shadcn: {
    img: "./shadcn.jpg",
    title: "shadcn.ui",
  },
  plaid: {
    img: "./plaid.png",
    title: "Plaid",
  },
  dwolla: {
    img: "./dwolla.png",
    title: "Dwolla",
  },
  appwrite: {
    img: "./appwrite.png",
    title: "Appwrite.io",
  },
  sentry: {
    img: "./sentry.png",
    title: "Sentry",
  },
  mongo: {
    img: "./mongodb.png",
    title: "MongoDB",
  },
  clerk: {
    img: "./clerk.png",
    title: "Clerk",
  },
  railway: {
    img: "./railway.svg",
    title: "Railway",
  },
  prisma: {
    img: "./prisma.png",
    title: "Prisma",
  },
  socket: {
    img: "./socket.svg",
    title: "socket.io",
  },
};

const { next, tail, ts, liveblocks, shadcn, plaid, dwolla, appwrite, sentry, mongo, clerk, railway, prisma, socket } = appIcons;

export const projects = [
  {
    id: 0,
    title: "KingFish™",
    des: "An aspirational memecoin project that uses Solana SDKs to make real-time, Solscan-tracked transactions.",
    img: "./p0.jpg",
    iconLists: [next, tail, ts],
    livelink: "https://kingfish.app/",
    repolink: "https://github.com/ajohnson1031/kingfish-starter-site",
  },
  {
    id: 1,
    title: "Figmatic - (Figma-like Clone)",
    des: "A web-based design tool that enables real-time vector graphic editing, prototyping, and collaboration.",
    img: "./p1.jpg",
    iconLists: [next, tail, ts, liveblocks, shadcn],
    livelink: "https://figmatic-sand.vercel.app/",
    repolink: "https://github.com/ajohnson1031/figmatic",
  },
  {
    id: 2,
    title: "Horizon Bank",
    des: "A fully-functional banking app that connects to multiple accts, displays txns IRT and allows transfers between users.",
    img: "./p2.jpg",
    iconLists: [next, tail, ts, plaid, dwolla, appwrite, sentry, shadcn],
    livelink: "https://banking-3l61.vercel.app/sign-in",
    repolink: "https://github.com/ajohnson1031/banking",
  },
  {
    id: 3,
    title: "Threads Clone",
    des: "A Threads-like application that allows the creation of communities where like-minded people can share ideas.",
    img: "./p3.jpg",
    iconLists: [next, tail, ts, clerk, mongo, shadcn],
    livelink: "https://threads-clone-xi-inky.vercel.app/",
    repolink: "https://github.com/ajohnson1031/threads-clone",
  },
  {
    id: 4,
    title: "Discord Clone",
    des: "A Discord-like application that allows users to chat via text, voice and video across personalized servers and channels.",
    img: "./p4.png",
    iconLists: [next, tail, ts, socket, prisma, railway, shadcn],
    livelink: "https://discord-clone-production-7965.up.railway.app",
    repolink: "https://github.com/ajohnson1031/discord-clone",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    desc: "Member of the Innovation & Transformation team responsible for upgrading legacy systems using new technologies such as ReactJS and Python.",
    className: "md:col-span-2",
    thumbnail: "./exp1.png",
  },
  {
    id: 2,
    title: "Interactive Developer",
    desc: "Creative team member responsible for the implementation of interactive ad campaigns from ideation and development to metrics-based recap and all points between.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp2.png",
  },
  {
    id: 3,
    title: "Creative Manager",
    desc: "Led teams across LA, Canada & Singapore in the creation of interactive ad campaigns. Managed clients across verticals face-to-face from kickoff to campaign launch.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp3.png",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "./exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    link: "https://github.com/ajohnson1031",
  },
  {
    id: 3,
    img: "./link.svg",
    link: "https://linkedin.com/in/aaron-johnson-webdev",
  },
];
