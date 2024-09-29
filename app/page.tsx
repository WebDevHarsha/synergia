"use client";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";

function page() {
  return (
    <>
      <div className="w-screen h-auto bg-black flex flex-col md:flex-row">
        {/* Left side */}
        <div className="w-full md:w-1/2 flex flex-col pt-20 px-8 md:px-16 bg-black text-white items-center justify-center">
          <div className="ml-8 pt-10 text-4xl">Welcome to Synergy!</div>
          <br></br>
          <div>
            <h1 className="text-xl md:text-xl font-bold text-left font-sans tracking-tight leading-snug">
              Looking for teammates?
            </h1>
          </div>

          <br></br>
          <Link href="/events" passHref>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-4 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-4 py-2 md:px-5 md:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Post Your Event Now ᐳ
              </span>
            </button>
          </Link>
          <p>
            Welcome to Synergy, your go-to platform for finding teammates for
            events! Whether you are hosting or participating in an event, easily
            connect with others by posting your requirements or browsing through
            available opportunities. Synergy helps you create meaningful
            collaborations for any occasion—hackathons, group projects, or
            social events.
          </p>
        </div>

        {/* Right side */}
        <div className="hidden md:block w-1/2 h-screen bg-black">
          <Spline
            className="w-full h-full"
            scene="https://prod.spline.design/kemDRbzPTX0MRcbT/scene.splinecode"
          />
        </div>
      </div>

      <HomeCards />
    </>
  );
}

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const Cards: React.FC<CardProps> = ({ imageSrc, title, description, link }) => {
  return (
    <div className="w-full lg:w-5/6 flex flex-col lg:flex-row bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* Image Section */}
      <div className="w-full lg:w-1/4 h-48 flex justify-center items-center p-3 lg:p-0">
        <a href={link} className="w-full h-full">
          <img
            className="rounded-lg h-full w-full object-cover"
            src={imageSrc}
            alt={title}
          />
        </a>
      </div>

      {/* Content Section */}
      <div className="p-5 w-full lg:w-3/4">
        <a href={link}>
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

const HomeCards: React.FC = () => {
  const cardData = [
    {
      imageSrc: "https://images.app.goo.gl/sqvpcvCyQbXYh8eR8",
      title: "Post Your Event",
      description:
        "Looking for teammates? Post your event details, list the skills or people you need, and get matched with participants who are interested in your event.",
      link: "/post-event",
    },
    {
      imageSrc: "https://images.app.goo.gl/sqvpcvCyQbXYh8eR8",
      title: "Find Events",
      description:
        "Browse through a variety of events and find the ones that match your interests and skills. Join up and form the perfect team!",
      link: "/find-events",
    },
    {
      imageSrc: "https://images.app.goo.gl/sqvpcvCyQbXYh8eR8",
      title: "Create Memorable Experiences",
      description:
        "Synergy connects you with like-minded individuals for any event. Work together, learn together, and make lasting memories!",
      link: "#",
    },
  ];

  return (
    <div className="flex bg-black py-10 w-screen flex-col items-center justify-center space-y-8">
      {cardData.map((card, index) => (
        <Cards
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default page;