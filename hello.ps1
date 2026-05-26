# 1. Формируем правильный путь к файлу в папке LocalAppData
$localAppData = [Environment]::GetFolderPath("LocalApplicationData")
$destinationPath = Join-Path $localAppData "RunAsTI.exe"

# 2. Скачиваем файл
Invoke-WebRequest -Uri "https://github.com/mbcdev/RunAsTrustedInstaller/releases/download/release-0.2/RunAsTI.exe" -OutFile $destinationPath

# 3. Запускаем утилиту с передачей аргументов (требуются права администратора)
Start-Process -FilePath $destinationPath -ArgumentList "cmd.exe /k whoami" -Verb RunAs
