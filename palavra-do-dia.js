// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: language;
//
// ============================================================
// 中文 Palavra do Dia — HSK1 + Glossário 1.0.1 + Glossário 2 1.0.0
// Widget para tela de bloqueio e tela inicial do iOS.
// Mostra a cada hora uma palavra: caractere, pinyin e português.
// 622 palavras; cada volta (~26 dias) tem uma ordem embaralhada nova.
//
// Para adicionar/editar palavras, basta mexer na lista WORDS
// abaixo: ["caractere", "pinyin", "português"]
// ============================================================

const WORDS = [
  // ---- Glossário 1.0.1 ----
  ["菠萝", "bōluó", "abacaxi"],
  ["上网", "shàngwǎng", "acessar a internet"],
  ["律师", "lǜshī", "advogado"],
  ["南非", "Nánfēi", "África do Sul"],
  ["现在", "xiànzài", "agora"],
  ["水", "shuǐ", "água"],
  ["帮助", "bāngzhù", "ajudar"],
  ["德国", "Déguó", "Alemanha"],
  ["明天", "míngtiān", "amanhã"],
  ["爱", "ài", "amar"],
  ["李子", "lǐzi", "ameixa/sobrenome Li"],
  ["南美洲", "Nán Měizhōu", "América do Sul"],
  ["朋友", "péngyou", "amigo"],
  ["安娜", "Ānnà", "Ana"],
  ["安德森", "Āndésēn", "Anderson"],
  ["去年", "qùnián", "ano passado"],
  ["明年", "míngnián", "ano que vem"],
  ["黑板擦", "hēibǎn cā", "apagador"],
  ["那", "nà", "aquele/aquela"],
  ["这里", "zhèlǐ", "aqui"],
  ["阿根廷", "Āgēntíng", "Argentina"],
  ["上课", "shàngkè", "assistir aula"],
  ["事情", "shìqing", "assunto"],
  ["再见", "zàijiàn", "até logo"],
  ["课", "kè", "aula"],
  ["澳大利亚", "Àodàlìyà", "Austrália"],
  ["飞机", "fēijī", "avião"],
  ["外婆", "wàipó", "avó materna"],
  ["外公", "wàigōng", "avô materno"],
  ["奶奶", "nǎinai", "avó paterna"],
  ["爷爷", "yéye", "avô paterno"],
  ["银行", "yínháng", "banco"],
  ["厕所 / 洗手间", "cèsuǒ / xǐshǒujiān", "banheiro"],
  ["便宜", "piányi", "barato"],
  ["喝", "hē", "beber"],
  ["晚安", "wǎn’ān", "boa noite"],
  ["球", "qiú", "bola"],
  ["蛋糕", "dàngāo", "bolo"],
  ["好", "hǎo", "bom"],
  ["美丽", "Měilì", "bonita/nome próprio Mei Li"],
  ["漂亮", "piàoliang", "bonito"],
  ["橡皮", "xiàngpí", "borracha"],
  ["林", "Lín", "bosque/sobrenome Lin"],
  ["巴西", "Bāxī", "Brasil"],
  ["狗", "gǒu", "cachorro"],
  ["小狗", "xiǎogǒu", "cachorro (filhote)"],
  ["椅子", "yǐzi", "cadeira"],
  ["本子", "běnzi", "caderno"],
  ["咖啡", "kāfēi", "café"],
  ["裤子", "kùzi", "calça"],
  ["床", "chuáng", "cama"],
  ["门铃", "ménlíng", "campainha"],
  ["歌", "gē", "canção"],
  ["笔", "bǐ", "caneta/instrumento de escrita"],
  ["累", "lèi", "cansado"],
  ["唱歌", "chàng gē", "cantar"],
  ["字", "zì", "caractere"],
  ["肉", "ròu", "carne"],
  ["贵", "guì", "caro"],
  ["家乐福", "Jiālèfú", "Carrefour"],
  ["车", "chē", "carro"],
  ["汽车", "qìchē", "carro (automóvel)"],
  ["家", "jiā", "casa/lar"],
  ["马", "mǎ", "cavalo"],
  ["手机", "shǒujī", "celular"],
  ["一百", "yì bǎi", "cem"],
  ["中心", "zhōngxīn", "centro"],
  ["市中心", "shì zhōngxīn", "centro da cidade"],
  ["茶", "chá", "chá"],
  ["叫", "jiào", "chamar-se/latir"],
  ["讨厌", "tǎoyàn", "chato"],
  ["智利", "Zhìlì", "Chile"],
  ["中国", "Zhōngguó", "China"],
  ["城市", "chéngshì", "cidade"],
  ["五", "wǔ", "cinco"],
  ["间", "jiān", "classificador de lugares fechados"],
  ["件", "jiàn", "classificador de vestimentas"],
  ["只", "zhī", "classificador de animais"],
  ["支", "zhī", "classificador de instrumento de escrita"],
  ["本", "běn", "classificador de livros"],
  ["台", "tái", "classificador de máquinas"],
  ["张", "zhāng", "classificador de móvel e papel/sobrenome Zhang"],
  ["个", "gè", "classificador de pessoa e objetos"],
  ["代码", "dàimǎ", "código"],
  ["兔子", "tùzi", "coelho"],
  ["东西", "dōngxi", "coisas"],
  ["同学", "tóngxué", "colega de estudo"],
  ["中学", "zhōngxué", "colégio"],
  ["吃", "chī", "comer"],
  ["吃饭", "chīfàn", "comer refeição"],
  ["商人", "shāngrén", "comerciante"],
  ["怎么", "zěnme", "como"],
  ["买", "mǎi", "comprar"],
  ["电脑", "diànnǎo", "computador"],
  ["韩国", "Hánguó", "Coreia do Sul"],
  ["邮局", "yóujú", "correio"],
  ["做饭", "zuò fàn", "cozinhar"],
  ["古巴", "Gǔbā", "Cuba"],
  ["跳舞", "tiàowǔ", "dançar"],
  ["十", "shí", "dez"],
  ["字典", "zìdiǎn", "dicionário"],
  ["难", "nán", "difícil"],
  ["钱", "qián", "dinheiro"],
  ["开", "kāi", "dirigir/abrir/ligar"],
  ["有趣", "yǒuqù", "divertido"],
  ["二", "èr", "dois"],
  ["二 / 两", "èr / liǎng", "dois (número/quantidade)"],
  ["睡觉", "shuìjiào", "dormir"],
  ["和", "hé", "e"],
  ["她", "tā", "ela"],
  ["她们", "tāmen", "elas"],
  ["他", "tā", "ele"],
  ["它", "tā", "ele (objeto/animal)"],
  ["他们", "tāmen", "eles"],
  ["在家", "zàijiā", "em casa"],
  ["上", "shàng", "em cima"],
  ["在", "zài", "em/estar"],
  ["公司", "gōngsī", "empresa"],
  ["工程师", "gōngchéngshī", "engenheiro"],
  ["学校", "xuéxiào", "escola"],
  ["小学", "xiǎoxué", "escola de ensino fundamental"],
  ["办公室", "bàngōngshì", "escritório"],
  ["听", "tīng", "escutar"],
  ["西班牙", "Xībānyá", "Espanha"],
  ["球场", "qiúchǎng", "estádio/campo para jogar bola"],
  ["美国", "Měiguó", "Estados Unidos"],
  ["这", "zhè", "este"],
  ["今年", "jīnnián", "este ano"],
  ["学生", "xuéshēng", "estudante"],
  ["学习", "xuéxí", "estudar/aprender"],
  ["我", "wǒ", "eu"],
  ["当", "dāng", "exercer a função de"],
  ["运动", "yùndòng", "exercitar/esporte"],
  ["非常", "fēicháng", "extremamente"],
  ["工厂", "gōngchǎng", "fábrica"],
  ["上面", "shàngmiàn", "face superior"],
  ["面", "miàn", "face/farinha"],
  ["说话", "shuōhuà", "falar"],
  ["做", "zuò", "fazer"],
  ["丑", "chǒu", "feio"],
  ["高兴", "gāoxìng", "feliz"],
  ["女儿", "nǚ’ér", "filha"],
  ["儿子", "érzi", "filho"],
  ["子", "zǐ/zi", "filho/sufixo de objeto"],
  ["电影", "diànyǐng", "filme"],
  ["可爱", "kě’ài", "fofo"],
  ["们", "men", "formador de plural para pessoas"],
  ["法国", "Fǎguó", "França"],
  ["水果", "shuǐguǒ", "fruta"],
  ["职员", "zhíyuán", "funcionário administrativo"],
  ["足球", "zúqiú", "futebol"],
  ["猫", "māo", "gato"],
  ["冰箱", "bīngxiāng", "geladeira"],
  ["粉笔", "fěnbǐ", "giz"],
  ["喜欢", "xǐhuan", "gostar de"],
  ["好吃", "hǎochī", "gostoso"],
  ["大", "dà", "grande"],
  ["雨伞", "yǔsǎn", "guarda-chuva"],
  ["今天", "jīntiān", "hoje"],
  ["医院", "yīyuàn", "hospital"],
  ["老人", "lǎorén", "idoso"],
  ["英国", "Yīngguó", "Inglaterra"],
  ["网络", "wǎngluò", "internet"],
  ["去", "qù", "ir"],
  ["妹妹", "mèimei", "irmã mais nova"],
  ["姐姐", "jiějie", "irmã mais velha"],
  ["弟弟", "dìdi", "irmão mais novo"],
  ["哥哥", "gēge", "irmão mais velho"],
  ["意大利", "Yìdàlì", "Itália"],
  ["日本", "Rìběn", "Japão"],
  ["玩", "wán", "jogar/brincar/passear"],
  ["游戏", "yóuxì", "jogo/brincadeira"],
  ["年轻", "niánqīng", "jovem"],
  ["铅笔", "qiānbǐ", "lápis"],
  ["橙子 / 桔子", "chéngzi / júzi", "laranja"],
  ["狮子", "shīzi", "leão"],
  ["牛奶", "niúnǎi", "leite de vaca"],
  ["读书", "dúshū", "ler/estudar"],
  ["德语 / 德文", "Déyǔ / Déwén", "língua alemã"],
  ["汉语 / 中文", "Hànyǔ / Zhōngwén", "língua chinesa"],
  ["中文", "Zhōngwén", "língua chinesa (escrita)"],
  ["西班牙语", "Xībānyáyǔ", "língua espanhola"],
  ["西语", "Xīyǔ", "língua espanhola (abrev.)"],
  ["法语 / 法文", "Fǎyǔ / Fǎwén", "língua francesa"],
  ["英文", "Yīngwén", "língua inglesa (escrita)"],
  ["英语", "Yīngyǔ", "língua inglesa"],
  ["意大利语", "Yìdàlìyǔ", "língua italiana"],
  ["日语", "Rìyǔ", "língua japonesa"],
  ["葡萄牙语", "Pútáoyáyǔ", "língua portuguesa"],
  ["语言", "yǔyán", "língua/idioma"],
  ["书店", "shūdiàn", "livraria"],
  ["书", "shū", "livro"],
  ["课本", "kèběn", "livro didático"],
  ["商店", "shāngdiàn", "loja"],
  ["洛拉", "Luòlā", "Lola"],
  ["月亮", "yuèliang", "lua"],
  ["苹果", "píngguǒ", "maçã"],
  ["猴子", "hóuzi", "macaco"],
  ["妈妈", "māma", "mãe"],
  ["母亲", "mǔqīn", "mãe (formal)"],
  ["马来西亚", "Mǎláixīyà", "Malásia"],
  ["早上", "zǎoshang", "manhã"],
  ["地图", "dìtú", "mapa"],
  ["洗衣机", "xǐyījī", "máquina de lavar roupa"],
  ["照相机", "zhàoxiàngjī", "máquina fotográfica"],
  ["但是", "dànshì", "mas"],
  ["医生", "yīshēng", "médico"],
  ["桌子", "zhuōzi", "mesa"],
  ["一千", "yìqiān", "mil"],
  ["书包", "shūbāo", "mochila"],
  ["草莓", "cǎoméi", "morango"],
  ["司机", "sījī", "motorista"],
  ["很", "hěn", "muito"],
  ["很难", "hěn nán", "muito difícil"],
  ["太", "tài", "muito/excessivamente/tão"],
  ["女人", "nǚrén", "mulher"],
  ["音乐", "yīnyuè", "música"],
  ["在街上", "zài jiē shàng", "na rua"],
  ["游泳", "yóuyǒng", "nadar"],
  ["不", "bù", "não"],
  ["不太", "bù tài", "não muito"],
  ["不知道", "bù zhīdào", "não saber"],
  ["没", "méi", "negação de ter/negação de passado"],
  ["孙女", "sūnnǚ", "neta"],
  ["孙子", "sūnzi", "neto"],
  ["一共", "yígòng", "no total"],
  ["晚上", "wǎnshàng", "noite"],
  ["名字", "míngzi", "nome"],
  ["丽丽", "Lìlì", "nome próprio Li Li"],
  ["亮亮", "Liàngliàng", "nome próprio Liang Liang"],
  ["水木", "Shuǐ Mù", "nome próprio Shui Mu"],
  ["水元", "Shuǐ Yuán", "nome próprio Shui Yuan"],
  ["我们", "wǒmen", "nós"],
  ["新西兰", "Xīnxīlán", "Nova Zelândia"],
  ["九", "jiǔ", "nove"],
  ["新", "xīn", "novo"],
  ["云", "yún", "nuvem"],
  ["什么", "shénme", "o quê?/qual?"],
  ["八", "bā", "oito"],
  ["哪儿 / 哪里", "nǎr / nǎlǐ", "onde"],
  ["或", "huò", "ou"],
  ["羊", "yáng", "ovelha"],
  ["鸡蛋", "jīdàn", "ovo"],
  ["爸爸", "bàba", "pai"],
  ["国家", "guójiā", "país"],
  ["面包", "miànbāo", "pão"],
  ["纸", "zhǐ", "papel"],
  ["公园", "gōngyuán", "parque"],
  ["吗", "ma", "partícula interrogativa"],
  ["呢", "ne", "partícula interrogativa (e...?)"],
  ["的", "de", "partícula possessiva"],
  ["过", "guò", "passar/ter experiência de"],
  ["鸟", "niǎo", "pássaro"],
  ["鸭子", "yāzi", "pato"],
  ["保罗", "Bǎoluó", "Paulo"],
  ["脚", "jiǎo", "pé"],
  ["鱼", "yú", "peixe"],
  ["想", "xiǎng", "pensar/querer"],
  ["小", "xiǎo", "pequeno"],
  ["附近", "fùjìn", "perto de"],
  ["人", "rén", "pessoa"],
  ["能", "néng", "poder (possibilidade)"],
  ["可以", "kěyǐ", "poder (permissão)"],
  ["波兰", "Bōlán", "Polônia"],
  ["为什么", "wèishénme", "por quê"],
  ["猪", "zhū", "porco"],
  ["门", "mén", "porta"],
  ["葡萄牙", "Pútáoyá", "Portugal"],
  ["需要", "xūyào", "precisar/necessitar"],
  ["市政府", "shì zhèngfǔ", "prefeitura"],
  ["初中", "chūzhōng", "primeira metade do ensino médio"],
  ["老师", "lǎoshī", "professor"],
  ["几", "jǐ", "quantos (interrogativo)"],
  ["考试", "kǎoshì", "prova"],
  ["黑板", "hēibǎn", "quadro negro"],
  ["哪些", "nǎxiē", "quais"],
  ["多少", "duōshǎo", "quanto"],
  ["四", "sì", "quatro"],
  ["谁", "shuí/shéi", "quem"],
  ["要", "yào", "querer/precisar/custar/ir (futuro)"],
  ["网", "wǎng", "rede"],
  ["饭", "fàn", "refeição"],
  ["尺子", "chǐzi", "régua"],
  ["国王", "guówáng", "rei"],
  ["王", "Wáng", "rei/sobrenome Wang"],
  ["餐厅 / 饭馆", "cāntīng / fànguǎn", "restaurante"],
  ["衣服", "yīfu", "roupa"],
  ["坏", "huài", "ruim"],
  ["俄罗斯", "Éluósī", "Rússia"],
  ["俄语 / 俄文", "Éyǔ / Éwén", "língua russa"],
  ["知道", "zhīdào", "saber"],
  ["会", "huì", "saber (habilidade aprendida)"],
  ["圣保罗", "Shèng Bǎoluó", "São Paulo"],
  ["鞋子", "xiézi", "sapato"],
  ["高中", "gāozhōng", "segunda metade do ensino médio"],
  ["六", "liù", "seis"],
  ["先生", "xiānsheng", "senhor"],
  ["太太", "tàitai", "senhora"],
  ["小姐", "xiǎojiě", "senhorita"],
  ["是", "shì", "ser"],
  ["七", "qī", "sete"],
  ["商场 / 购物中心", "shāngchǎng / gòuwù zhōngxīn", "shopping"],
  ["新加坡", "Xīnjiāpō", "Singapura"],
  ["姓", "xìng", "sobrenome"],
  ["陈", "Chén", "sobrenome Chen"],
  ["刘", "Liú", "sobrenome Liu"],
  ["日", "rì", "sol/dia"],
  ["瑞典", "Ruìdiǎn", "Suécia"],
  ["瑞士", "Ruìshì", "Suíça"],
  ["超市", "chāoshì", "supermercado"],
  ["泰国", "Tàiguó", "Tailândia"],
  ["台湾", "Táiwān", "Taiwan"],
  ["也", "yě", "também"],
  ["电视", "diànshì", "televisão"],
  ["网球", "wǎngqiú", "tênis (esporte)"],
  ["有", "yǒu", "ter"],
  ["老虎", "lǎohǔ", "tigre"],
  ["喝茶", "hē chá", "tomar chá"],
  ["工人", "gōngrén", "trabalhador"],
  ["上班", "shàngbān", "trabalhar (em serviço)"],
  ["工作", "gōngzuò", "trabalho/trabalhar"],
  ["三", "sān", "três"],
  ["土耳其", "Tǔ'ěrqí", "Turquia"],
  ["一", "yī", "um"],
  ["点儿", "yìdiǎnr", "um pouco"],
  ["大学", "dàxué", "universidade"],
  ["用", "yòng", "usar"],
  ["葡萄", "pútao", "uva"],
  ["旧", "jiù", "velho (objetos)/antigo"],
  ["看", "kàn", "ver/assistir"],
  ["视力", "shìlì", "visão"],
  ["你", "nǐ", "você"],
  ["您", "nín", "você (formal)"],
  ["你们", "nǐmen", "vocês"],
  ["骂", "mà", "xingar"],
  ["零", "líng", "zero"],
  // ---- HSK1 (palavras que faltavam no glossário) ----
  ["杯子", "bēizi", "copo"],
  ["北京", "Běijīng", "Pequim"],
  ["不客气", "bú kèqi", "de nada"],
  ["菜", "cài", "prato/comida"],
  ["出租车", "chūzūchē", "táxi"],
  ["打电话", "dǎ diànhuà", "telefonar"],
  ["点", "diǎn", "hora (nas horas)"],
  ["都", "dōu", "todos/ambos"],
  ["读", "dú", "ler"],
  ["对不起", "duìbuqǐ", "desculpe"],
  ["多", "duō", "muito/muitos"],
  ["饭店", "fàndiàn", "restaurante/hotel"],
  ["分钟", "fēnzhōng", "minuto"],
  ["号", "hào", "número/dia do mês"],
  ["后面", "hòumiàn", "atrás"],
  ["回", "huí", "voltar/retornar"],
  ["看见", "kànjiàn", "ver/avistar"],
  ["块", "kuài", "yuan (dinheiro)/pedaço"],
  ["来", "lái", "vir"],
  ["了", "le", "partícula de ação concluída"],
  ["冷", "lěng", "frio"],
  ["里", "lǐ", "dentro"],
  ["没关系", "méi guānxi", "não tem problema"],
  ["没有", "méiyǒu", "não ter"],
  ["米饭", "mǐfàn", "arroz cozido"],
  ["哪", "nǎ", "qual"],
  ["年", "nián", "ano"],
  ["前面", "qiánmiàn", "frente"],
  ["请", "qǐng", "por favor/convidar"],
  ["热", "rè", "quente"],
  ["认识", "rènshi", "conhecer"],
  ["上午", "shàngwǔ", "período da manhã"],
  ["少", "shǎo", "pouco"],
  ["时候", "shíhou", "momento/hora"],
  ["说", "shuō", "falar/dizer"],
  ["岁", "suì", "anos (de idade)"],
  ["天气", "tiānqì", "tempo/clima"],
  ["喂", "wéi", "alô (ao telefone)"],
  ["下", "xià", "embaixo/descer"],
  ["下午", "xiàwǔ", "tarde"],
  ["下雨", "xià yǔ", "chover"],
  ["些", "xiē", "alguns"],
  ["写", "xiě", "escrever"],
  ["谢谢", "xièxie", "obrigado"],
  ["星期", "xīngqī", "semana"],
  ["月", "yuè", "mês"],
  ["怎么样", "zěnmeyàng", "que tal/como está"],
  ["中午", "zhōngwǔ", "meio-dia"],
  ["住", "zhù", "morar"],
  ["昨天", "zuótiān", "ontem"],
  ["坐", "zuò", "sentar/andar de (veículo)"],
  // ---- Glossário 2 1.0.0 ----
  ["左边", "zuǒbian", "à esquerda de"],
  ["健身房", "jiànshēnfáng", "academia"],
  ["觉得", "juéde", "achar/pensar"],
  ["机场", "jīchǎng", "aeroporto"],
  ["分行", "fēnháng", "agência"],
  ["还", "hái / huán", "ainda / devolver"],
  ["帮", "bāng", "ajudar"],
  ["午饭", "wǔfàn", "almoço"],
  ["黄", "huáng", "amarelo"],
  ["楼", "lóu", "andar de prédio"],
  ["生日", "shēngri", "aniversário"],
  ["旁边", "pángbiān", "ao lado de"],
  ["出现", "chūxiàn", "aparecer"],
  ["公寓", "gōngyù", "apartamento"],
  ["那些", "nàxiē", "aqueles"],
  ["两手", "liǎngshǒu", "as duas mãos"],
  ["蓝色", "lánsè", "azul"],
  ["国旗", "guóqí", "bandeira nacional"],
  ["酒吧", "jiǔbā", "bar"],
  ["船", "chuán", "barco/navio"],
  ["篮球", "lánqiú", "basquete"],
  ["百货", "bǎihuò", "bazar"],
  ["棒球", "bàngqiú", "beisebol"],
  ["图书馆", "túshūguǎn", "biblioteca"],
  ["自行车", "zìxíngchē", "bicicleta"],
  ["好喝", "hǎohē", "bom de beber"],
  ["好听", "hǎotīng", "bom de ouvir"],
  ["好看", "hǎokàn", "bonito"],
  ["白", "bái", "branco"],
  ["白色", "báisè", "branco"],
  ["巴西利亚", "Bāxīlìyà", "Brasília"],
  ["每年", "měinián", "cada ano"],
  ["每天", "měitiān", "cada dia/todos os dias"],
  ["每次", "měicì", "cada vez"],
  ["算", "suàn", "calcular"],
  ["走路", "zǒulù", "caminhar"],
  ["操场", "cāochǎng", "campo de exercício"],
  ["信", "xìn", "carta"],
  ["公分", "gōngfēn", "centímetro"],
  ["典礼", "diǎnlǐ", "cerimônia"],
  ["婚礼", "hūnlǐ", "cerimônia de casamento"],
  ["帽子", "màozi", "chapéu"],
  ["上司", "shàngsī", "chefe"],
  ["支票", "zhīpiào", "cheque"],
  ["巧克力", "qiǎokèlì", "chocolate"],
  ["皮带", "pídài", "cinto"],
  ["灰", "huī", "cinza"],
  ["灰色", "huīsè", "cinza"],
  ["顶", "dǐng", "classificador de chapéu"],
  ["条", "tiáo", "classificador de cinto e gravata"],
  ["俱乐部", "jùlèbù", "clube"],
  ["同事", "tóngshì", "colega de trabalho"],
  ["跟", "gēn", "com/seguir/e"],
  ["开始", "kāishǐ", "começar"],
  ["商业", "shāngyè", "comércio"],
  ["贸易", "màoyì", "comércio internacional"],
  ["比赛", "bǐsài", "competição/competir"],
  ["套", "tào", "conjunto"],
  ["看病", "kànbìng", "consulta médica"],
  ["请客", "qǐngkè", "convidar e pagar"],
  ["颜色", "yánsè", "cor"],
  ["粉红色", "fěnhóngsè", "cor de rosa"],
  ["礼貌", "lǐmào", "cortesia"],
  ["煮", "zhǔ", "cozinhar"],
  ["系", "xì", "curso universitário"],
  ["那样", "nàyàng", "daquela forma"],
  ["日期", "rìqī", "data"],
  ["什么样", "shénmeyàng", "de que forma"],
  ["里面", "lǐmiàn", "dentro de"],
  ["休息", "xiūxi", "descansar"],
  ["画图", "huàtú", "desenhar"],
  ["动画", "dònghuà", "desenho animado"],
  ["蓝图", "lántú", "desenho técnico"],
  ["慢", "màn", "devagar"],
  ["毛", "máo", "dez centavos"],
  ["美金", "měijīn", "dólar"],
  ["加币", "jiābì", "dólar canadense"],
  ["星期天", "xīngqītiān", "domingo"],
  ["老板", "lǎobǎn", "dono da empresa"],
  ["两次", "liǎngcì", "duas vezes"],
  ["大使馆", "dàshǐguǎn", "embaixada"],
  ["下面", "xiàmiàn", "embaixo de"],
  ["护士", "hùshi", "enfermeira"],
  ["懂", "dǒng", "entender"],
  ["错", "cuò", "errado"],
  ["刷牙", "shuāyá", "escovar dentes"],
  ["车站", "chēzhàn", "estação de ônibus"],
  ["欧元", "ōuyuán", "euro"],
  ["路考", "lùkǎo", "exame de direção"],
  ["面粉", "miànfěn", "farinha de trigo"],
  ["考", "kǎo", "fazer prova"],
  ["开会", "kāihuì", "fazer reunião"],
  ["难看", "nánkàn", "feio"],
  ["快乐", "kuàilè", "feliz"],
  ["物理", "wùlǐ", "física"],
  ["花", "huā", "flor/gastar"],
  ["外面", "wàimiàn", "fora de"],
  ["样", "yàng", "forma"],
  ["样子", "yàngzi", "forma"],
  ["公务员", "gōngwùyuán", "funcionário público"],
  ["公鸡", "gōngjī", "galo"],
  ["体育馆", "tǐyùguǎn", "ginásio"],
  ["高尔夫球", "gāoěrfūqiú", "golfe"],
  ["领带", "lǐngdài", "gravata"],
  ["手球", "shǒuqiú", "handebol"],
  ["酒店", "jiǔdiàn", "hotel"],
  ["教堂", "jiàotáng", "igreja"],
  ["打印机", "dǎyìnjī", "impressora"],
  ["工业", "gōngyè", "indústria"],
  ["门票", "ménpiào", "ingresso"],
  ["不行", "bùxíng", "inviável"],
  ["上学", "shàngxué", "ir a escola"],
  ["就", "jiù", "já/então"],
  ["晚饭", "wǎnfàn", "jantar"],
  ["报纸", "bàozhǐ", "jornal"],
  ["实验室", "shíyànshì", "laboratório"],
  ["点心", "diǎnxīn", "lanche"],
  ["橙色", "chéngsè", "laranja"],
  ["洗衣店", "xǐyīdiàn", "lavanderia"],
  ["洗", "xǐ", "lavar"],
  ["看书", "kànshū", "ler"],
  ["起床", "qǐchuáng", "levantar-se"],
  ["作业", "zuòyè", "lição de casa"],
  ["打扫", "dǎsǎo", "limpar"],
  ["会场", "huìchǎng", "local de reunião"],
  ["店", "diàn", "loja"],
  ["马马虎虎", "mǎmǎhūhū", "mais ou menos (de qualidade)"],
  ["左手", "zuǒshǒu", "mão esquerda"],
  ["老公", "lǎogōng", "marido"],
  ["咖啡色", "kāfēisè", "marrom"],
  ["数学", "shùxué", "matemática"],
  ["袜子", "wàzi", "meia"],
  ["蜂蜜", "fēngmì", "mel"],
  ["市场", "shìchǎng", "mercado"],
  ["货品", "huòpǐn", "mercadoria"],
  ["半", "bàn", "metade/meio"],
  ["地铁", "dìtiě", "metrô"],
  ["少数", "shǎoshù", "minoria"],
  ["分", "fēn", "minuto/centavo/nota"],
  ["雷亚尔", "léiyà’ěr", "real (moeda brasileira)"],
  ["人民币", "rénmínbì", "moeda da china"],
  ["骑", "qí", "montar"],
  ["宿舍", "sùshè", "moradia estudantil"],
  ["摩托车", "mótuōchē", "motocicleta"],
  ["很多", "hěnduō", "muito (adjetivo)"],
  ["很少", "hěnshǎo", "muito pouco"],
  ["博物馆", "bówùguǎn", "museu"],
  ["不少", "bùshǎo", "bastante/muitos"],
  ["商量", "shāngliáng", "negociar"],
  ["黑色", "hēisè", "negro"],
  ["紧张", "jǐnzhāng", "nervoso"],
  ["小说", "xiǎoshuō", "romance (livro)"],
  ["忙", "máng", "ocupado"],
  ["公共汽车", "gōnggòngqìchē", "ônibus"],
  ["公交车", "gōngjiāochē", "ônibus"],
  ["机会", "jīhuì", "oportunidade"],
  ["双", "shuāng", "par"],
  ["巴拉圭", "Bālāguī", "Paraguai"],
  ["参加", "cānjiā", "participar"],
  ["得", "de", "partícula de ligação"],
  ["吧", "ba", "partícula de sugestão"],
  ["机票", "jīpiào", "passagem de avião"],
  ["车票", "chēpiào", "passagem de ônibus"],
  ["过年", "guònián", "passar o ano novo"],
  ["请问", "qǐngwèn", "pedir informação"],
  ["请假", "qǐngjià", "pedir licença"],
  ["问题", "wèntí", "pergunta/problema"],
  ["比索", "bǐsuǒ", "peso"],
  ["国画", "guóhuà", "pintura chinesa"],
  ["司法", "sīfǎ", "poder judicial"],
  ["所以", "suǒyǐ", "por isso"],
  ["广场", "guǎngchǎng", "praça"],
  ["海边", "hǎibiān", "praia"],
  ["期限", "qīxiàn", "prazo"],
  ["市长", "shìzhǎng", "prefeito"],
  ["笔试", "bǐshì", "prova escrita"],
  ["口试", "kǒushì", "prova oral"],
  ["多大", "duōdà", "qual é o tamanho"],
  ["几次", "jǐcì", "quantas vezes"],
  ["星期三", "xīngqīsān", "quarta-feira"],
  ["星期几", "xīngqījǐ", "que dia da semana"],
  ["几号", "jǐhào", "que dia do mês"],
  ["几点", "jǐdiǎn", "que horas"],
  ["题", "tí", "questão"],
  ["星期四", "xīngqīsì", "quinta-feira"],
  ["快", "kuài", "rápido"],
  ["校长", "xiàozhǎng", "reitor/diretor"],
  ["药", "yào", "remédio"],
  ["餐馆", "cānguǎn", "restaurante"],
  ["里约", "Lǐyuē", "Rio de Janeiro"],
  ["紫", "zǐ", "roxo"],
  ["紫色", "zǐsè", "roxo"],
  ["差", "chà", "ruim (de qualidade)"],
  ["难喝", "nánhē", "ruim de beber"],
  ["难吃", "nánchī", "ruim de comer"],
  ["难听", "nántīng", "ruim de ouvir"],
  ["星期六", "xīngqīliù", "sábado"],
  ["裙子", "qúnzi", "saia"],
  ["出口", "chūkǒu", "saída"],
  ["出去", "chūqù", "sair (para lá)"],
  ["出门", "chūmén", "sair da casa"],
  ["下班", "xiàbān", "sair do serviço"],
  ["教室", "jiàoshì", "sala de aula"],
  ["饱", "bǎo", "satisfeito"],
  ["的话", "dehuà", "se (condição)"],
  ["如果", "rúguǒ", "se (condição)"],
  ["二手", "èrshǒu", "segunda mão/usado"],
  ["星期一", "xīngqīyī", "segunda-feira"],
  ["学期", "xuéqī", "semestre"],
  ["场", "chǎng", "sessão"],
  ["星期五", "xīngqīwǔ", "sexta-feira"],
  ["百货公司", "bǎihuògōngsī", "shopping center"],
  ["自己", "zìjǐ", "si mesmo"],
  ["晚", "wǎn", "tarde"],
  ["球鞋", "qiúxié", "tênis (sapato)"],
  ["乒乓球", "pīngpāngqiú", "tênis da mesa"],
  ["星期二", "xīngqīèr", "terça-feira"],
  ["完", "wán", "terminar"],
  ["下课", "xiàkè", "terminar a aula"],
  ["西装", "xīzhuāng", "terno"],
  ["天天", "tiāntiān", "todos os dias"],
  ["洗澡", "xǐzǎo", "tomar banho"],
  ["换", "huàn", "trocar"],
  ["制服", "zhìfú", "uniforme"],
  ["乌拉圭", "Wūlāguī", "Uruguai"],
  ["卖", "mài", "vender"],
  ["绿", "lǜ", "verde"],
  ["红", "hóng", "vermelho"],
  ["礼服", "lǐfú", "vestido"],
  ["穿", "chuān", "vestir"],
  ["次", "cì", "vez"],
  ["排球", "páiqiú", "vôlei"],
  ["回家", "huíjiā", "voltar para casa"],
  ["日元", "rìyuán", "iene (moeda japonesa)"],
  ["工业区", "gōngyèqū", "zona industrial"]
];

