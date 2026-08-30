import { cache } from 'react'
import type { PortableTextBlock } from '@portabletext/react'
import type { SanityImageSource } from '@sanity/image-url'

import { sanityFetch } from './live'

export type RichTextValue = PortableTextBlock[]

export interface SocialLinkData {
  platform?: string
  url?: string
}

export interface SiteSettings {
  title?: string
  description?: string
  address?: string
  email?: string
  whatsapp?: string
  socialLinks?: SocialLinkData[]
  googleCalendarId?: string
}

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{ title, description, address, email, whatsapp, socialLinks, googleCalendarId }`

export const getSiteSettings = cache(async (): Promise<SiteSettings | null> => {
  const { data } = await sanityFetch({ query: SITE_SETTINGS_QUERY })
  return data as SiteSettings | null
})

export interface RouteCardData {
  badgeLabel?: string
  title?: string
  text?: string
  ctaLabel?: string
  image?: SanityImageSource
  photoLabel?: string
}

export interface StatItemData {
  value?: string
  label?: string
}

export interface HomeBaseData {
  eyebrow?: string
  heading?: string
  intro?: RichTextValue
  heroImage?: SanityImageSource
  heroImageCaption?: string
  heroIndicator?: string
  stats?: StatItemData[]
  testimonialsEyebrow?: string
  agendaEyebrow?: string
  agendaLinkLabel?: string
  closingHeading?: string
  closingText?: RichTextValue
}

export interface HomeData extends HomeBaseData {
  routeCardFerrol?: RouteCardData
  routeCardIrse?: RouteCardData
  routeCardEn?: RouteCardData
}

export interface TestimonialData {
  quote?: RichTextValue
  name?: string
  originCity?: string
  destinationCity?: string
  program?: string
  year?: number
  photo?: SanityImageSource
}

export interface EventSummary {
  title?: string
  dateTime?: string
  location?: string
  description?: string
}

export interface HomePageData {
  home: HomeData | null
  testimonialLarge: TestimonialData | null
  testimonialMedium: TestimonialData | null
}

const HOME_QUERY = `{
  "home": *[_type == "home"][0]{
    eyebrow,
    heading,
    intro,
    heroImage,
    heroImageCaption,
    heroIndicator,
    routeCardFerrol{ badgeLabel, title, text, ctaLabel, image, photoLabel },
    routeCardIrse{ badgeLabel, title, text, ctaLabel, image, photoLabel },
    routeCardEn{ badgeLabel, title, text, ctaLabel, image, photoLabel },
    stats,
    testimonialsEyebrow,
    agendaEyebrow,
    agendaLinkLabel,
    closingHeading,
    closingText
  },
  "testimonialLarge": *[_type == "testimonial" && displaySize == "grande" && (!defined(language) || language == "es")] | order(_createdAt asc)[0]{
    quote, name, originCity, destinationCity, program, year, photo
  },
  "testimonialMedium": *[_type == "testimonial" && displaySize == "mediano" && (!defined(language) || language == "es")] | order(_createdAt asc)[0]{
    quote, name, originCity, destinationCity, program, year, photo
  }
}`

export const getHomePageData = cache(async (): Promise<HomePageData> => {
  const { data } = await sanityFetch({ query: HOME_QUERY })
  return data as HomePageData
})

export interface HomeEnData extends HomeBaseData {
  routeCardFerrol?: RouteCardData
  routeCardVolunteering?: RouteCardData
  routeCardAbout?: RouteCardData
}

export interface HomeEnPageData {
  home: HomeEnData | null
  testimonialLarge: TestimonialData | null
  testimonialMedium: TestimonialData | null
}

const HOME_EN_QUERY = `{
  "home": *[_type == "homeEn"][0]{
    eyebrow,
    heading,
    intro,
    heroImage,
    heroImageCaption,
    heroIndicator,
    routeCardFerrol{ badgeLabel, title, text, ctaLabel, image, photoLabel },
    routeCardVolunteering{ badgeLabel, title, text, ctaLabel, image, photoLabel },
    routeCardAbout{ badgeLabel, title, text, ctaLabel, image, photoLabel },
    stats,
    testimonialsEyebrow,
    agendaEyebrow,
    agendaLinkLabel,
    closingHeading,
    closingText
  },
  "testimonialLarge": *[_type == "testimonial" && displaySize == "grande" && language == "en"] | order(_createdAt asc)[0]{
    quote, name, originCity, destinationCity, program, year, photo
  },
  "testimonialMedium": *[_type == "testimonial" && displaySize == "mediano" && language == "en"] | order(_createdAt asc)[0]{
    quote, name, originCity, destinationCity, program, year, photo
  }
}`

export const getHomeEnPageData = cache(async (): Promise<HomeEnPageData> => {
  const { data } = await sanityFetch({ query: HOME_EN_QUERY })
  return data as HomeEnPageData
})

export interface SectionIntroData {
  eyebrow?: string
  heading?: string
}

export interface FixedProgramData {
  name?: string
  schedule?: string
  description?: string
}

export interface FaqData {
  question?: string
  answer?: RichTextValue
}

export interface PageFerrolData {
  heroEyebrow?: string
  heroHeading?: string
  heroText?: RichTextValue
  heroImage?: SanityImageSource
  heroImageCaption?: string
  heroCtaPrimaryLabel?: string
  heroCtaPrimaryHref?: string
  heroCtaSecondaryLabel?: string
  heroCtaSecondaryHref?: string
  fixedProgramsIntro?: SectionIntroData
  agendaIntro?: SectionIntroData
  arrivalHeading?: string
  arrivalMapEmbedUrl?: string
  arrivalAddressText?: RichTextValue
  arrivalTransportText?: RichTextValue
  faqIntro?: SectionIntroData
  closingHeading?: string
  closingText?: RichTextValue
}

export interface FerrolPageData {
  page: PageFerrolData | null
  fixedPrograms: FixedProgramData[]
  faqs: FaqData[]
}

const FERROL_QUERY = `{
  "page": *[_type == "pageFerrol"][0]{
    heroEyebrow,
    heroHeading,
    heroText,
    heroImage,
    heroImageCaption,
    heroCtaPrimaryLabel,
    heroCtaPrimaryHref,
    heroCtaSecondaryLabel,
    heroCtaSecondaryHref,
    fixedProgramsIntro,
    agendaIntro,
    arrivalHeading,
    arrivalMapEmbedUrl,
    arrivalAddressText,
    arrivalTransportText,
    faqIntro,
    closingHeading,
    closingText
  },
  "fixedPrograms": *[_type == "fixedProgram" && route == "ferrol" && (!defined(language) || language == "es")] | order(_createdAt asc){
    name, schedule, description
  },
  "faqs": *[_type == "faq" && route == "ferrol" && (!defined(language) || language == "es")] | order(order asc){
    question, answer
  }
}`

export const getFerrolPageData = cache(async (): Promise<FerrolPageData> => {
  const { data } = await sanityFetch({ query: FERROL_QUERY })
  return data as FerrolPageData
})

const FERROL_EN_QUERY = `{
  "page": *[_type == "pageFerrolEn"][0]{
    heroEyebrow,
    heroHeading,
    heroText,
    heroImage,
    heroImageCaption,
    heroCtaPrimaryLabel,
    heroCtaPrimaryHref,
    heroCtaSecondaryLabel,
    heroCtaSecondaryHref,
    fixedProgramsIntro,
    agendaIntro,
    arrivalHeading,
    arrivalMapEmbedUrl,
    arrivalAddressText,
    arrivalTransportText,
    faqIntro,
    closingHeading,
    closingText
  },
  "fixedPrograms": *[_type == "fixedProgram" && route == "ferrol" && language == "en"] | order(_createdAt asc){
    name, schedule, description
  },
  "faqs": *[_type == "faq" && route == "ferrol" && language == "en"] | order(order asc){
    question, answer
  }
}`

export const getFerrolEnPageData = cache(async (): Promise<FerrolPageData> => {
  const { data } = await sanityFetch({ query: FERROL_EN_QUERY })
  return data as FerrolPageData
})

export interface MobilityProgramData {
  name?: string
  duration?: string
  idealFor?: string
  covers?: string
  ctaLabel?: string
  ctaUrl?: string
}

export interface PageIrseData {
  heroEyebrow?: string
  heroHeading?: string
  heroText?: RichTextValue
  heroImage?: SanityImageSource
  heroImageCaption?: string
  heroCtaPrimaryLabel?: string
  heroCtaPrimaryHref?: string
  heroCtaSecondaryLabel?: string
  heroCtaSecondaryHref?: string
  programsIntro?: SectionIntroData
  opportunitiesIntro?: SectionIntroData
  opportunitiesFeedUrl?: string
  faqIntro?: SectionIntroData
  closingHeading?: string
  closingText?: RichTextValue
  closingCtaPrimaryHref?: string
}

export interface IrsePageData {
  page: PageIrseData | null
  mobilityPrograms: MobilityProgramData[]
  faqs: FaqData[]
}

const IRSE_QUERY = `{
  "page": *[_type == "pageIrse"][0]{
    heroEyebrow,
    heroHeading,
    heroText,
    heroImage,
    heroImageCaption,
    heroCtaPrimaryLabel,
    heroCtaPrimaryHref,
    heroCtaSecondaryLabel,
    heroCtaSecondaryHref,
    programsIntro,
    opportunitiesIntro,
    opportunitiesFeedUrl,
    faqIntro,
    closingHeading,
    closingText,
    closingCtaPrimaryHref
  },
  "mobilityPrograms": *[_type == "mobilityProgram" && route == "irse"] | order(_createdAt asc){
    name, duration, idealFor, covers, ctaLabel, ctaUrl
  },
  "faqs": *[_type == "faq" && route == "irse"] | order(order asc){
    question, answer
  }
}`

export const getIrsePageData = cache(async (): Promise<IrsePageData> => {
  const { data } = await sanityFetch({ query: IRSE_QUERY })
  return data as IrsePageData
})

export interface LifeInFerrolPhotoData {
  image?: SanityImageSource
  caption?: string
  description?: string
}

export interface InfoColumnData {
  heading?: string
  text?: string
}

export interface ProcessStepData {
  title?: string
  description?: string
}

export interface PageEnData {
  heroEyebrow?: string
  heroHeading?: string
  heroText?: RichTextValue
  heroImage?: SanityImageSource
  heroImageCaption?: string
  heroCtaPrimaryLabel?: string
  heroCtaPrimaryHref?: string
  heroCtaSecondaryLabel?: string
  heroCtaSecondaryHref?: string
  lifeInFerrolIntro?: SectionIntroData
  lifeInFerrolPhotos?: LifeInFerrolPhotoData[]
  whatYouCanDoIntro?: SectionIntroData
  practicalInfoGettingHere?: InfoColumnData
  practicalInfoHousing?: InfoColumnData
  practicalInfoLanguage?: InfoColumnData
  voicesIntro?: SectionIntroData
  howToApplyIntro?: SectionIntroData
  howToApplySteps?: ProcessStepData[]
  faqIntro?: SectionIntroData
  closingHeading?: string
  closingText?: RichTextValue
  closingCtaPrimaryHref?: string
}

export interface EnPageData {
  page: PageEnData | null
  mobilityPrograms: MobilityProgramData[]
  testimonials: TestimonialData[]
  faqs: FaqData[]
}

const EN_QUERY = `{
  "page": *[_type == "pageEn"][0]{
    heroEyebrow,
    heroHeading,
    heroText,
    heroImage,
    heroImageCaption,
    heroCtaPrimaryLabel,
    heroCtaPrimaryHref,
    heroCtaSecondaryLabel,
    heroCtaSecondaryHref,
    lifeInFerrolIntro,
    lifeInFerrolPhotos,
    whatYouCanDoIntro,
    practicalInfoGettingHere,
    practicalInfoHousing,
    practicalInfoLanguage,
    voicesIntro,
    howToApplyIntro,
    howToApplySteps,
    faqIntro,
    closingHeading,
    closingText,
    closingCtaPrimaryHref
  },
  "mobilityPrograms": *[_type == "mobilityProgram" && route == "en"] | order(_createdAt asc){
    name, duration, idealFor, covers, ctaLabel, ctaUrl
  },
  "testimonials": *[_type == "testimonial" && route == "en"] | order(_createdAt asc){
    quote, name, originCity, destinationCity, program, year, photo
  },
  "faqs": *[_type == "faq" && route == "en"] | order(order asc){
    question, answer
  }
}`

export const getEnPageData = cache(async (): Promise<EnPageData> => {
  const { data } = await sanityFetch({ query: EN_QUERY })
  return data as EnPageData
})

export interface TimelineMilestoneData {
  year?: string
  title?: string
  description?: string
}

export interface ValueItemData {
  icon?: string
  title?: string
  description?: string
}

export interface TeamMemberData {
  name?: string
  role?: string
  photo?: SanityImageSource
  linkUrl?: string
}

export interface PartnerData {
  name?: string
  logo?: SanityImageSource
}

export interface InitiativeData {
  icon?: string
  name?: string
  description?: string
  url?: string
  colorScheme?: 'blue' | 'green' | 'orange'
}

export interface PageNosotrosData {
  heroEyebrow?: string
  heroHeading?: string
  heroHeadingAccent?: string
  heroText?: RichTextValue
  heroStats?: StatItemData[]
  heroBackgroundImage?: SanityImageSource
  historiaIntro?: SectionIntroData
  historiaParagraphs?: RichTextValue
  timeline?: TimelineMilestoneData[]
  valoresIntro?: SectionIntroData
  values?: ValueItemData[]
  equipoIntro?: SectionIntroData
  teamMembers?: TeamMemberData[]
  volunteersNumber?: string
  volunteersSubtitle?: string
  volunteersCtaLabel?: string
  volunteersCtaUrl?: string
  pastVolunteersIntro?: SectionIntroData
  pastVolunteers?: TeamMemberData[]
  iniciativasIntro?: SectionIntroData
  iniciativas?: InitiativeData[]
  partnersIntro?: SectionIntroData
  partners?: (PartnerData | string)[]
  closingHeading?: string
  closingText?: RichTextValue
  closingCtaPrimaryHref?: string
}

export interface NosotrosPageData {
  page: PageNosotrosData | null
  volunteerTestimonials: TestimonialData[]
}

const NOSOTROS_QUERY = `{
  "page": *[_type == "pageNosotros"][0]{
    heroEyebrow,
    heroHeading,
    heroHeadingAccent,
    heroText,
    heroStats,
    heroBackgroundImage,
    historiaIntro,
    historiaParagraphs,
    timeline,
    valoresIntro,
    values,
    equipoIntro,
    teamMembers,
    volunteersNumber,
    volunteersSubtitle,
    volunteersCtaLabel,
    volunteersCtaUrl,
    pastVolunteersIntro,
    pastVolunteers,
    iniciativasIntro,
    iniciativas,
    partnersIntro,
    partners,
    closingHeading,
    closingText,
    closingCtaPrimaryHref
  },
  "volunteerTestimonials": *[_type == "testimonial" && route == "nosotros" && (!defined(language) || language == "es")] | order(_createdAt asc){
    quote, name, originCity, destinationCity, program, year, photo
  }
}`

export const getNosotrosPageData = cache(async (): Promise<NosotrosPageData> => {
  const { data } = await sanityFetch({ query: NOSOTROS_QUERY })
  return data as NosotrosPageData
})

const NOSOTROS_EN_QUERY = `{
  "page": *[_type == "pageNosotrosEn"][0]{
    heroEyebrow,
    heroHeading,
    heroHeadingAccent,
    heroText,
    heroStats,
    heroBackgroundImage,
    historiaIntro,
    historiaParagraphs,
    timeline,
    valoresIntro,
    values,
    equipoIntro,
    teamMembers,
    volunteersNumber,
    volunteersSubtitle,
    volunteersCtaLabel,
    volunteersCtaUrl,
    pastVolunteersIntro,
    pastVolunteers,
    iniciativasIntro,
    iniciativas,
    partnersIntro,
    partners,
    closingHeading,
    closingText,
    closingCtaPrimaryHref
  },
  "volunteerTestimonials": *[_type == "testimonial" && route == "nosotros" && language == "en"] | order(_createdAt asc){
    quote, name, originCity, destinationCity, program, year, photo
  }
}`

export const getNosotrosEnPageData = cache(async (): Promise<NosotrosPageData> => {
  const { data } = await sanityFetch({ query: NOSOTROS_EN_QUERY })
  return data as NosotrosPageData
})

export interface PageMentoresData {
  heroEyebrow?: string
  heroHeading?: string
  heroText?: RichTextValue
  heroImage?: SanityImageSource
  heroImageCaption?: string
  heroCtaLabel?: string
  heroCtaHref?: string
  whyIntro?: SectionIntroData
  whyText?: RichTextValue
  beneficiosIntro?: SectionIntroData
  beneficios?: ValueItemData[]
  stats?: StatItemData[]
  testimoniosIntro?: SectionIntroData
  closingHeading?: string
  closingText?: RichTextValue
}

export interface MentoresPageData {
  page: PageMentoresData | null
  testimonials: TestimonialData[]
}

const MENTORES_QUERY = `{
  "page": *[_type == "pageMentores"][0]{
    heroEyebrow,
    heroHeading,
    heroText,
    heroImage,
    heroImageCaption,
    heroCtaLabel,
    heroCtaHref,
    whyIntro,
    whyText,
    beneficiosIntro,
    beneficios,
    stats,
    testimoniosIntro,
    closingHeading,
    closingText
  },
  "testimonials": *[_type == "testimonial" && route == "mentores"] | order(_createdAt asc){
    quote, name, originCity, destinationCity, program, year, photo
  }
}`

export const getMentoresPageData = cache(async (): Promise<MentoresPageData> => {
  const { data } = await sanityFetch({ query: MENTORES_QUERY })
  return data as MentoresPageData
})
