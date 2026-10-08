# Step 6: User Documentation & Setup Guide

## Table of Contents

1. [System Overview](#system-overview)
2. [Installation & Setup](#installation--setup)
3. [User Roles & Permissions](#user-roles--permissions)
4. [Features](#features)
5. [Workflows](#workflows)
6. [API Reference](#api-reference)
7. [Troubleshooting](#troubleshooting)
8. [FAQ](#faq)

---

## System Overview

### Purpose

The Bookkeeping Compliance System is designed for Pakistan-based businesses to:
- ✅ Track tax filing deadlines (FBR Sales Tax, Income Tax, Provincial)
- ✅ Monitor authority verification status (FBR, SECP, PEC, AEDB, DRAP)
- ✅ Automate bank reconciliation
- ✅ Generate compliance reports for audit trails
- ✅ Alert administrators to critical issues in real-time

### Architecture

```
End User (Desktop App)
    ↓
Electron Frontend (Display)
    ↓ (IPC)
Python Rule Engine (Compliance Logic)
    ↓
SQLite Database (operational.db)
    ↓
Thinktank Dashboard (Admin View)
```

### Key Components

| Component | Purpose | Users |
|-----------|---------|-------|
| **Operational App** | Data entry for transactions, filing dates, authority status | Data Entry Staff |
| **Thinktank Dashboard** | Admin console with compliance reports, exports, exports | Accountants/Managers |
| **Compliance Alerts Widget** | Real-time status notifications in desktop app | All Users |
| **Bank Webhook Server** | Auto-reconciliation of bank transactions | System (Automated) |

---

## Installation & Setup

### Prerequisites

```
- Windows 10 or later
- Python 3.8+
- Flask 2.0+ (for webhook server)
- SQLite3 (included with Python)
```

### Step 1: Install Application

1. Extract the installer or clone from repository
2. Run `installer-build/build-installer.cmd` to create Windows installer
3. Execute installer and follow on-screen prompts
4. Application installs to `Program Files\SimpleAccountingApp\`

### Step 2: First-Time Setup

**Admin User Creation:**
```bash
# Run this command in logic-lab/ folder
python -c "from admin_access_control import initialize_access_control; \
acm = initialize_access_control(); \
acm.create_user('admin', 'your-email@company.com', acm.UserRole.ADMIN)"
```

**Or use Thinktank Dashboard:**
- Launch Thinktank Dashboard
- Go to Settings → Users
- Add "admin" user with role = Admin
- Verify in Users list

### Step 3: Configure Bank Webhook (Optional)

If you want auto-reconciliation:

**In `logic-lab/config/bank_webhook_config.json`:**
```json
{
  "webhook_secret": "your-secret-key",
  "bank_name": "MyBank",
  "tolerance": 50.0,
  "confidence_threshold": 0.75,
  "enabled": true
}
```

**Start Webhook Server:**
```bash
cd logic-lab/
python bank_webhook_server.py
```

Server runs on `http://localhost:5000`

### Step 4: Verify Installation

1. Launch "Simple Accounting App" from Start Menu
2. Should see compliance alerts widget (bottom-right)
3. Check badge shows "0" alerts for healthy system
4. Try creating a new entry in Operational App
5. Verify it appears in Thinktank Dashboard

---

## User Roles & Permissions

### Role Overview

| Role | View Reports | Export | Modify | Admin Functions |
|------|------|--------|--------|-----------------|
| **Admin** | ✅ | ✅ | ✅ | ✅ |
| **Manager** | ✅ | ✅ | ❌ | ❌ |
| **User** | ✅ | ❌ | ❌ | ❌ |
| **Restricted** | ❌ | ❌ | ❌ | ❌ |

### Permission Details

#### Admin (Full Access)
- View all compliance reports
- Export to CSV/PDF
- Acknowledge alerts
- View bank reconciliation
- Modify reconciliation status
- Configure webhooks
- Manage authority statuses
- View audit logs
- Manage users

#### Manager (Reporting Only)
- View compliance reports
- Export to CSV/PDF
- Acknowledge alerts
- View bank reconciliation (read-only)
- View authority statuses (read-only)

#### User (Limited Viewing)
- View own compliance entries only
- View compliance alerts
- View bank reconciliation (read-only)

#### Restricted (No Access)
- Cannot access compliance features
- Can use system for other purposes

---

## Features

### 1. Compliance Entry Creation

**Who Can:** Data entry staff via Operational App

**How:**
1. Open Simple Accounting App
2. Click "New Entry" button
3. Fill in:
   - Party Name (customer/supplier)
   - Entry Date
   - Amount
   - Province (Punjab, Sindh, KPK, Balochistan)
   - Filing dates (if known)
4. Click "Save"

**Data Stored:**
- Entry details with unique ID
- Filing status (if provided)
- Authority contact information
- Bank reconciliation hints

### 2. Real-Time Alerts

**What You See:**
- Floating widget in bottom-right corner of Electron app
- Color-coded filing status grid (4 boxes)
- Alert list with severity icons

**Alert Types:**
| Icon | Severity | Meaning | Action |
|------|----------|---------|--------|
| ❌ | Critical | Filing overdue or major bank discrepancy | Fix immediately |
| ⚠️ | Warning | Filing due soon or pending review | Schedule action |
| ℹ️ | Info | Missing information or suggestion | Update when possible |
| ✓ | Success | All checks passing | No action needed |

**How to Use:**
- Click alert item for details
- Click "View Full Report →" to open dashboard
- Minimize header if widget blocking view

### 3. Compliance Reports

**Accessing Reports:**
1. Open Thinktank Dashboard (Click "Open Dashboard" in alert widget)
2. Click "Compliance" tab
3. View current filing status and alert list

**What's Included:**
- Latest entry details (party, amount, date)
- Filing status for each tax type:
  - Sales Tax: Pending/Filed/Overdue/Due Soon
  - Income Tax: Pending/Filed/Overdue/Due Soon
  - Provincial: Pending/Filed/Overdue/Due Soon
  - Bank Reconciliation: Reconciled/Pending
- Authority verification status (FBR, SECP, PEC, AEDB, DRAP)
- Bank balance vs book balance
- Withholding tax reconciliation
- Contact alerts

### 4. Export Functionality

**Exporting to CSV:**
1. In Thinktank Dashboard → Compliance tab
2. Click "Export to CSV" button
3. Choose filename (or use default with timestamp)
4. File saves to `D:\...\reports\compliance_report_YYYYMMDD_HHMMSS.csv`

**CSV Contents:**
- All compliance data in tabular format
- Readable with Excel, Google Sheets, or any text editor
- Includes all filing statuses, authority statuses, bank reconciliation

**Exporting to PDF (Premium):**
1. Same steps as CSV
2. Click "Export to PDF" button
3. Requires `reportlab` library (`pip install reportlab`)
4. Generates formatted PDF with header/footer

**Who Can Export:**
- ✅ Admin
- ✅ Manager
- ❌ User
- ❌ Restricted

### 5. Bank Reconciliation

**Automatic (If Webhook Configured):**
1. Bank sends transaction via webhook
2. System auto-matches and reconciles
3. Status updates to "reconciled" automatically
4. Alert updates to show green checkmark

**Manual:**
1. In Thinktank Dashboard → Compliance tab
2. Click "View Bank Reconciliation"
3. Enter bank balance and book balance
4. System calculates difference
5. If difference ≤ $50, marks "reconciled"
6. If difference > $50, marks "pending review"

**What Gets Checked:**
- Transaction amount matches entry amount
- Transaction date within 3 days of entry
- Party name similarity check
- Bank balance agreement

### 6. Authority Status Tracking

**Current Authority Fields:**
- FBR (Federal Board of Revenue): For tax filings
- SECP (Securities Board): For corporate registration
- PEC (Pakistan Engineering Council): If applicable
- AEDB (Alternative Energy Dev. Board): If applicable
- DRAP (Drug Regulatory Authority): If applicable

**Status Values:**
- ✅ **ok** / **verified** / **active** = Authority confirmed
- ⚠️ **attention_required** / **expired** = Needs action
- ❓ **unknown** / **not_checked** = Not yet verified

**Updating Status:**
1. Admin can modify in Thinktank Dashboard
2. Status change logged to audit trail
3. Alerts regenerate automatically

---

## Workflows

### Workflow 1: Monthly Compliance Check

**Frequency:** Once per month (suggested: last Friday)  
**Time Required:** 10-15 minutes  
**Owner:** Accountant/Manager

**Steps:**
1. Open Simple Accounting App
2. Review compliance alert widget (red/orange items)
3. Open Thinktank Dashboard
4. review "Compliance" tab
5. Check filing dates vs calendar
6. Export CSV for records
7. Forward to compliance team if any "critical" alerts
8. Acknowledge alert by clicking it

**Success Criteria:**
- No overdue filings
- All authority statuses "ok" or "verified"
- Bank reconciliation within $50

### Workflow 2: New Transaction Entry

**Frequency:** Daily  
**Time Required:** 2-3 minutes per entry  
**Owner:** Data entry staff

**Steps:**
1. Receive invoice or payment instruction
2. Open Simple Accounting App
3. Click "New Entry"
4. Fill in basic info:
   - Party name (customer/supplier)
   - Amount
   - Date
   - Province
5. Click "Save"
6. Watch for compliance alerts to update

**Success Criteria:**
- Entry appears in Thinktank within 5 seconds
- If filing due date approaching, alert appears

### Workflow 3: Responding to Critical Alert

**Frequency:** As needed  
**Time Required:** 5-30 minutes  
**Owner:** Accountant/Manager

**Alert Scenario:** Sales Tax filing is OVERDUE

**Resolution Steps:**
1. Click alert in widget for details
2. Note the filing due date (already passed)
3. File the overdue sales tax return:
   - Go to FBR portal (if applicable)
   - Submit latest return
   - Get confirmation number
4. Update entry in Thinktank:
   - Click "Modify" on the compliance entry
   - Change Sales Tax status to "Filed"
   - Add confirmation number in notes
5. Save changes
6. Alert automatically clears

### Workflow 4: Exporting for Audit

**Frequency:** Quarterly or on audit required  
**Time Required:** 5 minutes  
**Owner:** Accountant/Manager

**Steps:**
1. Open Thinktank Dashboard
2. Go to Compliance tab
3. Review entire report on screen
4. Click "Export to CSV"
5. Choose filename: `Compliance_Report_Q1_2024.csv`
6. Send to auditor via secure email
7. Keep copy for records

**Success Criteria:**
- CSV file contains all required data
- No errors during export
- Auditor can open and read without issues

---

## API Reference

### Flask Webhook API

#### POST /webhook/bank-transactions

**Purpose:** Receive and auto-reconcile bank transactions

**Authentication:** HMAC-SHA256 signature (if configured)

**Request Body:**
```json
{
  "event_type": "bank_transaction",
  "bank": "MyBank",
  "transactions": [
    {
      "id": "txn_20240115_001",
      "date": "2024-01-15",
      "amount": 50000.00,
      "type": "credit",
      "party_name": "Customer ABC Corp",
      "description": "Invoice INV-001 payment",
      "balance": 500000.00,
      "reference": "Ref-12345"
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Processed 1 transactions",
  "results": [
    {
      "transaction_id": "txn_20240115_001",
      "matched": true,
      "entry_id": 5,
      "difference": 0.0,
      "confidence_score": 0.95,
      "timestamp": "2024-01-15T10:30:00Z"
    }
  ],
  "timestamp": "2024-01-15T10:30:00Z"
}
```

#### GET /webhook/status/{entry_id}

**Purpose:** Check reconciliation status for an entry

**Response:**
```json
{
  "entry_id": 5,
  "history": [
    {
      "id": 1,
      "entry_id": 5,
      "transaction_id": "txn_123",
      "amount": 50000,
      "difference": 0,
      "status": "reconciled",
      "timestamp": "2024-01-15T10:30:00Z"
    }
  ],
  "count": 1
}
```

#### GET /webhook/health

**Purpose:** Health check

**Response:**
```json
{
  "status": "healthy",
  "service": "Bank Webhook Server",
  "version": "1.0.0"
}
```

---

## Troubleshooting

### Widget Not Appearing in Electron App

**Symptom:** No compliance alerts widget visible  
**Causes:**
1. Widget HTML file not copied to app directory
2. IPC handlers not registered
3. Python provider not accessible

**Solution:**
1. Verify `compliance_alerts_widget.html` exists in `extracted-app/`
2. Check `main.js` has `setupComplianceAlertsIPC(ipcMain)` call
3. Try restarting application

### Alerts Not Updating

**Symptom:** Widget shows stale data  
**Causes:**
1. Python provider crashed
2. Database connection failed
3. 60-second refresh not triggering

**Solution:**
1. Check Python process is running: `tasklist | findstr python`
2. Verify `operational.db` is in `logic-lab/` folder
3. Try clicking widget "Refresh" button
4. Restart app

### Export Button Disabled

**Symptom:** Export buttons greyed out  
**Causes:**
1. User role is not Admin/Manager
2. User account not created in system

**Solution:**
1. Check user role in Settings → Users
2. Verify role is "admin" or "manager"
3. Contact system admin if permission issue

### Bank Reconciliation Not Auto-Matching

**Symptom:** Bank webhook running but no matches  
**Causes:**
1. Confidence threshold too high (default 0.75)
2. Amount difference > tolerance (default $50)
3. Date difference > 7 days

**Solution:**
1. Adjust `confidence_threshold` in `bank_webhook_config.json` (try 0.65)
2. Increase `tolerance` to $100
3. Check transaction dates align with entries
4. Manually reconcile via Thinktank Dashboard

### Permission Denied Errors

**Symptom:** "User doesn't have permission" error  
**Causes:**
1. User account not created
2. Role assigned incorrectly
3. Audit log blocking access

**Solution:**
1. Admin creates new user: Go to Settings → Users
2. Select correct role for user
3. Verify in Users list
4. Retry operation

---

## FAQ

### Q1: How do I add a new user?

**A:** Only Admin can add users:
1. Admin opens Thinktank Dashboard
2. Go to Settings → Users
3. Click "Add User"
4. Enter username, email, select role
5. Click "Create"
6. New user can log in

### Q2: Can I change my password?

**A:** Current version uses system username. Password changes require:
1. Windows account password change (Control Panel → User Accounts)
2. Or contact system admin for account reset

### Q3: How long are records kept?

**A:** indefinitely, they're stored in SQLite database. Recommend:
- Monthly backups to external drive
- Quarterly archive to cloud storage
- Annual compliance review

### Q4: What if I accidentally export the wrong data?

**A:** Exports are read-only, no data changed. Simply:
1. Delete the CSV/PDF file from `reports/` folder
2. Re-export with correct parameters

### Q5: Can I use this system offline?

**A:** Yes! Except:
- Bank webhook requires internet (for polling bank API)
- Email alerts won't send without internet
- All other features work offline

### Q6: Which Pakistan banks are supported?

**A:** Generic webhook endpoint supports any bank that can POST JSON. Currently:
- Direct integration: Configure Bank webhook with custom endpoint
- Generic: Use `/webhook/test` endpoint
- Contact admin for bank-specific configuration

### Q7: Is my data secure?

**A:** Security measures include:
- ✅ Audit log of all user actions
- ✅ Role-based access control
- ✅ Local SQLite database (no cloud sync)
- ✅ HMAC signature validation on webhooks
- ❌ TODO: End-to-end encryption

### Q8: Can I export more than just the latest entry?

**A:** Current version exports only the latest entry. To export historical data:
1. Query `operational.db` directly (advanced users)
2. Or contact admin for custom export
3. Feature planned for v1.1

### Q9: What happens if the server crashes?

**A:** Auto-recovery:
1. All data is persisted to SQLite (safe)
2. App auto-restarts
3. Alerts may be delayed until restart
4. No data loss

### Q10: How do I backup my compliance data?

**A:** Manual backup:
1. Copy `logic-lab/operational.db` to external drive
2. Copy `reports/` folder for exports
3. Schedule weekly via Windows Task Scheduler

**Suggested Schedule:**
- Daily: Incremental to cloud storage
- Weekly: Full backup to external drive
- Monthly: Archive to permanent storage

---

## Support & Contact

**Technical Support:**
- Email: support@bookkeeping.local
- Hours: Monday-Friday, 9 AM - 5 PM

**System Administrator:**
- Contact for user account issues
- Permission changes
- Database backups
- System configuration

**Documentation Updates:**
- This guide updated monthly
- Version tracked in `DOCUMENTATION_VERSION.txt`

---

**Document Version:** 1.0.0  
**Last Updated:** 2024-01-15  
**For Application Version:** 1.0.0+
