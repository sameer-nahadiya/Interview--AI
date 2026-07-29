const resume = () => {
  // inline suggestion: use a constant arrow function for consistent export style
  return `John Doe
1234 Elm Street
Pune, Maharashtra, India 411001
Phone: +91 98765 43210
Email: john.doe@example.com
LinkedIn: linkedin.com/in/johndoe
GitHub: github.com/johndoe

Professional Summary:
Highly motivated MERN Stack Developer with 5+ years of experience building scalable web applications using MongoDB, Express.js, React, and Node.js. Adept at requirement analysis, system design, development, and deployment. Proven track record of delivering high-quality software solutions in agile environments.

Technical Skills:
- Frontend: JavaScript, React, Redux, HTML5, CSS3, SASS, Bootstrap
- Backend: Node.js, Express.js, RESTful APIs, GraphQL
- Database: MongoDB, Mongoose, MySQL
- DevOps: Git, GitHub, Docker, CI/CD, AWS (EC2, S3)
- Testing: Jest, Mocha, Chai, SuperTest
- Tools: VS Code, Postman, Webpack, Babel, npm, Yarn

Professional Experience:
Senior MERN Stack Developer | Stockup Solutions Pvt. Ltd. | Pune, India
June 2022 - Present
- Led development of inventory management and order processing modules for an e-commerce SaaS platform.
- Designed and implemented RESTful APIs in Node.js and Express for product catalog, authentication, and order workflows.
- Built responsive admin dashboards with React, Redux, and custom UI components.
- Integrated MongoDB database schemas and optimized query performance for large datasets.
- Collaborated with QA and product teams during sprint planning and backlog grooming.
- Mentored junior developers, reviewed code, and promoted best development practices.

Full Stack Developer | TechWave Labs | Mumbai, India
January 2020 - May 2022
- Developed customer-facing applications using React and Redux with mobile-first design.
- Created backend services in Node.js and Express to manage user accounts, transactions, and notifications.
- Implemented JWT-based authentication and role-based access control.
- Performed API versioning and documentation using OpenAPI/Swagger.
- Automated deployment using Docker and AWS services.
- Reduced page load times by 30% through code splitting and frontend performance tuning.

Software Engineer | BlueHalo Technologies | Pune, India
July 2018 - December 2019
- Delivered new features for a SaaS platform using MongoDB, Express, React, and Node.js.
- Created reusable UI libraries and modular frontend components.
- Built complex backend integrations with third-party payment gateways.
- Conducted unit and integration testing to maintain application stability.
- Participated in daily standups and code reviews.

Education:
Bachelor of Engineering in Computer Science
Savitribai Phule Pune University | 2014 - 2018

Certifications:
- MongoDB Developer Certification
- Node.js Certified Developer
- React Professional Certification

Projects:
Inventory Analytics Dashboard
- Developed a dashboard to visualize stock levels, sales trends, and reorder alerts.
- Used React for frontend charts and Node.js for API endpoints.
- Integrated MongoDB aggregations for reporting data.

Job Portal Application
- Built a full stack job portal with user signup, company profiles, and application tracking.
- Implemented search and filter capabilities using MongoDB Atlas search.

Volunteer Experience:
Mentor, Local Coding Bootcamp
- Conducted workshops on JavaScript fundamentals, React, and backend development.
- Reviewed student projects and provided feedback on architecture and coding standards.

Professional Attributes:
- Strong problem-solving and analytical skills.
- Excellent communication and teamwork abilities.
- Detail-oriented and committed to delivering polished solutions.
- Continuously learning new tools and best practices.

References:
Available upon request.`;
};

const selfDescription = () => {
  // inline suggestion: use a concise self-description for a MERN Stack developer
  return `I am a driven MERN Stack Developer with a passion for building end-to-end web applications. I enjoy combining clean frontend experiences with efficient backend services to deliver products that solve real problems. I am comfortable working across the stack, from designing database schemas and RESTful APIs to developing user-friendly React interfaces. I value collaboration, agile workflows, and continuous improvement. My focus is on writing maintainable, scalable code while staying current with evolving JavaScript and Node.js ecosystems.`;
};

const jobDescription = () => {
  // inline suggestion: target the description to a Node.js backend role
  return `We are looking for a skilled Backend Developer with strong Node.js experience to support our growing engineering team. The ideal candidate will design and develop robust server-side applications, build RESTful APIs, and integrate with databases such as MongoDB. Responsibilities include creating scalable backend services, optimizing performance, ensuring security and reliability, and collaborating with frontend engineers and product stakeholders. Experience with Express.js, authentication, data modeling, and cloud deployment is highly valued. The role requires a proactive problem solver who can translate business requirements into clean, maintainable backend solutions.`;
};

module.exports = {
  resume,
  selfDescription,
  jobDescription,
};
