#!/usr/bin/python

import sys
import re

e = open("english1000.txt","rt").read().split("\n")[:-1]
eused = []

header = "TypeJig.Translations.Plover = {"
footer = "};"

#	"parts": "PARTS",
#	"party": ["PAR/TI","PAERT"],

stripline = re.compile(r'"(.+?)": "(.+?)"')
numbersIn = re.compile(r'\d')

translations = {}
costs = {}

def CalcSimplicity( chords ):
	cost = len(chords)
	for chord in chords:
		if numbersIn.search(chord):
			cost += 20
		if '-' in chord:
			chordCost = max(len(chord)-1,1)
		else:
			chordCost = max(len(chord),1)
		cost += chordCost
	return cost

for line in sys.stdin:
	line = line.strip()
	sl = stripline.match( line )
	if sl:
		chords = sl.group(1).split("/")
		cost = CalcSimplicity(chords)
		word = sl.group(2)
		if word in e:
			if word in translations:
				if cost < costs[word]:
					costs[word] = cost
					translations[word] = line
			else:
				costs[word] = cost
				translations[word] = line
				eused.append(word)

print header

for translation,line in translations.iteritems():
	sl = stripline.match( line )
	steno = sl.group(1)
	word = sl.group(2)
	chords = steno.split("/")
	print '\t"{}": "{}",'.format(word,steno)

print footer

learnwords = []
for word in e:
	if word in eused:
		learnwords.append("'{}',".format(word))

with open("common6kro.txt","wt") as f:
	while len(learnwords)>10:
		f.write("\t\t"+" ".join( learnwords[:10])+"\n")
		learnwords = learnwords[10:]
	f.write("\t\t"+" ".join( learnwords)+"\n")
