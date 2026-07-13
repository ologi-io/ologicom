const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/lets-talk" },
];

const services = [
  {
    title: "Product Systems",
    copy: "Turn a serious product idea into durable architecture, clean interfaces, and software that can survive real customers.",
  },
  {
    title: "Custom Buying Flows",
    copy: "Configurators, visual builders, guided selling, and product rules that help customers get to the right answer faster.",
  },
  {
    title: "Commerce Logic",
    copy: "Catalog data, subscriptions, analytics, integrations, and operational workflows that make commerce work behind the scenes.",
  },
  {
    title: "Internal Tools",
    copy: "Focused tools for approvals, exceptions, handoffs, and decisions your team has outgrown spreadsheets for.",
  },
  {
    title: "Fractional CTO",
    copy: "MVP planning, system rescue, AI-assisted development, and principal-engineer judgment when the product needs a real owner.",
  },
];

const serviceSituations = [
  {
    title: "The Product Is Becoming Overcomplicated.",
    icon: "/assets/overcomplicated-icon.svg",
    copy: "You have ideas, customers, and momentum. But every new feature feels harder than the last. The product is growing faster than the systems underneath it.",
    work: [
      "Product Architecture",
      "Configurators",
      "Commerce Systems",
      "Internal Tools",
      "Product Data",
      "APIs",
      "AI-Enabled Workflows",
    ],
  },
  {
    title: "The Software No Longer Feels Trustworthy.",
    icon: "/assets/trustworthy-icon.svg",
    copy: "Nobody wants to touch the code. Deployments feel risky. The architecture has drifted. Technical debt is making every decision more expensive.",
    work: [
      "Architecture Reviews",
      "Technical Debt Reduction",
      "Refactoring",
      "Incremental Modernization",
      "Legacy System Recovery",
    ],
  },
  {
    title: "You Have the Vision and Need Help on Your Path.",
    icon: "/assets/path-icon.svg",
    copy: "Most founders don't need someone to tell them their vision. They need someone who can help translate it into a series of production-ready milestones.",
    work: [
      "Product Strategy",
      "Technical Roadmaps",
      "MVP Planning",
      "Production Milestones",
      "Fractional Product Engineering Leadership",
    ],
  },
];

const work = [
  {
    title: "Bikology",
    role: "Founder / Architect / Developer",
    type: "Visual Product Configurator, Catalog and Commerce Platform",
    status: "Active product",
    link: "www.bikology.com",
    href: "https://www.bikology.com/",
    image: "/assets/work/bikology.jpg",
    copy: "I created Bikology to make complex bike selection visual, understandable, and useful. The platform combines component compatibility, product visualization, catalog data, commerce, media, and specialty retail workflows into a system that helps riders and shops make more confident decisions.",
  },
  {
    title: "Ground Keeper Custom",
    role: "Original Architect / Developer",
    date: "2021–2024",
    type: "Custom Graphics Generation Platform",
    status: "Past work",
    link: "www.groundkeepercustom.com",
    href: "https://www.groundkeepercustom.com/",
    image: "/assets/work/groundkeeper.jpg",
    copy: "From inception through 2024, I was the primary technical resource for Ground Keeper Custom’s product customization platform. We began with a focused, production-ready fender builder and iterated it into a broader system that turned templates, colors, uploads, and product options into print-ready artwork and a customer-facing checkout flow.",
  },
  {
    title: "Fanatik Bike",
    role: "Integration Architect / Developer",
    type: "Bike and Wheel Configurators, Shopify Integration",
    status: "Custom commerce integration",
    link: "www.fanatikbike.com",
    href: "https://www.fanatikbike.com/",
    image: "/assets/work/fanatik.jpg",
    copy: "I integrated Bikology’s bike and wheel builder technology with Fanatik Bike’s Shopify storefront, translating component compatibility and custom build logic into a guided, checkout-ready buying flow. The work helped riders move from ‘what fits?’ to a validated build they could add to cart.",
  },
  {
    title: "Keyword Wizard",
    role: "Product Architect / Developer",
    type: "SERP Research and Brand Intelligence Tool",
    status: "Private client tool",
    link: "www.thediscoghost.com",
    href: "https://www.thediscoghost.com/",
    image: "/assets/work/keyword-wizard.jpg",
    copy: "I built a private research tool for a PR agency that turned repetitive keyword and search-result analysis into a structured, repeatable workflow. The system combined curated exclusions, configurable runs, and reviewable outputs so the team could move from raw search data to useful brand insight with less manual work.",
  },
  {
    title: "Natural Selection Tour",
    role: "Developer",
    type: "Live Event Bracket Randomizer",
    status: "Live event production tool",
    link: "www.naturalselectiontour.com",
    href: "https://www.naturalselectiontour.com/",
    image: "/assets/work/nst-randomizer.jpg",
    copy: "I built a custom Node.js bracket randomizer for Natural Selection Tour, turning athlete lists, country data, and event seeding inputs into a branded selection tool for live production. It encoded the draw logic and made the process visible, repeatable, and easy to operate under pressure.",
  },
  {
    title: "Bike Free",
    role: "Creator / Developer",
    type: "Browser Game, Canvas, Scoring and Leaderboard",
    status: "Active game",
    link: "www.playbike.free",
    href: "https://www.playbike.free/",
    image: "/assets/work/bikefree.jpg",
    copy: "Bike Free is a small public product experiment: a SkiFree-inspired mountain bike game adapted into a standalone browser experience with custom art direction, scoring, sign-in, leaderboard support, analytics, and deployment. It is proof that serious engineering and playful ideas can live in the same portfolio.",
  },
];

const engagements = [
  {
    title: "Systems Audit",
    price: "$3,500-$7,500",
    copy: "For teams that need clarity before they build. We map the product, customer flow, data, stack, constraints, and highest-leverage next steps.",
  },
  {
    title: "Implementation Retainer",
    price: "$15k/month",
    copy: "Three-month minimum. One high-leverage workstream at a time. Strategy, architecture, implementation, QA, documentation, and iteration.",
  },
  {
    title: "Embedded Product Engineering",
    price: "$20k-$30k/month",
    copy: "For startups or teams that need deeper technical ownership without hiring a full-time principal engineer yet.",
  },
];

const servicePrinciples = [
  {
    title: "Understand",
    copy: "The first version of the problem is rarely the real problem. I spend time understanding the product, the people, and the constraints before changing anything.",
  },
  {
    title: "Patterns",
    copy: "Most software doesn't become difficult because it's old. It becomes difficult because patterns slowly disappear. My job is to restore clarity before adding complexity.",
  },
  {
    title: "Milestones",
    copy: "I don't believe in throwaway MVPs. I believe in production-ready milestones. Every stage should make the next stage easier.",
  },
  {
    title: "Visibility",
    copy: "Clients should never wonder what's happening. Working software, regular demos, and honest communication matter more than status reports.",
  },
  {
    title: "Confidence",
    copy: "The project ends. The confidence shouldn't. My goal is that your team understands the system well enough to keep building without me.",
  },
];

const contactItems = [
  { label: "Email", value: "hello@ologi.io", href: "mailto:hello@ologi.io" },
  { label: "LinkedIn", value: "www.linkedin.com/in/brian-sweat", href: "https://www.linkedin.com/in/brian-sweat/" },
  { label: "Website", value: "www.bsweaty.com", href: "https://www.bsweaty.com" },
];


const intakeOptions = {
  stage: [
    "Ideation",
    "MVP",
    "Early Life",
    "Established",
    "Legacy Platform",
  ],
  help: [
    "Build an MVP or Early Product",
    "Plan the Product Architecture",
    "Fix or Refactor an Existing System",
    "Build a Configurator or Custom Buying Flow",
    "Improve Commerce, Catalog, or Product Data Workflows",
    "Bring in Fractional Technical Leadership",
  ],
};

const intakeInitialData = {
  name: "",
  email: "",
  role: "",
  company: "",
  website: "",
  companyDescription: "",
  stage: "",
  signal: "",
  help: [],
  buildOrFix: "",
  stack: "",
};

const requiredIntakeFields = ["name", "email", "company", "website", "buildOrFix"];

let intakeState = {
  data: { ...intakeInitialData },
  touched: {},
  submitted: false,
  success: false,
};

