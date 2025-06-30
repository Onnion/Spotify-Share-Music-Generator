echo "➡️ Rodando flake8 no projeto Python (packages/video)..."
cd ../../packages/video || exit 1

if command -v flake8 >/dev/null 2>&1; then
    flake8 . || exit 1
else
    echo "❌ flake8 não encontrado. Instale com: pip install flake8"
    exit 1
fi
