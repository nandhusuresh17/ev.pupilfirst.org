import React from "react";
import SectionWithHeading from "./SectionWithHeading";
import Testimonial from "./Testimonial";

let testimonialList = [
  {
    name: "Khushi Padiyar",
    batch: "",
    testimony:
      "As part of the EV courses, I have built a fully custom Electric Vehicle Power Train from scratch. It was throughout a new and valuable learning experience starting from level-1 and then getting done with the capstone project in level-11. I have acquired a lot of knowledge about the fundamentals of electric vehicles which will be beneficial for me to progress further in this field. I also want to express my heartfelt appreciation to the Pupilfirst team. You have shown me that learning can be an enjoyable and transformative experience. Working alongside such talented individuals has been a privilege and I have learned so much from each one of you. Thank you for providing the platform and the resources to enhance my skills and knowledge. Looking forward to learning more things in the future as well.",
    imageSrc: "/people/students/Khushi-padiyar.png",
  },
  {
    name: "Nalabothula Shiva Kumar",
    batch: "",
    testimony:
      "I enrolled in the Electric Vehicle (EV) course offered by Pupil First, and it was an incredible learning experience. The course included hands-on exercises that allowed me to apply my knowledge practically. The curriculum covered a wide range of topics, including electric vehicle technology, battery systems, charging infrastructure, and the future of EVs. The instructors were highly knowledgeable and passionate, providing valuable insights and guidance. Engaging with fellow students and collaborating on projects enhanced my learning. After completing the course, I felt confident and well-prepared to enter the electric vehicle industry. I'm grateful to Pupil First & Micelio for providing such a comprehensive learning experience that helped me secure a job in the EV sector shortly after graduation.",
    imageSrc: "/people/students/Shiva.jpg",
  },
];

export default function Testimonials() {
  return (
    <div>
      <SectionWithHeading heading="Student Testimonials" darkBackground={true}>
        <p className="text-white">
          Let's hear from our students who have already completed the EV
          Courses.
        </p>
        <div className="flex flex-col gap-6 items-end mt-8">
          {testimonialList.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              batch={testimonial.batch}
              testimony={testimonial.testimony}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </SectionWithHeading>
    </div>
  );
}
