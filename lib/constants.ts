/**
 * Couple, event, venue and asset constants. Update here to customize the invitation.
 */

export const COUPLE = {
  names: "Sivakumaaran & Yogalakshmi",
} as const;

export const EVENT = {
  title: "Wedding Reception",
  subtitle: "You're Invited",
  date: "March 6, 2026",
  time: "From 6:00 PM onwards",
  /** Target for countdown: March 6, 2026 6:00 PM IST (Asia/Kolkata) = 12:30 UTC */
  countdownTarget: new Date("2026-03-06T12:30:00.000Z"),
  timezone: "Asia/Kolkata",
  timezoneLabel: "IST",
} as const;

const VENUE_ADDRESS_LINE = "Sowbhagya Mahal, Jawaharlal Nehru Salai, Senthil Nagar, Kamala Nehru Nagar, Annai Sathya Nagar, Koyambedu, Chennai, Tamil Nadu 600106";
const VENUE_LANDMARK = "Near Arumbakkam Metro Station";

export const VENUE = {
  name: "Sowbhagya Mahal",
  fullAddress: [
    "Jawaharlal Nehru Salai",
    "Senthil Nagar",
    "Kamala Nehru Nagar",
    "Annai Sathya Nagar",
    "Koyambedu",
    "Chennai, Tamil Nadu 600106",
  ],
  fullAddressLine: VENUE_ADDRESS_LINE,
  landmark: VENUE_LANDMARK,
  mapsEncoded: encodeURIComponent("Sowbhagya Mahal, Jawaharlal Nehru Salai, Koyambedu, Chennai"),
  calendarLink: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Sivakumaaran & Yogalakshmi – Wedding Reception")}&dates=20260306T123000Z/20260306T180000Z&details=${encodeURIComponent(VENUE_LANDMARK)}&location=${encodeURIComponent(VENUE_ADDRESS_LINE)}`,
} as const;

/** Hero background image path (in public). */
export const HERO_IMAGE = "/media/sy-poster.png";

/** Background music path (in public). */
export const AUDIO = {
  bgMusic: "/audio/audio1.mp3",
} as const;

/** Social preview image. Add public/og.jpg for Open Graph. */
export const OG_IMAGE = "/og.jpg";
