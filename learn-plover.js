// Wrap everything in a function to avoid polluting the global namespace.
(function() {

	TypeJig.WordSets.LearnPlover = {};

	TypeJig.WordSets.LearnPloverOrder = [
		"6KRO common words",
		"One Syllable Words",
		"Consonant Clusters",
		"Where's the TRUFT?",
		"Dropping Unstressed Vowels",
		"Inversion",
		"The Fifth Vowel Key",
		"Long Vowel Chords",
		"Diphthong Chords",
		"Vowel Disambiguator Chords",
		"The Missing Keys",
		"The Remaining Missing Letters",
		"Review Through Missing Letters",
		"Digraphs",
		"Review Through Digraphs",
		"Common Compound Clusters",
		"Review Through Common Compound Clusters",
		"Common Briefs 1-20",
		"Common Briefs 21-40",
		"Common Briefs 41-60",
		"Common Briefs 61-80",
		"Common Briefs 81-100",
	];

	var Plover = TypeJig.WordSets.LearnPlover;

	Plover["6KRO common words"] = [
		'the', 'be', 'and', 'of', 'a', 'in', 'to', 'have', 'to', 'it',
		'I', 'that', 'for', 'you', 'he', 'with', 'on', 'do', 'say', 'this',
		'they', 'at', 'but', 'we', 'his', 'from', 'that', 'not', 'by', 'she',
		'or', 'as', 'what', 'go', 'their', 'can', 'who', 'get', 'if', 'would',
		'her', 'all', 'my', 'make', 'about', 'know', 'will', 'as', 'up', 'one',
		'there', 'year', 'so', 'think', 'when', 'which', 'them', 'some', 'me', 'people',
		'take', 'out', 'into', 'just', 'see', 'him', 'your', 'come', 'could', 'now',
		'than', 'other', 'how', 'then', 'its', 'our', 'two', 'more', 'these', 'want',
		'way', 'look', 'first', 'also', 'new', 'because', 'day', 'more', 'use', 'no',
		'man', 'here', 'thing', 'give', 'many', 'well', 'only', 'those', 'tell', 'one',
		'very', 'her', 'even', 'back', 'any', 'good', 'woman', 'through', 'us', 'life',
		'there', 'work', 'down', 'may', 'after', 'should', 'call', 'world', 'over', 'school',
		'still', 'try', 'in', 'as', 'last', 'ask', 'need', 'too', 'feel', 'three',
		'when', 'state', 'never', 'become', 'between', 'high', 'really', 'something', 'most', 'another',
		'much', 'family', 'own', 'out', 'leave', 'put', 'old', 'mean', 'on', 'keep',
		'student', 'why', 'let', 'same', 'big', 'seem', 'country', 'help', 'talk', 'where',
		'turn', 'problem', 'every', 'start', 'hand', 'American', 'show', 'part', 'about', 'over',
		'such', 'again', 'few', 'case', 'most', 'week', 'company', 'where', 'system', 'each',
		'right', 'program', 'hear', 'so', 'question', 'during', 'work', 'play', 'run', 'small',
		'number', 'off', 'always', 'move', 'live', 'point', 'believe', 'hold', 'today', 'bring',
		'happen', 'next', 'without', 'before', 'all', 'million', 'must', 'home', 'under', 'water',
		'room', 'write', 'mother', 'area', 'national', 'money', 'story', 'fact', 'different', 'lot',
		'right', 'study', 'book', 'eye', 'job', 'word', 'though', 'business', 'issue', 'side',
		'kind', 'four', 'head', 'far', 'black', 'long', 'both', 'little', 'house', 'yes',
		'after', 'since', 'long', 'provide', 'service', 'around', 'important', 'father', 'sit', 'away',
		'until', 'power', 'hour', 'often', 'yet', 'political', 'end', 'among', 'ever', 'stand',
		'bad', 'lose', 'however', 'member', 'pay', 'law', 'meet', 'car', 'city', 'almost',
		'include', 'continue', 'set', 'later', 'much', 'five', 'once', 'president', 'learn', 'real',
		'team', 'minute', 'best', 'several', 'idea', 'kid', 'body', 'information', 'nothing', 'ago',
		'right', 'lead', 'social', 'understand', 'whether', 'back', 'watch', 'together', 'follow', 'around',
		'parent', 'only', 'stop', 'face', 'anything', 'create', 'public', 'already', 'others', 'read',
		'level', 'allow', 'add', 'office', 'spend', 'door', 'health', 'person', 'art', 'sure',
		'such', 'war', 'history', 'party', 'within', 'result', 'open', 'morning', 'walk', 'reason',
		'low', 'win', 'research', 'early', 'food', 'before', 'moment', 'himself', 'air', 'teacher',
		'force', 'offer', 'enough', 'both', 'education', 'across', 'although', 'remember', 'foot', 'second',
		'boy', 'maybe', 'toward', 'able', 'age', 'off', 'policy', 'everything', 'love', 'process',
		'music', 'including', 'consider', 'appear', 'actually', 'buy', 'probably', 'human', 'wait', 'serve',
		'market', 'die', 'send', 'expect', 'home', 'sense', 'build', 'stay', 'fall', 'plan',
		'cut', 'college', 'interest', 'death', 'course', 'someone', 'behind', 'reach', 'local', 'kill',
		'six', 'remain', 'effect', 'use', 'yeah', 'suggest', 'class', 'control', 'raise', 'care',
		'perhaps', 'little', 'late', 'hard', 'else', 'pass', 'former', 'sell', 'major', 'require',
		'along', 'development', 'themselves', 'report', 'role', 'better', 'economic', 'effort', 'up', 'decide',
		'rate', 'possible', 'heart', 'drug', 'show', 'leader', 'voice', 'wife', 'whole', 'police',
		'pull', 'return', 'free', 'military', 'report', 'less', 'according', 'decision', 'son', 'hope',
		'even', 'develop', 'view', 'relationship', 'carry', 'town', 'road', 'arm', 'federal', 'break',
		'better', 'difference', 'thank', 'receive', 'value', 'international', 'building', 'action', 'full', 'model',
		'season', 'society', 'because', 'tax', 'director', 'early', 'position', 'player', 'agree', 'especially',
		'record', 'pick', 'wear', 'paper', 'special', 'space', 'form', 'support', 'event', 'official',
		'whose', 'matter', 'everyone', 'center', 'couple', 'end', 'project', 'hit', 'base', 'activity',
		'star', 'table', 'need', 'court', 'produce', 'eat', 'American', 'teach', 'oil', 'half',
		'situation', 'easy', 'cost', 'industry', 'figure', 'face', 'image', 'itself', 'phone', 'either',
		'data', 'cover', 'picture', 'clear', 'practice', 'piece', 'land', 'recent', 'describe', 'product',
		'doctor', 'wall', 'patient', 'worker', 'news', 'test', 'movie', 'certain', 'north', 'love',
		'personal', 'open', 'support', 'simply', 'third', 'technology', 'catch', 'step', 'baby', 'computer',
		'type', 'attention', 'draw', 'film', 'Republican', 'tree', 'source', 'red', 'organization', 'choose',
		'cause', 'hair', 'look', 'point', 'century', 'evidence', 'window', 'difficult', 'listen', 'soon',
		'culture', 'billion', 'chance', 'brother', 'energy', 'period', 'course', 'summer', 'less', 'realize',
		'hundred', 'available', 'likely', 'opportunity', 'term', 'short', 'letter', 'condition', 'choice', 'single',
		'rule', 'daughter', 'administration', 'south', 'husband', 'Congress', 'campaign', 'material', 'well', 'call',
		'economy', 'medical', 'hospital', 'church', 'close', 'thousand', 'risk', 'current', 'future', 'wrong',
		'involve', 'defense', 'anyone', 'increase', 'security', 'bank', 'myself', 'certainly', 'west', 'sport',
		'board', 'seek', 'per', 'subject', 'officer', 'private', 'rest', 'behavior', 'deal', 'performance',
		'throw', 'top', 'quickly', 'past', 'second', 'bed', 'order', 'author', 'fill', 'represent',
		'focus', 'foreign', 'drop', 'plan', 'blood', 'upon', 'agency', 'push', 'nature', 'color',
		'no', 'store', 'reduce', 'sound', 'note', 'before', 'movement', 'enter', 'share', 'than',
		'common', 'poor', 'other', 'natural', 'race', 'concern', 'series', 'significant', 'similar', 'hot',
		'language', 'each', 'usually', 'response', 'dead', 'rise', 'animal', 'factor', 'decade', 'article',
		'shoot', 'east', 'save', 'seven', 'artist', 'away', 'scene', 'stock', 'career', 'despite',
		'central', 'eight', 'thus', 'happy', 'exactly', 'protect', 'approach', 'lie', 'size', 'dog',
		'fund', 'serious', 'occur', 'media', 'ready', 'thought', 'list', 'individual', 'simple', 'quality',
		'pressure', 'accept', 'answer', 'hard', 'resource', 'identify', 'left', 'meeting', 'determine', 'prepare',
		'disease', 'whatever', 'success', 'argue', 'cup', 'particularly', 'amount', 'ability', 'staff', 'recognize',
		'indicate', 'character', 'loss', 'degree', 'wonder', 'attack', 'herself', 'region', 'television', 'box',
		'TV', 'pretty', 'trade', 'deal', 'election', 'everybody', 'physical', 'lay', 'feeling', 'standard',
		'bill', 'message', 'fail', 'outside', 'arrive', 'analysis', 'benefit', 'sex', 'forward', 'lawyer',
		'present', 'section', 'answer', 'skill', 'sister', 'professor', 'operation', 'financial', 'ok', 'compare',
		'authority', 'miss', 'sort', 'one', 'act', 'ten', 'knowledge', 'blue', 'state', 'strategy',
		'little', 'clearly', 'discuss', 'indeed', 'force', 'truth', 'song', 'example', 'democratic', 'check',
		'leg', 'dark', 'public', 'various', 'rather', 'laugh', 'guess', 'executive', 'set', 'study',
		'prove', 'hang', 'entire', 'rock', 'enough', 'forget', 'since', 'note', 'remove', 'manager',
		'help', 'close', 'sound', 'network', 'legal', 'cold', 'form', 'final', 'science', 'memory',
		'card', 'above', 'seat', 'cell', 'establish', 'expert', 'that', 'Democrat', 'radio', 'visit',
		'management', 'care', 'avoid', 'tonight', 'ball', 'no', 'close', 'finish', 'yourself', 'talk',
		'theory', 'impact', 'respond', 'maintain', 'charge', 'popular', 'traditional', 'onto', 'reveal', 'direction',
		'weapon', 'employee', 'cultural', 'contain', 'peace', 'head', 'control', 'base', 'pain', 'apply',
		'play', 'measure', 'wide', 'interview', 'manage', 'chair', 'fish', 'particular', 'camera', 'structure',
		'politics', 'perform', 'bit', 'weight', 'suddenly', 'discover', 'candidate', 'top', 'production', 'treat',
		'trip', 'evening', 'affect', 'inside', 'conference', 'unit', 'best', 'adult', 'worry', 'range',
		'mention', 'rather', 'far', 'deep', 'past', 'edge', 'individual', 'specific', 'writer', 'trouble',
		'necessary', 'throughout', 'challenge', 'fear', 'shoulder', 'institution', 'middle', 'sea', 'bar', 'beautiful',
		'property', 'instead', 'improve', 'stuff', 'detail',
	];
	Plover["One Syllable Words"] = [
		'sap', 'sag', 'sat', 'sass', 'sad',
		'sop', 'sob', 'sell', 'set', 'says',
		'tar', 'tap', 'tab', 'tag', 'tad', 'tour',
		'top', 'toll', 'tell', 'tough', 'tub', 'tug',
		'car', 'cap', 'cab', 'cat', 'cad', 'core',
		'cop', 'cog', 'cot', 'cod', 'keg', 'cuff',
		'cur', 'cup', 'cub', 'cull', 'cut', 'cuss',
		'pal', 'pat', 'pass', 'pad', 'pour', 'poll',
		'pot', 'pod', 'pep', 'peg', 'pet', 'puff',
		'pup', 'pub', 'pull', 'pug', 'put', 'pus',
		'war', 'wag', 'wad', 'was', 'wore',
		'web', 'well', 'wet', 'wed',
		'half', 'hag', 'hat', 'had', 'has', 'hop',
		'hog', 'hot', 'her', 'hell', 'head',
		'huff', 'hub', 'hull', 'hug', 'hut',
		'rap', 'rag', 'rat', 'roar', 'rob', 'roll', 'rot',
		'rod', 'red', 'rough', 'rub', 'rug', 'rut'
	];

	Plover["Consonant Clusters"] = [
		'course', 'cover', 'hover', 'rabble', 'refer',
		'rebel', 'robbed', 'rubbed', 'rubble', 'straps',
		'strapped', 'trouble', 'troubles', 'waft', 'webbed'
	];

	Plover["Where's the TRUFT?"] = [
		'past', 'castle', 'stressed', 'pressed',
		'passed', 'test', 'tussle', 'crossed'
	];

	Plover["Dropping Unstressed Vowels"] = [
		'several', 'suppress', 'averages', 'tablet',
		'tepid', 'superb', 'scaffold', 'scarlet',
		'starlet', 'started', 'ruffled', 'scuffled',
		'corrupted', 'spotted', 'horrible', 'effort'
	];

	Plover["Inversion"] = [
		'edit', 'elves', 'twelve', 'credit', 'portal'
	];

	Plover["The Fifth Vowel Key"] = [
		'still', 'rig', 'hit', 'sip',
		'sir', 'skirt',
		'crypt', 'syrup',
		'pig', 'rift', 'scribble', 'rid', 'river',
		'hid', 'wilt', 'wig', 'wit', 'spill'
	];

	Plover["Long Vowel Chords"] = [
		'aids', 'ace', 'ate', 'able', 'ape',
		'raid', 'raise', 'rail', 'rate', 'pay',
		'paid', 'pace', 'tape', 'spray', 'praise',
		'weaver', 'trees', 'eel', 'eat', 'evil',
		'ear', 'heat', 'heap', 'wield', 'weird',
		'peer', 'priest', 'tree', 'tweeze', 'tweed',
		'seat', 'cease', 'seed', 'seize', 'secrete',
		'ire', "I'll", 'ice', 'rife', 'ripe',
		'right', 'height', 'wild', 'pipe', 'pride',
		'prize', 'kite', 'type', 'spite', 'drive',
		'hope', 'spore', 'post', 'sold', 'prose',
		'ode', 'oat', 'over', 'robe', 'rope',
		'roar', 'rove', 'host', 'wove', 'wrote', 'pole',
		'pose', 'cope', 'coat', 'code', 'crow', 'told',
		'cube', 'use', 'rude', 'rule', 'pure',
		'prude', 'Proust', 'cure', 'cruel', 'crude',
		'cruise', 'truce', 'truth', 'spew', 'skew',
	];

	Plover["Diphthong Chords"] = [
		'all', 'awful', 'raw', 'call', 'caught', 'crawl',
		'sprawl', 'scald', 'straw', 'halt', 'hall', 'wall',
		'out', 'how', 'howl', 'house', 'pout', 'power',
		'prowl', 'tower', 'spouse', 'sprout', 'scour',
		'soy', 'oil', 'coil', 'toil', 'soil'
	];

	Plover["Vowel Disambiguator Chords"] = [
		'wheel', 'wheal', 'read', 'reed', 'reel',
		'real', 'heel', 'heal', 'hear', 'here',
		'ware', 'wear', 'pea', 'pee', 'peace',
		'piece', 'tee', 'tea', 'sea', 'see',
		'tail', 'tale', 'sale', 'sail',
		'stare', 'stair', 'waist', 'waste',
		'hood', 'rude', 'pool', 'crew',
		'soot', 'truce', 'school', 'ruse',
		'road', 'rode', 'roar', 'toad', 'soar', 'sore'
	];

	Plover["The Missing Keys"] = [
		'due', 'duffer', 'deferral', 'devil', 'double',
		'drug', 'depress', 'desire', 'dessert', 'destroyed',
		'feral', 'ford', 'for', 'phrase', 'fierce',
		'fable', 'feeble', 'sphere', 'fries',
		'leader', 'lace', 'letter', 'lust', 'lovers',
		'glad', 'glare', 'glides', 'give', 'get', 'group',
		'guest', 'guide', 'gravel', 'cigarette', 'goblet',
		'bored', 'board', 'bruise', 'buyer', 'bobble', 'brutal',
		'zest', 'zap', 'zag',
		'vile', 'vase', 'virus',
		'eke', 'rockets', 'correct', 'quake', 'task'
	];

	Plover["The Remaining Missing Letters"] = [
		'nag', 'nap', 'nab', 'nut', 'never',
		'nestle', 'nod', 'nest', 'nerd',
		'pent', 'parent', 'went', 'earns', 'rant',
		'hunt', 'hand', 'panel', 'stun',
		'must', 'muffle', 'maggot', 'mallet', 'smuggle', 'morals',
		'arm', 'rum', 'harm', 'tempt', 'term',
		'calmed', 'palm', 'qualms',
		'jut', 'jug', 'just', 'jest', 'jets',
		'job', 'jostle', 'jazz', 'jagged',
		'urge', 'edge', 'average', 'purge', 'trudge', 'storage',
		'yard', 'yet', 'yurt'
	];

	Plover["Review Through Missing Letters"] = [
		'noun', 'inhibit', 'nudge', 'notes', 'knack',
		'enacts', 'neck', 'known', 'knock', 'gnome',
		'noise', 'novice', 'named', 'neural', 'snide', 'announce',
		'loin', 'donor', 'winner', 'dinner', 'learned', 'lend',
		'allowance', 'flaunt', 'deference', 'different', 'dance', 'diner',
		'demand', 'grunt', 'grant', 'gleans', 'severance', 'cement', 'design',
		'mound', 'mourn', 'maim', 'matter', 'commit',
		'commend', 'smudge', 'smuggle', 'semester',
		'forms', 'primed', 'serum', 'time', 'hermit',
		'maim', 'plumb', 'dream', 'gym', 'germ',
		'jam', 'blame', 'bottom', 'grammar',
		'balm', 'psalm',
		'judge', 'journal', 'join', 'joyful', 'jam', 'gerunds',
		'forge', 'budgets', 'average', 'leverage', 'merge',
		'beige', 'carriage', 'fidget', 'frigid', 'digit',
		'gadget', 'garage', 'grudge', 'turgid',
		'year', 'yearn', 'yolk'
	];

	Plover["Digraphs"] = [
		'thefts', 'thud', 'thus', 'thug',
		'hath', 'earth', 'oath', 'health',
		'wealth', 'worth', 'path', 'troth',
		'chess', 'chest', 'chart', 'chat',
		'chop', 'chore', 'chaff',
		'touch', 'etch', 'ratchet', 'hutch',
		'hatch', 'watch', 'patch', 'catch', 'crutch',
		'such', 'sketch', 'stretch', 'retch',
		'shell', 'shuffled', 'shall',
		'ash', 'rush', 'rash', 'hush', 'hash',
		'wash', 'push', 'posh', 'crush', 'crash',
		'trash', 'squash', 'stash',
		'anger', 'storing', 'rung', 'rang', 'prong',
		'tongue', 'twang', 'song', 'stung', 'strong',
		'sponge', 'orange'
	];

	Plover["Review Through Digraphs"] = [
		'thing', 'thence', 'them', 'thumb',
		'thrill', 'throng', 'thrash',
		'seethe', 'method', 'math', 'birth', 'breath',
		'fifth', 'death', 'sleuth', 'blithe', 'growth',
		'choose', 'chasm', 'chuck', 'check',
		'churn', 'cherub', 'chin', 'channel',
		'chant', 'chance', 'chive', 'charm',
		'bleach', 'much', 'latch', 'leech', 'match',
		'botch', 'fetch', 'ditch', 'glitch', 'vouch',
		'slouch', 'smooch', 'splotch',
		'shim', 'slime', 'shrewd', 'shrine', 'shuck',
		'shark', 'shock', 'sheesh', 'shrivel', 'sugar',
		'lash', 'mesh', 'mash', 'plush', 'bush',
		'brush', 'fish', 'fresh', 'flush', 'flesh',
		'flash', 'dash', 'delish', 'gosh', 'gash',
		'shush', 'slash', 'smush', 'slosh', 'splash',
		'squish', 'Irish',
		'anger', 'finger', 'dung', 'lung', 'ping',
		'pong', 'among', 'bring', 'young', 'fang',
		'flung', 'gang', 'belong',
		'change', 'range', 'hinge', 'lounge', 'plunge',
		'cringe', 'tinge', 'fringe', 'derange', 'grunge', 'syringe'
	];

	Plover["Common Compound Clusters"] = [
		'hemp', 'trump', 'rump', 'romp', 'ramp',
		'pump', 'camp', 'cramp', 'tamp', 'pomp',
		'curve', 'carve', 'serve', 'swerve', 'starve',
		'squelch',
		'hulk', 'calc', 'sulk', 'talc',
		'rank', 'honk', 'wonk', 'prank', 'crank', 'tank',
		'session', 'option', 'ration', 'portion',
		'passion', 'cushion', 'caption', 'suppression',
		'section', 'correction', 'suction',
		'arch', 'ranch', 'hunch', 'porch', 'crunch',
		'quench', 'torch', 'trench', 'stench', 'starch', 
	];

	Plover["Review Through Common Compound Clusters"] = [
		'limp', 'blimp', 'chomp', 'clamp',
		'damp', 'slump', 'shrimp', 'jump',
		'nerve', 'verve', 'marvel',
		'village', 'mulch', 'bulge', 'belch',
		'bilge', 'gulch', 'pillage',
		'ilk', 'milk', 'bulk', 'silk', 'bilk',
		'wink', 'mink', 'plank', 'brink', 'blink',
		'blank', 'flank', 'flunk', 'dank', 'drink',
		'gunk', 'junk', 'link', 'chunk',
		'lesion', 'provision', 'fusion', 'lotion',
		'operation', 'mission', 'motion', 'pollution',
		'election', 'auction', 'correction', 'collection',
		'fraction', 'friction', 'depiction', 'selection', 'seduction',
		'finch', 'clench', 'branch', 'march', 'lurch',
		'lynch', 'birch', 'brunch', 'church', 'drench'
	];

	Plover["Common Briefs 1-20"] = [
		"the", "of", "to", "in", "a",
		"is", "that", "with", "be", "by",
		"he", "I", "this", "are", "which",
		"have", "they", "you", "you'd", "you'll"
	];

	Plover["Common Briefs 21-40"] = [
		"you're", "you've", "were", "can", "there",
		"been", "if", "would", "who", "other",
		"what", "only", "do", "new", "about",
		"two", "any", "could", "after", "said"
	];

	Plover["Common Briefs 41-60"] = [
		"very", "many", "even", "where", "through",
		"being", "because", "before", "upon", "without",
		"another", "against", "every", "within", "example",
		"others", "therefore", "having", "become", "whether"
	];

	Plover["Common Briefs 61-80"] = [
		"somebody", "somehow", "someone", "someplace", "something",
		"sometimes", "somewhere", "question", "almost", "interest",
		"ever", "became", "probably", "include", "includes",
		"included", "including", "amount", "receive", "received"
	];

	Plover["Common Briefs 81-100"] = [
		"describe", "described", "anything", "continue", "continued",
		"beginning", "understand", "understanding", "today", "opinion",
		"becomes", "yes", "idea", "ideas", "actually",
		"move", "ask", "unless", "easy", "otherwise"
	];

})();  // Execute the code in the wrapper function.
