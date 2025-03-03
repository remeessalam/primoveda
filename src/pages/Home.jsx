import React, { lazy, memo } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import aboutImg from "../assets/aboutus-3.jpg";
import aboutImg2 from "../assets/why-ai-matters.webp";
import ceoImg from "../assets/ceo.jpg";
import BrandLogos from "../components/BrandLogos";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const Banner = lazy(() => import("../components/Website/Banner"));
const TrustWorthySection = lazy(() =>
  import("../components/TrustWorthySection")
);
const IndustriesWeServe = lazy(() => import("../components/IndustriesWeServe"));
const HomePageServicesList = lazy(() =>
  import("../components/HomePageServicesList")
);
const GetInTouch = lazy(() => import("../components/GetInTouch"));

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <section id="about-us" className="relative pt-[5rem] pb-[3rem]">
        <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
        <div className="wrapper">
          <p
            data-aos="fade-down"
            className="gradient-text uppercase text-center mb-5 md:mb-7"
          >
            About Us
          </p>
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            <div className="flex flex-col">
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg}
                alt="about"
                className="h-full w-full aspect-video rounded-xl object-cover"
              />
            </div>
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="heading">
                Innovation to transform your organization.
              </h3>
              <p className="description">
                At INVEDA SOLUTIONS, we are driven by a passion for innovation
                and a commitment to delivering reliable, future-proof solutions
                for businesses of all sizes. From the very beginning, our goal
                has been to help organizations navigate the complexities of the
                digital world with customized, secure, and scalable technology
                solutions that deliver real results.
                <br />
                <br /> We believe that technology isn’t just about solving
                problems — it’s about unlocking new possibilities. Our expertise
                spans across a range of digital services, from blockchain
                development to mobile apps and artificial intelligence, all
                designed to transform your business and help you stay ahead in
                an increasingly competitive landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomePageServicesList />
      <TrustWorthySection />
      <section id="about-us" className="relative py-[3rem]">
        <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="md:flex hidden heading">Our Vision</h3>
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg2}
                alt="about"
                className="md:hidden h-full w-full aspect-video rounded-xl object-cover"
              />
              <h3 className="md:hidden heading">Our Vision</h3>

              <p className="description">
                We aspire to be the leading force in helping businesses harness
                the full potential of cutting- edge technology. Our vision is a
                world where organizations leverage innovative tools to drive
                their growth, enhance operational efficiency, and create
                meaningful change. By pushing the boundaries of what’s possible
                with technology, we aim to help our clients build a stronger,
                more agile future.
              </p>
              <h3 className="heading">Our Mission</h3>
              <p className="description">
                Our mission is simple: to empower businesses with customized
                digital solutions that not only meet the challenges of today but
                also prepare them for the future. We take pride in delivering
                high-quality, tailored results that are built to last. Our
                approach is rooted in collaboration, transparency, and a deep
                understanding of our clients’ unique needs, ensuring we always
                provide solutions that align with their goals and vision.
              </p>
            </div>
            <div className="md:flex hidden flex-col">
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg2}
                alt="about"
                className="h-full w-full aspect-video rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <IndustriesWeServe />
      <CallToAction />
      <Portfolio />
      <Testimonials />
      <section className="wrapper">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[15%_auto] items-center gap-7 pt-[5rem] pb-[3rem]">
          <div className="md:aspect-[3/4] w-full overflow-hidden flex flex-col">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"
              loading="lazy"
              alt="ceo"
              className="h-full w-fit md:w-full rounded-ss-3xl rounded-ee-3xl max-h-[20rem] object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="heading">Our CEO Message</h3>
            <p className="description">
              At INVEDA SOLUTIONS, we leverage the power of AI to create
              transformative digital experiences that elevate businesses. Our
              commitment to innovation drives us to develop intelligent
              solutions that enhance efficiency and foster growth. Together, we
              can turn your ideas into reality and shape a smarter future.
            </p>
          </div>
        </div>
      </section>
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default memo(Home);
