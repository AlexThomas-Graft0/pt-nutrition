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
  ChartPieIcon,
  BookOpenIcon,
  DesktopComputerIcon,
  CursorClickIcon,
  SearchCircleIcon,
  PencilAltIcon,
  UserGroupIcon,
  PresentationChartBarIcon,
  PresentationChartLineIcon,
  ShareIcon,
  RefreshIcon,
  CurrencyPoundIcon,
  TemplateIcon,
  ChartSquareBarIcon,
  BeakerIcon,
} from "@heroicons/react/outline";

const icons = [
  {
    name: "security",
    icon: <LockOpenIcon className="h-10 w-10  text-green-500" />,
  },
  {
    name: "services",
    icon: <ViewListIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "cta",
    icon: <LightningBoltIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "fast",
    icon: <FastForwardIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "seo",
    icon: <SearchIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "expert",
    icon: <AcademicCapIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "clipboard",
    icon: <ClipboardCheckIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "eye",
    icon: <EyeIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "heart",
    icon: <HeartIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "fire",
    icon: <FireIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "thumb",
    icon: <ThumbUpIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "bar-chart",
    icon: <ChartBarIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "user",
    icon: <UserIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "pie-chart",
    icon: <ChartPieIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "book",
    icon: <BookOpenIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "computer",
    icon: <DesktopComputerIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "click",
    icon: <CursorClickIcon className="h-10 w-10 text-green-500" />,
  },

  {
    name: "search-circle",
    icon: <SearchCircleIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "pencil",
    icon: <PencilAltIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "user-group",
    icon: <UserGroupIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "board-chart",
    icon: <PresentationChartLineIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "share",
    icon: <ShareIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "refresh",
    icon: <RefreshIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "pound",
    icon: <CurrencyPoundIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "template",
    icon: <TemplateIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "chart-square-bar",
    icon: <ChartSquareBarIcon className="h-10 w-10 text-green-500" />,
  },
  {
    name: "beaker",
    icon: <BeakerIcon className="h-10 w-10 text-green-500" />,
  },
];

export default function Icon({ name }) {
  // console.log(icons.find((i) => i.name === name));
  if (icons.filter((i) => i.name === name).length > 0) {
    const { icon } = icons.find((i) => i.name === name);
    return icon;
  } else {
    // console.log("--------------");
    console.log({ name });
  }
  return null;
}

// export default icons;