const routes = {
  "/": homePage,
  "/services": servicesPage,
  "/engagements": engagementsPage,
  "/work": workPage,
  "/about": aboutPage,
  "/lets-talk": letsTalkPage,
};

const routeTitles = {
  "/": "Ologi | Founder-led Product Engineering",
  "/services": "Ologi | Services",
  "/engagements": "Ologi | Engagements",
  "/work": "Ologi | Work",
  "/about": "Ologi | About",
  "/lets-talk": "Ologi | Let\x27s Talk",
};

function ologiLogo() {
  return `
    <svg class="ologi-logo" viewBox="0 0 270 64" role="img" aria-labelledby="ologi-logo-title" focusable="false">
      <title id="ologi-logo-title">Ologi</title>
      <defs>
        <linearGradient id="ologi-mark-gradient" x1="7" y1="17" x2="93" y2="47" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#f7f6f2"/>
          <stop offset="0.28" stop-color="#dfe7ff"/>
          <stop offset="0.54" stop-color="#8790ff"/>
          <stop offset="0.78" stop-color="#eef2ff"/>
          <stop offset="1" stop-color="#8d92ff"/>
        </linearGradient>
        <linearGradient id="ologi-word-gradient" x1="104" y1="20" x2="260" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ffffff"/>
          <stop offset="0.58" stop-color="#d8d8dc"/>
          <stop offset="1" stop-color="#f4f1ea"/>
        </linearGradient>
        <filter id="ologi-mark-glow" x="-30%" y="-55%" width="160%" height="210%">
          <feGaussianBlur stdDeviation="4.5" result="blur"/>
          <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.45 0 0 0 0 0.49 0 0 0 0 1 0 0 0 .72 0"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path class="ologi-logo-glow" d="M15 32C15 14 34 13 50 32C66 51 85 50 85 32C85 14 66 13 50 32C34 51 15 50 15 32"/>
      <path class="ologi-logo-mark" d="M15 32C15 14 34 13 50 32C66 51 85 50 85 32C85 14 66 13 50 32C34 51 15 50 15 32"/>
      <text class="ologi-logo-word" x="108" y="39">OLOGI</text>
    </svg>
  `;
}

