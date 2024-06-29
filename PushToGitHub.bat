@echo off
cd /d %~dp0
git add .
set /p commit_message="Enter your commit message: "
git commit -m "%commit_message%"
git push origin main
pause