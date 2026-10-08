# Project Structure & Quick Reference Guide

## Directory Tree

```
d:\ERP Financial\Accounts Bookkeeping\Decoded\Bookkeeping\
│
├─ 📋 DOCUMENTATION (Read First)
│  ├─ COMPLETE_IMPLEMENTATION_SUMMARY.md          ← Master summary (this file location)
│  ├─ STEP3_COMPLETION_SUMMARY.md                 ← Step 3 recap
│  ├─ STEP6_USER_DOCUMENTATION.md                 ← User guide (40+ pages)
│  ├─ STEP7_DEPLOYMENT_GUIDE.md                   ← Deployment manual
│  ├─ README.md                                   ← Project overview
│  └─ SAVEPOINT-2026-03-07.txt                    ← Backup marker
│
├─ 🔧 EXTRACTED APP (Electron Frontend)
│  ├─ main.obfuscated.js                         ← Main process (obfuscated)
│  ├─ preload.js                                  ← Window preload script
│  ├─ shortcutManager.js                          ← Shortcut handling
│  ├─ snap_copy.js                                ← Snap functionality
│  ├─ package.json                                ← NPM dependencies
│  ├─ forge.config.js                             ← Electron Forge config
│  ├─ splash.html / splash.css                    ← Splash screen
│  ├─ whats-new.html                              ← Release notes UI
│  │
│  └─ dist/simple-accounts-manager/              ← Built app
│     ├─ index.html                               ← Main entry point
│     └─ [compiled JS bundles]                    ← Minified code
│
├─ 🐍 LOGIC LAB (Python Backend) **MAIN WORK HERE**
│  │
│  ├─ 📚 Core Engine
│  │  ├─ logic_engine.py                          ← Rule evaluation engine
│  │  ├─ rules.py                                 ← Tax compliance rules
│  │  └─ operational.db                           ← SQLite database
│  │
│  ├─ 🖥️  User Interfaces
│  │  ├─ operational_app.py                       ← Data entry (Tkinter)
│  │  ├─ thinktank_dashboard.py                   ← Admin console (Tkinter)
│  │  └─ ui/
│  │     ├─ theme-studio.html                     ← Theme editor
│  │     └─ theme-preview.html                    ← Theme preview
│  │
│  ├─ STEP 1: E2E Testing ✅
│  │  └─ test_e2e_compliance.py                   ← End-to-end tests (PASSED)
│  │
│  ├─ STEP 2: Report Export ✅
│  │  └─ export_compliance_report.py              ← CSV/PDF generator
│  │
│  ├─ STEP 3: Electron Alerts ✅
│  │  ├─ compliance_alerts_widget.html            ← Floating widget UI (280 LOC)
│  │  ├─ compliance_alerts_provider.py            ← Alert generator (250 LOC)
│  │  ├─ compliance_alerts_ipc.js                 ← IPC bridge (230 LOC)
│  │  ├─ test_compliance_alerts.py                ← Widget tests (220 LOC)
│  │  └─ STEP3_ELECTRON_FRONTEND_INTEGRATION.md   ← Integration guide
│  │
│  ├─ STEP 4: Bank Webhook ✅
│  │  ├─ bank_webhook_listener.py                 ← Webhook handler (450 LOC)
│  │  ├─ bank_webhook_server.py                   ← Flask API server (280 LOC)
│  │  └─ test_bank_webhook.py                     ← Webhook tests (220 LOC)
│  │
│  ├─ STEP 5: Access Control ✅
│  │  ├─ admin_access_control.py                  ← RBAC engine (450 LOC)
│  │  └─ protected_compliance_features.py         ← Protected functions (380 LOC)
│  │
│  ├─ ⚙️  Configuration
│  │  ├─ config/
│  │  │  ├─ tax_rules_pk.json                     ← Pakistan tax rules
│  │  │  └─ atl_registry.json                     ← ATL NTN list
│  │  └─ bank_webhook_config.json                 ← Webhook settings
│  │
│  ├─ 🧪 Testing
│  │  ├─ run_tests.py                             ← Test runner
│  │  ├─ test_cases.json                          ← Test data
│  │  └─ [various test files]                     ← Unit tests
│  │
│  ├─ 📊 Operational Apps
│  │  └─ operational/
│  │     └─ operational_app.py                    ← Data entry UI
│  │
│  ├─ 📈 Dashboard
│  │  └─ thinktank/
│  │     └─ thinktank_dashboard.py                ← Admin dashboard
│  │
│  ├─ 🚀 Startup Scripts
│  │  ├─ start-thinktank.cmd                      ← Launch dashboard
│  │  ├─ start-operational-app.cmd                ← Launch data entry
│  │  ├─ open-theme-studio.cmd                    ← Launch theme editor
│  │  └─ run-testing-build.cmd                    ← Run tests
│  │
│  └─ 📖 README
│     └─ README.md                                ← Logic lab documentation
│
├─ 🎨 BRANDING
│  └─ [Logo and theme files]
│
├─ 📦 INSTALLER BUILD
│  ├─ build-installer.cmd                         ← Main build script
│  ├─ build-installer.ps1                         ← PowerShell fallback
│  ├─ SimpleAccountingApp.iss                     ← Inno Setup config
│  ├─ build-config.json                           ← Build parameters
│  ├─ logo-theme.json                             ← Branding config
│  │
│  ├─ Output/                                     ← Built installers
│  │  └─ SimpleAccountingApp-1.0.0.exe            ← 269 MB installer
│  │
│  └─ Share/                                      ← Shared resources
│     └─ [Runtime files]
│
├─ 🔐 SYNC PLATFORM
│  ├─ README.md                                   ← Sync documentation
│  ├─ DEPLOYMENT-CHECKLIST.md                     ← Deploy checklist
│  ├─ openapi.yaml                                ← API specification
│  └─ schema.sql                                  ← Database schema
│
├─ 🖥️  SIMPLE ACCOUNTING APP (Runtime)
│  ├─ [Electron runtime files]                     ← Packaged app
│  └─ resources/                                  ← App resources
│
├─ 💾 SIMPLE ACCOUNTS MANAGER (User Data)
│  ├─ Local State                                 ← App settings
│  ├─ Preferences                                 ← User preferences
│  └─ [Cache and storage folders]                 ← User data
│
└─ 📂 REPORTS (Generated Exports)
   └─ compliance_report_*.csv                     ← Exported reports
```

