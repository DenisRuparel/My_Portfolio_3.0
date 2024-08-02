import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize staying updated with the latest tech trends, fostering continuous learning",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am committed to growth, consistently refining my skills.",
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
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    // title: "Currently building a JS Animation library",
    title: "Currently building an AI SaaS platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Basic Portfolio",
    des: "Transforming ideas into interactive digital experiences",
    img: "/p3.png",
    iconLists: ["/ht.svg", "/cs.svg", "/js.svg"],
    link: "https://denisruparelportfolio.netlify.app/",
  },
  {
    id: 2,
    title: "Dflix",
    des: "Dive into a world of entertainment with Dflix",
    img: "/p5.png",
    iconLists: ["/ht.svg", "/cs.svg", "/js.svg", "/tm.svg", "/pm.svg"],
    link: "https://dflixmovies.netlify.app/",
  },
  {
    id: 3,
    title: "textUtils",
    des: "Effortlessly manipulate and format your text with your textUtils",
    img: "/p4.png",
    iconLists: ["/re.svg", "/ht.svg", "/cs.svg", "/js.svg", "/boo.svg"],
    link: "https://thetextutilze.netlify.app/",
  },
  {
    id: 4,
    title: "NotesApp",
    des: "Write, save, and access your notes effortlessly with NotesApp",
    img: "/p6.png",
    iconLists: ["/re.svg", "/md.svg", "/ex.svg", "/nd.svg", "/pm.svg"],
    link: "https://thetextutilze.netlify.app/",
  },
  {
    id: 5,
    title: "Meetupmingle",
    des: "Simplify your video conferencing experience with Meetupmingle.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://meetupmingle.vercel.app/"
  },
  {
    id: 6,
    title: "Dbanking",
    des: "Revolutionizing banking with innovative digital solutions with Dbanking",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/aw.svg", "/sen.svg"],
    link: "https://dbanking.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "I made so many mistakes in running the company so far, basically any mistake you can think of I probably made. I think, if anything, the Facebook story is a great example of how if you're building a product that people love you can make a lot of mistakes.",
    name: "Mark Zuckerberg",
    title: "cofounder and CEO of Facebook",
    img: "/markz.png"
  },
  {
    quote:
      "The best way to prepare [to be a programmer] is to write programs, and to study great programs that other people have written. ",
    name: "Bill Gates",
    title: "cofounder and CEO of Microsoft",
    img: "/billg.png"
  },
  {
    quote:
      "Brand is just a perception, and perception will match reality over time. Sometimes it will be ahead, other times it will be behind. But brand is simply a collective impression some have about a product.",
    name: "Elon Musk",
    title: "cofounder and CEO of SpaceX & Tesla",
    img: "/em.png"
  },
  {
    quote:
      "A person who is happy is not because everything is right in his life, He is happy because his attitude towards everything in his life is right.",
    name: "Sundar Pichai",
    title: "CEO of Google & Alphabet",
    img: "/sp.jpg"
  },
  {
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    name: "Steve Jobs",
    title: "cofounder of Apple",
    img: "/sj.png"
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Vercel",
    img: "/vi.svg",
    nameImg: "/vl.png",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Self Employeed",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Next Js Developer Intern",
    desc: "Assisted in the development of a web-based platform using Next.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/DenisRuparel",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/denis-ruparel-249539243/"
  },
  {
    id: 3,
    img: "/insta.svg",
    link: "https://www.instagram.com/denis_ruparel_/"
  },
  {
    id: 4,
    img: "/tw.png",
    link: "https://x.com/DenisRuparel"
  },
];
