import Head from "next/head";
import PersonalizedLearningExperiece from "../components/PersonalizedLearningExperience";
import Testimonials from "../components/Testimonials";

function ImageWithDescription({ name, caption, role, imgSrc }) {
  return (
    <div>
      <div className="rounded-2xl overflow-hidden w-5/6 md:w-auto ">
        <img
          src={imgSrc}
          alt={`Photo of ${name}`}
          className="block w-full object-cover md:object-contain"
        />
      </div>
      <p className={"text-lg font-semibold text-primary-400 pt-2"}>{name}</p>
      <p className={"text-sm text-gray-300 leading-tight pt-1"}>{caption}</p>
      <p className="text-white mt-3">{role}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Electric Vehicles Open Program</title>
        <meta
          name="description"
          content="Electric Vehicles Open Program is a national programme to identify the top 100 Indian undergraduate students who are interested to learn and build a career in Electric Vehicles."
        ></meta>
        <meta
          name="keywords"
          content="Electric Vehicles, EV, Career in Electric Vehicles"
        ></meta>
        <meta name="author" content="Pupilfirst.org"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Electric Vehicles Open Program" />
        <meta
          property="og:description"
          content="Electric Vehicles Open Program is a national programme to identify the top 100 Indian undergraduate students who are interested to learn and build a career in Electric Vehicles."
        />
        <meta name="theme-color" content="#21252E" />
        <meta
          property="og:image"
          content="introduction-to-electric-vehicles-EV101.png"
        />
        <meta property="og:url" content="https://ev.pupilfirst.org/" />
        <meta
          name="twitter:card"
          content="introduction-to-electric-vehicles-EV101.png"
        />
        <meta
          property="og:site_name"
          content="Electric Vehicles Open Program"
        />
        <meta name="Electric Vehicles Open Program is a national programme to identify the top 100 Indian undergraduate students who are interested to learn and build a career in Electric Vehicles." />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S8QJR8V942"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-S8QJR8V942');
              `,
          }}
        />
      </Head>
      <main className="bg-gray-900 mx-auto">
        <section className="hero__bg-pattern bg-gray-900 overflow-hidden">
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
          <div className="relative max-w-6xl 2xl:max-w-7xl flex flex-col md:flex-row justify-between mx-auto text-white pb-2 md:pb-16 px-4 xl:px-0">
            <div className="w-full md:w-7/12 flex-shrink-0 relative z-10">
              <h1 className="hero__title-gradient text-3xl md:text-4xl lg:text-7xl py-2 lg:pt-8 lg:pb-4 ">
                Welcome to the exciting world of Electric Vehicles
              </h1>
              <div className="max-w-2xl lg:pr-12 space-y-4 text-sm md:text-base lg:text-lg">
                <p>
                  Are you ready to dive into the captivating realm of electric
                  vehicles (EVs) and powertrains? Our EV courses are designed to
                  ignite your curiosity and equip you with the skills to create
                  your very own miniature EV Powertrain prototype that mimics an
                  actual real world electric vehicle.
                </p>
                <p className="mt-4">
                  Admissions are now open for the LITE Electric Vehicles Courses
                  as part of the EV02Y23<sup>*</sup> cohort by Pupilfirst in
                  association with Micelio Mobility. Up to Top 100 students who
                  qualify for the program get a 100% scholarship for taking the
                  EV Courses, unleash your potential and be at the forefront of
                  the electric vehicle revolution!
                </p>
                <p className="text-sm italic text-gray-400">
                  *EV02Y23 - The first two letters indicate the curriculum (WD,
                  EV etc.), followed by the cohort number (10, 11,...) and the
                  year of admission (23, 24,…).
                </p>
              </div>

              <div className="pt-4 md:pt-6">
                <a
                  className="inline-block w-full md:w-80 p-3 text-center bg-gradient-to-r from-primary-500 to-secondary-400 text-gray-900 border border-primary-500 font-semibold rounded-md shadow-lg hover:shadow-2xl hover:bg-secondary-400 hover:to-primary-500 transition"
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfNaUFi3-KRg6VYDgIDMdkxoWEl8OtdGqe_7GoSos9LijgItw/viewform"
                >
                  Register for EV 101 Course
                </a>
              </div>
            </div>
            <div className="flex h-full items-center justify-center hero__image-container z-0 pt-12 lg:pt-16">
              <img
                className="object-contain w-full h-full relative"
                src="hero/ev-open-program-hero-image.png"
                alt="Introduction to Electric Vehicles (EV101)"
              />
            </div>
          </div>
        </section>
        <section className="mx-4 xl:mx-0 pb-10 md:pb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 relative overflow-hidden max-w-6xl 2xl:max-w-7xl mx-auto p-4 lg:p-10">
            <div className="flex justify-between pt-1">
              <div className="flex-1">
                <h2 className="font-bold text-2xl lg:text-6xl text-white leading-snug text-center">
                  Supported by Micelio Mobility
                  <span className="font-medium text-base lg:text-lg block pt-1">
                    Electric mobility ecosystem leader in India.
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row lg:space-x-6 pt-8">
              <div className="lg:w-1/2 flex flex-col space-y-4 mt-6 lg:mt-2">
                <div className="bg-gradient-to-br from-primary-400 to-secondary-500 p-0.5 rounded-xl">
                  <img
                    className="object-contain w-full h-full relative rounded-xl"
                    src="micelio-studio/micelio-studio-1.jpg"
                    alt="Photo of Micelio Studio"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-primary-400 to-secondary-500 p-0.5 rounded-xl">
                    <img
                      className="object-contain w-full h-full relative rounded-xl"
                      src="micelio-studio/micelio-studio-2.jpg"
                      alt="Photo of Micelio Studio"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-primary-400 to-secondary-500 p-0.5 rounded-xl">
                    <img
                      className="object-contain w-full h-full relative rounded-xl"
                      src="micelio-studio/micelio-studio-3.jpg"
                      alt="Photo of Micelio Studio"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-primary-400 to-secondary-500 p-0.5 rounded-xl">
                    <img
                      className="object-contain w-full h-full relative rounded-xl"
                      src="micelio-studio/micelio-studio-4.jpg"
                      alt="Photo of Micelio Studio"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-primary-400 to-secondary-500 p-0.5 rounded-xl">
                    <img
                      className="object-contain w-full h-full relative rounded-xl"
                      src="micelio-studio/micelio-CAM_Drum_Test_Bench.jpg"
                      alt="Photo of Micelio Studio"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 text-white text-lg space-y-4">
                <p className="text-sm md:text-base lg:text-lg">
                  Micelio Mobility has been at the forefront of strengthening
                  the future of clean mobility by building a robust ecosystem in
                  India to enable the mass adoption of clean mobility solutions
                  and remove specific entry-level barriers that startups may
                  face while navigating this landscape.
                </p>
                <img
                  className="rounded-xl w-64 mx-auto"
                  src="/logos/micelio-logo.jpg"
                  alt="Logo of Micelio Mobility"
                />
                <p className="text-sm md:text-base lg:text-lg">
                  As a first-of-its-kind catalyst in the clean mobility value
                  curve, with an aim to create and build an ecosystem that can
                  nurture innovation and maximize impact, Micelio is on its way
                  to powering a comprehensive platform to aid in India's
                  transition to a cleaner future for mobility. Micelio's
                  initiatives include capital funding through Micelio Fund,
                  testing facilities through Micelio Discovery Studio, ecosystem
                  development through Micelio Community, and knowledge sharing
                  and policy advocacy as part of Micelio Knowledge.
                </p>
                <p className="text-sm md:text-base lg:text-lg">
                  Micelio Discovery Studio is a high-performance team with the
                  goal of enabling and augmenting the growth and transformation
                  of the clean mobility ecosystem.
                </p>
                <p className="text-sm md:text-base lg:text-lg">
                  Micelio Discovery Studio has invested in critical EV-specific
                  machinery and industrial space to test components &
                  sub-systems, that companies can utilize at a very nominal
                  price. High-value equipment with precision provides you with
                  better test results and support.
                </p>
                <p className="text-sm md:text-base lg:text-lg">
                  Learn More at:{" "}
                  <a
                    className="text-blue-500 font-semibold underline hover:text-primary-500"
                    target="_blank"
                    href="https://www.micelio.com"
                  >
                    https://www.micelio.com
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="font-bold text-2xl lg:text-6xl text-white leading-snug text-center">
                Testimonials from Industry Experts
              </h2>

              <div className="mt-8 mx-auto max-w-3xl space-y-8">
                <div className="flex flex-col items-center md:items-start md:flex-row gap-3 bg-gray-800 p-6 rounded-lg w-full">
                  <img
                    className="ml-0 md:-ml-16 w-32 h-32 lg:w-48 lg:h-48 rounded-full object-contain border-8 border-gray-800 bg-gray-700"
                    src="/people/Sathiyaseelan.jpg"
                    alt="Photo of Sathiyaseelan Sekar"
                  />

                  <div className="flex gap-4 items-start">
                    <svg
                      width="54"
                      height="44"
                      viewBox="0 0 54 44"
                      fill="none"
                      className="w-8 h-8 flex-shrink-0 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.84275 6.77875C8.58408 2.72275 14.2454 0.666748 21.6667 0.666748H24.3334V8.18408L22.1894 8.61342C18.5361 9.34408 15.9948 10.7814 14.6348 12.8907C13.9251 14.0271 13.5227 15.3282 13.4668 16.6667H21.6667C22.374 16.6667 23.0523 16.9477 23.5524 17.4478C24.0525 17.9479 24.3334 18.6262 24.3334 19.3334V38.0001C24.3334 40.9414 21.9414 43.3334 19.0001 43.3334H3.00008C2.29284 43.3334 1.61456 43.0525 1.11447 42.5524C0.614369 42.0523 0.333418 41.374 0.333418 40.6667V27.3334L0.341418 19.5494C0.317418 19.2534 -0.189249 12.2401 4.84275 6.77875ZM48.3334 43.3334H32.3334C31.6262 43.3334 30.9479 43.0525 30.4478 42.5524C29.9477 42.0523 29.6667 41.374 29.6667 40.6667V27.3334L29.6747 19.5494C29.6507 19.2534 29.1441 12.2401 34.1761 6.77875C37.9174 2.72275 43.5788 0.666748 51.0001 0.666748H53.6667V8.18408L51.5227 8.61342C47.8694 9.34408 45.3281 10.7814 43.9681 12.8907C43.2585 14.0271 42.856 15.3282 42.8001 16.6667H51.0001C51.7073 16.6667 52.3856 16.9477 52.8857 17.4478C53.3858 17.9479 53.6667 18.6262 53.6667 19.3334V38.0001C53.6667 40.9414 51.2748 43.3334 48.3334 43.3334Z"
                        fill="#A1A1AA"
                      />
                    </svg>

                    <div className="text-white">
                      <p className="text-lg text-gray-300">
                        As a hiring manager at Micelio, I highly value
                        PupilFirst's EV 101 and EV 201 courses. They offer a
                        strong foundation in electric vehicle technology and
                        advanced expertise in battery management systems and
                        power electronics. The practical application and
                        collaborative learning environment make candidates
                        well-prepared for the challenges of the electric vehicle
                        industry.
                      </p>
                      <p className="font-semibold mt-4 text-gray-200">
                        Sathiyaseelan Sekar,
                      </p>
                      <p className="text-sm text-gray-400">
                        Manager - Testing & Validation, Micelio Mobility
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-start md:flex-row gap-3 bg-gray-800 p-6 rounded-lg w-full">
                  <img
                    className="ml-0 md:-ml-16 w-32 h-32 lg:w-48 lg:h-48 rounded-full object-contain border-8 border-gray-800 bg-gray-700"
                    src="/people/S_Soundararajan.png"
                    alt="Photo of S. Soundararajan"
                  />

                  <div className="flex gap-4 items-start">
                    <svg
                      width="54"
                      height="44"
                      viewBox="0 0 54 44"
                      fill="none"
                      className="w-8 h-8 flex-shrink-0 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.84275 6.77875C8.58408 2.72275 14.2454 0.666748 21.6667 0.666748H24.3334V8.18408L22.1894 8.61342C18.5361 9.34408 15.9948 10.7814 14.6348 12.8907C13.9251 14.0271 13.5227 15.3282 13.4668 16.6667H21.6667C22.374 16.6667 23.0523 16.9477 23.5524 17.4478C24.0525 17.9479 24.3334 18.6262 24.3334 19.3334V38.0001C24.3334 40.9414 21.9414 43.3334 19.0001 43.3334H3.00008C2.29284 43.3334 1.61456 43.0525 1.11447 42.5524C0.614369 42.0523 0.333418 41.374 0.333418 40.6667V27.3334L0.341418 19.5494C0.317418 19.2534 -0.189249 12.2401 4.84275 6.77875ZM48.3334 43.3334H32.3334C31.6262 43.3334 30.9479 43.0525 30.4478 42.5524C29.9477 42.0523 29.6667 41.374 29.6667 40.6667V27.3334L29.6747 19.5494C29.6507 19.2534 29.1441 12.2401 34.1761 6.77875C37.9174 2.72275 43.5788 0.666748 51.0001 0.666748H53.6667V8.18408L51.5227 8.61342C47.8694 9.34408 45.3281 10.7814 43.9681 12.8907C43.2585 14.0271 42.856 15.3282 42.8001 16.6667H51.0001C51.7073 16.6667 52.3856 16.9477 52.8857 17.4478C53.3858 17.9479 53.6667 18.6262 53.6667 19.3334V38.0001C53.6667 40.9414 51.2748 43.3334 48.3334 43.3334Z"
                        fill="#A1A1AA"
                      />
                    </svg>

                    <div className="text-white">
                      <p className="text-lg text-gray-300">
                        As a seasoned professional in the electric vehicle (EV)
                        industry, I am thrilled to provide my testimonial for
                        the Electric Vehicle Courses. One of the key advantages
                        of this program is its emphasis on practical skills.
                        Through various assignments, projects, and simulations,
                        participants gain invaluable experience. These exercises
                        foster the development of essential skills such as
                        problem-solving and critical thinking. Employers in the
                        industry highly value these skills, making graduates of
                        the program attractive candidates for job opportunities.
                      </p>
                      <p className="text-lg text-gray-300 mt-4">
                        With regular updates to the curriculum, participants
                        stay up-to-date with emerging technologies, industry
                        standards, and regulations. This knowledge ensures that
                        graduates are equipped with the most relevant and
                        current information, making them highly adaptable and
                        valuable assets to prospective employers.
                      </p>
                      <p className="text-lg text-gray-300 mt-4">
                        The Electric Vehicle Online Program is an outstanding
                        opportunity for fresh graduates to excel in the EV
                        industry. Its comprehensive curriculum, practical skill
                        emphasis, sustainability focus, and alignment with
                        industry job requirements make it an exceptional choice.
                        I highly recommend this program for those looking to
                        confidently enter the electric vehicle field and be
                        well-prepared for future challenges and opportunities.
                      </p>
                      <p className="font-semibold mt-4 text-gray-200">
                        S Soundararajan,
                      </p>
                      <p className="text-sm text-gray-400">
                        Head - Mechanical Engineering, Micelio Mobility
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 relative border-t border-gray-700">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="lg:grid lg:grid-cols-12 lg:gap-12 2xl:gap-5 px-0 pb-10 lg:pb-20">
                <div className="lg:col-span-7 2xl:col-span-8">
                  <div className="pt-10 lg:pt-20">
                    <div className="heading-with-leftborder">
                      <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-snug lg:ml-28 2xl:ml-44">
                        Everything you
                        <br /> need to know.
                      </h2>
                    </div>
                  </div>
                  <div className="space-y-6 md:space-y-12 md:pr-12 pt-4 md:pt-10 ml-4 lg:ml-24 2xl:ml-44">
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">
                        Engaging Hands-On Experience.
                      </h3>
                      <p className="pt-1 text-sm lg:text-lg text-white">
                        You'll be working hands-on with our exclusive
                        do-it-yourself (DIY) hardware kit, which includes all
                        the necessary components to build and experiment with
                        your own EV Powertrain prototype. Get ready to see your
                        designs come to life!
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">
                        Expert Guidance.
                      </h3>
                      <p className="pt-1 text-sm lg:text-lg text-white">
                        Our team of vastly experienced EV professionals will
                        guide you through this journey, offering valuable
                        insights, practical tips, and feedback to ensure you
                        grasp the concepts effectively. You'll learn from the
                        best in the industry, gaining knowledge that will set
                        you apart. You will also be able to take help from our
                        course Teaching Assistants (TAs) who are students who
                        completed our courses and working towards giving their
                        knowledge back to the EV industry.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">
                        NEP 2020 Classrooms.
                      </h3>
                      <p className="pt-1 text-sm lg:text-lg text-white">
                        The National Education Policy (NEP) 2020 in India
                        emphasizes the importance of learner-centered classrooms
                        as a transformative approach to education. In
                        learner-centered classrooms, students are the most
                        active participants in their own learning process. Our
                        teaching methodology is aligned with the vision of NEP
                        2020, bringing the 21st century educational reforms to
                        your classrooms.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">
                        AICTE Approved Curriculum.
                      </h3>
                      <p className="pt-1 text-sm lg:text-lg text-white">
                        Our meticulously crafted curriculum covers the learning
                        competencies to gain skills on all the essential aspects
                        of EV powertrains, from the fundamentals to advanced
                        topics, which has been prepared by practicing industry
                        professionals. You'll explore the principles behind
                        electric vehicle propulsion, battery management systems,
                        motor control, and much more. By the end of both the EV
                        courses, you'll have a solid foundation in electric
                        vehicle technology.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">
                        Inspiring Discord Community.
                      </h3>
                      <p className="pt-1 text-sm lg:text-lg text-white">
                        Join a vibrant community of like-minded enthusiasts who
                        share your passion for electric vehicles, privately
                        hosted by Pupilfirst on{" "}
                        <a
                          className="text-blue-500 underline hover:text-blue-600"
                          href="https://discord.com/"
                        >
                          Discord
                        </a>
                        <sup>TM</sup>. You will be able to take help from
                        coaches, Teaching Assistants and fellow students when
                        you are stuck. You will also be able to network,
                        exchange ideas with fellow students, instructors, and
                        professionals and also be part of engaging discussions
                        regarding the EV Space, expanding your horizons and
                        building new connections.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">
                        EV Hiring Network.
                      </h3>
                      <p className="pt-1 text-sm lg:text-lg text-white">
                        We are also working on creating the EV Hiring Network, a
                        dynamic platform connecting talented individuals with
                        exciting internship and entry-level full-time
                        opportunities in the electric vehicle (EV) industry. Our
                        network aims to bring together a diverse range of
                        forward-thinking companies, from cutting-edge startups
                        to established industry leaders, all united by their
                        commitment to shaping the future of transportation.
                        Stand a chance to receiving opportunities in the EV
                        Industry and thereby starting your career in this space.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 2xl:col-span-4">
                  <div className="sticky top-0 pl-0 pt-10 lg:pt-20 -ml-px md:ml-0">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-r md:rounded-lg border border-gray-700 relative overflow-hidden shadow-lg">
                      <div className="flex space-x-2 px-2 md:px-4 lg:px-5 2xl:px-6 py-3 border-b border-gray-600">
                        <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                      </div>
                      <div className="p-2 md:p-4 lg:p-5 2xl:p-6">
                        <p className="text-secondary-400 text-lg lg:text-xl font-semibold leading-tight">
                          Electric Vehicles Open Program
                        </p>
                        <p className="text-xs mt-4 text-gray-400">
                          Important Dates
                        </p>
                        <div className="text-xs md:text-sm mt-2 space-y-3">
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-primary-400">
                              Jul 27, 2023
                            </p>
                            <p className="col-span-5 text-gray-200">
                              - Application Open for LITE Open Elective.
                            </p>
                          </div>
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-primary-400">
                              Aug 09, 2023
                            </p>
                            <p className="col-span-5 text-gray-200">
                              - Applications window ends.
                            </p>
                          </div>
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-primary-400">
                              Aug 16, 2023
                            </p>
                            <p className="col-span-5 text-gray-200">
                              - Announcement of selected students.
                            </p>
                          </div>
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-primary-400">
                              Aug 22, 2023
                            </p>
                            <p className="col-span-5 text-gray-200">
                              - Course commencement for EV 101.
                            </p>
                          </div>
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-primary-400">
                              Oct 27, 2023
                            </p>
                            <p className="col-span-5 text-gray-200">
                              - Course conclusion.
                            </p>
                          </div>
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-primary-400">
                              To be announced.
                            </p>
                            <p className="col-span-5 text-gray-200">
                              - Admission to EV 201.
                            </p>
                          </div>
                        </div>
                        <div className="pt-4 lg:pt-6">
                          <a
                            className="block px-10 py-3 text-center bg-gradient-to-r from-primary-500 to-secondary-400 text-gray-900 border border-primary-500 font-semibold rounded-md shadow-lg hover:shadow-2xl hover:bg-secondary-400 hover:to-primary-500 transition"
                            target="_blank"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfNaUFi3-KRg6VYDgIDMdkxoWEl8OtdGqe_7GoSos9LijgItw/viewform"
                          >
                            Register for EV 101 Course
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-gray-800 to-gray-900 border-t border-b border-gray-700 mx-auto relative overflow-hidden shadow-lg">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-20">
                <div className="heading-with-leftborder">
                  <h2 className="font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:ml-12 xl:ml-16 2xl:ml-36 text-white">
                    Dynamic Curriculum by Industry Experts.
                  </h2>
                </div>
              </div>
              <div className="max-w-6xl mt-6 md:mt-8 ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                <div className="text-white">
                  <p className="text-sm md:text-base lg:text-lg mt-4">
                    Learn the technology that fuels the vehicles of tomorrow by
                    learning a curriculum designed by practicing EV Industry
                    professionals. This curriculum has also been approved by
                    AICTE as the national model curriculum for Open Electives in
                    Electric Vehicles.
                  </p>
                </div>

                <div>
                  <div className="max-w-4xl space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 md:gap-8 lg:gap-12 py-12 lg:pb-16">
                    <ImageWithDescription
                      name="Mr. Swapnil Mankame"
                      caption={
                        <>
                          CEO, Founder at <br />
                          Mankame Automotive
                        </>
                      }
                      role={
                        <div>
                          <p>
                            Swapnil is a Robotics engineer, with 6 years of
                            experience in building multiple Autonomous robots of
                            various architectures. He also has a passion for
                            Motorsports which led him to work in multiple race
                            teams, building high-performance ICE and electric
                            four wheelers.
                          </p>
                          <p className="pt-3">
                            He is currently working in Mankame Automotive as a
                            design engineer building high-performance electric
                            vehicle components, and also uses his experience to
                            work as a consultant for other electric vehicle
                            companies, helping them find technical solutions.
                          </p>
                        </div>
                      }
                      imgSrc="people/Swapnil-Mankame.png"
                    />
                    <ImageWithDescription
                      name="Kishor Kumar K"
                      caption={
                        <>
                          Leader - Electrical Design and Integration, Garrett
                          Advancing Motion (formerly Honeywell Turbo
                          technologies), Bangalore
                        </>
                      }
                      role={
                        <div>
                          <p>
                            Kishor Kumar K is an accomplished Team Lead at
                            Garrett Advancing Motion, driving advancements in
                            motor and controller development for electric
                            vehicles. With 11 years of experience in the EV
                            industry, he has excelled in both the low voltage 2
                            & 3 wheeler segment and 4 wheeler segment.
                            Previously, he made significant contributions at SEG
                            Automotive, Simple Energy, and ATI Motors.
                          </p>
                          <p className="pt-3">
                            Beyond his professional endeavors, Kishor is
                            passionate about giving back to society and
                            co-founded the "Athira Edutech Foundation," an NGO
                            focused on providing STEM-based education to rural
                            students. In his leisure time, he enjoys playing
                            badminton, table tennis, and cricket, as well as
                            engaging in trekking, hiking, and other adventurous
                            activities.
                          </p>
                        </div>
                      }
                      imgSrc="people/Kishor_Kumar_K.png"
                    />
                  </div>
                </div>
              </div>
              <svg
                className="absolute right-0 top-1/4 object-center"
                width="120"
                height="400"
                fill="none"
                viewBox="0 0 120 400"
              >
                <defs>
                  <pattern
                    id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-700"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="120"
                  height="400"
                  fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
                />
              </svg>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:ml-12 xl:ml-16 2xl:ml-36 text-white">
                    Beginner to advanced courses.
                  </h2>
                </div>
              </div>
              <div className="max-w-6xl 2xl:max-w-7xl mx-auto ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                <div className="pt-4 text-2xl lg:text-6xl leading-tight text-white">
                  <p className="text-white text-base lg:text-lg">
                    This course is designed as a course for beginners. It'll be
                    followed up with an intermediate course and advanced course
                    that will pave the pathway a student can take to become a
                    part of the Electric vehicle industry.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-secondary-400 rounded-lg p-3 md:p-5">
                    <p className="text-secondary-400 text-xl md:text-2xl font-bold">
                      EV 101
                    </p>
                    <p className="text-sm md:text-base text-white leading-snug mt-1">
                      Mathematical Modeling of an Electric Vehicle
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-primary-400 rounded-lg p-3 md:p-5">
                    <p className="text-primary-400 text-xl md:text-2xl font-bold">
                      EV 201
                    </p>
                    <p className="text-sm md:text-base text-white leading-snug mt-1">
                      Design and Build your own EV Powertrain
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-dashed border-gray-400 border-opacity-50 rounded-lg p-3 md:p-5">
                    <p className="text-tertiary-400 text-xl md:text-2xl font-bold flex items-center space-x-2">
                      <span>EV 301 </span>
                      <span className="text-xs bg-gray-400 text-gray-900 rounded-lg px-1 py-0.5">
                        (Under Development)
                      </span>
                    </p>
                    <p className="text-sm md:text-base text-white leading-snug mt-1">
                      Advanced course on Electric Vehicles
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-white italic">
                  *EV 101 course is the prerequisite for the EV 201 - Design and
                  Build Your Own EV Powertrain Course. You will be starting with
                  the EV 101 course.
                </p>
              </div>

              <div className="max-w-6xl 2xl:max-w-7xl mx-auto ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                <div className="max-w-4xl mt-4">
                  <p className="text-white lg:text-lg">
                    While the EV 101, the introductory course will serve as the
                    foundation, check the infographic below to understand what
                    skills will be gained in the Intermediate course “Design and
                    Build your own EV Powertrain (EV 201)
                  </p>
                </div>
              </div>
              <div className="max-w-6xl 2xl:max-w-7xl mx-auto ml-4 lg:ml-12 xl:ml-16 2xl:ml-36 mt-8">
                <div className="flex space-x-2 lg:space-x-4">
                  <div className="block relative w-12 md:w-24 bg-gray-800 ">
                    <div className="flex items-center justify-center absolute z-0 inset-0 h-full">
                      <svg
                        className=""
                        width="2"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          className="path"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="100%"
                          stroke="white"
                        />
                      </svg>
                    </div>
                    <div className="flex whitespace-nowrap text-base items-center sticky top-0 z-20">
                      <div className="flex relative w-full justify-end items-end h-20 md:h-24">
                        <div>
                          <div className="relative">
                            <div className="flex text-xs text-secondary-200 font-semibold absolute z-20 right-0 transform -rotate-90 mt-14 md:mt-16">
                              <span className="block md:pb-2 md:pr-2">
                                Skills
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-end w-full">
                            <img
                              className="object-contain relative h-full w-8 md:w-12"
                              src="course-path/ev-car-sticky.png"
                              alt="Electric Car"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 grid gap-16">
                      <div className="row-span-4"></div>
                      <div className="relative z-10 grid grid-cols-7 gap-1 md:gap-2 h-10 md:h-10">
                        <div className="bg-gray-200"></div>
                        <div className="bg-gray-200"></div>
                        <div className="bg-gray-200"></div>
                        <div className="bg-gray-200"></div>
                        <div className="bg-gray-200"></div>
                        <div className="bg-gray-200"></div>
                        <div className="bg-gray-200"></div>
                      </div>
                      <div className="row-span-5"></div>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="row-span-4 flex">
                      <div className="relative grid place-items-center p-3 md:px-12 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                        <p className="flex whitespace-nowrap text-base lg:text-2xl font-bold text-secondary-400 items-center justify-center absolute inset-0 transform -rotate-90">
                          EV 101
                        </p>
                      </div>
                    </div>
                    <div className="row-span-5 flex">
                      <div className="relative grid place-items-center p-3 md:px-12 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                        <p className="flex whitespace-nowrap text-base lg:text-2xl font-bold text-primary-400 items-center justify-center absolute inset-0 transform -rotate-90">
                          EV 201
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="grid gap-4">
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">
                          1
                        </p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                          <p className="text-sm md:text-base font-semibold text-secondary-400">
                            Electric vehicle history &amp; foundations.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">
                          2
                        </p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                          <p className="text-sm md:text-base font-semibold text-secondary-400">
                            Understand the basic components of an EV.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">
                          3
                        </p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                          <p className="text-sm md:text-base font-semibold text-secondary-400">
                            Modeling your own EV conversion from scratch.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">
                          4
                        </p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                          <p className="text-sm md:text-base font-semibold text-secondary-400">
                            Mathematically modeling an EV using Scilab.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">
                          5
                        </p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                          <p className="text-sm md:text-base font-semibold text-primary-400">
                            Building a 3 pole DC motor and motor controller.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">
                          6
                        </p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                          <p className="text-sm md:text-base font-semibold text-primary-400">
                            Understand the working of a BMS.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">
                          7
                        </p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                          <p className="text-sm md:text-base font-semibold text-primary-400">
                            Understand various communication protocols.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">
                          8
                        </p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                          <p className="text-sm md:text-base font-semibold text-primary-400">
                            Learn about thermal management in EVs.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">
                          9
                        </p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                          <p className="text-sm md:text-base font-semibold text-primary-400">
                            Learn to design and build a working model of an EV
                            Powertrain.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden md:flex w-24 flex-col items-center justify-between">
                    <p className="flex text-xs text-gray-200 pt-2 items-center justify-center">
                      The competency based curriculum enables learners to pick
                      up competencies for industry skills
                    </p>
                    <svg
                      className="pt-4"
                      width="2"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        className="path"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="100%"
                        stroke="#474D5C"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-gray-600"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                    <p className="text-xs font-medium text-white">
                      EV industry gateway.
                    </p>
                  </div>
                </div>
                <section className="mt-12">
                  <div className="relative">
                    <p className="pt-4 md:text-lg text-white max-w-3xl">
                      <span className="font-semibold md:text-primary-400">
                        Watch the video below
                      </span>{" "}
                      <span className="font-semibold">
                        to see what you will be learning in the intermediate
                        level course EV 201 - Design and Build Your Own EV
                        Powertrain.
                      </span>
                    </p>
                    <div className="hidden md:block h-6 w-6 absolute top-8 transform rotate-12 -left-6 z-10">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 43.1 85.9"
                        xmlSpace="preserve"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="st0 draw-arrow__svg-path"
                          d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="draw-arrow__svg-path"
                          d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="draw-arrow__svg-path"
                          d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-2 shadow-2xl rounded-xl">
                    <div
                      style={{ padding: "56.25% 0 0 0", position: "relative" }}
                    >
                      <iframe
                        className="rounded-xl"
                        src="https://player.vimeo.com/video/822777339?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                        title="Intro To EV201"
                      ></iframe>
                    </div>
                  </div>
                </section>
                <div className="mt-8 lg:mt-12 text-white">
                  <h4 className="bg-primary-400 inline-block px-2 text-gray-900">
                    Important points:
                  </h4>
                  <ul className="list-disc ml-4 space-y-4 text-lg">
                    <li className="mt-3">
                      The EV 101 course has{" "}
                      <span className="font-bold">no hardware dependency</span>{" "}
                      apart from a PC to access the course content and perform
                      mathematical simulations as part of the course.
                    </li>
                    <li>
                      EV 201 course requires a custom designed Do-it-yourself
                      (DIY) KIT to complete the course.{" "}
                    </li>
                    <li>
                      EV 101 is a prerequisite for the EV 201 course, and hence
                      students who complete EV 101 will only be onboarded to the
                      next level of the course. And the DIY kit will be provided
                      to the students who are in EV 201.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
              <div className="border-l border-gray-700 mx-4 xl:mx-0">
                <div className="pt-10 lg:pt-16">
                  <div className="heading-with-leftborder">
                    <h2 className="font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:ml-12 xl:ml-16 2xl:ml-36 text-white">
                      Career Pathway.
                    </h2>
                  </div>
                </div>
                <div className="max-w-4xl ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                  <div className="max-w-3xl space-y-6 text-white">
                    <p className="mt-4 text-sm md:text-base lg:text-lg">
                      Approved by “All India Council for Technical Education” as
                      National Model Curriculum for Indian Universities.
                    </p>
                  </div>
                  <div>
                    <img
                      src="/course-path/ev-career-pathway.webp"
                      alt="Career Pathway Diagram"
                    />
                  </div>
                  <ul className="list-decimal space-y-6 pt-4 ml-8">
                    <li className="text-lg font-semibold text-secondary-500">
                      <p className="text-xl">Learn Electric Vehicles 101</p>
                      <p className="font-normal pt-1 text-white">
                        Duration: 20 hours/2 Academic Credits.
                      </p>
                      <p className="font-normal text-white">
                        Learn to mathematically model your own two-wheeler EV
                        Conversion.
                      </p>
                    </li>
                    <li className="text-lg font-semibold text-secondary-500">
                      <p className="text-xl">
                        Admission to Electric Vehicles 201
                      </p>
                      <p className="font-normal pt-1 text-white">
                        Duration: 80 hours/5 Academic Credits
                      </p>
                      <p className="font-normal text-white">
                        Learn to design and build your own working EV Powertrain
                        model.
                      </p>
                    </li>
                    <li className="text-lg font-semibold text-secondary-500">
                      <p className="text-xl">
                        Gain Internships/placements through EV Hiring Network
                      </p>
                      <p className="font-normal pt-1 text-white">
                        An increasing list of companies are participating to
                        onboard EV engineer interns as you finish your courses.
                      </p>
                      <p className="font-normal text-white">
                        Learn to design and build your own working EV Powertrain
                        model.
                      </p>
                      <p className="py-4 text-gray-500 italic">OR</p>
                      <div className="text-lg font-semibold text-secondary-500">
                        <p className="text-xl">Become a Teaching Assistant</p>
                        <p className="font-normal pt-1 text-white">
                          Learners who complete EV 201 shall be onboarded as
                          teaching assistants to pass on their knowledge to
                          other students and receive a stipend & certificate.
                          Credits can also be gained as part of the EV TA 101
                          course.
                        </p>
                      </div>
                    </li>
                    <li className="text-lg font-semibold text-secondary-500">
                      <p className="text-xl">Admission to EV 301 course</p>
                      <p className="font-normal pt-1 text-white">
                        EV 301 will be an advanced course on electric vehicle
                        technology and it is currently under development.
                      </p>
                    </li>
                    <li className="text-lg font-semibold text-secondary-500">
                      <p className="text-xl">Join a growing Alumni Network</p>
                      <p className="font-normal pt-1 text-white">
                        Graduating EV students can join the Pupilfirst Alumni
                        Network.
                      </p>
                    </li>
                    <li className="text-lg font-semibold text-secondary-500">
                      <p className="text-xl">Full-time opportunities</p>
                      <p className="font-normal pt-1 text-white">
                        Stand a chance to gain full-time opportunities in the EV
                        Industry.
                      </p>
                    </li>
                    <li className="text-lg font-semibold text-secondary-500">
                      <p className="text-xl">
                        Contribute as an Industry Teaching Fellow
                      </p>
                      <p className="font-normal pt-1 text-white">
                        Students who take our courses, get placed in the
                        industry will be extended an opportunity to contribute
                        to the EV Courses by becoming an Industry Teaching
                        Fellow.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:ml-12 xl:ml-16 2xl:ml-36 text-white">
                    Custom Designed DIY Hardware KIT.
                  </h2>
                </div>
              </div>
              <div className="ml-4 lg:ml-12 xl:ml-16 2xl:ml-36 pb-16">
                <div className="max-w-3xl space-y-6 text-white">
                  <p className="mt-4 text-sm lg:text-lg">
                    Stand a chance to get your hands on an exclusive
                    Arduino-based battery management system simulator. It is a
                    powerful KIT that lets you design your own Python algorithm
                    for charging, discharging and balancing individual cells.
                    You can use this in any battery-powered application and make
                    it run on your special BMS algorithm. Students who complete
                    the EV 101 course and get onboarded to EV 201, will be
                    receiving the DIY KIT free of charge.
                  </p>
                  <p className="text-sm md:text-base lg:text-lg">
                    The KIT helps students to learn hands-on regarding various
                    aspects of an EV such as 3 pole motor design, motor
                    controller design, Battery management systems and
                    communication in EVs.
                  </p>
                </div>
                <div className="border border-gray-800 bg-gray-800 bg-opacity-25 rounded-xl mt-4 p-4 shadow">
                  <p className="text-center pt-4 text-white font-semibold">
                    Battery Management System (BMS) module designed by
                    Pupilfirst.
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-8 text-sm text-center text-gray-500 italic">
                    <figure>
                      <img
                        src="/hardware-kit/SMD_PCB_top.png"
                        alt="Battery Management System - Top View"
                      />
                      <figcaption>
                        Battery Management System - Top View.
                      </figcaption>
                    </figure>
                    <figure>
                      <img
                        src="/hardware-kit/SMD_PCB_bottom.png"
                        alt="Battery Management System - Bottom View"
                      />
                      <figcaption>
                        Battery Management System - Bottom View.
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PersonalizedLearningExperiece />
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="">
                <div className="heading-with-leftborder">
                  <h2 className="font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:ml-12 xl:ml-16 2xl:ml-36 text-white">
                    Teaching assistants <br />
                    for the course.
                  </h2>
                </div>
              </div>
              <div className="max-w-4xl ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                <div className="space-y-6 text-white">
                  <p className="mt-4 text-sm md:text-base lg:text-lg">
                    Our students who have completed the EV courses as top
                    performers from our previous implementations will be
                    contributing to upcoming batches by sharing their knowledge
                    and experience. Student TAs, along with industry coaches,
                    can answer any doubts, no matter how silly or complex.
                  </p>
                </div>
                <div className="pt-6">
                  <div className="mt-2 lg:mt-4 grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col md:flex-row bg-gray-800 border border-gray-700 rounded-lg">
                      <div className="w-full md:w-32 h-48 md:h-full">
                        <img
                          className="object-cover w-full h-full rounded-t-lg md:rounded-tr-none md:rounded-l-lg flex-shrink-0"
                          src="people/teaching-assistants/Chetan_Shivprakash_Agroya.jpg"
                          alt="Photo of Chetan Shivprakash Agroya"
                        />
                      </div>
                      <div className="flex flex-col flex-1 justify-between text-sm">
                        <div className="p-4">
                          <p className="text-base md:text-lg font-semibold text-white">
                            Chetan Shivprakash Agroya
                          </p>
                          <p className="text-gray-400 pt-1">
                            B.E - Sem VIII, Mechanical Engineering
                          </p>
                        </div>
                        <div>
                          <p className="bg-gray-900 p-4 w-full font-medium text-gray-300 rounded-b-lg md:rounded-bl-none md:rounded-br-lg">
                            PCET's Nutan Maharashtra Institute of Engineering
                            and Technology, Talegaon, Maharashtra
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row bg-gray-800 border border-gray-700 rounded-lg">
                      <div className="w-full md:w-32 h-48 md:h-full">
                        <img
                          className="object-cover w-full h-full rounded-t-lg md:rounded-tr-none md:rounded-l-lg flex-shrink-0"
                          src="people/teaching-assistants/Gurudayal_Singh_Dalawat.jpg"
                          alt="Photo of Gurudayal Singh Dalawat"
                        />
                      </div>
                      <div className="flex flex-col flex-1 justify-between text-sm">
                        <div className="p-4">
                          <p className="text-base md:text-lg font-semibold text-white">
                            Gurudayal Singh Dalawat
                          </p>
                          <p className="text-gray-400 pt-1">
                            B.E - Sem VIII, Mechanical Engineering
                          </p>
                        </div>
                        <div>
                          <p className="bg-gray-900 p-4 w-full font-medium text-gray-300 rounded-b-lg md:rounded-bl-none md:rounded-br-lg">
                            St. Francis Institute of Technology, Mumbai,
                            Maharashtra
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:ml-12 xl:ml-16 2xl:ml-36 text-white">
                    Qualify as a Teaching Assistant.
                  </h2>
                </div>
              </div>
              <div className="max-w-4xl ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                <div className="max-w-3xl space-y-6 text-white pb-16">
                  <p className="mt-4 text-sm md:text-base lg:text-lg">
                    If you are among the top performers in this course, you'll
                    stand a chance to engage future batches as a Teaching
                    Assistant (TA). As a TA, you'll be working closely with the
                    industry experts and the Pupilfirst to meaningfully deliver
                    learning for students in future batches.
                  </p>
                  <p className="mt-4 text-sm md:text-base lg:text-lg">
                    You will not only be able to help others but also elevate
                    your knowledge significantly by adopting industry practices.
                    This will be a paid position.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:ml-12 xl:ml-16 2xl:ml-36 text-white">
                    Career Prospects for EV Engineers.
                  </h2>
                </div>
              </div>
              <div className="max-w-4xl ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                <div className="max-w-3xl space-y-6 text-white">
                  <p className="mt-4 text-sm md:text-base lg:text-lg">
                    India has chalked a plan to aid its electric mobility
                    mission by creating a specialized workforce. The blueprint
                    aims at generating 10 million jobs in the future.
                  </p>
                  <p className="mt-4 text-sm md:text-base lg:text-lg">
                    The government has initiated the{" "}
                    <a
                      className="text-blue-500 underline"
                      target="_blank"
                      href="https://pib.gov.in/newsite/printrelease.aspx?relid=116719#:~:text=Government%20of%20India%20launched%20the,on%20year%20from%202020%20onwards."
                    >
                      National Electric Mobility Mission Plan
                    </a>{" "}
                    in the year 2013 with an objective to put 6-7 million
                    electric vehicles on Indian roads by 2020 and committing to
                    achieving 30% e-mobility in the country by 2030.
                  </p>
                  <p className="mt-4 text-sm md:text-base lg:text-lg">
                    The government's Automotive Mission Plan 2026 evaluates to
                    create an additional 65 million jobs in the auto sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:ml-12 xl:ml-16 2xl:ml-36 text-white">
                    Schedule
                  </h2>
                </div>
              </div>
              <div className="max-w-4xl ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 relative overflow-hidden divide-y divide-gray-700 mt-4">
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-primary-400 lg:text-right">
                      July 27, 2023
                    </p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 text-gray-200">
                      - Application Open for LITE Open Elective.
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-primary-400 lg:text-right">
                      August 09, 2023
                    </p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 text-gray-200">
                      - Applications window ends.
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-basetext-sm lg:text-base text-primary-400 lg:text-right">
                      August 16, 2023
                    </p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 text-gray-200">
                      - Announcement of selected students.
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-primary-400 lg:text-right">
                      August 22, 2023
                    </p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 text-gray-200">
                      - Course commencement for EV 101.
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-primary-400 lg:text-right">
                      October 27, 2023
                    </p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 text-gray-200">
                      - Course conclusion.
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-primary-400 lg:text-right">
                      To be announced.
                    </p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 text-gray-200">
                      - Admission to EV 201.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:ml-12 xl:ml-16 2xl:ml-36 text-white">
                    How to Apply?
                  </h2>
                </div>
              </div>
              <div className="max-w-4xl ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                <div className="max-w-3xl space-y-6 text-white">
                  <p className="mt-4 text-sm md:text-base lg:text-lg">
                    Your admission to the courses as part of open electives will
                    be based on your application and response to the same.
                    Complete your application carefully and stand a chance to
                    get selected to learn LITE EV Courses on a scholarship
                    basis.
                  </p>
                </div>
                <div className="sm:rounded-lg mt-8 bg-white p-8">
                  <div className="flex gap-4 items-center">
                    <p className="text-lg font-semibold flex">
                      Participating Institutions
                    </p>
                    <div className="max-w-fullf flex-1 h-1 border-t-2 border-gray-200"></div>
                  </div>
                  <p className="pt-2 text-gray-600">
                    To start with, students from the following LITE Institutions
                    are eligible to apply.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center px-4 py-10 gap-12">
                    <img
                      className="h-16 object-contain"
                      src="/logos/institutes/University_of_Engineering_and_Management_Jaipur.png"
                      alt="Logo of University of Engineering and Management Jaipur"
                      title="University of Engineering and Management Jaipur"
                    />
                    <img
                      className="h-20 object-contain"
                      src="/logos/institutes/G_H_Raisoni_College_of_Engineering_Nagpur.png"
                      alt="Logo of G H Raisoni College of Engineering Nagpur"
                      title="G H Raisoni College of Engineering Nagpur"
                    />
                  </div>
                </div>

                <div className="mt-12 p-4 md:p-6 rounded-xl bg-gray-800 bg-opacity-25 border border-primary-400">
                  <h4 className="text-primary-400 text-xl lg:text-3xl font-bold">
                    Important
                  </h4>
                  <ul className="list-disc text-white space-y-4 mt-3 ml-4">
                    <li>
                      Students can apply for the LITE EV Courses from{" "}
                      <span className="font-bold">
                        July 27 - August 09, 2023.
                      </span>{" "}
                      Applications will be closely scrutinized for selecting
                      eligible students for taking the courses on a scholarship
                      basis.
                    </li>
                    <li>
                      Students who are not keeping up with the course work
                      within the set timelines shall be dropped out of the
                      course and will lose their scholarship.
                    </li>
                  </ul>
                </div>
                <div className="pt-12">
                  <h4 className="text-primary-400 text-xl lg:text-3xl font-bold">
                    Code of Conduct
                  </h4>
                  <p className="text-white pt-3">
                    Students shall adhere to the{" "}
                    <a
                      className="text-blue-500 font-medium underline hover:text-blue-300"
                      target="_blank"
                      href="https://pages.pupilfirst.school/code-of-conduct/"
                    >
                      Code of Conduct
                    </a>{" "}
                    and provide only truthful information. Any discrepancies
                    shall lead to withdrawal of scholarship and being dropped
                    from the course.
                  </p>
                </div>
                <div className="pt-10 lg:pt-16">
                  <p className="text-primary-400 text-xl lg:text-3xl font-bold">
                    Questions?
                  </p>
                  <p className="text-white pt-3">
                    Please refer to the{" "}
                    <a
                      className="text-blue-500 font-medium underline hover:text-blue-300"
                      target="_blank"
                      href="https://docs.google.com/document/d/e/2PACX-1vTJ9YP4STdXiGMeFokNtO6r9HIeLI7cJOY5YYhOQcJfQxCPVH9HgtQjlojM6-5_oR_Y7OE693OMc9y2/pub"
                    >
                      Frequently Asked Questions (FAQ)
                    </a>{" "}
                    document, as you will find the answers to the questions most
                    commonly asked by students. If you still need help, please
                    get in touch with your faculty, who shall reach out to us.
                  </p>
                  <p className="text-white pt-2">
                    Email us at
                    <a
                      href="mailto:ev@pupilfirst.org"
                      className={
                        "text-blue-500 underline pl-2 tracking-wide font-medium"
                      }
                    >
                      ev@pupilfirst.org
                    </a>
                  </p>
                </div>
              </div>
              <div className="max-w-6xl mx-auto py-10 lg:pb-24 pl-4 xl:pl-0">
                <div className="rounded-lg bg-gradient-to-r from-primary-500 to-secondary-400 border border-primary-400 p-6 lg:p-12">
                  <h4 className="text-xl lg:text-5xl font-extrabold text-center">
                    Apply Now
                  </h4>
                  <div className="mt-4 flex justify-center">
                    <a
                      className="block text-center px-10 font-semibold py-3 bg-gray-900 text-primary-400 border border-primary-400 rounded-md shadow-md hover:shadow-2xl hover:bg-primary-400 hover:text-gray-900 transition"
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfNaUFi3-KRg6VYDgIDMdkxoWEl8OtdGqe_7GoSos9LijgItw/viewform"
                    >
                      Register for EV 101 Course
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
