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
    "footer.tag": "Premium technology partner for scalable digital growth.",
    "footer.contactTitle": "Address",
    "footer.address1": "C1 - F1 - SF3520",
    "footer.address2": "Ajman Free Zone",
    "footer.address3": "United Arab Emirates",

    "service.back": "← Back to services",
    "service.faq": "FAQ",

    "swd.h1": "Web Development",
    "swd.lead": "Inspired by high-converting agency service pages: clear value proposition, process transparency, and business outcomes.",
    "swd.k1t": "Fast", "swd.k1d": "Performance-first architecture and clean code.",
    "swd.k2t": "Scalable", "swd.k2d": "Built to grow with your product and traffic.",
    "swd.k3t": "Conversion-focused", "swd.k3d": "UX/UI designed to turn visits into leads.",
    "swd.c1t": "What we build", "swd.c1l1": "Corporate websites and premium landing pages", "swd.c1l2": "Custom web apps and internal portals", "swd.c1l3": "E-commerce storefronts and conversion funnels", "swd.c1l4": "CMS implementations and content workflows",
    "swd.c2t": "Our process", "swd.c2l1": "Discovery: goals, audience, positioning", "swd.c2l2": "UX/UI: wireframes, design system, prototypes", "swd.c2l3": "Build: production-ready frontend/backend", "swd.c2l4": "Launch: QA, analytics, optimization loop",
    "swd.c3t": "Deliverables", "swd.c3l1": "Responsive pages (mobile/tablet/desktop)", "swd.c3l2": "SEO-ready structure + technical fundamentals", "swd.c3l3": "Speed optimization (Core Web Vitals)", "swd.c3l4": "Documentation and handover support",
    "swd.f1q": "How long does a typical project take?", "swd.f1a": "Usually 2 to 8 weeks depending on scope and number of pages/features.",
    "swd.f2q": "Can you redesign an existing website?", "swd.f2a": "Yes. We can modernize visuals, improve speed, and keep your SEO foundations.",
    "swd.f3q": "Do you provide ongoing support?", "swd.f3a": "Yes, with optional maintenance and optimization plans after launch.",
    "swd.cta": "Discuss your web project",

    "sai.h1": "Automation & AI",
    "sai.lead": "Structured like top automation consulting pages: practical use-cases, clear implementation phases, and measurable ROI.",
    "sai.k1t": "Less manual work", "sai.k1d": "Automate repetitive operations end-to-end.",
    "sai.k2t": "Faster decisions", "sai.k2d": "AI-assisted workflows and data enrichment.",
    "sai.k3t": "Lower cost", "sai.k3d": "Reduce operational friction and human error.",
    "sai.c1t": "Where we automate", "sai.c1l1": "Lead capture, qualification, and CRM sync", "sai.c1l2": "Customer support triage and response drafting", "sai.c1l3": "Ops workflows: approvals, notifications, reporting", "sai.c1l4": "Content and social publishing pipelines",
    "sai.c2t": "Implementation flow", "sai.c2l1": "Audit: map bottlenecks and quick wins", "sai.c2l2": "Design: architecture and guardrails", "sai.c2l3": "Deploy: integrations + AI prompts/tools", "sai.c2l4": "Optimize: monitor quality and iterate",
    "sai.c3t": "What you get", "sai.c3l1": "Production workflows with observability", "sai.c3l2": "Fail-safe logic and human-in-the-loop controls", "sai.c3l3": "Standard operating docs + team onboarding", "sai.c3l4": "KPI dashboard for impact tracking",
    "sai.f1q": "Do we need to replace existing tools?", "sai.f1a": "No. We usually integrate with your current stack first, then improve progressively.",
    "sai.f2q": "How do you handle quality and safety?", "sai.f2a": "With validation layers, fallback paths, and clear escalation to humans when needed.",
    "sai.f3q": "How soon can we see impact?", "sai.f3a": "Quick-win workflows can be delivered in days; broader programs in 2–6 weeks.",
    "sai.cta": "Plan your automation roadmap",

    "stc.h1": "Technical Consulting",
    "stc.lead": "Modeled after strong consulting pages: strategic clarity, risk reduction, and execution-ready recommendations.",
    "stc.k1t": "Clear roadmap", "stc.k1d": "Prioritized actions tied to business outcomes.",
    "stc.k2t": "Risk control", "stc.k2d": "Architecture, performance, and security perspective.",
    "stc.k3t": "Execution support", "stc.k3d": "Hands-on guidance from plan to rollout.",
    "stc.c1t": "Consulting areas", "stc.c1l1": "Architecture review and modernization planning", "stc.c1l2": "Infrastructure and cloud optimization", "stc.c1l3": "Delivery process and team workflow improvements", "stc.c1l4": "Security/performance baseline recommendations",
    "stc.c2t": "Engagement model", "stc.c2l1": "Discovery workshop: context + constraints", "stc.c2l2": "Assessment: current-state technical audit", "stc.c2l3": "Roadmap: phased improvements with priorities", "stc.c2l4": "Follow-through: advisory during execution",
    "stc.c3t": "Typical outcomes", "stc.c3l1": "Stronger reliability and system performance", "stc.c3l2": "Reduced technical debt and rework", "stc.c3l3": "Better decision-making on tools and architecture", "stc.c3l4": "Faster, more predictable delivery cycles",
    "stc.f1q": "Is this only for large companies?", "stc.f1a": "No. We adapt scope for startups, SMEs, and enterprise teams.",
    "stc.f2q": "Do you provide implementation too?", "stc.f2a": "Yes. We can stay advisory-only or support implementation with your team.",
    "stc.f3q": "What does a first engagement look like?", "stc.f3a": "A focused audit + recommendation package with a practical next-steps roadmap.",
    "stc.cta": "Book a technical assessment"
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
    "footer.tag": "Partenaire technologique premium pour une croissance digitale durable.",
    "footer.contactTitle": "Adresse",
    "footer.address1": "C1 - F1 - SF3520",
    "footer.address2": "Ajman Free Zone",
    "footer.address3": "Émirats arabes unis",

    "service.back": "← Retour aux services",
    "service.faq": "FAQ",

    "swd.h1": "Développement Web",
    "swd.lead": "Inspiré des meilleures pages services: proposition de valeur claire, process transparent et résultats business.",
    "swd.k1t": "Rapide", "swd.k1d": "Architecture orientée performance et code propre.",
    "swd.k2t": "Scalable", "swd.k2d": "Conçu pour évoluer avec votre produit et votre trafic.",
    "swd.k3t": "Orienté conversion", "swd.k3d": "UX/UI pensé pour transformer les visites en leads.",
    "swd.c1t": "Ce que nous développons", "swd.c1l1": "Sites corporate et landing pages premium", "swd.c1l2": "Applications web sur mesure et portails internes", "swd.c1l3": "E-commerce et tunnels de conversion", "swd.c1l4": "Implémentation CMS et workflows de contenu",
    "swd.c2t": "Notre méthode", "swd.c2l1": "Discovery: objectifs, audience, positionnement", "swd.c2l2": "UX/UI: wireframes, design system, prototypes", "swd.c2l3": "Build: frontend/backend prêt pour la production", "swd.c2l4": "Launch: QA, analytics, boucle d'optimisation",
    "swd.c3t": "Livrables", "swd.c3l1": "Pages responsive (mobile/tablette/desktop)", "swd.c3l2": "Structure SEO-ready + fondations techniques", "swd.c3l3": "Optimisation vitesse (Core Web Vitals)", "swd.c3l4": "Documentation et support de passation",
    "swd.f1q": "Combien de temps dure un projet type ?", "swd.f1a": "Généralement 2 à 8 semaines selon le périmètre et le volume.",
    "swd.f2q": "Pouvez-vous refondre un site existant ?", "swd.f2a": "Oui. Nous modernisons le design, améliorons la vitesse et conservons les bases SEO.",
    "swd.f3q": "Proposez-vous un support continu ?", "swd.f3a": "Oui, avec des options de maintenance et d'optimisation après le lancement.",
    "swd.cta": "Discuter de votre projet web",

    "sai.h1": "Automatisation & IA",
    "sai.lead": "Structuré comme les meilleures pages de conseil en automation: cas d'usage concrets, phases claires et ROI mesurable.",
    "sai.k1t": "Moins de tâches manuelles", "sai.k1d": "Automatisation de bout en bout des opérations répétitives.",
    "sai.k2t": "Décisions plus rapides", "sai.k2d": "Workflows assistés par l'IA et enrichissement des données.",
    "sai.k3t": "Coûts réduits", "sai.k3d": "Moins de friction opérationnelle et d'erreurs humaines.",
    "sai.c1t": "Où nous automatisons", "sai.c1l1": "Capture de leads, qualification et synchronisation CRM", "sai.c1l2": "Triage du support client et brouillons de réponse", "sai.c1l3": "Workflows ops: validations, notifications, reporting", "sai.c1l4": "Pipelines de contenu et publication sociale",
    "sai.c2t": "Flow d'implémentation", "sai.c2l1": "Audit: cartographie des frictions et quick wins", "sai.c2l2": "Design: architecture et garde-fous", "sai.c2l3": "Deploy: intégrations + prompts/outils IA", "sai.c2l4": "Optimize: suivi qualité et itérations",
    "sai.c3t": "Ce que vous obtenez", "sai.c3l1": "Workflows de production avec observabilité", "sai.c3l2": "Logique fail-safe et contrôle humain", "sai.c3l3": "Documentation opérationnelle + onboarding", "sai.c3l4": "Dashboard KPI pour suivre l'impact",
    "sai.f1q": "Faut-il remplacer nos outils actuels ?", "sai.f1a": "Non. Nous intégrons d'abord votre stack existante puis nous améliorons progressivement.",
    "sai.f2q": "Comment gérez-vous la qualité et la sécurité ?", "sai.f2a": "Avec des couches de validation, des plans de fallback et une escalade claire vers l'humain.",
    "sai.f3q": "Quand voit-on les premiers résultats ?", "sai.f3a": "Les quick wins peuvent sortir en quelques jours; les programmes plus larges en 2 à 6 semaines.",
    "sai.cta": "Planifier votre roadmap d'automatisation",

    "stc.h1": "Conseil Technique",
    "stc.lead": "Inspiré des meilleures pages de consulting: clarté stratégique, réduction des risques et recommandations actionnables.",
    "stc.k1t": "Roadmap claire", "stc.k1d": "Actions priorisées liées aux résultats business.",
    "stc.k2t": "Maîtrise des risques", "stc.k2d": "Vision architecture, performance et sécurité.",
    "stc.k3t": "Support d'exécution", "stc.k3d": "Accompagnement concret du plan au déploiement.",
    "stc.c1t": "Domaines de conseil", "stc.c1l1": "Revue d'architecture et plan de modernisation", "stc.c1l2": "Optimisation infrastructure et cloud", "stc.c1l3": "Amélioration des process delivery et d'équipe", "stc.c1l4": "Recommandations sécurité/performance",
    "stc.c2t": "Modèle d'engagement", "stc.c2l1": "Atelier discovery: contexte + contraintes", "stc.c2l2": "Assessment: audit technique de l'existant", "stc.c2l3": "Roadmap: améliorations par phases et priorités", "stc.c2l4": "Follow-through: accompagnement pendant l'exécution",
    "stc.c3t": "Résultats typiques", "stc.c3l1": "Meilleure fiabilité et performance système", "stc.c3l2": "Réduction de la dette technique et des reworks", "stc.c3l3": "Meilleures décisions outils/architecture", "stc.c3l4": "Cycles de livraison plus rapides et prévisibles",
    "stc.f1q": "Est-ce réservé aux grandes entreprises ?", "stc.f1a": "Non. Nous adaptons le scope aux startups, PME et grandes structures.",
    "stc.f2q": "Faites-vous aussi l'implémentation ?", "stc.f2a": "Oui. Nous pouvons rester en advisory ou accompagner l'exécution avec votre équipe.",
    "stc.f3q": "À quoi ressemble une première mission ?", "stc.f3a": "Un audit ciblé + recommandations et roadmap concrète des prochaines étapes.",
    "stc.cta": "Réserver un diagnostic technique"
  },
  ar: {
    "nav.services": "الخدمات", "nav.about": "من نحن", "nav.why": "لماذا نحن", "nav.contact": "تواصل",
    "hero.kicker": "شريك التحول الرقمي الموثوق", "hero.title": "حلول تقنية حديثة للمؤسسات الطموحة",
    "hero.text": "نصمّم ونطوّر ونحسّن المنتجات الرقمية وفق معايير احترافية وتنفيذ عملي عالي الجودة.",
    "hero.cta1": "ابدأ مشروعك", "hero.cta2": "استكشف الخدمات", "hero.cardTitle": "نركّز على النتائج",
    "hero.card1": "استراتيجية واضحة", "hero.card2": "تنفيذ سريع", "hero.card3": "تسليم موثوق",
    "services.title": "الخدمات", "services.s1t": "تطوير الويب", "services.s1d": "مواقع ومنصات عالية الأداء ومهيأة للتحويل.",
    "services.s2t": "الأتمتة والذكاء الاصطناعي", "services.s2d": "مسارات عمل ذكية لتقليل العمل اليدوي ورفع الكفاءة.",
    "services.s3t": "الاستشارات التقنية", "services.s3d": "هندسة معمارية وتحسين وإرشاد استراتيجي للنمو.",
    "about.title": "حول Izerfan Technologies", "about.text": "نجمع بين فهم الأعمال والتميز الهندسي لبناء منتجات رقمية أنيقة وقابلة للتوسع وسهلة الصيانة.",
    "about.m1t": "رسالتنا", "about.m1d": "مساعدة الشركات على تحويل الأفكار إلى تجارب رقمية موثوقة وذات أثر ملموس.",
    "about.m2t": "طريقة عملنا", "about.m2d": "نحافظ على البساطة: نطاق واضح، تواصل شفاف، وتنفيذ عالي الجودة.",
    "about.m3t": "ما الذي تحصل عليه", "about.m3d": "أساس ويب حديث وسريع وقابل للصيانة وجاهز للتوسع.",
    "why.title": "لماذا نحن", "why.w1t": "جودة متميزة", "why.w1d": "تنفيذ نظيف، واجهات حديثة، ومعايير تقنية قوية.",
    "why.w2t": "عملية بسيطة", "why.w2d": "تواصل واضح، مراحل محددة، وتسليم شفاف.",
    "why.w3t": "قيمة طويلة الأمد", "why.w3d": "مبني ليتطور مع أعمالك واحتياجاتك المستقبلية.",
    "contact.title": "تواصل معنا", "contact.text": "شاركنا أهدافك وسنقترح لك الخطوة الأنسب للانطلاق.", "contact.cta": "ابدأ التواصل",
    "footer.tag": "شريك تقني موثوق لنمو رقمي مستدام وقابل للتوسع.",
    "footer.contactTitle": "العنوان",
    "footer.address1": "C1 - F1 - SF3520",
    "footer.address2": "منطقة عجمان الحرة",
    "footer.address3": "الإمارات العربية المتحدة",

    "service.back": "العودة إلى الخدمات ←",
    "service.faq": "الأسئلة الشائعة",

    "swd.h1": "تطوير الويب",
    "swd.lead": "نطوّر مواقع ومنصات رقمية تركّز على الأداء، تجربة المستخدم، وتحقيق نتائج أعمال ملموسة.",
    "swd.k1t": "سريع", "swd.k1d": "هندسة تركز على الأداء وكود نظيف.",
    "swd.k2t": "قابل للتوسع", "swd.k2d": "مصمم لينمو مع منتجك وحجم الزيارات.",
    "swd.k3t": "موجّه للتحويل", "swd.k3d": "تجربة وواجهة مستخدم لتحويل الزيارات إلى فرص.",
    "swd.c1t": "ماذا نبني", "swd.c1l1": "مواقع شركات وصفحات هبوط احترافية", "swd.c1l2": "تطبيقات ويب مخصصة وبوابات داخلية", "swd.c1l3": "متاجر إلكترونية ومسارات تحويل", "swd.c1l4": "تنفيذ CMS وسير عمل المحتوى",
    "swd.c2t": "آلية العمل", "swd.c2l1": "الاستكشاف: الأهداف والجمهور والتموضع", "swd.c2l2": "UX/UI: وايرفريم، نظام تصميم، نماذج أولية", "swd.c2l3": "البناء: واجهات وخلفية جاهزة للإنتاج", "swd.c2l4": "الإطلاق: اختبار جودة، تحليلات، وتحسين مستمر",
    "swd.c3t": "المخرجات", "swd.c3l1": "صفحات متجاوبة (جوال/لوحي/سطح مكتب)", "swd.c3l2": "هيكل جاهز لمحركات البحث + أساس تقني", "swd.c3l3": "تحسين السرعة (Core Web Vitals)", "swd.c3l4": "توثيق ودعم التسليم",
    "swd.f1q": "كم يستغرق المشروع عادة؟", "swd.f1a": "عادة من 2 إلى 8 أسابيع حسب النطاق وعدد الصفحات/الميزات.",
    "swd.f2q": "هل يمكنكم إعادة تصميم موقع قائم؟", "swd.f2a": "نعم. نحدث الشكل، نحسن السرعة، ونحافظ على أساس SEO.",
    "swd.f3q": "هل تقدمون دعماً مستمراً؟", "swd.f3a": "نعم، مع خطط صيانة وتحسين اختيارية بعد الإطلاق.",
    "swd.cta": "ناقش مشروعك الرقمي",

    "sai.h1": "الأتمتة والذكاء الاصطناعي",
    "sai.lead": "نساعدك على أتمتة العمليات وتوظيف الذكاء الاصطناعي عبر حالات استخدام عملية ومراحل تنفيذ واضحة وعائد قابل للقياس.",
    "sai.k1t": "عمل يدوي أقل", "sai.k1d": "أتمتة العمليات المتكررة من البداية للنهاية.",
    "sai.k2t": "قرارات أسرع", "sai.k2d": "مسارات عمل مدعومة بالذكاء الاصطناعي وإثراء البيانات.",
    "sai.k3t": "تكلفة أقل", "sai.k3d": "تقليل الاحتكاك التشغيلي والأخطاء البشرية.",
    "sai.c1t": "مجالات الأتمتة", "sai.c1l1": "التقاط العملاء المحتملين وتأهيلهم وربطهم مع CRM", "sai.c1l2": "فرز دعم العملاء وصياغة الردود", "sai.c1l3": "عمليات داخلية: موافقات، إشعارات، تقارير", "sai.c1l4": "مسارات محتوى ونشر اجتماعي",
    "sai.c2t": "مراحل التنفيذ", "sai.c2l1": "التدقيق: تحديد نقاط الاختناق والفرص السريعة", "sai.c2l2": "التصميم: المعمارية وضوابط الجودة", "sai.c2l3": "التنفيذ: التكاملات + أدوات/برومبتات الذكاء", "sai.c2l4": "التحسين: مراقبة الجودة والتطوير المستمر",
    "sai.c3t": "ما الذي تحصل عليه", "sai.c3l1": "مسارات تشغيل جاهزة مع قابلية المراقبة", "sai.c3l2": "منطق أمان وتحكم بشري", "sai.c3l3": "توثيق تشغيلي + تدريب الفريق", "sai.c3l4": "لوحة مؤشرات KPI لقياس الأثر",
    "sai.f1q": "هل نحتاج لتغيير أدواتنا الحالية؟", "sai.f1a": "لا. نبدأ بالتكامل مع بيئتك الحالية ثم نحسن تدريجياً.",
    "sai.f2q": "كيف تديرون الجودة والسلامة؟", "sai.f2a": "بطبقات تحقق، مسارات بديلة، وتصعيد واضح للعنصر البشري عند الحاجة.",
    "sai.f3q": "متى تظهر النتائج؟", "sai.f3a": "النتائج السريعة خلال أيام، والبرامج الأكبر خلال 2–6 أسابيع.",
    "sai.cta": "خطط لخارطة طريق الأتمتة",

    "stc.h1": "الاستشارات التقنية",
    "stc.lead": "نقدّم استشارات تقنية تمنحك وضوحاً استراتيجياً، وتقلّل المخاطر، وتحوّل القرارات إلى خطط تنفيذ واقعية.",
    "stc.k1t": "خارطة طريق واضحة", "stc.k1d": "أولويات مرتبطة مباشرة بنتائج الأعمال.",
    "stc.k2t": "إدارة المخاطر", "stc.k2d": "رؤية شاملة للمعمارية والأداء والأمن.",
    "stc.k3t": "دعم التنفيذ", "stc.k3d": "إرشاد عملي من التخطيط حتى الإطلاق.",
    "stc.c1t": "مجالات الاستشارة", "stc.c1l1": "مراجعة المعمارية وخطة التحديث", "stc.c1l2": "تحسين البنية التحتية والسحابة", "stc.c1l3": "تحسين عمليات التسليم وعمل الفريق", "stc.c1l4": "توصيات الأمن والأداء",
    "stc.c2t": "نموذج التعاون", "stc.c2l1": "ورشة استكشاف: السياق والقيود", "stc.c2l2": "تقييم: تدقيق تقني للوضع الحالي", "stc.c2l3": "خارطة طريق: تحسينات مرحلية بأولويات واضحة", "stc.c2l4": "متابعة التنفيذ: دعم استشاري أثناء التطبيق",
    "stc.c3t": "نتائج متوقعة", "stc.c3l1": "موثوقية وأداء أعلى للأنظمة", "stc.c3l2": "تقليل الدين التقني وإعادة العمل", "stc.c3l3": "قرارات أفضل في الأدوات والمعمارية", "stc.c3l4": "دورات تسليم أسرع وأكثر قابلية للتنبؤ",
    "stc.f1q": "هل الخدمة مخصصة للشركات الكبيرة فقط؟", "stc.f1a": "لا. نكيّف النطاق للشركات الناشئة والصغيرة والمتوسطة والكبيرة.",
    "stc.f2q": "هل تقدمون التنفيذ أيضاً؟", "stc.f2a": "نعم. يمكننا الاكتفاء بالاستشارة أو دعم التنفيذ مع فريقك.",
    "stc.f3q": "كيف تبدو أول مهمة؟", "stc.f3a": "تدقيق مركز + توصيات عملية + خارطة خطوات واضحة.",
    "stc.cta": "احجز تقييماً تقنياً"
  }
};

