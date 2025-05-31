@echo off
echo Limpiando entorno...
rmdir /s /q node_modules
del /f /q package-lock.json

echo Instalando dependencias limpias...
npm install

echo Subiendo a GitHub...
git add .
git commit -m "Fix: limpieza completa y subida estable"
git push

echo ✅ Listo. Ahora ve a Vercel y haz Redeploy con Clear Cache.
pause
