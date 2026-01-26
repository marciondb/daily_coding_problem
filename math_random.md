Passo 1: Entenda o Math.random()
Math.random() // retorna [0, 1) - ou seja, 0 ≤ x < 1
Exemplos: 0, 0.5, 0.999... mas NUNCA 1
Passo 2: Escalando o intervalo
Se você quer um intervalo de tamanho N, multiplique:
Math.random() * N // retorna [0, N)
Exemplo: Math.random() * 5 → pode dar 0, 4.99... mas nunca 5
Passo 3: Deslocando (shifting)
Para começar em min ao invés de 0, só somar: 
Math.random() * N + min // retorna [min, min + N)
Passo 4: Truncando para inteiros
Math.floor(Math.random() * N + min)
Math.floor() arredonda para baixo:
4.99 → 4
4.01 → 4
4.00 → 4
🎯 Aplicando a Lógica nos 4 Casos
Caso 1: [min, max) - Inclui min, exclui max
Raciocínio:
Quantos valores possíveis? max - min (ex: [3, 7) tem 4 valores: 3,4,5,6)
Onde começa? Em min
Math.floor(Math.random() * (max - min)) + min
//                          └─────┬─────┘
//                          tamanho do intervalo
Verificação com [3, 7):
Math.random() → [0, 1)
* 4 → [0, 4)
+ 3 → [3, 7)
Math.floor() → 3, 4, 5 ou 6 ✅
Caso 2: [min, max] - Inclui ambos
Raciocínio:
Quantos valores possíveis? max - min + 1 (ex: [3, 7] tem 5 valores: 3,4,5,6,7)
Onde começa? Em min
Math.floor(Math.random() * (max - min + 1)) + min
//                          └──────┬───────┘
//                          +1 para incluir o max
Verificação com [3, 7]:
Math.random() → [0, 1)
* 5 → [0, 5)
+ 3 → [3, 8)
Math.floor() → 3, 4, 5, 6 ou 7 ✅
Caso 3: (min, max] - Exclui min, inclui max
Raciocínio:
Quantos valores possíveis? max - min (ex: (3, 7] tem 4 valores: 4,5,6,7)
Onde começa? Em min + 1
Math.floor(Math.random() * (max - min)) + min + 1
//                                              └┬┘
//                                          pula o min
Verificação com (3, 7]:
Math.random() → [0, 1)
* 4 → [0, 4)
+ 3 + 1 → [4, 8)
Math.floor() → 4, 5, 6 ou 7 ✅
Caso 4: (min, max) - Exclui ambos
Raciocínio:
Quantos valores possíveis? max - min - 1 (ex: (3, 7) tem 3 valores: 4,5,6)
Onde começa? Em min + 1
Math.floor(Math.random() * (max - min - 1)) + min + 1
//                          └──────┬───────┘     └┬┘
//                          -1 para excluir max  pula o min
Verificação com (3, 7):
Math.random() → [0, 1)
* 3 → [0, 3)
+ 3 + 1 → [4, 7)
Math.floor() → 4, 5 ou 6 ✅
📝 A Fórmula Mental
Pense sempre em 2 perguntas:
Quantos valores eu quero? → Isso vai na multiplicação
[min, max) ou (min, max] → max - min
[min, max] → max - min + 1
(min, max) → max - min - 1
Onde começo? → Isso vai na soma
Inclui min → + min
Exclui min → + min + 1
🧪 Teste Mental
Se quero (10, 15):
Quantos valores? 15 - 10 - 1 = 4 (são: 11, 12, 13, 14)
Onde começo? 10 + 1 = 11
Math.floor(Math.random() * 4) + 11 // 11, 12, 13 ou 14 ✅
