# Step 7: Package and Deploy

## Deployment Architecture

```
┌─────────────────────────────────────────────────┐
│         Windows Installation Process            │
├─────────────────────────────────────────────────┤
│                                                 │
│  1. Build Electron App                  600 MB │
│     └─ extracted-app/ → dist/simple-accounts-manager/
│                                                 │
│  2. Package Python Logic Engine         50 MB  │
│     └─ logic-lab/ → bundled with installer     │
│                                                 │
│  3. Create Inno Setup Installer         1.2GB │
│     └─ installer-build/SimpleAccountingApp.iss │
│                                                 │
│  4. Generate MSI Package                1.2GB │
│     └─ Output/ → SimpleAccountingApp-1.0.0.exe│
│                                                 │
│  5. Sign & Distribute (Optional)              │
│     └─ Digital signature for trust store       │
│     └─ Upload to update server                 │
│                                                 │
│  6. Deploy to Production                       │
│     └─ User downloads & installs               │
│     └─ Creates shortcuts                       │
│     └─ Sets up database                        │
│     └─ Initializes admin user                  │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Prerequisites for Deployment

### Development Environment
- ✅ Node.js 16+ with npm
- ✅ Python 3.8+ with pip
- ✅ Inno Setup 6.0+ (for Windows installer)
- ✅ Git (for version control)
- ✅ GitHub account (for releases)

### Required Files

```
installer-build/
├── build-installer.cmd          ← Main deployment script
├── build-installer.ps1          ← PowerShell fallback
├── SimpleAccountingApp.iss       ← Inno Setup configuration
├── logo-theme.json              ← Branding/styling
├── build-config.json            ← Build parameters
└── Output/                       ← Built installers
    └── SimpleAccountingApp-1.0.0.exe
```

### System Requirements for Users

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| OS | Windows 10 (build 1909) | Windows 11 |
| RAM | 4 GB | 8 GB |
| Disk | 2 GB free | 5 GB free |
| CPU | Intel i3 / AMD Ryzen 3 | Intel i5 / AMD Ryzen 5 |
| Network | Not required (offline OK) | 100 Mbps for webhook |

---

## Build & Package Steps

### Step 1: Verify Application Files

```powershell
# Check all required files exist
cd d:\ERP Financial\Accounts Bookkeeping\Decoded\Bookkeeping

# Verify Electron app
ls extracted-app/
# Should contain: main.obfuscated.js, preload.js, package.json

# Verify Python logic
ls logic-lab/
# Should contain: operational_app.py, thinktank_dashboard.py, export_compliance_report.py, etc.

# Verify database
ls logic-lab/operational.db
# Should be SQLite database file
```

### Step 2: Update Version & Changelog

```powershell
# Edit build-config.json
{
  "version": "1.0.0",
  "appId": "SimpleAccountingApp",
  "buildOs": "win32",
  "buildArch": "x64",
  "certificateFile": null,
  "certificatePassword": null
}

# Update CHANGELOG.md
## Version 1.0.0 - Initial Release

### Features
- ✓ Pakistan tax compliance tracking
- ✓ Real-time alerts widget
- ✓ CSV/PDF export
- ✓ Bank webhook integration
- ✓ Role-based access control

### Bug Fixes
- (None for initial release)

### Known Issues
- PDF export requires reportlab library
```

### Step 3: Build Electron Application

```powershell
cd extracted-app/

# Install dependencies
npm install

# Build distribution
npm run build

# Or use electron-builder if configured
npx electron-builder --win --publish never

# Output: dist/SimpleAccountingApp-1.0.0.exe (portable)
```

### Step 4: Create Windows Installer

```powershell
cd installer-build/

# PowerShell method (recommended)
powershell -ExecutionPolicy Bypass -File build-installer.ps1

# Or direct method with Inno Setup
"C:\Program Files (x86)\Inno Setup 6\ISCC.exe" SimpleAccountingApp.iss

