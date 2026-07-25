/* ================================================================
   TEXT.JS
   ALL the words on the site live in this one file, split into
   clearly labeled sections below. Find the section you want,
   edit the text between the quotes, save, redeploy. Don't touch
   anything outside the quotes (the commas and brackets matter).
   ================================================================ */


/* ============================================================
   SECTION 1: DECOY SITE ("Quiet Hollow" — the fake front page)
   ============================================================ */
const DECOY_CONTENT = {

  siteName: "Quiet Hollow",

  nav: ["Journal", "About", "Shop"],

  hero: {
    title: "Notes for slow mornings.",
    text: "A small corner of the internet for tea steeped too long, paper that's a little too nice to use, and the kind of quiet that takes practice. Updated whenever there's something worth saying.",
    buttonText: "Read the journal"
  },

  journalEyebrow: "Latest entries",

  // Add, remove, or edit entries freely — the list renders automatically.
  entries: [
    {
      date: "Mar 14",
      title: "On leaving the window open",
      text: "Some thoughts on cold rooms, the sound of rain on a sill, and why I stopped closing the curtains at night."
    },
    {
      date: "Feb 27",
      title: "A better way to fold linen",
      text: "It turns out most of us have been doing this wrong since childhood. A short, slightly obsessive guide."
    },
    {
      date: "Feb 09",
      title: "Tea notes: the ones I keep coming back to",
      text: "Not a ranked list — just the ones that make the shelf worth having."
    }
  ],

  aboutQuote: "Most days are ordinary. The trick is noticing the ones that aren't before they've already passed.",

  footerLeft: "Quiet Hollow, est. 2019"
};


/* ============================================================
   SECTION 2: ABOUT US (identity + about text for the real site,
   The Hollow Choir)
   ============================================================ */
const ABOUT_CONTENT = {

  siteName: "The Hollow Choir",
  tagline: "We sing what the eulogy doesn't.",
  glyph: "✝", // small symbol shown above the site name

  eyebrow: "About Us",
  title: "Congregation of the Unbothered",

  // Add or remove paragraphs freely — each one renders as its own paragraph.
  paragraphs: [
    "The Hollow Choir is a gathering of people who have made peace with the fact that everything ends, and decided that's frankly hilarious. We are not therapists. We are not optimists. We are the group chat that shows up to the wake with better jokes than the eulogy and slightly inappropriate snacks.",
    "Founded on the theory that gallows humor is just regular humor with better posture, we trade in dark comedy, bleak memes, and the specific brand of laughter that happens right before or right after crying. Nothing here is a cry for help. Some of it is a cry for attention. We think that's fine too.",
    "If you've ever laughed at a funeral and immediately felt guilty about it — congratulations, you've already passed the audition."
  ]
};


/* ============================================================
   SECTION 3: HOUSE RULES ("The Hymnal" — the rules list)
   ============================================================ */
const RULES_CONTENT = {

  eyebrow: "The Hymnal",
  title: "A Few House Rules",

  // Add or remove verses freely.
  verses: [
    {
      bold: "Punch up, or punch at the void.",
      text: "Never at the person sitting next to you in the pew."
    },
    {
      bold: "Dark ≠ cruel.",
      text: "We laugh at the abyss. We do not laugh at the person currently in it, unless they told the joke themselves."
    },
    {
      bold: "No real names, no real wounds.",
      text: "Keep specifics vague enough that nobody gets doxxed by their own trauma."
    },
    {
      bold: "If someone's not okay, the bit stops.",
      text: "Every single time. This is the one commandment that actually matters."
    },
    {
      bold: "Read the room, then read it again.",
      text: "A joke that lands in one thread can flatten someone in another."
    }
  ]
};


/* ============================================================
   SECTION 4: CONTACT / JOIN (this is where your Discord link goes)
   ============================================================ */
const CONTACT_CONTENT = {

  eyebrow: "Join the Choir",
  text: "Services are held continuously. No robes required, though we won't stop you.",

  buttonText: "Enter the Discord →",

  // 👇 Replace this with your real Discord invite link before publishing.
  discordUrl: "https://discord.gg/YOUR-INVITE-CODE",

  note: "Replace this link with your real invite before publishing.",

  footerText: "the hollow choir · est. whenever it stops being funny, so: never"
};
