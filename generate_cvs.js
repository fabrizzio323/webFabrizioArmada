const PDFDocument = require('pdfkit');
const fs = require('fs');

const cvData = {
  es: {
    role: "Backend Developer",
    location: "San Salvador de Jujuy, Argentina",
    summaryTitle: "RESUMEN PROFESIONAL",
    summaryText: "Backend Developer especializado en Java y Spring Boot. Experto en construir sistemas robustos con arquitectura limpia, manejo de excepciones y seguridad JWT. Enfocado en el desarrollo de APIs REST escalables, implementación de patrones de diseño y buenas prácticas de código.",
    skillsTitle: "HABILIDADES TÉCNICAS",
    skills: [
      { k: 'Lenguajes y Frameworks:', v: 'Java 21, Spring Boot, Spring Security, Spring Data JPA' },
      { k: 'Seguridad y Autenticación:', v: 'JWT, Spring Security' },
      { k: 'Bases de Datos:', v: 'PostgreSQL, MySQL, JPA, Hibernate' },
      { k: 'Testing:', v: 'JUnit, Mockito, Integration Testing' },
      { k: 'DevOps y Herramientas:', v: 'Docker, Maven, Git, Swagger, OpenAPI' },
      { k: 'Arquitectura:', v: 'REST APIs, Clean Architecture, Microservicios' }
    ],
    experienceTitle: "EXPERIENCIA PROFESIONAL",
    exp1Role: "Jefe de Cómputos",
    exp1Date: "Abril 2025 - Actualidad",
    exp1Org: "Secretaría de Bienestar – Universidad Nacional de Jujuy",
    exp1Items: [
      'Administración de infraestructura informática y soporte técnico institucional',
      'Gestión y mantenimiento de equipos, sistemas y recursos tecnológicos',
      'Implementación de soluciones tecnológicas para optimizar procesos administrativos',
      'Resolución de incidencias técnicas en equipos, redes y sistemas'
    ],
    exp2Role: "Desarrollador Backend",
    exp2Date: "Abril 2025 - Marzo 2026",
    exp2Org: "Dev Jujuy",
    exp2Items: [
      'Desarrollo de APIs REST para integración entre sistemas',
      'Implementación de servicios backend con Java y Spring Boot',
      'Desarrollo de aplicaciones basadas en arquitectura de microservicios',
      'Integración con bases de datos PostgreSQL',
      'Documentación de APIs con Swagger / OpenAPI'
    ],
    exp3Role: "Docente de Apoyo – Programación",
    exp3Date: "Febrero 2025 - Actualidad",
    exp3Org: "Programación Estructurada en C++",
    exp3Items: [
      'Enseñanza de fundamentos de programación estructurada en C++',
      'Explicación de lógica de programación, estructuras de control y funciones',
      'Apoyo a estudiantes en resolución de ejercicios y proyectos académicos'
    ],
    projectsTitle: "PROYECTOS DESTACADOS",
    proj1Name: "EasyCommerce",
    proj1Status: "Proyecto Comercializado",
    proj1Desc: "E-commerce backend completo desarrollado con Java y Spring Boot",
    proj1Items: [
      'Implementación de carrito de compras persistente con gestión de sesiones',
      'Sistema de checkout con snapshots de precios para integridad transaccional',
      'Control de roles y permisos con Spring Security y JWT',
      'Arquitectura limpia con separación de capas y patrones de diseño',
      'Despliegue en producción en Render con base de datos PostgreSQL'
    ],
    proj1Tech: "Tecnologías: Java 21, Spring Boot, Spring Security, JWT, JPA, Hibernate, PostgreSQL, Docker, Maven",
    educationTitle: "EDUCACIÓN",
    edu1Name: "Analista Programador Universitario",
    edu1Org: "Facultad de Ingeniería – Universidad Nacional de Jujuy (UNJu)",
    certTitle: "CERTIFICACIONES",
    cert1Name: "Desarrollo de REST APIs con Spring Boot",
    cert1Date: "Julio 2024",
    cert1Org: "Todo Code Academy",
    cert2Name: "Microservicios con Spring Cloud",
    cert2Date: "Septiembre 2024",
    cert2Org: "Todo Code Academy"
  },
  en: {
    role: "Backend Developer",
    location: "San Salvador de Jujuy, Argentina",
    summaryTitle: "PROFESSIONAL SUMMARY",
    summaryText: "Backend Developer specialized in Java and Spring Boot. Expert in building robust systems with clean architecture, exception handling, and JWT security. Focused on scalable REST API development, design patterns implementation, and clean code best practices.",
    skillsTitle: "TECHNICAL SKILLS",
    skills: [
      { k: 'Languages & Frameworks:', v: 'Java 21, Spring Boot, Spring Security, Spring Data JPA' },
      { k: 'Security & Auth:', v: 'JWT, Spring Security' },
      { k: 'Databases:', v: 'PostgreSQL, MySQL, JPA, Hibernate' },
      { k: 'Testing:', v: 'JUnit, Mockito, Integration Testing' },
      { k: 'DevOps & Tools:', v: 'Docker, Maven, Git, Swagger, OpenAPI' },
      { k: 'Architecture:', v: 'REST APIs, Clean Architecture, Microservices' }
    ],
    experienceTitle: "PROFESSIONAL EXPERIENCE",
    exp1Role: "Head of IT",
    exp1Date: "April 2025 - Present",
    exp1Org: "Secretariat of Welfare – National University of Jujuy",
    exp1Items: [
      'Administration of IT infrastructure and institutional technical support',
      'Management and maintenance of equipment, systems, and technological resources',
      'Implementation of technological solutions to optimize administrative processes',
      'Resolution of technical incidents in equipment, networks, and systems'
    ],
    exp2Role: "Backend Developer",
    exp2Date: "April 2025 - March 2026",
    exp2Org: "Dev Jujuy",
    exp2Items: [
      'Development of REST APIs for system integration',
      'Implementation of backend services using Java and Spring Boot',
      'Development of applications based on microservices architecture',
      'Integration with PostgreSQL databases',
      'API documentation with Swagger / OpenAPI'
    ],
    exp3Role: "Support Teacher – Programming",
    exp3Date: "February 2025 - Present",
    exp3Org: "Structured Programming in C++",
    exp3Items: [
      'Teaching fundamentals of structured programming in C++',
      'Explanation of programming logic, control structures, and functions',
      'Support for students in solving exercises and academic projects'
    ],
    projectsTitle: "FEATURED PROJECTS",
    proj1Name: "EasyCommerce",
    proj1Status: "Commercialized Project",
    proj1Desc: "Complete e-commerce backend developed with Java and Spring Boot",
    proj1Items: [
      'Implementation of persistent shopping cart with session management',
      'Checkout system with price snapshots for transactional integrity',
      'Role and permission control with Spring Security and JWT',
      'Clean architecture with layer separation and design patterns',
      'Production deployment on Render with PostgreSQL database'
    ],
    proj1Tech: "Technologies: Java 21, Spring Boot, Spring Security, JWT, JPA, Hibernate, PostgreSQL, Docker, Maven",
    educationTitle: "EDUCATION",
    edu1Name: "University Programmer Analyst",
    edu1Org: "Faculty of Engineering – National University of Jujuy (UNJu)",
    certTitle: "CERTIFICATIONS",
    cert1Name: "REST API Development with Spring Boot",
    cert1Date: "July 2024",
    cert1Org: "Todo Code Academy",
    cert2Name: "Microservices with Spring Cloud",
    cert2Date: "September 2024",
    cert2Org: "Todo Code Academy"
  },
  ru: {
    role: "Backend Разработчик",
    location: "Сан-Сальвадор-де-Хухуй, Аргентина",
    summaryTitle: "ПРОФЕССИОНАЛЬНОЕ РЕЗЮМЕ",
    summaryText: "Backend-разработчик, специализирующийся на Java и Spring Boot. Эксперт по созданию надежных систем с чистой архитектурой, обработкой исключений и безопасностью JWT. Ориентирован на разработку масштабируемых REST API, внедрение шаблонов проектирования и передовых практик написания кода.",
    skillsTitle: "ТЕХНИЧЕСКИЕ НАВЫКИ",
    skills: [
      { k: 'Языки и фреймворки:', v: 'Java 21, Spring Boot, Spring Security, Spring Data JPA' },
      { k: 'Безопасность и аутентификация:', v: 'JWT, Spring Security' },
      { k: 'Базы данных:', v: 'PostgreSQL, MySQL, JPA, Hibernate' },
      { k: 'Тестирование:', v: 'JUnit, Mockito, Integration Testing' },
      { k: 'DevOps и инструменты:', v: 'Docker, Maven, Git, Swagger, OpenAPI' },
      { k: 'Архитектура:', v: 'REST API, чистая архитектура, микросервисы' }
    ],
    experienceTitle: "ОПЫТ РАБОТЫ",
    exp1Role: "Начальник ИТ-отдела",
    exp1Date: "Апрель 2025 - Настоящее время",
    exp1Org: "Секретариат по социальным вопросам – Национальный университет Жужуя",
    exp1Items: [
      'Администрирование ИТ-инфраструктуры и институциональная техническая поддержка',
      'Управление и обслуживание оборудования, систем и технологических ресурсов',
      'Внедрение технологических решений для оптимизации административных процессов',
      'Устранение технических инцидентов в оборудовании, сетях и системах'
    ],
    exp2Role: "Backend Разработчик",
    exp2Date: "Апрель 2025 - Март 2026",
    exp2Org: "Dev Jujuy",
    exp2Items: [
      'Разработка REST API для системной интеграции',
      'Реализация backend сервисов с использованием Java и Spring Boot',
      'Разработка приложений на основе микросервисной архитектуры',
      'Интеграция с базами данных PostgreSQL',
      'Документирование API с помощью Swagger / OpenAPI'
    ],
    exp3Role: "Преподаватель-ассистент – Программирование",
    exp3Date: "Февраль 2025 - Настоящее время",
    exp3Org: "Структурное программирование на C++",
    exp3Items: [
      'Преподавание основ структурного программирования на C++',
      'Объяснение логики программирования, управляющих структур и функций',
      'Помощь студентам в решении задач и академических проектов'
    ],
    projectsTitle: "ИЗБРАННЫЕ ПРОЕКТЫ",
    proj1Name: "EasyCommerce",
    proj1Status: "Коммерциализированный проект",
    proj1Desc: "Полноценный бэкенд электронной коммерции, разработанный на Java и Spring Boot",
    proj1Items: [
      'Реализация постоянной корзины покупок с управлением сессиями',
      'Система оформления заказов со снимками цен для транзакционной целостности',
      'Управление ролями и разрешениями с помощью Spring Security и JWT',
      'Чистая архитектура с разделением на уровни и шаблонами проектирования',
      'Развертывание в производственной среде на Render с базой данных PostgreSQL'
    ],
    proj1Tech: "Технологии: Java 21, Spring Boot, Spring Security, JWT, JPA, Hibernate, PostgreSQL, Docker, Maven",
    educationTitle: "ОБРАЗОВАНИЕ",
    edu1Name: "Университетский аналитик-программист",
    edu1Org: "Инженерный факультет – Национальный университет Жужуя (UNJu)",
    certTitle: "СЕРТИФИКАТЫ",
    cert1Name: "Разработка REST API с помощью Spring Boot",
    cert1Date: "Июль 2024",
    cert1Org: "Todo Code Academy",
    cert2Name: "Микросервисы со Spring Cloud",
    cert2Date: "Сентябрь 2024",
    cert2Org: "Todo Code Academy"
  }
};

