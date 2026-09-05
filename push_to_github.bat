@echo off
title Push to GitHub - SNU BizSathi (Team Code Catalyst)
echo ========================================================
echo   Pushing code to GitHub:
echo   https://github.com/arnab0640/AI-Business-Financial-Assistant-for-Rural-Micro-Entrepreneurs.git
echo ========================================================
echo.

set "PATH=C:\Users\Arnab\AppData\Local\Programs\Git\cmd;C:\Users\Arnab\AppData\Local\Programs\Git\mingw64\bin;C:\Users\Arnab\AppData\Local\Programs\Git\usr\bin;%PATH%"

echo 1. Checking Git Status...
git status
echo.

echo 2. Staging all files...
git add -A
echo.

echo 3. Creating Commit...
git commit -m "Add modern login portal interface with Code Catalyst credentials and session management"
echo.

echo 4. Pushing main branch to origin...
echo --------------------------------------------------------
echo NOTE: If a GitHub sign-in window appears, click "Sign in with browser".
echo --------------------------------------------------------
echo.

git push -u origin main

if %ERRORLEVEL% EQU 0 goto :success

echo.
echo ========================================================
echo Normal push was not authorized yet.
echo If you have a GitHub Personal Access Token:
echo ========================================================
echo.
set /p "GHTOKEN=Enter or paste your GitHub Token (or press Enter to exit): "

if "%GHTOKEN%"=="" goto :end

echo.
echo Pushing with provided token...
git push https://%GHTOKEN%@github.com/arnab0640/AI-Business-Financial-Assistant-for-Rural-Micro-Entrepreneurs.git main
if %ERRORLEVEL% EQU 0 goto :success

goto :end

:success
echo.
echo ========================================================
echo   SUCCESS! Code pushed to GitHub successfully!
echo   Repository: https://github.com/arnab0640/AI-Business-Financial-Assistant-for-Rural-Micro-Entrepreneurs
echo   Vercel Deployment: https://ai-business-financial-assistant-for.vercel.app/
echo ========================================================

:end
echo.
pause
