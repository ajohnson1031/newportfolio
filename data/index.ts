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
  html: {
    img: "./html.png",
    title: "HTML",
  },
  css: {
    img: "./css.png",
    title: "CSS",
  },
  react: {
    img: "./react.png",
    title: "React",
  },
  next: {
    img: "./next.svg",
    title: "NextJS",
  },
  tail: {
    img: "./tail.svg",
    title: "TailwindCSS",
  },
  js: {
    img: "./javascript.png",
    title: "JavaScript",
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
  vite: {
    img: "./vite.svg",
    title: "Vite",
  },
  chatgpt: {
    img: "./chatgpt.png",
    title: "ChatGPT",
  },
  netlify: {
    img: "./netlify.png",
    title: "Netlify",
  },
};

const { html, react, next, tail, css, js, ts, liveblocks, shadcn, plaid, dwolla, appwrite, sentry, mongo, clerk, railway, prisma, socket, vite, chatgpt, netlify } = appIcons;

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
    title: "Threads Clone",
    des: "A Threads-like app that allows the creation of communities where like-minded people can share ideas.",
    img: "./p3.jpg",
    iconLists: [next, tail, ts, clerk, mongo, shadcn],
    livelink: "https://threads-clone-xi-inky.vercel.app/",
    repolink: "https://github.com/ajohnson1031/threads-clone",
  },
  {
    id: 3,
    title: "Discord Clone",
    des: "A Discord-like app that allows users to chat via text, voice & video across personalized servers and channels.",
    img: "./p4.png",
    iconLists: [next, tail, ts, socket, prisma, railway, shadcn],
    livelink: "https://discord-clone-production-7965.up.railway.app",
    repolink: "https://github.com/ajohnson1031/discord-clone",
  },
  {
    id: 4,
    title: "AI Summarizer",
    des: "Grab a URL and paste it into this AI Summarizer to get to the nitty-gritty of your desired article or page.",
    img: "img/portfolio/14.jpg",
    iconLists: [vite, chatgpt, tail, netlify],
    livelink: "https://resonant-sunburst-c9866d.netlify.app/",
    repolink: "https://github.com/ajohnson1031/ai-summarizer",
  },
  {
    id: 5,
    title: "Chrome Browser Game Replica",
    des: "A fun little game that replicates the Chrome browser's built-in offline dinosaur game.",
    img: "img/portfolio/12.jpg",
    iconLists: [html, js, css],
    livelink: "https://inquisitive-paletas-9fecc7.netlify.app/",
    repolink: "https://github.com/ajohnson1031/chrome-browser-game",
  },
  {
    id: 6,
    title: "Conway's Game of Life",
    des: "A visualization of Conway's Game of Life, where users can create their own patterns or generate a randomized start pattern.",
    img: "img/portfolio/01.jpg",
    iconLists: [react],
    livelink: "https://aj-conway-game-of-life-2020.netlify.app/",
    repolink: "https://github.com/ajohnson1031/aj-conway-game-of-life",
  },
  {
    id: 7,
    title: "HexColor Tint Generator",
    des: "An application that generates tint variations for colors based on input hex codes or CSS named colors.",
    img: "img/portfolio/04.jpg",
    iconLists: [react],
    livelink: "https://hexcolortintgeneratorapp.netlify.app/",
    repolink: "https://github.com/ajohnson1031/hexcolor-tint-generator",
  },
  {
    id: 8,
    title: "One Player Chess Game",
    des: "A one-player chess game with randomized computer movements.",
    img: "img/portfolio/06.jpg",
    iconLists: [react, ts],
    livelink: "https://chessgame-oneplayer.netlify.app/",
    repolink: "https://github.com/ajohnson1031/one-player-chess-game",
  },
  {
    id: 9,
    title: "Spotify® Clone",
    des: "A Spotify® clone.",
    img: "img/portfolio/07.jpg",
    iconLists: [react],
    livelink: "https://friendly-heisenberg-3cbe1c.netlify.app/",
    repolink: "https://github.com/ajohnson1031/spotify-clone-fe",
  },
  {
    id: 10,
    title: "Socket.io Chat App",
    des: "A chat app built on React and socket.io.",
    img: "img/portfolio/08.jpg",
    iconLists: [react, socket],
    livelink: "https://inspiring-beaver-c70f60.netlify.app/",
    repolink: "https://github.com/ajohnson1031/whatsapp-clone-fe",
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