let lang = "en";
const langOrder = ["en", "fr", "ar"];

const renderLangOptions = () => {
  const langBtn = document.getElementById("lang-toggle");
  if (!langBtn) return;

  // Current language shown on the main button
  langBtn.textContent = lang.toUpperCase();
  langBtn.setAttribute("aria-label", `Current language: ${lang.toUpperCase()}`);

  const parent = langBtn.parentElement;
  if (!parent) return;

  let optionsWrap = document.getElementById("lang-options");
  if (!optionsWrap) {
    optionsWrap = document.createElement("div");
    optionsWrap.id = "lang-options";
    optionsWrap.className = "lang-options";
    parent.appendChild(optionsWrap);
  }

  optionsWrap.innerHTML = "";
  const others = langOrder.filter((x) => x !== lang);
  others.forEach((code) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "btn btn-secondary lang-option-btn";
    b.textContent = code.toUpperCase();
    b.setAttribute("aria-label", `Switch language to ${code.toUpperCase()}`);
    b.addEventListener("click", () => setLang(code));
    optionsWrap.appendChild(b);
  });
};

const setLang = (l) => {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", l === "ar");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[l] && dict[l][key]) el.textContent = dict[l][key];
  });

  renderLangOptions();
  localStorage.setItem("izerfan-lang", l);
};

const langBtn = document.getElementById("lang-toggle");
if (langBtn) {
  langBtn.addEventListener("click", () => {
    // Keep current language button informational only.
  });
}
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
setLang(localStorage.getItem("izerfan-lang") || "en");
