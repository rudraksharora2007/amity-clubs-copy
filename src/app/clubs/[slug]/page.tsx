import ClubPageTemplate, { ClubPageData } from "@/components/ClubPageTemplate";
import ClubHero from "@/components/ClubHero";
import { fetchClubPageData, fetchClubSlugs } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await fetchClubSlugs();
  if (!slugs || slugs.length === 0) {
    return [{ slug: 'cascade' }, { slug: 'programming' }, { slug: 'networking' }];
  }
  return slugs.map((slug: string) => ({ slug }));
}

const fallbackClubData: Record<string, ClubPageData> = {
  cascade: {
    name: "Cascade",
    tagline: "Web & App Development",
    instagramUrl: "https://instagram.com",
    applyLabel: "Join Cascade",
    about: {
      headline: "We Don&apos;t Just Learn.<br/><span style='font-style:italic;color:rgba(26,46,90,0.4)'>We Ship.</span>",
      body1: "Cascade is AIIT's premier full-stack development division. Founded on the principle that students learn best by building, we provide a structured environment where members go from zero to deployed in a single semester.",
      body2: "We maintain an active GitHub organisation, run weekly technical sessions, and collaborate directly with the AIIT Student Committee on institutional tech projects.",
      stats: [
        { label: "Projects Shipped", value: "14+" },
        { label: "Active Members", value: "60+" },
        { label: "Workshops Conducted", value: "32" },
        { label: "Alumni in Tech", value: "40+" },
      ],
    },
    activities: {
      past: [
        { title: "Full-Stack Bootcamp '24", date: "March 2024", desc: "Intensive 3-day workshop on Next.js, Node.js, and PostgreSQL." },
        { title: "Deploy-a-thon", date: "Jan 2024", desc: "Students shipped a production app in 24 hours on Vercel." },
        { title: "UI/UX Design Sprint", date: "Nov 2023", desc: "Figma to code—translating wireframes into pixel-perfect implementations." },
      ],
      upcoming: [
        { title: "React Advanced Workshop", date: "June 2025", desc: "Diving into Concurrent Mode, Suspense, and Server Components." },
        { title: "Open Source Sprint", date: "July 2025", desc: "Contribute to real GitHub repositories as a team." },
        { title: "Annual Code Showcase", date: "Aug 2025", desc: "Present your best projects to faculty and industry professionals." },
      ],
      extra: [
        { title: "API Design Masterclass", date: "Sep 2023", desc: "RESTful architecture and OpenAPI specification standards." },
        { title: "Git & Collaboration", date: "Oct 2023", desc: "Advanced git workflows, branching strategies, and code reviews." },
        { title: "Database Optimization", date: "Dec 2023", desc: "Indexing, query optimization, and N+1 problem resolution." },
      ],
    },
    leadership: [
      { id: "faculty", role: "Faculty Coordinator", name: "Prof. (Dr) Rekha Agarwal", message: "Cascade exemplifies what AIIT stands for—students who don't just learn technology but build it. I am proud of every product this team has shipped." },
      { id: "president", role: "President", name: "Kshitiz Jain", message: "\"When I joined Cascade in first year, I barely knew what HTML was. Today I've shipped three live websites and mentored juniors doing the same. That's the compounding power of a good club.\"" },
      { id: "vp1", role: "Vice President", name: "Aryan Mehta" },
      { id: "vp2", role: "Vice President", name: "Sneha Gupta" },
      { id: "memsec", role: "Member Secretary", name: "Rahul Sharma" },
      { id: "treasurer", role: "Treasurer", name: "Priya Kapoor" },
    ],
    faqs: [
      { q: "Who can join Cascade?", a: "Any AIIT student—regardless of year or prior experience—is eligible to apply. We have beginner tracks and advanced tracks to match your skill level." },
      { q: "What tech stack does Cascade focus on?", a: "We primarily work with React, Next.js, Node.js, and PostgreSQL. However, members are free to explore any stack for their personal projects." },
      { q: "Is there a membership fee?", a: "No. Cascade is entirely free to join. We believe in zero barriers to technical education." },
      { q: "How often do we meet?", a: "We hold weekly sessions every Saturday (2–5 PM) in the AIIT Computer Lab. Additional workshops are announced on our Instagram." },
      { q: "Can freshers join?", a: "Absolutely. Freshers are especially encouraged to join early—our onboarding mentorship program is designed specifically for first-year students." },
    ],
    hero: <></>,
  },
  programming: {
    name: "Programming",
    tagline: "Algorithmic Logic",
    instagramUrl: "https://instagram.com",
    applyLabel: "Join Programming",
    about: {
      headline: "Code. Compete. <span style='font-style:italic;color:rgba(26,46,90,0.4)'>Conquer.</span>",
      body1: "The Programming Club is AIIT's hub for competitive programming, algorithmic thinking, and problem-solving excellence. We prepare students for coding interviews, hackathons, and competitive programming contests.",
      body2: "From LeetCode grind sessions to ICPC regionals, we build the analytical muscle that top tech companies demand. Our members consistently place in national-level competitions.",
      stats: [
        { label: "Contests Won", value: "8+" },
        { label: "Active Members", value: "80+" },
        { label: "Hackathons Entered", value: "12" },
        { label: "Placed in Top Tech", value: "25+" },
      ],
    },
    activities: {
      past: [
        { title: "Code Wars 2024", date: "April 2024", desc: "Inter-college competitive programming contest with 200+ participants." },
        { title: "DSA Bootcamp", date: "Feb 2024", desc: "6-week intensive covering graphs, DP, and advanced data structures." },
        { title: "Google Kickstart Prep", date: "Dec 2023", desc: "Mock rounds and problem-solving sessions for Google's coding contest." },
      ],
      upcoming: [
        { title: "ICPC Regional Prep", date: "July 2025", desc: "Intensive training for the ICPC Asia regional contest." },
        { title: "Code Chef Long Challenge", date: "Aug 2025", desc: "Team-based participation in CodeChef's monthly long challenge." },
        { title: "Interview Prep Series", date: "Sep 2025", desc: "Mock technical interviews with alumni from FAANG companies." },
      ],
      extra: [
        { title: "Bit Manipulation Workshop", date: "Oct 2023", desc: "Deep dive into bitwise operations and their applications." },
        { title: "Graph Algorithms", date: "Nov 2023", desc: "BFS, DFS, Dijkstra, and advanced graph techniques." },
        { title: "Dynamic Programming Patterns", date: "Jan 2024", desc: "Recognizing and solving common DP patterns." },
      ],
    },
    leadership: [
      { id: "faculty", role: "Faculty Coordinator", name: "Prof. (Dr) Rekha Agarwal", message: "The Programming Club represents the intellectual rigor that defines AIIT. These students push boundaries every single day." },
      { id: "president", role: "President", name: "Vikram Bose", message: "\"Competitive programming taught me to think under pressure. That skill alone got me my internship at Google.\"" },
      { id: "vp1", role: "Vice President", name: "Ishaan Tripathi" },
      { id: "vp2", role: "Vice President", name: "Meera Joshi" },
      { id: "memsec", role: "Member Secretary", name: "Siddharthoy" },
      { id: "treasurer", role: "Treasurer", name: "Tanya Mishra" },
    ],
    faqs: [
      { q: "Do I need coding experience to join?", a: "Not at all. We have tracks for beginners starting from basic programming concepts up to advanced competitive programming." },
      { q: "Which platforms do you use?", a: "We primarily use LeetCode, CodeChef, Codeforces, and HackerRank. We also participate in Google Kickstart and ICPC." },
      { q: "Will this help with placements?", a: "Absolutely. Our curriculum is directly aligned with technical interview patterns used by top tech companies." },
      { q: "Do you form hackathon teams?", a: "Yes! We regularly form teams for national and international hackathons. Many of our members have won prizes." },
      { q: "Is there an ICPC training camp?", a: "Yes, we run a dedicated ICPC training program each semester with mock contests and problem-solving sessions." },
    ],
    hero: <></>,
  },
  networking: {
    name: "Networking",
    tagline: "Infrastructure & Security",
    instagramUrl: "https://instagram.com",
    applyLabel: "Join Networking",
    about: {
      headline: "Secure. Connect. <span style='font-style:italic;color:rgba(26,46,90,0.4)'>Protect.</span>",
      body1: "The Networking Club is AIIT's center for infrastructure engineering, cybersecurity, and network administration. We manage real lab equipment and run hands-on sessions on enterprise-grade networking hardware.",
      body2: "From configuring Cisco routers to running penetration tests, our members gain practical skills that are directly applicable in the industry. We maintain a dedicated networking lab with enterprise equipment.",
      stats: [
        { label: "Lab Sessions", value: "24+" },
        { label: "Active Members", value: "45+" },
        { label: "Certifications Earned", value: "18" },
        { label: "CTF Competitions", value: "6" },
      ],
    },
    activities: {
      past: [
        { title: "Cisco Networking Academy", date: "March 2024", desc: "CCNA-level training with hands-on router and switch configuration." },
        { title: "Capture The Flag 2024", date: "Jan 2024", desc: "Internal cybersecurity CTF competition with real-world scenarios." },
        { title: "Cloud Infrastructure Workshop", date: "Nov 2023", desc: "AWS and Azure networking fundamentals and VPC configuration." },
      ],
      upcoming: [
        { title: "Penetration Testing Lab", date: "June 2025", desc: "Hands-on ethical hacking with Kali Linux and Metasploit." },
        { title: "Network Security Certification Prep", date: "July 2025", desc: "Preparation for CompTIA Security+ and CEH certifications." },
        { title: "SDN & NFV Workshop", date: "Aug 2025", desc: "Software-defined networking and network function virtualization." },
      ],
      extra: [
        { title: "Wireshark Deep Dive", date: "Sep 2023", desc: "Packet analysis and network troubleshooting techniques." },
        { title: "Firewall Configuration", date: "Oct 2023", desc: "Setting up and managing enterprise firewalls." },
        { title: "Wireless Security", date: "Dec 2023", desc: "WPA3, enterprise WiFi, and wireless penetration testing." },
      ],
    },
    leadership: [
      { id: "faculty", role: "Faculty Coordinator", name: "Prof. (Dr) Rekha Agarwal", message: "The Networking Club bridges the gap between theoretical knowledge and practical infrastructure skills. These students are future-ready." },
      { id: "president", role: "President", name: "Ankit Verma", message: "\"Managing real Cisco equipment in our lab gave me the confidence to ace my network engineering interview. Nothing beats hands-on experience.\"" },
      { id: "vp1", role: "Vice President", name: "Divya Nair" },
      { id: "vp2", role: "Vice President", name: "Rohan Pillai" },
      { id: "memsec", role: "Member Secretary", name: "Aditya Singh" },
      { id: "treasurer", role: "Treasurer", name: "Kavya Reddy" },
    ],
    faqs: [
      { q: "Do I need prior networking knowledge?", a: "No. We start from OSI model basics and work up to advanced topics. Our curriculum is designed for all skill levels." },
      { q: "What certifications do you prepare for?", a: "We cover CCNA, CompTIA Network+, Security+, and CEH. Our lab equipment matches certification exam environments." },
      { q: "Is there a dedicated networking lab?", a: "Yes. We have a dedicated lab with Cisco routers, switches, and firewalls for hands-on practice." },
      { q: "How do I stay updated on club activities?", a: "Follow us on Instagram and join our WhatsApp group. We post weekly lab schedules and workshop announcements." },
      { q: "Is there a cybersecurity track?", a: "Yes! We have a dedicated cybersecurity track covering penetration testing, CTF competitions, and security certifications." },
    ],
    hero: <></>,
  },
};

