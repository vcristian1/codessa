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
  { name: "About Us", link: "#about" },
  { name: "Clients", link: "#clients" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#contact" },
  { name: "Approach", link: "#contact" },
  { name: "Testimonials", link: "#contact" },
  { name: "Why Choose", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
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
    title: "Currently building a JS Animation library",
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
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    lightImg: "/cloud.svg",
    darkImg: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "wordpress",
    lightImg: "/cloud.svg",
    darkImg: "/cloud.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "vercel",
    lightImg: "/cloud.svg",
    darkImg: "/cloud.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "next.js",
    lightImg: "/cloud.svg",
    darkImg: "/cloud.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "prisma",
    lightImg: "/cloud.svg",
    darkImg: "/cloud.svg",
    nameImg: "/streamName.svg",
  },
];

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