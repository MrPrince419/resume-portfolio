#!/usr/bin/env pwsh

# Build the project
npm run build

# Create a new directory for deployment
New-Item -ItemType Directory -Force -Path temp_deploy

# Copy the dist contents to temp_deploy
Copy-Item -Path "dist/*" -Destination "temp_deploy" -Recurse -Force

# Switch to gh-pages branch
git checkout gh-pages

# Remove existing files
Get-ChildItem -Path . -Exclude .git,node_modules,temp_deploy | Remove-Item -Recurse -Force

# Copy the new build
Copy-Item -Path "temp_deploy/*" -Destination "." -Recurse -Force

# Remove temp directory
Remove-Item -Path temp_deploy -Recurse -Force

# Add all files
git add -A

# Commit
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages
git push origin gh-pages --force

# Switch back to main branch
git checkout main
