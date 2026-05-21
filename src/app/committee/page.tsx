import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchDepartments } from "@/lib/sanity/queries";
import CommitteeLeadership from "@/components/CommitteeLeadership";
import CommitteeDepartments from "@/components/CommitteeDepartments";

export const revalidate = 60;

const fallbackDepartments = [
  { _id: 'fb-01', name: "Technical Operations", departmentId: "01", departmentHead: "Alex Rivera", coHeads: ["Jordan Smith", "Sam Chen"], order: 0 },
  { _id: 'fb-02', name: "Corporate Relations", departmentId: "02", departmentHead: "Sarah Jenkins", coHeads: ["Mike Ross"], order: 1 },
  { _id: 'fb-03', name: "Marketing & PR", departmentId: "03", departmentHead: "Emily Blunt", coHeads: ["Chris Evans"], order: 2 },
  { _id: 'fb-04', name: "Logistics", departmentId: "04", departmentHead: "David Gandy", coHeads: ["Bella Hadid", "Gigi V."], order: 3 },
  { _id: 'fb-05', name: "R&D", departmentId: "05", departmentHead: "Tony Stark", coHeads: ["Bruce B."], order: 4 },
  { _id: 'fb-06', name: "Finance", departmentId: "06", departmentHead: "Warren B.", coHeads: ["Elon M."], order: 5 },
  { _id: 'fb-07', name: "Digital Media", departmentId: "07", departmentHead: "Casey N.", coHeads: ["Peter M."], order: 6 },
  { _id: 'fb-08', name: "Student Welfare", departmentId: "08", departmentHead: "Malala Y.", coHeads: ["Greta T."], order: 7 },
  { _id: 'fb-09', name: "Creative Design", departmentId: "09", departmentHead: "Virgil A.", coHeads: ["Dieter R."], order: 8 },
  { _id: 'fb-10', name: "Security", departmentId: "10", departmentHead: "Kevin M.", coHeads: ["Edward S."], order: 9 },
  { _id: 'fb-11', name: "Quality Assurance", departmentId: "11", departmentHead: "Steve J.", coHeads: ["Tim C."], order: 10 },
];

const CommitteePage = async () => {
  const departments = await fetchDepartments() as any[];
  const deptData = departments.length > 0 ? departments : fallbackDepartments;

  const coreLeadership = [
    {
      name: "Prof. (Dr) Rekha Agarwal",
      role: "Faculty Coordinator",
      bio: "Directing the strategic vision of AIIT's technical divisions with over two decades of institutional excellence.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Institutional Advisor 01",
      role: "Strategic Advisor",
      bio: "Providing industry-aligned guidance for large-scale technical operations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Institutional Advisor 02",
      role: "Strategic Advisor",
      bio: "Ensuring academic rigor and professional standards across all divisions.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Mr. Priyaank Sinha",
      role: "Student Chief Coordinator",
      bio: "Overseeing the execution of 11+ departments and ensuring flawless student-led governance.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Mr. Devansh",
      role: "Student Co-Chief Coordinator",
      bio: "Co-piloting the committee operations with a focus on technical infrastructure and outreach.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-48 pb-40 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex items-center space-x-4 mb-10">
            <span className="w-16 h-[2px] bg-accent" />
            <span className="font-sans text-[10px] tracking-[0.5em] uppercase text-accent font-bold">The Council of Architects</span>
          </div>

          <h1 className="font-serif text-7xl md:text-9xl text-white tracking-tighter leading-[0.85] mb-12">
            Council of <br />
            <span className="text-accent italic">Architects.</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 pt-12 border-t border-white/10">
            <p className="font-sans text-sm md:text-base text-white/50 max-w-xl leading-[1.8]">
              Operational excellence is not an act, but a habit. The AIIT Student Committee enforces rigorous technical governance through a multi-tiered command structure.
            </p>
            <div className="flex space-x-12">
              <div>
                <span className="block font-serif text-4xl text-accent">{deptData.length}</span>
                <span className="font-sans text-[9px] uppercase tracking-widest text-white/40">Departments</span>
              </div>
              <div>
                <span className="block font-serif text-4xl text-accent">45+</span>
                <span className="font-sans text-[9px] uppercase tracking-widest text-white/40">Officers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CommitteeLeadership coreLeadership={coreLeadership} />

      <CommitteeDepartments departments={deptData} />

      <section className="bg-white py-20 relative overflow-hidden border-t border-rule">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10 flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-8 leading-tight tracking-tight">
            Demand <span className="italic text-accent">Excellence.</span> <br />
            Contact the Council.
          </h2>
          <a
            href="/reach-out"
            className="inline-flex items-center space-x-4 px-10 py-4 bg-primary text-white font-sans text-xs uppercase tracking-widest font-bold hover:bg-accent hover:text-primary transition-all duration-300 shadow-lg"
          >
            <span>Open Direct Inquiry</span>
            <span>&rarr;</span>
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CommitteePage;
