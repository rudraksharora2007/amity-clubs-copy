import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommitteeLeadership from '@/components/CommitteeLeadership';
import CommitteeDepartments from '@/components/CommitteeDepartments';
import {
  fetchCommitteeLeaders,
  fetchCommitteeSettings,
  fetchDepartments,
} from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';
import type { CommitteeSettings, SanityDepartment } from '@/lib/sanity/types';

type CommitteeHierarchyLeader = {
  name: string;
  role: string;
  bio: string;
  deptLabel: string;
  chipLabel: string;
  messageHeader: string;
  image?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
};

export const revalidate = 60;

const fallbackSettings: CommitteeSettings = {
  _id: 'fallback-committee-settings',
  heroEyebrow: 'Amity Institute of Information Technology',
  heroTitleLine1: 'AIIT',
  heroTitleLine2: 'STUDENT',
  heroTitleLine3: 'COMMITTEE',
  heroDescription:
    "The AIIT Student Committee is a structured student-led organization that promotes leadership, collaboration, and innovation while serving as a bridge between the institution and the student body.",
  officerCountLabel: '45+',
  purposeEyebrow: 'OUR PURPOSE',
  purposeTitle: 'Vision. Mission. Motto.',
  visionBody:
    'To build a strong student community that creates meaningful impact through leadership, innovation, and collaboration.',
  missionBody:
    'To empower students through opportunities, responsibility, and real-world experiences beyond academics.',
  mottoLine1: 'Learn Here.',
  mottoLine2: 'Lead Everywhere.',
  ctaTitle: 'Demand Excellence. Contact the Council.',
  ctaButtonLabel: 'Open Direct Inquiry',
};

const fallbackDepartments: SanityDepartment[] = [
  {
    _id: 'fallback-dept-1',
    name: 'Technical Operations',
    departmentId: '01',
    departmentHead: 'Department Head',
    headRole: 'Department Head',
    headMessage: 'Leads technical execution and cross-team coordination for student initiatives.',
    coHeads: ['Co-Head 1', 'Co-Head 2'],
    theme: 'blue',
    order: 0,
  },
];

const committeeLeadership: CommitteeHierarchyLeader[] = [
  {
    name: 'Prof. (Dr) Rekha Agarwal',
    role: 'Faculty Coordinator',
    bio: "Directing the strategic vision of AIIT's technical divisions with institutional excellence.",
    deptLabel: 'Director, AIIT / Amity University, Noida',
    chipLabel: 'Ph.D. Computer Science',
    messageHeader: 'Message from the Faculty Coordinator',
  },
  {
    name: 'Institutional Advisor 01',
    role: 'Strategic Advisor',
    bio: 'Providing industry-aligned guidance for large-scale technical operations.',
    deptLabel: 'Strategic Advisor / Amity University, Noida',
    chipLabel: 'Industry Guidance',
    messageHeader: 'Message from the Advisor',
  },
  {
    name: 'Institutional Advisor 02',
    role: 'Strategic Advisor',
    bio: 'Ensuring academic rigor and professional standards across all divisions.',
    deptLabel: 'Strategic Advisor / Amity University, Noida',
    chipLabel: 'Academic Rigor',
    messageHeader: 'Message from the Advisor',
  },
  {
    name: 'Mr. Priyaank Sinha',
    role: 'Student Chief Coordinator',
    bio: 'Overseeing execution of departments and student-led governance.',
    deptLabel: 'Student Chief Coordinator / Amity University, Noida',
    chipLabel: 'Student Leadership',
    messageHeader: 'Message from Student Chief Coordinator',
  },
  {
    name: 'Mr. Devansh',
    role: 'Student Co-Chief Coordinator',
    bio: 'Co-leading committee operations with technical and outreach focus.',
    deptLabel: 'Student Co-Chief Coordinator / Amity University, Noida',
    chipLabel: 'Technical Infrastructure',
    messageHeader: 'Message from Student Co-Chief Coordinator',
  },
];

