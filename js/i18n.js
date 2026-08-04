/* ==========================================================================
   CABRIO PRO — i18n.js
   Cambio de idioma instantáneo (sin recarga) para EN / ES / RU.
   --------------------------------------------------------------------------
   Uso en el HTML:
     data-i18n="clave"              -> reemplaza textContent
     data-i18n-html="clave"         -> reemplaza innerHTML (permite <em>, <br>)
     data-i18n-placeholder="clave"  -> reemplaza el placeholder
     data-i18n-content="clave"      -> reemplaza content (meta tags)
     data-i18n-aria="clave"         -> reemplaza aria-label
     data-i18n-href="clave"         -> reemplaza href (p. ej. mensaje WhatsApp)
   Idioma por defecto: inglés (EN).
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     1. DICCIONARIO
     Nota para el cliente: las cifras de la sección de estadísticas y el plazo
     de garantía son editables en index.html (atributo data-count) y aquí.
     ------------------------------------------------------------------------ */
  const DICT = {

    /* ====================== INGLÉS (idioma por defecto) ==================== */
    en: {
      "ttl.home": "Convertible Roof Repair in Alicante | Coches Benejúzar",
      "ttl.services": "Cabrio Services: Roofs, Hydraulics, Electrics | Coches Benejúzar",
      "ttl.about": "About us — cabrio specialists since 2015 | Coches Benejúzar",
      "ttl.contact": "Contact & workshop in Benejúzar | Coches Benejúzar",
      "ttl.legal": "Legal notice | Coches Benejúzar",
      "ttl.privacy": "Privacy policy | Coches Benejúzar",
      "ttl.cookies": "Cookie policy | Coches Benejúzar",
      "desc.home": "Convertible roof specialists in Benejúzar, Alicante. Soft top repair and replacement, hydraulics, electrics and cabrio upholstery. Over 10 years in the Vega Baja.",
      "desc.services": "Soft top replacement, hydraulic cylinders and pumps, electrical diagnostics and cabrio interior upholstery. Workshop in Benejúzar, Alicante.",
      "desc.about": "Coches Benejúzar has been repairing convertible roofs in the Vega Baja since 2015. Trust, superior quality and one-to-one attention.",
      "desc.contact": "Avenida del Segura 3, Benejúzar (Alicante). Phone +34 693 461 811. Opening hours, map and quick quote for your convertible.",
      "desc.legal": "Legal notice of cabriopro.es under Spanish LSSI-CE.",
      "desc.privacy": "How Coches Benejúzar handles personal data under GDPR and LOPDGDD.",
      "desc.cookies": "Which cookies cabriopro.es uses and how to manage them.",

      "brand.sub": "Cabrio Specialists",
      "nav.services": "Services",
      "nav.about": "About us",
      "nav.gallery": "Work",
      "nav.process": "Process",
      "nav.contact": "Contact",
      "nav.quote": "Get a quote",
      "nav.menu": "Open menu",
      "nav.lang": "Choose language",
      "skip": "Skip to content",

      "hero.eyebrow": "Benejúzar · Alicante · Convertibles",
      "hero.l1": "Your roof",
      "hero.l2": "opens again.",
      "hero.l3": "<em>Guaranteed.</em>",
      "hero.text": "We repair and replace soft tops, hydraulic mechanisms and cabrio electrics. One workshop and over ten years of it in the Vega Baja.",
      "hero.cta1": "Get a quote",
      "hero.cta2": "See what we fix",
      "hero.m1": "Since 2015",
      "hero.m2": "Fabric, vinyl & hard tops",
      "hero.m3": "EN · ES · RU spoken",
      "hero.scroll": "Scroll",

      "mech.title": "Roof kinematics",
      "mech.sub": "Linkage + hydraulic cycle",
      "mech.label": "Drag to fold the roof",
      "mech.open": "Roof up",
      "mech.stowed": "Stowed",
      "mech.cyl": "Hydraulic cylinder",
      "mech.bow": "Front bow",
      "mech.deck": "Tonneau well",
      "mech.caption": "Every one of these joints, seals and sensors is a point we diagnose.",

      "marquee": "Audi A3 & A5 Cabriolet · BMW 3 & 4 Series · Mercedes SLK & CLK · MINI Cabrio · Mazda MX-5 · Peugeot 206 CC & 307 CC · Porsche Boxster · Renault Mégane CC · Saab 9-3 · VW Golf & Eos · Ford StreetKa · Opel Astra TwinTop",

      "svc.eyebrow": "What we do",
      "svc.title": "Four disciplines. One roof.",
      "svc.lead": "A convertible fails as a system: fabric, mechanism, hydraulics and electronics all pull on each other. We work on all four so nothing gets passed on to another workshop.",
      "svc1.t": "Soft tops & covers",
      "svc1.d": "Repair or full replacement of fabric, vinyl and hard tops, with seams and tension set to factory geometry.",
      "svc1.li1": "Tears, seams and worn corners",
      "svc1.li2": "Rear window replacement",
      "svc1.li3": "Seals and water testing",
      "svc2.t": "Mechanism & hydraulics",
      "svc2.d": "Cylinders, pumps and hoses: we find the leak, restore pressure and reset the folding sequence.",
      "svc2.li1": "Leaking or seized cylinders",
      "svc2.li2": "Pump and fluid service",
      "svc2.li3": "Linkage alignment",
      "svc3.t": "Electrics & diagnostics",
      "svc3.d": "Microswitches, sensors, control units and wiring looms — the usual reason a roof stops halfway.",
      "svc3.li1": "Fault code reading",
      "svc3.li2": "Sensor and switch replacement",
      "svc3.li3": "Loom and motor repair",
      "svc4.t": "Cabrio upholstery",
      "svc4.d": "Interior trim restored to match the new roof: headlining, panels, seats and tonneau covers.",
      "svc4.li1": "Headlining and trim",
      "svc4.li2": "Seat and panel re-covering",
      "svc4.li3": "Tonneau and boot covers",
      "svc.more": "Read the detail",

      "about.eyebrow": "Who is behind it",
      "about.title": "A workshop that says yes to convertibles.",
      "about.p1": "Coches Benejúzar opened in the Vega Baja in 2015. Since then the work has widened rather than narrowed: today the roof is the whole job. That focus is why a car that three garages have already looked at usually leaves here fixed.",
      "about.p2": "The mechanic receives every vehicle personally, explains what the roof is actually doing and quotes before any part is ordered. Trust, superior quality and attention one owner at a time — in English, Spanish or Russian.",
      "about.cta": "Our story",
      "about.badge.n": "10+",
      "about.badge.t": "years on cabrios in the Vega Baja",
      "stat1": "Years on convertibles",
      "stat2": "Cabrio disciplines in-house",
      "stat3": "Languages we work in",
      "stat4": "Months of warranty",

      "proc.eyebrow": "How a repair runs",
      "proc.title": "Four stages, in this order.",
      "proc.lead": "Nothing is ordered and nothing is opened up before you have seen the price. Most jobs are finished within the same week.",
      "proc.s1.t": "Diagnosis",
      "proc.s1.d": "We run the roof through a full cycle, read the fault memory and pressure-test the circuit. You get the real cause, not a guess.",
      "proc.s2.t": "Quote",
      "proc.s2.d": "A written, itemised price with the material options — original fabric, vinyl or equivalent — and a delivery date.",
      "proc.s3.t": "Work",
      "proc.s3.d": "Mechanism, hydraulics or fabric fitted in-house. New roofs are tensioned and left to settle before the water test.",
      "proc.s4.t": "Handover",
      "proc.s4.d": "We cycle the roof with you, test it in front of you and hand over the warranty and care instructions.",

      "gal.eyebrow": "Recent work",
      "gal.title": "No leaks. Just a reliable roof.",
      "gal.lead": "A selection from the workshop. Tap any image to see it full size.",
      "gal.f1": "All",
      "gal.f2": "Soft tops",
      "gal.f3": "Mechanism",
      "gal.f4": "Interior",
      // "gal.c1": "Fabric roof replaced",
      // "gal.c2": "Cylinder reseal",
      // "gal.c3": "Rear window renewed",
      // "gal.c4": "Headlining restored",
      // "gal.c5": "Pump and hose service",
      // "gal.c6": "Seam and corner repair",
      // "gal.c7": "Sensor diagnosis",
      // "gal.c8": "Seats re-covered",
      "gal.close": "Close",
      "gal.prev": "Previous image",
      "gal.next": "Next image",

      "ct.eyebrow": "Talk to us",
      "ct.title": "Tell us the model and what the roof does.",
      "ct.lead": "That is usually enough for us to give you a range over the phone. Send a photo or a video on WhatsApp and it gets faster still.",
      "ct.k.addr": "Workshop",
      "ct.k.phone": "Phone & WhatsApp",
      "ct.k.mail": "Email",
      "ct.k.hours": "Opening hours",
      "ct.v.hours": "Monday – Friday 9:30–14:00 / 15:00–19:00, Summer Schedule 8:00–16:00",
      "ct.k.person": "Ask for",
      "ct.f.name": "Name",
      "ct.f.name.ph": "Your name",
      "ct.f.phone": "Phone",
      "ct.f.phone.ph": "+34 ...",
      "ct.f.mail": "Email",
      "ct.f.mail.ph": "you@email.com",
      "ct.f.car": "Car make and model",
      "ct.f.car.ph": "e.g. Mazda MX-5 2008",
      "ct.f.topic": "What do you need?",
      "ct.f.o1": "Soft top repair or replacement",
      "ct.f.o2": "Mechanism or hydraulics",
      "ct.f.o3": "Electrics or diagnostics",
      "ct.f.o4": "Upholstery and interior",
      "ct.f.o5": "Something else",
      "ct.f.msg": "What is the roof doing?",
      "ct.f.msg.ph": "It stops halfway and the pump keeps running...",
      "ct.f.consent": "I have read the <a href=\"politica-privacidad.html\">privacy policy</a> and agree to be contacted about this enquiry.",
      "ct.f.send": "Send enquiry",
      "ct.f.note": "We reply the same working day. Nothing is shared with third parties.",
      "ct.f.ok": "Thanks — your enquiry is ready to send from your email app.",
      "ct.call": "Call +34 693 461 811",
      "ct.wa": "Message on WhatsApp",
      "ct.map": "Map of the workshop in Benejúzar",

      "cta.title": "Roof stuck, torn or leaking?",
      "cta.text": "Send us a photo today and get a price range before you drive anywhere.",
      "cta.btn": "Message on WhatsApp",

      "foot.about": "Convertible roof specialists in Benejúzar, Alicante. Repair, replacement and maintenance of soft tops, mechanisms and cabrio interiors.",
      "foot.nav": "Navigate",
      "foot.svc": "Services",
      "foot.contact": "Contact",
      "foot.legal": "Legal",
      "foot.legal1": "Legal notice",
      "foot.legal2": "Privacy policy",
      "foot.legal3": "Cookie policy",
      "foot.rights": "All rights reserved.",
      "foot.built": "Workshop of Coches Benejúzar · Vega Baja, Alicante",

      "wa.tip": "Write to us on WhatsApp",
      "wa.aria": "Open a WhatsApp chat with Coches Benejúzar",
      "wa.url": "https://wa.me/34693461811?text=Hello%2C%20I%20have%20a%20question%20about%20my%20convertible%20roof.%20My%20car%20is%3A%20",

      "ck.title": "Cookies, briefly",
      "ck.text": "We use our own cookies to keep the site working and to remember your language. Nothing is used for advertising. See the <a href=\"politica-cookies.html\">cookie policy</a>.",
      "ck.accept": "Accept",
      "ck.reject": "Only essential",

      /* --- servicios.html --- */
      "sv.h1": "Everything a convertible roof can need.",
      "sv.lead": "Four workshop disciplines under one roof, so a single fault never turns into three appointments.",
      "sv.d1.tag": "Fabric & covers",
      "sv.d1.t": "Soft top repair and replacement",
      "sv.d1.p": "Most roofs arrive with the same story: water on the carpet, a tear at a corner, a rear window gone cloudy. We assess whether the cover can be repaired or whether replacement is the honest answer, and we say which one it is before you commit.",
      "sv.d1.s1": "Original-pattern fabric, vinyl or hard top covers",
      "sv.d1.s2": "Rear window replacement, including heated glass",
      "sv.d1.s3": "Seam, corner and tension repairs",
      "sv.d1.s4": "Seal renewal and a full water test on handover",
      "sv.d2.tag": "Mechanism",
      "sv.d2.t": "Hydraulics: cylinders, pumps, hoses",
      "sv.d2.p": "A roof that stops halfway, drops slowly overnight or moves out of sequence is almost always hydraulic. We pressure-test the circuit, locate the leak, and rebuild or replace the affected part rather than swapping the whole assembly on principle.",
      "sv.d2.s1": "Leaking, seized or scored cylinders",
      "sv.d2.s2": "Pump, reservoir and fluid service",
      "sv.d2.s3": "Hose and fitting replacement",
      "sv.d2.s4": "Linkage alignment and sequence reset",
      "sv.d3.tag": "Electronics",
      "sv.d3.t": "Electrical diagnostics and control units",
      "sv.d3.p": "Convertibles refuse to move for safety reasons more often than for mechanical ones: a microswitch that no longer confirms the boot is shut, a latch sensor, a tired motor. We read the memory, test the loom and fix the circuit itself.",
      "sv.d3.s1": "Fault code reading and live testing",
      "sv.d3.s2": "Microswitches, latch and position sensors",
      "sv.d3.s3": "Motor, relay and control unit repair",
      "sv.d3.s4": "Wiring loom repair at the folding points",
      "sv.d4.tag": "Interior",
      "sv.d4.t": "Cabrio upholstery and restoration",
      "sv.d4.p": "Sun and water age a convertible interior faster than any other car. We restore what the roof has been letting in: headlining, panels, seats and the covers that make the car look finished again.",
      "sv.d4.s1": "Headlining and interior trim",
      "sv.d4.s2": "Seat and panel re-covering in leather or fabric",
      "sv.d4.s3": "Tonneau covers and boot linings",
      "sv.d4.s4": "Carpet drying and odour treatment after leaks",
      "sv.faq": "Frequently asked",
      "sv.q1": "How long does a roof replacement take?",
      "sv.a1": "A standard soft top replacement is usually a one to two day job once the material is here. Hydraulic or electrical faults are quoted after diagnosis, and many are solved the same day.",
      "sv.q2": "Do you work on hard tops and coupé-cabriolets?",
      "sv.a2": "Yes. Retractable hard tops share the same hydraulics, sensors and seals as fabric roofs, and they are a regular part of our work.",
      "sv.q3": "Can you come to the car?",
      "sv.a3": "Diagnosis and fitting need the workshop, but send a photo or a short video on WhatsApp first and we will tell you whether the car is safe to drive over.",
      "sv.q4": "What warranty do I get?",
      "sv.a4": "Parts and labour are covered for 12 months. Keep the invoice — that is all the warranty needs.",

      /* --- nosotros.html --- */
      "us.h1": "Ten years, one part of the car.",
      "us.lead": "How a general workshop in the Vega Baja became the place people are sent when nobody else will touch the roof.",
      "us.s1.tag": "2015 — the beginning",
      "us.s1.t": "It all began with vehicles that required a special approach.",
      "us.s1.p1": "Coches Benejúzar specializes in convertible roof repairs and complex systems related to them. It is not only about materials and mechanics, but also about accurate diagnostics: hydraulics, electronics, sensors, and folding mechanisms.",
      "us.s1.p2": "We take on repairs that many workshops prefer not to handle. For us, every roof is a system that needs to be understood, properly restored, and returned to reliable operation.",
      "us.s2.tag": "Today",
      "us.s2.t": "One speciality, done properly",
      "us.s2.p1": "Today the workshop handles fabric, mechanism, hydraulics, electronics and interior in-house. Nothing gets subcontracted, which is why the price you are quoted is the price you pay and why nobody can blame the other trade when something is not right.",
      "us.s2.p2": "The mechanic receives every car personally. If your Spanish is easier in English or Russian, that is not a problem here.",
      "us.v.t": "What we hold ourselves to",
      "us.v1.t": "Trust",
      "us.v1.d": "A written quote before work starts, and a call before anything changes. No surprises on the invoice.",
      "us.v2.t": "Superior quality",
      "us.v2.d": "Original-pattern materials, factory tension and geometry, and a water test in front of you before you leave.",
      "us.v3.t": "Attention one at a time",
      "us.v3.d": "The person who diagnoses your roof is the person who hands it back and explains what was done.",
      "us.cta.t": "Come and see the workshop.",
      "us.cta.p": "Avenida del Segura 3, Benejúzar. Call ahead and we will keep a bay free.",

      /* --- contacto.html --- */
      "ct.h1": "Benejúzar, Alicante.",
      "ct.h1lead": "Twenty minutes from Torrevieja and Orihuela, a straight run from the AP-7. Park in front of the workshop.",
      "ct.quick": "Fastest route to a price",
      "ct.quick.p": "Send a photo of the roof, the make and model, and what happens when you press the button. We usually reply with a range within the hour during opening times.",

      /* --- páginas legales --- */
      "lg.h1": "Legal notice",
      "lg.lead": "Information required under Spanish Law 34/2002 (LSSI-CE).",
      "pv.h1": "Privacy policy",
      "pv.lead": "How we collect, use and protect personal data under the GDPR and LOPDGDD.",
      "ck.h1": "Cookie policy",
      "ck.lead": "What cabriopro.es stores in your browser, and how to remove it.",
      "lg.note": "This page contains placeholders marked [ ]. Replace them with the registered tax details before publishing."
    },

    /* ============================== ESPAÑOL =============================== */
    es: {
      "ttl.home": "Reparación de capotas de cabrio en Alicante | Coches Benejúzar",
      "ttl.services": "Servicios cabrio: capotas, hidráulica y electrónica | Coches Benejúzar",
      "ttl.about": "Sobre nosotros — especialistas en cabrio desde 2015 | Coches Benejúzar",
      "ttl.contact": "Contacto y taller en Benejúzar | Coches Benejúzar",
      "ttl.legal": "Aviso legal | Coches Benejúzar",
      "ttl.privacy": "Política de privacidad | Coches Benejúzar",
      "ttl.cookies": "Política de cookies | Coches Benejúzar",
      "desc.home": "Especialistas en capotas de descapotable en Benejúzar, Alicante. Reparación y sustitución de capotas, hidráulica, electrónica y tapicería cabrio. Más de 10 años en la Vega Baja.",
      "desc.services": "Sustitución de capotas, cilindros y bombas hidráulicas, diagnóstico eléctrico y tapicería interior cabrio. Taller en Benejúzar, Alicante.",
      "desc.about": "Coches Benejúzar repara capotas de descapotable en la Vega Baja desde 2015. Confianza, calidad superior y atención personalizada.",
      "desc.contact": "Avenida del Segura 3, Benejúzar (Alicante). Teléfono +34 693 461 811. Horario, mapa y presupuesto rápido para tu descapotable.",
      "desc.legal": "Aviso legal de cabriopro.es conforme a la LSSI-CE.",
      "desc.privacy": "Cómo trata Coches Benejúzar los datos personales según el RGPD y la LOPDGDD.",
      "desc.cookies": "Qué cookies utiliza cabriopro.es y cómo gestionarlas.",

      "brand.sub": "Especialistas Cabrio",
      "nav.services": "Servicios",
      "nav.about": "Nosotros",
      "nav.gallery": "Trabajos",
      "nav.process": "Proceso",
      "nav.contact": "Contacto",
      "nav.quote": "Pedir presupuesto",
      "nav.menu": "Abrir menú",
      "nav.lang": "Elegir idioma",
      "skip": "Ir al contenido",

      "hero.eyebrow": "Benejúzar · Alicante · descapotables",
      "hero.l1": "Tu capota",
      "hero.l2": "vuelve a abrir.",
      "hero.l3": "<em>Con garantía.</em>",
      "hero.text": "Reparamos y sustituimos capotas, mecanismos hidráulicos y electrónica de cabrio. Un taller y más de diez años haciéndola en la Vega Baja.",
      "hero.cta1": "Pedir presupuesto",
      "hero.cta2": "Ver qué reparamos",
      "hero.m1": "Desde 2015",
      "hero.m2": "Lona, vinilo y techos rígidos",
      "hero.m3": "Atención en ES · EN · RU",
      "hero.scroll": "Desliza",

      "mech.title": "Cinemática de la capota",
      "mech.sub": "Varillaje + ciclo hidráulico",
      "mech.label": "Arrastra para plegar la capota",
      "mech.open": "Capota subida",
      "mech.stowed": "Plegada",
      "mech.cyl": "Cilindro hidráulico",
      "mech.bow": "Arco delantero",
      "mech.deck": "Alojamiento",
      "mech.caption": "Cada articulación, junta y sensor de este esquema es un punto que diagnosticamos.",

      "marquee": "Audi A3 y A5 Cabriolet · BMW Serie 3 y 4 · Mercedes SLK y CLK · MINI Cabrio · Mazda MX-5 · Peugeot 206 CC y 307 CC · Porsche Boxster · Renault Mégane CC · Saab 9-3 · VW Golf y Eos · Ford StreetKa · Opel Astra TwinTop",

      "svc.eyebrow": "Qué hacemos",
      "svc.title": "Cuatro disciplinas. Una capota.",
      "svc.lead": "Un descapotable falla como sistema: lona, mecanismo, hidráulica y electrónica se arrastran entre sí. Trabajamos las cuatro para que nada acabe derivado a otro taller.",
      "svc1.t": "Capotas y cubiertas",
      "svc1.d": "Reparación o sustitución completa de capotas de lona, vinilo y techos rígidos, con costuras y tensión ajustadas a la geometría de fábrica.",
      "svc1.li1": "Roturas, costuras y esquinas gastadas",
      "svc1.li2": "Sustitución de la luneta trasera",
      "svc1.li3": "Juntas y prueba de estanqueidad",
      "svc2.t": "Mecanismo e hidráulica",
      "svc2.d": "Cilindros, bombas y mangueras: localizamos la fuga, recuperamos presión y reajustamos la secuencia de plegado.",
      "svc2.li1": "Cilindros con fuga o agarrotados",
      "svc2.li2": "Mantenimiento de bomba y líquido",
      "svc2.li3": "Alineación del varillaje",
      "svc3.t": "Electricidad y diagnosis",
      "svc3.d": "Microrruptores, sensores, centralitas y cableado: la razón habitual de que una capota se pare a medio camino.",
      "svc3.li1": "Lectura de códigos de avería",
      "svc3.li2": "Cambio de sensores y finales de carrera",
      "svc3.li3": "Reparación de mazos y motores",
      "svc4.t": "Tapicería cabrio",
      "svc4.d": "Interior restaurado a la altura de la capota nueva: guarnecidos, paneles, asientos y fundas.",
      "svc4.li1": "Guarnecido de techo y molduras",
      "svc4.li2": "Retapizado de asientos y paneles",
      "svc4.li3": "Fundas de capota y maletero",
      "svc.more": "Ver el detalle",

      "about.eyebrow": "Quién está detrás",
      "about.title": "Un taller que dice que sí a los descapotables.",
      "about.p1": "Coches Benejúzar abrió en la Vega Baja en 2015. Desde entonces el trabajo se ha ampliado en lugar de estrecharse: hoy la capota es el trabajo entero. Ese foco es la razón de que un coche que ya han mirado en tres talleres suela salir de aquí resuelto.",
      "about.p2": "El mecánico recibe cada vehículo en persona, explica qué está haciendo realmente la capota y presupuesta antes de pedir ninguna pieza. Confianza, calidad superior y atención de uno en uno, en español, inglés o ruso.",
      "about.cta": "Nuestra historia",
      "about.badge.n": "10+",
      "about.badge.t": "años con cabrios en la Vega Baja",
      "stat1": "Años con descapotables",
      "stat2": "Disciplinas cabrio propias",
      "stat3": "Idiomas de atención",
      "stat4": "Meses de garantía",

      "proc.eyebrow": "Cómo va una reparación",
      "proc.title": "Cuatro fases, en este orden.",
      "proc.lead": "No se pide ninguna pieza ni se desmonta nada antes de que veas el precio. La mayoría de trabajos se entregan en la misma semana.",
      "proc.s1.t": "Diagnóstico",
      "proc.s1.d": "Hacemos un ciclo completo de capota, leemos la memoria de averías y comprobamos la presión del circuito. Te damos la causa real, no una suposición.",
      "proc.s2.t": "Presupuesto",
      "proc.s2.d": "Precio escrito y desglosado con las opciones de material —lona original, vinilo o equivalente— y una fecha de entrega.",
      "proc.s3.t": "Intervención",
      "proc.s3.d": "Mecanismo, hidráulica o lona, todo en el taller. Las capotas nuevas se tensan y se dejan asentar antes de la prueba.",
      "proc.s4.t": "Entrega",
      "proc.s4.d": "Accionamos la capota contigo, la probamos delante de ti y entregamos garantía e instrucciones de mantenimiento.",

      "gal.eyebrow": "Trabajos recientes",
      "gal.title": "Sin fugas. Solo una capota en la que puedes confiar.",
      "gal.lead": "Una selección del taller. Toca cualquier imagen para verla a tamaño completo.",
      "gal.f1": "Todo",
      "gal.f2": "Capotas",
      "gal.f3": "Mecanismo",
      "gal.f4": "Interior",
      // "gal.c1": "Capota de lona sustituida",
      // "gal.c2": "Cilindro reparado",
      // "gal.c3": "Luneta trasera nueva",
      // "gal.c4": "Guarnecido restaurado",
      // "gal.c5": "Bomba y mangueras",
      // "gal.c6": "Costura y esquina",
      // "gal.c7": "Diagnóstico de sensor",
      // "gal.c8": "Asientos retapizados",
      "gal.close": "Cerrar",
      "gal.prev": "Imagen anterior",
      "gal.next": "Imagen siguiente",

      "ct.eyebrow": "Hablemos",
      "ct.title": "Dinos el modelo y qué hace la capota.",
      "ct.lead": "Con eso solemos poder darte una horquilla de precio por teléfono. Si mandas foto o vídeo por WhatsApp, aún más rápido.",
      "ct.k.addr": "Taller",
      "ct.k.phone": "Teléfono y WhatsApp",
      "ct.k.mail": "Correo",
      "ct.k.hours": "Horario",
      "ct.v.hours": "Lunes – Viernes 9:30–14:00 / 15:00–19:00, Horario de Verano 8:00–16:00",
      "ct.k.person": "Pregunta por",
      "ct.f.name": "Nombre",
      "ct.f.name.ph": "Tu nombre",
      "ct.f.phone": "Teléfono",
      "ct.f.phone.ph": "+34 ...",
      "ct.f.mail": "Correo",
      "ct.f.mail.ph": "tucorreo@email.com",
      "ct.f.car": "Marca y modelo",
      "ct.f.car.ph": "p. ej. Mazda MX-5 2008",
      "ct.f.topic": "¿Qué necesitas?",
      "ct.f.o1": "Reparar o sustituir la capota",
      "ct.f.o2": "Mecanismo o hidráulica",
      "ct.f.o3": "Electricidad o diagnosis",
      "ct.f.o4": "Tapicería e interior",
      "ct.f.o5": "Otra cosa",
      "ct.f.msg": "¿Qué hace la capota?",
      "ct.f.msg.ph": "Se para a medio camino y la bomba sigue funcionando...",
      "ct.f.consent": "He leído la <a href=\"politica-privacidad.html\">política de privacidad</a> y acepto que me contactéis por esta consulta.",
      "ct.f.send": "Enviar consulta",
      "ct.f.note": "Respondemos el mismo día laborable. No cedemos datos a terceros.",
      "ct.f.ok": "Gracias: tu consulta está lista para enviarse desde tu aplicación de correo.",
      "ct.call": "Llamar al 693 461 811",
      "ct.wa": "Escribir por WhatsApp",
      "ct.map": "Mapa del taller en Benejúzar",

      "cta.title": "¿Capota atascada, rota o con goteras?",
      "cta.text": "Mándanos una foto hoy y ten una horquilla de precio antes de mover el coche.",
      "cta.btn": "Escribir por WhatsApp",

      "foot.about": "Especialistas en capotas de descapotable en Benejúzar, Alicante. Reparación, sustitución y mantenimiento de capotas, mecanismos e interiores cabrio.",
      "foot.nav": "Navegación",
      "foot.svc": "Servicios",
      "foot.contact": "Contacto",
      "foot.legal": "Legal",
      "foot.legal1": "Aviso legal",
      "foot.legal2": "Política de privacidad",
      "foot.legal3": "Política de cookies",
      "foot.rights": "Todos los derechos reservados.",
      "foot.built": "Taller de Coches Benejúzar · Vega Baja, Alicante",

      "wa.tip": "Escríbenos por WhatsApp",
      "wa.aria": "Abrir chat de WhatsApp con Coches Benejúzar",
      "wa.url": "https://wa.me/34693461811?text=Hola%2C%20tengo%20una%20consulta%20sobre%20la%20capota%20de%20mi%20descapotable.%20Mi%20coche%20es%3A%20",

      "ck.title": "Cookies, en corto",
      "ck.text": "Usamos cookies propias para que la web funcione y para recordar tu idioma. Ninguna se usa para publicidad. Consulta la <a href=\"politica-cookies.html\">política de cookies</a>.",
      "ck.accept": "Aceptar",
      "ck.reject": "Solo esenciales",

      "sv.h1": "Todo lo que puede necesitar una capota.",
      "sv.lead": "Cuatro disciplinas de taller bajo el mismo techo, para que una sola avería no se convierta en tres citas.",
      "sv.d1.tag": "Lona y cubiertas",
      "sv.d1.t": "Reparación y sustitución de capotas",
      "sv.d1.p": "Casi todas las capotas llegan con la misma historia: agua en la moqueta, un desgarro en una esquina, una luneta que ya no deja ver. Valoramos si la cubierta se puede reparar o si lo honesto es sustituirla, y te decimos cuál de las dos es antes de que te comprometas.",
      "sv.d1.s1": "Lona de patrón original, vinilo o cubiertas rígidas",
      "sv.d1.s2": "Cambio de luneta trasera, incluida la térmica",
      "sv.d1.s3": "Reparación de costuras, esquinas y tensión",
      "sv.d1.s4": "Renovación de juntas y prueba en la entrega",
      "sv.d2.tag": "Mecanismo",
      "sv.d2.t": "Hidráulica: cilindros, bombas, mangueras",
      "sv.d2.p": "Una capota que se para a medio camino, que baja sola por la noche o que se mueve fuera de secuencia es casi siempre un problema hidráulico. Comprobamos la presión del circuito, localizamos la fuga y reparamos o sustituimos la pieza afectada en lugar de cambiar el conjunto por sistema.",
      "sv.d2.s1": "Cilindros con fuga, agarrotados o rayados",
      "sv.d2.s2": "Mantenimiento de bomba, depósito y líquido",
      "sv.d2.s3": "Sustitución de mangueras y racores",
      "sv.d2.s4": "Alineación del varillaje y reinicio de secuencia",
      "sv.d3.tag": "Electrónica",
      "sv.d3.t": "Diagnóstico eléctrico y centralitas",
      "sv.d3.p": "Un descapotable se niega a moverse por seguridad más veces que por mecánica: un microrruptor que ya no confirma que el maletero está cerrado, un sensor de cierre, un motor cansado. Leemos la memoria, comprobamos el mazo y reparamos el circuito.",
      "sv.d3.s1": "Lectura de códigos y comprobación en directo",
      "sv.d3.s2": "Microrruptores y sensores de posición y cierre",
      "sv.d3.s3": "Reparación de motores, relés y centralitas",
      "sv.d3.s4": "Reparación de cableado en los puntos de plegado",
      "sv.d4.tag": "Interior",
      "sv.d4.t": "Tapicería y restauración cabrio",
      "sv.d4.p": "El sol y el agua envejecen el interior de un descapotable más deprisa que el de cualquier otro coche. Restauramos lo que la capota ha estado dejando entrar: guarnecidos, paneles, asientos y las fundas que devuelven al coche su aspecto acabado.",
      "sv.d4.s1": "Guarnecido de techo y molduras interiores",
      "sv.d4.s2": "Retapizado de asientos y paneles en piel o tela",
      "sv.d4.s3": "Fundas de capota y forros de maletero",
      "sv.d4.s4": "Secado de moqueta y tratamiento de olores tras filtraciones",
      "sv.faq": "Preguntas frecuentes",
      "sv.q1": "¿Cuánto tarda una capota nueva?",
      "sv.a1": "Una sustitución estándar suele ser trabajo de uno o dos días desde que el material está aquí. Las averías hidráulicas o eléctricas se presupuestan tras el diagnóstico y muchas se resuelven el mismo día.",
      "sv.q2": "¿Trabajáis techos rígidos y coupé-cabrio?",
      "sv.a2": "Sí. Los techos rígidos retráctiles comparten hidráulica, sensores y juntas con las capotas de lona y forman parte habitual de nuestro trabajo.",
      "sv.q3": "¿Podéis desplazaros hasta el coche?",
      "sv.a3": "El diagnóstico y el montaje necesitan taller, pero mándanos antes una foto o un vídeo corto por WhatsApp y te decimos si el coche puede venir conduciendo con seguridad.",
      "sv.q4": "¿Qué garantía tengo?",
      "sv.a4": "Piezas y mano de obra quedan cubiertas 12 meses. Guarda la factura: no hace falta nada más.",

      "us.h1": "Diez años en una sola parte del coche.",
      "us.lead": "Cómo un taller de la Vega Baja acabó siendo el sitio al que mandan a la gente cuando nadie más quiere tocar la capota.",
      "us.s1.tag": "2015 — el principio",
      "us.s1.t": "Todo comenzó con vehículos que requerían un enfoque especial.",
      "us.s1.p1": "Coches Benejúzar está especializado en la reparación de capotas de cabrio y sistemas complejos relacionados con ellas. Aquí no solo importan los materiales y la mecánica, sino también un diagnóstico preciso: sistemas hidráulicos, electrónica, sensores y mecanismos de plegado.",
      "us.s1.p2": "Trabajamos en reparaciones que muchos talleres prefieren no asumir. Para nosotros, cada capota es un sistema que debe entenderse, repararse correctamente y devolver a un funcionamiento fiable.",
      "us.s2.tag": "Hoy",
      "us.s2.t": "Una especialidad, bien hecha",
      "us.s2.p1": "Hoy el taller resuelve lona, mecanismo, hidráulica, electrónica e interior con medios propios. No subcontratamos nada, y por eso el precio presupuestado es el precio final y nadie puede echar la culpa al otro gremio cuando algo no queda bien.",
      "us.s2.p2": "El mecánico recibe cada coche en persona. Si te resulta más cómodo en inglés o en ruso, aquí no es un problema.",
      "us.v.t": "A qué nos comprometemos",
      "us.v1.t": "Confianza",
      "us.v1.d": "Presupuesto por escrito antes de empezar y una llamada antes de cambiar nada. Sin sorpresas en la factura.",
      "us.v2.t": "Calidad superior",
      "us.v2.d": "Materiales de patrón original, tensión y geometría de fábrica y prueba delante de ti antes de irte.",
      "us.v3.t": "Atención de uno en uno",
      "us.v3.d": "Quien diagnostica tu capota es quien te la entrega y te explica lo que se ha hecho.",
      "us.cta.t": "Ven a ver el taller.",
      "us.cta.p": "Avenida del Segura 3, Benejúzar. Llama antes y te reservamos un puesto libre.",

      "ct.h1": "Benejúzar, Alicante.",
      "ct.h1lead": "A veinte minutos de Torrevieja y Orihuela, con acceso directo desde la AP-7. Aparcamiento delante del taller.",
      "ct.quick": "La vía más rápida a un precio",
      "ct.quick.p": "Manda una foto de la capota, la marca y el modelo, y qué pasa al pulsar el botón. En horario de taller solemos responder con una horquilla en menos de una hora.",

      "lg.h1": "Aviso legal",
      "lg.lead": "Información exigida por la Ley 34/2002 (LSSI-CE).",
      "pv.h1": "Política de privacidad",
      "pv.lead": "Cómo recogemos, usamos y protegemos los datos personales conforme al RGPD y la LOPDGDD.",
      "ck.h1": "Política de cookies",
      "ck.lead": "Qué guarda cabriopro.es en tu navegador y cómo eliminarlo.",
      "lg.note": "Esta página contiene marcadores entre corchetes [ ]. Sustitúyelos por los datos fiscales registrados antes de publicar."
    },

    /* =============================== РУССКИЙ ============================== */
    ru: {
      "ttl.home": "Ремонт крыш кабриолетов в Аликанте | Coches Benejúzar",
      "ttl.services": "Услуги: крыши, гидравлика, электрика кабриолетов | Coches Benejúzar",
      "ttl.about": "О нас — специалисты по кабриолетам с 2015 года | Coches Benejúzar",
      "ttl.contact": "Контакты и мастерская в Бенехусаре | Coches Benejúzar",
      "ttl.legal": "Правовая информация | Coches Benejúzar",
      "ttl.privacy": "Политика конфиденциальности | Coches Benejúzar",
      "ttl.cookies": "Политика использования cookie | Coches Benejúzar",
      "desc.home": "Специалисты по крышам кабриолетов в Бенехусаре, Аликанте. Ремонт и замена тентов, гидравлика, электроника и обивка салона. Более 10 лет в Вега-Баха.",
      "desc.services": "Замена тента, гидроцилиндры и насосы, электронная диагностика и обивка салона кабриолета. Мастерская в Бенехусаре, Аликанте.",
      "desc.about": "Coches Benejúzar ремонтирует крыши кабриолетов в Вега-Баха с 2015 года. Доверие, высокое качество и личное внимание к каждому клиенту.",
      "desc.contact": "Avenida del Segura 3, Бенехусар (Аликанте). Телефон +34 693 461 811. Часы работы, карта и быстрая оценка стоимости.",
      "desc.legal": "Правовая информация сайта cabriopro.es согласно закону LSSI-CE.",
      "desc.privacy": "Как Coches Benejúzar обрабатывает персональные данные согласно GDPR и LOPDGDD.",
      "desc.cookies": "Какие cookie использует cabriopro.es и как ими управлять.",

      "brand.sub": "Специалисты по кабрио",
      "nav.services": "Услуги",
      "nav.about": "О нас",
      "nav.gallery": "Работы",
      "nav.process": "Процесс",
      "nav.contact": "Контакты",
      "nav.quote": "Рассчитать стоимость",
      "nav.menu": "Открыть меню",
      "nav.lang": "Выбрать язык",
      "skip": "Перейти к содержанию",

      "hero.eyebrow": "Бенехусар · Аликанте · кабриолеты",
      "hero.l1": "Ваша крыша",
      "hero.l2": "снова откроется.",
      "hero.l3": "<em>С гарантией.</em>",
      "hero.text": "Ремонтируем и меняем тенты, гидравлические механизмы и электронику кабриолетов. Одна мастерская и более десяти лет практики в Вега-Баха.",
      "hero.cta1": "Рассчитать стоимость",
      "hero.cta2": "Что мы ремонтируем",
      "hero.m1": "С 2015 года",
      "hero.m2": "Ткань, винил и жёсткие крыши",
      "hero.m3": "Говорим на RU · ES · EN",
      "hero.scroll": "Листайте",

      "mech.title": "Кинематика крыши",
      "mech.sub": "Рычаги + гидравлический цикл",
      "mech.label": "Потяните, чтобы сложить крышу",
      "mech.open": "Крыша поднята",
      "mech.stowed": "Сложена",
      "mech.cyl": "Гидроцилиндр",
      "mech.bow": "Передняя дуга",
      "mech.deck": "Отсек крыши",
      "mech.caption": "Каждый шарнир, уплотнитель и датчик на этой схеме — точка нашей диагностики.",

      "marquee": "Audi A3 и A5 Cabriolet · BMW 3 и 4 серии · Mercedes SLK и CLK · MINI Cabrio · Mazda MX-5 · Peugeot 206 CC и 307 CC · Porsche Boxster · Renault Mégane CC · Saab 9-3 · VW Golf и Eos · Ford StreetKa · Opel Astra TwinTop",

      "svc.eyebrow": "Что мы делаем",
      "svc.title": "Четыре направления. Одна крыша.",
      "svc.lead": "Кабриолет ломается как система: ткань, механизм, гидравлика и электроника тянут друг друга. Мы работаем со всеми четырьмя, чтобы ничего не пришлось передавать в другой сервис.",
      "svc1.t": "Тенты и крыши",
      "svc1.d": "Ремонт или полная замена тканевых, виниловых и жёстких крыш с натяжением и швами по заводской геометрии.",
      "svc1.li1": "Разрывы, швы и изношенные углы",
      "svc1.li2": "Замена заднего стекла",
      "svc1.li3": "Уплотнители и проверка",
      "svc2.t": "Механизм и гидравлика",
      "svc2.d": "Цилиндры, насосы и шланги: находим утечку, восстанавливаем давление и настраиваем последовательность складывания.",
      "svc2.li1": "Течь или заклинивание цилиндров",
      "svc2.li2": "Обслуживание насоса и жидкости",
      "svc2.li3": "Регулировка рычагов",
      "svc3.t": "Электрика и диагностика",
      "svc3.d": "Микровыключатели, датчики, блоки управления и проводка — обычная причина остановки крыши на полпути.",
      "svc3.li1": "Считывание кодов неисправностей",
      "svc3.li2": "Замена датчиков и концевиков",
      "svc3.li3": "Ремонт жгутов и моторов",
      "svc4.t": "Обивка салона",
      "svc4.d": "Салон приводим в порядок под новую крышу: потолок, панели, сиденья и чехлы.",
      "svc4.li1": "Потолок и внутренняя отделка",
      "svc4.li2": "Перетяжка сидений и панелей",
      "svc4.li3": "Чехлы крыши и багажника",
      "svc.more": "Подробнее",

      "about.eyebrow": "Кто за этим стоит",
      "about.title": "Мастерская, которая говорит «да» кабриолетам.",
      "about.p1": "Coches Benejúzar открылась в Вега-Баха в 2015 году. С тех пор работа не сужалась, а только расширялась: сегодня крыша — это вся работа целиком. Именно поэтому машина, которую уже смотрели в трёх сервисах, обычно уезжает отсюда исправной.",
      "about.p2": "Механик принимает каждый автомобиль лично, объясняет, что на самом деле происходит с крышей, и называет цену до заказа деталей. Доверие, высокое качество и внимание к одному клиенту за раз — на испанском, английском или русском.",
      "about.cta": "Наша история",
      "about.badge.n": "10+",
      "about.badge.t": "лет с кабриолетами в Вега-Баха",
      "stat1": "Лет с кабриолетами",
      "stat2": "Направления в мастерской",
      "stat3": "Языка обслуживания",
      "stat4": "Месяцев гарантии",

      "proc.eyebrow": "Как проходит ремонт",
      "proc.title": "Четыре этапа, именно в таком порядке.",
      "proc.lead": "Ни одна деталь не заказывается и ничего не разбирается, пока вы не увидите цену. Большинство работ сдаём в ту же неделю.",
      "proc.s1.t": "Диагностика",
      "proc.s1.d": "Прогоняем крышу полный цикл, считываем память ошибок и проверяем давление в контуре. Вы получаете реальную причину, а не предположение.",
      "proc.s2.t": "Смета",
      "proc.s2.d": "Письменная детализированная цена с вариантами материала — оригинальная ткань, винил или аналог — и срок сдачи.",
      "proc.s3.t": "Работа",
      "proc.s3.d": "Механизм, гидравлика и ткань — всё своими силами. Новые крыши натягиваем и даём им осесть до проверки.",
      "proc.s4.t": "Выдача",
      "proc.s4.d": "Складываем крышу вместе с вами, проверяем при вас и передаём гарантию и рекомендации по уходу.",

      "gal.eyebrow": "Последние работы",
      "gal.title": "Никаких протечек. Только надежная крыша..",
      "gal.lead": "Подборка из мастерской. Нажмите на снимок, чтобы открыть его целиком.",
      "gal.f1": "Все",
      "gal.f2": "Тенты",
      "gal.f3": "Механизм",
      "gal.f4": "Салон",
      // "gal.c1": "Тканевая крыша заменена",
      // "gal.c2": "Ремонт гидроцилиндра",
      // "gal.c3": "Новое заднее стекло",
      // "gal.c4": "Потолок восстановлен",
      // "gal.c5": "Насос и шланги",
      // "gal.c6": "Ремонт шва и угла",
      // "gal.c7": "Диагностика датчика",
      // "gal.c8": "Перетяжка сидений",
      "gal.close": "Закрыть",
      "gal.prev": "Предыдущее фото",
      "gal.next": "Следующее фото",

      "ct.eyebrow": "Свяжитесь с нами",
      "ct.title": "Назовите модель и что делает крыша.",
      "ct.lead": "Обычно этого хватает, чтобы назвать диапазон цены по телефону. С фото или видео в WhatsApp получится ещё быстрее.",
      "ct.k.addr": "Мастерская",
      "ct.k.phone": "Телефон и WhatsApp",
      "ct.k.mail": "Эл. почта",
      "ct.k.hours": "Часы работы",
      "ct.v.hours": "Понедельник – Пятница 9:30–14:00 / 15:00–19:00, Летний график 8:00–16:00",
      "ct.k.person": "Спросить",
      "ct.f.name": "Имя",
      "ct.f.name.ph": "Ваше имя",
      "ct.f.phone": "Телефон",
      "ct.f.phone.ph": "+34 ...",
      "ct.f.mail": "Эл. почта",
      "ct.f.mail.ph": "you@email.com",
      "ct.f.car": "Марка и модель",
      "ct.f.car.ph": "напр. Mazda MX-5 2008",
      "ct.f.topic": "Что вам нужно?",
      "ct.f.o1": "Ремонт или замена крыши",
      "ct.f.o2": "Механизм или гидравлика",
      "ct.f.o3": "Электрика или диагностика",
      "ct.f.o4": "Обивка и салон",
      "ct.f.o5": "Другое",
      "ct.f.msg": "Что происходит с крышей?",
      "ct.f.msg.ph": "Останавливается на полпути, насос продолжает работать...",
      "ct.f.consent": "Я прочитал(а) <a href=\"politica-privacidad.html\">политику конфиденциальности</a> и согласен(на) на обратную связь по этому обращению.",
      "ct.f.send": "Отправить обращение",
      "ct.f.note": "Отвечаем в тот же рабочий день. Данные третьим лицам не передаём.",
      "ct.f.ok": "Спасибо — обращение готово к отправке из вашей почтовой программы.",
      "ct.call": "Позвонить +34 693 461 811",
      "ct.wa": "Написать в WhatsApp",
      "ct.map": "Карта мастерской в Бенехусаре",

      "cta.title": "Крыша застряла, порвана или течёт?",
      "cta.text": "Пришлите фото сегодня и узнайте диапазон цены до того, как поедете.",
      "cta.btn": "Написать в WhatsApp",

      "foot.about": "Специалисты по крышам кабриолетов в Бенехусаре, Аликанте. Ремонт, замена и обслуживание тентов, механизмов и салонов кабриолетов.",
      "foot.nav": "Навигация",
      "foot.svc": "Услуги",
      "foot.contact": "Контакты",
      "foot.legal": "Правовое",
      "foot.legal1": "Правовая информация",
      "foot.legal2": "Политика конфиденциальности",
      "foot.legal3": "Политика cookie",
      "foot.rights": "Все права защищены.",
      "foot.built": "Мастерская Coches Benejúzar · Вега-Баха, Аликанте",

      "wa.tip": "Напишите нам в WhatsApp",
      "wa.aria": "Открыть чат WhatsApp с Coches Benejúzar",
      "wa.url": "https://wa.me/34693461811?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%83%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%20%D0%BF%D0%BE%20%D0%BA%D1%80%D1%8B%D1%88%D0%B5%20%D0%BA%D0%B0%D0%B1%D1%80%D0%B8%D0%BE%D0%BB%D0%B5%D1%82%D0%B0.%20%D0%9C%D0%BE%D1%8F%20%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0%3A%20",

      "ck.title": "Коротко о cookie",
      "ck.text": "Мы используем собственные cookie, чтобы сайт работал и запоминал ваш язык. Для рекламы они не применяются. См. <a href=\"politica-cookies.html\">политику cookie</a>.",
      "ck.accept": "Принять",
      "ck.reject": "Только необходимые",

      "sv.h1": "Всё, что может понадобиться крыше кабриолета.",
      "sv.lead": "Четыре направления в одной мастерской, чтобы одна поломка не превратилась в три визита.",
      "sv.d1.tag": "Ткань и крыши",
      "sv.d1.t": "Ремонт и замена тента",
      "sv.d1.p": "Почти все крыши приезжают с одной историей: вода на ковролине, разрыв в углу, помутневшее заднее стекло. Мы оцениваем, можно ли отремонтировать тент или честнее его заменить, и говорим об этом до того, как вы примете решение.",
      "sv.d1.s1": "Ткань оригинального кроя, винил или жёсткие крыши",
      "sv.d1.s2": "Замена заднего стекла, включая обогреваемое",
      "sv.d1.s3": "Ремонт швов, углов и натяжения",
      "sv.d1.s4": "Замена уплотнителей и проверка при выдаче",
      "sv.d2.tag": "Механизм",
      "sv.d2.t": "Гидравлика: цилиндры, насосы, шланги",
      "sv.d2.p": "Крыша, которая останавливается на полпути, за ночь опускается сама или движется не по порядку, почти всегда страдает от гидравлики. Мы проверяем давление, находим утечку и ремонтируем или меняем конкретный узел, а не весь механизм из принципа.",
      "sv.d2.s1": "Течь, заклинивание или задиры цилиндров",
      "sv.d2.s2": "Обслуживание насоса, бачка и жидкости",
      "sv.d2.s3": "Замена шлангов и соединений",
      "sv.d2.s4": "Регулировка рычагов и сброс последовательности",
      "sv.d3.tag": "Электроника",
      "sv.d3.t": "Электрическая диагностика и блоки управления",
      "sv.d3.p": "Кабриолет чаще отказывается двигаться по соображениям безопасности, чем по механическим причинам: микровыключатель больше не подтверждает, что багажник закрыт, датчик замка, уставший мотор. Мы читаем память, проверяем жгут и ремонтируем сам контур.",
      "sv.d3.s1": "Считывание кодов и проверка в работе",
      "sv.d3.s2": "Микровыключатели, датчики положения и замков",
      "sv.d3.s3": "Ремонт моторов, реле и блоков управления",
      "sv.d3.s4": "Восстановление проводки в местах складывания",
      "sv.d4.tag": "Салон",
      "sv.d4.t": "Обивка и восстановление салона",
      "sv.d4.p": "Солнце и вода старят салон кабриолета быстрее, чем у любой другой машины. Мы восстанавливаем то, что пропускала крыша: потолок, панели, сиденья и чехлы, которые возвращают автомобилю законченный вид.",
      "sv.d4.s1": "Потолок и внутренняя отделка",
      "sv.d4.s2": "Перетяжка сидений и панелей в коже или ткани",
      "sv.d4.s3": "Чехлы крыши и обивка багажника",
      "sv.d4.s4": "Сушка ковролина и устранение запаха после протечек",
      "sv.faq": "Частые вопросы",
      "sv.q1": "Сколько занимает замена крыши?",
      "sv.a1": "Стандартная замена тента обычно занимает один-два дня с момента поступления материала. Гидравлические и электрические неисправности оцениваются после диагностики, многие решаются в тот же день.",
      "sv.q2": "Работаете ли вы с жёсткими крышами и купе-кабриолетами?",
      "sv.a2": "Да. Складные жёсткие крыши используют ту же гидравлику, датчики и уплотнители, что и тканевые, и это регулярная часть нашей работы.",
      "sv.q3": "Можете ли вы приехать к машине?",
      "sv.a3": "Диагностика и установка требуют мастерской, но пришлите сначала фото или короткое видео в WhatsApp — мы скажем, безопасно ли ехать своим ходом.",
      "sv.q4": "Какая гарантия?",
      "sv.a4": "На детали и работу — 12 месяца. Сохраните счёт, больше для гарантии ничего не нужно.",

      "us.h1": "Десять лет на одной части автомобиля.",
      "us.lead": "Как мастерская в Вега-Баха стала местом, куда отправляют, когда крышу больше никто не берётся трогать.",
      "us.s1.tag": "2015 — начало",
      "us.s1.t": "Всё началось с автомобилей, требующих особого подхода.",
      "us.s1.p1": "Coches Benejúzar специализируется на ремонте крыш кабриолетов и сложных систем, связанных с ними. Здесь важны не только материалы и механика, но и точная диагностика: гидравлика, электроника, датчики и механизмы складывания.",
      "us.s1.p2": "Мы занимаемся тем, что другие сервисы часто предпочитают не брать в работу. Для нас каждая крыша — это система, которую нужно понять, правильно восстановить и вернуть к надежной эксплуатации.",
      "us.s2.tag": "Сегодня",
      "us.s2.t": "Одна специализация, сделанная как следует",
      "us.s2.p1": "Сегодня мастерская своими силами решает вопросы ткани, механизма, гидравлики, электроники и салона. Мы ничего не отдаём на сторону: поэтому названная цена и есть итоговая, и никто не сможет свалить вину на смежников.",
      "us.s2.p2": "Механик принимает каждую машину лично. Если вам удобнее по-английски или по-русски — здесь это не проблема.",
      "us.v.t": "Наши обязательства",
      "us.v1.t": "Доверие",
      "us.v1.d": "Письменная смета до начала работ и звонок перед любым изменением. Никаких сюрпризов в счёте.",
      "us.v2.t": "Высокое качество",
      "us.v2.d": "Материалы оригинального кроя, заводское натяжение и геометрия, проверка при вас перед выдачей.",
      "us.v3.t": "Личное внимание",
      "us.v3.d": "Тот, кто диагностировал вашу крышу, сам её и передаёт, объясняя, что было сделано.",
      "us.cta.t": "Приезжайте посмотреть мастерскую.",
      "us.cta.p": "Avenida del Segura 3, Бенехусар. Позвоните заранее — оставим свободный пост.",

      "ct.h1": "Бенехусар, Аликанте.",
      "ct.h1lead": "Двадцать минут от Торревьехи и Ориуэлы, прямой съезд с AP-7. Парковка перед мастерской.",
      "ct.quick": "Самый быстрый путь к цене",
      "ct.quick.p": "Пришлите фото крыши, марку и модель и опишите, что происходит при нажатии кнопки. В рабочие часы обычно отвечаем с диапазоном цены в течение часа.",

      "lg.h1": "Правовая информация",
      "lg.lead": "Сведения, обязательные согласно закону Испании 34/2002 (LSSI-CE).",
      "pv.h1": "Политика конфиденциальности",
      "pv.lead": "Как мы собираем, используем и защищаем персональные данные согласно GDPR и LOPDGDD.",
      "ck.h1": "Политика использования cookie",
      "ck.lead": "Что cabriopro.es сохраняет в вашем браузере и как это удалить.",
      "lg.note": "Юридические тексты приведены на испанском языке, поскольку это язык, обязательный для документов такого рода в Испании."
    }
  };

  /* ------------------------------------------------------------------------
     2. MOTOR DE TRADUCCIÓN
     ------------------------------------------------------------------------ */
  const STORAGE_KEY = "cabriopro.lang";
  const SUPPORTED = ["en", "es", "ru"];
  const DEFAULT_LANG = "en";

  function pickInitialLang() {
    let stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { /* modo privado */ }
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;

    const nav = (navigator.language || "").slice(0, 2).toLowerCase();
    if (SUPPORTED.indexOf(nav) !== -1) return nav;
    return DEFAULT_LANG;
  }

  function t(key, lang) {
    const table = DICT[lang] || DICT[DEFAULT_LANG];
    if (Object.prototype.hasOwnProperty.call(table, key)) return table[key];
    // Reserva: si falta una clave en un idioma, se usa el inglés.
    return DICT[DEFAULT_LANG][key] !== undefined ? DICT[DEFAULT_LANG][key] : "";
  }

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"), lang);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"), lang);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder"), lang));
    });
    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      el.setAttribute("content", t(el.getAttribute("data-i18n-content"), lang));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"), lang));
    });
    document.querySelectorAll("[data-i18n-href]").forEach(function (el) {
      el.setAttribute("href", t(el.getAttribute("data-i18n-href"), lang));
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title"), lang));
    });

    // Estado visual del selector
    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignorar */ }

    // Aviso para el resto de scripts (contadores, galería, etc.)
    document.dispatchEvent(new CustomEvent("cabrio:langchange", { detail: { lang: lang } }));
  }

  function init() {
    apply(pickInitialLang());
    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(btn.getAttribute("data-lang"));
      });
    });
  }

  // API pública mínima, por si hace falta traducir desde otro script.
  window.CabrioI18N = {
    apply: apply,
    t: function (key) { return t(key, document.documentElement.getAttribute("lang") || DEFAULT_LANG); },
    current: function () { return document.documentElement.getAttribute("lang") || DEFAULT_LANG; }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
