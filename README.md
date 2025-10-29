# Testes de Carga K6 - Melhorado

Este projeto contém testes de carga otimizados usando K6 para testar APIs.

## 🚀 Melhorias Implementadas

### ✅ Correções Realizadas:
1. **Sintaxe corrigida**: Função `export default` com sintaxe correta
2. **Métricas otimizadas**: Lógica de sucesso/falha corrigida
3. **Validações melhoradas**: Checks mais robustos e informativos
4. **Configurações adicionadas**: Thresholds e opções de performance
5. **Relatórios**: Geração automática de relatório HTML

### 📊 Métricas Coletadas:
- **createUserDuration**: Tempo de resposta das requisições
- **createUserSuccessRate**: Taxa de sucesso das requisições
- **createUserFailureCount**: Contador de falhas
- **createUserReqs**: Contador total de requisições

### 🎯 Thresholds Configurados:
- 95% das requisições < 500ms
- Taxa de falha < 10%
- Taxa de sucesso > 95%
- Pelo menos 50 requisições executadas

## 🛠️ Como Executar

### Método 1: Script Automático
```bash
./run-test.sh
```

### Método 2: Comando Direto
```bash
# Teste básico
k6 run index.js

# Teste com configuração avançada
k6 run --config k6-config.js index.js
```

### Método 3: Teste Personalizado
```bash
# 20 usuários por 1 minuto
k6 run --vus 20 --duration 1m index.js

# 5 usuários por 2 minutos
k6 run --vus 5 --duration 2m index.js
```

## 📈 Configurações Disponíveis

### Teste Básico (`index.js`):
- 10 usuários virtuais
- 30 segundos de duração
- Thresholds básicos de performance

### Teste Avançado (`k6-config.js`):
- Ramp up/down gradual
- 0 → 5 → 10 → 15 → 10 → 0 usuários
- Thresholds mais rigorosos
- Configurações de sistema otimizadas

## 📋 Estrutura do Projeto

```
Learning-K6/
├── index.js              # Arquivo principal do teste
├── k6-config.js          # Configurações avançadas
├── run-test.sh           # Script de execução
├── scenario/
│   └── Create-Use.js     # Cenário de teste (métricas corrigidas)
└── README.md             # Este arquivo
```

## 🔍 Validações dos Testes

O teste agora valida:
- ✅ Status code 200
- ✅ Tempo de resposta < 1000ms
- ✅ Resposta contém conteúdo
- ✅ Métricas de sucesso/falha corretas

## 📊 Relatórios

Após a execução, será gerado:
- `summary.html`: Relatório detalhado com gráficos e métricas
- Console output: Métricas em tempo real durante a execução

## 🚨 Troubleshooting

Se o teste falhar:
1. Verifique se a API está rodando em `http://localhost:5000`
2. Confirme se o endpoint `/api/v1/all-blogs` está acessível
3. Verifique os logs de erro no console
4. Ajuste os thresholds se necessário

## 📝 Próximos Passos

Para expandir os testes:
1. Adicione mais cenários em `scenario/`
2. Configure diferentes tipos de carga
3. Adicione testes de stress e spike
4. Implemente testes de diferentes endpoints
