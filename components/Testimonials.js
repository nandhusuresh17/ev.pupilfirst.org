import React from "react";
import SectionWithHeading from "./SectionWithHeading";
import Testimonial from "./Testimonial";

let testimonialList = [
  {
    name: "Khushi Padiyar",
    batch: "EV TA Training Batch 2",
    testimony:
      "As part of the EV courses, I have built a fully custom Electric Vehicle Power Train from scratch. It was throughout a new and valuable learning experience starting from level-1 and then getting done with the capstone project in level-11. I have acquired a lot of knowledge about the fundamentals of electric vehicles which will be beneficial for me to progress further in this field. I also want to express my heartfelt appreciation to the Pupilfirst team. You have shown me that learning can be an enjoyable and transformative experience. Working alongside such talented individuals has been a privilege and I have learned so much from each one of you. Thank you for providing the platform and the resources to enhance my skills and knowledge. Looking forward to learning more things in the future as well.",
    imageSrc: "/people/students/Khushi-padiyar.png",
  },
  {
    name: "Nalabothula Shiva Kumar",
    batch: "EV TA Training Batch 1",
    testimony:
      "I enrolled in the Electric Vehicle (EV) course offered by Pupilfirst, and it was an incredible learning experience. The course included hands-on exercises that allowed me to apply my knowledge practically. The curriculum covered a wide range of topics, including electric vehicle technology, battery systems, charging infrastructure, and the future of EVs. The instructors were highly knowledgeable and passionate, providing valuable insights and guidance. Engaging with fellow students and collaborating on projects enhanced my learning. After completing the course, I felt confident and well-prepared to enter the electric vehicle industry. I'm grateful to Pupil First & Micelio for providing such a comprehensive learning experience that helped me secure a job in the EV sector shortly after graduation.",
    imageSrc: "/people/students/Shiva.jpg",
  },
  {
    name: "Chetan Shivprakash Agroya",
    batch: "EV TA Training Batch 1",
    testimony:
      "I wasn't initially interested in EVs, but after taking this self-paced course, my passion for them skyrocketed. The course covered everything about EVs and their subsystems like motors and motor controller, batteries and BMS, charging infrastructure, retrofitting and so on. Throughout the course, we engaged in software as well as hardware-based activities such as simulating mathematical models of EVs, analyzing motors, and even constructing an EV powertrain prototype from scratch. After completing the course, I was excited to have an opportunity to work as a teaching assistant while still studying. The course gave me the knowledge and confidence to tackle EV engineering projects, and the supportive teaching staff made the whole learning experience enjoyable and rewarding.",
    imageSrc: "/people/teaching-assistants/Chetan_Shivprakash_Agroya.jpg",
  },
  {
    name: "Gurudayal Singh Dalawat",
    batch: " EV TA Training Batch 1",
    testimony:
      "When I got selected for the course in April 2021, I had no idea what I would be doing, but as time went on, I was able to obtain an understanding of things and how to go about it. This was possible due to continuous help and support from our Coach, Pupilfirst team and my peers. From the fundamentals of EV technology to more complex ideas in drivetrains and charging infrastructure, the course addresses a wide range of topics. The courses' emphasis on practical application is the one aspect I enjoy. I had the chance to interact with EV parts, such as batteries, motors, and the motor controller, through exercises and simulations that were both practical and realistic. This practical experience improved my theoretical understanding while also allowing me to do something I enjoy a lot. Becoming a TA after completing the courses opened up a new perspective on how simple the concepts were and enhances the learning. The team's support at Pupilfirst is amazing, enabling us to collaborate with freedom and remains supportive in nature.",
    imageSrc: "/people/teaching-assistants/Gurudayal_Singh_Dalawat.jpg",
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