---

## Quick Navigation

### For Different Users:

**📊 End Users** (Running the application)
→ Start here: [STEP6_USER_DOCUMENTATION.md](STEP6_USER_DOCUMENTATION.md)
  - Installation: Page 3
  - Features: Page 7
  - Workflows: Page 11
  - Troubleshooting: Page 19

**👨‍💼 Administrators** (Managing system)
→ Start here: [STEP6_USER_DOCUMENTATION.md](STEP6_USER_DOCUMENTATION.md) → User Roles section
  - Access control: admin_access_control.py
  - Audit logs: SQL query in protected_compliance_features.py
  - User management: AccessControlManager class

**🔧 Developers** (Extending the system)
→ Start here: [logic-lab/README.md](logic-lab/README.md)
  - Add new rules: rules.py
  - Modify database: logic-lab/operational.db schema
  - Integrate new APIs: bank_webhook_listener.py example

**🚀 DevOps/Deployment** (Installing & managing)
→ Start here: [STEP7_DEPLOYMENT_GUIDE.md](STEP7_DEPLOYMENT_GUIDE.md)
  - Building: Page 4
  - Deployment: Page 8
  - Troubleshooting: Page 23

---

## Key Files by Purpose

### 🎯 Features

| Feature | Main File | Supporting Files |
|---------|-----------|------------------|
| Compliance Rules | `logic-lab/rules.py` | `logic-lab/config/tax_rules_pk.json` |
| Data Entry | `logic-lab/operational_app.py` | `logic-lab/operational.db` |
| Admin Dashboard | `logic-lab/thinktank_dashboard.py` | `logic-lab/export_compliance_report.py` |
| Real-time Alerts | `logic-lab/compliance_alerts_provider.py` | `compliance_alerts_widget.html`, `compliance_alerts_ipc.js` |
| Bank Webhook | `logic-lab/bank_webhook_listener.py` | `logic-lab/bank_webhook_server.py` |
| Access Control | `logic-lab/admin_access_control.py` | `protected_compliance_features.py` |
| Exports | `logic-lab/export_compliance_report.py` | `thinktank_dashboard.py` |

### 🧪 Testing

| Test | File | Command |
|------|------|---------|
| E2E Compliance (Step 1) | `test_e2e_compliance.py` | `python test_e2e_compliance.py` |
| Widget Functionality (Step 3) | `test_compliance_alerts.py` | `python test_compliance_alerts.py` |
| Bank Webhook (Step 4) | `test_bank_webhook.py` | `python test_bank_webhook.py` |
| All Tests | `run_tests.py` | `python run_tests.py` |

### 📚 Documentation

| Document | Purpose | Pages |
|----------|---------|-------|
| `COMPLETE_IMPLEMENTATION_SUMMARY.md` | Full project status | 50 |
| `STEP3_COMPLETION_SUMMARY.md` | Widget system recap | 30 |
| `STEP6_USER_DOCUMENTATION.md` | User guide | 40+ |
| `STEP7_DEPLOYMENT_GUIDE.md` | Deployment manual | 30+ |
| `logic-lab/README.md` | Technical documentation | 20 |

