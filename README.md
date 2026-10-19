# daily-hanzi · 中文 Palavra da Hora

Widget para a tela de bloqueio do iPhone que mostra uma palavra de chinês por hora:
**hanzi, pinyin e tradução em português**. Feito com o app [Scriptable](https://scriptable.app).

*An iOS lock screen widget (Scriptable) that shows a new Chinese word every hour, with pinyin and Portuguese translation.*

```
┌──────────────────────┐
│ 下课                 │
│ xiàkè · terminar a   │
│         aula         │
└──────────────────────┘
```

## Como funciona

- **622 palavras**: glossário do curso (versões 1.0.1 e 2 1.0.0) + vocabulário do HSK1.
- A palavra troca a cada hora. A ordem é embaralhada, mas fixa: nenhuma palavra se repete
  antes de passar pelas 622 (cerca de 26 dias).
- Funciona offline, sem servidor nem conta.
- Abrindo o script no app, aparece a palavra de agora e as das próximas 13 horas.

## Instalação

1. Instale o **Scriptable** na App Store.
2. Crie um script novo, cole o conteúdo de [`palavra-do-dia.js`](palavra-do-dia.js) e salve
   com o nome `Palavra do Dia`.
3. Na tela de bloqueio: **Personalizar → Tela Bloqueada → widgets → Scriptable →
   retangular**, e escolha o script `Palavra do Dia`.

O passo a passo completo, com a tela inicial e as observações sobre o glossário, está no
[LEIA-ME.md](LEIA-ME.md).

## Editar as palavras

As palavras ficam na lista `WORDS`, no topo do script. Cada linha segue o formato:

```js
["汉字", "hànzì", "caractere chinês"],
```

Adicionar ou remover palavras gera uma nova ordem embaralhada.

## Arquivos

| Arquivo | O que é |
|---|---|
| [`palavra-do-dia.js`](palavra-do-dia.js) | O widget (script do Scriptable) com a lista de palavras |
| [`LEIA-ME.md`](LEIA-ME.md) | Guia de instalação detalhado e correções feitas nos glossários |
| [`glossario_2_1.0.0.xlsx`](glossario_2_1.0.0.xlsx) | Planilha original do glossário 2 |
