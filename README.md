┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ # 📊 QR Code Attendance Management System                                                        │
│                                                                                                  │
│ <div align="center">                                                                             │
│                                                                                                  │
│ ![Django](https://img.shields.io/badge/Django-4.2+-092E20?style=for-the-badge&logo=django)       │
│ ![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python)      │
│ ![Status](https://img.shields.io/badge/Status-Production--Ready-brightgreen?style=for-the-badge) │
│ ![License](https://img.shields.io/badge/License-Educational-blue?style=for-the-badge)            │
│                                                                                                  │
│ </div>                                                                                           │
│                                                                                                  │
│ > [!NOTE]                                                                                        │
│ > A modern, robust, and secure **Django-based QR Code Attendance Management System** tailored     │
│ > for colleges, schools, and academic institutions. This system streamlines classroom            │
│ > management by allowing faculty members to instantly generate dynamic attendance sessions       │
│ > while empowering students to seamlessly mark their presence via real-time QR code scanning.   │
│                                                                                                  │
│ ──────────────────────────────────────────────────────────────────────────────────────────────── │
│                                                                                                  │
│ ## 🚀 Key Features                                                                               │
│                                                                                                  │
│ > [!TIP]                                                                                         │
│ > ### 👨‍🎓 Student Dashboard                                                                      │
│ > * **🔐 Secure Authentication:** Personalized student registration and login panels.            │
│ > * **📸 Instant Scan:** In-app QR code scanning capability for rapid check-ins.                 │
│ > * **📅 Attendance Tracking:** Subject-wise breakdown and historical logs.                     │
│ > * **📈 Real-Time Analytics:** Visual progress bars displaying personal attendance thresholds.  │
│                                                                                                  │
│ > [!IMPORTANT]                                                                                   │
│ > ### 👩‍🏫 Faculty Dashboard                                                                      │
│ > * **⚡ Dynamic Session Creation:** Generate unique, time-sensitive attendance sessions.         │
│ > * **👁️ Live Monitoring:** Live-updating grid displaying students as they check-in.             │
│ > * **📊 Class Analytics:** Comprehensive overview charts detailing overall class performance.    │
│ > * **🛠️ Data Control:** Tools to modify, manage, and override students, subjects, schedules.     │
│                                                                                                  │
│ > [!NOTE]                                                                                        │
│ > ### ⚙️ Administrative Controls                                                                 │
│ > * **🏫 Academic Directory:** Manage master databases for departments and course timetables.     │
│ > * **👥 User Management:** Audit logs, permission provisioning, and role assignment.            │
│ > * **💾 System Backups:** Database configuration and migration utilities.                       │
│                                                                                                  │
│ ──────────────────────────────────────────────────────────────────────────────────────────────── │
│                                                                                                  │
│ ## 🛠️ Technology Stack                                                                           │
│                                                                                                  │
│ | Layer | Technologies |                                                                         │
│ | :--- | :--- |                                                                                  │
│ | **Backend Framework** | `Python` 🟡 , `Django` 🟢 |                                              │
│ | **Frontend UI/UX** | `HTML5` 🟠 , `CSS3` 🔵 , `JavaScript (ES6)` 🟡 , `Bootstrap 5` 🟣 |            │
│ | **Database Engines** | `SQLite` 🔵 (Dev), `MySQL` 🔵 / `PostgreSQL` 🔵 (Production) |            │
│ | **Deployment & WSGI** | `Render` / `Railway` ⚙️, `Gunicorn` 🚀, `WhiteNoise` 🧊 |                │
│                                                                                                  │
│ ──────────────────────────────────────────────────────────────────────────────────────────────── │
│                                                                                                  │
│ ## 📂 Project Directory Structure                                                                │
│                                                                                                  │
│ ```text                                                                                          │
│ qr-attendance-system/                                                                            │
│ │                                                                                                │
│ ├── 📂 qr_attendance/       # Main project configuration directory                               │
│ │   ├── settings.py         # App configurations, database routers & assets                      │
│ │   └── urls.py             # Global URL routing                                                 │
│ ├── 📂 qr_app/              # Main business logic application (Views, QR generation)              │
│ ├── 📂 login/               # Authentication & Profile management system                         │
│ ├── 📂 templates/           # Unified UI HTML documents                                          │
│ ├── 📂 static/              # Production static asset pipeline (CSS, JS)                         │
│ ├── 📂 media/               # Dynamic system uploads (Generated QR codes)                        │
│ ├── 📄 db.sqlite3           # Local developer database                                           │
│ └── ⚙️ manage.py            # Django administrative command-line utility                         │
│ ```                                                                                              │
│                                                                                                  │
│ ──────────────────────────────────────────────────────────────────────────────────────────────── │
│                                                                                                  │
│ ## 🎯 System Workflow                                                                            │
│                                                                                                  │
│ ```text                                                                                          │
│ [Faculty] ──> Generates Attendance Session ──> System Outputs Unique QR Code                     │
│                                                             │                                    │
│ [Student] ──> Logs into Dashboard ──> Scans Dynamic QR ◄────┘                                    │
│                                 │                                                                │
│                                 ▼                                                                │
│              System Verifies Token & Timestamp                                                   │
│                                 │                                                                │
│             ┌───────────────────┴───────────────────┐                                            │
│             ▼                                       ▼                                            │
│     [Valid Session]                        [Invalid/Expired]                                     │
│ Attendance Stored & Live Updated          Access Denied / Error Shown                            │
│ ```                                                                                              │
│                                                                                                  │
│ ──────────────────────────────────────────────────────────────────────────────────────────────── │
│                                                                                                  │
│ ## 💻 Installation & Local Setup                                                                │
│                                                                                                  │
│ ### 1️⃣ Clone the Repository                                                                     │
│ ```bash                                                                                          │
│ git clone [https://github.com/your-username/qr-attendance-system.git](https://github.com/your-username/qr-attendance-system.git)                              │
│ cd qr-attendance-system                                                                          │
│ ```                                                                                              │
│                                                                                                  │
│ ### 2️⃣ Configure Virtual Environment                                                             │
│ * **💻 Windows:** `python -m venv venv` then `venv\Scripts\activate`                              │
│ * **🍎 Linux / macOS:** `python3 -m venv venv` then `source venv/bin/activate`                   │
│                                                                                                  │
│ ### 3️⃣ Setup Environment & Database                                                              │
│ ```bash                                                                                          │
│ pip install -r requirements.txt                                                                  │
│ python manage.py makemigrations                                                                  │
│ python manage.py migrate                                                                         │
│ python manage.py createsuperuser                                                                 │
│ python manage.py runserver                                                                       │
│ ```                                                                                              │
│                                                                                                  │
│ ──────────────────────────────────────────────────────────────────────────────────────────────── │
│                                                                                                  │
│ ## 🗄️ Production Database Configuration (MySQL)                                                 │
│                                                                                                  │
│ ```python                                                                                        │
│ DATABASES = {                                                                                    │
│     'default': {                                                                                 │
│         'ENGINE': 'django.db.backends.mysql',                                                    │
│         'NAME': 'qr_attendance',                                                                 │
│         'USER': 'your_db_user',                                                                  │
│         'PASSWORD': 'your_secure_password',                                                      │
│         'HOST': 'localhost',                                                                     │
│         'PORT': '3306',                                                                          │
│     }                                                                                            │
│ }                                                                                                │
│ ```                                                                                              │
│                                                                                                  │
│ ──────────────────────────────────────────────────────────────────────────────────────────────── │
│                                                                                                  │
│ ## 🔒 Security Framework & Constraints                                                           │
│                                                                                                  │
│ * **🛡️ CSRF Protection:** Enabled across all form submittals and scanners.                      │
│ * **⏳ Token Verification:** Short-lived dynamic tokens prevent single QR link reuse.             │
│                                                                                                  │
│ > [!WARNING]                                                                                     │
│ > * **SQLite Engine:** Not recommended for multi-threaded concurrent production environments.    │
│ > * **Proximity Auditing:** Base system lacks location validation (Mitigation: Add Geofencing).  │
│                                                                                                  │
│ ──────────────────────────────────────────────────────────────────────────────────────────────── │
│                                                                                                  │
│ ## 🤝 Contribution & License                                                                    │
│                                                                                                  │
│ 1. Fork the repository page and create your Feature Branch.                                      │
│ 2. This project is released under **Educational and Institutional Learning Purposes**.           │
│                                                                                                  │
│ 👤 **Project Author:** Saurabh Saini — *Full-Stack Developer / Project Maintainer* │
│ 🌟 *If this tool streamlined your workflow, consider dropping a star on the GitHub repo!* │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
