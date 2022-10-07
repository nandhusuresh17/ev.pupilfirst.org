import Head from "next/head";
import SectionContainer from "../components/SectionContainer";
import DateAndContent from "../components/DateAndContent";
import DescriptionListItem from "../components/DescriptionListItem";
import SectionWithHeading from "../components/SectionWithHeading";
import ListItem from "../components/ListItem";

export default function () {
  return (
    <div>
      <Head>
        <title>LITE EV Fellowships (Teaching/Authoring)</title>
        <meta
          name="description"
          content="AICTE LITE EV Fellowship (Teaching/Authoring) is a national fellowship for
					experienced electric vehicle engineers who are interested in
					contributing time for keeping the National EV Model Curriculum up-to-date with the latest in industry."
        ></meta>
        <meta
          name="keywords"
          content="LITE EV Teaching Fellowships, LITE teaching fellowship, Apply for LITE teaching fellowship, Teaching fellowhship"
        ></meta>
        <meta name="author" content="pupilfirst.org"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="theme-color" content="#FDFAF7" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="bg-gray-900 text-white">
        <SectionContainer>
          <header className=" max-w-6xl 2xl:max-w-7xl mx-auto py-4 lg:py-8 px-4 xl:px-0">
            <div className="flex justify-between items-center">
              <img
                className="block w-28 md:w-44"
                src="logos/pupilfirst-logo-ev.svg"
                alt="Pupilfirst Logo"
              />
              <div>
                <p className="hidden md:block text-xs text-gray-500 pb-1">
                  Industry Partner
                </p>
                <div className="rounded-md bg-white px-2 py-1">
                  <img
                    className="block w-28 md:w-44"
                    src="logos/micelio-logo.jpg"
                    alt="Micelio Logo"
                  />
                </div>
              </div>
            </div>
          </header>
          <div className="grid place-items-center pt-8 pb-20">
            <p className="py-2 px-6 rounded-full bg-secondary-900 text-secondary-400">
              All India Council for Technical Education
            </p>
            <p className="text-2xl mt-3">
              Leadership in Teaching Excellence (LITE)
            </p>
            <h1 className="hero__title-gradient text-3xl lg:text-7xl 2xl:text-8xl leading-snug lg:leading-tight 2xl:leading-tight mt-3 bg-clip-text text-transparent bg-gradient-to-r from-secondary-500 to-primary-500">
              EV Fellowships (Teaching/Authoring)
            </h1>
            <p className="text-lg lg:text-xl 2xl:text-2xl max-w-3xl 2xl:max-w-5xl sm:text-center mt-6 px-4">
              AICTE LITE EV Fellowship (Teaching/Authoring) is a national fellowship for
              experienced electric vehicle engineers who are interested in
              contributing time for keeping the{" "}
              <a
                href="https://www.aicte-india.org/sites/default/files/Model_Curriculum/fINAL%20-%20NEP%202020%20Model%20Syllabus%20for%20Open%20Electives%20in%20Electric%20Vehicles.pdf"
                target="_blank"
                className="text-blue-400 font-medium underline hover:text-blue-500 transition"
              >
                National EV Model Curriculum
              </a>{" "}
              up-to-date with the latest in industry.
            </p>
            <p className="text-xl max-w-3xl text-primary-300 font-medium bg-gray-800 bg-opacity-50 text-center mt-6 py-4 px-6 rounded-lg border border-gray-700">
              We are looking for EV professionals who are passionate about both
              authoring courses and teaching these courses to students.
            </p>
            <p>
              <a
                href="https://pupilfirst.typeform.com/to/Y6q6LScN"
                target="_blank"
                className="block bg-gradient-to-r from-secondary-500 to-primary-500 lg:text-xl py-3 px-10 mt-8 rounded-lg font-semibold text-black hover:brightness-110"
              >
                Apply now
              </a>
            </p>
            <div className="bg-gray-800 flex flex-col items-center mt-24 rounded-xl">
              <p className="bg-gray-700 font-semibold px-4 py-3 rounded-b-md">
                Supported by
              </p>
              <div className="flex flex-wrap gap-6 p-12 justify-center">
                <div className="w-72 h-32 bg-white object-contain overflow-hidden p-6 rounded-lg flex items-center justify-center">
                  <img
                    src="/logos/aicte-logo.png"
                    alt="AICTE"
                    className="h-full"
                  />
                </div>
                <div className="w-72 h-32 bg-white object-contain overflow-hidden p-6 rounded-lg flex items-center justify-center">
                  <img src="/logos/micelio-logo.jpg" alt="Micelio" />
                </div>
                <div className="w-72 h-32 bg-white object-contain overflow-hidden p-6 rounded-lg flex items-center justify-center">
                  <img src="/logos/pupilfirst-logo.svg" alt="Pupilfirst" />
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
        <SectionWithHeading
          heading={
            <p>
              Everything you <br /> need to know
            </p>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="flex flex-col gap-8 col-span-7">
              <DescriptionListItem
                title="What is this?"
                content="It's a national teaching/authoring fellowship for experienced professionals in the field of Electric Vehicles who are interested in being both a course author and coach for EV courses that shall be taught in Universities across India."
              />
              <DescriptionListItem
                title="What is its purpose?"
                content="To enable industry knowledge to flow back to faculty members and students at engineering colleges across the country."
              />
              <DescriptionListItem
                title="Who is this for?"
                content="EV Engineers with at least 2 years of experience in the field of Electric Vehicles with interest in content authoring and coaching/teaching."
              />
              <DescriptionListItem
                title="When?"
                content="October 11, 2022 to October 31, 2022"
              />
              <DescriptionListItem
                title="Effort?"
                content="15 hours per week for 12 months. Daily check-in required."
              />
              <DescriptionListItem
                title="Stipend?"
                content="75,000 - 100,000 INR per month for part-time position."
              />
              <DescriptionListItem title="Location?" content="Remote" />
              <DescriptionListItem
                title="Required technical expertise?"
                content="The applicant should have previous work experience in battery design and good working knowledge with MATLAB/Ansys/Scilab or other EV related simulation tools. "
              />
              <DescriptionListItem
                title="Required teaching expertise?"
                content="The applicant should be excellent at writing high-quality technical content for EV courses as well as recording videos to aid teaching in English language. They should also have experience of giving elaborate, easy to understand answers to students’ questions. "
              />
              <DescriptionListItem
                title="Course delivery?"
                content="The EV courses are taken by students completely asynchronously. Students go through the course content prepared by Industry experts, work on assignments and submit them for review, ask questions on forums when they have doubts, get feedback to improve their submission, and resubmit their work after incorporating the feedback"
              />
              <DescriptionListItem
                title="Part-time or full-time?"
                content="Both part-time and full-time options are available."
              />
              <DescriptionListItem
                title="Volunteer?"
                content="Engineers may volunteer as part of their organisations’ CSR activity after informing their reporting manager."
              />
              <DescriptionListItem
                title="Open Source?"
                content={
                  <p>
                    Yes. All curriculums are open-sourced under a Creative
                    Commons Attribution-ShareAlike 4.0 International{" "}
                    <a
                      href="https://creativecommons.org/licenses/by-sa/4.0/legalcode"
                      target="_blank"
                      className="text-blue-400 font-medium underline hover:text-blue-500 transition"
                    >
                      (CC BY-SA 4.0)
                    </a>{" "}
                    license.
                  </p>
                }
              />
              <DescriptionListItem
                title="Certificate?	"
                content="Yes. You would be awarded a National Teaching/Authoring Fellowship Certificate jointly by the All India Council for Technical Education and Pupilfirst.org"
              />
            </div>
            <div className="hidden md:block md:col-span-5">
              <div className="sticky top-0 pt-10 lg:pt-20 -ml-px md:ml-0">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-r md:rounded-lg border border-gray-700 relative overflow-hidden shadow-lg">
                  <div className="flex space-x-2 px-2 md:px-4 lg:px-5 2xl:px-6 py-3 border-b border-gray-600">
                    <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                  </div>
                  <div className="">
                    <p className="text-secondary-400 text-lg lg:text-xl font-semibold leading-tight px-4 mt-4">
                      Join as teaching fellowship
                    </p>
                    <p className="text-xs text-gray-400 px-4">
                      Important Dates
                    </p>
                    <div className="text-xs md:text-sm mt-2 divide-y divide-gray-700">
                      <DateAndContent
                        date="October 11, 2022"
                        content="LITE EV Teaching/Authoring Fellowship Call"
                      />
                      <DateAndContent
                        date="October 31, 2022"
                        content="Last Date to Apply for EV Teaching/Authoring Fellowships"
                      />
                      <DateAndContent
                        date="November 03, 2022"
                        content="Shortlisted Fellowship Candidates Announced"
                      />
                      <DateAndContent
                        date="November 11, 2022"
                        content="LITE EV Fellows Announced"
                      />
                    </div>
                    <p className="p-4">
                      <a
                        href="https://pupilfirst.typeform.com/to/Y6q6LScN"
                        className="block bg-gradient-to-r from-secondary-500 to-primary-500 py-3 px-8 text-center rounded-lg font-semibold text-black hover:brightness-110"
                      >
                        Apply now
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWithHeading>
        <SectionWithHeading
          heading={
            <p>
              An initiative <br /> supported by
            </p>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="w-72 h-32 bg-white object-contain overflow-hidden p-6 rounded-lg flex items-center justify-center">
              <img src="/logos/aicte-logo.png" alt="AICTE" className="h-full" />
            </div>
            <div className="w-72 h-32 bg-white object-contain overflow-hidden p-6 rounded-lg flex items-center justify-center">
              <img src="/logos/micelio-logo.jpg" alt="Micelio" />
            </div>
            <div className="w-72 h-32 bg-white object-contain overflow-hidden p-6 rounded-lg flex items-center justify-center">
              <img src="/logos/pupilfirst-logo.svg" alt="Pupilfirst" />
            </div>
          </div>
        </SectionWithHeading>
        <SectionWithHeading heading="Two National Fellowships">
          <p>
            This fellowship program is created jointly by the All India Council
            for Technical Education (AICTE) and its partner Pupilfirst with
            donor funding from Micelio Mobility to catalyse the structural
            changes required to solve low-quality learning outcomes at Indian
            engineering colleges.
          </p>
        </SectionWithHeading>
        <SectionWithHeading heading="Who should apply?">
          We're looking for engineers who are really passionate about authoring
          EV course content and teaching these EV courses to students. You shall
          join a team of coaches and be responsible for dynamically keeping the
          National Model Curriculum up-to-date with industry standards.
        </SectionWithHeading>
        <SectionWithHeading heading="Requirements">
          <p>
            We are looking for industry professionals with at least two years of
            experience in the field of Electric Vehicles. Following are the
            requirements for this position:
          </p>
          <ul className="list-none mt-8">
            <ListItem content="Should work in an EV related company during the last two years in a technical role." />
            <ListItem content="Should have work experience in battery design and good working knowledge with MATLAB, Scilab, Ansys. " />
            <ListItem content="Should have experience working with battery management systems (working with Kalman Filter method of SOC estimation would be a bonus)." />
            <ListItem content="Having experience working with/in a college level motorsport team. (FSAE Supra, BAJA, etc.) will be a bonus." />
            <ListItem content="Should have prior experience in teaching technical skills (offline and/or online), such as conducting workshops, giving seminars, personal coaching, writing instructional articles, etc. are desirable." />
            <ListItem content="Should have interest and aptitude for creating high-quality technical course content, both textual and recorded videos." />
            <ListItem content="Should have the ability to simplify complex topics and be able to explain these topics using day to day examples." />
            <ListItem content="Should have excellent English writing and speaking skills - you will be responsible for the education of remote students and faculty development program for faculty members, so communication skills are critical." />
            <ListItem content="Should have access to a good internet connection." />
            <ListItem content="Should be comfortable working in a remote team environment." />
            <ListItem content="Should be comfortable working with the office tools we commonly use; Google Workspace, Discord, Trello." />
            <ListItem content="Experience in Power electronics is a bonus." />
          </ul>
        </SectionWithHeading>
        <SectionWithHeading heading="Key Responsibilities">
          <p>
            As a Teaching Fellow for a nationally approved engineering
            curriculum, you play an instrumental role in course implementation,
            evaluation and providing feedback for iterative course development
            processes.
          </p>
          <p className="mt-4">
            Currently, we have{" "}
            <a
              href="https://www.pupilfirst.school/courses/641/curriculum"
              target="_blank"
              className="text-blue-400 font-medium underline hover:text-blue-500 transition"
            >
              EV101
            </a>{" "}
            and{" "}
            <a
              href="https://www.pupilfirst.school/courses/643/curriculum"
              target="_blank"
              className="text-blue-400 font-medium underline hover:text-blue-500 transition"
            >
              EV201
            </a>{" "}
            courses that are being offered to students. We have planned to
            develop an advanced EV301 course.
          </p>
          <div className="mt-8">
            <h4 className="text-2xl text-primary-500">
              Your Responsibilities Include:
            </h4>
            <ul className="list-none mt-4">
              <ListItem content="Updating existing course content and authoring new content, both as text and videos, to meet student demands and match industry standards." />
              <ListItem content="Assist in selecting Teaching Assistants (TAs) from students who have already completed the course. These TAs will help you in course implementation processes at Universities." />
              <ListItem content="With the assistance of teaching assistants (TAs), ensure that students going through a course meet the expected course outcomes. This includes answering their questions in the community (forums), reviewing student submissions and providing feedback, etc. regularly." />
              <ListItem content="Mentor TAs to enable them to perform at their best in their duties." />
              <ListItem content="Provide technical inputs for improvement of the teaching processes." />
              <ListItem content="Assist in identifying more course authors when the need arises." />
            </ul>
          </div>
        </SectionWithHeading>
        <SectionWithHeading heading="Impact">
          <p>
            Your knowledge would initially be passed on to engineering faculty
            and then to students from higher education institutes affiliated
            under AICTE across the nation.
          </p>
          <div></div>
        </SectionWithHeading>
        <SectionWithHeading heading="Schedule">
          <div className="bg-gray-800 border border-gray-700 rounded-lg divide-y divide-gray-700">
            <DateAndContent
              date="October 11, 2022"
              content="LITE EV Teaching/Authoring Fellowship Call"
            />
            <DateAndContent
              date="October 31, 2022"
              content="Last Date to Apply for EV Teaching/Authoring Fellowships"
            />
            <DateAndContent
              date="November 03, 2022"
              content="Shortlisted Fellowship Candidates Announced"
            />
            <DateAndContent
              date="November 11, 2022"
              content="LITE EV Fellows Announced"
            />
          </div>
        </SectionWithHeading>
        <SectionWithHeading heading="Rolling Evaluations">
          <p>
            All incoming applications are evaluated on a first-come, first-serve
            basis, and if there are enough qualified applicants, the application
            process will close earlier. Therefore, we encourage you to apply
            early if you are interested in being a part of this fellowship
            program.
          </p>
          <p className="mt-4">
            Once your application is shortlisted, we will reach out to you with
            more details on assignments/tasks to be done by you that will help
            us understand your skill in authoring and teaching.
          </p>
          <div className="flex items-start md:items-center gap-4 p-4 rounded-lg bg-gray-800 mt-10">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="rgb(15 149 78)"
                className="flex-shrink-0 w-6 h-6 text-primary-400"
                viewBox="0 0 16 16"
              >
                <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
              </svg>
            </div>
            <p className="text-lg">
              <span className="font-semibold">31 October 2022:</span> The last
              date to apply for LITE Industry Fellowships.
            </p>
          </div>
          <div className="mt-10 bg-gradient-to-r from-secondary-500 to-primary-500 px-6 py-6 flex items-center justify-between rounded-lg text-black">
            <h3>Become a teaching/authoring fellow</h3>
            <p>
              <a
                href="https://pupilfirst.typeform.com/to/Y6q6LScN"
                className="block bg-black py-3 px-8 rounded-lg font-semibold text-primary-500 hover:brightness-110"
              >
                Apply Now for LITE EV Teaching/Authoring Fellowship
              </a>
            </p>
          </div>
          <div className="mt-12">
            <h3 className="text-primary-500">Questions</h3>
            <p>
              If you have any questions, please feel free to contact LITE
              teaching/authoring fellowship support at{" "}
              <a
                href="mailto:teaching@pupilfirst.org"
                className="text-secondary-500 underline hover:text-secondary-300"
              >
                teaching@pupilfirst.org
              </a>
            </p>
          </div>
        </SectionWithHeading>
      </main>
    </div>
  );
}