function buildCommitteeLeadership(leadersData: Array<{
  name: string;
  role: string;
  bio: string;
  deptLabel?: string;
  chipLabel?: string;
  messageHeader?: string;
  portrait?: unknown;
  linkedinUrl?: string;
  twitterUrl?: string;
}>): CommitteeHierarchyLeader[] {
  const merged = [...committeeLeadership];

  leadersData.slice(0, 5).forEach((leader, index) => {
    merged[index] = {
      ...merged[index],
      name: leader.name || merged[index].name,
      role: leader.role || merged[index].role,
      bio: leader.bio || merged[index].bio,
      deptLabel: leader.deptLabel || merged[index].deptLabel,
      chipLabel: leader.chipLabel || merged[index].chipLabel,
      messageHeader: leader.messageHeader || merged[index].messageHeader,
      image: leader.portrait
        ? urlFor(leader.portrait)?.width(400).height(400).fit('crop').url()
        : undefined,
      linkedinUrl: leader.linkedinUrl,
      twitterUrl: leader.twitterUrl,
    };
  });

  return merged;
}

export default async function CommitteePage() {
  const [settingsData, departmentsData, committeeLeadersData] = await Promise.all([
    fetchCommitteeSettings(),
    fetchDepartments(),
    fetchCommitteeLeaders(),
  ]);

  const settings = settingsData ?? fallbackSettings;
  const departments = departmentsData.length > 0 ? departmentsData : fallbackDepartments;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-48 pb-40 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex items-center space-x-4 mb-8">
            <span className="w-12 h-[2px] bg-accent" />
            <span className="font-sans text-[10px] tracking-[0.5em] uppercase text-accent font-bold">
              {settings.heroEyebrow}
            </span>
          </div>

          <h1 className="font-sans font-black text-6xl md:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9] mb-8">
            {settings.heroTitleLine1} <br />
            <span className="text-accent">{settings.heroTitleLine2}</span> <br />
            {settings.heroTitleLine3}
          </h1>

          <div className="w-full md:w-3/4 h-[1px] bg-white/20 my-8" />

          <p className="font-sans text-sm md:text-base text-white/80 max-w-3xl leading-[1.8] mb-10">
            {settings.heroDescription}
          </p>

          <div className="flex space-x-12">
            <div>
              <span className="block font-serif text-4xl text-accent font-bold">{departments.length}</span>
              <span className="font-sans text-[9px] uppercase tracking-widest text-white/40 font-bold">Departments</span>
            </div>
            <div>
              <span className="block font-serif text-4xl text-accent font-bold">{settings.officerCountLabel}</span>
              <span className="font-sans text-[9px] uppercase tracking-widest text-white/40 font-bold">Officers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative z-20 border-t border-rule">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="sec-head mb-20 text-center">
            <div className="sec-eyebrow">{settings.purposeEyebrow}</div>
            <h2 className="sec-title text-4xl md:text-5xl font-serif mt-4">{settings.purposeTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-stretch">
            <div className="flex flex-col items-center text-center px-8 md:border-r border-gray-100">
              <h3 className="font-sans text-xs uppercase tracking-widest text-primary font-bold mb-4">VISION</h3>
              <p className="font-sans text-xs text-primary/70 leading-[1.8] max-w-xs">{settings.visionBody}</p>
            </div>

            <div className="flex flex-col items-center text-center px-8 md:border-r border-gray-100">
              <h3 className="font-sans text-xs uppercase tracking-widest text-primary font-bold mb-4">MISSION</h3>
              <p className="font-sans text-xs text-primary/70 leading-[1.8] max-w-xs">{settings.missionBody}</p>
            </div>

            <div className="flex flex-col items-center text-center px-8">
              <h3 className="font-sans text-xs uppercase tracking-widest text-primary font-bold mb-4">MOTTO</h3>
              <div className="font-serif text-lg md:text-xl text-primary leading-relaxed italic mt-4">
                <div className="font-medium">{settings.mottoLine1}</div>
                <div className="font-medium mt-1">{settings.mottoLine2}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CommitteeLeadership coreLeadership={buildCommitteeLeadership(committeeLeadersData)} />

      <CommitteeDepartments departments={departments} />

      <section className="bg-white py-20 relative overflow-hidden border-t border-rule">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10 flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-8 leading-tight tracking-tight">
            {settings.ctaTitle}
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center space-x-4 px-10 py-4 bg-primary text-white font-sans text-xs uppercase tracking-widest font-bold hover:bg-accent hover:text-primary transition-all duration-300"
          >
            <span>{settings.ctaButtonLabel}</span>
            <span>&rarr;</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
