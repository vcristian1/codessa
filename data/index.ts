import lightImage1 from "../public/service-1-light.svg"
import darkImage1 from "../public/service-1-dark.svg"
import lightImage2 from "../public/service-2-light.svg"
import darkImage2 from "../public/service-2-dark.svg"
import lightImage3 from "../public/service-3-light.svg"
import darkImage3 from "../public/service-3-dark.svg"
import lightImage4 from "../public/service-4-light.svg"
import darkImage4 from "../public/service-4-dark.svg"
import lightImage5 from "../public/service-5-light.svg"
import darkImage5 from "../public/service-5-dark.svg"
import lightImage6 from "../public/service-6-light.svg"
import darkImage6 from "../public/service-6-dark.svg"

export const navItems = [
  { name: "Intro", link: "#home" },
  { name: "Tech Stack", link: "#tech-stack"},
  { name: "About Us", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#services" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Why Choose", link: "#whychoose" },
  { name: "Strategy", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Peace Pelvic Health PLLC",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
];

export const testimonials = [
  {
    quote:
      "As a mobile therapist, I needed a website that reflected the personalized care I provide and stood out in a competitive industry. Codessa made the process seamless, delivering a custom web application for Peace Pelvic Health that perfectly captures my vision. Since launch, I’ve received countless compliments on the polished, user-friendly design. What truly sets Codessa apart is their ongoing support—whether I need to add new pages, update content, or make adjustments, they are always available and incredibly responsive.",
    name: "Natalia Avelar DPT, PRPC, Cert. MDT",
    title: "Founder of Peace Pelvic Health PLLC.",
    profileImage: "/profile.svg",
  },
  {
    quote:
      "As a full-service construction company that thrived for years on word-of-mouth referrals, we knew it was time for a website to showcase our 20+ years of experience. Codessa made the entire process seamless, delivering a custom website for Colibri Construction Services that highlights our work and expertise. SEO was a key focus, as we wanted to see if we could attract phone leads. Since launch, we've seen an increase in phone calls from people discovering us online. Their ongoing support has been a game changer—always responsive and quick with updates.",
    name: "Carlos L. Vargas",
    title: "Founder, Colibri Construction Services",
    profileImage: "/profile.svg",
  },
  {
    quote:
      "Codessa exceeded our expectations by creating a beautiful, custom website that included everything we needed. Our guests were able to easily access all event details, making the day go smoothly. The personal story section was a lovely touch, and the registry integration made gift-giving much easier. The barn-inspired design was not only user-friendly but also perfectly captured our unique style. Codessa made the process seamless, and we couldn’t be happier with the final result. It became the go-to resource for our wedding day, and we are so grateful for their work!",
    name: "Jacqueline Vargas",
    title: "Home Baker",
    profileImage: "/profile.svg",
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
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     lightImg: "/cloud.svg",
//     darkImg: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "wordpress",
//     lightImg: "/cloud.svg",
//     darkImg: "/cloud.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "vercel",
//     lightImg: "/cloud.svg",
//     darkImg: "/cloud.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "next.js",
//     lightImg: "/cloud.svg",
//     darkImg: "/cloud.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "prisma",
//     lightImg: "/cloud.svg",
//     darkImg: "/cloud.svg",
//     nameImg: "/streamName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const SERVICES_DATA = [
  {
    lightImage: lightImage1,
    darkImage: darkImage1,
    text:
      'We design and develop custom websites that are visually stunning, functional, and tailored to meet the needs of your target audience.',
    heading: 'Web Design & Development',
    path: '#',
  },
  {
    lightImage: lightImage2,
    darkImage: darkImage2,
    text:
      'Our WordPress developers at Codessa craft responsive websites that boost engagement and drive results.',
    heading: 'Wordpress Development',
    path: '#',
  },
  {
    lightImage: lightImage3,
    darkImage: darkImage3,
    text:
      "Boost your online presence with expert SEO optimization. At Codessa we'll enhance your website's visibility, driving organic traffic and improving search rankings",
    heading: 'SEO Optimization',
    path: '#',
  },
  {
    lightImage: lightImage4,
    darkImage: darkImage4,
    text:
      'We will connect your website to a webhost, as well as configure the domain you have purchased to keep your website safe and secure.',
    heading: 'Website Hosting & Domain',
    path: '#',
  },
  {
    lightImage: lightImage5,
    darkImage: darkImage5,
    text:
      'We will offer you ongoing support post launch to keep your website up to date with your preferred content and ensure it runs smoothly.',
    heading: 'Website Maintenance',
    path: '#',
  },
  {
    lightImage: lightImage6,
    darkImage: darkImage6,
    text:
      'We guarantee that your website is fully accessible across all devices with responsive web design services.',
    heading: 'Web Responsiveness & Web Accessibility',
    path: '/webdevelopment',
  },
];

export const WhyChooseData = [
  {
    lightImage: lightImage1,
    darkImage: darkImage1,
    text:
      'At Codessa, we prioritize transparency. By opening up our workflows, we foster informed collaboration and empower everyone to make smarter decisions.',
    heading: 'Clarity',
    path: '#',
  },
  {
    lightImage: lightImage2,
    darkImage: darkImage2,
    text:
      'Accountability drives us. We measure and track our actions to ensure we deliver on our promises. At Codessa, every team member stands behind their work.',
    heading: 'Integrity',
    path: '#',
  },
  {
    lightImage: lightImage3,
    darkImage: darkImage3,
    text:
      "Work ethic at Codessa means delivering high-quality results with purpose. We’re not about just completing tasks; we focus on doing things right.",
    heading: 'Precision',
    path: '#',
  },
  {
    lightImage: lightImage4,
    darkImage: darkImage4,
    text:
      'Curiosity is at the heart of innovation. At Codessa, we support continuous learning by providing opportunities for professional development.',
    heading: 'Growth',
    path: '#',
  },
  {
    lightImage: lightImage5,
    darkImage: darkImage5,
    text:
      'Innovation is our mindset. At Codessa, we do not wait for change to happen; we create it. We encourage our team to lead, challenge norms, and pioneer new paths to build the future of digital products.',
    heading: 'Pioneering',
    path: '#',
  },
  {
    lightImage: lightImage6,
    darkImage: darkImage6,
    text:
      'Authenticity is essential to Codessa’s culture. We are honest, dependable, and transparent in everything we do. Building trust with our clients and within our team is our top priority.',
    heading: 'Trust',
    path: '/webdevelopment',
  },
];