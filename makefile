plover-translations.js: stripped.json generatetranslations.py
	cat stripped.json | python generatetranslations.py > plover-translations.js

stripped.json: main.json strip7plus.py
	cat main.json | python strip7plus.py > stripped.json