function shell(content) {
  return `
    <header class="site-header">
      <a class="brand brand-lockup" href="/" data-link aria-label="Ologi home">
        ${ologiLogo()}
      </a>
      <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span>
      </button>
      <nav class="site-nav" aria-label="Primary">
        ${nav.map((item) => `<a href="${item.href}" data-link>${item.label}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <a class="header-cta" href="/lets-talk" data-link aria-label="Let&#39;s Talk">
          <svg aria-hidden="true" viewBox="0 0 1200 1200" focusable="false">
            <path d="m933.61 134.39h-667.22c-81.609 0-146.39 66-146.39 146.39v410.39c0 80.391 66 146.39 146.39 146.39l69.609 0.046875-20.391 170.39c-7.2188 44.391 42 73.219 78 46.781l222-218.39h318c81.609 0 146.39-66 146.39-146.39v-409.22c0-81.562-66-146.39-146.39-146.39zm-589.22 423.61c-39.609 0-72-32.391-72-72s32.391-72 72-72 73.219 32.391 73.219 72-33.609 72-73.219 72zm255.61 0c-39.609 0-72-32.391-72-72s32.391-72 72-72 73.219 32.391 73.219 72c-1.2188 39.609-33.609 72-73.219 72zm255.61 0c-39.609 0-72-32.391-72-72s32.391-72 72-72c39.609 0 73.219 32.391 73.219 72-1.2188 39.609-33.609 72-73.219 72z"/>
          </svg>
          Let&#39;s Talk
        </a>
      </div>
    </header>
    <main id="main">${content}</main>
    <footer class="site-footer">
      <a class="brand brand-lockup footer-brand" href="/" data-link aria-label="Ologi home">
        ${ologiLogo()}
      </a>
      <p>Founder-led product engineering for complex systems and serious early-stage ideas.</p>
      <nav aria-label="Footer">${nav.map((item) => `<a href="${item.href}" data-link>${item.label}</a>`).join("")}</nav>
    </footer>
  `;
}

function homePage() {
  return `
    <section class="hero">
      <div class="hero-media" aria-hidden="true"></div>
      <div class="container hero-content">
        <p class="eyebrow">Founder-led product engineering</p>
        <h1>Build What's Next.<br>Engineer What Lasts.</h1>
        <p class="hero-copy">Ologi helps teams turn complex products, messy product logic, custom buying flows, internal tools, and early-stage software ideas into systems that are clear, useful, and built to last.</p>
        ${ctaRow()}
      </div>
    </section>
    ${sectionIntro("What Ologi Builds", "Software for the Product Logic Your Business Actually Runs On.")}
    <section class="container card-grid five-up">${services.map(serviceCard).join("")}</section>
    ${selectedWorkSection()}
    <section class="container founder-note">
      <p class="eyebrow">Founder-led</p>
      <h2>Work Directly with the Person Responsible for the System.</h2>
      <p>Ologi is Brian Sweat's product engineering practice. Strategy, architecture, implementation, and judgment stay close to the work.</p>
    </section>
    ${finalCta()}
  `;
}

function servicesPage() {
  return `
    ${servicesHero()}
    ${sectionIntro("Projects Usually Start in One of Three Places", "Where Are You Right Now?")}
    <section class="container card-grid three-up">${serviceSituations.map(serviceSituationCard).join("")}</section>
    ${sectionIntro("How I Work", "Principles Over Process.")}
    <section class="container process-grid principles-grid">
      ${servicePrinciples.map(principleCard).join("")}
    </section>
    ${servicesConfidenceCta()}
  `;
}

function engagementsPage() {
  return `
    ${pageIntro("Engagements", "Clear Ways to Begin.", "Start with a focused audit, a retained implementation workstream, or deeper embedded product engineering support.")}
    ${engagementsSection(false)}
    ${finalCta()}
  `;
}

function workPage() {
  return `
    ${workHero()}
    <section class="container work-list">${work.map(workCard).join("")}</section>
    ${workCta()}
  `;
}

function aboutPage() {
  return `
    ${aboutHero()}
    <section class="container split-section">
      <div class="about-copy">
        <p class="eyebrow">Mission</p>
        <p>Technology should help people move forward with confidence. Ologi helps founders and teams navigate complexity, build the right next thing, and leave with systems they understand, trust, and can carry forward.</p>
        <p class="eyebrow">About</p>
        <p>Brian Sweat is a founder and principal engineer who works at the intersection of product knowledge, software architecture, customer experience, and operational reality.</p>
        <p>He founded Bikology and has built product configurators, commerce systems, internal tools, data platforms, integrations, and event software for startups and established organizations.</p>
        <p>Through Ologi, Brian works directly with teams that need senior technical ownership without turning the engagement into a traditional agency process.</p>
        <a class="text-link about-portfolio-link" href="https://bsweaty.com/" target="_blank" rel="noopener noreferrer">View Brian's portfolio &rarr;</a>
      </div>
      <img class="about-headshot" src="/assets/headshot.jpg" alt="Brian Sweat" loading="lazy">
    </section>
    <section class="container founder-note compact">
      <h2>Work Directly with Brian.</h2>
      <a class="button primary" href="/lets-talk" data-link>Start a conversation</a>
    </section>
  `;
}

function aboutHero() {
  return `
    <section class="hero about-hero">
      <div class="hero-media" aria-hidden="true"></div>
      <div class="container hero-content">
        <p class="eyebrow">About</p>
        <h1>Founder-Led by<br>Brian Sweat.</h1>
        <p class="hero-copy">Principal engineer, founder, and builder working where product logic, software architecture, and human confidence meet.</p>
        <div class="about-hero-rule" aria-hidden="true"></div>
      </div>
    </section>
  `;
}

function letsTalkPage() {
  return `
    ${letsTalkHero()}
    ${intakeState.success ? successMessage() : intakeForm()}
    <section class="container contact-section">
      <p class="eyebrow">Contact</p>
      <div class="contact-grid">
        ${contactItems.map((item) => `
          <a class="contact-card" href="${item.href}"${item.href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}>
            <span>${item.label}</span>
            <strong>${item.value}</strong>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function letsTalkHero() {
  return `
    <section class="hero lets-talk-hero">
      <div class="hero-media" aria-hidden="true"></div>
      <div class="container hero-content">
        <p class="eyebrow">Let&#39;s Talk</p>
        <h1>What Are You Building?</h1>
        <p class="hero-copy">Share the idea, shape of the problem, what&#39;s stuck, and where the system gets complicated. I&#39;ll review and follow up.</p>
      </div>
    </section>
  `;
}

function workHero() {
  return `
    <section class="hero work-hero">
      <div class="hero-media" aria-hidden="true"></div>
      <div class="container hero-content">
        <p class="eyebrow">Work</p>
        <h1>Selected Systems</h1>
        <p class="hero-copy">Ologi is new. The pattern is not. These projects began with novel product ideas, complex business logic, manual workflows, or technical problems that did not fit an off-the-shelf answer. My role was to understand the real problem, build the right next system, and leave people more confident using it.</p>
      </div>
    </section>
  `;
}

function servicesHero() {
  return `
    <section class="hero services-hero">
      <div class="hero-media" aria-hidden="true"></div>
      <div class="container hero-content">
        <p class="eyebrow">Services</p>
        <h1>Great Software Starts With Alignment.</h1>
        <p class="hero-copy">The world has enough software that's mediocre, unfinished, or off the truth of what it was meant to be.</p>
        <p class="hero-copy">Ologi helps founders and teams bring clarity to complex problems, make confident technical decisions, and build systems that last, so you can keep moving forward.</p>
      </div>
    </section>
  `;
}

function intakeForm() {
  return `
    <form class="container intake-form" novalidate>
      <div class="honeypot" aria-hidden="true">
        <label for="companyPhone">Company phone</label>
        <input id="companyPhone" name="companyPhone" type="text" tabindex="-1" autocomplete="off">
      </div>
      ${formSection("About You", [
        textInput("name", "Name", { required: true }),
        textInput("email", "Email", { type: "email", required: true }),
        textInput("role", "Role / Title"),
      ])}
      ${formSection("About the Company", [
        textInput("company", "Company / Project Name", { required: true }),
        textInput("website", "Website or application URL", { required: true, type: "url" }),
        textAreaField("companyDescription", "What Does Your Company Do?"),
        selectField("stage", "Current Stage", intakeOptions.stage),
        textInput("signal", "Current Traffic / Usage / Revenue"),
      ])}
      ${formSection("How Can I Help?", [
        checkboxGroup("help", "Select What Applies", intakeOptions.help),
        textAreaField("buildOrFix", "What Are You Trying to Build or Fix?", { required: true }),
        textAreaField("stack", "Current Platform / Stack"),
        `<div class="form-actions full">
          <button class="button primary" type="submit">Send Project Notes</button>
          <p class="form-status" role="status" aria-live="polite"></p>
        </div>`,
      ])}
    </form>
  `;
}

function formSection(title, fields) {
  return `
    <fieldset class="form-section">
      <legend>${title}</legend>
      <div class="form-grid">${fields.join("")}</div>
    </fieldset>
  `;
}

function textInput(name, label, options = {}) {
  const value = escapeAttr(intakeState.data[name] || "");
  return fieldWrap(name, label, options.required, `
    <input id="${name}" name="${name}" type="${options.type || "text"}" value="${value}" ${options.required ? "required" : ""} aria-describedby="${name}-error">
  `);
}

function selectField(name, label, options, config = {}) {
  const value = intakeState.data[name] || "";
  return fieldWrap(name, label, config.required, `
    <select id="${name}" name="${name}" ${config.required ? "required" : ""} aria-describedby="${name}-error">
      <option value="">Select one</option>
      ${options.map((option) => `<option value="${escapeAttr(option)}" ${value === option ? "selected" : ""}>${option}</option>`).join("")}
    </select>
  `);
}

function textAreaField(name, label, options = {}) {
  const value = escapeHtml(intakeState.data[name] || "");
  return fieldWrap(name, label, options.required, `
    <textarea id="${name}" name="${name}" rows="5" ${options.required ? "required" : ""} aria-describedby="${name}-error">${value}</textarea>
  `, "full");
}

function checkboxGroup(name, label, options) {
  const selected = intakeState.data[name] || [];
  return `
    <fieldset class="field checkbox-field full">
      <legend>${label}</legend>
      <div class="checkbox-grid">
        ${options.map((option) => {
          const id = `${name}-${slug(option)}`;
          return `
            <label class="checkbox-option" for="${id}">
              <input id="${id}" name="${name}" type="checkbox" value="${escapeAttr(option)}" ${selected.includes(option) ? "checked" : ""}>
              <span>${option}</span>
            </label>
          `;
        }).join("")}
      </div>
    </fieldset>
  `;
}

function fieldWrap(name, label, required = false, control, className = "") {
  const error = intakeError(name);
  return `
    <div class="field ${className} ${error ? "has-error" : ""}">
      <label for="${name}">${label}${required ? " <span>Required</span>" : ""}</label>
      ${control}
      <p class="field-error" id="${name}-error">${error}</p>
    </div>
  `;
}

function intakeError(name) {
  if (!requiredIntakeFields.includes(name)) return "";
  if (!intakeState.submitted && !intakeState.touched[name]) return "";
  const value = intakeState.data[name];
  if (!String(value || "").trim()) return "Required field.";
  if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email.";
  return "";
}

function successMessage() {
  return `
    <section class="container success-panel" tabindex="-1">
      <p class="eyebrow">Received</p>
      <h2>Thanks &mdash; I&#39;ll Review This and Follow Up if There&#39;s a Clear Fit.</h2>
      <a class="button secondary" href="/" data-link>Return home</a>
    </section>
  `;
}

function sectionIntro(label, title, copy = "") {
  return `
    <section class="container section-heading">
      <p class="eyebrow">${label}</p>
      <h2>${title}</h2>
      ${copy ? `<p>${copy}</p>` : ""}
    </section>
  `;
}

function pageIntro(label, title, copy) {
  return `
    <section class="page-intro">
      <div class="container">
        <p class="eyebrow">${label}</p>
        <h1>${title}</h1>
        <p>${copy}</p>
      </div>
    </section>
  `;
}

function ctaRow() {
  return `
    <div class="cta-row">
      <a class="button primary" href="/lets-talk" data-link>Start a conversation</a>
      <a class="button secondary" href="/work" data-link>Explore our work</a>
    </div>
  `;
}

function serviceCard(item) {
  const icons = {
    "Product Systems": productSystemsIcon,
    "Custom Buying Flows": customBuyingFlowsIcon,
    "Commerce Logic": commerceLogicIcon,
    "Internal Tools": internalToolsIcon,
    "Fractional CTO": fractionalCtoIcon,
  };
  const icon = icons[item.title]?.() || "";
  return `
    <article class="card">
      ${icon}
      <h3>${item.title}</h3>
      <p>${item.copy}</p>
    </article>
  `;
}

function serviceSituationCard(item) {
  return `
    <article class="card service-situation-card">
      <div class="service-situation-summary">
        ${item.icon ? `<img class="service-situation-icon" src="${escapeAttr(item.icon)}" alt="" loading="lazy">` : ""}
        <h3>${item.title}</h3>
        <p>${item.copy}</p>
      </div>
      <div class="typical-work">
        <p class="eyebrow">Typical Work</p>
        <ul>
          ${item.work.map((workItem) => `<li>${workItem}</li>`).join("")}
        </ul>
      </div>
    </article>
  `;
}

function principleCard(item, index) {
  return `
    <article class="process-card">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h2>${item.title}</h2>
      <p>${item.copy}</p>
    </article>
  `;
}

function productSystemsIcon() {
  return `
    <svg class="card-icon product-systems-icon" aria-hidden="true" viewBox="0 0 1200 1200" focusable="false">
      <defs>
        <linearGradient id="product-systems-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f4f1ea"/>
          <stop offset="45%" stop-color="#9aa7ff"/>
          <stop offset="100%" stop-color="#8d92ff"/>
        </linearGradient>
      </defs>
      <path d="m418.03 57-361.03 361.03v724.97h724.97l361.03-361.03v-724.97zm688.97 708v19.031l-318 318v-674.06l330-330v667.03zm-1026 344.06v-674.06h684v684h-674.06zm354-1016.1v-12h667.03l-330 330h-674.06l318-318z"/>
      <path d="m1005.5 765h50.762v24h-50.762z"/>
      <path d="m903.93 765h50.762v24h-50.762z"/>
      <path d="m802.38 765h50.773v24h-50.773z"/>
      <path d="m497.77 765h50.762v24h-50.762z"/>
      <path d="m700.85 765h50.762v24h-50.762z"/>
      <path d="m599.3 765h50.773v24h-50.773z"/>
      <path d="m435 753h-24v19.031l-13.453 13.453 16.969 16.969 13.453-13.453h19.031v-24h-12z"/>
      <path d="m411 448.39h24v50.773h-24z"/>
      <path d="m411 346.85h24v50.762h-24z"/>
      <path d="m411 549.93h24v50.773h-24z"/>
      <path d="m411 245.3h24v50.773h-24z"/>
      <path d="m411 143.77h24v50.773h-24z"/>
      <path d="m411 651.47h24v50.762h-24z"/>
      <path d="m272.27 944.71-16.969-16.969 35.57-35.57 16.969 16.969z"/>
      <path d="m343.39 873.58-16.969-16.969 35.555-35.555 16.969 16.969z"/>
      <path d="m130.02 1087-16.969-16.969 35.562-35.562 16.969 16.969z"/>
      <path d="m201.14 1015.8-16.969-16.969 35.562-35.562 16.969 16.969z"/>
    </svg>
  `;
}


function customBuyingFlowsIcon() {
  return `
    <svg class="card-icon custom-buying-icon" aria-hidden="true" viewBox="0 0 1200 1200" focusable="false">
      <defs>
        <linearGradient id="custom-buying-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f4f1ea"/>
          <stop offset="45%" stop-color="#b4bbff"/>
          <stop offset="100%" stop-color="#8d92ff"/>
        </linearGradient>
      </defs>
      <path d="m1068.8 37.5h-937.5c-24.855 0.03125-48.684 9.918-66.258 27.492-17.574 17.574-27.461 41.402-27.492 66.258v712.5c0.03125 24.855 9.918 48.684 27.492 66.258 17.574 17.574 41.402 27.461 66.258 27.492h316.26l-14.062 112.5h-39.695c-20.098 0-38.664 10.723-48.715 28.125-10.047 17.402-10.047 38.848 0 56.25 10.051 17.402 28.617 28.125 48.715 28.125h412.5c20.098 0 38.664-10.723 48.715-28.125 10.047-17.402 10.047-38.848 0-56.25-10.051-17.402-28.617-28.125-48.715-28.125h-39.695l-14.062-112.5h316.26c24.855-0.03125 48.684-9.918 66.258-27.492 17.574-17.574 27.461-41.402 27.492-66.258v-712.5c-0.03125-24.855-9.918-48.684-27.492-66.258-17.574-17.574-41.402-27.461-66.258-27.492zm-937.5 37.5h937.5c14.918 0 29.227 5.9258 39.773 16.477 10.551 10.547 16.477 24.855 16.477 39.773v56.25h-1050v-56.25c0-14.918 5.9258-29.227 16.477-39.773 10.547-10.551 24.855-16.477 39.773-16.477zm993.75 150v525h-1050v-525zm-300 881.25c0 4.9727-1.9766 9.7422-5.4922 13.258-3.5156 3.5156-8.2852 5.4922-13.258 5.4922h-412.5c-6.6992 0-12.887-3.5742-16.238-9.375-3.3477-5.8008-3.3477-12.949 0-18.75 3.3516-5.8008 9.5391-9.375 16.238-9.375h412.5c4.9727 0 9.7422 1.9766 13.258 5.4922 3.5156 3.5156 5.4922 8.2852 5.4922 13.258zm-96.242-56.25h-257.52l14.062-112.5h229.39zm339.99-150h-937.5c-14.918 0-29.227-5.9258-39.773-16.477-10.551-10.547-16.477-24.855-16.477-39.773v-56.25h1050v56.25c0 14.918-5.9258 29.227-16.477 39.773-10.547 10.551-24.855 16.477-39.773 16.477z"/>
      <path d="m1012.5 825h37.5v37.5h-37.5z"/>
      <path d="m150 112.5h37.5v37.5h-37.5z"/>
      <path d="m225 112.5h37.5v37.5h-37.5z"/>
      <path d="m300 112.5h37.5v37.5h-37.5z"/>
      <path d="m581.25 506.25h37.5v37.5h-37.5z"/>
      <path d="m262.5 562.5h-75c-9.9453 0-19.484 3.9492-26.516 10.984-7.0352 7.0312-10.984 16.57-10.984 26.516v75c0 9.9453 3.9492 19.484 10.984 26.516 7.0312 7.0352 16.57 10.984 26.516 10.984h75c9.9453 0 19.484-3.9492 26.516-10.984 7.0352-7.0312 10.984-16.57 10.984-26.516v-18.75h18.75c4.9727 0 9.7422-1.9766 13.258-5.4922l107-107.01h69.113c5.7812 28.477 24.445 52.664 50.523 65.48 26.078 12.816 56.625 12.816 82.703 0 26.078-12.816 44.742-37.004 50.523-65.48h69.133l107.01 107.01h-0.003906c3.5117 3.5117 8.2734 5.4844 13.238 5.4922h18.75v18.75c0 9.9453 3.9492 19.484 10.984 26.516 7.0312 7.0352 16.57 10.984 26.516 10.984h75c9.9453 0 19.484-3.9492 26.516-10.984 7.0352-7.0312 10.984-16.57 10.984-26.516v-75c0-9.9453-3.9492-19.484-10.984-26.516-7.0312-7.0352-16.57-10.984-26.516-10.984h-75c-9.9453 0-19.484 3.9492-26.516 10.984-7.0352 7.0312-10.984 16.57-10.984 26.516v18.75h-10.988l-93.75-93.75 93.75-93.75h10.988v18.75c0 9.9453 3.9492 19.484 10.984 26.516 7.0312 7.0352 16.57 10.984 26.516 10.984h75c9.9453 0 19.484-3.9492 26.516-10.984 7.0352-7.0312 10.984-16.57 10.984-26.516v-75c0-9.9453-3.9492-19.484-10.984-26.516-7.0312-7.0352-16.57-10.984-26.516-10.984h-75c-9.9453 0-19.484 3.9492-26.516 10.984-7.0352 7.0312-10.984 16.57-10.984 26.516v18.75h-18.75c-4.9727 0-9.7422 1.9766-13.258 5.4922l-107 107.01h-69.113c-3.7109-18-12.613-34.52-25.609-47.516s-29.516-21.898-47.516-25.609v-58.125h75c4.9727 0 9.7422-1.9766 13.258-5.4922 3.5156-3.5156 5.4922-8.2852 5.4922-13.258v-75c0-4.9727-1.9766-9.7422-5.4922-13.258-3.5156-3.5156-8.2852-5.4922-13.258-5.4922h-187.5c-4.9727 0-9.7422 1.9766-13.258 5.4922-3.5156 3.5156-5.4922 8.2852-5.4922 13.258v75c0 4.9727 1.9766 9.7422 5.4922 13.258 3.5156 3.5156 8.2852 5.4922 13.258 5.4922h75v58.125c-18 3.7109-34.52 12.613-47.516 25.609s-21.898 29.516-25.609 47.516h-69.113l-107.01-107.01h0.003906c-3.5156-3.5156-8.2852-5.4922-13.258-5.4922h-18.75v-18.75c0-9.9453-3.9492-19.484-10.984-26.516-7.0312-7.0352-16.57-10.984-26.516-10.984h-75c-9.9453 0-19.484 3.9492-26.516 10.984-7.0352 7.0312-10.984 16.57-10.984 26.516v75c0 9.9453 3.9492 19.484 10.984 26.516 7.0312 7.0352 16.57 10.984 26.516 10.984h75c9.9453 0 19.484-3.9492 26.516-10.984 7.0352-7.0312 10.984-16.57 10.984-26.516v-18.75h10.988l93.75 93.75-93.75 93.75h-10.988v-18.75c0-9.9453-3.9492-19.484-10.984-26.516-7.0312-7.0352-16.57-10.984-26.516-10.984zm0 112.5h-75v-75h75zm675-75h75v75h-75zm0-225h75v75h-75zm-412.5-75h150v37.5h-150zm75 168.75c14.918 0 29.227 5.9258 39.773 16.477 10.551 10.547 16.477 24.855 16.477 39.773s-5.9258 29.227-16.477 39.773c-10.547 10.551-24.855 16.477-39.773 16.477s-29.227-5.9258-39.773-16.477c-10.551-10.547-16.477-24.855-16.477-39.773s5.9258-29.227 16.477-39.773c10.547-10.551 24.855-16.477 39.773-16.477zm-337.5-18.75h-75v-75h75z"/>
    </svg>
  `;
}


function commerceLogicIcon() {
  return `
    <svg class="card-icon commerce-icon" aria-hidden="true" viewBox="0 0 1200 1200" focusable="false">
      <defs>
        <linearGradient id="commerce-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f4f1ea"/>
          <stop offset="45%" stop-color="#a8d2ff"/>
          <stop offset="100%" stop-color="#8d92ff"/>
        </linearGradient>
      </defs>
      <path d="m568.5 906c-6.75 0.75-14.25 0.75-21 1.5v-360h187.5v15c0 8.25 6 15 14.25 15.75 8.25 0 15-6 15.75-14.25v-15.75h142.5c0 4.5-0.75 9.75-0.75 14.25-0.75 8.25 5.25 15.75 13.5 15.75 8.25 0.75 15.75-5.25 15.75-13.5 0.75-10.5 1.5-21 1.5-31.5 0-223.5-181.5-405-405-405s-405 180.74-405 404.26c0 223.51 181.5 405 405 405 12.75 0 26.25-0.75 39-1.5 8.25-0.75 14.25-8.25 13.5-16.5s-8.25-14.25-16.5-13.5zm-51 0c-102-13.5-183-168-187.5-358.5h187.5zm0-747v358.5h-187.5c4.5-190.5 85.5-345 187.5-358.5zm30 0c102 13.5 183 168 187.5 358.5h-187.5zm359.26 358.5h-142.5c-3-150-53.25-279-125.26-344.26 150.74 45 261.74 181.5 267.74 344.26zm-481.5-344.26c-72 65.25-122.26 194.26-125.26 344.26h-142.5c6.75-162.74 117.75-299.26 267.74-344.26zm-267 374.26h142.5c3 150 53.25 279 125.26 344.26-150.74-45-261.74-181.5-267.74-344.26z"/>
      <path d="m832.5 592.5c-132 0-240 108-240 240s108 240 240 240 240-108 240-240-108-240-240-240zm0 450c-115.5 0-210-94.5-210-210s94.5-210 210-210 210 94.5 210 210-94.5 210-210 210z"/>
      <path d="m851.26 720h-3.75v-15c0-8.25-6.75-15-15-15s-15 6.75-15 15v15h-3.75c-35.25 0-63.75 28.5-63.75 63.75s28.5 63.75 63.75 63.75h37.5c18.75 0 33.75 15 33.75 33.75s-15 33.75-33.75 33.75h-37.5c-18.75 0-33.75-15-33.75-33.75v-3.75c0-8.25-6.75-15-15-15s-15 6.75-15 15v3.75c0 35.25 28.5 63.75 63.75 63.75h3.75v15c0 8.25 6.75 15 15 15s15-6.75 15-15v-15h3.75c35.25 0 63.75-28.5 63.75-63.75s-28.5-63.75-63.75-63.75h-37.5c-18.75 0-33.75-15-33.75-33.75s15-33.75 33.75-33.75h37.5c18.75 0 33.75 15 33.75 33.75v3.75c0 8.25 6.75 15 15 15s15-6.75 15-15v-3.75c0-35.25-28.5-63.75-63.75-63.75z"/>
    </svg>
  `;
}


function internalToolsIcon() {
  return `
    <svg class="card-icon internal-tools-icon" aria-hidden="true" viewBox="0 0 1200 1200" focusable="false">
      <defs>
        <linearGradient id="internal-tools-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f4f1ea"/>
          <stop offset="45%" stop-color="#c7ccff"/>
          <stop offset="100%" stop-color="#8d92ff"/>
        </linearGradient>
      </defs>
      <path d="m160.4 677.9v-558.74c0.09375-37.312 30.281-67.5 67.594-67.547h872.86-0.046874c37.312 0 67.547 30.234 67.594 67.547v872.86c-0.046876 37.266-30.281 67.5-67.547 67.547h-626.53c-4.4531 5.2969-9.1406 10.359-14.062 15.281-51.375 51.328-122.44 77.859-194.9 72.844-72.422-5.0625-139.13-41.203-182.9-99.141-43.781-57.938-60.328-132-45.375-203.06s59.953-132.19 123.32-167.58zm721.97-528.66h181.31c3.6094 0.09375 7.125-1.2188 9.7031-3.75 2.5781-2.5312 4.0312-5.9531 4.0312-9.5625 0-3.6094-1.4531-7.0781-4.0312-9.5625-2.5781-2.5312-6.0938-3.8906-9.7031-3.75h-181.31c-7.2188 0.23437-12.938 6.0938-12.938 13.312s5.7188 13.078 12.938 13.312zm-396.19-57.188c-20.953 0-38.953 14.812-43.031 35.344-4.0781 20.484 6.8906 41.062 26.25 49.031 19.312 8.0156 41.625 1.2656 53.25-16.125 11.625-17.391 9.3281-40.594-5.4844-55.359-8.2031-8.25-19.359-12.891-30.984-12.891zm12.188 31.734c-5.8125-5.8125-14.953-6.7031-21.75-2.1094-6.8438 4.5469-9.4688 13.312-6.3281 20.906 3.1406 7.5469 11.203 11.859 19.266 10.266s13.828-8.6719 13.828-16.875c0-4.5938-1.7812-8.9531-5.0156-12.188zm-107.44-31.734c-20.953 0-38.953 14.766-43.078 35.297-4.0781 20.531 6.8906 41.062 26.203 49.078 19.359 8.0156 41.672 1.2656 53.297-16.125 11.625-17.391 9.3281-40.594-5.4844-55.359-8.2031-8.25-19.312-12.891-30.938-12.891zm12.141 31.734c-5.8125-5.8125-14.906-6.7031-21.703-2.1094-6.8438 4.5469-9.4688 13.312-6.3281 20.906 3.1406 7.5469 11.203 11.859 19.266 10.266s13.828-8.6719 13.828-16.875c0-4.5938-1.8281-8.9531-5.0625-12.188zm-107.39-31.688h0.046874c-20.906 0-38.953 14.766-43.031 35.297-4.0781 20.531 6.8906 41.062 26.25 49.078 19.312 8.0156 41.625 1.2656 53.25-16.172 11.625-17.391 9.3281-40.547-5.4844-55.359-8.2031-8.25-19.406-12.891-31.031-12.891zm12.141 31.688c-5.8125-5.8125-14.906-6.7031-21.703-2.1094-6.8438 4.5469-9.5156 13.312-6.3281 20.906 3.1406 7.5469 11.203 11.859 19.266 10.266s13.828-8.6719 13.828-16.875c0-4.5938-1.8281-8.9531-5.0625-12.188zm-202.18 635.53c21.891 9.75 44.859 17.016 68.438 21.562 4.4531 0.9375 9.0469 1.7812 13.688 2.625h-0.046875c4.0312-20.156 9.75-39.938 17.062-59.109 5.9531-15.984 13.969-31.125 23.812-45-39.609 9.7969-75.797 30.281-104.67 59.156-6.5156 6.5625-12.609 13.453-18.328 20.766zm108.42 28.031c17.578 2.1094 36.094 3.4219 55.266 3.7969v-114.7c-14.672 7.9219-28.453 28.453-39.797 57.516-6.6094 17.344-11.766 35.203-15.469 53.391zm81.938 3.7969c19.172-0.42188 37.688-1.7344 55.266-3.7969-3.7031-18.188-8.8594-36.047-15.469-53.391-11.391-29.062-25.125-49.594-39.797-57.516v114.75zm81.609-7.6875c4.6406-0.84375 9.1875-1.6875 13.641-2.625 23.625-4.5469 46.594-11.766 68.531-21.516-30.891-39.656-74.203-67.828-123-79.922 9.8438 13.875 17.906 29.016 23.859 45 7.3125 19.172 12.984 38.953 17.062 59.109zm97.266-2.0625v-0.046876c-24.938 11.719-51.234 20.297-78.328 25.5-4.6875 0.98438-9.4688 1.875-14.344 2.7188h0.046875c3.6562 24.656 5.7188 49.453 6.2344 74.344h118.22c-2.1094-36.234-12.984-71.438-31.781-102.52zm-118.97 32.156v-0.046876c-19.922 2.4375-39.938 3.8438-60 4.2656v66.141h65.906c-0.51562-23.578-2.4375-47.062-5.9062-70.406zm-86.625 4.2656v-0.046874c-20.062-0.42188-40.078-1.8281-60-4.2656-3.4219 23.344-5.3906 46.828-5.8594 70.406h65.859zm-86.297-8.2031c-4.8281-0.84375-9.6094-1.7344-14.297-2.7188v-0.046876c-27.047-5.2031-53.344-13.781-78.328-25.5-18.75 31.125-29.672 66.328-31.781 102.56h118.27c0.46875-24.891 2.5312-49.688 6.1875-74.344zm323.68 101.06h-118.22v-0.046876c-0.46875 24.891-2.5781 49.734-6.2344 74.344 4.8281 0.84375 9.6562 1.7812 14.344 2.7188 27.047 5.25 53.344 13.781 78.281 25.5 18.797-31.078 29.719-66.281 31.828-102.56zm-144.89 0-65.766-0.046876v66.141c20.062 0.42187 40.078 1.8281 59.953 4.2656 3.4688-23.297 5.4375-46.828 5.9062-70.406zm-92.531 0-65.766-0.046876c0.46875 23.578 2.4375 47.109 5.9062 70.406 19.875-2.4375 39.938-3.8438 59.953-4.2656v-66.141zm-92.484 0-118.17-0.046876c2.1094 36.281 13.031 71.484 31.828 102.56 24.938-11.719 51.234-20.25 78.281-25.5 4.6875-0.98437 9.4688-1.875 14.297-2.7188h0.046875c-3.6562-24.656-5.7188-49.453-6.1875-74.344zm119.16 92.812v114.75c14.672-7.875 28.453-28.453 39.797-57.516l0.046875-0.046874c6.6094-17.344 11.766-35.203 15.469-53.438-17.578-2.1094-36.094-3.4219-55.266-3.7969zm-26.672 114.75 0.046875-114.84c-19.172 0.42187-37.688 1.7344-55.266 3.7969 3.7031 18.188 8.8594 36.047 15.469 53.438 11.391 29.062 25.125 49.594 39.797 57.516zm190.55-82.969c-21.938-9.75-44.906-17.016-68.438-21.562-4.4531-0.9375-9-1.7812-13.641-2.5312-4.0781 20.156-9.75 39.891-17.062 59.109-5.9531 15.984-14.016 31.078-23.859 45 48.797-12.188 92.109-40.312 123-80.016zm-272.06-24.141c-4.6406 0.84375-9.1875 1.6875-13.688 2.5312l0.046875-0.046874c-23.578 4.5938-46.547 11.812-68.438 21.609 30.891 39.656 74.203 67.828 122.95 79.969-9.8438-13.875-17.859-29.016-23.859-44.953-7.2656-19.219-12.984-39-17.016-59.109zm306.28 21.844 606.84-0.046874c22.594-0.046876 40.875-18.328 40.922-40.922v-726.89h-954.71v399.94c66.281-27.281 141.1-24.891 205.55 6.5156 64.453 31.453 112.41 88.922 131.76 157.97 19.406 69 8.3438 143.06-30.375 203.39zm-235.64-499.36h244.08c7.3594 0 13.312-5.9531 13.312-13.312s-5.9531-13.312-13.312-13.312h-244.08c-7.3594 0-13.359 5.9531-13.359 13.312s6 13.312 13.359 13.312zm0-81.656 244.08 0.046875c3.6094 0.09375 7.0781-1.2656 9.7031-3.75 2.5781-2.5312 4.0312-5.9531 4.0312-9.5625s-1.4531-7.0781-4.0312-9.5625c-2.625-2.5312-6.0938-3.8906-9.7031-3.75h-244.08c-3.6094-0.14062-7.125 1.2188-9.7031 3.75-2.5781 2.4844-4.0781 5.9531-4.0781 9.5625s1.5 7.0312 4.0781 9.5625c2.5781 2.4844 6.0938 3.8438 9.7031 3.75zm0-81.609 244.08 0.046875c7.3594 0 13.312-6 13.312-13.359s-5.9531-13.312-13.312-13.312h-244.08c-7.3594 0-13.359 5.9531-13.359 13.312s6 13.359 13.359 13.359zm519.28-18.234c13.688 0.046875 25.5-9.6094 28.172-23.016 2.7188-13.406-4.4531-26.859-17.109-32.109s-27.234-0.84375-34.828 10.5c-7.5938 11.391-6.1406 26.531 3.5625 36.234 5.3438 5.3906 12.609 8.3906 20.203 8.3906zm39.141 10.453c17.766-17.766 21.281-45.281 8.625-66.938-12.656-21.703-38.344-32.109-62.531-25.406-24.188 6.75-40.828 28.922-40.453 54.047 0.32812 25.125 17.578 46.828 41.953 52.875v49.266c0 12.141 9.8438 21.938 21.938 21.984h66.938l-2.3438 2.3438h0.046875c-7.5938 7.5469-8.0625 19.688-1.0312 27.797 0.28125 0.42188 0.65625 0.79688 1.0312 1.1719l43.734 43.734c-1.5 2.7188-2.9531 5.4844-4.3594 8.2969l-124.08 0.046875-115.31-66.609c7.7812-26.766-5.625-55.125-31.219-66.188s-55.406-1.3594-69.609 22.641c-14.156 24-8.2969 54.797 13.734 71.906 22.031 17.062 53.344 15.094 73.078-4.5938l0.75-0.75 115.83 66.844 0.65625 0.42188c3.3281 1.9219 7.125 2.9531 10.969 2.9531h113.67c-1.875 5.0625-3.5156 10.219-5.0625 15.469h-61.875c-5.4375 0-10.641 2.1562-14.484 6.0469-3.8906 3.7969-6.0469 9.0469-6.0469 14.484v37.453l-127.13-0.046875c-6.75-27.094-32.625-44.906-60.375-41.531-27.703 3.375-48.562 26.953-48.562 54.891 0 27.891 20.859 51.469 48.562 54.844 27.75 3.375 53.625-14.438 60.375-41.531h127.22l-0.046875 37.5c0.046875 4.875 1.7344 9.5625 4.9219 13.219 0.32812 0.46875 0.70312 0.89062 1.125 1.2656 3.8438 3.8906 9.0469 6.0469 14.484 6.0469h61.875c1.5469 5.25 3.2344 10.406 5.0625 15.469h-113.67v-0.046875c-3.8438 0-7.6406 1.0781-10.969 3l-0.70312 0.42188-115.83 66.844-0.75-0.75h0.046875c-19.641-19.594-50.766-21.516-72.703-4.5-21.891 17.016-27.703 47.672-13.594 71.531s43.781 33.516 69.234 22.547 38.766-39.188 31.078-65.859l115.31-66.562h124.08c1.4062 2.8125 2.8594 5.5781 4.3594 8.2969l-43.734 43.734v0.046875c-7.5938 7.5469-8.0156 19.688-1.0781 27.797 0.32812 0.42188 0.70312 0.79688 1.0781 1.1719l2.3438 2.3438h-66.984c-5.8594-0.046875-11.438 2.2969-15.562 6.4219s-6.4688 9.7031-6.4688 15.562v49.266c-27.094 6.75-44.953 32.625-41.531 60.375 3.375 27.703 26.906 48.562 54.844 48.562s51.469-20.859 54.891-48.562c3.375-27.75-14.438-53.625-41.578-60.375v-44.578h88.969l42.844 42.844-0.046875-0.046875c7.5469 7.5938 19.688 8.0625 27.797 1.0781 0.42188-0.32812 0.79688-0.70312 1.1719-1.0781l43.828-43.688c15.984 8.7188 32.859 15.703 50.344 20.812v61.922c0 5.4375 2.2031 10.641 6.0469 14.484 3.8438 3.8906 9.0469 6.0469 14.484 6.0469h50.766c3.5625 0.046875 6.9375-1.3594 9.4688-3.8906 2.4844-2.4844 3.8906-5.9062 3.8906-9.4688v-122.76c0-3.5156-1.4062-6.8906-3.8906-9.4219-2.4844-2.4844-5.9062-3.8906-9.4219-3.8906-47.016 0.375-92.297-18-125.68-51.141-33.422-33.094-52.172-78.188-52.172-125.21 0-47.062 18.75-92.156 52.172-125.26 33.375-33.094 78.656-51.516 125.68-51.141 3.5156 0 6.9375-1.4062 9.4219-3.8906 2.5312-2.5312 3.8906-5.9531 3.8906-9.4688v-122.86c0-3.5156-1.4062-6.8906-3.8906-9.4219-2.4844-2.4844-5.9062-3.8906-9.4219-3.8906h-50.719c-4.875 0-9.5625 1.7344-13.266 4.9219-0.42188 0.32812-0.84375 0.70312-1.2656 1.125-3.8438 3.8438-6 9.0469-6 14.484v61.922c-17.531 5.1094-34.406 12.094-50.438 20.859l-43.734-43.734c-7.5938-7.5469-19.688-8.0156-27.797-1.0312-0.46875 0.32812-0.89062 0.65625-1.2656 1.0312l-42.797 42.797h-88.969v-44.578c9.7969-2.4375 18.703-7.5 25.781-14.625zm-219 115.92c13.688 0 25.453-9.6562 28.125-23.062s-4.5-26.812-17.156-32.062c-12.609-5.25-27.188-0.84375-34.781 10.547-7.5938 11.344-6.1406 26.531 3.5625 36.188 5.3438 5.3906 12.656 8.3906 20.25 8.3906zm200.11 468.19c-9.6562-9.6562-24.797-11.156-36.188-3.5625-11.344 7.5938-15.75 22.172-10.5 34.828 5.25 12.609 18.703 19.781 32.109 17.062 13.406-2.6719 23.016-14.438 23.016-28.125 0-7.5938-3.0469-14.859-8.4375-20.203zm-167.16-321.74c-9.6562-9.7031-24.797-11.156-36.188-3.5625-11.344 7.5938-15.75 22.172-10.547 34.781 5.25 12.656 18.656 19.828 32.062 17.156 13.453-2.6719 23.109-14.438 23.109-28.125 0-7.5938-3.0469-14.906-8.4375-20.25zm-12.656 195.32c-9.7031-9.6562-24.844-11.156-36.188-3.5625-11.391 7.6406-15.797 22.172-10.547 34.828 5.2031 12.609 18.656 19.781 32.062 17.156 13.406-2.6719 23.062-14.438 23.062-28.125 0-7.5938-3-14.906-8.3906-20.297zm485.86-377.68v-96.609h-31.312v65.953h-0.046875c0 6.0938-4.1719 11.438-10.078 12.891-21.75 5.3906-42.562 13.969-61.734 25.5-5.2969 3.5156-12.328 2.8125-16.828-1.6875l-46.688-46.594-63.141 63.141 46.641 46.641v0.046875c4.3125 4.3125 5.1094 11.016 1.9688 16.266-5.8125 9.6562-10.922 19.781-15.234 30.188-4.2188 10.172-7.6406 20.578-10.359 31.219-1.0781 6.375-6.6562 11.016-13.125 11.016h-65.953v89.297h65.953c6.1406 0 11.438 4.1719 12.938 10.125 5.3438 21.703 13.969 42.516 25.453 61.688 3.5156 5.2969 2.8594 12.328-1.6406 16.828l-46.641 46.688 63.141 63.141 46.641-46.641c4.3125-4.3125 11.062-5.1094 16.266-1.9688 19.125 11.531 39.797 20.156 61.406 25.594 6.375 1.125 11.016 6.6562 11.016 13.125v65.953h31.312l0.046875-96.609c-69.234-4.5469-131.34-44.109-164.72-104.95-33.328-60.797-33.328-134.44 0-195.28 33.375-60.797 95.484-100.36 164.72-104.91zm26.578 48.469c0-7.3594-5.9531-13.312-13.312-13.312-44.672-0.42188-87.656 17.062-119.34 48.516-31.734 31.453-49.594 74.25-49.594 118.92s17.859 87.516 49.594 118.97c31.688 31.406 74.672 48.891 119.34 48.516 3.5156 0 6.9375-1.4062 9.4219-3.8906 2.4844-2.5312 3.8906-5.9062 3.8906-9.4219zm-26.625 294.32v-280.36c-72.375 6.7969-127.64 67.5-127.64 140.21 0 72.656 55.266 133.4 127.64 140.21zm37.875-546.94v-18.188h-954.71v18.234zm0-44.859v-74.531c-0.046875-22.594-18.375-40.875-40.922-40.969h-872.86c-22.547 0.09375-40.828 18.375-40.922 40.969v74.531z" fill-rule="evenodd"/>
    </svg>
  `;
}


function fractionalCtoIcon() {
  return `
    <svg class="card-icon fractional-cto-icon" aria-hidden="true" viewBox="0 0 1200 1200" focusable="false">
      <defs>
        <linearGradient id="fractional-cto-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f4f1ea"/>
          <stop offset="45%" stop-color="#b8c0ff"/>
          <stop offset="100%" stop-color="#8d92ff"/>
        </linearGradient>
      </defs>
      <path d="m600 76.363c-138.88 0-272.07 55.168-370.27 153.37-98.203 98.199-153.37 231.39-153.37 370.27s55.168 272.07 153.37 370.27c98.199 98.203 231.39 153.37 370.27 153.37s272.07-55.168 370.27-153.37c98.203-98.199 153.37-231.39 153.37-370.27s-55.168-272.07-153.37-370.27c-98.199-98.203-231.39-153.37-370.27-153.37zm0 970.91c-118.62 0-232.39-47.125-316.27-131-83.879-83.879-131-197.64-131-316.27s47.125-232.39 131-316.27c83.879-83.879 197.64-131 316.27-131s232.39 47.125 316.27 131c83.879 83.879 131 197.64 131 316.27-0.14453 118.58-47.316 232.26-131.16 316.11s-197.53 131.02-316.11 131.16z"/>
      <path d="m600 213.55c-6.0234 0-10.91 4.8867-10.91 10.91v32.727c0 6.0273 4.8867 10.91 10.91 10.91s10.91-4.8828 10.91-10.91v-32.727c0-2.8945-1.1523-5.668-3.1953-7.7148-2.0469-2.043-4.8203-3.1953-7.7148-3.1953z"/>
      <path d="m600 931.81c-6.0234 0-10.91 4.8828-10.91 10.906v32.73c0 6.0234 4.8867 10.906 10.91 10.906s10.91-4.8828 10.91-10.906v-32.73c0-2.8906-1.1523-5.668-3.1953-7.7109-2.0469-2.0469-4.8203-3.1953-7.7148-3.1953z"/>
      <path d="m342.2 326.73c-4.2812-4.1328-11.082-4.0742-15.293 0.13281-4.207 4.207-4.2656 11.012-0.13281 15.293l23.137 23.137h0.003906c4.2812 4.1367 11.082 4.0781 15.293-0.13281 4.207-4.207 4.2656-11.012 0.13281-15.289z"/>
      <path d="m850.08 834.61c-4.2773-4.1328-11.082-4.0742-15.289 0.13281-4.2109 4.2109-4.2695 11.016-0.13281 15.293l23.137 23.148c4.2617 4.2617 11.172 4.2578 15.43-0.003906 4.2617-4.2617 4.2578-11.172-0.003906-15.43z"/>
      <path d="m257.24 589.09h-32.73c-6.0234 0-10.906 4.8867-10.906 10.91s4.8828 10.91 10.906 10.91h32.73c6.0234 0 10.906-4.8867 10.906-10.91s-4.8828-10.91-10.906-10.91z"/>
      <path d="m975.49 589.09h-32.73c-6.0234 0-10.906 4.8867-10.906 10.91s4.8828 10.91 10.906 10.91h32.73c6.0234 0 10.906-4.8867 10.906-10.91s-4.8828-10.91-10.906-10.91z"/>
      <path d="m349.91 834.61-23.141 23.141c-4.2617 4.2578-4.2656 11.168-0.003906 15.43 4.2578 4.2617 11.168 4.2656 15.43 0.003906l23.137-23.148h0.003907c2.1016-2.0312 3.3047-4.8242 3.3281-7.75 0.027344-2.9258-1.125-5.7422-3.1953-7.8086-2.0664-2.0703-4.8828-3.2227-7.8086-3.1953-2.9258 0.023438-5.7188 1.2266-7.75 3.3281z"/>
      <path d="m857.79 326.73-23.137 23.141c-2.1055 2.0312-3.3047 4.8242-3.332 7.75-0.023438 2.9258 1.125 5.7383 3.1953 7.8086 2.0703 2.0703 4.8828 3.2188 7.8086 3.1953 2.9258-0.027344 5.7188-1.2266 7.75-3.332l23.137-23.137h0.003906c4.1328-4.2812 4.0742-11.086-0.13281-15.293-4.207-4.207-11.012-4.2656-15.293-0.13281z"/>
      <path d="m644.07 540.44-14.074 14.074v-0.003907c-8.875-5.9375-19.32-9.0898-30-9.0547-14.465 0-28.34 5.75-38.57 15.977-10.227 10.23-15.977 24.105-15.977 38.57-0.046875 10.73 3.1445 21.227 9.1641 30.109l-14.074 14.074-133.3-236.95z"/>
      <path d="m792.87 792.87-236.95-133.31 14.074-14.074v0.003907c8.8828 5.9219 19.324 9.0742 30 9.0547 13.207 0 25.965-4.7891 35.91-13.48 9.9414-8.6953 16.395-20.699 18.156-33.789 1.7617-13.09-1.2852-26.375-8.5742-37.387l14.074-14.074z"/>
      <path d="m576.87 576.86c-6.1367 6.1367-9.582 14.461-9.582 23.141 0 8.6797 3.4492 17.004 9.5859 23.141s14.461 9.5859 23.141 9.5859 17.004-3.4492 23.141-9.5859 9.5859-14.461 9.5859-23.141c0-8.6797-3.4453-17.004-9.582-23.141-6.1367-6.1406-14.465-9.5898-23.145-9.5898s-17.004 3.4492-23.145 9.5898z"/>
    </svg>
  `;
}

function workCard(item) {
  return `
    <article class="work-card">
      ${item.image ? `<div class="work-card-media"><img src="${escapeAttr(item.image)}" alt="" loading="lazy" onerror="this.closest('.work-card-media').remove()"></div>` : ""}
      <div class="work-card-body">
        <div class="work-card-head">
          <h2>${item.title}</h2>
          <p>${item.role}</p>
          ${item.date ? `<p>${item.date}</p>` : ""}
        </div>
        <dl>
          <div><dt>System Type</dt><dd>${item.type}</dd></div>
          <div><dt>Link</dt><dd>${workLink(item)}</dd></div>
        </dl>
        <p>${item.copy}</p>
      </div>
    </article>
  `;
}

function workLink(item) {
  if (!item.href) return item.link;
  return `<a class="work-card-link" href="${escapeAttr(item.href)}" target="_blank" rel="noopener noreferrer">${item.link}</a>`;
}

function selectedWorkSection() {
  return `
    <section class="container section-heading section-row">
      <div>
        <p class="eyebrow">Selected work</p>
        <h2>Ologi Is New. The Pattern Is Not.</h2>
      </div>
      <a class="text-link" href="/work" data-link>View all work</a>
    </section>
    <section class="container work-grid">${work.slice(0, 3).map(workCard).join("")}</section>
  `;
}

function engagementsSection(includeHeading = true) {
  return `
    ${includeHeading ? sectionIntro("Engagement Models", "Focused Ways to Create Momentum.") : ""}
    <section class="container card-grid three-up">
      ${engagements.map((item) => `
        <article class="card engagement-card">
          <p class="price">${item.price}</p>
          <h3>${item.title}</h3>
          <p>${item.copy}</p>
        </article>
      `).join("")}
    </section>
    <p class="container note">Equity can be discussed only alongside meaningful cash compensation.</p>
  `;
}

function finalCta() {
  return `
    <section class="container final-cta">
      <p class="eyebrow">Start here</p>
      <h2>Have a Product System That Needs Senior Technical Ownership?</h2>
      <a class="button primary" href="/lets-talk" data-link>Start a conversation</a>
    </section>
  `;
}

function workCta() {
  return `
    <section class="container final-cta">
      <p class="eyebrow">Start Here</p>
      <h2>Have a Hard Product or System Problem?</h2>
      <p>If the work is novel, messy, difficult to explain, or impossible to fit into an off-the-shelf tool, that is probably where I can help.</p>
      <a class="button primary" href="/lets-talk" data-link>Let’s Talk</a>
    </section>
  `;
}

function servicesConfidenceCta() {
  return `
    <section class="container final-cta services-confidence">
      <p class="eyebrow">Start Here</p>
      <h2>You Don't Need More Code. You Need Confidence.</h2>
      <p>Let's create the right thing, in the right way, so you can keep building long after I'm gone.</p>
      <a class="button primary" href="/lets-talk" data-link>Let's Start a Conversation</a>
    </section>
  `;
}

function render() {
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const page = routes[pathname] || notFoundPage;
  document.title = routeTitles[pathname] || "Ologi | Page Not Found";
  document.querySelector("#app").innerHTML = shell(page());
  bindNavigation();
  bindIntakeForm();
}

function notFoundPage() {
  return pageIntro("Not Found", "This Page Does Not Exist.", "Use the navigation to return to Ologi.");
}


function bindNavigation() {
  document.querySelectorAll("[data-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const url = new URL(link.href);
      if (url.origin !== window.location.origin) return;
      event.preventDefault();
      window.history.pushState({}, "", url.pathname);
      render();
      window.scrollTo(0, 0);
    });
  });

  const toggle = document.querySelector(".nav-toggle");
  const navEl = document.querySelector(".site-nav");
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    navEl.classList.toggle("is-open", !isOpen);
  });
}

function bindIntakeForm() {
  const form = document.querySelector(".intake-form");
  if (!form) return;

  form.addEventListener("input", (event) => {
    const field = event.target;
    if (!field.name) return;

    if (field.type === "checkbox") {
      const values = [...form.querySelectorAll(`input[name="${field.name}"]:checked`)].map((input) => input.value);
      intakeState.data[field.name] = values;
    } else {
      intakeState.data[field.name] = field.value;
    }
  });

  form.addEventListener("blur", (event) => {
    const field = event.target;
    if (!field.name) return;
    updateIntakeField(form, field);
    intakeState.touched[field.name] = true;
    showFieldError(field.name);
  }, true);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    syncIntakeForm(form);
    intakeState.submitted = true;

    const hasErrors = requiredIntakeFields.some((field) => intakeError(field));
    if (hasErrors) {
      render();
      document.querySelector(".has-error input, .has-error select, .has-error textarea")?.focus();
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const status = form.querySelector(".form-status");
    const payload = {
      ...intakeState.data,
    };

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    form.setAttribute("aria-busy", "true");
    status.textContent = "";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Your project notes could not be sent.");
      }

      intakeState = {
        data: { ...intakeInitialData },
        touched: {},
        submitted: false,
        success: true,
      };
      render();
      document.querySelector(".success-panel")?.focus();
    } catch (error) {
      status.textContent = error.message || "Your project notes could not be sent. Please email hello@ologi.io directly.";
      submitButton.disabled = false;
      submitButton.textContent = "Send Project Notes";
      form.removeAttribute("aria-busy");
    }
  });
}

function updateIntakeField(form, field) {
  if (field.type === "checkbox") {
    intakeState.data[field.name] = [...form.querySelectorAll(`input[name="${field.name}"]:checked`)].map((input) => input.value);
    return;
  }

  intakeState.data[field.name] = field.value;
}

function syncIntakeForm(form) {
  form.querySelectorAll("input, select, textarea").forEach((field) => {
    if (field.name) updateIntakeField(form, field);
  });
}

function showFieldError(name) {
  const message = intakeError(name);
  const errorEl = document.querySelector(`#${name}-error`);
  const control = document.querySelector(`#${name}`);
  const field = control?.closest(".field");

  if (errorEl) errorEl.textContent = message;
  if (field) field.classList.toggle("has-error", Boolean(message));
  if (control) control.setAttribute("aria-invalid", String(Boolean(message)));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

window.addEventListener("popstate", render);
render();
