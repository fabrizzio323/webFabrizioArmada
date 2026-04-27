const PDFDocument = require('pdfkit');
const fs = require('fs');

const cvData = {
  es: {
    roleLine: "Backend Developer · Java & Spring Boot",
    contactLine: "fabrizioarmada3@gmail.com · +54 388 404 5447 · Jujuy, Argentina · linkedin.com/in/fabrizio3 · github.com/fabrizzio323",
    summaryTitle: "RESUMEN PROFESIONAL",
    summaryText: "Backend Developer con experiencia en Java y Spring Boot en entornos de producción. Desarrollé 15 APIs REST para el sistema educativo Edumika y desarrollé un backend de e-commerce con autenticación JWT, gestión de órdenes y despliegue en producción.",
    educationTitle: "EDUCACIÓN",
    eduRole: "Analista Programador Universitario",
    eduOrg: " — UNJu – Facultad de Ingeniería",
    eduDate: "2022 — En curso",
    eduSub: "75% completado · Estimado de graduación: 2027",
    certTitle: "CERTIFICACIONES",
    certs: [
      "REST APIs con Spring Boot — Todo Code Academy, Julio 2024",
      "Microservicios con Spring Cloud — Todo Code Academy, Septiembre 2024"
    ],
    projectsTitle: "PROYECTO DESTACADO",
    projName: "EasyCommerce",
    projOrg: " — Backend e-commerce personal en producción github.com/fabrizzio323/easyecommerce",
    projItems: [
      { b: "Desarrollé", t: " arquitectura en capas completa: Controller → Service → Repository" },
      { b: "Implementé", t: " autenticación y autorización con JWT y roles diferenciados (USER / ADMIN)" },
      { b: "Construí", t: " carrito persistente, gestión de sesiones y seguimiento de órdenes" },
      { b: "Desplegué", t: " en producción con Render y PostgreSQL" }
    ],
    projSub: "Stack: Java 21 · Spring Boot · JWT · PostgresSQL · Docker",
    skillsTitle: "HABILIDADES TÉCNICAS",
    skills: [
      { k: "Lenguajes / Frameworks:", v: " Java 21, Spring Boot" },
      { k: "Seguridad:", v: " Spring Security, JWT" },
      { k: "Bases de datos:", v: " PostgreSQL, MySQL, JPA, Hibernate" },
      { k: "Testing:", v: " JUnit, Mockito, Integration Testing" },
      { k: "DevOps:", v: " Docker, Maven, Git, Swagger/OpenAPI" },
      { k: "Arquitectura:", v: " REST APIs, Clean Architecture, Microservicios" }
    ],
    expTitle: "EXPERIENCIA PROFESIONAL",
    experiences: [
      {
        role: "Desarrollador Backend", org: " — Dev Jujuy", date: "Abril 2025 — Marzo 2026",
        sub: "Contrato por proyecto finalizado",
        items: [
          { b: "Desarrollé", t: " 15 APIs REST con Java y Spring Boot en entorno de producción" },
          { b: "Implementé", t: " autenticación JWT y control de acceso por roles" },
          { b: "Integré", t: " PostgreSQL/MySQL con JPA/Hibernate" },
          { b: "Participé", t: " en el sistema educativo Edumika" },
          { b: "Documenté", t: " APIs con Swagger/OpenAPI" }
        ]
      },
      {
        role: "Jefe de Cómputos", org: " — Secretaria de Bienestar — UNJu", date: "Abril 2025 — Actualidad",
        sub: "",
        items: [
          { b: "Administración", t: " de infraestructura y soporte técnico" },
          { b: "Implementación", t: " de soluciones para optimizar procesos" },
          { b: "Gestión", t: " de sistemas y recursos informáticos" }
        ]
      },
      {
        role: "Docente de Apoyo", org: " — Programación C++ — UNJu", date: "Febrero 2025 — Actualidad",
        sub: "",
        items: [
          { b: "Enseñanza", t: " de fundamentos de programación" },
          { b: "Apoyo", t: " en resolución de problemas y debugging" }
        ]
      }
    ]
  },
  en: {
    roleLine: "Backend Developer · Java & Spring Boot",
    contactLine: "fabrizioarmada3@gmail.com · +54 388 404 5447 · Jujuy, Argentina · linkedin.com/in/fabrizio3 · github.com/fabrizzio323",
    summaryTitle: "PROFESSIONAL SUMMARY",
    summaryText: "Backend Developer with experience in Java and Spring Boot in production environments. Developed 15 REST APIs for the Edumika educational system and built an e-commerce backend with JWT authentication, order management, and production deployment.",
    educationTitle: "EDUCATION",
    eduRole: "University Programmer Analyst",
    eduOrg: " — UNJu – Faculty of Engineering",
    eduDate: "2022 — Present",
    eduSub: "75% completed · Expected graduation: 2027",
    certTitle: "CERTIFICATIONS",
    certs: [
      "REST APIs with Spring Boot — Todo Code Academy, July 2024",
      "Microservices with Spring Cloud — Todo Code Academy, September 2024"
    ],
    projectsTitle: "FEATURED PROJECT",
    projName: "EasyCommerce",
    projOrg: " — Personal e-commerce backend in production github.com/fabrizzio323/easyecommerce",
    projItems: [
      { b: "Developed", t: " complete layered architecture: Controller → Service → Repository" },
      { b: "Implemented", t: " authentication and authorization with JWT and role-based access (USER / ADMIN)" },
      { b: "Built", t: " persistent shopping cart, session management, and order tracking" },
      { b: "Deployed", t: " to production using Render and PostgreSQL" }
    ],
    projSub: "Stack: Java 21 · Spring Boot · JWT · PostgresSQL · Docker",
    skillsTitle: "TECHNICAL SKILLS",
    skills: [
      { k: "Languages / Frameworks:", v: " Java 21, Spring Boot" },
      { k: "Security:", v: " Spring Security, JWT" },
      { k: "Databases:", v: " PostgreSQL, MySQL, JPA, Hibernate" },
      { k: "Testing:", v: " JUnit, Mockito, Integration Testing" },
      { k: "DevOps:", v: " Docker, Maven, Git, Swagger/OpenAPI" },
      { k: "Architecture:", v: " REST APIs, Clean Architecture, Microservices" }
    ],
    expTitle: "PROFESSIONAL EXPERIENCE",
    experiences: [
      {
        role: "Backend Developer", org: " — Dev Jujuy", date: "April 2025 — March 2026",
        sub: "Project contract completed",
        items: [
          { b: "Developed", t: " 15 REST APIs with Java and Spring Boot in a production environment" },
          { b: "Implemented", t: " JWT authentication and role-based access control" },
          { b: "Integrated", t: " PostgreSQL/MySQL with JPA/Hibernate" },
          { b: "Participated", t: " in the Edumika educational system" },
          { b: "Documented", t: " APIs with Swagger/OpenAPI" }
        ]
      },
      {
        role: "Head of IT", org: " — Secretariat of Welfare — UNJu", date: "April 2025 — Present",
        sub: "",
        items: [
          { b: "Administration", t: " of IT infrastructure and technical support" },
          { b: "Implementation", t: " of solutions to optimize processes" },
          { b: "Management", t: " of systems and IT resources" }
        ]
      },
      {
        role: "Support Teacher", org: " — C++ Programming — UNJu", date: "February 2025 — Present",
        sub: "",
        items: [
          { b: "Teaching", t: " programming fundamentals" },
          { b: "Support", t: " in problem solving and debugging" }
        ]
      }
    ]
  },
  ru: {
    roleLine: "Backend-разработчик · Java & Spring Boot",
    contactLine: "fabrizioarmada3@gmail.com · +54 388 404 5447 · Хухуй, Аргентина · linkedin.com/in/fabrizio3 · github.com/fabrizzio323",
    summaryTitle: "ПРОФЕССИОНАЛЬНОЕ РЕЗЮМЕ",
    summaryText: "Backend-разработчик с опытом работы с Java и Spring Boot в производственных средах. Разработал 15 REST API для образовательной системы Edumika и создал бэкенд электронной коммерции с аутентификацией JWT, управлением заказами и развертыванием в рабочей среде.",
    educationTitle: "ОБРАЗОВАНИЕ",
    eduRole: "Университетский программист-аналитик",
    eduOrg: " — UNJu – Инженерный факультет",
    eduDate: "2022 — Настоящее время",
    eduSub: "Завершено на 75% · Ожидаемый выпуск: 2027",
    certTitle: "СЕРТИФИКАТЫ",
    certs: [
      "REST API со Spring Boot — Todo Code Academy, Июль 2024",
      "Микросервисы со Spring Cloud — Todo Code Academy, Сентябрь 2024"
    ],
    projectsTitle: "ИЗБРАННЫЙ ПРОЕКТ",
    projName: "EasyCommerce",
    projOrg: " — Личный бэкенд электронной коммерции в рабочей среде github.com/fabrizzio323/easyecommerce",
    projItems: [
      { b: "Разработал", t: " полную многоуровневую архитектуру: Controller → Service → Repository" },
      { b: "Реализовал", t: " аутентификацию и авторизацию с помощью JWT и контроль доступа на основе ролей (USER / ADMIN)" },
      { b: "Создал", t: " постоянную корзину покупок, управление сессиями и отслеживание заказов" },
      { b: "Развернул", t: " в рабочей среде с использованием Render и PostgreSQL" }
    ],
    projSub: "Stack: Java 21 · Spring Boot · JWT · PostgresSQL · Docker",
    skillsTitle: "ТЕХНИЧЕСКИЕ НАВЫКИ",
    skills: [
      { k: "Языки / Фреймворки:", v: " Java 21, Spring Boot" },
      { k: "Безопасность:", v: " Spring Security, JWT" },
      { k: "Базы данных:", v: " PostgreSQL, MySQL, JPA, Hibernate" },
      { k: "Тестирование:", v: " JUnit, Mockito, Integration Testing" },
      { k: "DevOps:", v: " Docker, Maven, Git, Swagger/OpenAPI" },
      { k: "Архитектура:", v: " REST API, Чистая архитектура, Микросервисы" }
    ],
    expTitle: "ОПЫТ РАБОТЫ",
    experiences: [
      {
        role: "Backend-разработчик", org: " — Dev Jujuy", date: "Апрель 2025 — Март 2026",
        sub: "Проектный контракт завершен",
        items: [
          { b: "Разработал", t: " 15 REST API с использованием Java и Spring Boot в рабочей среде" },
          { b: "Реализовал", t: " аутентификацию JWT и контроль доступа на основе ролей" },
          { b: "Интегрировал", t: " PostgreSQL/MySQL с JPA/Hibernate" },
          { b: "Участвовал", t: " в образовательной системе Edumika" },
          { b: "Документировал", t: " API с помощью Swagger/OpenAPI" }
        ]
      },
      {
        role: "Начальник ИТ-отдела", org: " — Секретариат по социальным вопросам — UNJu", date: "Апрель 2025 — Настоящее время",
        sub: "",
        items: [
          { b: "Администрирование", t: " ИТ-инфраструктуры и техническая поддержка" },
          { b: "Внедрение", t: " решений для оптимизации процессов" },
          { b: "Управление", t: " системами и ИТ-ресурсами" }
        ]
      },
      {
        role: "Преподаватель-ассистент", org: " — Программирование на C++ — UNJu", date: "Февраль 2025 — Настоящее время",
        sub: "",
        items: [
          { b: "Преподавание", t: " основ программирования" },
          { b: "Поддержка", t: " в решении проблем и отладке" }
        ]
      }
    ]
  }
};

