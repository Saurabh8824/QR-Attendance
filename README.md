# 📊 QR Code Attendance Management System

[![Django](https://img.shields.io/badge/Django-4.2+-092E20?style=for-the-badge&logo=django&logoColor=white)](https://djangoproject.com/)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org/)
[![License](https://img.shields.io/badge/License-Educational-blue?style=for-the-badge)](#license)

A modern, robust, and secure **Django-based QR Code Attendance Management System** tailored for colleges, schools, and academic institutions. This system streamlines classroom management by allowing faculty members to instantly generate dynamic attendance sessions while empowering students to seamlessly mark their presence via real-time QR code scanning.

---

## 🚀 Key Features

### 👨‍🎓 Student Dashboard
* **Secure Authentication:** Personalized student registration and login panels.
* **Instant Scan:** In-app QR code scanning capability for rapid check-ins.
* **Attendance Tracking:** Subject-wise breakdown and historical logs.
* **Real-Time Analytics:** Visual progress bars displaying personal attendance thresholds.

### 👩‍🏫 Faculty Dashboard
* **Dynamic Session Creation:** Generate unique, time-sensitive attendance sessions per subject.
* **Live Monitoring:** Live-updating grid displaying students as they check-in.
* **Class Analytics:** Comprehensive overview charts detailing overall class performance.
* **Data Control:** Comprehensive tools to modify, manage, and override students, subjects, and schedules.

### ⚙️ Administrative Controls
* **Academic Directory:** Manage master databases for departments, semesters, and course timetables.
* **User Management:** Audit logs, permission provisioning, and role assignment (Admin, Faculty, Student).
* **System Backups:** Database configuration and migration utilities.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Backend Framework** | Python, Django |
| **Frontend UI/UX** | HTML5, CSS3, JavaScript (ES6), Bootstrap 5 |
| **Database Engines** | SQLite (Development), MySQL / PostgreSQL (Production) |
| **Deployment & WSGI** | Render / Railway, Gunicorn, WhiteNoise (Static Files) |

---

## 📂 Project Directory Structure

```text
qr-attendance-system/
│
├── qr_attendance/          # Main project configuration directory
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py         # App configurations, database routers & assets
│   ├── urls.py             # Global URL routing
│   └── wsgi.py             # Web Server Gateway Interface configuration
│
├── qr_app/                 # Main business logic application
│   ├── migrations/         # Database schema tracking
│   ├── models.py           # Database Schemas (Attendance, Sessions, Subjects)
│   ├── views.py            # Dashboard rendering & QR logic
│   └── urls.py             # App-specific routing
│
├── login/                  # Authentication & Profile management system
│   ├── models.py           # Custom user profiles / roles
│   └── views.py            # Login, registration, and logout handlers
│
├── templates/              # Unified UI HTML documents
│   ├── base.html           # Main boilerplate layout
│   ├── qr_app/             # Business workflow templates
│   └── login/              # Auth flow templates
│
├── static/                 # Production static asset pipeline (CSS, JS, Images)
├── media/                  # Dynamic system uploads (Generated QR codes, profiles)
│
├── db.sqlite3              # Local developer database
├── manage.py               # Django administrative command-line utility
├── requirements.txt        # Production Python dependencies package
├── build.sh                # Automated build pipeline script for hosting
├── Procfile                # Process file for production web servers
└── render.yaml             # Infrastructure-as-code blueprint for Render

```

---

## 🎯 System Workflow

```text
[Faculty] -> Generates Attendance Session -> System Outputs Unique QR Code
                                                        │
[Student] -> Logs into Dashboard -> Scans Dynamic QR ◄──┘
                                │
                                ▼
         System Verifies Token & Timestamp
                                │
            ┌───────────────────┴───────────────────┐
            ▼                                       ▼
    [Valid Session]                        [Invalid/Expired]
Attendance Stored in DB & Live Updated      Access Denied / Error Shown

```

---

## 💻 Installation & Local Setup

### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/qr-attendance-system.git](https://github.com/your-username/qr-attendance-system.git)
cd qr-attendance-system

```

### 2. Configure Virtual Environment

* **Windows (CMD/PowerShell):**

```bash
    python -m venv venv
    venv\Scripts\activate
    ```
* **Linux / macOS:**
```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

### 3. Install Core Dependencies
```bash
pip install -r requirements.txt

```

### 4. Database Initialization

Execute the schema generation and initial migrations:

```bash
python manage.py makemigrations
python manage.py migrate

```

### 5. Create Administrative Instance

Generate your root superuser account to access `/admin`:

```bash
python manage.py createsuperuser

```

### 6. Boot Development Server

```bash
python manage.py runserver

```

### 7. Once initialized, navigate to 
`http://127.0.0.1:8000/` in your preferred web browser.

---

## 🗄️ Production Database Configuration

By default, the application runs on **SQLite**. To transition to a production-grade **MySQL** ecosystem, follow these configurations:

### Step 1: Install MySQL Adapter

```bash
pip install mysqlclient

```

### Step 2: Edit `qr_attendance/settings.py`

Swap out the default database block with the following template:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'qr_attendance',
        'USER': 'your_db_user',
        'PASSWORD': 'your_secure_password',
        'HOST': 'localhost',
        'PORT': '3306',
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
        },
    }
}

```

---

## ☁️ Deployment Pipeline (Render / Railway)

This repository includes custom runtime parameters native to cloud engines like **Render**.

* **Build Shell Script (`build.sh`):**

```bash
    #!/usr/bin/env bash
    # exit on error
    set -o errexit

    pip install -r requirements.txt
    python manage.py collectstatic --no-input
    python manage.py migrate
```
* **Web Server Engine Command (`Procfile`):**
```text
    web: gunicorn qr_attendance.wsgi:application
    ```
```
---

## 🔒 Security Framework
* **Cross-Site Request Forgery (CSRF) Protection:** Enabled across all form submittals and scanners.
* **Session Token Verification:** Short-lived, dynamic generation prevents single QR reuse via unauthorized links.
* **Role-Based Access Control (RBAC):** Strict view-level restrictions preventing students from viewing administration dashboards.

---

## 📈 Future Roadmaps
* 🤖 **Biometric Verification:** Secondary validation utilizing computer-vision based facial matching.
* 📍 **Geofencing / GPS Check-In:** Limits scanning range to active classroom coordinates.
* 📱 **Native Application:** Porting features to a lightweight Flutter/React Native companion application.
* 📊 **Automated Reporting:** Generates downloadable Excel sheets and PDF summaries weekly for faculty.

---

## 🖼️ Application Interfaces
> *Add polished user interface captures here to demonstrate visual flow.*

| Student Scanning Dashboard | Faculty Live Monitor |
| :---: | :---: |
| ![Dashboard Layout](screenshots/dashboard.png) | ![Live Attendance Feed](screenshots/live_feed.png) |

---

## ⚠️ Known Implementation Constraints
* **SQLite Engine:** Not recommended for heavy multi-threaded concurrent production usage. Move to MySQL or PostgreSQL before going live.
* **Proximity Auditing:** The base application cannot prevent a student from messaging a photo of the QR code to an off-site classmate. (Mitigation: Enable geolocation parameters or reduce QR expiration rate).

---

## 🤝 Contribution Guidelines

We welcome contributions to elevate this system! 

1. Fork the repository project page.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your developments (`git commit -m 'Add some AmazingFeature'`).
4. Push onto the branch (`git push origin feature/AmazingFeature`).
5. Open a comprehensive **Pull Request**.

---

## 📄 License
This project is released for **educational and institutional training purposes**.

---

## 👤 Project Author
* **Saurabh Saini** - *Full-Stack Developer / Project Maintainer*
* If this tool streamlined your workflow, consider dropping a ⭐ on our GitHub repository!

```
