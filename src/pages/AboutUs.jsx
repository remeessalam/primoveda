import React, { lazy } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import img1 from "../assets/aboutus-1.webp";
import bannerImg from "../assets/about-us-banner.webp";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import GetInTouch from "../components/GetInTouch";
import CallToAction from "../components/CallToAction";
import { approachData, valuesData, whyChooseUsData } from "../constants";
import { GiBrain, GiTargetPrize } from "react-icons/gi";

const PageBanner = lazy(() => import("../components/Website/PageBanner"));
const BrandLogos = lazy(() => import("../components/BrandLogos"));

const AboutUs = () => {
  return (
    <>
      <Header />
      <PageBanner
        position="left"
        title={"About Us"}
        banner={bannerImg}
        description="To be the world’s most trusted partner in AI technology and digital transformation, empowering businesses of all sizes to thrive in an increasingly complex and competitive landscape."
      />
      <section className="py-[3rem] wrapper grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col">
          <h1 data-aos="fade-right" className="heading">
            INVEDA SOLUTIONS LLP Leading in Software Development and Advanced
            Tech Solutions
          </h1>
          <p data-aos="fade-right" className="description mt-4">
            INVEDA SOLUTIONS LLP was founded with a vision to transform
            businesses by leveraging the power of AI and advanced technologies.
            Our passion for innovation drives us to deliver solutions that not
            only meet industry standards but set new ones. With a global reach
            and a team of experts dedicated to excellence, we are committed to
            helping our clients achieve unparalleled growth and success.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="relative w-full h-full lg:min-h-[50vh] rounded-lg overflow-hidden"
        >
          <img
            loading="lazy"
            src={img1}
            alt="about us"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Vision & Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <GiBrain className="w-12 h-12 mb-4 text-blue-600 mx-auto" />
              <h3 className="text-xl font-semibold text-center mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-center">
                We aspire to be the leading force in helping businesses harness
                the full potential of cutting-edge technology, driving growth,
                efficiency, and meaningful change.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <GiTargetPrize className="w-12 h-12 mb-4 text-blue-600 mx-auto" />
              <h3 className="text-xl font-semibold text-center mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-center">
                Our mission is to empower businesses with customized digital
                solutions that meet today’s challenges and prepare them for the
                future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsData.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {valuesData.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default AboutUs;