function generateCVForLanguage(langCode, filename) {
  return new Promise((resolve) => {
    const doc = new PDFDocument({ margin: 50, size: 'A4' });
    const stream = fs.createWriteStream(filename);
    doc.pipe(stream);

    // Usa fuentes del sistema Windows para soporte de acentos y cirilico (Ruso)
    const fontRegular = 'C:/Windows/Fonts/arial.ttf';
    const fontBold = 'C:/Windows/Fonts/arialbd.ttf';
    const fontItalic = 'C:/Windows/Fonts/ariali.ttf';
    
    // Si Arial no existe (ej. no está en Windows puro) haremos un fallback simple, 
    // pero PDFKit tirará error si la ruta no existe así que revisamos:
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
    const textColor = '#333333';
    const primaryColor = '#111827';
    const lineColor = '#E5E7EB';
    
    // Header
    setFont('bold').fontSize(26).fillColor(primaryColor).text('Fabrizio Luciano Armada');
    doc.moveDown(0.3);
    setFont('regular').fontSize(14).fillColor('#4B5563').text(data.role);
    doc.moveDown(0.8);
    
    setFont('regular').fontSize(10).fillColor('#6B7280')
       .text(`fabrizioarmada3@gmail.com   |   ${data.location}`);
    doc.moveDown(0.3);
    doc.text('linkedin.com/in/fabrizio3   |   github.com/fabrizio323');
    doc.moveDown(2.5);

    function drawSectionHeader(title) {
      setFont('bold').fontSize(14).fillColor(primaryColor).text(title);
      doc.moveDown(0.2);
      doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor(lineColor).stroke();
      doc.moveDown(0.5);
    }

    // SUMMARY
    drawSectionHeader(data.summaryTitle);
    setFont('regular').fontSize(11).fillColor(textColor)
       .text(data.summaryText, { align: 'justify', lineGap: 3 });
    doc.moveDown(1.5);

    // SKILLS
    drawSectionHeader(data.skillsTitle);
    data.skills.forEach(skill => {
      setFont('bold').fontSize(10).fillColor(primaryColor).text(skill.k, { continued: true });
      setFont('regular').fillColor(textColor).text(` ${skill.v}`, { lineGap: 5 });
    });
    doc.moveDown(1.5);

    // EXPERIENCE
    drawSectionHeader(data.experienceTitle);

    // Experience 1
    setFont('bold').fontSize(11).fillColor(primaryColor).text(data.exp1Role, { continued: true });
    setFont('regular').fontSize(10).fillColor('#6B7280').text(`    ${data.exp1Date}`, { align: 'right' });
    doc.moveUp();
    doc.moveDown(1);
    setFont('regular').fontSize(11).fillColor(textColor).text(data.exp1Org);
    doc.moveDown(0.3);
    data.exp1Items.forEach(item => {
      setFont('regular').fontSize(10).fillColor(textColor).text(`•  ${item}`, { indent: 10, lineGap: 2 });
    });
    doc.moveDown(1);

    // Experience 2
    setFont('bold').fontSize(11).fillColor(primaryColor).text(data.exp2Role, { continued: true });
    setFont('regular').fontSize(10).fillColor('#6B7280').text(`    ${data.exp2Date}`, { align: 'right' });
    doc.moveUp();
    doc.moveDown(1);
    setFont('regular').fontSize(11).fillColor(textColor).text(data.exp2Org);
    doc.moveDown(0.3);
    data.exp2Items.forEach(item => {
      setFont('regular').fontSize(10).fillColor(textColor).text(`•  ${item}`, { indent: 10, lineGap: 2 });
    });
    doc.moveDown(1);

    // Experience 3
    setFont('bold').fontSize(11).fillColor(primaryColor).text(data.exp3Role, { continued: true });
    setFont('regular').fontSize(10).fillColor('#6B7280').text(`    ${data.exp3Date}`, { align: 'right' });
    doc.moveUp();
    doc.moveDown(1);
    setFont('regular').fontSize(11).fillColor(textColor).text(data.exp3Org);
    doc.moveDown(0.3);
    data.exp3Items.forEach(item => {
      setFont('regular').fontSize(10).fillColor(textColor).text(`•  ${item}`, { indent: 10, lineGap: 2 });
    });
    doc.moveDown(1.5);

    // PROJECTS
    drawSectionHeader(data.projectsTitle);
    setFont('bold').fontSize(11).fillColor(primaryColor).text(data.proj1Name, { continued: true });
    setFont('regular').fontSize(10).fillColor('#6B7280').text(`    ${data.proj1Status}`, { align: 'right' });
    doc.moveUp();
    doc.moveDown(1);
    setFont('italic').fontSize(10).fillColor(textColor).text(data.proj1Desc);
    doc.moveDown(0.3);
    data.proj1Items.forEach(item => {
      setFont('regular').fontSize(10).fillColor(textColor).text(`•  ${item}`, { indent: 10, lineGap: 2 });
    });
    doc.moveDown(0.3);
    setFont('regular').fontSize(10).fillColor('#4B5563').text(data.proj1Tech, { indent: 10 });
    doc.moveDown(1.5);

    // EDUCATION
    drawSectionHeader(data.educationTitle);
    setFont('bold').fontSize(11).fillColor(primaryColor).text(data.edu1Name);
    setFont('regular').fontSize(10).fillColor(textColor).text(data.edu1Org);
    doc.moveDown(1.5);

    // CERTIFICATIONS
    drawSectionHeader(data.certTitle);
    setFont('bold').fontSize(11).fillColor(primaryColor).text(data.cert1Name, { continued: true });
    setFont('regular').fontSize(10).fillColor('#6B7280').text(`    ${data.cert1Date}`, { align: 'right' });
    doc.moveUp();
    doc.moveDown(1);
    setFont('regular').fontSize(10).fillColor(textColor).text(data.cert1Org);
    doc.moveDown(0.8);
    
    setFont('bold').fontSize(11).fillColor(primaryColor).text(data.cert2Name, { continued: true });
    setFont('regular').fontSize(10).fillColor('#6B7280').text(`    ${data.cert2Date}`, { align: 'right' });
    doc.moveUp();
    doc.moveDown(1);
    setFont('regular').fontSize(10).fillColor(textColor).text(data.cert2Org);

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
