import {
  LockOpenIcon,
  ViewListIcon,
  LightningBoltIcon,
  FastForwardIcon,
  SearchIcon,
  AcademicCapIcon,
  ClipboardCheckIcon,
  EyeIcon,
  HeartIcon,
  FireIcon,
  ThumbUpIcon,
  ChartBarIcon,
  UserIcon,
} from "@heroicons/react/outline";
const icons = [
  {
    name: "security",
    icon: <LockOpenIcon className="h-20 w-20  text-green-500" />,
    text: "Secure SSL security",
  },
  {
    name: "services",
    icon: <ViewListIcon className="h-20 w-20 text-green-500" />,
    text: "A full list of services",
  },
  {
    name: "cta",
    icon: <LightningBoltIcon className="h-20 w-20 text-green-500" />,
    text: "Clear Call-To-Actions",
  },
  {
    name: "fast",
    icon: <FastForwardIcon className="h-20 w-20 text-green-500" />,
    text: "A fast loading website",
  },
  {
    name: "seo",
    icon: <SearchIcon className="h-20 w-20 text-green-500" />,
    text: "Effective on-page and off-page SEO",
  },
  {
    name: "expert",
    icon: <AcademicCapIcon className="h-20 w-20 text-green-500" />,
    text: "A regular blog showcasing expertise",
  },
  {
    name: "clipboard",
    icon: <ClipboardCheckIcon className="h-20 w-20 text-green-500" />,
    text: "A clear message for the website visitor",
  },
  {
    name: "eye",
    icon: <EyeIcon className="h-20 w-20 text-green-500" />,
    text: "Multiple case studies and testimonials",
  },
  {
    name: "heart",
    icon: <HeartIcon className="h-20 w-20 text-green-500" />,
    text: "A professional, well-designed appearance",
  },
  {
    name: "fire",
    icon: <FireIcon className="h-20 w-20 text-green-500" />,
    text: "An effective online marketing campaign",
  },
  {
    name: "thumb",
    icon: <ThumbUpIcon className="h-20 w-20 text-green-500" />,
    text: "Social media engagement and growth",
  },
  {
    name: "chart",
    icon: <ChartBarIcon className="20-5 w-20 text-green-500" />,
    text: "Analyzing the data for improvement",
  },
  {
    name: "user",
    icon: <UserIcon className="20-5 w-20 text-green-500" />,
    text: "Analyzing the data for improvement",
  },
];

export default function Icon({ name }) {
  const { icon } = icons.find((i) => i.name === name);
  return icon;
}

// export default icons;
