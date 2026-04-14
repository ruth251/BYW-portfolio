import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  ShieldCheck,
  Plane,
  Briefcase,
  Mic,
  Map,
  Menu,
  X,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import BGimg from "@/assets/BGimg.jpg";
import agrocover from "@/assets/agrocover.jpg";
import noshapodcast from "@/assets/noshapodcast.jpg";
import tourandtravel from "@/assets/tourandtravel.jpg";
import logistics from "@/assets/logistics.jpg";
import scholar from "@/assets/scholar.jpg";

const businessCards = [
  {
    title: "BYW Agro Industry",
    description:
      "Elevating agricultural productivity through modern inputs, sustainable value-chain growth, and industry-leading research.",
    url: "https://bywagro.com",
    buttonText: "Open bywagro.com",
    icon: <ShieldCheck className="h-6 w-6 text-[#1c1b1b]" />,
    image: agrocover,
  },
  {
    title: "NOSHA Scholars",
    description:
      "A premier corporate and leisure travel service, specialized in complex flight coordination and personalized regional packages.",
    url: "https://noshagroup.com",
    buttonText: "Open noshagroup.com",
    icon: <Plane className="h-6 w-6 text-[#1c1b1b]" />,
    image: scholar,
  },
  {
    title: "Trade & Logistics",
    description:
      "End-to-end business logistics facilitating seamless import/export operations and streamlined domestic trade solutions.",
    url: "https://nolyanatrades.com/",
    buttonText: "Open nolyanatrades.com",
    icon: <Briefcase className="h-6 w-6 text-[#474545]" />,
    image: logistics
  },
  {
    title: "Nosha Podcast",
    description:
      "The definitive business podcast sharing insights on East African growth, trade innovation, and enterprise leadership.",
    url: "https://www.youtube.com/@noshapodcast",
    buttonText: "Listen on YouTube",
    icon: <Mic className="h-6 w-6 text-[#1c1b1b]" />,
    image: noshapodcast,
  },
  {
    title: "Nosha Tour & Travel",
    description:
      "Explore travel experiences, curated tours, and seamless booking services across East Africa and beyond.",
    route: "/nosha-travel",
    buttonText: "Explore",
    icon: <Map className="h-6 w-6 text-[#1c1b1b]" />,
    image: tourandtravel,
  },
];

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const companiesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleCardClick = (card: (typeof businessCards)[0]) => {
    if (card.route) {
      navigate(card.route);
    } else if (card.url && !card.disabled) {
      window.open(card.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-[#1c1b1b] selection:bg-[#5F5B3A]/30 selection:text-[#1c1b1b]">
      {/* Dynamic Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#474545]/10 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter text-[#1c1b1b]">
              Bnosha Group
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-12 md:flex">
            <button
              onClick={() => scrollTo(aboutRef)}
              className="text-sm font-bold tracking-widest text-[#1c1b1b]/70 transition-colors hover:text-[#5F5B3A]"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollTo(companiesRef)}
              className="text-sm font-bold tracking-widest text-[#1c1b1b]/70 transition-colors hover:text-[#5F5B3A]"
            >
              COMPANIES
            </button>
            <button
              onClick={() => scrollTo(contactRef)}
              className="rounded bg-[#5F5B3A] px-6 py-2 text-sm font-black text-white transition-all hover:bg-[#1c1b1b] hover:shadow-lg"
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#1c1b1b]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="flex flex-col gap-6 border-t border-[#474545]/10 bg-white p-6 md:hidden">
            <button
              onClick={() => scrollTo(aboutRef)}
              className="text-left text-lg font-bold"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollTo(companiesRef)}
              className="text-left text-lg font-bold"
            >
              COMPANIES
            </button>
            <button
              onClick={() => scrollTo(contactRef)}
              className="text-left text-lg font-bold"
            >
              CONTACT
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col overflow-hidden pb-12 px-6">
        <div className="absolute inset-0 z-0 m-6 mb-0 mt-32 rounded-t-[2.5rem] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BGimg})` }}
          />
          {/* Subtle overlay for text readability at the top-right corner */}
          <div className="absolute inset-0 bg-gradient-to-bl from-white/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 ml-auto w-full max-w-7xl px-9 pt-20 text-right">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-[#1c1b1b] sm:text-5xl lg:text-6xl">
            A Legacy of Diversified <br />{" "}
            <span className="text-[#5F5B3A]">Excellence</span>.
          </h2>
          <p className="mt-4 ml-auto max-w-md text-xs font-bold leading-relaxed text-[#1c1b1b] sm:text-sm">
            A diversified holding group powering growth across agriculture,
            travel, media, and global trade.
          </p>
          <div className="mt-8 flex justify-end gap-4">
            <button
              onClick={() => scrollTo(companiesRef)}
              className="rounded bg-[#1c1b1b] px-6 py-3 text-[15px] font-black text-white transition-all hover:bg-[#5F5B3A] hover:shadow-2xl"
            >
              EXPLORE UNITS
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="bg-[#f3f3f3]/50 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#5F5B3A]">
                About the Group
              </h2>
              <h3 className="mt-6 text-4xl font-black leading-tight text-[#1c1b1b] sm:text-5xl">
                One Vision. <br /> Multiple Verticals.
              </h3>
              <p className="mt-8 text-lg leading-relaxed text-[#1c1b1b]/60">
                Founded on the principles of reliability and innovation, BNOSHA
                Group has grown from a specialized logistics provider into a
                multifaceted enterprise. We operate at the intersection of
                critical industries, ensuring that growth is not just achieved,
                but sustained.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 border border-[#474545]/10 shadow-sm">
                <h4 className="text-2xl font-black text-[#5F5B3A]">10+</h4>
                <p className="mt-2 text-sm font-bold uppercase tracking-widest text-[#474545]">
                  Years Expertise
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 border border-[#474545]/10 shadow-sm">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5F5B3A]/10 text-[#5F5B3A]">
                  <ArrowUpRight size={24} strokeWidth={3} />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-[#474545]">
                  Growing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section
        ref={companiesRef}
        className="bg-white py-32 border-t border-[#474545]/10"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#5F5B3A]">
              Portfolio
            </h2>
            <h3 className="mt-4 text-4xl font-black text-[#1c1b1b]">
              Business Verticals
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {businessCards.map((card) => {
              const isReserved = card.disabled;

              const cardMarkup = (
                <div className="flex h-full flex-col overflow-hidden">
                  {!isReserved && card.image && (
                    <div className="h-48 w-full overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col justify-between p-8">
                    <div>
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded bg-[#f3f3f3]">
                        {card.icon}
                      </div>
                      <h4 className="text-xl font-black uppercase tracking-tight text-[#1c1b1b]">
                        {card.title}
                      </h4>
                      <p className="mt-4 text-sm leading-relaxed text-[#1c1b1b]/50">
                        {card.description}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#5F5B3A] opacity-70 group-hover:opacity-100">
                      {card.buttonText} <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              );

              const commonProps = {
                key: card.title,
                onClick: () => handleCardClick(card),
                className: `group rounded-3xl border border-[#474545]/10 bg-white transition-all shadow-sm hover:border-[#5F5B3A]/40 hover:shadow-xl overflow-hidden ${
                  isReserved ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
                }`,
              };

              return <div {...commonProps}>{cardMarkup}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="bg-[#f3f3f3]/30 py-32 border-t border-[#474545]/10"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#5F5B3A]">
                Inquiries
              </h2>
              <h3 className="mt-4 text-5xl font-black text-[#1c1b1b]">
                Get in Touch
              </h3>
              <p className="mt-8 text-lg text-[#1c1b1b]/60">
                Interested in partnering with BNOSHA Group or learning more
                about our services? Reach out to our corporate headquarters.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#5F5B3A] text-white">
                    <MapPin size={20} />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h5 className="font-black text-[#1c1b1b]">
                        China Office
                      </h5>
                      <p className="mt-1 text-sm text-[#1c1b1b]/60 italic">
                        Guangzhou taojin Manyu gongshi 420
                      </p>
                    </div>
                    <div>
                      <h5 className="font-black text-[#1c1b1b]">
                        Ethiopia Office
                      </h5>
                      <p className="mt-1 text-sm text-[#1c1b1b]/60 italic">
                        Addis Ababa mickylyland street Elsadol Building 403
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#5F5B3A] text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="font-black text-[#1c1b1b]">
                      Contact Numbers
                    </h5>
                    <div className="mt-1 flex flex-wrap gap-x-8 gap-y-1 text-sm text-[#1c1b1b]/60 italic">
                      <span>+86 156 2396 3803 (CN)</span>
                      <span>+251 93 864 4784 (ET)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#5F5B3A] text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="font-black text-[#1c1b1b]">
                      Email Address
                    </h5>
                    <p className="mt-1 text-sm text-[#1c1b1b]/60 italic">
                      info@bnosagroup.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-[#1c1b1b] p-12 text-white">
              <h4 className="text-2xl font-black">Direct Message</h4>
              <p className="mt-4 text-white/50 text-sm italic">
                Our team typically responds within 24 business hours.
              </p>
              <form
                className="mt-8 space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-6 py-4 text-sm focus:border-[#5F5B3A] focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-6 py-4 text-sm focus:border-[#5F5B3A] focus:outline-none"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-6 py-4 text-sm focus:border-[#5F5B3A] focus:outline-none"
                />
                <button className="w-full rounded-xl bg-[#5F5B3A] py-4 font-black transition-all hover:bg-white hover:text-[#1c1b1b]">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#474545]/10 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-[10px] font-black uppercase tracking-[0.5em] text-[#474545]">
          &copy; {new Date().getFullYear()} BNOSHA GROUP. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </main>
  );
};

export default Landing;

