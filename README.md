# Team Workspace Management System - Backend

This is a backend API for a Team Workspace Management System built using **Express.js**, **PostgreSQL (Prisma ORM)**, and **Zod**. The API supports user authentication, workspace/project management, file uploads, and role-based access control.

---

## Features

- **Roles & Permissions**
  - Admin: Create workspaces/projects, add members, promote members to admin
  - Member: Access assigned projects only
- **Core APIs**
  - Workspaces: create, list
  - Projects: create, list, assign members
  - Users: promote member to admin
  - Files: upload, list
  - Auth: signup, login, logout, refresh token, profile
- **Validation**
  - Zod validation for API requests 
- **Documentation**
  - Swagger API docs available at - pending

---

## Tech Stack

- Node.js with Express.js
- PostgreSQL database
- Prisma ORM
- Zod validation library
- JWT for authentication
- Swagger for API documentation 
- Deployment: Render / Railway - not done

---

## Prerequisites

- Node.js >= 18
- PostgreSQL
- npm or yarn

---

## Setup & Installation

1. **Clone the repository**  
```bash
git clone <REPO_URL>
cd <REPO_FOLDER>