# Output files appear in Output/ folder
```

**Expected Output:**
```
Output/
├── SimpleAccountingApp-1.0.0.exe    (269 MB - full installer)
├── SimpleAccountingApp.iss          (setup configuration copy)
└── Output Log.txt                   (build log)
```

### Step 5: Verify Installer

```powershell
# Check file exists and is valid
dir Output/SimpleAccountingApp-1.0.0.exe
# Size: ~269 MB
# Created: Today's date

# Verify signature (if signed)
certutil -verify Output\SimpleAccountingApp-1.0.0.exe

# Test extraction (don't install yet)
# Right-click → 7-Zip → List archive
# Should show: app/, python/, config/ folders
```

### Step 6: Code Signing (Optional but Recommended)

```powershell
# If you have a code signing certificate:
$CertFile = "C:\certs\MyCompany.pfx"
$CertPassword = "your-password"
$Timestamp = "http://timestamp.comodoca.com/authenticode"

# Sign the installer
signtool sign /f $CertFile /p $CertPassword /t $Timestamp `
  "Output\SimpleAccountingApp-1.0.0.exe"

# Verify signature
signtool verify /pa "Output\SimpleAccountingApp-1.0.0.exe"
```

### Step 7: Create Release Package

```powershell
# Create release directory
$ReleaseDir = "C:\Releases\v1.0.0"
New-Item -ItemType Directory -Path $ReleaseDir

# Copy installer
Copy-Item "Output\SimpleAccountingApp-1.0.0.exe" $ReleaseDir/

# Create checksum
$Hash = (Get-FileHash "$ReleaseDir\SimpleAccountingApp-1.0.0.exe").Hash
"$Hash`tSimpleAccountingApp-1.0.0.exe" | Out-File "$ReleaseDir\SHA256SUMS.txt"

# Create README
@"
# SimpleAccountingApp v1.0.0

## Install Instructions

1. Download SimpleAccountingApp-1.0.0.exe
2. Verify SHA256 checksum matches SHA256SUMS.txt
3. Run installer
4. Follow on-screen prompts
5. Application launches automatically

## System Requirements
- Windows 10 or later
- 2 GB disk space
- 4 GB RAM
- Internet (optional, for bank webhook)

## Default Credentials
- Admin User: admin
- Password: (Windows user password)

