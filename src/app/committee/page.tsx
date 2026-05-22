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

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-20">
            <div className="flex items-center space-x-4 mb-8">
              <span className="w-12 h-[2px] bg-accent" />
              <span className="font-sans text-[10px] tracking-[0.5em] uppercase text-accent font-bold">Amity Institute of Information Technology</span>
            </div>

            <h1 className="font-sans font-black text-6xl md:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9] mb-8">
              AIIT <br />
              <span className="text-accent">STUDENT</span> <br />
              COMMITTEE
            </h1>

            <div className="w-full md:w-3/4 h-[1px] bg-white/20 my-8" />

            <p className="font-sans text-sm md:text-base text-white/80 max-w-xl leading-[1.8] mb-10">
              The AIIT Student Committee is a structured student-led organization that promotes leadership, collaboration, and innovation while serving as a bridge between the institution and the student body through events, initiatives, and opportunities that contribute to students' overall growth and development.
            </p>

            <div className="flex space-x-12">
              <div>
                <span className="block font-serif text-4xl text-accent font-bold">{deptData.length}</span>
                <span className="font-sans text-[9px] uppercase tracking-widest text-white/40 font-bold">Departments</span>
              </div>
              <div>
                <span className="block font-serif text-4xl text-accent font-bold">45+</span>
                <span className="font-sans text-[9px] uppercase tracking-widest text-white/40 font-bold">Officers</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end z-10 w-full h-[280px] sm:h-[350px] md:h-[450px]">
            <svg
              viewBox="0 0 800 500"
              className="w-full h-full text-white/20 stroke-current fill-none"
              style={{ strokeWidth: '1.3px', strokeLinecap: 'round', strokeLinejoin: 'round' }}
            >
              {/* Subtly glowing grid pattern */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Accent lines representing architectural blueprint guide lines */}
              <g opacity="0.35" stroke="#FFC000" strokeDasharray="3 6" strokeWidth="0.8">
                <line x1="180" y1="40" x2="180" y2="460" />
                <line x1="380" y1="40" x2="380" y2="460" />
                <line x1="520" y1="40" x2="520" y2="460" />
                <line x1="720" y1="40" x2="720" y2="460" />
                <line x1="30" y1="200" x2="770" y2="200" />
              </g>

              {/* Architectural Text & Annotations */}
              <g fill="rgba(255, 255, 255, 0.25)" className="font-mono text-[9px] select-none">
                <text x="40" y="50">FACADE ELEVATION // SE-04</text>
                <text x="40" y="65">SCALE: 1:75</text>
                <text x="40" y="80">AIIT ARCHITECTS CO.</text>
                <text x="700" y="50">GRID-LINE A</text>
                <text x="700" y="65">EL. +24.500m</text>
              </g>

              {/* Ground Line */}
              <line x1="30" y1="420" x2="770" y2="420" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
              <line x1="30" y1="425" x2="770" y2="425" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

              {/* Main Left Building Block (Tall Concrete Block) */}
              {/* Back/Left side */}
              <path d="M180,360 L180,120 L280,150 L280,390 Z" stroke="rgba(255,255,255,0.4)" />
              {/* Front/Right side */}
              <path d="M280,150 L380,120 L380,360 L280,390 Z" stroke="rgba(255,255,255,0.4)" />
              {/* Top roof lines */}
              <path d="M180,120 L220,100 L320,130 L280,150 Z" stroke="rgba(255,255,255,0.3)" />

              {/* Windows in Left Block */}
              <path d="M200,160 L200,320 M220,166 L220,326 M240,172 L240,332 M260,178 L260,338" stroke="rgba(255,255,255,0.15)" />
              <path d="M295,145 L295,355 M315,139 L315,349 M335,133 L335,343 M355,127 L355,337" stroke="rgba(255,255,255,0.15)" />
              {/* Horizontal window divider lines */}
              <path d="M200,200 L260,218 M200,250 L260,268 M200,300 L260,318" stroke="rgba(255,255,255,0.2)" />
              <path d="M295,195 L355,177 M295,245 L355,227 M295,295 L355,277" stroke="rgba(255,255,255,0.2)" />

              {/* Main Central Glass Pavilion */}
              <path d="M380,360 L380,190 L520,220 L520,390 Z" stroke="rgba(255,255,255,0.5)" />
              {/* Glass panels divisions */}
              <line x1="415" y1="197" x2="415" y2="367" stroke="rgba(96, 165, 250, 0.4)" />
              <line x1="450" y1="205" x2="450" y2="375" stroke="rgba(96, 165, 250, 0.4)" />
              <line x1="485" y1="212" x2="485" y2="382" stroke="rgba(96, 165, 250, 0.4)" />
              
              {/* Horizontal frames for glass panels */}
              <path d="M380,240 L520,270 M380,290 L520,320 M380,340 L520,370" stroke="rgba(255,255,255,0.25)" />

              {/* Floating Cantilever Frame (Right Block) */}
              {/* Outer Frame */}
              <path d="M480,180 L720,120 L720,300 L480,360 Z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" />
              {/* Inner Frame thickness */}
              <path d="M495,190 L705,137 L705,287 L495,340 Z" stroke="rgba(255,255,255,0.3)" />
              {/* Connecting depth lines between inner and outer */}
              <path d="M480,180 L495,190 M720,120 L705,137 M720,300 L705,287 M480,360 L495,340" stroke="rgba(255,255,255,0.3)" />

              {/* Large Glass wall inside the cantilever frame */}
              <path d="M510,320 L690,275 L690,155 L510,200 Z" stroke="rgba(96,165,250,0.5)" />
              {/* Vertical grids for cantilever windows */}
              <path d="M546,200 L546,311 M582,191 L582,302 M618,182 L618,293 M654,173 L654,284" stroke="rgba(96,165,250,0.2)" />
              {/* Horizontal grids */}
              <path d="M510,240 L690,195 M510,280 L690,235" stroke="rgba(96,165,250,0.2)" />

              {/* Pillars Supporting the Cantilever */}
              <line x1="560" y1="340" x2="560" y2="420" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
              <line x1="660" y1="315" x2="660" y2="420" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
              {/* Shadow/Base for pillars */}
              <ellipse cx="560" cy="420" rx="6" ry="2" stroke="rgba(255,255,255,0.2)" />
              <ellipse cx="660" cy="420" rx="6" ry="2" stroke="rgba(255,255,255,0.2)" />

              {/* Wide Concrete Stairs in the Foreground */}
              {/* Step 1 (Top) */}
              <path d="M330,390 L380,375 L460,395 L410,410 Z" fill="none" stroke="rgba(255,255,255,0.4)" />
              {/* Step 1 Risers */}
              <path d="M330,390 L330,395 M410,410 L410,415 M460,395 L460,400" stroke="rgba(255,255,255,0.4)" />
              {/* Step 2 */}
              <path d="M320,395 L375,379 L465,401 L400,417 Z" fill="none" stroke="rgba(255,255,255,0.4)" />
              <path d="M320,395 L320,400 M400,417 L400,422 M465,401 L465,406" stroke="rgba(255,255,255,0.4)" />
              {/* Step 3 (Bottom) */}
              <path d="M310,400 L370,383 L470,407 L390,424 Z" fill="none" stroke="rgba(255,255,255,0.5)" />
              <path d="M310,400 L310,405 M390,424 L390,429 M470,407 L470,412" stroke="rgba(255,255,255,0.5)" />

              {/* Right entrance steps */}
              <path d="M520,390 L520,420 M550,380 L550,420" stroke="rgba(255,255,255,0.3)" />

              {/* Stylized Outline Trees */}
              {/* Tree 1 (Left of building) */}
              <path d="M120,420 L120,340 M115,350 L125,350" stroke="rgba(255,255,255,0.4)" />
              {/* Foliage outline made of geometric paths */}
              <path d="M120,290 C100,290 85,305 85,325 C85,345 100,360 120,360 C140,360 155,345 155,325 C155,305 140,290 120,290 Z" stroke="rgba(96,165,250,0.4)" />
              <path d="M100,325 L140,325 M120,305 L120,345" stroke="rgba(96,165,250,0.2)" strokeDasharray="2 2" />

              {/* Tree 2 (Small one on right) */}
              <path d="M740,420 L740,370" stroke="rgba(255,255,255,0.3)" />
              <circle cx="740" cy="355" r="20" stroke="rgba(96,165,250,0.3)" />

              {/* Architectural Dimension Lines & Symbols */}
              <g opacity="0.3" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8">
                {/* Left vertical dimension line */}
                <line x1="60" y1="100" x2="60" y2="410" />
                <line x1="55" y1="100" x2="65" y2="100" />
                <line x1="55" y1="260" x2="65" y2="260" />
                <line x1="55" y1="410" x2="65" y2="410" />
                {/* Tick marks */}
                <line x1="57" y1="103" x2="63" y2="97" strokeWidth="1.2" />
                <line x1="57" y1="263" x2="63" y2="257" strokeWidth="1.2" />
                <line x1="57" y1="413" x2="63" y2="407" strokeWidth="1.2" />
              </g>
              <text x="45" y="255" transform="rotate(-90 45 255)" fill="rgba(255, 255, 255, 0.2)" className="font-mono text-[8px]">12.45m</text>

            </svg>
          </div>
        </div>
      </section>

      {/* Purpose Section: Vision, Mission, Motto */}
      <section className="py-24 bg-white relative z-20 border-t border-rule">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="sec-head mb-20 text-center">
            <div className="sec-eyebrow">OUR PURPOSE</div>
            <h2 className="sec-title text-4xl md:text-5xl font-serif mt-4">
              Vision. Mission. Motto.
            </h2>
          </div>

          {/* Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-stretch">
            
            {/* VISION Column */}
            <div className="flex flex-col items-center text-center px-8 md:border-r border-gray-100">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 border-2 border-accent shadow-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-primary font-bold mb-4">VISION</h3>
              <p className="font-sans text-xs text-primary/70 leading-[1.8] max-w-xs">
                To build a strong student community that creates meaningful impact in the world through leadership, innovation, and collaboration.
              </p>
            </div>

            {/* MISSION Column */}
            <div className="flex flex-col items-center text-center px-8 md:border-r border-gray-100">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 border-2 border-accent shadow-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-primary font-bold mb-4">MISSION</h3>
              <p className="font-sans text-xs text-primary/70 leading-[1.8] max-w-xs">
                To empower students through opportunities, responsibility, and real-world experiences that foster leadership, collaboration, innovation, and overall growth beyond academics.
              </p>
            </div>

            {/* MOTTO Column */}
            <div className="flex flex-col items-center text-center px-8">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 border-2 border-accent shadow-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9" />
                </svg>
              </div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-primary font-bold mb-4">MOTTO</h3>
              <div className="font-serif text-lg md:text-xl text-primary leading-relaxed italic mt-4">
                <div className="font-medium">Learn Here.</div>
                <div className="font-medium mt-1">Lead Everywhere.</div>
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
