import { useLocation } from "react-router-dom";
import { useState } from "react";
import { HamburgerMenu } from "../ui/Header";
import manparth from "../../assets/logo.png"
import MenuSvg from '../ui/MenuSvg'
const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      enablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full  items-center justify-center z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center xl:px-[5rem] px-[2rem]">
        <a className="w-[12rem] xl:mr-8 flex flex-row items-center gap-4 font-bold" href="#hero">
          <img src={manparth} width={60} height={60} alt="" />
          <span className="text-custom-dark font-code text-2xl"> Man<span className="text-custom-light">Parth</span></span>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-semibold z-10 text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        {/* <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a> */}
        <a className="hidden lg:flex p-3 px-4 text-sm bg-custom-dark rounded-full text-white" href="https://www.linkedin.com/in/srivastava4nishant/">
          Lets Connect
        </a>

        <button
          className="ml-auto lg:hidden"
          // px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
    </div>
  );
};

export default Header;
function enablePageScroll() {
  throw new Error("Function not implemented.");
}

const navigation = [
  { id: 1, title: "Home", url: "#hero" ,onlyMobile: true},  
  { id: 2, title: "About", url: "#about" },
  { id: 3, title: "Projects", url: "#projects" },
  { id: 4, title: "Contact", url: "#contact" },
];

