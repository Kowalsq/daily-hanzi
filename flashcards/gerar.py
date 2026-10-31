# Gera flashcards.html com a lista WORDS de palavra-do-dia.js.
# Rode de novo sempre que mudar as palavras do widget:  python flashcards/gerar.py
import json
import re
from pathlib import Path

root = Path(__file__).resolve().parent.parent
js = (root / "palavra-do-dia.js").read_text(encoding="utf-8")
block = js[js.index("const WORDS = [") : js.index("];", js.index("const WORDS = ["))]
words = re.findall(r'^\s*\["([^"]+)", "([^"]*)", "([^"]*)"\]', block, re.M)

template = (Path(__file__).parent / "template.html").read_text(encoding="utf-8")
html = template.replace("/*WORDS*/[]", json.dumps(words, ensure_ascii=False))
(root / "flashcards.html").write_text(html, encoding="utf-8", newline="\n")
print(f"flashcards.html gerado com {len(words)} palavras")