// ---------- Palavra do dia (determinística) ----------
// Embaralha a lista com semente fixa: a ordem é sempre a mesma,
// mas os dias consecutivos não seguem a ordem alfabética.
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled(arr, seed) {
  const a = arr.slice();
  const rnd = mulberry32(seed);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Cada volta pela lista usa um embaralhamento diferente, para que as
// palavras não caiam sempre nos mesmos horários (ex.: de madrugada).
const orderCache = {};
function orderForCycle(cycle) {
  if (!orderCache[cycle]) orderCache[cycle] = shuffled(WORDS, 20260702 + cycle * 7919);
  return orderCache[cycle];
}
// Palavra exibida numa hora qualquer (contada a partir de START)
function wordAt(hourNum) {
  const n = WORDS.length;
  const cycle = Math.floor(hourNum / n);
  const pos = ((hourNum % n) + n) % n;
  return { word: orderForCycle(cycle)[pos], pos };
}
const START = new Date(2026, 6, 1); // 1º de julho de 2026 (mês é 0-indexado)

const now = new Date();
const thisHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours());
// conta horas pelo relógio local (ignora pulos de horário de verão)
const dayNumber = Math.round((new Date(now.getFullYear(), now.getMonth(), now.getDate()) - START) / 86400000);
const hourNumber = dayNumber * 24 + now.getHours();
const { word: [hanzi, pinyin, pt], pos: idx } = wordAt(hourNumber);

