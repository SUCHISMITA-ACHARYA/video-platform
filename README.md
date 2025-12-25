🎥 Video Processing Platform

Overview

This is a full-stack video processing platform built for an assignment.
Users can log in, upload videos (based on role), see real-time processing progress, and watch videos.


User Roles:

Viewer:

Email: viewer@test.com
Password: 1234

-Can log in
-Can browse and play videos
-Cannot upload videos

Editor:

Email: editor@test.com
Password: 1234

-Can log in
-Can upload videos
-Can see real-time processing progress
-Can view video status (Safe / Flagged)

Features:

1. JWT-based login system
2. Role-based access control (RBAC)
3. Video upload using Multer
4. Real-time processing progress using Socket.io
5. Simulated video moderation (Safe / Flagged)
6. Video playback using HTML5 video player
7. Clean and role-aware UI

Tech Stack:

Frontend:

-React (Vite)
-CSS
-Axios
-Socket.io Client

Backend:

-Node.js
-Express
-MongoDB
-Mongoose
-Multer
-Socket.io
-JWT

How to Run:

Backend-

cd backend
npm install
node index.js

Runs on: http://localhost:5000

Frontend-

cd frontend
npm install
npm run dev

Runs on: http://localhost:5173

Notes-

Video processing and moderation are mocked to demonstrate workflow
Focus is on architecture, access control, and real-time updates
UI is kept simple, clean, and functional

Status-

✅ All required features from the assignment are implemented.