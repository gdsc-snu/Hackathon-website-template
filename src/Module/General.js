// // Importing all sponsors logos from Assets
import GMS from './../components/media/GMS.png'
import couvete from './../components/media/couvete.png'
import dummyLogo from './../components/logo-section/dummyLogo.png'
/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets
import me from "./Assets/teami/me.png";
import sucheta from './../components/Avatars/sucheta.png'
import zoha from "./Assets/teami/zoha.png";

/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from "./Assets/boy.png";

const TOP_SECTION = {
  TITLE: "Join DecHacks",
  Typed_effect: ["4 days of creation", "Win awesome prizes", "Get Mentored, Get Going"],
  SHORT_DESCRIPTION:
    "Join us from 15th Dec to 18th Dec and kick-start your coding journey with creation, innovation, & fun.",
  IMG_SRC: boy,
  DISCORD_LINK: "https://discord.com/invite/c5fEPAsjcg",
  JUDGES_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u",
  HACKERS_REGISTRATION_FORM_LINK:
    // "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNTgyREk0VzdEMU9RVFlPMVNWVEJQUkNYMi4u"
    ""
};

const SOCIALS = {
  instagram: "https://www.instagram.com/gdscsnukolkata",
  discord: "https://discord.com/invite/c5fEPAsjcg",
  linkedin: "https://www.linkedin.com/company/gdsc-snu/",
  twitter: "https://twitter.com/gdscsnu",
  devpost: "https://#", //do we have? 
  email: "mailto:google.dsc@snuniv.ac.in",            // whose mail to provide?
  mail: "google.dsc@snuniv.ac.in",
  facebook: 'https://www.facebook.com/gdscsnu'
};

const MIDDLE_SECTION = {
  TITLE: "What is DecHacks?",
  LONG_DESCRIPTION:
    "DecHack is a hackathon organised by GDSC SNU in December, to encourage students put their skills in social good. We welcome brilliant engineers, designers, entreprenurs and out of the box thinkers around the campus. Compete for prizes while you make earth a better place to live",
  LOGO_EFFECT: true,
  LOGO: ""
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u"
  },
  JOIN_TEAM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u"
  },
  Privacy_policy: {
    required: true,
    src: "https://developers.google.com/community-guidelines"
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: "overall First",
      content:
        "First Overall prize will be given to a project that outstands all other submissions"
    },
    {
      icon: <i class=" second fas fa-4x fa-medal"></i>,
      type: "overall Second",
      content:
        "Second Overall prize will be given to the second best project of the hackathon"
    },
    {
      icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Third Second",
      content:
        "Best third overall project of the hackathon will win some awesome prizes"
    }
  ],
  [
    //Array 2
    {
      icon: <i class="fab fourth fa-3x fa-wpbeginner"></i>,
      type: "Best Solo",
      content:
        "You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team"
    },
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: " Best Beginner",
      content: "Your project will qualify for this category if atleast 50% "
    },
    {
      icon: <i class=" fifth fa-3x fas fa-book-open"></i>,
      type: "Best UI/UX",
      content: "Project with most creative designs will be UI/UX track"
    }
  ],
  [
    //Array 3
    {
      icon: <i class="fas fa-4x sixth fa-male"></i>,
      type: "Best Web App with Qoom",
      content: "Must use qoom in your project to win this category"
    },
    {
      icon: <i class="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "More prizes will be revealed later"
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: "Soumyadip Mondal",
      role: "Lead, Google DSC SNU",
      github: "https://github.com/unsuitable001",
      linkedin: "https://www.linkedin.com/in/unsuitable001/",
      img: me
    },
    {
      Name: "Tamim Iqbal",
      role: "Graphics Team Lead, Google DSC SNU",
      github: "https://github.com/#",
      linkedin: "https://www.linkedin.com/in/#",
      img: me
    },
    {
      Name: "Piush Chandra Chandra",
      role: "Social Media Lead, Google DSC SNU",
      github: "https://github.com/#",
      linkedin: "https://www.linkedin.com/in/#",
      img: me
    },
    {
      Name: "Sucheta Mahata",
      role: "Web Dev, GDSC SNU (non-organising)",
      github: "https://github.com/suchetamahata",
      linkedin: "https://www.linkedin.com/in/sucheta-mahata",
      img: sucheta
    }

  ]
];
const JudgeInfo = [
  [
    //Array 1
    {
      Name: "Judge 1",
      role: "Judge, Mentor (Web)",
      github: "https://github.com/suchetamahata",
      linkedin: "https://www.linkedin.com/in/sucheta-mahata/",
      img: zoha
    },
    {
      Name: "Judge 2",
      role: "Judge, Mentor (AI/ML)",
      github: "https://github.com/suchetamahata",
      linkedin: "https://www.linkedin.com/in/sucheta-mahata/",
      img: zoha
    },
    {
      Name: "Judge 3",
      role: "Judge, Mentor (UI/UX)",
      github: "https://github.com/suchetamahata",
      linkedin: "https://www.linkedin.com/in/sucheta-mahata/",
      img: zoha
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src:  GMS , link: 'https://givemycertificate.com/'}, {src:  couvete, link :'https://cuvette.tech/'}, {src:  dummyLogo, link:'https://gdsc-snu.github.io/dechack/sponsorship_gdscsnu.pdf'}], //Array 1
  // [{src:  dummyLogo},{src:  Dummy2}, {src:  dummyLogo}], //Array 2
  // [{src:  Dummy2}, {src:  dummyLogo}, {src: Dummy2}], //Array 3
  // [{src:  dummyLogo}, {src:  dummyLogo}, {src:  dummyLogo}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions  = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
        'A hackathon is a event where "hackers" collaborate on creating a functioning software and hardware by the end of the event.' },
      {
        label: "Who can attend?",
        content: "Dec Hacks is open to all students from Sister Nivedita University."
      },
      {
        label: "I am a first time hacker, what should I do?",
        content: "No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general."
      },
      {
        label: "How team formation works?",
        content: "You can form team with 3 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: "How to register myself in the hackathon?",
        content: "All you need is to join our official Discord, we will guide you through everything there. More details about registration will be shared soon."
      },
      {
        label: "I have more questions?",
        content: "Reach us directly at (google.dsc@snuniv.ac.in) or our official Discord channel we would be happy to help you."
      }
      ,
      {
        label: "Can I participate Solo?",
        content: "Yes we are actively looking for solo participants, we will be glad to have you."
      }
      ,
      {
        label: "Will there be swag?",
        content: "Yes! Participants will recieveing DecHacks swag!."
      }
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  frequentlyAskedQuestions,
  JudgeInfo
};
