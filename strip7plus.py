#!/usr/bin/python

import sys
import re

stripline = re.compile(r'"(.+?)": "(.+?)"')

for line in sys.stdin:
	line = line.strip()
	sl = stripline.match( line )
	if sl:
		safe = True
		chords = sl.group(1).split("/")
		for chord in chords:
			if len(chord)>6:
				safe = False
		if safe:
			print line
	else:
		print line