---

## Common Tasks

### Task: Start Database

```powershell
cd d:\ERP Financial\Accounts Bookkeeping\Decoded\Bookkeeping\logic-lab
sqlite3 operational.db < schema.sql
```

### Task: Launch Operational App (Data Entry)

```powershell
cd d:\ERP Financial\Accounts Bookkeeping\Decoded\Bookkeeping\logic-lab
python operational_app.py
```

### Task: Launch Thinktank (Admin Dashboard)

```powershell
cd d:\ERP Financial\Accounts Bookkeeping\Decoded\Bookkeeping\logic-lab
python thinktank_dashboard.py
```

### Task: Start Bank Webhook Server

```powershell
cd d:\ERP Financial\Accounts Bookkeeping\Decoded\Bookkeeping\logic-lab
python bank_webhook_server.py
# Server runs on http://localhost:5000
```

### Task: Run All Tests

```powershell
cd d:\ERP Financial\Accounts Bookkeeping\Decoded\Bookkeeping\logic-lab
python run_tests.py
```

### Task: Run E2E Test Only

```powershell
cd d:\ERP Financial\Accounts Bookkeeping\Decoded\Bookkeeping\logic-lab
python test_e2e_compliance.py
```

### Task: Build Installer

```powershell
cd d:\ERP Financial\Accounts Bookkeeping\Decoded\Bookkeeping\installer-build
powershell -ExecutionPolicy Bypass -File build-installer.ps1
# Output: Output\SimpleAccountingApp-1.0.0.exe
```

### Task: Export Compliance Report

```powershell
cd d:\ERP Financial\Accounts Bookkeeping\Decoded\Bookkeeping\logic-lab
python -c "
from export_compliance_report import ComplianceReportExporter
exporter = ComplianceReportExporter()
csv_path = exporter.export_csv()
print(f'Exported to: {csv_path}')
"
```

---

## Database Schema Quick Reference

### compliance_entries (Main Data)

```sql
CREATE TABLE compliance_entries (
    id INTEGER PRIMARY KEY,
    entry_date TEXT,
    party_name TEXT,
    amount REAL,
    province TEXT,  -- Punjab, Sindh, KPK, Balochistan
    
    -- Filing Status
    sales_tax_filing_date TEXT,
    sales_tax_status TEXT,  -- pending, filed, overdue, due_soon
    income_tax_filing_date TEXT,
    income_tax_status TEXT,
    provincial_tax_filing_date TEXT,
    provincial_tax_status TEXT,
    
    -- Authority Status
    fbr_verification_date TEXT,
    fbr_status TEXT,  -- ok, attention_required, unknown
    secp_status TEXT,
    pec_status TEXT,
    aedb_status TEXT,
    drap_status TEXT,
    
    -- Bank Reconciliation
    bank_balance REAL,
    book_balance REAL,
    reconciliation_status TEXT,  -- pending, reconciled
    reconciliation_date TEXT,
    
    -- Contact Info
    contact_name TEXT,
    contact_email TEXT,
    contact_phone TEXT
);
```

### bank_reconciliation_log

```sql
CREATE TABLE bank_reconciliation_log (
    id INTEGER PRIMARY KEY,
    entry_id INTEGER,
    transaction_id TEXT,
    amount REAL,
    difference REAL,
    status TEXT,
    timestamp TEXT
);
```

### users (Access Control)

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT UNIQUE,
    email TEXT,
    role TEXT,  -- admin, manager, user, restricted
    created_at TEXT,
    last_login TEXT,
    is_active BOOLEAN
);
```

### audit_logs (Compliance Trail)

```sql
CREATE TABLE audit_logs (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    action TEXT,
    resource_type TEXT,
    resource_id INTEGER,
    status TEXT,  -- success, denied, error
    timestamp TEXT,
    details TEXT
);
```

---

## Python Imports Reference

### Core System

```python
from logic_engine import LogicEngine
from rules import *
import sqlite3
from pathlib import Path
```

### Features

```python
# Compliance Rules
from rules import pk_tax_compliance, bank_reconciliation, threshold_alert

# Alerts
from compliance_alerts_provider import ComplianceAlertsProvider

# Bank Integration
from bank_webhook_listener import BankWebhookHandler, BankTransaction

# Access Control
from admin_access_control import AccessControlManager, UserRole
from protected_compliance_features import ProtectedComplianceFeatures

