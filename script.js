const dict = {
  en: {
    "nav.services": "Services", "nav.about": "About", "nav.why": "Why Us", "nav.contact": "Contact",
    "hero.kicker": "Premium Digital Partner", "hero.title": "Modern Technology Solutions for Ambitious Businesses",
    "hero.text": "We design, build, and optimize digital products with a premium standard and practical execution.",
    "hero.cta1": "Start Your Project", "hero.cta2": "Explore Services", "hero.cardTitle": "Focused on outcomes",
    "hero.card1": "Clear strategy", "hero.card2": "Fast implementation", "hero.card3": "Reliable delivery",
    "services.title": "Services", "services.s1t": "Web Development", "services.s1d": "High-performance websites and platforms optimized for conversion.",
    "services.s2t": "Automation & AI", "services.s2d": "Smart workflows to reduce manual work and boost efficiency.",
    "services.s3t": "Technical Consulting", "services.s3d": "Architecture, optimization, and strategic guidance for growth.",
    "about.title": "About Izerfan Technologies", "about.text": "We combine business understanding with engineering quality to ship digital products that are elegant, scalable, and maintainable.",
    "about.m1t": "Our Mission", "about.m1d": "Help companies turn ideas into reliable digital experiences with measurable impact.",
    "about.m2t": "How We Work", "about.m2d": "We keep things simple: clear scope, transparent communication, and high-quality execution.",
    "about.m3t": "What You Get", "about.m3d": "A modern website or product foundation that is fast, maintainable, and ready to scale.",
    "why.title": "Why Us", "why.w1t": "Premium Quality", "why.w1d": "Clean execution, modern UI, and strong technical standards.",
    "why.w2t": "Simple Process", "why.w2d": "Clear communication, milestones, and transparent delivery.",
    "why.w3t": "Long-term Value", "why.w3d": "Built to scale with your business and future needs.",
    "contact.title": "Contact", "contact.text": "Tell us about your goals and we’ll propose the best next step.", "contact.cta": "Contact Us",
    "footer.tag": "Premium technology partner for scalable digital growth."
  },
  fr: {
    "nav.services": "Services", "nav.about": "À propos", "nav.why": "Pourquoi nous", "nav.contact": "Contact",
    "hero.kicker": "Partenaire Digital Premium", "hero.title": "Solutions technologiques modernes pour les entreprises ambitieuses",
    "hero.text": "Nous concevons, développons et optimisons des produits digitaux avec un standard premium et une exécution pragmatique.",
    "hero.cta1": "Démarrer votre projet", "hero.cta2": "Découvrir les services", "hero.cardTitle": "Orienté résultats",
    "hero.card1": "Stratégie claire", "hero.card2": "Mise en œuvre rapide", "hero.card3": "Livraison fiable",
    "services.title": "Services", "services.s1t": "Développement Web", "services.s1d": "Sites et plateformes performants optimisés pour la conversion.",
    "services.s2t": "Automatisation & IA", "services.s2d": "Workflows intelligents pour réduire le travail manuel et gagner en efficacité.",
    "services.s3t": "Conseil Technique", "services.s3d": "Architecture, optimisation et accompagnement stratégique pour la croissance.",
    "about.title": "À propos d’Izerfan Technologies", "about.text": "Nous combinons vision business et qualité d’ingénierie pour livrer des produits élégants, scalables et maintenables.",
    "about.m1t": "Notre mission", "about.m1d": "Aider les entreprises à transformer leurs idées en expériences digitales fiables et mesurables.",
    "about.m2t": "Notre méthode", "about.m2d": "Nous restons simples: périmètre clair, communication transparente et exécution de qualité.",
    "about.m3t": "Ce que vous obtenez", "about.m3d": "Une base web moderne, rapide, maintenable et prête à évoluer.",
    "why.title": "Pourquoi nous", "why.w1t": "Qualité Premium", "why.w1d": "Exécution propre, interface moderne et standards techniques solides.",
    "why.w2t": "Processus simple", "why.w2d": "Communication claire, jalons et livraison transparente.",
    "why.w3t": "Valeur durable", "why.w3d": "Conçu pour évoluer avec votre business et vos besoins futurs.",
    "contact.title": "Contact", "contact.text": "Parlez-nous de vos objectifs et nous proposerons la meilleure suite.", "contact.cta": "Nous contacter",
    "footer.tag": "Partenaire technologique premium pour une croissance digitale durable."
  }
};

let lang = "en";
const setLang = (l) => {
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[l][key]) el.textContent = dict[l][key];
  });
  document.getElementById("lang-toggle").textContent = l === "en" ? "FR" : "EN";
};

document.getElementById("lang-toggle").addEventListener("click", () => setLang(lang === "en" ? "fr" : "en"));
document.getElementById("year").textContent = new Date().getFullYear();

const themeToggle = document.getElementById("theme-toggle");
const applyTheme = (theme) => {
  const dark = theme === "dark";
  document.body.classList.toggle("dark", dark);
  if (themeToggle) {
    themeToggle.textContent = dark ? "☀" : "◐";
    themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }
  localStorage.setItem("izerfan-theme", dark ? "dark" : "light");
};

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    applyTheme(document.body.classList.contains("dark") ? "light" : "dark");
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

applyTheme(localStorage.getItem("izerfan-theme") || "light");
setLang("en");
