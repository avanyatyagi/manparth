import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className=" w-full text-black">
      <div className="container mx-auto p-4 flex flex-col items-center relative mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-center mb-10 ">
          <div className="mb-8 md:mb-0 flex flex-col justify-between items-center mt-10">
            <div className="flex flex-row items-center font-bold gap-4">
              <img
                src={logo}
                width={60}
                height={60}
                className=" h-auto text-center justify-center"
                alt=""
              />
              <span className="text-custom-dark font-code text-2xl">
                {" "}
                Man<span className="text-custom-light">Parth</span>
              </span>
            </div>
            <div className="flex-1"></div>
          </div>
          <div>
            {/* web view */}

            <div className="mb-8  md:mb-0 text-left ml-20 hidden md:block mt-10">
              <h3 className="text-lg font-bold mb-4 text-pe text-Roboto">
                Information
              </h3>
              <nav className="space-y-2">
                <a
                  href="#"
                  className=" hover:text-pe transition duration-300 block"
                >
                  Home
                </a>
                <a
                  href="#"
                  className=" hover:text-pe transition duration-300 block"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className=" hover:text-pe transition duration-300 block"
                >
                  Services
                </a>
                <a
                  href="#"
                  className=" hover:text-pe transition duration-300 block"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>

          <div className="mb-8 md:mb-0 text-left hidden md:block mt-10">
            <h3 className="text-lg font-bold mb-4 text-pe">Services</h3>
            <nav className="space-y-2">
              <a
                href="#"
                className=" hover:text-pe transition duration-300 block"
              >
                Website Development
              </a>
              <a
                href="#"
                className=" hover:text-pe transition duration-300 block"
              >
                Application Development
              </a>
              <a
                href="#"
                className=" hover:text-pe transition duration-300 block"
              >
                Product Development
              </a>
              <a
                href="#"
                className=" hover:text-pe transition duration-300 block"
              >
                Branding & Social Media
              </a>
              {/* <a
                href="#"
                className=" hover:text-pe transition duration-300 block"
              >
                Digital Marketing
              </a>
              <a
                href="#"
                className=" hover:text-pe transition duration-300 block"
              >
                AI Automation
              </a> */}
            </nav>
          </div>
          <div className="mb-8 md:mb-0 text-left hidden md:block mt-10">
            <h3 className="text-lg font-bold mb-4 text-pe">Company</h3>
            <nav className="space-y-2">
              <a
                href="#"
                className=" hover:text-pe transition duration-300 block"
              >
                Career
              </a>
              <a
                href="#"
                className=" hover:text-pe transition duration-300 block"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className=" hover:text-pe transition duration-300 block"
              >
                Terms & Condition
              </a>
              <a
                href="#"
                className=" hover:text-pe transition duration-300 block"
              >
                Privacy Policy
              </a>
            </nav>
          </div>

          {/* <div className="hidden md:block">
            <Subscribe />
          </div> */}
        </div>
        {/* social as */}
        {/* <div className="md:hidden w-[60%]">
          <Subscribe />
        </div> */}
        <div className="fcc fc text-center justify-center p-5">
          <div className="flex flex-row space-x-6 items-center">
            {/* <a
              href="#"
              className="flex items-center py-2"
            >
              <Image src={sm1} height={40} alt="" />
            </a>
            <div className="w-[2px] h-10 bg-gray-300"></div> */}
            <a
              href="https://www.aedin.com/company/astrixmarketing/"
              target="_blank"
              className="text-green-500 hover:text-green-700 flex items-center py-2"
            >
              <img src="" height={40} alt="" />
            </a>
            <div className="w-[2px] h-10 bg-gray-300"></div>
            {/* <a
              href="#"
              className="text-red-500 hover:text-red-700 flex items-center py-2"
            >
              <Image src={sm3} height={40} alt="" />
            </a>
            <div className="w-[2px] h-10 bg-gray-300"></div> */}
            <a
              target="_blank"
              href="https://www.instagram.com/astrix_co_in/"
              className="text-pe hover:text-pe flex items-center py-2"
            >
              <img src="" height={40} alt="" />
            </a>
            {/* <div className="w-[2px] h-10 bg-gray-300"></div> */}
            {/* <a
              href="#"
              className="text-yellow-500 hover:text-yellow-700 flex items-center py-2"
            >
              <Image src={sm5} height={40} alt="" />
            </a> */}
          </div>
        </div>
      </div>

      <div className=" text-center text-custom-dark text-[15rem] font-medium font-Roboto pb-4  ">
        manparth
      </div>
    </footer>
  );
}

export default Footer;