export default async function ClubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { page, leaders, activities, faqs, gallery } = await fetchClubPageData(slug);

  const useFallback = !page;
  const fallback = fallbackClubData[slug];

  if (useFallback && !fallback) {
    notFound();
  }

  const clubName = page?.name || fallback?.name || slug;
  const clubTagline = page?.tagline || fallback?.tagline || '';
  const clubInstagram = page?.instagramUrl || fallback?.instagramUrl || '';
  const clubApplyLabel = page?.applyLabel || fallback?.applyLabel || `Join ${clubName}`;
  const clubHeadline = page?.aboutHeadline || fallback?.about.headline || '';
  const clubBody1 = page?.aboutBody1 || fallback?.about.body1 || '';
  const clubBody2 = page?.aboutBody2 || fallback?.about.body2 || '';
  const clubStats = page?.aboutStats || fallback?.about.stats || [];

  const data: ClubPageData = {
    name: clubName,
    tagline: clubTagline,
    instagramUrl: clubInstagram,
    applyLabel: clubApplyLabel,
    about: {
      headline: clubHeadline,
      body1: clubBody1,
      body2: clubBody2,
      stats: clubStats,
    },
    activities: useFallback ? (fallback?.activities || { past: [], upcoming: [], extra: [] }) : activities,
    leadership: useFallback ? (fallback?.leadership || []) : leaders,
    faqs: useFallback ? (fallback?.faqs || []) : faqs.map((f: any) => ({ q: f.question, a: f.answer })),
    hero: <ClubHero name={clubName} tagline={clubTagline} instagramUrl={clubInstagram} applyLabel={clubApplyLabel} />,
    gallery: useFallback ? [] : (gallery?.map((g: any) => ({ ...g, desc: '' })) || []),
  };

  return <ClubPageTemplate data={data} />;
}
