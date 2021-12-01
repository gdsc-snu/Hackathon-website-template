// // Importing all sponsors logos from Assets
import GMS from './../components/media/GMS.png'
import couvete from './../components/logo-section/courvetteNew.jpeg'
// import dummyLogo from './../components/logo-section/dummyLogo.png'
import Devfolio from './../components/logo-section/Devfolio.png'
import Polygon from './../components/logo-section/Polygon.png'
import Tezos from './../components/logo-section/Tezos.png'
import Celo from './../components/logo-section/Celo.svg'
import Filecoin from './../components/logo-section/Filecoin.png'
import HoichoiN from './../components/logo-section/HoichoiN.png'

import piush from './../components/logo-section/piushAvatar.png'
import tamim from './../components/logo-section/tamim.png'
import NiloySikdar from './../components/team/NiloySikdar.jpg'
import Syed from './../components/team/Syed.jpeg'
import Sagnik from './../components/team/Sagnik.jpg'
import Sayan from './../components/team/Sayan.jpg'



/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets
import soumyadeep from "./../components/logo-section/soumyadeep.svg";
import sucheta from './../components/Avatars/sucheta.png'

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
      type: "Top 3 Solo or First Place (Team)",
      content1:"T-shirt from Cuvette and t-shirts & stickers from Devfolio, Polygon, Tezos, Filecoin & Celo",
      content2:" Lifetime verifiable certificate",
      content3 :' Surprises 🤫'
    },
    {
      icon: <i class=" second fas fa-4x fa-medal"></i>,
      type: "Second & Third Place (Team)",
      content1:"T-shirts and stickers from Devfolio, Polygon, Tezos, Filecoin and Celo",
      content2 :"Lifetime verifiable certificate",
      content3 :" Surprises 🤫"
    },
    {
      icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Best Android App",
      content1: "T-shirts and stickers from Devfolio, Polygon, Tezos, Filecoin and Celo" ,
      content2:" Chance to send your app to Google (for SNU students only)",
      content3: " Lifetime verifiable certificate. Surprises 🤫 "
    },
      {
        icon: <i class="second fas fa-4x fa-trophy"></i>,
        type: "Successful Submission",
        content1: "Lifetime verifiable certificate " 
      },
      {
        icon: <i class=" second fas fa-4x fa-medal"></i>,
        type: "Tezos",
        content1:"₹20,000 for best Dapp built on Tezos ",
        content2:"Continuity grant opportunity up to $5,000 for outstanding projects",
      },
      {
        icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
        type: "Celo",
        content1: "₹20,000 for best Dapp built on Celo  " ,
        content2:"Continuity Support",
      },
      {
        icon: <i class=" third fas fa-4x  fa-trophy"></i>,
        type: "Filecoin",
        content1: "₹20000 for best use of IPFS and/or Filecoin " 
      },
  ]
];

const PrizeNonCoding = [
  [
    //Array 2
    {
      icon: <i class="fab fourth fa-3x fa-wpbeginner"></i>,
      type: "Best UI/UX",
      content1:" T-shirts and stickers from Devfolio, Polygon, Tezos, Filecoin and Celo.",
      content2 : " Lifetime verifiable certificate.",
      content3 : " Surprises 🤫 "
    },
      {
        icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
        type: "Best Ideation",
        content1: "T-shirts and stickers from Devfolio, Polygon, Tezos, Filecoin and Celo.",
        content2 : "  Lifetime verifiable certificate.",
        content3 : " Surprises 🤫 "
      },
 
  ]
]

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
      img: soumyadeep
    },
    {
      Name: "Tamim Iqbal",
      role: "Graphics Team Lead, Google DSC SNU",
      github: "https://github.com/#",
      linkedin: "https://www.linkedin.com/in/#",
      img: tamim
    },
    {
      Name: "Piush Chandra Chandra",
      role: "Social Media Lead, Google DSC SNU",
      github: "https://github.com/#",
      linkedin: "https://www.linkedin.com/in/#",
      img: piush
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
      Name: "Niloy Sikdar",
      role: "Judge, Mentor (Web Dev, Flutter)",
      company: "GDSC JGEC",
      email: "niloysikdar30@gmail.com",
      designation:"GDSC JGEC Lead, Full Stac k Web and Mobile Application developer",
      img: NiloySikdar 
    },
    {
      Name: "Syed Ziauddin",
      role: "Mentor",
      company : "Agora.io",
      email: "sz2386@cse.jgec.ac.in",
      designation:"MERN Stack Devloper",
      img: Syed
    },
    {
      Name: "Sagnik Roy",
      role: "Judge, Mentor (Machine Learning)",
      company: "Jalpaiguri Government Engineering College",
      email: "sagnik.jal00@gmail.com",
      designation:"Data Science Intern @argoid.ai",
      img: Sagnik
    },
    {
      Name: "Sayan Nath",
      role: " Judge/Mentor(Deep Learning) ",
      company: "Kalinga Institute of Industral Technology",
      email: "sayannath235@gmail.com",
      designation: "ML Engineer Intern @Blend | GSoC '21 @TensorFlow | Lead @GDSC KIIT | Mentor @Exchange with Google Devs",
      img: Sayan
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{ src: HoichoiN , link:'https://hoichoi.tech/', color: 'hoichoi' }]
];

const sponsorLogos1 = [
  [ {src: Devfolio, link:'https://devfolio.co/'}, {src: Polygon, link:'https://polygon.technology/'}, { src: Celo, link:'https://celo.org/'}, {src:  couvete, link :'https://cuvette.tech/' ,color: 'hoichoi'}]//Array 1
   //Array 3
  // [{src:  dummyLogo}, {src:  dummyLogo}, {src:  dummyLogo},{src:  dummyLogo, link:'https://gdsc-snu.github.io/dechack/sponsorship_gdscsnu.pdf' }] //Array 4
];

const sponsorLogos2 = [
 [ {src:  GMS , link: 'https://givemycertificate.com/'},  {src: Filecoin, link: 'https://twitter.com/Filecoin'} , //Array 2
  { src: Tezos, link:'https://tezos.com/'} ]
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
        content: "Dec Hacks is open to all 1st year and 2nd year Undergraduate students & 11th and 12th standard students "
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
  sponsorLogos1,
  sponsorLogos2,
  sponsorLogos,
  TeamInfo,
  frequentlyAskedQuestions,
  JudgeInfo,
  PrizeNonCoding
};
