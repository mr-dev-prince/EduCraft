import React from "react";
import AuthenticityCard from "../fragments/AuthenticityCard";
import CourseCard from "../fragments/CourseSection";
import AchieverSection from "../fragments/AchieverSection";
import TestimonialSection from "../fragments/TestimonialSection";
import ChooseUsSection from "../fragments/ChooseUsSection";
import LabPromotionSection from "../fragments/LabPromotionSection";
import PartnersSection from "../fragments/PartnersSection";
import HomeContent from "../fragments/HomeContent";

const Home = () => {
  return (
    <>
      <div className="flex justify-between md:px-16 px-4 items-center h-fit md:h-[90vh] py-8 w-full">
        <HomeContent />
      </div>
      <AuthenticityCard />
      <CourseCard />
      <AchieverSection />
      <TestimonialSection heading="Testimonials" />
      <ChooseUsSection />
      <LabPromotionSection />
      <PartnersSection />
    </>
  );
};

export default Home;
