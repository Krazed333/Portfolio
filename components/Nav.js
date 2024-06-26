// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiDocumentText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "Projects", path: "/Projects", icon: <HiViewColumns /> },
  {
    name: "Resume",
    path: "https://drive.google.com/file/d/16q29mShokhSnN7sd5KxmRW21iTXEmmpS/view?usp=sharing",
    icon: <HiDocumentText />,
    isExternal: true, // Add a flag to indicate this is an external link
    target: "_blank", // Add a target to open the link in a new tab
    rel: "noopener noreferrer", // Add rel for security reasons when using target="_blank"
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

//next link
import Link from "next/link";

//next router
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
      style={{ zIndex: 1 }}
    >
      {/* inner container */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-2 md:px-10 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return link.isExternal ? (
            <a
              className={`${
                link.path === pathname && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
              target={link.target}
              rel={link.rel}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded -[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-white border-l- border-y-trasparent border-y-[6px] border-r-white border-r- w-0 h-0"></div>
                </div>
              </div>
              {/* icon */}
              <div>{link.icon}</div>
            </a>
          ) : (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded -[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-white border-l- border-y-trasparent border-y-[6px] border-r-white border-r- w-0 h-0"></div>
                </div>
              </div>
              {/* icon */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
