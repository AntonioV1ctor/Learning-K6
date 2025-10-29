# Testes de Carga K6 - Melhorado

Este projeto contém testes de carga otimizados usando K6 para testar APIs.

## Como Executar

### Modifique o seguinte arquivo:
```bash
Learning-K6/scenario/Login-User.js
```

Modifique a url que você deseja testar e o tipo dela (GET ou POST). 

### Método 1: Script Automático
```bash
./run-test.sh
```

### Método 2: Comando Direto
```bash

k6 run index.js

k6 run --config k6-config.js index.js
```

### Método 3: Teste Personalizado
```bash

k6 run --vus 20 --duration 1m index.js

k6 run --vus 5 --duration 2m index.js
```

## Estrutura do Projeto

```
Learning-K6/
├── index.js              # Arquivo principal do teste
├── k6-config.js          # Configurações avançadas
├── run-test.sh           # Script de execução
├── scenario/
│   └── Create-Use.js     # Cenário de teste (métricas corrigidas)
└── README.md             # Este arquivo
```


## Relatórios

Após a execução, será gerado:
- `summary.html`: Relatório detalhado com gráficos e métricas
- Console output: Métricas em tempo real durante a execução