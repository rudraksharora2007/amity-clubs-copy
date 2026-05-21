import Navbar from "@/components/Navbar";
import LeadershipSection from "@/components/LeadershipSection";
import CommitteeCTA from "@/components/CommitteeCTA";
import ClubsSection from "@/components/ClubsSection";
import EventsGallery from "@/components/EventsGallery";
import Footer from "@/components/Footer";
import Link from "next/link";
import { fetchHomepageLeaders, fetchDivisions, fetchEvents } from "@/lib/sanity/queries";

export const revalidate = 60;

const fallbackLeaders = [
  {
    _id: 'fallback-1',
    name: 'Prof. (Dr) Rekha Agarwal',
    role: 'Director, AIIT',
    description: "Providing strategic oversight to ensure that student initiatives directly complement the institute's academic rigor and industry alignment. The technical divisions act as a direct extension of the institute's commitment to hands-on, high-stakes learning.",
    order: 0,
  },
  {
    _id: 'fallback-2',
    name: 'Prof. (Dr.) Laxmi Ahuja',
    role: 'Chief Coordinator',
    description: "Tasked with the operational integrity of all student divisions. Focuses on maintaining clear accountability, measurable outcomes, and seamless coordination between technical departments to ensure enterprise-grade execution.",
    order: 1,
  },
  {
    _id: 'fallback-3',
    name: 'Mr. Priyaank Sinha',
    role: 'Student Chief Coordinator',
    description: "Responsible for the execution of the committee's mandate on the ground floor. Ensures that every division operates efficiently, fostering an environment where students execute at a professional standard without compromise.",
    order: 2,
  },
  {
    _id: 'fallback-4',
    name: 'Mr. Devansh',
    role: 'Student Co-Chief Coordinator',
    description: "Assists the Chief Coordinator in executing the committee's mandate. Drives operational efficiency and maintains the professional standard across all student divisions.",
    order: 3,
  },
];

const fallbackDivisions = [
  {
    _id: 'fallback-d1',
    name: 'Cascade',
    slug: 'cascade',
    subtitle: 'Full-Stack Engineering',
    divisionId: '01',
    stats: [
      { value: '4+', label: 'Active Products' },
      { value: '80K+', label: 'Lines of Code' },
      { value: 'React / Node', label: 'Primary Stack' },
    ],
    order: 0,
  },
  {
    _id: 'fallback-d2',
    name: 'Programming',
    slug: 'programming',
    subtitle: 'Algorithmic Logic',
    divisionId: '02',
    stats: [
      { value: '24', label: 'Internal Contests' },
      { value: '1,200+', label: 'Problems Solved' },
      { value: 'C++ / Java', label: 'Primary Stack' },
    ],
    order: 1,
  },
  {
    _id: 'fallback-d3',
    name: 'Networking',
    slug: 'networking',
    subtitle: 'Infrastructure & Security',
    divisionId: '03',
    stats: [
      { value: '3', label: 'Active Subnets' },
      { value: '100%', label: 'Uptime Focus' },
      { value: 'Cisco / AWS', label: 'Primary Stack' },
    ],
    order: 2,
  },
];

const fallbackEvents = [
  {
    _id: 'fallback-e1',
    title: 'Annual Hackathon 2024',
    category: 'Flagship Event',
    date: 'March 15, 2024',
    gridClass: 'md:col-span-8 md:row-span-2',
    order: 0,
  },
  {
    _id: 'fallback-e2',
    title: 'AI & Machine Learning Workshop',
    category: 'Technical Session',
    date: 'February 10, 2024',
    gridClass: 'md:col-span-4 md:row-span-1',
    order: 1,
  },
  {
    _id: 'fallback-e3',
    title: 'Cybersecurity Bootcamp',
    category: 'Training',
    date: 'January 22, 2024',
    gridClass: 'md:col-span-4 md:row-span-1',
    order: 2,
  },
  {
    _id: 'fallback-e4',
    title: 'Alumni Tech Panel',
    category: 'Networking',
    date: 'November 18, 2023',
    gridClass: 'md:col-span-6 md:row-span-1',
    order: 3,
  },
  {
    _id: 'fallback-e5',
    title: 'Algorithmic Coding Challenge',
    category: 'Competition',
    date: 'October 05, 2023',
    gridClass: 'md:col-span-6 md:row-span-1',
    order: 4,
  },
];

export default async function Home() {
  const [leaders, divisions, events] = await Promise.all([
    fetchHomepageLeaders() as Promise<any[]>,
    fetchDivisions() as Promise<any[]>,
    fetchEvents() as Promise<any[]>,
  ]);

  return (
    <main className="relative bg-white pt-20">
      <Navbar />

      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #002147 1px, transparent 1px),
            linear-gradient(to bottom, #002147 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <section className="relative border-b border-rule min-h-[75vh] flex flex-col justify-center z-10">
        <div className="absolute left-0 top-0 w-1 h-full bg-accent" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full grid grid-cols-12 gap-8 py-24">
          <div className="col-span-12 lg:col-span-9">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.05] tracking-tight mb-10">
              Beyond The Classroom. <br /> Begins Here.
            </h1>
            <div className="h-[2px] w-full bg-primary mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7">
                <p className="font-sans text-sm leading-[1.9] text-primary/80">
                  At AlIT, we believe true growth happens beyond the classroom.
                  Through our Student Committee and diverse Clubs, we provide platforms where students lead, collaborate, explore interests, and create meaningful impact.
                </p>
              </div>
              <div className="md:col-span-5 flex flex-col justify-end">
                <div className="border-l-2 border-accent pl-4 mb-6">
                  <p className="font-sans text-[10px] tracking-widest uppercase text-primary font-bold">
                    WE BELIEVE
                  </p>
                  <p className="font-serif text-sm text-primary/70 italic mt-1">
                    "The best way to predict the future is to create it."
                  </p>
                </div>
                <Link
                  href="/committee"
                  className="font-sans text-xs uppercase tracking-widest text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-white transition-colors w-max"
                >
                  View the Committee
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadershipSection leaders={leaders.length >= 2 ? leaders : fallbackLeaders} />

      <CommitteeCTA />

      <ClubsSection divisions={divisions.length > 0 ? divisions : fallbackDivisions} />

      <EventsGallery events={events.length > 0 ? events : fallbackEvents} />

      <Footer />
    </main>
  );
}
