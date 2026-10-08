param(
	[switch]$Force,
	[switch]$RemoveExtracted,
	[switch]$Backup,
	[string]$BackupDir = ".\\backup_large_artifacts"
)

function Confirm-OrExit($msg) {
	if ($Force) { Write-Host "[Force] $msg"; return $true }
	$answer = Read-Host "$msg (y/n)"
	if ($answer -match '^[Yy]') { return $true }
	Write-Host "Aborted by user."; exit 0
}

# Check git
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
	Write-Error "git is not available in PATH. Install Git and re-run this script."; exit 1
}

# Ensure .gitignore exists (basic defaults)
if (-not (Test-Path .gitignore)) {
	@"
# Ignore build artifacts and generated binary releases
node_modules/
app/node_modules/
/dist
/extracted_app_asar
/extracted_electron_app_asar
/resources/
/installer/
/Output/
*.exe
*.msi
*.zip
*.7z
*.log
.DS_Store
Thumbs.db
.vs/
.env

electron-runtime/

# OS & IDE files
*.suo
*.user
*.userosscache
*.sln.docstates

# Packaged app files
**/app.asar
**/resources.pak
"@ | Out-File -Encoding UTF8 .gitignore
	Write-Host ".gitignore created."
} else {
	Write-Host ".gitignore already exists."
}

# Ask for confirmation
Confirm-OrExit "Stage .gitignore and untrack large build artifacts from git index?"

# Stage .gitignore
git add .gitignore

$pathsToUntrack = @(
	'resources/app.asar',
	'app/dist',
	'electron-runtime',
	'installer/Output',
	'installer/BinzAccountingAppSetup-1.0.0.exe',
	'extracted_app_asar',
	'extracted_electron_app_asar',
	'app/node_modules'
)

foreach ($p in $pathsToUntrack) {
	if (Test-Path $p) { Write-Host "Untracking: $p" } else { Write-Host "Untracking (if present in index): $p" }
	git rm --cached -r --ignore-unmatch -- $p 2>$null
}

# Commit changes
$commitMsg = 'Remove large build artifacts from tracking and add .gitignore'
$commitResult = git commit -m "$commitMsg" 2>&1
if ($LASTEXITCODE -eq 0) {
	Write-Host "Committed: $commitMsg"
} else {
	if ($commitResult -match 'nothing to commit') { Write-Host "Nothing to commit." } else { Write-Host $commitResult }
}

# Optional: move large artifacts to backup
if ($Backup) {
	if (-not (Test-Path $BackupDir)) { New-Item -ItemType Directory -Path $BackupDir | Out-Null }
	$itemsToBackup = @('resources/app.asar','installer/BinzAccountingAppSetup-1.0.0.exe','electron-runtime')
	foreach ($item in $itemsToBackup) {
		if (Test-Path $item) {
			$dest = Join-Path -Path $BackupDir -ChildPath (Split-Path -Leaf $item)
			Write-Host "Moving $item -> $dest"
			Try { Move-Item -Path $item -Destination $dest -Force -ErrorAction Stop; Write-Host "Moved: $item" } Catch { Write-Warning ("Failed to move {0}: {1}" -f $item, $_) }
		} else { Write-Host "Not found: $item" }
	}
}

# Optional: remove extracted folders
if ($RemoveExtracted) {
	$toRemove = @('extracted_app_asar','extracted_electron_app_asar')
	foreach ($r in $toRemove) {
		if (Test-Path $r) { Write-Host "Removing $r"; Remove-Item -Recurse -Force -LiteralPath $r } else { Write-Host "Not found: $r" }
	}
}

Write-Host "Script completed. Review git status and push as needed."; exit 0
