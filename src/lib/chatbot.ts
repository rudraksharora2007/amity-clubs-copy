export interface FaqItem {
  _id: string;
  question: string;
  answer: string;
  keywords: string[];
  category: string;
  order: number;
  clubName?: string;
  clubSlug?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might',
  'can', 'shall', 'have', 'has', 'had', 'of', 'in', 'on', 'at', 'to',
  'for', 'with', 'by', 'from', 'up', 'about', 'into', 'through', 'during',
  'before', 'after', 'above', 'below', 'between', 'under', 'again', 'further',
  'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all',
  'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor',
  'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 'just',
  'because', 'but', 'and', 'or', 'if', 'while', 'what', 'which', 'who',
  'whom', 'this', 'that', 'these', 'those', 'am', 'it', 'its', 'i', 'me',
  'my', 'we', 'our', 'you', 'your', 'he', 'him', 'his', 'she', 'her',
  'they', 'them', 'their',
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter((word) => word.length > 1 && !STOP_WORDS.has(word));
}

function scoreFaq(input: string, faq: FaqItem): number {
  const inputTokens = tokenize(input);
  if (inputTokens.length === 0) return 0;

  let score = 0;
  const questionTokens = tokenize(faq.question);

  for (const token of inputTokens) {
    for (const keyword of faq.keywords) {
      const kw = keyword.toLowerCase();
      if (kw === token) {
        score += 3;
      } else if (kw.includes(token) || token.includes(kw)) {
        score += 2;
      }
    }

    for (const qToken of questionTokens) {
      if (qToken === token) {
        score += 1;
      } else if (qToken.includes(token) || token.includes(qToken)) {
        score += 0.5;
      }
    }
  }

  const categoryMap: Record<string, string[]> = {
    applications: ['apply', 'join', 'admission', 'register', 'signup', 'enroll', 'get', 'into', 'selection', 'interview'],
    committee: ['committee', 'council', 'coordinator', 'director', 'leader', 'head', 'department', 'team', 'who'],
    clubs: ['club', 'division', 'cascade', 'programming', 'networking', 'technical', 'society'],
    events: ['event', 'hackathon', 'workshop', 'bootcamp', 'competition', 'contest', 'when', 'date', 'schedule'],
    contact: ['contact', 'reach', 'email', 'phone', 'call', 'message', 'talk', 'connect', 'sponsor'],
    general: ['what', 'how', 'why', 'where', 'can', 'do', 'does'],
  };

  const faqCategory = faq.category as string;
  const categoryKeywords = categoryMap[faqCategory] || [];
  for (const token of inputTokens) {
    if (categoryKeywords.includes(token)) {
      score += 1;
    }
  }

  return score;
}

export function findBestMatch(input: string, faqs: FaqItem[], threshold = 3): FaqItem | null {
  if (!faqs.length || !input.trim()) return null;

  let bestFaq: FaqItem | null = null;
  let bestScore = 0;

  for (const faq of faqs) {
    const score = scoreFaq(input, faq);
    if (score > bestScore) {
      bestScore = score;
      bestFaq = faq;
    }
  }

  return bestScore >= threshold ? bestFaq : null;
}

export function getSuggestions(): string[] {
  return [
    'How do I apply?',
    'What clubs are there?',
    'Who is on the committee?',
    'When are events?',
    'How can I contact you?',
  ];
}

export function getFallbackResponse(): string {
  return "I'm not sure about that. Try rephrasing your question, or you can [reach out directly](/contact) and the team will get back to you.";
}

export const fallbackFaqs: FaqItem[] = [
  {
    _id: 'fallback-apply',
    question: 'How do I apply for a Core Technical Division?',
    answer: 'Applications for the Core Technical Divisions (Cascade, Programming, Networking) open at the start of each academic semester. Students must submit their technical portfolio followed by a two-stage interview process consisting of a technical assessment and a peer-review panel.',
    keywords: ['apply', 'join', 'signup', 'registration', 'admission', 'how to apply', 'get in'],
    category: 'applications',
    order: 0,
  },
  {
    _id: 'fallback-clubs',
    question: 'What clubs are there at AIIT?',
    answer: 'AIIT has three core technical divisions: Cascade (Full-Stack Engineering), Programming Club (Algorithmic Logic & Competitive Coding), and Networking Club (Infrastructure & Security). Each division focuses on a different area of technical excellence.',
    keywords: ['clubs', 'divisions', 'cascade', 'programming', 'networking', 'what clubs', 'technical', 'societies'],
    category: 'clubs',
    order: 1,
  },
  {
    _id: 'fallback-committee',
    question: 'Who is on the Student Committee?',
    answer: 'The Student Committee is led by Prof. (Dr) Rekha Agarwal (Faculty Coordinator), Mr. Priyaank Sinha (Student Chief Coordinator), and Mr. Devansh (Student Co-Chief Coordinator). The committee oversees 11+ departments including Technical Operations, Corporate Relations, Marketing & PR, and more.',
    keywords: ['committee', 'council', 'coordinator', 'director', 'leader', 'who', 'team', 'student committee', 'faculty'],
    category: 'committee',
    order: 2,
  },
  {
    _id: 'fallback-events',
    question: 'When are the events and hackathons?',
    answer: 'Events are scheduled throughout the academic year. Flagship events include the Annual Hackathon, AI & Machine Learning Workshops, Cybersecurity Bootcamps, and Algorithmic Coding Challenges. Check the homepage events section or follow our social media for upcoming dates.',
    keywords: ['events', 'hackathon', 'workshop', 'bootcamp', 'competition', 'when', 'date', 'schedule', 'upcoming', 'calendar'],
    category: 'events',
    order: 3,
  },
  {
    _id: 'fallback-contact',
    question: 'How can I contact the committee?',
    answer: 'You can reach out via email at aiitclubs@amity.edu, visit us at Amity University Sector 125 Noida, or connect through our social media channels (Instagram, LinkedIn, X, YouTube). For sponsorship inquiries, contact the Student Committee\'s Outreach wing directly.',
    keywords: ['contact', 'reach', 'email', 'phone', 'call', 'message', 'talk', 'connect', 'sponsor', 'how to contact'],
    category: 'contact',
    order: 4,
  },
];
