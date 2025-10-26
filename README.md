# 📦 React User Management Dashboard

A simple and responsive **User Management Dashboard** built with **React.js** and **Tailwind CSS**.  
It allows users to **view, search, and add users** dynamically using data from an external API (`jsonplaceholder`) and local storage.

---

## ⚙️ Setup Instructions

Follow the steps below to run the project locally 👇

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/react-user-dashboard.git
cd react-user-dashboard
2️⃣ Install Dependencies

npm install
3️⃣ Start the Development Server


npm run dev
Once started, open your browser and visit:
👉 http://localhost:5173/ (for Vite)
or
👉 http://localhost:3000/ (for Create React App)

🧠 Short Description of Approach
React Router DOM is used for page navigation (Home, Add User, User Details).

Home Page: Fetches users from the JSONPlaceholder API and merges them with users stored in localStorage.

Add User Page: Allows adding new users with form validation; data is persisted in localStorage.

User Details Page: Displays complete details of a specific user using the id parameter.

Card Component: Reusable card to display user info with Tailwind hover effects.

Tailwind CSS provides a modern and fully responsive UI.

🧩 Project Structure

src/
│
├── Components/
│   └── Card.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── AddUser.jsx
│   └── UserDetails.jsx
│
├── App.jsx
├── index.jsx
└── index.css

Live Link -
                https://user-management-dashboard-8ris.onrender.com/
 Add User -     https://user-management-dashboard-8ris.onrender.com/add
