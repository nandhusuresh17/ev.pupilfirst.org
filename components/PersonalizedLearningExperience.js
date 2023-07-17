import SectionWithHeading from "./SectionWithHeading";

const facultyMembers = [
  {
    name: "Dr. Ankit Kumar Sharma",
    imgSrc: "people/faculty-members/Dr_Ankit_Kumar_Sharma.png",
    designation: "Associate Professor",
    institute: "University of Engineering and Management, Jaipur",
  },
  {
    name: "Govind Rai Goyal",
    imgSrc: "people/faculty-members/Govind_Rai_Goyal.png",
    designation: "Assistant Professor",
    institute: "University of Engineering and Management, Jaipur",
  },
  {
    name: "Gouthami Eragamreddy",
    imgSrc: "people/faculty-members/Gouthami_Eragamreddy.png",
    designation: "Assistant Professor",
    institute:
      "G. Narayanamma Institute of Technology and Science For Women, Hyderabad",
  },
  {
    name: "Dr. Swapnil Waman Khubalkar",
    imgSrc: "people/faculty-members/Swapnil_Khubalkar.png",
    designation: "Assistant Professor",
    institute: "G H Raisoni College of Engineering, Nagpur",
  },
  {
    name: "Vrij Mohan Vidyarthi",
    imgSrc: "people/faculty-members/Vrij_Mohan_Vidyarthi.png",
    designation: "Assistant Professor",
    institute: "Tula's Institute, Dehradun",
  },
  {
    name: "Abhishek Chakravorty",
    imgSrc: "people/faculty-members/Abhishek_Chackravorty.jpg",
    designation: "Assistant Professor",
    institute: "Tula's Institute, Dehradun",
  },
  {
    name: "Ankit Damodar",
    imgSrc: "people/faculty-members/Ankit_Damodar.png",
    designation: "Assistant Professor",
    institute: "University of Engineering and Management, Jaipur",
  },
  {
    name: "Souvik Saha",
    imgSrc: "people/faculty-members/Souvik_Saha.png",
    designation: "Assistant Professor",
    institute: "University of Engineering and Management, Jaipur",
  },
  {
    name: "Vishal Kumar Pandey",
    imgSrc: "people/faculty-members/Vishal_Kumar_Pandey.png",
    designation: "Associate Professor",
    institute: "University of Engineering and Management, Jaipur",
  },
  {
    name: "Ramchandra Adware",
    imgSrc: "people/faculty-members/Ramchandra_Adware.png",
    designation: "Assistant Professor",
    institute: "G H Raisoni College of Engineering, Nagpur",
  },
  {
    name: "Sayak Pramanik",
    imgSrc: "people/faculty-members/Sayak_Pramanik.png",
    designation: "Assistant Professor",
    institute: "University of Engineering and Management, Jaipur",
  },
  {
    name: "Dr. Prashant Ranjan",
    imgSrc: "people/faculty-members/Prashant_Ranjan.png",
    designation: "Associate Professor",
    institute: "University of Engineering and Management, Jaipur",
  },
  {
    name: "Umesh Gurnani",
    imgSrc: "people/faculty-members/Umesh_Gurnani.png",
    designation: "Head of Department",
    institute: "University of Engineering and Management, Jaipur",
  },
];

let FacultyMember = ({ name, imgSrc, designation, institute }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full object-cover overflow-hidden">
        <img
          className="w-32 h-32 rounded-full object-cover overflow-hidden"
          src={imgSrc}
          alt={"Photo of" + name}
        />
      </div>
      <p className="mt-4 font-semibold text-white text-lg">{name} </p>
      <p className="text-gray-200 pt-1.5 text-sm">{designation}</p>
      <p className="text-gray-400 text-sm">{institute}</p>
    </div>
  );
};

export default function PersonalizedLearningExperiece() {
  return (
    <SectionWithHeading heading="Get Personalised Guidance.">
      <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
        As a beginner, we expect you to make many mistakes. Get personalised
        guidance from LITE faculty members & student teaching assistants to find
        answers and confidently move ahead.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 py-16">
        {facultyMembers.map((facultyMember, index) => (
          <FacultyMember
            key={index}
            name={facultyMember.name}
            imgSrc={facultyMember.imgSrc}
            designation={facultyMember.designation}
            institute={facultyMember.institute}
          />
        ))}
      </div>
    </SectionWithHeading>
  );
}
