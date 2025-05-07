"use client";

import Image from "next/image";
import { LinkedinIcon } from "lucide-react";

const teamMembers = [
  {
    name: "Arshad Gadit",
    role: "Global CEO - athGADLANG",
    image: "/team/arshad.jpg",
    link: "https://outlook.office.com/bookwithme/user/867b4a8c29834b6e849facd27663ead3%40athgadlang.com/meetingtype/dBX5t1zrwEm-fIMRHXTuuA2?bookingcode=b4c5a876-5a85-44d9-b4dc-17097455796d&anonymous&ismsaljsauthenabled=true",
  },
  {
    name: "Yasir Gadit",
    role: "Partner – FAAS",
    image: "/team/yasir.jpg",
    link: "https://outlook.office.com/bookwithme/user/09c12d4714104027a58a9be6db798e4f%40athgadlang.com/meetingtype/mM4Hj9VhDkybXSd0I0hcGw2?bookingcode=addae655-530e-451e-a7f7-a11821a354b9&anonymous&ismsaljsauthenabled=true",
  },
  {
    name: "Osman Babar",
    role: "Partner – BPO",
    image: "/team/osman.jpg",
    link: "https://outlook.office.com/bookwithme/user/f63d3e7349004156b0bdf1e30fa8a471%40athgadlang.com/meetingtype/XJziLX_7Qk6QgUou5YAcxQ2?bookingcode=c9ec5e18-4c65-45a5-a579-cf8228ba45dd&anonymous&ismsaljsauthenabled=true",
  },
  {
    name: "Muhammad Raza",
    role: "Partner - Tech",
    image: "/team/raza.jpg",
    link: "https://outlook.office.com/bookwithme/user/3635a1496b174ca397c443694c488605%40athgadlang.com/meetingtype/F6kEKXb7Bkmbp46IJvCxVA2?bookingcode=413fb285-0737-4f3f-b273-ebe89d2ce73b&anonymous&ismsaljsauthenabled=true",
  },
  {
    name: "Usman Alam",
    role: "Partner – Assurance & Compliance",
    image: "/team/usman.jpg",
    link: "#",
  },
];

const services = [
  "Accounting: Expert financial reporting and advisory to help you stay ahead.",
  "Assurance: Independent audits and reviews to build trust and integrity.",
  "Tax: Smart, strategic planning that optimizes your tax outcomes.",
  "Consulting: Practical, results-driven insights for growth and efficiency.",
  "Resourcing: On-demand talent solutions to meet your evolving needs.",
];

export default function Home() {
  const handleScrollToLeaders = () => {
    const element = document.getElementById("strategic-leaders");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white py-6 px-6 flex justify-center items-center border-b border-light">
        <div className="flex items-center gap-8">
          <Image
            src="/account-ex.png"
            alt="athGADLANG"
            width={240}
            height={72}
            className="h-14 w-auto"
            style={{ color: "#133557" }}
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-secondary py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Minds <span className="text-accent">Behind The Numbers</span>
            <span className="block text-3xl md:text-4xl text-light mt-6">
              Meet the athGADLANG Team @ Accountex 2025
            </span>
          </h1>
          <p className="text-light text-xl mb-12 max-w-3xl mx-auto">
            Accounting expertise meets innovation. <br /> Let&apos;s turn
            conversations into lasting solutions.
          </p>
          <button
            onClick={handleScrollToLeaders}
            className="bg-primary hover:bg-accent text-white font-bold py-4 px-12 rounded-full transition-all duration-300 hover:scale-105 uppercase"
          >
            Book a Meeting With Our Team
          </button>
        </div>
      </section>

      {/* Team Grid */}
      <section
        id="strategic-leaders"
        className="py-24 px-6 bg-gradient-to-br from-[#e2ecf6] to-[#f0f4f8]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-secondary mb-2">
            Meet Our Strategic Leaders
          </h2>

          <p className="text-lg text-secondary max-w-2xl mx-auto text-center mb-16">
            These Are the Faces You&apos;ve Met at Accountex. Now Let&apos;s
            Take It Further
          </p>

          {/* Flexbox for Centered Last Row */}
          <div className="flex flex-wrap justify-center gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative w-full max-w-xs bg-[#102a43] text-white rounded-3xl pb-10 pt-6 px-4 shadow-lg"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 92%, 52% 100%, 0 92%)",
                }}
              >
                {/* Angled Banner Text */}
                <div className="absolute top-4 left-4 bg-primary backdrop-blur-sm px-3 py-1 rotate-[-10deg] text-xs font-semibold rounded z-10">
                  {index === 0 && "Growing future leaders"}
                  {index === 1 && "Reigniting the passion"}
                  {index === 2 && "Improving the culture"}
                  {index === 3 && "Bridging the divide"}
                  {index === 4 && "Leading with impact"}
                </div>

                {/* Image */}
                <div className="overflow-hidden rounded-xl mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full h-72 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-white text-sm text-center mb-4">
                  {member.role}
                </p>

                {/* Book Meeting Button */}
                <div className="text-center">
                  <a
                    href={member.link || "#"}
                    target="_blank"
                    rel="noopener"
                    className="inline-block bg-white text-secondary hover:bg-secondary hover:text-white font-bold px-6 py-2 rounded-full text-sm transition-all duration-300"
                  >
                    Book a Meeting
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-20 items-center justify-center">
          <div>
            <h2 className="text-5xl font-extrabold text-secondary leading-tight mb-6 text-center">
              More Than Accountants.{" "}
              <span className="block text-primary">
                We&apos;re Your Strategic Partners.
              </span>
            </h2>

            <p className="text-lg text-secondary mb-10 max-w-xl mx-auto text-center">
              At <span className="font-bold text-primary">athGADLANG</span>, we
              bring together deep industry knowledge, precision, and a
              people-first approach. Our services are tailored to empower
              businesses like yours with:
            </p>

            {/* Modified Services Grid */}
            <div className="flex flex-wrap justify-center gap-8">
              {" "}
              {/* Changed to flex */}
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white border border-[#dce3ea] rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-6 w-full max-w-[405px]"
                >
                  {/* Decorative Corner Circle */}
                  <div className="absolute -top-5 -left-5 w-10 h-10 bg-primary/10 rounded-full blur-md group-hover:scale-110 transition-transform"></div>

                  <div className="flex items-start gap-4">
                    {/* Number Circle */}
                    <div className="min-w-[40px] min-h-[40px] bg-primary text-white font-bold rounded-full flex items-center justify-center text-base shadow-md">
                      {index + 1}
                    </div>

                    {/* Service Text */}
                    <p className="text-secondary text-md font-medium leading-relaxed">
                      <span className="font-bold">
                        {service.split(":")[0]}:
                      </span>
                      {service.split(":").slice(1).join(":")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Let us know who you&apos;d like to continue the <br /> conversation
            with - we&apos;d love to connect again.
          </h3>
          <a
            href="https://www.linkedin.com/company/athgadlang/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center bg-secondary hover:bg-secondary text-white hover:text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            <LinkedinIcon className="w-6 h-6 mr-3" />
            Let&apos;s Build Something Together
          </a>
          <p className="text-light mt-8"></p>
        </div>
      </section>
    </main>
  );
}
