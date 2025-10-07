# 🔗 API Agenda – Personal Portfolio

This document outlines the plan for implementing an **API** within my personal portfolio project.  
The goal is to make the portfolio more dynamic by enabling interaction between the frontend and backend — such as displaying projects, managing contact messages, and serving data through RESTful endpoints.

---

##  Objectives

- Build a **RESTful API** to handle data operations for the portfolio.
- Enable real-time updates ( adding new projects without editing HTML manually).
- Secure and document API endpoints for future scalability.
- Connect the frontend with the backend using **HTTP requests (GET, POST, PUT, DELETE)**.

---

##  Planned API Endpoints

| Endpoint | Method | Description |
|-----------|--------|-------------|
| `/api/projects` | **GET** | Fetch all portfolio projects |
| `/api/projects/:id` | **GET** | Fetch a single project by ID |
| `/api/projects` | **POST** | Add a new project (Admin only) |
| `/api/projects/:id` | **PUT** | Update existing project details |
| `/api/projects/:id` | **DELETE** | Delete a project (Admin only) |
| `/api/contact` | **POST** | Submit a message from the contact form |
| `/api/skills` | **GET** | Retrieve categorized skills data |

---

##  Technology Stack

| Layer | Tools |
|-------|-------|
| **Backend Framework** | Node.js + Express.js & Django |
| **Database** | MongoDB / MySQL / SQLite |
| **API Testing** | Postman / Thunder Client |
| **Documentation** | Swagger UI / Markdown Docs |
| **Version Control** | Git & GitHub |

---

##  Security & Validation

- Input validation for all POST and PUT requests  
- Use of environment variables for sensitive credentials  
- CORS configuration for frontend communication  
- Rate limiting and basic authentication for admin routes  

---

##  Expected Outcomes

- Dynamic portfolio powered by backend data  
- Easy API-based project management  
- Enhanced understanding of REST principles  
- Foundation for integrating external APIs ( GitHub, LinkedIn, or Blog API)

---

##  Next Steps

1. Set up the backend server  
2. Define data models (Projects, Skills, Messages)  
3. Implement and test API routes  
4. Connect frontend using fetch/axios  
5. Deploy the API (Vercel)  
6. Write API documentation  

---

##  Reference Materials

- [Express.js Official Docs](https://expressjs.com/)
- [Flask RESTful Docs](https://flask-restful.readthedocs.io/)
- [Swagger Documentation Guide](https://swagger.io/docs/)
- [REST API Design Best Practices](https://www.restapitutorial.com/)

---

>  **Goal:** Build a well-documented API to power my portfolio with dynamic, secure, and scalable backend features.
