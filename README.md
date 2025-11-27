# 🌐 Frontend-Dev

This repository contains all topic-wise branches covered during the **BridgeLabz Web Development Training** program. Each branch focuses on a specific concept or technology used in frontend development — from basic HTML to JavaScript and React (ongoing).

---

## 🎓 Mini Project – Student Result App

The `student-result-app` folder is a Vite + React project that demonstrates Add/View/Edit/Delete operations using only `useState` and button-triggered Fetch requests to a JSON Server backend (`db.json`). It contains:

- `StudentList` to display students and expose Load/Add/Edit/Delete/View actions.
- `StudentForm` to handle both create and update flows with simple validation.
- `StudentDetails` to show a read-only card for a selected student.
- `services/studentService.js` to wrap all CRUD API calls.

### ⚙️ Install & Run

```bash
cd student-result-app
npm install            # install React + JSON Server dependencies
npm run server         # start JSON Server on http://localhost:3001
npm run dev            # start Vite dev server on http://localhost:5173
```

Because no `useEffect` hooks are used, click **Load Students** after every Add/Edit/Delete to fetch the latest data from JSON Server.
