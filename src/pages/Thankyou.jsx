import { Link } from "react-router-dom";
// import { companyDetails, logoImg, routes } from "../constant";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { clientDetails, logo, websitePagesLinks } from "../constants";
const Thankyou = () => {
  const navItems = [
    {
      label: "[ LET'S TALK AI ]",
      path: "/services/artificial-intelligence",
      extraClasses: "text-black hover:text-blue-400",
    },
    { label: "Home", path: "/", extraClasses: "hover:text-blue-400 " },
    { label: "About", path: "/about-us", extraClasses: "hover:text-blue-400" },
    {
      label: "Services",
      path: "/services",
      extraClasses: "hover:text-blue-400",
    },
    // Uncomment the below links if needed
    {
      label: "Industries",
      path: "/industries",
      extraClasses: "hover:text-blue-400",
    },
    {
      label: "Portfolio",
      path: "/portfolio",
      extraClasses: "hover:text-blue-400",
    },
    {
      label: "Blogs",
      path: "/blogs",
      extraClasses: "hover:text-blue-400",
    },
    // { label: "PORTFOLIO", path: "/portfolio", extraClasses: "hover:text-blue-400" },
    // { label: "RESOURCES", path: "/resources", extraClasses: "hover:text-blue-400" },
    {
      label: "Contact Us",
      path: "/contact-us",
      extraClasses:
        "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <div className="py-4 top-0 w-full bg-black/10 backdrop-blur-md z-50 text-black">
        <div className="wrapper flex justify-between items-center gap-10">
          <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
            <Link to="/" className="cursor-pointer relative">
              <img src={logo} className="h-[4rem] md:h-[5rem] " alt="logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className="wrapper  h-full flex flex-col items-center py-[15rem] gap-3 text-black text-center">
        <h1 className="heading-1">Thank You!</h1>
        <p className="desc !font-semibold">
          We have received your message and will get back to you as soon as
          possible.
        </p>
        <Link to="/" className="primary-btn w-fit mt-4 text-black">
          Home
        </Link>
      </div>
      <div className="py-14 bg-primary/10">
        <div className="wrapper text-black">
          <div className="flex md:flex-row flex-col justify-between gap-10">
            <div className="flex flex-col items-center">
              <img src={logo} className="h-[4rem] md:h-[5rem]" alt="" />
              <p className="desc md:max-w-[15rem] text-sm text-center mt-5">
                We have rapidly grown into a trusted partner for organizations
                seeking digital transformation, enhanced operational efficiency.
              </p>
            </div>
            <div className="flex md:flex-row flex-col gap-10">
              {/* <div className="flex flex-col gap-2">
                <h6 className="font-medium mb-1">Quick Links</h6>
                {websitePagesLinks.map(({ id, title, link }) => (
                  <Link
                    key={id}
                    to={link}
                    className="text-white/70 desc text-sm hover:text-primary transition-all duration-300"
                  >
                    {title}
                  </Link>
                ))}
              </div> */}
              <div className="flex flex-col gap-3">
                <p className="text-lg font-semibold">Quick Links</p>
                <Link to="/about-us" className="cursor-pointer">
                  About Us
                </Link>
                <Link to="/services" className="cursor-pointer">
                  Services
                </Link>
                <Link to="/contact-us" className="cursor-pointer">
                  Contact Us
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="font-medium mb-1">Contact Us</h6>
                <div className="flex flex-col">
                  <h6 className="text-[.9rem] mb-1">Phone</h6>
                  <Link
                    to={`tel:${clientDetails.phone}`}
                    className="text-black desc text-sm"
                  >
                    {clientDetails.phone}
                  </Link>
                </div>
                <div className="flex flex-col mt-2">
                  <h6 className="text-[.9rem] mb-1">Office Address</h6>
                  <p className="text-black desc text-sm max-w-[15rem]">
                    {clientDetails.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 mt-7 border-t text-gray-500 border-primary w-full">
            <div className="flex justify-center gap-5 w-full">
              <div className="flex gap-5 items-center mt-5">
                <Link>
                  <BsFacebook className="text-xl text-gray-500 hover:text-primary transition-all duration-300" />
                </Link>
                <Link>
                  <BsTwitter className="text-xl text-gray-500 hover:text-primary transition-all duration-300" />
                </Link>
                <Link>
                  <BsLinkedin className="text-xl text-gray-500 hover:text-primary transition-all duration-300" />
                </Link>
                <Link>
                  <BsYoutube className="text-xl text-gray-500 hover:text-primary transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
