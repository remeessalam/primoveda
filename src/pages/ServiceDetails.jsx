import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { allServices } from "../constants";

const ServiceDetails = () => {
  const { serviceName } = useParams();
  const data = allServices.find((item) => item.title === serviceName);

  if (!data) {
    return <Navigate to="/services" />;
  }

  // Format paragraphs with line breaks
  const formatParagraphs = (text) => {
    return text?.split("\n").map((paragraph, index) => (
      <p key={index} className="mb-4">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="flex flex-col gap-10 md:px-5">
      <img
        data-aos="fade-up"
        src={data.img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt={data.title}
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          {data.title}
        </h2>
        <div data-aos="fade-up" className="description">
          {formatParagraphs(data.detailsPageContent.firstPara)}
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-4">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Our Services
        </h2>
        <img
          data-aos="fade-up"
          src={data.img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt={data.title}
        />
        <div data-aos="fade-up" className="description">
          {formatParagraphs(data.detailsPageContent.servicesSection)}
        </div>
      </div>

      {/* Small Paragraph Section */}
      <div className="mt-3 flex flex-col gap-4">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Overview
        </h2>
        <div data-aos="fade-up" className="description">
          {formatParagraphs(data.smallPara)}
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="mt-3 flex flex-col gap-4">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Key Benefits
        </h2>
        <ul data-aos="fade-up" className="list-disc pl-5 space-y-2">
          {data.keyBenefits.map((benefit, index) => (
            <li key={index} className="description">
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetails;
