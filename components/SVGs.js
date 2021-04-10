// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
} from "@heroicons/react/outline";
export default function websiteFeatures(req, res) {
  res.status(200).json([
    {
      icon: <LockOpenIcon class="h-5 w-5 text-green-500" />,
      text: "Secure SSL security",
    },
    {
      icon: <ViewListIcon className="h-5 w-5 text-green-500" />,
      text: "A full list of services",
    },
    {
      icon: <LightningBoltIcon className="h-5 w-5 text-green-500" />,
      text: "Clear Call-To-Actions",
    },
    {
      icon: <FastForwardIcon className="h-5 w-5 text-green-500" />,
      text: "A fast loading website",
    },
    {
      icon: <SearchIcon className="h-5 w-5 text-green-500" />,
      text: "Effective on-page and off-page SEO",
    },
    {
      icon: <AcademicCapIcon className="h-5 w-5 text-green-500" />,
      text: "A regular blog showcasing expertise",
    },
    {
      icon: <ClipboardCheckIcon className="h-5 w-5 text-green-500" />,
      text: "A clear message for the website visitor",
    },
    {
      icon: <EyeIcon className="h-5 w-5 text-green-500" />,
      text: "Multiple case studies and testimonials",
    },
    {
      icon: <HeartIcon className="h-5 w-5 text-green-500" />,
      text: "A professional, well-designed appearance",
    },
    {
      icon: <FireIcon className="h-5 w-5 text-green-500" />,
      text: "An effective online marketing campaign",
    },
    {
      icon: <ThumbUpIcon className="h-5 w-5 text-green-500" />,
      text: "Social media engagement and growth",
    },
    {
      icon: <ChartBarIcon className="h-5 w-5 text-green-500" />,
      text: "Analyzing the data for improvement",
    },
  ]);
}
