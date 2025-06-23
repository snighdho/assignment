# 🔥 Full Stack User Management Application

A professional **MERN stack** (MongoDB, Express, React, Node.js) based User Management System with advanced features like:

- Search & Filtering (by Name and Email)
- Modal-based user details popup (DaisyUI modal)
- Clean UI with TailwindCSS & DaisyUI
- Fully API integrated frontend
- Axios powered asynchronous data fetching

---

## 🚀 Tech Stack

| Frontend | Backend | Styling | Other |
| -------- | ------- | ------- | ----- |
| React.js | Node.js | TailwindCSS | Axios |
| Vite | Express.js | DaisyUI | MongoDB Atlas |
| React Hooks | REST API | | 

---

## 🎯 Features

- ✅ **API Integrated User Fetching**
- ✅ **Dynamic Search** (realtime filter as you type)
- ✅ **DaisyUI Modal** for detailed user view
- ✅ Edit profile option
- ✅ Fully responsive mobile-friendly design
- ✅ Clean state management using React Hooks
- ✅ Authentication using firebase
- ✅ Used MongoDb as database
- ✅ Used axios
- ✅ Private route(Redirect to log in page if not login)


---

## 🏗 Project Structure

client-manage/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── firebase.config.js
│   ├── layout/
│   │   └── Main.jsx
│   ├── pages/
│   │   ├── Components/
│   │   │   └── (e.g., Header, Footer, Forms components)
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── Login/
│   │   │   └── Login.jsx
│   │   ├── ProfileDetailsPage/
│   │   │   └── ProfileDetailsPage.jsx
│   │   ├── Register/
│   │   │   └── Register.jsx
│   │   ├── UpdateProfilePage/
│   │   │   └── UpdateProfilePage.jsx
│   │   ├── UserDetails/
│   │   │   └── UserDetails.jsx
│   │   |__other pages
│   ├── routes/
│   │   └── Route.jsx  
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.local
├── .gitignore
├── .eslintrc.cjs
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js

## database connect
PORT=5000
DB_URI=mongodb://localhost:27017/profileDB # (yourdbname)=>profileDB    # Make sure .env file exists


## project run
## frontend
cd ....prep\client-manage-main\client-manage-main         # or the actual backend folder name
npm install        # install dependencies
npm run dev        # or: node index.js / nodemon index.js

## backend
cd ....prep\clientManage-server-main\clientManage-server-main         # or the actual backend folder name
npm install        # install dependencies
nodemon index.js        # or: node index.js / nodemon index.js

## Deployment:
 Front end can be deployed to Netlify and backend can be deployed using vercel
Can be run into local environment by installing all dependencies in local environment