function generateCVForLanguage(langCode, filename) {
  return new Promise((resolve) => {
    const margin = 40;
    const doc = new PDFDocument({ margin: margin, size: 'A4' });
    const stream = fs.createWriteStream(filename);
    doc.pipe(stream);

    const fontRegular = 'C:/Windows/Fonts/arial.ttf';
    const fontBold = 'C:/Windows/Fonts/arialbd.ttf';
    const fontItalic = 'C:/Windows/Fonts/ariali.ttf';

    let useSysFonts = false;
    if (fs.existsSync(fontRegular) && fs.existsSync(fontBold) && fs.existsSync(fontItalic)) {
      useSysFonts = true;
    }

    const setFont = (type) => {
      if (useSysFonts) {
        if (type === 'bold') return doc.font(fontBold);
        if (type === 'italic') return doc.font(fontItalic);
        return doc.font(fontRegular);
      } else {
        if (type === 'bold') return doc.font('Helvetica-Bold');
        if (type === 'italic') return doc.font('Helvetica-Oblique');
        return doc.font('Helvetica');
      }
    };

    const data = cvData[langCode];

    const titleSize = 24;
    const subtitleSize = 11;
    const contactSize = 9.5;
    const sectionSize = 11;
    const normalSize = 10;

    // Header
    setFont('bold').fontSize(titleSize).fillColor('#000000').text('Fabrizio Luciano Armada', { align: 'left' });
    doc.moveDown(0.2);
    setFont('regular').fontSize(subtitleSize).fillColor('#444444').text(data.roleLine);
    doc.moveDown(0.2);
    setFont('regular').fontSize(contactSize).fillColor('#555555').text(data.contactLine);
    doc.moveDown(1);

    function drawSectionHeader(title) {
      setFont('bold').fontSize(sectionSize).fillColor('#000000').text(title.toUpperCase());
      const y = doc.y + 2;
      doc.moveTo(margin, y).lineTo(595 - margin, y).lineWidth(1).strokeColor('#000000').stroke();
      doc.y = y + 6;
    }

    function customLine(boldLeft, regularLeft, rightText, isRightItalic = true) {
      const startY = doc.y;
      setFont('bold').fontSize(normalSize).fillColor('#000000').text(boldLeft, { continued: true });
      setFont('regular').fillColor('#333333').text(regularLeft);

      const nextY = doc.y;
      doc.y = startY;
      if (isRightItalic) {
        setFont('italic').fillColor('#888888');
      } else {
        setFont('regular').fillColor('#555555');
      }
      doc.text(rightText, { align: 'right' });
      doc.y = nextY;
    }

    // SUMMARY
    drawSectionHeader(data.summaryTitle);
    setFont('regular').fontSize(normalSize).fillColor('#000000').text(data.summaryText, { align: 'left', lineGap: 1.5 });
    doc.moveDown(1);

    // EDUCATION
    drawSectionHeader(data.educationTitle);
    customLine(data.eduRole, data.eduOrg, data.eduDate);
    setFont('italic').fontSize(10).fillColor('#888888').text(data.eduSub, { lineGap: 1.5 });
    doc.moveDown(1);

    // CERTIFICATIONS
    drawSectionHeader(data.certTitle);
    data.certs.forEach(cert => {
      setFont('regular').fontSize(normalSize).fillColor('#000000').text(`• ${cert}`, { lineGap: 1.5, indent: 5 });
    });
    doc.moveDown(1);

    // PROJECTS
    drawSectionHeader(data.projectsTitle);
    customLine(data.projName, data.projOrg, "");
    data.projItems.forEach(item => {
      setFont('bold').fontSize(normalSize).fillColor('#000000').text("• " + item.b, { continued: true, indent: 15 });
      setFont('regular').text(item.t, { lineGap: 1.5 });
    });
    setFont('italic').fontSize(9.5).fillColor('#888888').text(data.projSub, { indent: 15 });
    doc.moveDown(1);

    // SKILLS
    drawSectionHeader(data.skillsTitle);
    data.skills.forEach(skill => {
      setFont('bold').fontSize(normalSize).fillColor('#000000').text(skill.k, { continued: true });
      setFont('regular').text(skill.v, { lineGap: 2 });
    });
    doc.moveDown(1);

    // EXPERIENCE
    drawSectionHeader(data.expTitle);
    data.experiences.forEach((exp, index) => {
      customLine(exp.role, exp.org, exp.date);
      if (exp.sub) {
        setFont('italic').fontSize(9.5).fillColor('#888888').text(exp.sub, { lineGap: 1.5 });
      }
      exp.items.forEach(item => {
        setFont('bold').fontSize(normalSize).fillColor('#000000').text("• " + item.b, { continued: true, indent: 15 });
        setFont('regular').text(item.t, { lineGap: 1.5 });
      });
      if (index < data.experiences.length - 1) doc.moveDown(0.8);
    });

    doc.end();
    stream.on('finish', resolve);
  });
}

async function main() {
  console.log('Generating multi-language CVs...');
  await generateCVForLanguage('es', 'public/cv-es.pdf');
  await generateCVForLanguage('en', 'public/cv-en.pdf');
  await generateCVForLanguage('ru', 'public/cv-ru.pdf');
  console.log('All CVs generated perfectly!');
}

main();
