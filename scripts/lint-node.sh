echo "➡️ Rodando ESLint no projeto Node (packages/spotify)..."
cd packages/spotify || exit 1
npm run lint || exit 1
echo