# 中文 Palavra do Dia — Widget iOS (Scriptable)

Widget de tela de bloqueio/inicial que mostra a cada hora uma palavra de chinês:
**caractere + pinyin + tradução em português**.

- **622 palavras**: as 338 do `glossario_1.0.1.xlsx` + 51 do HSK1 oficial que faltavam nele
  + 235 novas do `glossario_2_1.0.0.xlsx` (as outras 81 dele já estavam na lista).
- Funciona 100% offline, sem servidor. A palavra troca na virada de cada hora
  (o iOS decide o momento exato de atualizar, então pode atrasar alguns minutos).
- Só repete depois de passar pelas 622 palavras (~26 dias), e cada volta é embaralhada
  de um jeito diferente: a palavra que caiu de madrugada numa volta aparece em outro horário na seguinte.

## Instalação no iPhone (5 minutos)

1. **Instale o Scriptable** (grátis) na App Store: procure por "Scriptable".
2. **Leve o script para o celular**: envie o arquivo `palavra-do-dia.js` para você mesmo
   (e-mail, WhatsApp, OneDrive...) e copie todo o conteúdo do arquivo.
3. **No Scriptable**: toque em **+** (novo script), apague o conteúdo de exemplo e
   **cole** o código. Toque no nome no topo e renomeie para `Palavra do Dia`.
   Toque em ▶ para testar — deve aparecer uma tabela com a palavra de hoje e as próximas.

### Widget na tela de bloqueio (iOS 16+)

1. Segure o dedo na tela de bloqueio → **Personalizar** → **Tela Bloqueada**.
2. Toque na área de widgets (abaixo do relógio) → escolha **Scriptable**.
3. Adicione o widget **retangular** (mostra as 3 linhas). O circular e o inline também funcionam.
4. Toque no widget recém-adicionado e configure:
   - **Script**: `Palavra do Dia`
   - **When Interacting**: `Run Script` (tocar no widget abre a lista das próximas palavras)
5. Toque em **OK** / **Concluído**.

### Widget na tela inicial (opcional)

1. Segure o dedo na tela inicial → **+** → **Scriptable** → tamanho pequeno → **Adicionar Widget**.
2. Segure o widget → **Editar Widget** → **Script**: `Palavra do Dia`.

## Como editar as palavras

Abra o script no Scriptable (ou edite o `.js` no PC e cole de novo) e mexa na lista
`WORDS` no topo. Cada linha é `["caractere", "pinyin", "português"],`.
Atenção: adicionar ou remover palavras reembaralha a ordem inteira.

## Observações sobre o glossário original

Três ajustes foram feitos ao importar (o resto está idêntico à planilha):

- **俄语 / 俄文** estava traduzido como "Rússia" → corrigido para **"língua russa"**.
- **谁** estava com pinyin "shu/shéi" → corrigido para **"shuí/shéi"**.
- **水一 / Shuǐ Mù** tinha caractere errado (o pinyin e a tradução indicam o nome
  Shui Mu) → corrigido para **水木**.
- Entradas duplicadas exatas (开 e 家 apareciam 2×) foram unificadas.

## Correções no glossário 2 (1.0.0)

- Pinyin: 懂 dǒng, 饱 bǎo, 所以 suǒyǐ, 宿舍 sùshè, 的话 dehuà, 星期四 xīngqīsì,
  人民币 rénmínbì, 画图 huàtú, 请假 qǐngjià, 乌拉圭 Wūlāguī, 护士 hùshi.
- Tradução: 大使馆 → embaixada, 不少 → bastante/muitos, 日元 → iene, 小说 → romance.
- 黑奥 ("moeda brasileira") trocado por **雷亚尔 léiyà'ěr** (real).
- Erros de digitação: igreja, enfermeira, farinha de trigo, mais ou menos, descansar.
- Repetidas unificadas: 还 (hái/huán — ainda/devolver), 跟 (com/seguir/e);
  要 ganhou o sentido "ir (futuro)" na entrada que já existia.
