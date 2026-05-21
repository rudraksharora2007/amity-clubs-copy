import { client } from './client';

export const queries = {
  homepageLeaders: `*[_type == "leader"] | order(order asc) {
    _id,
    name,
    role,
    description,
    portrait,
    twitterUrl,
    linkedinUrl,
    order
  }`,

  departments: `*[_type == "department"] | order(order asc) {
    _id,
    name,
    departmentId,
    departmentHead,
    coHeads,
    order
  }`,

  divisions: `*[_type == "division"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    subtitle,
    divisionId,
    coverImage,
    stats,
    order
  }`,

  events: `*[_type == "event"] | order(order asc) {
    _id,
    title,
    category,
    date,
    photo,
    gridClass,
    order
  }`,

  clubPageBySlug: `*[_type == "clubPage" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    tagline,
    instagramUrl,
    applyLabel,
    aboutHeadline,
    aboutBody1,
    aboutBody2,
    aboutStats
  }`,

  clubLeadersBySlug: `*[_type == "clubLeader" && references(*[_type == "clubPage" && slug.current == $slug][0]._id)] | order(order asc) {
    _id,
    role,
    name,
    message,
    portrait,
    twitterUrl,
    linkedinUrl,
    order
  }`,

  clubActivitiesBySlug: `*[_type == "clubActivity" && references(*[_type == "clubPage" && slug.current == $slug][0]._id)] | order(order asc) {
    _id,
    title,
    date,
    description,
    type,
    order
  }`,

  clubFaqsBySlug: `*[_type == "clubFaq" && references(*[_type == "clubPage" && slug.current == $slug][0]._id)] | order(order asc) {
    _id,
    question,
    answer,
    order
  }`,

  clubGalleryBySlug: `*[_type == "clubGalleryImage" && references(*[_type == "clubPage" && slug.current == $slug][0]._id)] | order(order asc) {
    _id,
    title,
    year,
    photo,
    gridClass,
    order
  }`,

  clubSlugs: `*[_type == "clubPage" && defined(slug.current)][].slug.current`,
};

async function safeFetch<T>(query: string, params?: Record<string, any>): Promise<T> {
  if (!client) return [] as T;
  return client.fetch(query, params);
}

export async function fetchHomepageLeaders() {
  return safeFetch(queries.homepageLeaders);
}

export async function fetchDepartments() {
  return safeFetch(queries.departments);
}

export async function fetchDivisions() {
  return safeFetch(queries.divisions);
}

export async function fetchEvents() {
  return safeFetch(queries.events);
}

export async function fetchClubPageData(slug: string) {
  if (!client) {
    return { page: null, leaders: [], activities: { past: [], upcoming: [], extra: [] }, faqs: [], gallery: [] };
  }

  const [page, leaders, activities, faqs, gallery] = await Promise.all([
    client.fetch(queries.clubPageBySlug, { slug }),
    client.fetch(queries.clubLeadersBySlug, { slug }),
    client.fetch(queries.clubActivitiesBySlug, { slug }),
    client.fetch(queries.clubFaqsBySlug, { slug }),
    client.fetch(queries.clubGalleryBySlug, { slug }),
  ]);

  return {
    page,
    leaders,
    activities: {
      past: activities.filter((a: { type: string }) => a.type === 'past'),
      upcoming: activities.filter((a: { type: string }) => a.type === 'upcoming'),
      extra: activities.filter((a: { type: string }) => a.type === 'extra'),
    },
    faqs,
    gallery,
  };
}

export async function fetchClubSlugs() {
  return safeFetch<string[]>(queries.clubSlugs);
}
