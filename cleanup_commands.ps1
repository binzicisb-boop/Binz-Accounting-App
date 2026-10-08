# Cleanup commands (do NOT run unless you understand implications)
# 1) Add .gitignore and remove large files from index (keeps files locally, removes from git tracking):
# git add .gitignore
# git rm --cached resources/app.asar
# git rm --cached -r app/dist
# git rm --cached installer/Output/BinzAccountingAppSetup-1.0.0.exe
# git commit -m "Remove large build artifacts from git tracking"

# 2) If you need to remove large files from history, use BFG or git-filter-repo (careful, rewrites history):
# BFG example (requires Java and BFG installed):
# java -jar bfg.jar --delete-files app.asar
# git reflog expire --expire=now --all && git gc --prune=now --aggressive

# git-filter-repo example (recommended):
# pip install git-filter-repo
# git clone --mirror <repo-url> repo-mirror.git
# cd repo-mirror.git
# git filter-repo --invert-paths --paths resources/app.asar --paths app/dist
# git push --force

# 3) Consider Git LFS for large binaries instead of history rewrite:
# git lfs install
# git lfs track "app/dist/**"
# git add .gitattributes
# git add app/dist/*
# git commit -m "Move dist files to Git LFS"

# 4) Safe cleanup of extracted temporary folders (local only):
# Remove extracted folders if no longer needed
# Remove-Item -Recurse -Force .\extracted_app_asar
# Remove-Item -Recurse -Force .\extracted_electron_app_asar

# 5) To keep a releaseable installer/artifact, upload it to your releases storage (Azure Artifacts, GitHub Releases) instead of committing to repo.

# NOTE: Review each command and run in a separate shell. Do NOT run history rewrite commands without backups and coordination.
