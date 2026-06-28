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
      body1: "Cascade Web Development Club (AIIT) is a student-led technical club that focuses on teaching modern web development skills. The club organizes workshops, coding sessions, and projects to help students learn technologies such as HTML, CSS, JavaScript, React, Node.js, and Django.",
      body2: "Its goal is to enhance students' technical knowledge, encourage innovation, and provide practical experience in building real-world web applications. Cascade's main color theme is blue, white, and black.",
      stats: [
        { label: "Core Technologies", value: "6+" },
        { label: "Past Events", value: "4" },
        { label: "Upcoming Events", value: "4" },
        { label: "Theme", value: "Blue" },
      ],
    },
    activities: {
      past: [
        { title: "EurekaHacks", date: "Previous Semester", desc: "Hackathon hosted at Amity University in collaboration with Google Developer Group and Microsoft Technical Community." },
        { title: "MCP: Building AI Powered Workflow", date: "Previous Semester", desc: "Hands-on workshop in collaboration with Google Developer Group, featuring a software engineer speaker from Ciena." },
        { title: "PixelRush", date: "Previous Semester", desc: "Web development challenge organized with Microsoft Technical Community and internship partner DevLeds." },
        { title: "Introduction to AI Agents with Azure AI", date: "Previous Semester", desc: "Workshop in collaboration with Microsoft Technical Community introducing students to AI agents using Azure AI." },
      ],
      upcoming: [
        { title: "CodePop: Burst & Build Coding Challenge", date: "Future Semester", desc: "A fast-paced coding challenge where participants build and iterate under time pressure." },
        { title: "Prompt Wars — AI Battle Arena", date: "Future Semester", desc: "A prompt engineering competition focused on creativity, precision, and AI-powered problem solving." },
        { title: "Bug Hunt: Escape Room", date: "Future Semester", desc: "Debugging meets escape-room logic in a technical challenge built around finding and fixing bugs." },
        { title: "Mystery Project Challenge", date: "Future Semester", desc: "A surprise project-building challenge that tests teamwork, design thinking, and execution." },
      ],
      extra: [
        { title: "HTML, CSS & JavaScript", date: "Core Track", desc: "Foundational web development skills for building interactive websites." },
        { title: "React, Node.js & Django", date: "Advanced Track", desc: "Modern full-stack technologies used to build production-ready web applications." },
        { title: "Projects & Coding Sessions", date: "Ongoing", desc: "Practical sessions designed to convert learning into real-world web applications." },
      ],
    },
    leadership: [
      { id: "faculty", role: "Faculty Coordinator", name: "Dr. Komal Saxena", message: "Cascade Club is a platform where ideas transform into innovation, creativity turns into action, and students grow into future leaders. We believe in inspiring minds, building confidence, and creating opportunities that empower every individual to excel. Together, we strive to learn, lead, and leave a lasting impact through knowledge, teamwork, and vision.", portrait: "/clubs/cascade/portrait-05.png", linkedinUrl: "https://www.linkedin.com/in/dr-komal-saxena-727a0a193/", twitterUrl: "https://www.scopus.com/authid/detail.uri?authorId=58508407900" },
      { id: "president", role: "Student President (Female)", name: "Ms. Sanya Sabharwal", message: "Together, we learn, create, and push the boundaries of innovation every day.\n\nCourse: B.Sc (Artificial Intelligence & Data Science) Hons./Res.\nEnrollment Number: A010175723016", portrait: "/clubs/cascade/portrait-04.png", linkedinUrl: "https://www.linkedin.com/in/sanyasabharwalss" },
      { id: "vpf", role: "Student Vice President (Female)", name: "Ms. Zia Kalra", message: "Course: BCA\nEnrollment Number: A1004825068", portrait: "/clubs/cascade/portrait-03.png", linkedinUrl: "http://www.linkedin.com/in/zia-kalra" },
      { id: "vpm", role: "Student Vice President (Male)", name: "Mr. Saksham Mahalwal", message: "Course: B.Sc IT (Hons. & Research)\nEnrollment Number: A010178723016", portrait: "/clubs/cascade/portrait-02.png", linkedinUrl: "https://www.linkedin.com/in/saksham-mahalwal-544981327" },
      { id: "secretary", role: "Student Secretary", name: "Ms. Rachael Elizabeth Biju", message: "Course: B.Sc IT (Hons. & Research)", portrait: "/clubs/cascade/portrait-01.png", linkedinUrl: "https://www.linkedin.com/in/rachael-elizabeth-8b395a338/" },
    ],
    faqs: [
      { q: "Who can join Cascade?", a: "Any AIIT student—regardless of year or prior experience—is eligible to apply. We have beginner tracks and advanced tracks to match your skill level." },
      { q: "What tech stack does Cascade focus on?", a: "We primarily work with React, Next.js, Node.js, and PostgreSQL. However, members are free to explore any stack for their personal projects." },
      { q: "Is there a membership fee?", a: "No. Cascade is entirely free to join. We believe in zero barriers to technical education." },
      { q: "How often do we meet?", a: "We hold weekly sessions every Saturday (2–5 PM) in the AIIT Computer Lab. Additional workshops are announced on our Instagram." },
      { q: "Can freshers join?", a: "Absolutely. Freshers are especially encouraged to join early—our onboarding mentorship program is designed specifically for first-year students." },
    ],
    hero: <></>,
    gallery: [
      { _id: "cascade-gallery-1", title: "Cascade Event Team", year: "Previous Semester", photo: "/clubs/cascade/events/event-01.jpg", gridClass: "md:col-span-8 md:row-span-2", order: 0 },
      { _id: "cascade-gallery-2", title: "Hands-on Lab Workshop", year: "Previous Semester", photo: "/clubs/cascade/events/event-02.jpg", gridClass: "md:col-span-4 md:row-span-1", order: 1 },
      { _id: "cascade-gallery-3", title: "Technical Session", year: "Previous Semester", photo: "/clubs/cascade/events/event-03.jpg", gridClass: "md:col-span-4 md:row-span-1", order: 2 },
      { _id: "cascade-gallery-4", title: "Faculty and Student Coordinators", year: "Previous Semester", photo: "/clubs/cascade/events/event-04.jpg", gridClass: "md:col-span-6 md:row-span-1", order: 3 },
      { _id: "cascade-gallery-5", title: "Cascade Group", year: "Previous Semester", photo: "/clubs/cascade/group-banner.png", gridClass: "md:col-span-6 md:row-span-1", order: 4 },
    ],
  },
  // ⚠️ PORTRAIT NOTE: Individual portrait photos are embedded within the large PNG page
  // renders (portrait-01 through portrait-05 in public/clubs/cascade/). Each PNG is a
  // full PDF page that contains the person's photo + text. To use proper standalone
  // headshots, crop the person's face from the corresponding PNG and save over the file.
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
    name: "Broadcast Storm",
    tagline: "Cybersecurity & Networking",
    instagramUrl: "https://instagram.com",
    applyLabel: "Join Broadcast Storm",
    about: {
      headline: "Secure. Connect. <span style='font-style:italic;color:rgba(26,46,90,0.4)'>Protect.</span>",
      body1: "Welcome to Broadcast Storm — a community driven by curiosity, innovation, and the spirit of learning. As a club focused on networking and cybersecurity, we aim to create opportunities for students to explore technology beyond the classroom and build practical skills for the future.",
      body2: "Through workshops, technical sessions, projects, and collaborative activities, we encourage members to learn, experiment, and grow together. Broadcast Storm is not just about gaining knowledge but also about creating a supportive environment where ideas are shared and everyone feels encouraged to contribute.",
      stats: [
        { label: "Active Members", value: "45+" },
        { label: "Workshops Conducted", value: "6+" },
        { label: "Semester Events", value: "10+" },
        { label: "CTF Competitions", value: "2+" },
      ],
    },
    activities: {
      past: [
        { title: "Introduction to Network Hacking with Wireshark", date: "Previous Semester", desc: "Hands-on workshop exploring packet analysis and network security vulnerabilities using Wireshark." },
        { title: "Linux 101: Survival Skills for Open-Source Warriors", date: "Previous Semester", desc: "Practical workshop covering essential Linux command-line skills for cybersecurity and networking." },
        { title: "Mini CTF: Decode the Internet!", date: "Previous Semester", desc: "Capture the Flag competition with real-world cybersecurity challenges." },
        { title: "Open-Source Scavenger Hunt", date: "Previous Semester", desc: "Collaborative event exploring open-source tools and resources." },
        { title: "Amity Tech Spark (Hackathon)", date: "Previous Semester", desc: "Inter-college hackathon showcasing innovation and technical problem-solving." },
        { title: "Bid the Byte", date: "Previous Semester", desc: "A competitive bidding event focused on technical knowledge and strategy." },
      ],
      upcoming: [
        { title: "Cyber Bingo", date: "Upcoming", desc: "Interactive cybersecurity-themed bingo game to test your threat awareness." },
        { title: "NeuroCode: Brain-to-Logic Sprint", date: "Upcoming", desc: "Fast-paced coding challenge blending neuroscience and programming logic." },
        { title: "The Password Heist", date: "Upcoming", desc: "Workshop on password cracking techniques and defence strategies." },
        { title: "Catch the Phish", date: "Upcoming", desc: "Learn to identify and respond to phishing attacks in real-time simulations." },
        { title: "Ghost Signal: Train the Eye That Never Sleeps", date: "Upcoming", desc: "Network traffic analysis and anomaly detection challenge." },
        { title: "Campus Shark Tank", date: "Upcoming", desc: "Pitch your tech ideas to a panel of judges — innovation meets investment." },
        { title: "Find the Spy", date: "Upcoming", desc: "Social engineering awareness game that tests your ability to spot insider threats." },
        { title: "Scam Shark Tank", date: "Upcoming", desc: "Analyse and pitch against real-world scam scenarios to sharpen your security instincts." },
      ],
      extra: [
        { title: "Network Hacking Basics", date: "Lab Session", desc: "Introduction to network scanning and vulnerability assessment." },
        { title: "Firewall Configuration", date: "Lab Session", desc: "Setting up and managing enterprise firewalls." },
        { title: "Wireless Security", date: "Lab Session", desc: "WPA3, enterprise WiFi, and wireless penetration testing." },
      ],
    },
    leadership: [
      { id: "faculty", role: "Faculty Coordinator", name: "Dr. Ritu Gautam", message: "Dear Students,\n\nGreetings from Broadcast Storm – Networking Club!\n\nWelcome to Broadcast Storm, the cybersecurity and networking club of our college, built to promote innovation, collaboration, and continuous learning. Our aim is to provide students with opportunities to explore technology beyond academics through workshops, technical sessions, projects, and hands-on experiences. More than a club, Broadcast Storm is a community that encourages creativity, teamwork, leadership, and practical growth.\n\nTogether, let us learn, innovate, and build a stronger future through technology and excellence.\n\nBest regards,\nDr. Ritu Gautam", portrait: "/clubs/broadcast/portrait-01.png" },
      { id: "president", role: "Student President", name: "Japleen Kaur", message: "Greetings Everyone,\n\nWelcome to Broadcast Storm — the cybersecurity and networking club of our college. Our vision is to build a strong technical community that encourages learning, innovation, and practical growth beyond academics. As Student President, I aim to create opportunities through workshops, technical events, projects, and interactive experiences that help members build skills and confidence. I also hope to foster a supportive and collaborative environment where ideas are valued and everyone is motivated to grow together.\n\nI look forward to an exciting journey of learning, innovation, and achieving great things as a team.", portrait: "/clubs/broadcast/portrait-02.png", linkedinUrl: "https://www.linkedin.com/in/japleen-kaur-" },
      { id: "vpf", role: "Vice President (Female)", name: "Bhumi Daruka", portrait: "/clubs/broadcast/portrait-03.png", linkedinUrl: "https://www.linkedin.com/in/bhumi-daruka-" },
      { id: "vpm", role: "Vice President (Male)", name: "Mayank Kumar Choudhary", portrait: "/clubs/broadcast/portrait-04.png", linkedinUrl: "https://www.linkedin.com/in/mayank-choudhary-" },
      { id: "secretary", role: "Secretary", name: "Aadish Singh", linkedinUrl: "https://www.linkedin.com/in/aadish-singh-" },
    ],
    faqs: [
      { q: "Do I need prior networking knowledge?", a: "No. We start from OSI model basics and work up to advanced topics. Our curriculum is designed for all skill levels." },
      { q: "What certifications do you prepare for?", a: "We cover CCNA, CompTIA Network+, Security+, and CEH. Our lab equipment matches certification exam environments." },
      { q: "Is there a dedicated networking lab?", a: "Yes. We have a dedicated lab with Cisco routers, switches, and firewalls for hands-on practice." },
      { q: "How do I stay updated on club activities?", a: "Follow Broadcast Storm on Instagram and join our WhatsApp group. We post weekly lab schedules and workshop announcements." },
      { q: "Is there a cybersecurity track?", a: "Yes! We have a dedicated cybersecurity track covering penetration testing, CTF competitions, and security certifications." },
    ],
    hero: <></>,
    gallery: [
      { _id: "broadcast-gallery-1", title: "Broadcast Storm Event", year: "Previous Semester", photo: "/clubs/broadcast/events/event-01.jpg", gridClass: "md:col-span-8 md:row-span-2", order: 0 },
      { _id: "broadcast-gallery-2", title: "Workshop Session", year: "Previous Semester", photo: "/clubs/broadcast/events/event-02.png", gridClass: "md:col-span-4 md:row-span-1", order: 1 },
      { _id: "broadcast-gallery-3", title: "Technical Workshop", year: "Previous Semester", photo: "/clubs/broadcast/events/event-03.png", gridClass: "md:col-span-4 md:row-span-1", order: 2 },
      { _id: "broadcast-gallery-4", title: "CTF Competition", year: "Previous Semester", photo: "/clubs/broadcast/events/event-04.png", gridClass: "md:col-span-6 md:row-span-1", order: 3 },
      { _id: "broadcast-gallery-5", title: "Broadcast Storm Team", year: "Previous Semester", photo: "/clubs/broadcast/events/event-05.png", gridClass: "md:col-span-6 md:row-span-1", order: 4 },
    ],
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
    gallery: useFallback ? (fallback?.gallery || []) : (gallery?.map((g: any) => ({ ...g, desc: '' })) || []),
  };

  return <ClubPageTemplate data={data} />;
}
