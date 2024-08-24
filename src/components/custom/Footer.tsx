import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="w-full text-black">
      <div className="p-4 flex relative mt-10 justify-between">
        <div className="flex flex-col w-[20%]">
          <div className="flex items-center font-bold gap-4 mb-2">
            <img src={logo} width={60} height={60} className="h-auto" alt="" />
            <span className="text-custom-dark font-code text-[2.5rem]">
              Man<span className="text-custom-light">Parth</span>
            </span>
          </div>
          <div className="flex flex-col  text-[1.3rem] space-y-2">
            <span>
              G-496, 7th Cross St, Pocket G, Sector Alpha II, Greater Noida,
              Uttar Pradesh 201308
            </span>
            <span>+91 9876543210</span>
            <span>manparthbharat@outlook.com</span>
          </div>
        </div>

        <div className="hidden md:flex space-x-20 text-[1.8rem]">
          <div>
            <h3 className=" font-bold mb-4 ">Information</h3>
            <nav className="space-y-2 text-[1.3rem]">
              <a
                href="#"
                className="hover:text-pe transition duration-300 block"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-pe transition duration-300 block"
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:text-pe transition duration-300 block"
              >
                Services
              </a>
              <a
                href="#"
                className="hover:text-pe transition duration-300 block"
              >
                Contact
              </a>
            </nav>
          </div>

          <div>
            <h3 className=" font-bold mb-4 text-pe">Services</h3>
            <nav className="space-y-2  text-[1.3rem]">
              <a
                href="#"
                className="hover:text-pe transition duration-300 block"
              >
                Website Development
              </a>
              <a
                href="#"
                className="hover:text-pe transition duration-300 block"
              >
                Application Development
              </a>
              <a
                href="#"
                className="hover:text-pe transition duration-300 block"
              >
                Product Development
              </a>
              <a
                href="#"
                className="hover:text-pe transition duration-300 block"
              >
                Branding & Social Media
              </a>
            </nav>
          </div>

          <div>
            <h3 className="  font-bold mb-4">Company</h3>
            <nav className="space-y-2  text-[1.3rem]">
              <a
                href="#"
                className="hover:text-pe transition duration-300 block"
              >
                Career
              </a>
              <a
                href="#"
                className="hover:text-pe transition duration-300 block"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="hover:text-pe transition duration-300 block"
              >
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="#"
            target="_blank"
            className="text-green-500 hover:text-green-700"
          >
            <img src="" height={40} alt="" />
          </a>
          <a href="#" target="_blank" className="text-pe hover:text-pe">
            <img src="" height={40} alt="" />
          </a>
        </div>
      </div>

      <div
  className="text-center text-[20rem] font-medium pb-2 opacity-30 bg-custom-main-gradient bg-clip-text text-transparent"
>
  manparth
</div>


    </footer>
  );
}

export default Footer;
