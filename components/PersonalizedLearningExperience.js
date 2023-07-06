import SectionWithHeading from "./SectionWithHeading";

const facultyMembers = [
  {
    name: "Dr. Ankit Kumar Sharma",
    imgSrc: "people/faculty-members/Dr._Srikanth_R-Faculty_2_rfnguv_e6ecqi.png",
    designation: "Associate Professor",
    institute: "University of Engineering and Management, Jaipur",
  },
  {
    name: "Govind Rai Goyal",
    imgSrc: "/faculty-members/Mrs._S._Durga_Devi-Faculty_1_vvoyw4_gupiyj.png",
    designation: "Assistant Professor",
    institute: "University of Engineering and Management, Jaipur",
  },
  {
    name: "Gouthami Eragamreddy",
    imgSrc: "/faculty-members/Mrs._M._Lalitha-Faculty_1_cdx2nq_vakqu5.png",
    designation: "Assistant Professor",
    institute:
      "G.Narayanamma Institute of Technology and Science For Women, Hyderabad",
  },
  {
    name: "Dr. Swapnil Waman Khubalkar",
    imgSrc:
      "/faculty-members/Mrs._Manthena_Deepthi-Faculty_2_rwozck_ivbcn6.png",
    designation: "Assistant Professor",
    institute: "G H Raisoni College of Engineering, Nagpur",
  },
  {
    name: "Vrij Mohan Vidyarthi",
    imgSrc: "/faculty-members/Dr._B_Padmaja-Faculty_1_fnjkym_u4vrst.png",
    designation: "Associate Professor & Head",
    institute: "Tula's Institute, Dehradun",
  },
  {
    name: "Abhishek Chakravorty",
    imgSrc:
      "/faculty-members/Mr._E_Krishna_Rao_Patro-Faculty_2_ftogpf_o5jw7i.png",
    designation: "Assistant Professor",
    institute: "Tula's Institute, Dehradun",
  },
  {
    name: "Ankit Damodar",
    imgSrc: "/faculty-members/Dr._Roopa_Chandrika_wjygte.jpg",
    designation: "Professor",
    institute: "University of Engineering and Management, Jaipur",
  },
  {
    name: "Souvik Saha",
    imgSrc: "/faculty-members/Dr._S._Shanthi_kc6wqn.jpg",
    designation: "Head of the Department CSE",
    institute: "University of Engineering and Management, Jaipur",
  },
  {
    name: "Vishal Kumar Pandey",
    imgSrc: "/faculty-members/Dr._Ahmad_Jamal_iwtzao.jpg",
    designation: "Assistant Professor",
    institute: "University of Engineering and Management, Jaipur",
  },
  {
    name: "Ramchandra Adware",
    imgSrc: "/faculty-members/Mr._Tejas_Chauhan-_Faculty_1_xreey3_lckpot.png",
    designation: "Assistant Professor",
    institute: "G H Raisoni College of Engineering, Nagpur",
  },
  {
    name: "Sayak Pramanik",
    imgSrc: "/faculty-members/Ms._Dipti_Theng-Faculty_1_v5s6j9_nwzw5k.png",
    designation: "Assistant Professor",
    institute: "University of Engineering and Management, Jaipur",
  },
  {
    name: "Dr. Prashant Ranjan",
    imgSrc: "/faculty-members/Ms._Jyoti_Anand_rpupvp.png",
    designation: "Assistant Professor",
    institute: "University of Engineering and Management, Jaipur",
  },
  {
    name: "Umesh Gurnani",
    imgSrc: "/faculty-members/Prof._Hiral_M._Patel_mil4tw.jpg",
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
