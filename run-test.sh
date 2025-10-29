#!/bin/bash

# Script para executar testes K6
echo "🚀 Iniciando testes de carga com K6..."

# Verificar se o K6 está instalado
if ! command -v k6 &> /dev/null; then
    echo "❌ K6 não está instalado. Instalando..."
    # Instalar K6 (Ubuntu/Debian)
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
    echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
    sudo apt-get update
    sudo apt-get install k6
fi

# Executar teste básico
echo "📊 Executando teste básico (10 usuários por 30s)..."
k6 run index.js

# Executar teste com configuração avançada (opcional)
echo ""
echo "📈 Executando teste avançado (ramp up/down)..."
k6 run --config k6-config.json index.js

echo "✅ Testes concluídos! Verifique o arquivo summary.html para relatório detalhado."