// ---------- Montagem do widget ----------
const widget = new ListWidget();
// pede ao iOS para atualizar na virada da próxima hora
widget.refreshAfterDate = new Date(thisHour.getTime() + 3600000);

const family = config.widgetFamily || "small";

if (family === "accessoryRectangular") {
  // Tela de bloqueio, retângulo (o principal)
  // Hanzi grande em cima; pinyin e tradução juntos numa linha embaixo
  widget.setPadding(0, 4, 0, 4);
  const h = widget.addText(hanzi);
  h.font = Font.boldSystemFont(30);
  h.lineLimit = 1;
  h.minimumScaleFactor = 0.4;
  widget.addSpacer(2);
  const line = widget.addStack();
  line.layoutHorizontally();
  line.centerAlignContent();
  const p = line.addText(pinyin);
  p.font = Font.semiboldSystemFont(12);
  p.lineLimit = 1;
  p.minimumScaleFactor = 0.6;
  const t = line.addText(` · ${pt}`);
  t.font = Font.systemFont(12);
  t.lineLimit = 1;
  t.minimumScaleFactor = 0.6;
  t.textOpacity = 0.7;
} else if (family === "accessoryInline") {
  // Tela de bloqueio, linha acima do relógio
  const t = widget.addText(`${hanzi} ${pinyin} · ${pt}`);
  t.font = Font.mediumSystemFont(13);
} else if (family === "accessoryCircular") {
  // Tela de bloqueio, círculo — só cabe o caractere
  const h = widget.addText(hanzi);
  h.font = Font.boldSystemFont(hanzi.length > 2 ? 14 : 20);
  h.lineLimit = 1;
  h.minimumScaleFactor = 0.3;
  h.centerAlignText();
} else {
  // Tela inicial (small/medium/large)
  const grad = new LinearGradient();
  grad.colors = [new Color("#8E1F1F"), new Color("#3B0D0D")];
  grad.locations = [0, 1];
  widget.backgroundGradient = grad;
  widget.setPadding(12, 12, 12, 12);

  const header = widget.addText("中文 · palavra da hora");
  header.font = Font.mediumSystemFont(10);
  header.textColor = new Color("#FFD9A0");
  widget.addSpacer();

  const h = widget.addText(hanzi);
  h.font = Font.boldSystemFont(hanzi.length > 3 ? 26 : 38);
  h.textColor = Color.white();
  h.lineLimit = 1;
  h.minimumScaleFactor = 0.4;

  widget.addSpacer(4);
  const p = widget.addText(pinyin);
  p.font = Font.mediumSystemFont(15);
  p.textColor = new Color("#FFD9A0");
  p.lineLimit = 1;
  p.minimumScaleFactor = 0.5;

  const t = widget.addText(pt);
  t.font = Font.systemFont(13);
  t.textColor = Color.white();
  t.textOpacity = 0.9;
  t.lineLimit = 2;
  t.minimumScaleFactor = 0.6;

  widget.addSpacer();
  const foot = widget.addText(`${idx + 1}/${WORDS.length}`);
  foot.font = Font.systemFont(8);
  foot.textColor = Color.white();
  foot.textOpacity = 0.5;
}

if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  // Rodando dentro do app: mostra a palavra de agora e as das próximas horas
  const table = new UITable();
  table.showSeparators = true;
  for (let i = 0; i < 14; i++) {
    const [hz, py, tr] = wordAt(hourNumber + i).word;
    const d = new Date(thisHour);
    d.setHours(d.getHours() + i);
    const row = new UITableRow();
    const label = i === 0 ? "AGORA" : `${String(d.getHours()).padStart(2, "0")}h`;
    row.addText(label).widthWeight = 15;
    row.addText(hz, py).widthWeight = 35;
    row.addText(tr).widthWeight = 50;
    row.height = 50;
    table.addRow(row);
  }
  await table.present();
}

Script.complete();