## Documentation
See STEP6_USER_DOCUMENTATION.md for full guide
"@ | Out-File "$ReleaseDir\README.txt"
```

---

## Deployment Checklist

### Pre-Deployment Verification

- [ ] **Code Quality**
  - [ ] All unit tests pass: `python run_tests.py`
  - [ ] No lint errors in Python: `pylint logic-lab/*.py`
  - [ ] No console errors in Electron build
  - [ ] All Step 1-6 code files present

- [ ] **Data Integrity**
  - [ ] Backup current `operational.db`
  - [ ] Verify database schema is correct
  - [ ] Test E2E compliance workflow: `python test_e2e_compliance.py`
  - [ ] Test bank webhook: `python test_bank_webhook.py`

- [ ] **Security**
  - [ ] Access control system initialized
  - [ ] Default admin user created
  - [ ] Audit logging enabled
  - [ ] No hardcoded passwords in config
  - [ ] HMAC webhook signature configured

- [ ] **Documentation**
  - [ ] README.md is current
  - [ ] STEP6_USER_DOCUMENTATION.md complete
  - [ ] API documentation accurate
  - [ ] Troubleshooting section written

- [ ] **Packaging**
  - [ ] Version updated in `build-config.json`
  - [ ] CHANGELOG.md updated
  - [ ] Installer builds successfully
  - [ ] Installer size reasonable (~270 MB)
  - [ ] Installer signature verified (if signed)
  - [ ] SHA256 checksum calculated

### Deployment Steps

- [ ] **Stage 1: Test Installation (Local)**
  - [ ] Uninstall previous version if exists
  - [ ] Run installer on test machine
  - [ ] Verify shortcuts created on desktop
  - [ ] Start application
  - [ ] Check compliance alerts widget appears
  - [ ] Verify Python backend accessible
  - [ ] Test creating compliance entry
  - [ ] Export CSV successfully
  - [ ] Uninstall and verify clean removal

- [ ] **Stage 2: Test Installation (Network)**
  - [ ] Copy installer to network share
  - [ ] Install on clean machine (no previous version)
  - [ ] Repeat Stage 1 tests
  - [ ] Verify shared database accessible
  - [ ] Test multi-user scenarios

- [ ] **Stage 3: Production Deployment**
  - [ ] Announce deployment window to users
  - [ ] Email deployment instructions
  - [ ] Provide download link (web server or share)
  - [ ] Include SHA256 verification step
  - [ ] Schedule tech support availability
  - [ ] Create rollback plan if issues arise

### Post-Deployment Verification

- [ ] **User Accessibility**
  - [ ] Users can download installer
  - [ ] Installation succeeds on user machines
  - [ ] Application launches without errors
  - [ ] Compliance widget displays correctly

- [ ] **Data Integrity**
  - [ ] Database accessible from all machines
  - [ ] Entries created by different users sync
  - [ ] Compliance reports consistent
  - [ ] Exports contain correct data

- [ ] **Monitoring**
  - [ ] Error logs checked for issues
  - [ ] Audit logs show user activity
  - [ ] No "permission denied" errors in logs
  - [ ] Bank webhook operational (if configured)

- [ ] **Support**
  - [ ] Help desk trained on new features
  - [ ] FAQ document distributed
  - [ ] Common issues documented
  - [ ] Rollback procedure clear

---

## Release Notes Template

```markdown
# SimpleAccountingApp v1.0.0

**Release Date:** 2024-01-15  
**Status:** Stable (Production Ready)

## What's New

### Features
- ✓ Real-time compliance alerts widget
- ✓ CSV/PDF export for reports
- ✓ Bank webhook auto-reconciliation
- ✓ Role-based access control
- ✓ Audit logging for compliance
- ✓ Pakistan tax compliance rules (FBR, provincial, etc.)

### Improvements
- Optimized database queries for faster reports
- Improved error messages with troubleshooting hints
- Better handling of concurrent user access

### Bug Fixes
- Fixed widget refresh not updating on data change
- Corrected bank matching tolerance calculation
- Resolved export path issues on non-English Windows

## Installation

1. Download: `SimpleAccountingApp-1.0.0.exe`
2. Verify: `SHA256 hash matches SHA256SUMS.txt`
3. Run: Double-click installer
4. Follow: On-screen setup wizard

## System Requirements

| Component | Requirement |
|-----------|-------------|
| OS | Windows 10 build 1909 or later |
| RAM | 4 GB minimum, 8 GB recommended |
| Disk | 2 GB free for installation |
| Python | Included in installer (Python 3.10) |

## Upgrade from Previous Version

Your data is automatically preserved. No manual migration needed:
1. Uninstall old version
2. Reinstall with Version 1.0.0 installer
3. All your previous entries remain intact

## Known Issues

- PDF export requires `reportlab` library (optional feature)
- Bank webhook requires active internet connection
- Electron app obfuscated (debug via logs)

## Support

- Email: support@bookkeeping.local
- FAQ: See STEP6_USER_DOCUMENTATION.md
- Troubleshooting: AppData\Local\SimpleAccountingApp\logs\

## Security

- ✓ Audit logging of all user actions
- ✓ Role-based access control (RBAC)
- ✓ HMAC signature validation on webhooks
- ✓ Local SQLite database (no cloud/external storage)

---

**Checksum:** SHA256=abcdef123456...  
**File Size:** 269 MB  
**Download:** https://releases.bookkeeping.local/v1.0.0/
```

---

## Deployment Troubleshooting

### Issue: Installer Fails to Build

**Error:** "ISCC.exe not found"  
**Solution:**
1. Install Inno Setup 6.0: https://jrsoftware.org/isdl.php
2. Add to PATH: `C:\Program Files (x86)\Inno Setup 6`
3. Retry build

### Issue: Application Won't Start After Install

**Error:** "Python not found" or "Module missing"  
**Solution:**
1. Verify Python bundled in installer: Check `Program Files\SimpleAccountingApp\python\`
2. Check installation logs: `%APPDATA%\SimpleAccountingApp\logs\`
3. Try repair install: Run installer again, select "Repair"
4. Manual fix: Run `python -m pip install -r requirements.txt`

### Issue: Users Can't Access Database

**Error:** "File is locked" or "Database connection refused"  
**Solution:**
1. Ensure only one user accessing at a time
2. Check firewall allows database port (if using server)
3. Verify database path in config file
4. Restart application to reset connection

### Issue: Webhook Not Working

**Error:** "Connection timeout" or "No matching entries found"  
**Solution:**
1. Check webhook server running: `tasklist | findstr flask`
2. Verify URL in bank payload matches: `http://localhost:5000/webhook/bank-transactions`
3. Check HMAC secret matches configuration
4. Review webhook logs for errors

---

## Rollback Procedure

If deployed version has critical issues:

```powershell
# 1. Notify users immediately
# Email: "We're aware of issues and rolling back"

# 2. Have users uninstall current version
# Control Panel → Programs → Uninstall

# 3. Restore from backup
Copy-Item "C:\Backups\v0.9.9\operational.db" "C:\Users\*\AppData\Local\SimpleAccountingApp\"

# 4. Distribute previous installer
# SimpleAccountingApp-0.9.9.exe

# 5. Post-incident review
# - Document what went wrong
# - Add test for the issue
# - Deploy fixed version (v1.0.1)
```

---

## Update Strategy

### Minor Updates (v1.0.0 → v1.0.1)
- Bug fixes, security patches
- No breaking changes
- Users can auto-update
- Database unchanged

### Feature Updates (v1.0.0 → v1.1.0)
- New features (optional)
- Database schema might change
- Users must uninstall/reinstall
- Data is preserved via migration

### Major Updates (v1.0.0 → v2.0.0)
- Significant architecture changes
- Database migration script provided
- Requires administrator approval
- Extended testing before rollout

---

## Monitoring & Support

### Post-Deployment Monitoring

**Daily (for 1 week):**
- Check error logs for crashes
- Monitor user feedback emails
- Verify database integrity
- Test compliance calculations

**Weekly (for 1 month):**
- Review audit logs for permission issues
- Check webhook failures (if configured)
- Monitor export success rate
- Verify performance metrics

**Monthly (ongoing):**
- Review monthly compliance reports
- Check for data anomalies
- Verify backup success
- Plan next version features

### Support Resources

| Issue | Resource |
|-------|----------|
| Installation | STEP6_USER_DOCUMENTATION.md → Installation & Setup |
| Features | STEP6_USER_DOCUMENTATION.md → Features |
| Workflows | STEP6_USER_DOCUMENTATION.md → Workflows |
| Errors | AppData\Local\SimpleAccountingApp\logs\ |
| API | API Reference section in documentation |
| Permissions | admin_access_control.py documentation |

---

## Version History

| Version | Date | Status | Notes |
|---------|------|--------|-------|
| 1.0.0 | 2024-01-15 | Stable | Initial production release |
| 0.9.0 | 2024-01-08 | Beta | Feature complete, testing phase |
| 0.1.0 | 2024-01-01 | Alpha | Basic compliance tracking |

---

**Deployment Guide Version:** 1.0.0  
**Last Updated:** 2024-01-15  
**Deployment Engineer:** DevOps Team