# Export
from export_compliance_report import ComplianceReportExporter
```

### Testing

```python
import unittest
from test_e2e_compliance import *
from test_compliance_alerts import *
from test_bank_webhook import *
```

---

## Configuration Files

### `config/tax_rules_pk.json`

```json
{
  "fbr": {
    "salesTaxDefault": 18.0
  },
  "provinces": {
    "Punjab": { "serviceSalesTax": 16.0, "goodsSalesTax": 18.0 },
    "Sindh": { "serviceSalesTax": 15.0, "goodsSalesTax": 18.0 },
    "KPK": { "serviceSalesTax": 15.0, "goodsSalesTax": 18.0 },
    "Balochistan": { "serviceSalesTax": 15.0, "goodsSalesTax": 18.0 }
  },
  "wht": {
    "services": { "atlPercent": 8.0, "nonAtlPercent": 16.0 },
    "suppliers": { "atlPercent": 4.5, "nonAtlPercent": 9.0 }
  },
  "bank": {
    "defaultLowBalanceThreshold": 50000.0,
    "reconcileTolerance": 50.0
  },
  "filing": {
    "salesTaxPeriodDays": 30,
    "incomeTaxPeriodDays": 90,
    "provinceReturnPeriodDays": 30
  }
}
```

### `bank_webhook_config.json`

```json
{
  "webhook_secret": "your-secret-key-here",
  "bank_name": "MyBank",
  "tolerance": 50.0,
  "confidence_threshold": 0.75,
  "enabled": true
}
```

---

## Global Variables & Constants

### Paths

```python
BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "operational.db"
CONFIG_PATH = BASE_DIR / "config"
TAX_CONFIG_PATH = CONFIG_PATH / "tax_rules_pk.json"
ATL_REGISTRY_PATH = CONFIG_PATH / "atl_registry.json"
REPORTS_DIR = BASE_DIR.parent / "reports"
```

### Rules

```python
RULE_NAMES = [
    "pk_tax_compliance",      # Calculate tax based on province
    "wht_reconciliation",     # Verify WHT correctly applied
    "bank_reconciliation",    # Match transactions to bank
    "threshold_alert"         # Trigger alerts on thresholds
]
```

### Roles & Permissions

```python
ROLES = ["admin", "manager", "user", "restricted"]
PERMISSIONS = [
    "VIEW_COMPLIANCE_REPORT",
    "EXPORT_COMPLIANCE_REPORT",
    "VIEW_COMPLIANCE_ALERTS",
    "VIEW_BANK_RECONCILIATION",
    "MODIFY_BANK_RECONCILIATION",
    "VIEW_WEBHOOK_CONFIG",
    "MODIFY_WEBHOOK_CONFIG",
    "VIEW_AUDIT_LOG"
]
```

---

## Performance Tips

### Database Optimization
- Add indexes on frequently queried fields:
  ```sql
  CREATE INDEX idx_entry_date ON compliance_entries(entry_date);
  CREATE INDEX idx_party_name ON compliance_entries(party_name);
  ```

### Cache Management
- Alerts cached for 30 seconds before database refresh
- Adjust in `compliance_alerts_provider.py` line ~150
- Timeout: `CACHE_TTL = 30`

### Memory Usage
- Widget loads only 10 alerts in view (scrollable)
- Full alert list available on dashboard
- Python process uses ~50-100 MB RAM

---

## Troubleshooting Quick Links

| Problem | Solution | Document |
|---------|----------|----------|
| Widget not appearing | See Widget Installation section | STEP6_USER_DOCUMENTATION.md, pg 17 |
| Access denied errors | Check user role in Access Control | STEP6_USER_DOCUMENTATION.md, pg 8 |
| Export failing | Verify filepath and permissions | STEP6_USER_DOCUMENTATION.md, pg 21 |
| Bank matching not working | Adjust tolerance and threshold | STEP6_USER_DOCUMENTATION.md, pg 22 |
| Installation fails | Check system requirements | STEP7_DEPLOYMENT_GUIDE.md, pg 2 |
| Database locked | Only one instance at a time | STEP7_DEPLOYMENT_GUIDE.md, pg 24 |

---

## Version Info

**Application Version:** 1.0.0  
**Documentation Version:** 1.0.0  
**Project Status:** Production Ready  
**Last Updated:** 2024-01-15  

---

## Quick Start (Development)

```powershell
# 1. Navigate to logic lab
cd d:\ERP Financial\Accounts Bookkeeping\Decoded\Bookkeeping\logic-lab

# 2. Create test users
python -c "from admin_access_control import create_test_users; users = create_test_users(); print('Users created')"

# 3. Run tests
python run_tests.py

# 4. Start Thinktank Dashboard
python thinktank_dashboard.py

# 5. Start data entry app
python operational_app.py

# 6. Start webhook server (in another terminal)
python bank_webhook_server.py

# 7. Launch Electron app
cd ..\extracted-app
npm start
```

---

**Project Navigation Guide v1.0.0**  
Last Updated: 2024-01-15
