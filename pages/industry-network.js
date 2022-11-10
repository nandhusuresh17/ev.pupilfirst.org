import Head from "next/head";
import BeginnerToAdvanceJourney from "../components/BeginnerToAdvanceJourney";
import DateAndContent from "../components/DateAndContent";
import DescriptionListItem from "../components/DescriptionListItem";
import SectionContainer from "../components/SectionContainer";
import SectionWithHeading from "../components/SectionWithHeading";

export default function Page() {
  return (
    <div>
      <Head>
        <title>LITE EV Industry Hiring Network</title>
        <meta
          name="description"
          content="Would you like to be an early adopter to hire student EV engineers trained in a curriculum developed by practicing industry professionals and approved as the National Model Curriculum for Electric Vehicle Technology by the “All India Council for Technical Education (AICTE)”?
          "
        ></meta>
        <meta
          name="keywords"
          content="LITE EV Industry Hiring Network, Hire software engineer interns, Apply for LITE industry network"
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
          <div className="grid place-items-center pt-8 pb-16">
            <p className="py-2 px-6 rounded-full bg-secondary-900 text-secondary-400">
              All India Council for Technical Education
            </p>
            <p className="text-2xl mt-3">
              Leadership in Teaching Excellence (LITE)
            </p>
            <h1 className="hero__title-gradient text-3xl lg:text-7xl 2xl:text-8xl leading-snug lg:leading-tight 2xl:leading-tight mt-3 bg-clip-text text-transparent bg-gradient-to-r from-secondary-500 to-primary-500">
              EV Industry Hiring Network
            </h1>
            <p className="text-lg lg:text-xl 2xl:text-2xl max-w-3xl 2xl:max-w-5xl sm:text-center mt-6 px-4">
              Would you like to be an early adopter to hire student EV engineers
              trained in a curriculum developed by practicing industry
              professionals and approved as the National Model Curriculum for
              Electric Vehicle Technology by the “All India Council for
              Technical Education (AICTE)”?
            </p>
            <p>
              <a
                href="#"
                className="block bg-gradient-to-r from-secondary-500 to-primary-500 py-3 px-8 mt-8 rounded-lg font-semibold text-black hover:brightness-110"
              >
                Join as an early adopter
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
              Everything you
              <br /> need to know
            </p>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="flex flex-col gap-8 col-span-7">
              <DescriptionListItem
                title="What is this?"
                content="A program to select early adopters who wish to hire student EV engineers trained in a curriculum created by practicing industry professionals."
              />
              <DescriptionListItem
                title="How does it work?"
                content="Students learn a curriculum on Electric Vehicle Technology designed by practicing engineers in the EV domain. You can access these student engineers as interns and seamlessly transition to full-time hires as they graduate."
              />
              <DescriptionListItem
                title="Why is it needed?"
                content="To create a continuous pool of skilled students in the domain of EV, that the EV Industry can access and leverage for growth."
              />
              <DescriptionListItem
                title="What do we teach these students?"
                content="Students are taught tools and techniques that are as close to real-world applications as possible. They use Scilab for drive cycle simulations and FEMM (Finite Element Method Magnetics) for motor analysis. They are trained to build a miniature EV powertrain prototype which mimics a real-world EV powertrain using locally available electronic components."
              />
              <DescriptionListItem
                title="What are the skills being picked up by Students?"
                content="This program is designed with 3 courses such that selected institutions can offer a 9 credit “Open Elective in Electric Vehicles” through their trained faculty to students."
              >
                <div className="flex flex-col items-center justify-items-stretch gap-4 mt-8">
                  <div className="w-full border border-secondary-400 p-6 rounded-lg bg-gray-800">
                    <p className="text-secondary-500 font-semibold text-2xl">
                      EV 101
                    </p>
                    <p>Mathematical Modeling of an Electric Vehicle</p>
                  </div>
                  <svg
                    width="16"
                    height="30"
                    viewBox="0 0 16 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M15.2494 22.8209L8.88544 29.1849C8.49492 29.5754 7.86175 29.5754 7.47123 29.1849L1.10727 22.8209C0.716743 22.4304 0.716743 21.7972 1.10727 21.4067C1.49779 21.0162 2.13096 21.0162 2.52148 21.4067L7.17834 26.0636L7.17834 1.18872C7.17834 0.636436 7.62605 0.18872 8.17834 0.18872C8.73062 0.18872 9.17834 0.636436 9.17834 1.18872L9.17834 26.0636L13.8352 21.4067C14.2257 21.0162 14.8589 21.0162 15.2494 21.4067C15.6399 21.7972 15.6399 22.4304 15.2494 22.8209Z"
                      fill="white"
                      fill-opacity="0.25"
                    />
                  </svg>
                  <div className="w-full border border-primary-400 p-6 rounded-lg bg-gray-800">
                    <p className="text-primary-500 font-semibold text-2xl">
                      EV 201
                    </p>
                    <p>Design and Build Your Own EV Powertrain</p>
                  </div>
                  <svg
                    width="16"
                    height="30"
                    viewBox="0 0 16 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M15.2494 22.8209L8.88544 29.1849C8.49492 29.5754 7.86175 29.5754 7.47123 29.1849L1.10727 22.8209C0.716743 22.4304 0.716743 21.7972 1.10727 21.4067C1.49779 21.0162 2.13096 21.0162 2.52148 21.4067L7.17834 26.0636L7.17834 1.18872C7.17834 0.636436 7.62605 0.18872 8.17834 0.18872C8.73062 0.18872 9.17834 0.636436 9.17834 1.18872L9.17834 26.0636L13.8352 21.4067C14.2257 21.0162 14.8589 21.0162 15.2494 21.4067C15.6399 21.7972 15.6399 22.4304 15.2494 22.8209Z"
                      fill="white"
                      fill-opacity="0.25"
                    />
                  </svg>
                  <div className="w-full border border-orange-400 p-6 rounded-lg bg-gray-800">
                    <p className="text-orange-500 font-semibold text-2xl">
                      EV TA 101
                    </p>
                    <p>Teaching Assistant Training for EV 101 and EV 201</p>
                  </div>
                </div>
              </DescriptionListItem>
              <DescriptionListItem
                title="Who is this for?"
                content="Startups and electric mobility companies looking to hire EV engineers."
              />
              <DescriptionListItem
                title="How does this help my company/team?"
                content="Reduce your hiring efforts by interviewing students who have already demonstrated skills by building a miniature EV powertrain."
              />
              <DescriptionListItem
                title="How can we interview these students?"
                content="You can follow your own interview process to select students."
              />
              <DescriptionListItem
                title="How long should the internship duration be?"
                content="It's flexible; four to six months is recommended."
              />
              <DescriptionListItem
                title="What should be the internship stipend?"
                content="Based on your company policy; paid internships are recommended. "
              />
              <DescriptionListItem
                title="Are there any hiring charges?"
                content="Nil, for early adopters."
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
                      Join as early adopter
                    </p>
                    <p className="text-xs text-gray-400 px-4">
                      Important Dates
                    </p>
                    <div className="text-xs md:text-sm mt-2 divide-y divide-gray-700">
                      <DateAndContent
                        date="October 17, 2022"
                        content="LITE EV Hiring Network Call Launched"
                      />
                      <DateAndContent
                        date="November 07, 2022"
                        content=" Last Date to Apply"
                      />
                      <DateAndContent
                        date="November 14, 2022"
                        content="LITE EV Hiring Network Announced"
                      />
                    </div>
                    <p className="p-4">
                      <a
                        href="#"
                        className="block bg-gradient-to-r from-secondary-500 to-primary-500 py-3 px-8 text-center rounded-lg font-semibold text-black hover:brightness-110"
                      >
                        Join as an early adopter
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
              Beginner to <br />
              advanced courses
            </p>
          }
        >
          <BeginnerToAdvanceJourney />
        </SectionWithHeading>
        <SectionWithHeading
          heading={
            <p>
              Apply your own <br /> hiring standards
            </p>
          }
        >
          <p>
            We do not require you to bypass your existing hiring standards when
            providing internships or hiring opportunities. Instead, we encourage
            independent evaluation to assess student performance.
          </p>
          <div className="mt-12 h-96 bg-gray-800 grid place-items-center rounded-xl">
            <p>Video</p>
          </div>
        </SectionWithHeading>
        <SectionWithHeading
          heading={
            <p>
              What we expect <br /> from you.
            </p>
          }
        >
          <p>
            In exchange for accessing this pipeline of trained talent, we
            expect:
          </p>
          <div className="flex items-center gap-4 mt-5">
            <p className="font-semibold text-primary-500">1</p>
            <p className="flex-1 p-5 bg-gray-800 rounded-lg">
              To work with your organization's HR team, engineering and product
              leads, and align with your hiring needs.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5">
            <p className="font-semibold text-primary-500">2</p>
            <p className="flex-1 p-5 bg-gray-800 rounded-lg">
              To place your logo on the Course Website for students to be aware
              of internship/hiring opportunities at your organization.
            </p>
          </div>
        </SectionWithHeading>
        <SectionWithHeading heading="Schedule">
          <div className="bg-gray-800 border border-gray-700 rounded-lg divide-y divide-gray-700">
            <DateAndContent
              date="October 17, 2022"
              content="LITE EV Hiring Network Call Launched"
            />
            <DateAndContent
              date="November 07, 2022"
              content="Last Date to Apply"
            />
            <DateAndContent
              date="November 14, 2022"
              content="LITE EV Hiring Network Announced"
            />
          </div>
          <div className="mt-12 bg-gradient-to-r from-secondary-500 to-primary-500 px-6 py-12 grid place-items-center rounded-lg text-gray-900 text-center">
            <h3 className="lg:text-5xl">Become an early adopter.</h3>
            <p className="w-2/3 mt-4">
              If you would like to benefit from the hiring network, we invite
              you to join us as an early adopter by filling in the Typeform.
            </p>
            <p>
              <a
                href="#"
                className="block bg-black py-3 px-8 mt-8 rounded-lg font-semibold text-primary-500 hover:brightness-110"
              >
                Join as an early adopter
              </a>
            </p>
          </div>
          <div className="mt-12">
            <h3 className="text-primary-500">Questions</h3>
            <p>
              If you have any questions, email us at{" "}
              <a
                href="mailto:hiring@pupilfirst.org"
                className="text-secondary-500 underline hover:text-secondary-300"
              >
                hiring@pupilfirst.org
              </a>
            </p>
          </div>
        </SectionWithHeading>
      </main>
    </div>
  );
}
