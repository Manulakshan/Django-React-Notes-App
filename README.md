# Django-React Notes App

A full-stack note-taking application using Django (backend) and React (frontend). Easily create, view, and delete notes with a modern, responsive UI and a robust API backend.



---

## 🚀 Features
- Create, view, and delete notes
- User-friendly React interface (Vite-powered)
- Django REST API for backend operations
- Modular code structure for easy maintenance
- Responsive design

---

## 🛠️ Tech Stack
- **Frontend:** React, Vite, JavaScript, CSS
- **Backend:** Django, Django REST Framework, SQLite

---

## 📂 Folder Structure
```
Django-React-Notes-App/
├── backend/      # Django backend (API, models, views)
├── frontend/     # React frontend (components, pages, styles)
├── README.md     # Project overview and setup
├── requirements.txt
└── ...
```

---

## ⚙️ Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/Manulakshan/Django-React-Notes-App.git
cd Django-React-Notes-App
```

### 2. Backend Setup (Django)
```bash
cd backend
python -m venv env
# Activate your virtual environment:
# On Windows:
env\Scripts\activate
# On macOS/Linux:
source env/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 3. Frontend Setup (React)
```bash
cd ../frontend
npm install
npm run dev
```

- The backend runs at `http://127.0.0.1:8000/`
- The frontend runs at `http://localhost:5173/`

---

## ✨ Usage
- Open your browser at `http://localhost:5173/`
- Create, view, and delete notes instantly

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License
This project is licensed under the MIT License.

---

## 🙋‍♂️ Author
**Manulakshan**  
[GitHub Profile](https://github.com/Manulakshan)
