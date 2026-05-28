QR Attendance System

A modern Django-based QR Code Attendance Management System for colleges, schools, and institutions.
This system allows faculty to generate QR-based attendance sessions and students to mark attendance quickly using QR scanning.

---

Features

Student Features

- Student login system
- QR code attendance scanning
- Attendance history
- Subject-wise attendance tracking
- Personal dashboard
- Real-time attendance confirmation

Faculty Features

- Faculty login
- Create attendance sessions
- Generate QR codes
- Manage students
- Manage subjects
- View attendance reports
- Monitor live attendance
- Attendance analytics

Admin Features

- Manage users
- Manage departments
- Manage subjects and timetable
- Database management
- Attendance monitoring

---

Technology Stack

Backend

- Python
- Django

Frontend

- HTML5
- CSS3
- JavaScript
- Bootstrap

Database

- SQLite (Default)
- MySQL/PostgreSQL Supported

Deployment

- Render
- Railway
- Gunicorn

---

Project Structure

qr_attendance/
│
├── qr_attendance/        # Main Django Project
├── qr_app/               # Main Attendance App
├── login/                # Authentication App
├── templates/            # HTML Templates
├── static/               # CSS, JS, Images
├── media/                # Uploaded Files
├── db.sqlite3            # Database
├── manage.py
├── requirements.txt
├── build.sh
├── Procfile
└── render.yaml

---

Installation Guide

1. Clone Repository

git clone https://github.com/your-username/qr-attendance-system.git
cd qr-attendance-system

---

2. Create Virtual Environment

Windows

python -m venv venv
venv\\Scripts\\activate

Linux/Mac

python3 -m venv venv
source venv/bin/activate

---

3. Install Dependencies

pip install -r requirements.txt

---

4. Apply Migrations

python manage.py makemigrations
python manage.py migrate

---

5. Create Superuser

python manage.py createsuperuser

---

6. Run Server

python manage.py runserver

Server URL:

http://127.0.0.1:8000/

---

Database Configuration

SQLite (Default)

Already configured in:

settings.py

---

MySQL Configuration

Install:

pip install mysqlclient

Update "settings.py":

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'qr_attendance',
        'USER': 'root',
        'PASSWORD': 'yourpassword',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

---

Deployment

Deploy on Render

Build Command

./build.sh

Start Command

gunicorn qr_attendance.wsgi

---

QR Attendance Workflow

1. Faculty creates attendance session
2. System generates QR code
3. Student scans QR code
4. Attendance gets verified
5. Attendance stored in database
6. Faculty can monitor attendance live

---

Security Features

- Authentication system
- CSRF protection
- Session management
- Faculty-only access
- Student access validation

---

Future Improvements

- Face recognition attendance
- GPS verification
- Android application
- REST API integration
- Push notifications
- Advanced analytics
- PDF/Excel exports

---

Screenshots

Add project screenshots here.

Example:

![Dashboard](screenshots/dashboard.png)

---

Requirements

Main dependencies:

Django
gunicorn
whitenoise
qrcode
pillow

See full dependencies in:

requirements.txt

---

Known Issues

- SQLite not recommended for large production deployments
- QR code reuse protection can be improved
- Session management optimization needed

---

Contributing

Contributions are welcome.

Steps

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push branch
5. Create Pull Request

---

License

This project is for educational and learning purposes.

---

Author

Developed by Buddy

---

Support

If you like this project, give it a ⭐ on GitHub.
