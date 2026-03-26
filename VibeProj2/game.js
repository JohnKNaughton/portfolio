const questionBank = {
    Ancient_History: [
        { q: "Which Pharaoh's tomb was discovered nearly intact by Howard Carter in 1922?", a: ["Ramses II", "Tutankhamun", "Akhenaten", "Thutmose III"], correct: "Tutankhamun" },
        { q: "The Punic Wars were fought between Rome and which other Mediterranean power?", a: ["Persia", "Greece", "Carthage", "Egypt"], correct: "Carthage" },
        { q: "Which Mesopotamian king is credited with one of the earliest written legal codes?", a: ["Nebuchadnezzar", "Hammurabi", "Gilgamesh", "Sargon"], correct: "Hammurabi" },
        { q: "What was the primary language spoken in the Western Roman Empire?", a: ["Greek", "Aramaic", "Latin", "Etruscan"], correct: "Latin" },
        { q: "The 'Hanging Gardens' were a wonder of which ancient city?", a: ["Nineveh", "Babylon", "Thebes", "Petra"], correct: "Babylon" },
        { q: "Which Greek city-state was known for its rigorous military training?", a: ["Sparta", "Athens", "Corinth", "Thebes"], correct: "Sparta" },
        { q: "The Great Pyramid of Giza was built for which Pharaoh?", a: ["Khafre", "Menkaure", "Khufu", "Djoser"], correct: "Khufu" },
        { q: "Which civilization developed the first known system of writing, Cuneiform?", a: ["Aztecs", "Sumerians", "Indus Valley", "Minoans"], correct: "Sumerians" },
        { q: "Who was the first Emperor of a unified China?", a: ["Han Wudi", "Kublai Khan", "Qin Shi Huang", "Sun Yat-sen"], correct: "Qin Shi Huang" },
        { q: "The Oracle of Delphi was dedicated to which Greek god?", a: ["Zeus", "Dionysus", "Apollo", "Hermes"], correct: "Apollo" }
    ],
    Biology: [
        { q: "What is the powerhouse of the cell?", a: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"], correct: "Mitochondria" },
        { q: "Which protein in red blood cells carries oxygen?", a: ["Hemoglobin", "Myoglobin", "Insulin", "Collagen"], correct: "Hemoglobin" },
        { q: "What is the largest organ in the human body?", a: ["Liver", "Small Intestine", "Skin", "Lungs"], correct: "Skin" },
        { q: "Which part of the brain is primarily responsible for balance and coordination?", a: ["Cerebellum", "Cerebrum", "Medulla", "Thalamus"], correct: "Cerebellum" },
        { q: "What is the process by which plants convert light into chemical energy?", a: ["Respiration", "Photosynthesis", "Fermentation", "Transpiration"], correct: "Photosynthesis" },
        { q: "How many chambers are in a human heart?", a: ["2", "3", "4", "6"], correct: "4" },
        { q: "What are the building blocks of proteins?", a: ["Nucleotides", "Amino Acids", "Fatty Acids", "Monosaccharides"], correct: "Amino Acids" },
        { q: "Which scientist is known for his work on the laws of inheritance using pea plants?", a: ["Charles Darwin", "Louis Pasteur", "Gregor Mendel", "James Watson"], correct: "Gregor Mendel" },
        { q: "What type of organism is a yeast?", a: ["Bacteria", "Virus", "Fungus", "Protist"], correct: "Fungus" },
        { q: "Which vitamin is synthesized by the body when exposed to sunlight?", a: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B12"], correct: "Vitamin D" }
    ],
    World_Geography: [
        { q: "What is the smallest country in the world by land area?", a: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"], correct: "Vatican City" },
        { q: "Which river flows through the most countries?", a: ["Nile", "Danube", "Amazon", "Mekong"], correct: "Danube" },
        { q: "In which country would you find the city of Timbuktu?", a: ["Egypt", "Morocco", "Mali", "Chad"], correct: "Mali" },
        { q: "Mount Kilimanjaro is the highest point on which continent?", a: ["Africa", "Asia", "South America", "Australia"], correct: "Africa" },
        { q: "Which body of water separates the United Kingdom from France?", a: ["North Sea", "English Channel", "Irish Sea", "Bay of Biscay"], correct: "English Channel" },
        { q: "Which country has the longest coastline in the world?", a: ["Russia", "Canada", "Australia", "Norway"], correct: "Canada" },
        { q: "What is the capital city of Australia?", a: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: "Canberra" },
        { q: "The Andes mountain range is located on which continent?", a: ["North America", "South America", "Europe", "Asia"], correct: "South America" },
        { q: "Which desert is the largest hot desert in the world?", a: ["Sahara", "Gobi", "Kalahari", "Arabian"], correct: "Sahara" },
        { q: "Which Southeast Asian country was formerly known as Siam?", a: ["Vietnam", "Thailand", "Laos", "Cambodia"], correct: "Thailand" }
    ],
    Literature: [
        { q: "Who wrote the 1851 novel 'Moby-Dick'?", a: ["Nathaniel Hawthorne", "Herman Melville", "Mark Twain", "Edgar Allan Poe"], correct: "Herman Melville" },
        { q: "In 'The Great Gatsby', who is the narrator of the story?", a: ["Jay Gatsby", "Tom Buchanan", "Nick Carraway", "George Wilson"], correct: "Nick Carraway" },
        { q: "Which Shakespeare play features the characters Rosencrantz and Guildenstern?", a: ["Hamlet", "Macbeth", "Othello", "King Lear"], correct: "Hamlet" },
        { q: "What is the real name of the author George Orwell?", a: ["Samuel Clemens", "Eric Blair", "Charles Lutwidge Dodgson", "Mary Ann Evans"], correct: "Eric Blair" },
        { q: "Which novel begins with the line, 'It was the best of times, it was the worst of times'?", a: ["Great Expectations", "Jane Eyre", "A Tale of Two Cities", "Wuthering Heights"], correct: "A Tale of Two Cities" },
        { q: "Who wrote 'The Handmaid’s Tale'?", a: ["Margaret Atwood", "Toni Morrison", "Joyce Carol Oates", "Alice Walker"], correct: "Margaret Atwood" },
        { q: "In Greek mythology, what is the title of Homer’s epic about the Trojan War?", a: ["The Iliad", "The Odyssey", "The Aeneid", "The Argonautica"], correct: "The Iliad" },
        { q: "Which Russian author wrote 'War and Peace'?", a: ["Fyodor Dostoevsky", "Anton Chekhov", "Leo Tolstoy", "Vladimir Nabokov"], correct: "Leo Tolstoy" },
        { q: "What is the name of the protagonist in '1984'?", a: ["O'Brien", "Winston Smith", "Big Brother", "Emmanuel Goldstein"], correct: "Winston Smith" },
        { q: "In the Harry Potter series, what is the name of the school of witchcraft and wizardry?", a: ["Beauxbatons", "Durmstrang", "Hogwarts", "Ilvermorny"], correct: "Hogwarts" }
    ],
    Art_History: [
        { q: "Which artist painted 'The Starry Night'?", a: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"], correct: "Vincent van Gogh" },
        { q: "The 'Mona Lisa' is on permanent display in which museum?", a: ["The Met", "The Louvre", "The British Museum", "The Uffizi"], correct: "The Louvre" },
        { q: "Which art movement is Salvador Dalí associated with?", a: ["Cubism", "Surrealism", "Impressionism", "Expressionism"], correct: "Surrealism" },
        { q: "Who sculpted the 'David' statue located in Florence?", a: ["Donatello", "Bernini", "Michelangelo", "Leonardo da Vinci"], correct: "Michelangelo" },
        { q: "Which artist is known for his 'Campbell's Soup Cans' series?", a: ["Andy Warhol", "Roy Lichtenstein", "Jackson Pollock", "Keith Haring"], correct: "Andy Warhol" },
        { q: "What is the technique of using small, distinct dots of color to form an image?", a: ["Pointillism", "Chiaroscuro", "Fresco", "Sfumato"], correct: "Pointillism" },
        { q: "Frida Kahlo is a famous painter from which country?", a: ["Spain", "Mexico", "Colombia", "Argentina"], correct: "Mexico" },
        { q: "Who painted 'The Last Supper'?", a: ["Raphael", "Leonardo da Vinci", "Botticelli", "Caravaggio"], correct: "Leonardo da Vinci" },
        { q: "The term 'Renaissance' literally means what in French?", a: ["Rebirth", "Discovery", "Enlightenment", "Classic"], correct: "Rebirth" },
        { q: "Which 20th-century artist is famous for his drip paintings?", a: ["Mark Rothko", "Willem de Kooning", "Jackson Pollock", "Jasper Johns"], correct: "Jackson Pollock" }
    ],
    Music: [
        { q: "How many symphonies did Ludwig van Beethoven complete?", a: ["5", "7", "12", "9"], correct: "9" },
        { q: "Who is known as the 'King of Pop'?", a: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"], correct: "Michael Jackson" },
        { q: "What is the highest-pitched woodwind instrument in a standard orchestra?", a: ["Piccolo", "Flute", "Oboe", "Clarinet"], correct: "Piccolo" },
        { q: "Which legendary guitarist performed 'The Star-Spangled Banner' at Woodstock in 1969?", a: ["Eric Clapton", "Jimmy Page", "Jimi Hendrix", "Carlos Santana"], correct: "Jimi Hendrix" },
        { q: "In music theory, what is the interval between two notes of the same name?", a: ["Fifth", "Octave", "Third", "Unison"], correct: "Octave" },
        { q: "Who wrote the opera 'The Marriage of Figaro'?", a: ["Giuseppe Verdi", "Wolfgang Amadeus Mozart", "Richard Wagner", "Giacomo Puccini"], correct: "Wolfgang Amadeus Mozart" },
        { q: "Which band released the album 'The Dark Side of the Moon'?", a: ["The Beatles", "Led Zeppelin", "Pink Floyd", "The Who"], correct: "Pink Floyd" },
        { q: "What is the term for a musical piece played as an introduction to an opera?", a: ["Overture", "Sonata", "Aria", "Concerto"], correct: "Overture" },
        { q: "Who was the lead singer of the rock band Queen?", a: ["Mick Jagger", "Freddie Mercury", "Robert Plant", "David Bowie"], correct: "Freddie Mercury" },
        { q: "What does the musical term 'Piano' indicate to a performer?", a: ["Soft", "Loud", "Fast", "Slow"], correct: "Soft" }
    ],
    Chemistry: [
        { q: "What is the chemical symbol for Gold?", a: ["Ag", "Fe", "Au", "Gd"], correct: "Au" },
        { q: "Which gas makes up approximately 78% of Earth's atmosphere?", a: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], correct: "Nitrogen" },
        { q: "What is the pH of pure water?", a: ["0", "7", "14", "5"], correct: "7" },
        { q: "Which element is the primary component of a diamond?", a: ["Carbon", "Silicon", "Coal", "Nitrogen"], correct: "Carbon" },
        { q: "What is the most abundant metal in the Earth's crust?", a: ["Iron", "Aluminum", "Magnesium", "Copper"], correct: "Aluminum" },
        { q: "Who is credited with creating the first Periodic Table of Elements?", a: ["Marie Curie", "Dmitri Mendeleev", "Antoine Lavoisier", "Niels Bohr"], correct: "Dmitri Mendeleev" },
        { q: "What is the common name for Sodium Chloride?", a: ["Table Salt", "Sugar", "Baking Soda", "Bleach"], correct: "Table Salt" },
        { q: "A molecule of water (H2O) contains how many atoms in total?", a: ["2", "4", "3", "1"], correct: "3" },
        { q: "Which type of bond involves the sharing of electron pairs between atoms?", a: ["Ionic", "Covalent", "Hydrogen", "Metallic"], correct: "Covalent" },
        { q: "What is the lightest chemical element?", a: ["Helium", "Hydrogen", "Lithium", "Oxygen"], correct: "Hydrogen" }
    ],
    Movies: [
        { q: "Who directed the 1994 film 'Pulp Fiction'?", a: ["Martin Scorsese", "Quentin Tarantino", "Steven Spielberg", "Christopher Nolan"], correct: "Quentin Tarantino" },
        { q: "Which movie won the first-ever Academy Award for Best Picture?", a: ["Wings", "Metropolis", "Sunrise", "The Jazz Singer"], correct: "Wings" },
        { q: "Who played the character of Jack Dawson in the 1997 film 'Titanic'?", a: ["Brad Pitt", "Johnny Depp", "Leonardo DiCaprio", "Matt Damon"], correct: "Leonardo DiCaprio" },
        { q: "What is the name of the kingdom in the movie 'Frozen'?", a: ["Genovia", "Westeros", "Arendelle", "Middle-earth"], correct: "Arendelle" },
        { q: "Which 1975 film is often cited as the first 'summer blockbuster'?", a: ["Jaws", "Star Wars", "The Godfather", "The Exorcist"], correct: "Jaws" },
        { q: "Who voiced the character of Genie in the 1992 Disney film 'Aladdin'?", a: ["Tom Hanks", "Eddie Murphy", "Robin Williams", "Billy Crystal"], correct: "Robin Williams" },
       
        { q: "In 'The Matrix', what color pill does Neo take?", a: ["Blue", "Green", "Red", "Yellow"], correct: "Red" },
        { q: "Who is the only actor to win three Academy Awards for Best Actor?", a: ["Jack Nicholson", "Daniel Day-Lewis", "Tom Hanks", "Marlon Brando"], correct: "Daniel Day-Lewis" },
        { q: "What is the name of the fictional city in 'Batman'?", a: ["Gotham City", "Metropolis", "Central City", "Star City"], correct: "Gotham City" }
    ],
    Mythology: [
        { q: "Who is the king of the gods in Greek mythology?", a: ["Jupiter", "Zeus", "Odin", "Poseidon"], correct: "Zeus" },
        { q: "In Norse mythology, what is the name of Thor's hammer?", a: ["Mjolnir", "Gungnir", "Stormbreaker", "Excalibur"], correct: "Mjolnir" },
        { q: "The hero Achilles was dipped in which river to make him nearly invincible?", a: ["Lethe", "Acheron", "Styx", "Nile"], correct: "Styx" },
        { q: "Who was the Roman goddess of love and beauty?", a: ["Aphrodite", "Venus", "Juno", "Diana"], correct: "Venus" },
        { q: "In Egyptian mythology, who is the god of the afterlife with the head of a jackal?", a: ["Osiris", "Anubis", "Horus", "Ra"], correct: "Anubis" },
        { q: "Which mythical creature is half-man and half-bull?", a: ["Minotaur", "Centaur", "Satyr", "Chimera"], correct: "Minotaur" },
        { q: "What was the only thing left in Pandora's box after she opened it?", a: ["Fear", "Death", "Hope", "Greed"], correct: "Hope" },
        { q: "In Greek mythology, who flew too close to the sun and melted his wax wings?", a: ["Daedalus", "Perseus", "Icarus", "Phaethon"], correct: "Icarus" },
        { q: "Who is the Hindu god known as the 'Remover of Obstacles', depicted with an elephant head?", a: ["Ganesha", "Shiva", "Vishnu", "Brahma"], correct: "Ganesha" },
        { q: "Medusa belonged to what group?", a: ["Gorgons", "Furies", "Graces", "Fates"], correct: "Gorgons" }
    ],
    Technology: [
        { q: "Who is often called the 'Father of the Computer'?", a: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], correct: "Charles Babbage" },
        { q: "In what year was the first iPhone released?", a: ["2005", "2010", "2007", "2008"], correct: "2007" },
        { q: "What does 'URL' stand for?", a: ["Uniform Resource Locator", "Universal Radio Link", "User Response Line", "Unique Remote Log"], correct: "Uniform Resource Locator" },
        { q: "Which company developed the Android operating system?", a: ["Apple", "Google", "Microsoft", "Samsung"], correct: "Google" },
        { q: "What is the main language used for styling web pages?", a: ["HTML", "CSS", "JavaScript", "Python"], correct: "CSS" },
        { q: "Which computer part is considered the 'brains' of the system?", a: ["CPU", "RAM", "GPU", "Hard Drive"], correct: "CPU" },
        
        { q: "Who co-founded Microsoft alongside Bill Gates?", a: ["Steve Wozniak", "Paul Allen", "Larry Page", "Jeff Bezos"], correct: "Paul Allen" },
        { q: "What is the most popular programming language as of recent industry surveys(2025)?", a: ["C++", "JavaScript", "COBOL", "Ruby"], correct: "JavaScript" }
        
    ],
    Sports: [
        { q: "How many players are on a standard soccer team on the field?", a: ["9", "10", "11", "12"], correct: "11" },
        { q: "Which country has won the most FIFA World Cups?", a: ["Germany", "Brazil", "Italy", "Argentina"], correct: "Brazil" },
        { q: "In tennis, what follows a score of 'Deuce'?", a: ["Game", "Set", "Advantage", "Love"], correct: "Advantage" },
        { q: "Who holds the record for the most home runs in a single MLB season?", a: ["Babe Ruth", "Hank Aaron", "Barry Bonds", "Mark McGwire"], correct: "Barry Bonds" },
        { q: "In what year were the first modern Olympic Games held?", a: ["1896", "1900", "1924", "1888"], correct: "1896" },
        { q: "Which golf tournament awards its winner a 'Green Jacket'?", a: ["US Open", "The Open", "The Masters", "PGA Championship"], correct: "The Masters" },
        { q: "What is the distance of a standard marathon in miles?", a: ["13.1", "24.5", "26.2", "30"], correct: "26.2" },
        { q: "Who is known as 'The Greatest' in boxing?", a: ["Muhammad Ali", "Mike Tyson", "Joe Louis", "Sugar Ray Robinson"], correct: "Muhammad Ali" },
        { q: "In the NBA, how many points is a shot worth if taken from beyond the arc?", a: ["2", "1", "3", "4"], correct: "3" },
        { q: "Which city hosted the 2024 Summer Olympics?", a: ["Tokyo", "Paris", "Los Angeles", "London"], correct: "Paris" }
    ],
    Philosophy: [
        { q: "Who famously stated, 'I think, therefore I am'?", a: ["John Locke", "Immanuel Kant", "René Descartes", "Socrates"], correct: "René Descartes" },
        { q: "Which Greek philosopher was the teacher of Alexander the Great?", a: ["Plato", "Aristotle", "Socrates", "Epicurus"], correct: "Aristotle" },
        { q: "The concept of the 'Übermensch' (Overman) is associated with which philosopher?", a: ["Friedrich Nietzsche", "Karl Marx", "Jean-Paul Sartre", "Arthur Schopenhauer"], correct: "Friedrich Nietzsche" },
        { q: "What is the study of the nature of being and existence called?", a: ["Epistemology", "Ethics", "Ontology", "Logic"], correct: "Ontology" },
        { q: "Who wrote 'The Republic'?", a: ["Aristotle", "Homer", "Plato", "Cicero"], correct: "Plato" },
        { q: "Stoicism originated in which ancient civilization?", a: ["Rome", "Egypt", "Greece", "China"], correct: "Greece" },
        { q: "Which philosopher is known for his 'Allegory of the Cave'?", a: ["Socrates", "Diogenes", "Plato", "Aristotle"], correct: "Plato" },
        { q: "Utilitarianism focuses on 'the greatest good for the greatest number.' Who is its primary founder?", a: ["John Stuart Mill", "David Hume", "Jeremy Bentham", "Thomas Hobbes"], correct: "Jeremy Bentham" },
        { q: "The 'Socratic Method' is based on what activity?", a: ["Writing Essays", "Asking Questions", "Meditation", "Public Speaking"], correct: "Asking Questions" },
        { q: "What is the philosophical belief that life has no intrinsic meaning or value?", a: ["Existentialism", "Idealism", "Rationalism", "Nihilism"], correct: "Nihilism" }
    ],
    Food_and_Drink: [
        { q: "What is the main ingredient in traditional hummus?", a: ["Lentils", "Black Beans", "Chickpeas", "Fava Beans"], correct: "Chickpeas" },
        { q: "Which country is the origin of the 'Espresso' coffee machine?", a: ["France", "Spain", "Italy", "Germany"], correct: "Italy" },
        { q: "What type of pastry is used to make a Baklava?", a: ["Puff", "Choux", "Phyllo", "Shortcrust"], correct: "Phyllo" },
        { q: "Scoville units are used to measure the heat of what?", a: ["Interviews", "Chili Peppers", "Curry", "Jerky"], correct: "Chili Peppers" },
        { q: "What is the world's most expensive spice by weight?", a: ["Vanilla", "Saffron", "Cardamom", "Cinnamon"], correct: "Saffron" },
        { q: "Which alcohol is traditionally distilled from agave?", a: ["Rum", "Gin", "Vodka", "Tequila"], correct: "Tequila" },
        { q: "What is the primary leavening agent used in bread?", a: ["Baking Soda", "Baking Powder", "Yeast", "Eggs"], correct: "Yeast" },
        { q: "In French cooking, what are the three vegetables in a 'Mirepoix'?", a: ["Onion, Bell Pepper, Celery", "Onion, Celery, Carrot", "Potato, Carrot, Leek", "Garlic, Onion, Tomato"], correct: "Onion, Celery, Carrot" },
        { q: "Which cheese is traditionally used on a classic Neapolitan pizza?", a: ["Parmesan", "Cheddar", "Mozzarella", "Ricotta"], correct: "Mozzarella" },
        { q: "What is the main flavor of the liqueur Cointreau?", a: ["Lemon", "Anise", "Orange", "Coffee"], correct: "Orange" }
    ],
    Politics: [
        { q: "How many members are there in the U.S. House of Representatives?", a: ["100", "435", "50", "538"], correct: "435" },
        { q: "Who was the first woman to serve as the UK Prime Minister?", a: ["Theresa May", "Angela Merkel", "Margaret Thatcher", "Indira Gandhi"], correct: "Margaret Thatcher" },
        { q: "What is the term for a formal agreement between two or more sovereign states?", a: ["Protocol", "Treaty", "Charter", "Alliance"], correct: "Treaty" },
        { q: "Which document begins with 'We the People'?", a: ["Declaration of Independence", "Magna Carta", "U.S. Constitution", "Bill of Rights"], correct: "U.S. Constitution" },
        { q: "Where is the headquarters of the United Nations located?", a: ["Geneva", "New York City", "Brussels", "The Hague"], correct: "New York City" },
        { q: "The 'Magna Carta' was signed in which year?", a: ["1066", "1492", "1215", "1776"], correct: "1215" },
        { q: "What is the official residence of the President of France?", a: ["Versailles", "Louvre", "Matignon", "Élysée Palace"], correct: "Élysée Palace" },
        { q: "In the U.S. government, what is the 'upper' house of Congress?", a: ["House of Representatives", "Supreme Court", "Senate", "Cabinet"], correct: "Senate" },
        { q: "Which political ideology advocates for a classless society and communal ownership?", a: ["Capitalism", "Libertarianism", "Communism", "Fascism"], correct: "Communism" },
        { q: "How long is the term of a U.S. Supreme Court Justice?", a: ["4 Years", "Life", "8 Years", "10 Years"], correct: "Life" }
    ],
    Space_Exploration: [
        { q: "Who was the first human to travel into space?", a: ["Neil Armstrong", "John Glenn", "Yuri Gagarin", "Buzz Aldrin"], correct: "Yuri Gagarin" },
        { q: "In what year did the Apollo 11 moon landing occur?", a: ["1965", "1972", "1969", "1961"], correct: "1969" },
        { q: "What is the name of the first artificial satellite launched into orbit?", a: ["Explorer 1", "Sputnik 1", "Vostok 1", "Voyager 1"], correct: "Sputnik 1" },
        { q: "Which space agency launched the James Webb Space Telescope?", a: ["NASA", "ESA", "Roscosmos", "SpaceX"], correct: "NASA" },
        { q: "What was the name of the first space shuttle to fly into space?", a: ["Columbia", "Challenger", "Discovery", "Atlantis"], correct: "Columbia" },
        { q: "Mars is often explored by robots called 'rovers'. Which one landed in 2021?", a: ["Curiosity", "Opportunity", "Perseverance", "Spirit"], correct: "Perseverance" },
        { q: "Who was the first American woman in space?", a: ["Sally Ride", "Christa McAuliffe", "Peggy Whitson", "Mae Jemison"], correct: "Sally Ride" },
        { q: "What does the acronym 'ISS' stand for?", a: ["Internal Solar System", "Interstellar Space Ship", "Integrated Space Service", "International Space Station"], correct: "International Space Station" },
        { q: "Which planet was visited by the New Horizons spacecraft in 2015?", a: ["Neptune", "Saturn", "Pluto", "Jupiter"], correct: "Pluto" },
        { q: "What is the term for a star that has collapsed into a point of infinite density?", a: ["Black Hole", "White Dwarf", "Neutron Star", "Red Giant"], correct: "Black Hole" }
    ],
    Language: [
        { q: "Which language has the most native speakers in the world?", a: ["English", "Mandarin Chinese", "Spanish", "Hindi"], correct: "Mandarin Chinese" },
        { q: "What is the most widely spoken second language in the world?", a: ["English", "French", "Spanish", "Arabic"], correct: "English" },
        { q: "The word 'Alphabet' comes from the first two letters of which language?", a: ["Latin", "Greek", "Hebrew", "Phoenician"], correct: "Greek" },
        { q: "Which language is the most common 'Romance' language?", a: ["Italian", "Spanish", "French", "Portuguese"], correct: "Spanish" },
        { q: "What is a word called that is spelled the same forwards and backwards?", a: ["Palindrome", "Anagram", "Homonym", "Synonym"], correct: "Palindrome" },
        { q: "In English grammar, what part of speech describes a noun?", a: ["Adverb", "Verb", "Adjective", "Preposition"], correct: "Adjective" },
        { q: "Which country has the most official languages (11)?", a: ["India", "Switzerland", "South Africa", "Canada"], correct: "South Africa" },
        { q: "What is the official language of Brazil?", a: ["Spanish", "English", "Portuguese", "French"], correct: "Portuguese" },
        { q: "What is the term for a word that sounds like what it describes (e.g., 'Buzz')?", a: ["Onomatopoeia", "Oxymoron", "Hyperbole", "Metaphor"], correct: "Onomatopoeia" },
        { q: "Which ancient language is the ancestor of most modern North Indian languages?", a: ["Pali", "Tamil", "Sanskrit", "Latin"], correct: "Sanskrit" }
    ],
    Business: [
        { q: "Who is the founder of Amazon?", a: ["Elon Musk", "Bill Gates", "Jeff Bezos", "Mark Zuckerberg"], correct: "Jeff Bezos" },
        { q: "What does 'ROI' stand for in business?", a: ["Rate of Interest", "Return on Investment", "Risk of Inflation", "Revenue on Income"], correct: "Return on Investment" },
        { q: "Which company has the ticker symbol 'AAPL'?", a: ["Alphabet", "Amazon", "Apple", "American Airlines"], correct: "Apple" },
        { q: "In economics, what is the term for a market dominated by a single seller?", a: ["Oligopoly", "Monopoly", "Cartel", "Free Market"], correct: "Monopoly" },
        { q: "Which city is home to the New York Stock Exchange?", a: ["Chicago", "New York City", "London", "Hong Kong"], correct: "New York City" },
        { q: "What is the official currency of the Eurozone?", a: ["Pound", "Franc", "Euro", "Mark"], correct: "Euro" },
        { q: "Who is the CEO of Berkshire Hathaway (2025)?", a: ["Warren Buffett", "Charlie Munger", "Tim Cook", "Ray Dalio"], correct: "Warren Buffett" },
        { q: "A 'Bear Market' indicates that stock prices are doing what?", a: ["Falling", "Rising", "Staying Flat", "Volatile"], correct: "Falling" },
        { q: "Which company owns the brands Oreo, Ritz, and Toblerone?", a: ["Nestlé", "PepsiCo", "Mondelez", "Mars"], correct: "Mondelez" },
        { q: "What is the term for the first time a company offers its stock to the public?", a: ["IPO", "SEO", "LLC", "GDP"], correct: "IPO" }
    ],
    Geology: [
        { q: "Which type of rock is formed from cooled magma or lava?", a: ["Sedimentary", "Metamorphic", "Igneous", "Sandstone"], correct: "Igneous" },
        { q: "The Earth's core is primarily made of which two metals?", a: ["Iron and Nickel", "Gold and Silver", "Copper and Zinc", "Aluminum and Silicon"], correct: "Iron and Nickel" },
        { q: "What scale is used to measure the hardness of minerals?", a: ["Richter Scale", "Mohs Scale", "Kelvin Scale", "Beaufort Scale"], correct: "Mohs Scale" },
        { q: "The movement of Earth's crust is explained by which theory?", a: ["Continental Drift", "Plate Tectonics", "Big Bang", "Evolution"], correct: "Plate Tectonics" },
        { q: "What is the softest mineral on the Mohs scale?", a: ["Talc", "Gypsum", "Calcite", "Quartz"], correct: "Talc" },
        { q: "Which type of rock is Limestone?", a: ["Igneous", "Sedimentary", "Metamorphic", "Volcanic"], correct: "Sedimentary" },
        { q: "What is the name of the supercontinent that existed 200 million years ago?", a: ["Gondwana", "Laurasia", "Pangea", "Atlantis"], correct: "Pangea" },
        { q: "What are stalactites made of?", a: ["Ice", "Calcium Carbonate", "Salt", "Iron"], correct: "Calcium Carbonate" },
        { q: "An earthquake's point of origin underground is called the what?", a: ["Focus", "Epicenter", "Fault", "Core"], correct: "Focus" },
        { q: "Which layer of the Earth lies directly below the crust?", a: ["Mantle", "Outer Core", "Inner Core", "Lithosphere"], correct: "Mantle" }
    ],
    Psychology: [
        { q: "Who is considered the father of psychoanalysis?", a: ["Carl Jung", "B.F. Skinner", "Sigmund Freud", "William James"], correct: "Sigmund Freud" },
        { q: "What is the name of the 'inkblot' test used in psychological evaluation?", a: ["Rorschach Test", "Stanford-Binet", "MMPI", "Thematic Apperception"], correct: "Rorschach Test" },
        { q: "In psychology, what does 'IQ' stand for?", a: ["Inner Quality", "Intelligence Quotient", "Intellectual Quantity", "Information Quest"], correct: "Intelligence Quotient" },
        { q: "Which psychologist is famous for his hierarchy of needs?", a: ["Erik Erikson", "Abraham Maslow", "Jean Piaget", "Carl Rogers"], correct: "Abraham Maslow" },
        { q: "What is the term for a fear of enclosed spaces?", a: ["Claustrophobia", "Agoraphobia", "Arachnophobia", "Acrophobia"], correct: "Claustrophobia" },
        { q: "Ivan Pavlov is known for his work on what type of conditioning?", a: ["Operant", "Social", "Classical", "Cognitive"], correct: "Classical" },
        { q: "The 'ID, Ego, and Superego' are parts of whose structural model of the mind?", a: ["Alfred Adler", "Carl Jung", "Sigmund Freud", "Karen Horney"], correct: "Sigmund Freud" },
        { q: "What is the name of the phenomenon where people do not help in an emergency because others are present?", a: ["Placebo Effect", "Bystander Effect", "Halo Effect", "Confirmation Bias"], correct: "Bystander Effect" },
        { q: "Which branch of psychology focuses on how people grow and change over their lifespan?", a: ["Clinical", "Forensic", "Developmental", "Social"], correct: "Developmental" },
        { q: "What is the term for a fake treatment that improves a patient's condition because they expect it to?", a: ["Nootropic", "Statin", "Placebo", "Antibiotic"], correct: "Placebo" }
    ],
    Modern_History: [
        { q: "In what year did the Berlin Wall fall?", a: ["1991", "1985", "1989", "1975"], correct: "1989" },
        { q: "Who was the primary leader of the Civil Rights Movement in the U.S.?", a: ["Malcolm X", "Rosa Parks", "Martin Luther King Jr.", "John Lewis"], correct: "Martin Luther King Jr." },
        { q: "Which country was the first to give women the right to vote in 1893?", a: ["USA", "New Zealand", "UK", "Australia"], correct: "New Zealand" },
        { q: "The 'Cold War' was primarily between the U.S. and which other nation?", a: ["Soviet Union", "China", "Germany", "Japan"], correct: "Soviet Union" },
        { q: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?", a: ["Joseph Stalin", "Nikita Khrushchev", "Mikhail Gorbachev", "Leonid Brezhnev"], correct: "Nikita Khrushchev" },
        { q: "The United Nations was established after which major war?", a: ["World War I", "Vietnam War", "World War II", "Korean War"], correct: "World War II" },
        { q: "Which famous shipwreck occurred on April 15, 1912?", a: ["The Titanic", "The Lusitania", "The Bismarck", "The Mary Rose"], correct: "The Titanic" },
        { q: "Nelson Mandela was the first black president of which country?", a: ["South Africa", "Nigeria", "Kenya", "Ghana"], correct: "South Africa" },
        { q: "In what year did the terrorist attacks of September 11 occur?", a: ["2000", "2001", "2002", "1999"], correct: "2001" },
        { q: "Which treaty officially ended World War I?", a: ["Treaty of Paris", "Treaty of Ghent", "Treaty of Versailles", "Treaty of Utrecht"], correct: "Treaty of Versailles" }
    ], 
    Astronomy: [
        { q: "What is the name of our galaxy?", a: ["Andromeda", "Whirlpool", "Milky Way", "Sombrero"], correct: "Milky Way" },
        { q: "Which planet has the shortest orbital period around the Sun?", a: ["Venus", "Mercury", "Mars", "Jupiter"], correct: "Mercury" },
        { q: "What type of star is the Sun classified as?", a: ["Red Giant", "White Dwarf", "Yellow Dwarf", "Neutron Star"], correct: "Yellow Dwarf" },
        { q: "What is the term for the apparent brightness of a star as seen from Earth?", a: ["Luminosity", "Absolute Magnitude", "Apparent Magnitude", "Flux"], correct: "Apparent Magnitude" },
        { q: "Which planet has the most extensive ring system?", a: ["Jupiter", "Uranus", "Neptune", "Saturn"], correct: "Saturn" },
        { q: "What is the boundary surrounding a black hole beyond which nothing can escape?", a: ["Singularity", "Photon Sphere", "Event Horizon", "Ergosphere"], correct: "Event Horizon" },
        { q: "Which spacecraft was the first to exit the heliosphere?", a: ["Voyager 1", "Voyager 2", "Pioneer 10", "New Horizons"], correct: "Voyager 1" },
        { q: "What is the name of the closest star system to Earth?", a: ["Sirius", "Proxima Centauri", "Alpha Centauri", "Betelgeuse"], correct: "Alpha Centauri" },
        { q: "What phenomenon occurs when the Moon completely covers the Sun?", a: ["Lunar Eclipse", "Solar Flare", "Total Solar Eclipse", "Transit"], correct: "Total Solar Eclipse" },
        { q: "Which law describes the relationship between a planet’s orbital period and its distance from the Sun?", a: ["Newton’s First Law", "Hubble’s Law", "Kepler’s Third Law", "Ohm’s Law"], correct: "Kepler’s Third Law" }
    ],

    Physics: [
        { q: "What is the SI unit of force?", a: ["Joule", "Pascal", "Newton", "Watt"], correct: "Newton" },
        { q: "Who formulated the laws of motion?", a: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Niels Bohr"], correct: "Isaac Newton" },
        { q: "What is the speed of light in vacuum (approximately)?", a: ["3 x 10^6 m/s", "3 x 10^8 m/s", "3 x 10^5 km/s", "3 x 10^10 m/s"], correct: "3 x 10^8 m/s" },
        { q: "What particle carries a negative electric charge?", a: ["Proton", "Neutron", "Electron", "Photon"], correct: "Electron" },
        { q: "What branch of physics deals with very small particles?", a: ["Thermodynamics", "Quantum Mechanics", "Optics", "Acoustics"], correct: "Quantum Mechanics" },
        { q: "What is the unit of electrical resistance?", a: ["Volt", "Ampere", "Ohm", "Coulomb"], correct: "Ohm" },
        { q: "Which principle states that energy cannot be created or destroyed?", a: ["Relativity", "Conservation of Energy", "Uncertainty Principle", "Superposition"], correct: "Conservation of Energy" },
        { q: "What is the name of the force that opposes motion between two surfaces?", a: ["Gravity", "Magnetism", "Friction", "Tension"], correct: "Friction" },
        { q: "Who developed the theory of general relativity?", a: ["Max Planck", "Albert Einstein", "Erwin Schrödinger", "Werner Heisenberg"], correct: "Albert Einstein" },
        { q: "What is measured in Hertz?", a: ["Energy", "Frequency", "Voltage", "Power"], correct: "Frequency" }
    ],

    Mathematics: [
        { q: "What is the value of pi (π) to two decimal places?", a: ["3.12", "3.14", "3.16", "3.18"], correct: "3.14" },
        { q: "What is the derivative of x²?", a: ["x", "2x", "x²", "2"], correct: "2x" },
        { q: "What is the square root of 144?", a: ["10", "11", "12", "14"], correct: "12" },
        { q: "What is a polygon with eight sides called?", a: ["Hexagon", "Heptagon", "Octagon", "Nonagon"], correct: "Octagon" },
        { q: "What is the sum of the angles in a triangle (Euclidean geometry)?", a: ["90°", "180°", "270°", "360°"], correct: "180°" },
        { q: "What is the Fibonacci sequence defined by?", a: ["Prime numbers", "Multiples of two", "Sum of previous two terms", "Factorials"], correct: "Sum of previous two terms" },
        { q: "What is the natural logarithm base?", a: ["π", "e", "10", "2"], correct: "e" },
        { q: "What is 7 factorial (7!)?", a: ["720", "5040", "40320", "120"], correct: "5040" },
        { q: "What is the term for a number divisible only by 1 and itself?", a: ["Composite", "Integer", "Prime", "Rational"], correct: "Prime" },
        { q: "What theorem relates the sides of a right triangle?", a: ["Binomial Theorem", "Pythagorean Theorem", "Fundamental Theorem of Calculus", "Euler’s Formula"], correct: "Pythagorean Theorem" }
    ],

    Environmental_Science: [
        { q: "What gas is primarily responsible for the greenhouse effect?", a: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], correct: "Carbon Dioxide" },
        { q: "What is the process by which water vapor turns into liquid water?", a: ["Evaporation", "Condensation", "Precipitation", "Sublimation"], correct: "Condensation" },
        { q: "Which renewable energy source uses photovoltaic cells?", a: ["Wind", "Hydroelectric", "Solar", "Geothermal"], correct: "Solar" },
        { q: "What is biodiversity?", a: ["Climate patterns", "Variety of life", "Ocean currents", "Soil composition"], correct: "Variety of life" },
        { q: "What international agreement aims to limit global warming to well below 2°C?", a: ["Kyoto Protocol", "Paris Agreement", "Montreal Protocol", "Geneva Convention"], correct: "Paris Agreement" },
        { q: "What layer of the atmosphere contains the ozone layer?", a: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], correct: "Stratosphere" },
        { q: "What is the main cause of ocean acidification?", a: ["Plastic waste", "Oil spills", "CO2 absorption", "Overfishing"], correct: "CO2 absorption" },
        { q: "What type of resource is replenished naturally over short periods?", a: ["Nonrenewable", "Finite", "Renewable", "Synthetic"], correct: "Renewable" },
        { q: "Deforestation primarily impacts which global cycle?", a: ["Nitrogen", "Carbon", "Phosphorus", "Sulfur"], correct: "Carbon" },
        { q: "What term describes species at risk of extinction?", a: ["Invasive", "Endangered", "Native", "Dominant"], correct: "Endangered" }
    ],

    Medicine: [
        { q: "What is the largest artery in the human body?", a: ["Pulmonary Artery", "Aorta", "Carotid Artery", "Femoral Artery"], correct: "Aorta" },
        { q: "What blood type is known as the universal donor?", a: ["AB+", "O-", "A+", "B-"], correct: "O-" },
        { q: "What organ produces insulin?", a: ["Liver", "Pancreas", "Kidney", "Spleen"], correct: "Pancreas" },
        { q: "What does MRI stand for?", a: ["Magnetic Resonance Imaging", "Medical Radio Imaging", "Magnetized Radiology Instrument", "Molecular Resonance Inspection"], correct: "Magnetic Resonance Imaging" },
        { q: "Which disease is caused by the bacterium Mycobacterium tuberculosis?", a: ["Malaria", "Tuberculosis", "Cholera", "Influenza"], correct: "Tuberculosis" },
        { q: "What vitamin deficiency causes scurvy?", a: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K"], correct: "Vitamin C" },
        { q: "What is the normal resting heart rate range for adults (approx.)?", a: ["20–40 bpm", "40–60 bpm", "60–100 bpm", "100–140 bpm"], correct: "60–100 bpm" },
        { q: "What part of the cell contains genetic material?", a: ["Ribosome", "Nucleus", "Cytoplasm", "Membrane"], correct: "Nucleus" },
        { q: "Which pathogen type is influenza?", a: ["Bacterium", "Virus", "Fungus", "Protozoan"], correct: "Virus" },
        { q: "What is the medical term for high blood pressure?", a: ["Hypotension", "Hypertension", "Arrhythmia", "Atherosclerosis"], correct: "Hypertension" }
    ],

    Architecture: [
        { q: "Which architectural style is characterized by pointed arches and flying buttresses?", a: ["Baroque", "Romanesque", "Gothic", "Neoclassical"], correct: "Gothic" },
        { q: "Who designed the Guggenheim Museum in Bilbao?", a: ["Frank Lloyd Wright", "Zaha Hadid", "Frank Gehry", "I. M. Pei"], correct: "Frank Gehry" },
        { q: "The Parthenon is located in which city?", a: ["Rome", "Athens", "Istanbul", "Alexandria"], correct: "Athens" },
        
        { q: "Which ancient civilization built Machu Picchu?", a: ["Maya", "Aztec", "Inca", "Olmec"], correct: "Inca" },
        { q: "What is the primary structural advantage of an arch?", a: ["Decoration", "Lightness", "Compression distribution", "Flexibility"], correct: "Compression distribution" },
        { q: "Which city is known for Antoni Gaudí’s architectural works?", a: ["Madrid", "Lisbon", "Barcelona", "Seville"], correct: "Barcelona" },
        { q: "What is the name of the tallest building in the world (as of 2023)?", a: ["Shanghai Tower", "Burj Khalifa", "One World Trade Center", "Taipei 101"], correct: "Burj Khalifa" },
        { q: "What architectural period followed the Renaissance?", a: ["Gothic", "Baroque", "Modernism", "Brutalism"], correct: "Baroque" },
        { q: "What term describes a building’s detailed scale model?", a: ["Blueprint", "Facade", "Maquette", "Section"], correct: "Maquette" }
    ],

    Economics: [
        { q: "What does GDP stand for?", a: ["Gross Domestic Product", "General Domestic Profit", "Global Development Plan", "Gross Development Product"], correct: "Gross Domestic Product" },
        { q: "What economic system is based on private ownership of the means of production?", a: ["Socialism", "Communism", "Capitalism", "Feudalism"], correct: "Capitalism" },
        { q: "Inflation refers to a general increase in what?", a: ["Employment", "Interest Rates", "Prices", "Exports"], correct: "Prices" },
        { q: "What is the opportunity cost?", a: ["Total spending", "Next best alternative forgone", "Profit margin", "Tax rate"], correct: "Next best alternative forgone" },
        { q: "What type of market has many buyers and sellers with homogeneous products?", a: ["Monopoly", "Oligopoly", "Perfect Competition", "Duopoly"], correct: "Perfect Competition" },
        { q: "Who wrote 'The Wealth of Nations'?", a: ["Karl Marx", "John Maynard Keynes", "Adam Smith", "David Ricardo"], correct: "Adam Smith" },
        { q: "What is stagflation?", a: ["High growth and low inflation", "High inflation and high unemployment", "Low inflation and high employment", "Deflation and recession"], correct: "High inflation and high unemployment" },
        { q: "What is the law of demand?", a: ["Higher price, higher demand", "Lower price, lower demand", "Higher price, lower demand", "Demand is fixed"], correct: "Higher price, lower demand" },
        { q: "What is a central bank primarily responsible for?", a: ["Collecting taxes", "Setting monetary policy", "Passing laws", "Issuing passports"], correct: "Setting monetary policy" },
        { q: "What term describes a prolonged economic downturn?", a: ["Boom", "Bubble", "Recession", "Expansion"], correct: "Recession" }
    ],

    Computer_Science: [
        { q: "What data structure uses LIFO (Last In, First Out)?", a: ["Queue", "Stack", "Tree", "Graph"], correct: "Stack" },
        { q: "What does 'HTTP' stand for?", a: ["HyperText Transfer Protocol", "High Transmission Text Process", "Hyperlink Transfer Program", "Host Transfer Protocol"], correct: "HyperText Transfer Protocol" },
        { q: "What is the time complexity of binary search?", a: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], correct: "O(log n)" },
        { q: "Which programming paradigm focuses on objects and classes?", a: ["Procedural", "Functional", "Object-Oriented", "Declarative"], correct: "Object-Oriented" },
        { q: "What is a primary key in a database?", a: ["Encrypted field", "Unique identifier", "Foreign reference", "Backup index"], correct: "Unique identifier" },
        { q: "Which sorting algorithm has average time complexity O(n log n)?", a: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"], correct: "Merge Sort" },
        { q: "What does 'AI' stand for?", a: ["Automated Input", "Artificial Intelligence", "Advanced Integration", "Algorithmic Interface"], correct: "Artificial Intelligence" },
        { q: "What is the binary representation of the decimal number 5?", a: ["101", "110", "111", "100"], correct: "101" },
        { q: "What protocol is used to securely browse the web?", a: ["FTP", "SMTP", "HTTPS", "SSH"], correct: "HTTPS" },
        { q: "What is a recursive function?", a: ["Function without parameters", "Function that calls itself", "Function returning void", "Function with global scope"], correct: "Function that calls itself" }
    ],

    Cultural_Studies: [
        { q: "What is the traditional Japanese tea ceremony called?", a: ["Ikebana", "Chanoyu", "Kabuki", "Shodo"], correct: "Chanoyu" },
        { q: "Which festival is known as the 'Festival of Lights' in India?", a: ["Holi", "Diwali", "Navratri", "Vaisakhi"], correct: "Diwali" },
        { q: "What is the name of the traditional Scottish garment worn by men?", a: ["Sari", "Kimono", "Kilt", "Poncho"], correct: "Kilt" },
        { q: "Which religion observes Ramadan as a month of fasting?", a: ["Hinduism", "Islam", "Buddhism", "Judaism"], correct: "Islam" },
        { q: "What is the indigenous people of New Zealand called?", a: ["Inuit", "Aboriginal", "Maori", "Sami"], correct: "Maori" },
        { q: "Flamenco originated in which country?", a: ["Portugal", "Italy", "Spain", "Mexico"], correct: "Spain" },
        { q: "What is the name of the Chinese philosophical system founded by Confucius?", a: ["Taoism", "Buddhism", "Confucianism", "Legalism"], correct: "Confucianism" },
        { q: "What is the Mexican holiday honoring deceased loved ones?", a: ["Carnaval", "Cinco de Mayo", "Día de los Muertos", "Las Posadas"], correct: "Día de los Muertos" },
        { q: "Which African country is famous for the Maasai people?", a: ["Nigeria", "Kenya", "Ghana", "Ethiopia"], correct: "Kenya" },
        { q: "What is the name of the traditional Korean dress?", a: ["Hanbok", "Cheongsam", "Ao Dai", "Yukata"], correct: "Hanbok" }
    ],

    Law: [
        { q: "What is the highest court in the United States?", a: ["Court of Appeals", "Supreme Court", "District Court", "Federal Court"], correct: "Supreme Court" },
        { q: "What does 'habeas corpus' protect against?", a: ["Double jeopardy", "Unlawful detention", "Self-incrimination", "Excessive bail"], correct: "Unlawful detention" },
        { q: "What is the burden of proof in criminal cases in the U.S.?", a: ["Preponderance of evidence", "Clear and convincing evidence", "Beyond a reasonable doubt", "Probable cause"], correct: "Beyond a reasonable doubt" },
        { q: "What is a contract?", a: ["Verbal promise", "Legally binding agreement", "Corporate charter", "Government decree"], correct: "Legally binding agreement" },
        { q: "What does 'amicus curiae' mean?", a: ["Friend of the court", "Against the state", "Legal remedy", "Case precedent"], correct: "Friend of the court" },
        { q: "What is tort law primarily concerned with?", a: ["Criminal punishment", "Civil wrongs", "Taxation", "Property transfer"], correct: "Civil wrongs" },
        { q: "What is the presumption of innocence?", a: ["Defendant must testify", "Guilt assumed", "Innocent until proven guilty", "Automatic acquittal"], correct: "Innocent until proven guilty" },
        { q: "What is intellectual property?", a: ["Land ownership", "Creative works protection", "Corporate shares", "Physical goods"], correct: "Creative works protection" },
        { q: "What is extradition?", a: ["Appeal process", "Transfer of suspect between jurisdictions", "Jury selection", "Sentencing reduction"], correct: "Transfer of suspect between jurisdictions" },
        { q: "What is precedent in common law?", a: ["New legislation", "Executive order", "Prior judicial decision guiding future cases", "International treaty"], correct: "Prior judicial decision guiding future cases" }
    ], 
    Common_Sense: [
        { q: "What should you do first if you smell smoke in your house?", a: ["Go back to sleep", "Investigate alone", "Leave and call emergency services", "Open all windows"], correct: "Leave and call emergency services" },
        { q: "If a traffic light is red, what must drivers do?", a: ["Slow down", "Stop", "Speed up", "Honk"], correct: "Stop" },
        { q: "What is the safest way to cross a busy street?", a: ["Run quickly", "Cross anywhere", "Use a crosswalk", "Follow another pedestrian blindly"], correct: "Use a crosswalk" },
        { q: "If food smells spoiled, you should:", a: ["Taste it anyway", "Cook it longer", "Throw it away", "Freeze it"], correct: "Throw it away" },
        { q: "What should you wear when riding a bicycle for safety?", a: ["Sandals", "Helmet", "Scarf", "Watch"], correct: "Helmet" },
        { q: "If your phone battery is at 1% and you need it later, you should:", a: ["Stream video", "Turn on airplane mode", "Increase brightness", "Play games"], correct: "Turn on airplane mode" },
        { q: "If someone is choking and cannot speak, you should perform:", a: ["CPR immediately", "The Heimlich maneuver", "Give water", "Lay them flat"], correct: "The Heimlich maneuver" },
        { q: "What is the best way to avoid dehydration on a hot day?", a: ["Drink water regularly", "Avoid shade", "Wear dark clothing", "Skip meals"], correct: "Drink water regularly" },
        { q: "If you drop glass on the floor, you should:", a: ["Pick it up barefoot", "Sweep it carefully", "Ignore it", "Kick it aside"], correct: "Sweep it carefully" },
        { q: "If you forget a password, the safest action is to:", a: ["Guess repeatedly", "Share account", "Use password recovery", "Create a new identity"], correct: "Use password recovery" }
    ],

    NBA: [
        { q: "Which team has won the most NBA championships?", a: ["Chicago Bulls", "Los Angeles Lakers", "Boston Celtics", "Golden State Warriors"], correct: "Boston Celtics" },
        { q: "How many players from one team are on the court at a time in an NBA game?", a: ["4", "5", "6", "7"], correct: "5" },
        { q: "Which player is known as 'King James'?", a: ["Kevin Durant", "LeBron James", "Stephen Curry", "Kawhi Leonard"], correct: "LeBron James" },
        { q: "What is the length of a standard NBA game?", a: ["40 minutes", "48 minutes", "60 minutes", "52 minutes"], correct: "48 minutes" },
        { q: "Which team drafted Michael Jordan in 1984?", a: ["Los Angeles Lakers", "Chicago Bulls", "Houston Rockets", "Boston Celtics"], correct: "Chicago Bulls" },
        { q: "How many fouls result in a player fouling out of an NBA game?", a: ["5", "6", "7", "4"], correct: "6" },
        { q: "Which NBA award is given to the league's best regular-season player?", a: ["Finals MVP", "Sixth Man", "Rookie of the Year", "MVP"], correct: "MVP" },
        { q: "What is the distance of the NBA three-point line at the top of the key (approx.)?", a: ["20 feet", "23 feet 9 inches", "25 feet", "22 feet"], correct: "23 feet 9 inches" },
        { q: "Which team plays its home games at Madison Square Garden?", a: ["Brooklyn Nets", "New York Knicks", "Philadelphia 76ers", "Toronto Raptors"], correct: "New York Knicks" },
        { q: "Who holds the record for most career points in NBA history?", a: ["Kareem Abdul-Jabbar", "LeBron James", "Karl Malone", "Kobe Bryant"], correct: "LeBron James" }
    ],

    Video_Games: [
        { q: "Which company created the character Mario?", a: ["Sega", "Sony", "Nintendo", "Microsoft"], correct: "Nintendo" },
        { q: "What is the highest-selling video game of all time?", a: ["Tetris", "Minecraft", "GTA V", "Wii Sports"], correct: "Minecraft" },
        { q: "In which game do players compete in a battle royale on an island?", a: ["Call of Duty", "Fortnite", "Halo", "Overwatch"], correct: "Fortnite" },
        { q: "What console is developed by Sony?", a: ["Xbox", "PlayStation", "Switch", "Dreamcast"], correct: "PlayStation" },
        { q: "Which game features the character Master Chief?", a: ["Halo", "Destiny", "Mass Effect", "Gears of War"], correct: "Halo" },
        { q: "What is the name of the princess in the main Super Mario series?", a: ["Zelda", "Daisy", "Peach", "Rosalina"], correct: "Peach" },
        { q: "Which company publishes the 'Call of Duty' franchise?", a: ["EA", "Ubisoft", "Activision", "Valve"], correct: "Activision" },
        { q: "In Minecraft, which material is required to build a Nether Portal frame?", a: ["Diamond", "Obsidian", "Iron", "Stone"], correct: "Obsidian" },
        { q: "What genre is 'The Legend of Zelda' primarily considered?", a: ["Sports", "RPG/Action-Adventure", "Racing", "Simulation"], correct: "RPG/Action-Adventure" },
        { q: "Which handheld console was developed by Nintendo in 1989?", a: ["PSP", "Game Boy", "DS", "Switch"], correct: "Game Boy" }
    ],

    Animals: [
        { q: "What is the largest land animal?", a: ["Rhinoceros", "Elephant", "Hippopotamus", "Giraffe"], correct: "Elephant" },
        { q: "Which mammal is capable of true flight?", a: ["Flying squirrel", "Bat", "Ostrich", "Penguin"], correct: "Bat" },
        { q: "What is a group of lions called?", a: ["Pack", "Herd", "Pride", "Flock"], correct: "Pride" },
        { q: "Which animal is known as the fastest land animal?", a: ["Cheetah", "Horse", "Lion", "Leopard"], correct: "Cheetah" },
        { q: "What do pandas primarily eat?", a: ["Fish", "Insects", "Bamboo", "Fruit"], correct: "Bamboo" },
        { q: "Which bird is a universal symbol of peace?", a: ["Eagle", "Dove", "Crow", "Falcon"], correct: "Dove" },
        { q: "How many legs does a spider have?", a: ["6", "8", "10", "12"], correct: "8" },
        { q: "Which marine mammal is known for its intelligence and echolocation?", a: ["Whale", "Seal", "Dolphin", "Shark"], correct: "Dolphin" },
        { q: "What is the largest species of shark?", a: ["Great White", "Hammerhead", "Whale Shark", "Tiger Shark"], correct: "Whale Shark" },
        { q: "Which animal is known for changing its color to blend with surroundings?", a: ["Frog", "Chameleon", "Lizard", "Gecko"], correct: "Chameleon" }
    ],

    Weather: [
        { q: "What instrument measures temperature?", a: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"], correct: "Thermometer" },
        { q: "What scale is commonly used to measure hurricane intensity?", a: ["Richter Scale", "Saffir-Simpson Scale", "Beaufort Scale", "Kelvin Scale"], correct: "Saffir-Simpson Scale" },
        { q: "What type of cloud is associated with thunderstorms?", a: ["Cirrus", "Stratus", "Cumulonimbus", "Altocumulus"], correct: "Cumulonimbus" },
        { q: "What does a barometer measure?", a: ["Humidity", "Wind speed", "Air pressure", "Temperature"], correct: "Air pressure" },
        { q: "What is frozen rain called?", a: ["Hail", "Sleet", "Snow", "Frost"], correct: "Sleet" },
        { q: "Which direction does the sun rise?", a: ["North", "South", "East", "West"], correct: "East" },
        { q: "What phenomenon causes a rainbow?", a: ["Reflection only", "Refraction and dispersion", "Gravity", "Magnetism"], correct: "Refraction and dispersion" },
        { q: "What is a prolonged period of little rainfall called?", a: ["Monsoon", "Cyclone", "Drought", "Blizzard"], correct: "Drought" },
        { q: "What measures wind speed?", a: ["Thermometer", "Anemometer", "Barometer", "Radar"], correct: "Anemometer" },
        { q: "What type of storm rotates around a low-pressure center?", a: ["Tornado", "Cyclone", "Blizzard", "Heatwave"], correct: "Cyclone" }
    ],
    US_History: [
        { q: "Who was the first President of the United States?", a: ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"], correct: "George Washington" },
        { q: "In what year was the Declaration of Independence signed?", a: ["1776", "1783", "1789", "1775"], correct: "1776" },
        { q: "Which war was fought between the North and South regions of the United States?", a: ["Revolutionary War", "War of 1812", "Civil War", "Spanish-American War"], correct: "Civil War" },
        { q: "Who was president during the Great Depression and most of World War II?", a: ["Herbert Hoover", "Harry Truman", "Franklin D. Roosevelt", "Dwight D. Eisenhower"], correct: "Franklin D. Roosevelt" },
        { q: "What purchase in 1803 doubled the size of the United States?", a: ["Gadsden Purchase", "Alaska Purchase", "Louisiana Purchase", "Florida Purchase"], correct: "Louisiana Purchase" },
        { q: "Which amendment abolished slavery?", a: ["13th", "14th", "15th", "12th"], correct: "13th" },
        { q: "Who delivered the Gettysburg Address?", a: ["Ulysses S. Grant", "Abraham Lincoln", "Andrew Johnson", "Theodore Roosevelt"], correct: "Abraham Lincoln" },
        { q: "What was the name of the ship that brought the Pilgrims to America in 1620?", a: ["Santa Maria", "Mayflower", "Endeavour", "Beagle"], correct: "Mayflower" },
        { q: "Which U.S. state was the last to join the Union?", a: ["Alaska", "Hawaii", "Arizona", "New Mexico"], correct: "Hawaii" },
        { q: "What movement sought to end racial segregation in the United States?", a: ["Progressive Movement", "Civil Rights Movement", "Abolitionist Movement", "Temperance Movement"], correct: "Civil Rights Movement" }
    ],

    World_Capitals: [
        { q: "What is the capital of France?", a: ["Lyon", "Marseille", "Paris", "Nice"], correct: "Paris" },
        { q: "What is the capital of Japan?", a: ["Osaka", "Kyoto", "Tokyo", "Nagoya"], correct: "Tokyo" },
        { q: "What is the capital of Canada?", a: ["Toronto", "Ottawa", "Vancouver", "Montreal"], correct: "Ottawa" },
        { q: "What is the capital of Brazil?", a: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correct: "Brasília" },
        { q: "What is the capital of Italy?", a: ["Milan", "Venice", "Rome", "Naples"], correct: "Rome" },
        { q: "What is the capital of Egypt?", a: ["Alexandria", "Cairo", "Giza", "Luxor"], correct: "Cairo" },
        { q: "What is the capital of Australia?", a: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: "Canberra" },
        { q: "What is the capital of Germany?", a: ["Munich", "Frankfurt", "Berlin", "Hamburg"], correct: "Berlin" },
        { q: "What is the capital of Argentina?", a: ["Santiago", "Buenos Aires", "Lima", "Montevideo"], correct: "Buenos Aires" },
        { q: "What is the capital of South Korea?", a: ["Busan", "Seoul", "Incheon", "Daegu"], correct: "Seoul" }
    ],

    Inventions: [
        { q: "Who invented the telephone?", a: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"], correct: "Alexander Graham Bell" },
        { q: "Who is credited with inventing the light bulb?", a: ["Albert Einstein", "Thomas Edison", "Benjamin Franklin", "James Watt"], correct: "Thomas Edison" },
        { q: "Who invented the World Wide Web?", a: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"], correct: "Tim Berners-Lee" },
        { q: "Who invented the airplane?", a: ["Charles Lindbergh", "Wright Brothers", "Howard Hughes", "Amelia Earhart"], correct: "Wright Brothers" },
        { q: "Who developed the theory of relativity?", a: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"], correct: "Albert Einstein" },
        { q: "Who invented the printing press?", a: ["Johannes Gutenberg", "Leonardo da Vinci", "Martin Luther", "Henry Ford"], correct: "Johannes Gutenberg" },
        { q: "Who invented the steam engine?", a: ["James Watt", "George Stephenson", "Thomas Newcomen", "Henry Ford"], correct: "James Watt" },
        { q: "Who invented dynamite?", a: ["Alfred Nobel", "Marie Curie", "Louis Pasteur", "Michael Faraday"], correct: "Alfred Nobel" },
        { q: "Who invented the first practical automobile?", a: ["Henry Ford", "Karl Benz", "Enzo Ferrari", "Ferdinand Porsche"], correct: "Karl Benz" },
        { q: "Who invented the polio vaccine?", a: ["Louis Pasteur", "Alexander Fleming", "Jonas Salk", "Edward Jenner"], correct: "Jonas Salk" }
    ],

    Board_Games: [
        { q: "How many squares are on a standard chessboard?", a: ["64", "72", "81", "100"], correct: "64" },
        { q: "In Monopoly, what is the name of the jail space?", a: ["Detention", "Go to Jail", "Prison", "Penalty"], correct: "Go to Jail" },
        { q: "Which board game features the countries Kamchatka and Ukraine?", a: ["Risk", "Catan", "Stratego", "Axis & Allies"], correct: "Risk" },
        { q: "How many tiles does each player start with in Scrabble?", a: ["5", "6", "7", "8"], correct: "7" },
        { q: "Which game involves connecting four discs in a row?", a: ["Checkers", "Connect Four", "Othello", "Battleship"], correct: "Connect Four" },
        { q: "What is the highest-ranking piece in chess?", a: ["Queen", "King", "Rook", "Bishop"], correct: "King" },
        { q: "In Clue, what is the name of the mansion owner who is murdered?", a: ["Mr. Green", "Colonel Mustard", "Mr. Boddy", "Professor Plum"], correct: "Mr. Boddy" },
        { q: "Which game popularized the resource 'sheep' alongside brick and wood?", a: ["Carcassonne", "Risk", "Catan", "Ticket to Ride"], correct: "Catan" },
        { q: "In Battleship, how many ships does each player start with (standard rules)?", a: ["3", "4", "5", "6"], correct: "5" },
        { q: "Which board game’s objective is to reach 100 spaces first using ladders and avoiding snakes?", a: ["Life", "Candy Land", "Snakes and Ladders", "Chutes and Ladders"], correct: "Snakes and Ladders" }
    ],

    Human_Anatomy: [
        { q: "How many bones are in the adult human body?", a: ["198", "206", "210", "212"], correct: "206" },
        { q: "What organ pumps blood throughout the body?", a: ["Liver", "Brain", "Heart", "Lungs"], correct: "Heart" },
        { q: "What is the largest organ inside the human body?", a: ["Brain", "Liver", "Lungs", "Kidney"], correct: "Liver" },
        { q: "Which part of the eye controls the amount of light entering?", a: ["Retina", "Cornea", "Iris", "Lens"], correct: "Iris" },
        { q: "What is the longest bone in the human body?", a: ["Humerus", "Femur", "Tibia", "Fibula"], correct: "Femur" },
        { q: "Which blood cells help fight infection?", a: ["Red blood cells", "Platelets", "White blood cells", "Plasma"], correct: "White blood cells" },
        { q: "What part of the brain controls voluntary movement?", a: ["Cerebellum", "Brainstem", "Cerebrum", "Medulla"], correct: "Cerebrum" },
        { q: "What muscle is primarily responsible for breathing?", a: ["Biceps", "Trapezius", "Diaphragm", "Quadriceps"], correct: "Diaphragm" },
        { q: "What structure connects muscles to bones?", a: ["Ligament", "Cartilage", "Tendon", "Joint"], correct: "Tendon" },
        { q: "Which organ filters blood to produce urine?", a: ["Bladder", "Kidney", "Pancreas", "Spleen"], correct: "Kidney" }
    ]
};
const questionBankHard = {
    Particle_Physics: [
        { q: "Which boson is responsible for giving elementary particles mass via spontaneous symmetry breaking?", a: ["Higgs", "Z Boson", "Photon", "Gluon"], correct: "Higgs" },
        { q: "What quantum number is conserved in strong interactions and associated with quark content?", a: ["Isospin", "Strangeness", "Color Charge", "Hypercharge"], correct: "Color Charge" },
        { q: "Which accelerator at CERN discovered the Higgs boson in 2012?", a: ["LEP", "Tevatron", "LHC", "RHIC"], correct: "LHC" }
    ],

    Microbiology: [
        { q: "What is the primary component of a bacterial cell wall?", a: ["Peptidoglycan", "Chitin", "Cellulose", "Keratin"], correct: "Peptidoglycan" },
        { q: "Which structure enables horizontal gene transfer via direct contact?", a: ["Flagellum", "Pilus", "Capsule", "Ribosome"], correct: "Pilus" },
        { q: "What staining technique differentiates bacteria by cell wall composition?", a: ["Ziehl-Neelsen", "Gram Stain", "Giemsa", "Endospore Stain"], correct: "Gram Stain" }
    ],

    Renaissance_Art: [
        { q: "Who painted the 'School of Athens' in the Apostolic Palace?", a: ["Raphael", "Michelangelo", "Donatello", "Da Vinci"], correct: "Raphael" },
        { q: "Which technique uses wet plaster for mural painting?", a: ["Sfumato", "Fresco", "Tempera", "Impasto"], correct: "Fresco" },
        { q: "Which Medici commissioned much of Michelangelo’s early work?", a: ["Lorenzo de' Medici", "Cosimo I", "Giovanni de' Medici", "Piero di Cosimo"], correct: "Lorenzo de' Medici" }
    ],

    Number_Theory: [
        { q: "What is the smallest number expressible as the sum of two cubes in two different ways?", a: ["1729", "1241", "1024", "2711"], correct: "1729" },
        { q: "What theorem states that there are infinitely many prime numbers?", a: ["Fermat's Last Theorem", "Euclid's Theorem", "Wilson's Theorem", "Lagrange's Theorem"], correct: "Euclid's Theorem" },
        { q: "What is a prime of the form 2^p − 1 called?", a: ["Fermat Prime", "Mersenne Prime", "Twin Prime", "Gaussian Prime"], correct: "Mersenne Prime" }
    ],

    Organic_Chemistry: [
        { q: "What is the IUPAC name for isoprene?", a: ["2-methyl-1,3-butadiene", "1-pentene", "Benzene", "Propane"], correct: "2-methyl-1,3-butadiene" },
        { q: "What reaction forms an alkene from an alcohol via dehydration?", a: ["Substitution", "Elimination", "Oxidation", "Hydrogenation"], correct: "Elimination" },
        { q: "Which spectroscopy method identifies functional groups by bond vibrations?", a: ["NMR", "IR", "UV-Vis", "Mass Spec"], correct: "IR" }
    ],

    Phonetics: [
        { q: "Which IPA symbol represents the voiced post-alveolar fricative?", a: ["ʒ", "ʃ", "ð", "θ"], correct: "ʒ" },
        { q: "What is the term for vowel sound quality?", a: ["Prosody", "Timbre", "Formant", "Allophone"], correct: "Formant" },
        { q: "Which feature distinguishes /p/ from /b/?", a: ["Voicing", "Place", "Manner", "Aspiration"], correct: "Voicing" }
    ],

    Botany: [
        { q: "What is the common name for Amorphophallus titanum?", a: ["Corpse Flower", "Titan Arum", "Venus Flytrap", "Stinkhorn"], correct: "Corpse Flower" },
        { q: "What plant tissue transports water upward?", a: ["Phloem", "Xylem", "Cambium", "Mesophyll"], correct: "Xylem" },
        { q: "What process converts atmospheric nitrogen into ammonia biologically?", a: ["Nitrification", "Denitrification", "Nitrogen Fixation", "Ammonification"], correct: "Nitrogen Fixation" }
    ],

    Pre_Socratic_Philosophy: [
        { q: "Which philosopher claimed 'All is Water'?", a: ["Thales", "Anaximander", "Heraclitus", "Zeno"], correct: "Thales" },
        { q: "Who proposed the concept of the 'Apeiron'?", a: ["Parmenides", "Anaximander", "Empedocles", "Democritus"], correct: "Anaximander" },
        { q: "Which thinker argued that reality is unchanging and motion is illusion?", a: ["Heraclitus", "Zeno", "Parmenides", "Anaxagoras"], correct: "Parmenides" }
    ],

    Classical_Music: [
        { q: "In what key is Beethoven's Symphony No. 3 'Eroica' written?", a: ["E-flat Major", "C Minor", "D Major", "G Major"], correct: "E-flat Major" },
        { q: "Which composer pioneered the twelve-tone technique?", a: ["Mahler", "Schoenberg", "Debussy", "Stravinsky"], correct: "Schoenberg" },
        { q: "What is the final movement of a sonata often called?", a: ["Adagio", "Scherzo", "Finale", "Intermezzo"], correct: "Finale" }
    ],

    Obscure_Geography: [
        { q: "What is the capital of the autonomous region of Gorno-Badakhshan?", a: ["Khorugh", "Dushanbe", "Murghab", "Osh"], correct: "Khorugh" },
        { q: "Which country administers the Åland Islands?", a: ["Sweden", "Finland", "Norway", "Estonia"], correct: "Finland" },
        { q: "What is the southernmost capital city in the world?", a: ["Wellington", "Hobart", "Canberra", "Montevideo"], correct: "Wellington" }
    ],

    // --- 40 Additional Niche Categories (3 Questions Each) ---

    Cryptography: [
        { q: "Which problem underpins RSA encryption?", a: ["Discrete Logarithm", "Integer Factorization", "Elliptic Curve Pairing", "Knapsack"], correct: "Integer Factorization" },
        { q: "What does AES stand for?", a: ["Advanced Encryption Standard", "Automated Encoding System", "Applied Encryption Suite", "Advanced Encoding Scheme"], correct: "Advanced Encryption Standard" },
        { q: "Which cipher did Alan Turing help break?", a: ["Caesar", "Enigma", "Vigenere", "Lorenz"], correct: "Enigma" }
    ],

    Astrobiology: [
        { q: "What zone around a star allows liquid water to exist?", a: ["Goldilocks Zone", "Roche Limit", "Event Horizon", "Oort Cloud"], correct: "Goldilocks Zone" },
        { q: "What molecule is often considered a biosignature gas?", a: ["Methane", "Oxygen", "Helium", "Argon"], correct: "Oxygen" },
        { q: "Which Mars rover searches for signs of ancient microbial life?", a: ["Spirit", "Opportunity", "Perseverance", "Sojourner"], correct: "Perseverance" }
    ],

    Topology: [
        { q: "What invariant counts the number of holes in a surface?", a: ["Euler Characteristic", "Genus", "Homotopy", "Metric"], correct: "Genus" },
        { q: "A coffee mug is topologically equivalent to what?", a: ["Sphere", "Torus", "Cube", "Cone"], correct: "Torus" },
        { q: "What is a space that is locally Euclidean called?", a: ["Vector Space", "Manifold", "Ring", "Field"], correct: "Manifold" }
    ],

    Entomology: [
        { q: "What order do butterflies belong to?", a: ["Diptera", "Coleoptera", "Lepidoptera", "Hymenoptera"], correct: "Lepidoptera" },
        { q: "What is the hardened forewing of a beetle called?", a: ["Tegmen", "Elytron", "Carapace", "Mandible"], correct: "Elytron" },
        { q: "Which insect undergoes complete metamorphosis?", a: ["Grasshopper", "Dragonfly", "Ant", "Silverfish"], correct: "Ant" }
    ],// --- 15 Additional Categories (3 Questions Each) ---

Anime_and_Manga: [
    { q: "In 'Neon Genesis Evangelion', what does NERV stand for?", a: ["Neuro-Engineered Response Vanguard", "Neo Evangelion Research Vessel", "Nuclear Emergency Response Vector", "It is never officially expanded"], correct: "It is never officially expanded" },
    { q: "Who created the manga 'Berserk'?", a: ["Kentaro Miura", "Eiichiro Oda", "Masashi Kishimoto", "Hajime Isayama"], correct: "Kentaro Miura" },
    { q: "What is the name of the pirate crew led by Monkey D. Luffy in 'One Piece'?", a: ["Red-Hair Pirates", "Straw Hat Pirates", "Whitebeard Pirates", "Heart Pirates"], correct: "Straw Hat Pirates" }
],

Superhero_Comics: [
    { q: "What is the real name of the Marvel character Moon Knight?", a: ["Marc Spector", "Matt Murdock", "Stephen Strange", "Frank Castle"], correct: "Marc Spector" },
    { q: "Which DC storyline introduced the Court of Owls?", a: ["The Long Halloween", "Flashpoint", "The New 52 Batman", "Crisis on Infinite Earths"], correct: "The New 52 Batman" },
    { q: "What metal gives Wolverine his claws?", a: ["Vibranium", "Adamantium", "Promethium", "Nth Metal"], correct: "Adamantium" }
],

Video_Game_Lore: [
    { q: "What is the name of the continent where most of 'The Witcher 3' takes place?", a: ["Tamriel", "The Continent", "Midgard", "Valoran"], correct: "The Continent" },
    { q: "In 'Dark Souls', what is the linking of the fire meant to prevent?", a: ["The Abyss", "The Age of Dark", "The Curse of the Undead", "The Dragon War"], correct: "The Age of Dark" },
    { q: "Which corporation creates the androids in 'NieR: Automata'?", a: ["YoRHa", "Shinra", "Umbrella", "Vault-Tec"], correct: "YoRHa" }
],

Prestige_Television: [
    { q: "Who composed the original score for 'Succession'?", a: ["Ramin Djawadi", "Nicholas Britell", "Hans Zimmer", "Bear McCreary"], correct: "Nicholas Britell" },
    { q: "In 'Breaking Bad', what is the name of Walter White's alter ego?", a: ["Heisenberg", "Gus", "Saul", "Tuco"], correct: "Heisenberg" },
    { q: "Which fictional company is central to the plot of 'Severance'?", a: ["Lumon Industries", "Waystar Royco", "Massive Dynamic", "E Corp"], correct: "Lumon Industries" }
],

Contemporary_Hip_Hop: [
    { q: "Which artist released the album 'To Pimp a Butterfly'?", a: ["J. Cole", "Kanye West", "Kendrick Lamar", "Drake"], correct: "Kendrick Lamar" },
    { q: "What producer tag is associated with Metro Boomin?", a: ["If Young Metro don't trust you...", "Mustard on the beat", "We the Best", "Mike WiLL Made-It"], correct: "If Young Metro don't trust you..." },
    { q: "Which city is considered the birthplace of drill music?", a: ["Atlanta", "Chicago", "New York", "Los Angeles"], correct: "Chicago" }
],

Fantasy_Literature: [
    { q: "What is the name of the sword reforged from Narsil in 'The Lord of the Rings'?", a: ["Glamdring", "Anduril", "Sting", "Orcrist"], correct: "Anduril" },
    { q: "Who wrote 'The Name of the Wind'?", a: ["Brandon Sanderson", "Patrick Rothfuss", "Joe Abercrombie", "George R.R. Martin"], correct: "Patrick Rothfuss" },
    { q: "In 'A Song of Ice and Fire', what is the motto of House Greyjoy?", a: ["Winter is Coming", "Fire and Blood", "We Do Not Sow", "Hear Me Roar"], correct: "We Do Not Sow" }
],

Sci_Fi_Cinema: [
    { q: "Who directed 'Blade Runner 2049'?", a: ["Christopher Nolan", "Denis Villeneuve", "Ridley Scott", "Alex Garland"], correct: "Denis Villeneuve" },
    { q: "What is the name of the ship in 'Alien' (1979)?", a: ["Prometheus", "Nostromo", "Sulaco", "Endurance"], correct: "Nostromo" },
    { q: "In 'The Matrix', what color pill does Neo take?", a: ["Blue", "Green", "Red", "Yellow"], correct: "Red" }
],

Reality_TV_and_Streaming: [
    { q: "Which streaming platform produced 'Stranger Things'?", a: ["Hulu", "Amazon Prime Video", "Netflix", "Disney+"], correct: "Netflix" },
    { q: "What is the grand prize on 'RuPaul's Drag Race' traditionally awarded alongside the crown?", a: ["$50,000", "$100,000", "$250,000", "$1,000,000"], correct: "$100,000" },
    { q: "Which dating show popularized the phrase 'Can I steal you for a second?'", a: ["Love Island", "The Bachelor", "Too Hot to Handle", "Are You the One?"], correct: "The Bachelor" }
],

Esports: [
    { q: "Which game features the tournament 'The International'?", a: ["League of Legends", "Dota 2", "CS:GO", "Valorant"], correct: "Dota 2" },
    { q: "What role is typically responsible for jungling in MOBA games?", a: ["Support", "ADC", "Jungler", "Top Laner"], correct: "Jungler" },
    { q: "Which South Korean player is nicknamed 'Faker'?", a: ["Lee Sang-hyeok", "Jang Min-chul", "Park Jae-hyuk", "Heo Su"], correct: "Lee Sang-hyeok" }
],

Internet_Culture: [
    { q: "What does the acronym 'ARG' stand for?", a: ["Alternate Reality Game", "Automated Response Generator", "Augmented Reality Grid", "Active Roleplay Group"], correct: "Alternate Reality Game" },
    { q: "Which platform popularized the 'subreddit' structure?", a: ["Tumblr", "Reddit", "4chan", "Discord"], correct: "Reddit" },
    { q: "What meme format begins with 'Distracted Boyfriend'?", a: ["Stock photo meme", "Advice animal", "Rage comic", "Deep fried meme"], correct: "Stock photo meme" }
],

Fashion_History: [
    { q: "Who founded the fashion house Chanel?", a: ["Elsa Schiaparelli", "Coco Chanel", "Donatella Versace", "Yves Saint Laurent"], correct: "Coco Chanel" },
    { q: "What 1960s fashion movement popularized miniskirts?", a: ["Mod", "Goth", "Punk", "Bohemian"], correct: "Mod" },
    { q: "Which city is considered one of the 'Big Four' fashion capitals?", a: ["Milan", "Zurich", "Dubai", "Seoul"], correct: "Milan" }
],

Culinary_Techniques: [
    { q: "What does 'sous vide' literally mean in French?", a: ["Under vacuum", "Slow fire", "In water", "Cold sear"], correct: "Under vacuum" },
    { q: "Which emulsion is stabilized primarily by egg yolk?", a: ["Vinaigrette", "Hollandaise", "Bechamel", "Veloute"], correct: "Hollandaise" },
    { q: "What Japanese knife is traditionally used for slicing sashimi?", a: ["Santoku", "Nakiri", "Yanagiba", "Deba"], correct: "Yanagiba" }
],

Urban_Legends_and_Folklore: [
    { q: "What creature is said to inhabit Loch Ness?", a: ["Mokele-Mbembe", "Nessie", "Chupacabra", "Kraken"], correct: "Nessie" },
    { q: "The Slender Man myth originated on which type of platform?", a: ["Television series", "Reddit forum", "Photoshop contest", "Creepypasta blog"], correct: "Photoshop contest" },
    { q: "What is the name of the internet folklore character known for endless staircases and distorted faces?", a: ["The Rake", "SCP-173", "Ben Drowned", "The Backrooms Entity"], correct: "SCP-173" }
],

Board_Games: [
    { q: "In 'Settlers of Catan', what resource is required to build a city?", a: ["Ore and Grain", "Brick and Wood", "Sheep and Wheat", "Wood and Ore"], correct: "Ore and Grain" },
    { q: "Which chess piece moves in an L-shape?", a: ["Bishop", "Knight", "Rook", "Queen"], correct: "Knight" },
    { q: "What hidden-role board game features characters like the Seer and Werewolf?", a: ["Avalon", "Secret Hitler", "Werewolf", "Coup"], correct: "Werewolf" }
],

Space_Opera: [
    { q: "What is the name of Han Solo's ship in 'Star Wars'?", a: ["Serenity", "Millennium Falcon", "Galactica", "Rocinante"], correct: "Millennium Falcon" },
    { q: "Who wrote the 'Dune' series?", a: ["Isaac Asimov", "Arthur C. Clarke", "Frank Herbert", "Philip K. Dick"], correct: "Frank Herbert" },
    { q: "In 'Mass Effect', what species is Garrus Vakarian?", a: ["Turian", "Asari", "Krogan", "Quarian"], correct: "Turian" }
],
// --- 15 Previously Omitted Niche Categories (3 Questions Each) ---

Naval_History: [
    { q: "What was the flagship of Admiral Nelson at the Battle of Trafalgar?", a: ["HMS Victory", "HMS Dreadnought", "HMS Bounty", "HMS Warrior"], correct: "HMS Victory" },
    { q: "Which class of battleship did the USS Iowa belong to?", a: ["Essex-class", "Iowa-class", "Yamato-class", "Bismarck-class"], correct: "Iowa-class" },
    { q: "What innovation made HMS Dreadnought revolutionary in 1906?", a: ["Steam turbines", "All-big-gun armament", "Iron hull", "Radar"], correct: "All-big-gun armament" }
],

Watchmaking: [
    { q: "What mechanism compensates for gravity’s effect on a watch’s escapement?", a: ["Perpetual calendar", "Tourbillon", "Chronograph", "Minute repeater"], correct: "Tourbillon" },
    { q: "What does COSC certification measure?", a: ["Water resistance", "Shock resistance", "Chronometric accuracy", "Magnetic shielding"], correct: "Chronometric accuracy" },
    { q: "Which country is most associated with haute horlogerie?", a: ["Germany", "Japan", "Switzerland", "France"], correct: "Switzerland" }
],

Paleoclimatology: [
    { q: "What ice core location provides climate data spanning over 800,000 years?", a: ["Greenland", "Vostok Station", "Svalbard", "Patagonia"], correct: "Vostok Station" },
    { q: "What ratio in foraminifera shells indicates ancient ocean temperatures?", a: ["Carbon-14", "Oxygen-18/Oxygen-16", "Nitrogen-15", "Helium-3"], correct: "Oxygen-18/Oxygen-16" },
    { q: "What rapid climate event occurred ~12,900 years ago?", a: ["Holocene Optimum", "Younger Dryas", "Little Ice Age", "PETM"], correct: "Younger Dryas" }
],

Sumerology: [
    { q: "What writing system did the Sumerians develop?", a: ["Hieroglyphics", "Linear B", "Cuneiform", "Runes"], correct: "Cuneiform" },
    { q: "What city is associated with the Epic of Gilgamesh?", a: ["Ur", "Uruk", "Lagash", "Eridu"], correct: "Uruk" },
    { q: "Who was the Sumerian sky god?", a: ["Enki", "Enlil", "Anu", "Inanna"], correct: "Anu" }
],

Competitive_Chess: [
    { q: "What opening begins with 1.e4 c5?", a: ["French Defense", "Sicilian Defense", "Caro-Kann", "Ruy Lopez"], correct: "Sicilian Defense" },
    { q: "What is the highest title awarded by FIDE?", a: ["International Master", "Candidate Master", "Grandmaster", "Super GM"], correct: "Grandmaster" },
    { q: "Which tiebreak system is commonly used in Swiss tournaments?", a: ["Elo", "Buchholz", "Sonneborn-Berger", "K-factor"], correct: "Buchholz" }
],

Formula_One_Technics: [
    { q: "What does DRS stand for?", a: ["Dynamic Racing System", "Drag Reduction System", "Downforce Recovery Setup", "Dual Rear Spoiler"], correct: "Drag Reduction System" },
    { q: "Which tire compound is typically marked with red sidewalls?", a: ["Hard", "Medium", "Soft", "Intermediate"], correct: "Soft" },
    { q: "What unit measures engine power output in F1?", a: ["Newton", "Horsepower", "Bar", "Joule"], correct: "Horsepower" }
],

Brewing_Science: [
    { q: "What sugar is primarily fermented in beer production?", a: ["Lactose", "Sucrose", "Maltose", "Fructose"], correct: "Maltose" },
    { q: "What does IBU measure?", a: ["Alcohol content", "Bitterness", "Color", "Carbonation"], correct: "Bitterness" },
    { q: "Which microorganism performs fermentation in most ales?", a: ["Saccharomyces cerevisiae", "Lactobacillus", "Brettanomyces", "Acetobacter"], correct: "Saccharomyces cerevisiae" }
],

Quantum_Computing: [
    { q: "What is the basic unit of quantum information?", a: ["Bit", "Qubit", "Gate", "Register"], correct: "Qubit" },
    { q: "Which algorithm provides exponential speedup for factoring integers?", a: ["Grover's Algorithm", "Shor's Algorithm", "Deutsch-Jozsa", "Viterbi"], correct: "Shor's Algorithm" },
    { q: "What phenomenon allows qubits to exhibit correlated states instantly?", a: ["Superposition", "Decoherence", "Entanglement", "Tunneling"], correct: "Entanglement" }
],

Calligraphy: [
    { q: "What script style is characterized by flowing, connected strokes in Arabic calligraphy?", a: ["Kufic", "Naskh", "Thuluth", "Diwani"], correct: "Diwani" },
    { q: "Which tool is traditionally used in East Asian brush calligraphy?", a: ["Quill", "Reed pen", "Brush", "Stylus"], correct: "Brush" },
    { q: "What term refers to decorative handwritten lettering in medieval manuscripts?", a: ["Illumination", "Engraving", "Etching", "Relief"], correct: "Illumination" }
],

Linguistic_Typology: [
    { q: "What language type primarily uses word order rather than inflection?", a: ["Agglutinative", "Fusional", "Isolating", "Polysynthetic"], correct: "Isolating" },
    { q: "What alignment treats the subject of an intransitive verb like the object of a transitive verb?", a: ["Nominative-Accusative", "Ergative-Absolutive", "Tripartite", "Active-Stative"], correct: "Ergative-Absolutive" },
    { q: "Which language is a classic example of polysynthesis?", a: ["English", "Mandarin", "Inuktitut", "Spanish"], correct: "Inuktitut" }
],

Mycology: [
    { q: "What is the vegetative body of a fungus called?", a: ["Spore", "Hypha", "Mycelium", "Ascus"], correct: "Mycelium" },
    { q: "Which division contains mushrooms with gills?", a: ["Zygomycota", "Basidiomycota", "Chytridiomycota", "Glomeromycota"], correct: "Basidiomycota" },
    { q: "What symbiotic association exists between fungi and plant roots?", a: ["Lichen", "Mycorrhiza", "Rhizome", "Endophyte"], correct: "Mycorrhiza" }
],

Cartography: [
    { q: "What projection preserves area but distorts shape?", a: ["Mercator", "Peters", "Robinson", "Lambert"], correct: "Peters" },
    { q: "What line connects points of equal elevation?", a: ["Isobar", "Contour line", "Meridian", "Transect"], correct: "Contour line" },
    { q: "What does GIS stand for?", a: ["Geographic Information System", "Global Imaging Survey", "Geospatial Index Standard", "Ground Interface System"], correct: "Geographic Information System" }
],

Numismatics: [
    { q: "What does 'obverse' refer to on a coin?", a: ["Edge", "Back", "Front", "Mint mark"], correct: "Front" },
    { q: "Which metal was primarily used in Roman denarii?", a: ["Gold", "Bronze", "Silver", "Copper"], correct: "Silver" },
    { q: "What term describes a coin struck from worn dies?", a: ["Proof", "Mint state", "Weak strike", "Clipped"], correct: "Weak strike" }
],

Volcanology: [
    { q: "What type of volcano is Mount Fuji?", a: ["Shield", "Stratovolcano", "Cinder cone", "Caldera"], correct: "Stratovolcano" },
    { q: "What scale measures volcanic explosivity?", a: ["Richter", "VEI", "Mercalli", "Saffir-Simpson"], correct: "VEI" },
    { q: "What molten rock beneath Earth's surface is called?", a: ["Lava", "Magma", "Basalt", "Tuff"], correct: "Magma" }
],

Gothic_Literature: [
    { q: "Who wrote 'The Castle of Otranto'?", a: ["Mary Shelley", "Horace Walpole", "Bram Stoker", "Ann Radcliffe"], correct: "Horace Walpole" },
    { q: "What creature is central to Bram Stoker's 'Dracula'?", a: ["Werewolf", "Ghost", "Vampire", "Demon"], correct: "Vampire" },
    { q: "Which novel features the character Victor Frankenstein?", a: ["Dracula", "Frankenstein", "The Monk", "Melmoth the Wanderer"], correct: "Frankenstein" }
],
Retrocomputing: [
    { q: "What processor powered the original IBM PC?", a: ["Z80", "Motorola 68000", "Intel 8088", "MOS 6502"], correct: "Intel 8088" },
    { q: "Which storage medium preceded the 3.5-inch floppy?", a: ["Zip disk", "8-inch floppy", "Magneto-optical", "DAT tape"], correct: "8-inch floppy" },
    { q: "What does BASIC stand for?", a: ["Binary Arithmetic System Integrated Code", "Beginner's All-purpose Symbolic Instruction Code", "Base Algorithmic Syntax Interface Compiler", "Basic Automated Systemic Input Code"], correct: "Beginner's All-purpose Symbolic Instruction Code" }
],
Railway_Signaling: [
    { q: "What does a semaphore signal use to convey information?", a: ["Lights only", "Mechanical arms", "Sound horns", "Colored smoke"], correct: "Mechanical arms" },
    { q: "What system prevents trains from entering occupied blocks?", a: ["Dead reckoning", "Block signaling", "Open track", "Manual dispatch"], correct: "Block signaling" },
    { q: "What does ETCS stand for?", a: ["European Train Control System", "Electronic Track Circuit Standard", "Engineered Transit Coordination Scheme", "Express Train Command Structure"], correct: "European Train Control System" }
],
Mechanical_Keyboards: [
    { q: "Which switch type is known for tactile feedback without an audible click?", a: ["Linear", "Clicky", "Tactile", "Membrane"], correct: "Tactile" },
    { q: "What does 'NKRO' stand for?", a: ["New Key Roll Output", "N-Key Rollover", "Neutral Key Response Option", "Node Key Relay Operation"], correct: "N-Key Rollover" },
    { q: "Which company manufactures Cherry MX switches?", a: ["Logitech", "Cherry", "Kailh", "Topre"], correct: "Cherry" }
],

Fountain_Pens: [
    { q: "What metal is commonly used for flexible nibs?", a: ["Steel", "Titanium", "Gold", "Aluminum"], correct: "Gold" },
    { q: "What filling system uses a vacuum plunger mechanism?", a: ["Cartridge", "Eyedropper", "Vacumatic", "Piston"], correct: "Vacumatic" },
    { q: "What does 'eBonite' refer to?", a: ["A nib coating", "Hard rubber material", "Ink additive", "Feed design"], correct: "Hard rubber material" }
],
Electric_Vehicles: [
    { q: "What does regenerative braking recover?", a: ["Heat", "Battery casing", "Kinetic energy", "Tire friction"], correct: "Kinetic energy" },
    { q: "What connector standard is widely used for DC fast charging in North America?", a: ["CHAdeMO", "CCS", "Type 2", "GB/T"], correct: "CCS" },
    { q: "What unit measures battery capacity in EVs?", a: ["kWh", "Nm", "PSI", "RPM"], correct: "kWh" }
],

Biohacking: [
    { q: "What device continuously monitors blood glucose levels in real time?", a: ["ECG patch", "CGM", "VO2 strap", "Oura ring"], correct: "CGM" },
    { q: "What practice involves exposure to very cold temperatures for recovery claims?", a: ["Cryotherapy", "Hyperbarics", "Red light therapy", "Floatation"], correct: "Cryotherapy" },
    { q: "What does HRV stand for in recovery tracking?", a: ["Heart Rate Variance", "Hormonal Response Value", "Heart Rate Variability", "Hemoglobin Regulation Vector"], correct: "Heart Rate Variability" }
],
Fantasy_Sports_Analytics: [
    { q: "What does ADP stand for?", a: ["Average Draft Position", "Adjusted Defensive Percentage", "Automated Data Projection", "Advanced Draft Probability"], correct: "Average Draft Position" },
    { q: "What metric estimates player performance relative to replacement level?", a: ["PER", "WAR", "RPM", "EPA"], correct: "WAR" },
    { q: "What format drafts players in a serpentine order?", a: ["Auction draft", "Snake draft", "Dynasty draft", "Keeper draft"], correct: "Snake draft" }
],
// --- 7 Focused Modern Categories (3 Questions Each) ---

NBA: [
    { q: "Which player is the NBA's all-time leading scorer?", a: ["Michael Jordan", "Kareem Abdul-Jabbar", "LeBron James", "Kobe Bryant"], correct: "LeBron James" },
    { q: "What does a 'triple-double' require?", a: ["Three steals in a game", "Double-digit stats in three categories", "30 points exactly", "Three consecutive dunks"], correct: "Double-digit stats in three categories" },
    { q: "Which team won the 73-9 regular season record?", a: ["Chicago Bulls", "Golden State Warriors", "Miami Heat", "San Antonio Spurs"], correct: "Golden State Warriors" }
],

National_Parks: [
    { q: "What was the first designated U.S. National Park?", a: ["Yosemite", "Yellowstone", "Grand Canyon", "Zion"], correct: "Yellowstone" },
    { q: "Which national park is home to Half Dome?", a: ["Zion", "Rocky Mountain", "Yosemite", "Glacier"], correct: "Yosemite" },
    { q: "Which park is known for Old Faithful geyser?", a: ["Yellowstone", "Olympic", "Arches", "Sequoia"], correct: "Yellowstone" }
],

Tarot_Cards: [
    { q: "How many cards are in a traditional tarot deck?", a: ["52", "64", "78", "88"], correct: "78" },
    { q: "Which card represents sudden upheaval or revelation?", a: ["The Star", "The Tower", "Death", "The Moon"], correct: "The Tower" },
    { q: "What suit is associated with intellect and air?", a: ["Cups", "Wands", "Swords", "Pentacles"], correct: "Swords" }
],

Beach_Volleyball: [
    { q: "How many players are on a beach volleyball team?", a: ["6", "4", "3", "2"], correct: "2" },
    { q: "What is the standard match format in professional beach volleyball?", a: ["Best of 3 sets", "Best of 5 sets", "Single 30-point set", "Timed match"], correct: "Best of 3 sets" },
    { q: "Who replaced Taylor Crabb at the 2021 Tokyo Olympics?", a: ["Tri Bourne", "Trevor Crabb", "Miles Partain", "Jake Gibb"], correct: "Tri Bourne" }
],

Elden_Ring: [
    { q: "Who wrote much of the worldbuilding lore for Elden Ring?", a: ["Hidetaka Miyazaki", "George R.R. Martin", "Hideo Kojima", "Kentaro Miura"], correct: "George R.R. Martin" },
    { q: "What is the name of the world in Elden Ring?", a: ["Lordran", "The Lands Between", "Boletaria", "Drangleic"], correct: "The Lands Between" },
    { q: "What item is used to restore health?", a: ["Estus Flask", "Crimson Flask", "Divine Blessing", "Rune Arc"], correct: "Crimson Flask" }
],

Zelda_Games: [
    { q: "What is the name of Link's primary weapon?", a: ["Master Blade", "Hylian Sword", "Master Sword", "Blade of Time"], correct: "Master Sword" },
    { q: "Which Zelda game introduced an open-world format on Nintendo Switch?", a: ["Twilight Princess", "Skyward Sword", "Breath of the Wild", "Wind Waker"], correct: "Breath of the Wild" },
    { q: "What is the name of the kingdom where most Zelda games take place?", a: ["Termina", "Hyrule", "Lorule", "Holodrum"], correct: "Hyrule" }
],

Astrology: [
    { q: "How many zodiac signs are in Western astrology?", a: ["10", "11", "12", "13"], correct: "12" },
    { q: "Which planet rules Leo?", a: ["Mars", "Venus", "Sun", "Mercury"], correct: "Sun" },
    { q: "What is a natal chart based on?", a: ["Current planetary alignment", "Moon phases only", "Birth date, time, and location", "Season of birth"], correct: "Birth date, time, and location" }
]
}
if (typeof supabase === 'undefined') {
    var supabase = null; 
}

// Initialize the client only if the library loaded correctly
const supabaseUrl = 'https://mvmtkpwyefyccbobvjbl.supabase.co';
const supabaseKey = 'sb_publishable_z8OrgyDbemt-wgAgfpLV0A_fj0vhd5Y';

if (window.supabase && window.supabase.createClient) {
    supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
    console.log("🚀 Supabase Engine: ONLINE");
} else {
    console.error("⚠️ Supabase Library not found or blocked by browser.");
}




const gameState = {
    // Moved sectorData inside so "this.sectorData" works
    sectorData: {
        1: {
            background: "url('assets/bg-sector1.jpg')",
            bossSprite: "url('assets/boss1-idle.gif')",
            message: "Sector 1 Clear! Entering Sector 2: The Milky Way. Denser HARD Trivium asteroids are now availible for harvest. Warning: Trivium consumption per jump has increased."
        },
        2: {
            background: "url('assets/background2.png')",
            bossSprite: "url('assets/boss2-idle.gif')",
            message: "Sector 2 Clear! Entering Sector 3: The Galactic Core. Final challenge awaits. Trivium consumption per jump is at maximum cost."
        },
        3: {
            background: "url('assets/background3.jpg')",
            bossSprite: "url('assets/boss3-idle.gif')",
            message: "You did it!"
        }
    },

    // 1. DATA TRACKING
    player: {
        name: "",
        food: 0,
        trivium: 0,
        bossRerollCost: 2,
        credits: 0,
        type: "",
        modules: [null, null, null, null, null, null]
    },
    bgMusic: new Audio('assets/space_music.mp3'),
    musicStarted: false,
    currentStage: 1,
    currentSector: 1, 
    sectorBackgrounds: {
        1: 'assets/Pismis24.png',
        2: 'assets/background2.png',
        3: 'assets/background3.jpg'
    },
    categories: [
        "Ancient_History", "Biology", "World_Geography", "Literature", 
        "Art_History", "Music", "Chemistry", "Movies", "Mythology", 
        "Technology", "Sports", "Philosophy", "Food_and_Drink", 
        "Politics", "Space_Exploration", "Language", "Business", 
        "Geology", "Psychology", "Modern_History",
        "Astronomy", "Physics", "Mathematics", "Environmental_Science",
        "Medicine", "Architecture", "Economics", "Computer_Science",
        "Cultural_Studies", "Law"
    ],

    shopModules: [
        { id: 'accumulator', name: "Trivium Amplifier", cost: 15, desc: "Always doubles Trivium rewards.", icon: "✨" },
        { id: 'laser', name: "Defense Laser", cost: 5, desc: "1-Use: Remove a wrong answer during regular question.", icon: "🔫" },
        { id: 'biosphere', name: "Biosphere", cost: 10, desc: "Produces 4 Food per Jump.", icon: "🌿" },
        { id: 'content_farm', name: "Content Farm", cost: 12, desc: "+2 Food, +4 Credits, -1 Trivium per Jump.", icon: "🚜" }
    ],

    buddies: [
        { id: 'octopus', name: "Hydroponic Octopus", desc: "Grows 2 Food per Jump.", icon: "🐙", gif: "assets/octopus_idle.gif" },
        { id: 'aardvark', name: "Arbitrage Aardvark", desc: "Generates 3 Credits for you per Jump.", icon: "🐜", gif: "assets/aardvark_idle.gif" },
        { id: 'trivia_toad', name: "Trivia Toad", desc: "Consumes 1 Food to produce 4 Trivium per Jump.", icon: "🐸", gif: "assets/toad_idle.gif" },
        { id: 'bear_bot', name: "Bear Bot", desc: "1 Food, 1 Trivium, 1 Credit per Jump.", icon: "🧸", gif: "assets/bear_idle.gif" }
    ],

    // 2. ELEMENT GETTERS
    get introScreen() { return document.getElementById('intro-terminal'); },
    get menuScreen() { return document.getElementById('menu-screen'); },
    get charScreen() { return document.getElementById('char-screen'); },
    get gameScreen() { return document.getElementById('game-screen'); },
    get shopScreen() { return document.getElementById('shop-screen'); },

    // 3. CORE FUNCTIONS
    init: function() {
        console.log("Sequence Initiated...");
        this.bgMusic.loop = true;
        this.bgMusic.volume = 0.3;

        document.body.addEventListener('click', () => {
            if (!this.musicStarted) {
                this.bgMusic.play();
                this.musicStarted = true;
            }
        }, { once: true });

        this.introScreen.onclick = () => this.skipIntro();
        this.introTimer = setTimeout(() => {
            this.showMenu();
        }, 15000);
    },

    skipIntro: function() {
        if (this.introTimer) clearTimeout(this.introTimer);
        this.showMenu();
    },

    showMenu: function() {
        this.introScreen.onclick = null; 
        this.introScreen.classList.add('hidden');
        this.menuScreen.classList.remove('hidden');
        this.menuScreen.classList.add('fade-in');
    },

    showCharacterSelect: function() {
        this.menuScreen.classList.add('hidden');
        this.charScreen.classList.remove('hidden');
    },

    selectCharacter: function(choice) {
        this.currentSector = 1;
        document.body.style.backgroundImage = `url('${this.sectorBackgrounds[1]}')`;
        const bossIcon = document.getElementById('boss-icon');
        if (bossIcon) {
            bossIcon.style.backgroundImage = "url('assets/boss1-idle.gif')";
        }
        if (choice === 'latke') {
            this.player = { name: "Latke", food: 20, trivium: 12, credits: 0, type: "latke", modules: [null, null, null, null, null, null] };
        } else {
            this.player = { name: "Glenn", food: 12, trivium: 10, credits: 10, type: "glenn", modules: [null, null, null, null, null, null] };
        }
        this.enterGame();
    },

    enterGame: function() {
        this.charScreen.classList.add('hidden');
        this.gameScreen.classList.remove('hidden');
        this.currentStage = 1; 
        const sprite = document.getElementById('pilot-sprite');
        if (sprite) {
            sprite.className = "";
            sprite.classList.add(this.player.type + "-active"); 
        }
        this.updateHUD();
        this.renderModules();
        this.generatePlanets();
    },

    openShop: function() {
        this.gameScreen.classList.add('hidden');
        this.shopScreen.classList.remove('hidden');
        
        const availableModules = this.shopModules.filter(mod => 
            !this.player.modules.some(equipped => equipped?.id === mod.id)
        );

        const shopDialogue = document.querySelector('#shop-screen .shop-dialogue');
        if (shopDialogue) {
            if (availableModules.length === 0) {
                shopDialogue.innerHTML = `"${this.player.name}, you've bought everything I have! Now get out there and survive."`;
            } else {
                shopDialogue.innerHTML = `"${this.player.name}, you must know that credits are good, but survival is better. You've currently got <span class="credit-highlight">${this.player.credits} Credits</span>. What'll it be?"`;
            }
        }
        
        const container = document.getElementById('shop-offers');
        container.innerHTML = "";
        
        const shuffled = [...availableModules].sort(() => 0.5 - Math.random());
        const selections = shuffled.slice(0, 3);

        selections.forEach((mod, index) => {
            const canAfford = this.player.credits >= mod.cost;
            const item = document.createElement('div');
            item.id = `shop-item-${index}`; 
            item.className = 'shop-item';
            item.innerHTML = `
                <h4>${mod.name}</h4>
                <p>${mod.desc}</p>
                <div class="buy-area">
                    <button class="buy-btn" ${canAfford ? '' : 'disabled'} 
                        onclick="gameState.buyModule('${mod.id}', ${index})">BUY: ${mod.cost}C</button>
                </div>
            `;
            container.appendChild(item);
        });
    },

    buyModule: function(modId, shopIndex) {
        const mod = this.shopModules.find(m => m.id === modId);
        const emptySlot = this.player.modules.indexOf(null);
        if (emptySlot !== -1 && this.player.credits >= mod.cost) {
            this.player.credits -= mod.cost;
            
            const shopDialogue = document.querySelector('#shop-screen .shop-dialogue');
            if (shopDialogue) {
                shopDialogue.innerHTML = `"Thanks ${this.player.name}, you've got <span class="credit-highlight">${this.player.credits} Credits left</span>. Anything else?"`;
            }
            
            this.player.modules[emptySlot] = { ...mod }; 
            this.renderModules();
            this.updateHUD();
            const itemDiv = document.getElementById(`shop-item-${shopIndex}`);
            if (itemDiv) {
                itemDiv.innerHTML = `<div class="sold-out">SOLD OUT</div>`;
                itemDiv.style.opacity = "0.5";
                itemDiv.style.borderStyle = "dashed";
            }
        } else if (emptySlot === -1) {
            alert("No module slots available!");
        }
    },

    closeShop: function() {
        this.shopScreen.classList.add('hidden');
        this.gameScreen.classList.remove('hidden');
        this.generatePlanets();
    },

    renderModules: function() {
        this.player.modules.forEach((mod, index) => {
            const slot = document.getElementById(`slot-${index + 1}`);
            if (slot) {
                if (mod) {
                    slot.classList.add('equipped');
                    if (mod.gif) {
                        slot.style.backgroundImage = `url('${mod.gif}')`;
                        slot.innerHTML = ""; 
                    } else {
                        slot.style.backgroundImage = "none";
                        slot.innerHTML = `<span>${mod.icon}</span>`;
                    }
                    const sellBtn = document.createElement('button');
                    sellBtn.innerText = "SELL";
                    sellBtn.className = "sell-module-btn hidden";
                    sellBtn.onclick = (e) => {
                        e.stopPropagation();
                        this.sellModule(index);
                    };
                    slot.appendChild(sellBtn);
                    slot.onclick = () => {
                        sellBtn.classList.toggle('hidden');
                    };
                    slot.setAttribute('data-tooltip', mod.name);
                } else {
                    slot.classList.remove('equipped');
                    slot.style.backgroundImage = "none"; 
                    slot.innerHTML = "";
                    slot.onclick = null;
                    slot.setAttribute('data-tooltip', "Empty Slot");
                }
            }
        });
    },

    sellModule: function(index) {
        const mod = this.player.modules[index];
        const sellPrice = 1;
        if (confirm(`Sell ${mod.name} for ${sellPrice} Credit?`)) {
            this.player.credits += sellPrice;
            this.player.modules[index] = null;
            this.updateHUD();
            this.renderModules();
        }
    },

    showFeedback: function(isCorrect, message, title = "TRANSMISSION RECEIVED") {
        const overlay = document.getElementById('feedback-overlay');
        const titleEl = document.getElementById('feedback-title');
        const msgEl = document.getElementById('feedback-msg');
        titleEl.innerText = title;
        msgEl.innerText = message;
        titleEl.className = isCorrect ? "success-text" : "failure-text";
        overlay.classList.remove('hidden');
    },

    closeFeedback: function() {
    document.getElementById('feedback-overlay').classList.add('hidden');
    const bossIcon = document.getElementById('boss-icon');
    if (bossIcon) bossIcon.classList.add('hidden');

    if (this.player.food <= 0 || this.player.trivium <= 0) {
        this.returnToMenu();
        return;
    }

    if (this.currentStage === 4) {
        this.openTavern();
        return;
    } else if (this.currentStage === 8) {
        this.openShop();
        return;
    } else if (this.currentStage === 10) {
        document.getElementById('current-stage').innerText = "10";
        this.triggerBossEncounter();
        return;
    } else if (this.currentStage > 10) {
        // --- FIXED SECTOR TRANSITION LOGIC ---

        // 1. Get the data for the sector we JUST completed
        const completedSectorData = this.sectorData[this.currentSector];

        

        // 3. Increment to the NEW sector
        this.currentSector++;
        this.currentStage = 1;

        // 4. Get the data for the NEW sector to update visuals
        const nextSectorData = this.sectorData[this.currentSector];

        // 5. Update Background and Boss Sprite for the NEW sector
        document.body.style.backgroundImage = nextSectorData.background;
        if (bossIcon) {
            bossIcon.style.backgroundImage = nextSectorData.bossSprite;
        }

        // 6. Show the message from the COMPLETED sector
        this.showFeedback(true, completedSectorData.message, "WARP SUCCESSFUL");
        
        this.updateHUD(); 
        return;
    } 

    this.updateHUD();
    this.generatePlanets();
},

    showVictoryScreen: function() {
    // 1. Hide the gameplay layers
    this.gameScreen.classList.add('hidden');
    
    // Hide all other potential UI elements
    const uiElements = ['boss-ui', 'trivia-box', 'shop-screen', 'tavern-screen'];
    uiElements.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });

    const overlay = document.getElementById('feedback-overlay');
    const msgEl = document.getElementById('feedback-msg');
    const titleEl = document.getElementById('feedback-title');
    const closeBtn = document.getElementById('feedback-close-btn');

    // 2. Setup Title
    titleEl.innerHTML = "VICTORY! <br> You have traversed the GALACTIC CORE! <br> Life now makes way more sense. <br> Thanks for playing the demo! -Kieran";
    titleEl.className = "success-text"; 
    titleEl.style.color = "#00f2ff";

    // 3. Prepare Buddy/Pilot Visuals
    const pilotImg = this.player.type === 'latke' ? 'assets/latke_idle.gif' : 'assets/glenn_idle.gif';
    const buddyHtml = this.player.modules
        .filter(m => m && m.gif)
        .map(b => `<img src="${b.gif}" style="width:50px; height:50px; border:1px solid #00f2ff; margin:5px; background: rgba(0,0,0,0.5);" title="${b.name}">`)
        .join('');

    // 4. Inject Content (Updated with container padding)
    msgEl.innerHTML = `
        <div style="text-align: center; font-family: 'Courier New', monospace; padding-bottom: 20px;">
            <div style="margin-bottom: 15px;">
                <p>PILOT: ${this.player.name.toUpperCase()}</p>
                <img src="${pilotImg}" style="width: 80px; height: 80px; image-rendering: pixelated;">
            </div>

            <div style="display: flex; justify-content: space-around; background: rgba(0,242,255,0.1); padding: 10px; border: 1px solid #00f2ff;">
                <span>Food: ${this.player.food}</span>
                <span>Trivium: ${this.player.trivium}</span>
                <span>Credits: ${this.player.credits}</span>
            </div>

            <div style="margin: 15px 0;">
                <p style="font-size: 0.8em; color: #888;">Surviving Crew:</p>
                <div style="display: flex; justify-content: center; flex-wrap: wrap;">
                    ${buddyHtml || "NO SURVIVING BUDDIES"}
                </div>
            </div>

            <div style="border-top: 1px solid #444; padding-top: 15px; margin-bottom: 20px;">
                <p>Final Trivium Score: <span style="color: #00f2ff; font-size: 1.5em;">${this.player.trivium}</span></p>
                <p>A Prize to the Highest Trivium Score at end of Demo</p>
                <input type="text" id="player-initials" placeholder="AAA" maxlength="3" 
                       style="text-transform: uppercase; width: 60px; text-align: center; background: #000; color: #00f2ff; border: 1px solid #00f2ff; padding: 5px;">
                <button onclick="gameState.submitScore()" style="background: #00f2ff; color: #000; border: none; padding: 6px 12px; font-weight: bold; cursor: pointer; font-family: 'Courier New', monospace;">SUBMIT</button>
            </div>

            <button onclick="location.reload()" style="display: block; width: 100%; margin-top: 20px; background: rgba(194, 86, 86, 0.2); border: 1px solid rgb(194, 86, 86); color: rgb(194, 86, 86); cursor: pointer; font-size: 0.9em; padding: 10px;">RETURN TO TITLE SCREEN</button>
        </div>
    `;

    // 5. Show the Overlay and hide the default "Continue" button
    if (closeBtn) closeBtn.style.display = 'none'; 
    overlay.classList.remove('hidden');
    overlay.style.display = "flex"; 
},

   submitScore: async function() {
    const initials = document.getElementById('player-initials').value.toUpperCase() || "AAA";
    const finalScore = this.player.trivium;
    
    const btn = document.querySelector('button[onclick="gameState.submitScore()"]');
    btn.innerText = "UPLOADING...";
    btn.disabled = true;

    try {
        // 1. Insert the new score
        const { error: insertError } = await supabase
            .from('leaderboard')
            .insert([{ name: initials, score: finalScore }]);

        if (insertError) throw insertError;

        // 2. Fetch the top 10 scores
        const { data: scores, error: fetchError } = await supabase
            .from('leaderboard')
            .select('name, score')
            .order('score', { ascending: false })
            .limit(10);

        if (fetchError) throw fetchError;

        // 3. Show the high score table
        this.showHighScores(scores);
    } catch (err) {
        console.error("Supabase Error:", err.message);
        alert("Transmission failed. Using local emergency backup.");
    }
},

showHighScores: function(scores) {
    const msgEl = document.getElementById('feedback-msg');
    let tableHtml = `
        <h3 style="color:#00f2ff; text-shadow: 0 0 10px #00f2ff;"></h3>
        <table style="width:100%; border-collapse: collapse; font-family: 'Courier New', monospace; font-size: 0.9em; margin-top:10px;">
            <tr style="border-bottom: 1px solid #00f2ff; color: #888;">
                <th style="text-align:left; padding: 5px;">PILOT</th>
                <th style="text-align:right; padding: 5px;">TRIVIUM</th>
            </tr>
    `;


    scores.forEach((s, index) => {
        const color = index === 0 ? "#ffd700" : "#00f2ff"; // Gold for #1
        tableHtml += `
            <tr style="border-bottom: 1px solid #222;">
                <td style="text-align:left; padding: 8px 5px;">${index + 1}. ${s.name}</td>
                <td style="text-align:right; color: ${color}; font-weight:bold;">${s.score.toLocaleString()}</td>
            </tr>
        `;
    });
    // ADD THE BUTTONS HERE
    tableHtml += `
        <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 10px;">
            <button onclick="location.reload()" 
                style="background:#00f2ff; color:#000; border:none; padding:12px; cursor:pointer; font-weight:bold; font-family: inherit;">
                START NEW MISSION
            </button>
            
            
    `;

    
    
    msgEl.innerHTML = tableHtml;
},
viewLeaderboard: async function() {
    // 1. Show the overlay immediately so the user knows something is happening
    const overlay = document.getElementById('feedback-overlay');
    const msgEl = document.getElementById('feedback-msg');
    const titleEl = document.getElementById('feedback-title');
    const closeBtn = document.getElementById('feedback-close-btn');

    titleEl.innerText = "Galactic Hall of Fame";
    msgEl.innerHTML = "<p style='text-align:center;'>Accessing Galactic Archives...</p>";
    overlay.classList.remove('hidden');
    overlay.style.display = "flex";

    if (!supabase) {
        msgEl.innerHTML = "<p style='color:#ff4444;'>Connection Error: Database blocked by browser tracking prevention.</p>";
        return;
    }

    try {
        // 2. Fetch top 10 from Supabase
        const { data: scores, error } = await supabase
            .from('leaderboard')
            .select('name, score')
            .order('score', { ascending: false })
            .limit(10);

        if (error) throw error;

        // 3. Reuse your existing table display logic
        this.showHighScores(scores);
        
        // 4. Update the button to say "BACK TO MENU" instead of "NEW MISSION"
        // This ensures they don't accidentally reload the page if they just wanted to peek
        const menuBtn = msgEl.querySelector('button');
        if (menuBtn) {
            
            menuBtn.onclick = () => {
                overlay.classList.add('hidden');
                overlay.style.display = "none";
            };
        }
    } catch (err) {
        console.error("Fetch Error:", err);
        msgEl.innerHTML = "<p style='color:#ff4444;'>Failed to sync with Hall of Fame.</p>";
    }
},

    generatePlanets: function() {
        document.getElementById('current-stage').innerText = this.currentStage;
        document.getElementById('choice-container').classList.remove('hidden');
        document.getElementById('trivia-box').classList.add('hidden');
        const container = document.getElementById('planet-options');
        container.innerHTML = ""; 
        const resources = ["Food", "Trivium", "Credits"];
        const shuffledCats = [...this.categories].sort(() => 0.5 - Math.random());

        for (let i = 0; i < 3; i++) {
            const cat = shuffledCats[i];
            const resType = resources[i]; 
            const amount = Math.floor(Math.random() * (14 - 9 + 1) + 9);
            let nodeName = amount === 14 ? "Planet" : amount === 13 ? "Dwarf Planet" : amount === 12 ? "Moon" : amount === 11 ? "Asteroid" : amount === 10 ? "Trading Beacon" : "Research Habitat";
            this.createNodeCard(container, cat, resType, amount, nodeName, false);
        }

        if (this.currentSector >= 2) {
            const hardCats = Object.keys(questionBankHard);
            const eliteCat = hardCats[Math.floor(Math.random() * hardCats.length)];
            const eliteAmount = Math.floor(Math.random() * (28 - 18 + 1) + 18);
            this.createNodeCard(container, eliteCat, "Trivium", eliteAmount, "-HARD-", true);
        }
    },

    createNodeCard: function(container, cat, resType, amount, nodeName, isHard) {
        const card = document.createElement('div');
        card.className = isHard ? 'planet-card elite-node' : 'planet-card';
        card.innerHTML = `<h3>${cat.replace(/_/g, ' ')} ${nodeName}</h3><span class="reward-tag">+${amount} ${resType}</span>`; 
        card.onclick = () => this.startTrivia(cat, {type: resType, val: amount}, isHard);
        container.appendChild(card);
    },

    triggerBossEncounter: function() {
        const bossIcon = document.getElementById('boss-icon');
        if (bossIcon) {
            bossIcon.classList.remove('hidden');
            const data = this.sectorData[this.currentSector];
            if (data) bossIcon.style.backgroundImage = data.bossSprite;
        }
        document.getElementById('choice-container').classList.add('hidden');
        document.getElementById('trivia-box').classList.add('hidden');
        const bossUI = document.getElementById('boss-ui');
        bossUI.classList.remove('hidden');
        this.bossRerollCost = 2;
        this.renderBossCategories();
    },

    renderBossCategories: function() {
        const grid = document.getElementById('boss-category-grid');
        grid.innerHTML = "";
        const hardCats = Object.keys(questionBankHard);
        const shuffled = hardCats.sort(() => 0.5 - Math.random()).slice(0, 6);
        shuffled.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = "category-btn";
            btn.innerText = cat.replace(/_/g, ' ');
            btn.onclick = () => this.startSuddenDeath(cat);
            grid.appendChild(btn);
        });
        this.updateRerollButton();
    },

    updateRerollButton: function() {
        const container = document.getElementById('reroll-container');
        if (!container) return;
        const canAfford = this.player.credits >= this.bossRerollCost;
        container.innerHTML = `<button id="reroll-btn" ${canAfford ? '' : 'disabled'} onclick="gameState.rerollBossCategories()">RE-ROLL for new Categories [${this.bossRerollCost} Credits]</button>`;
    },

    rerollBossCategories: function() {
        if (this.player.credits >= this.bossRerollCost) {
            this.player.credits -= this.bossRerollCost;
            this.bossRerollCost *= 2;
            this.updateHUD();
            this.renderBossCategories();
        }
    },

    startSuddenDeath: function(category) {
        const bossIcon = document.getElementById('boss-icon');
        const transferContainer = document.getElementById('boss-sprite-transfer');
        const bossUI = document.getElementById('boss-ui');
        const triviaBox = document.getElementById('trivia-box');
        
        // Move the icon into the trivia box for the fight
        transferContainer.appendChild(bossIcon);
        bossUI.classList.add('hidden');
        triviaBox.classList.remove('hidden');

        const questions = questionBankHard[category];
        const qData = questions[Math.floor(Math.random() * questions.length)];

        document.getElementById('category-label').innerText = `CRITICAL: ${category.replace(/_/g, ' ')}`;
        document.getElementById('question-text').innerText = qData.q;
        const grid = document.getElementById('answer-grid');
        grid.innerHTML = "";
        
        qData.a.forEach((opt) => {
            const btn = document.createElement('button');
            btn.innerText = opt;
            btn.onclick = () => {
                if (opt === qData.correct) {
                    if (this.currentSector === 3) {
                        // CLEANUP before victory to prevent blank screen overlap
                        triviaBox.classList.add('hidden');
                        this.showVictoryScreen();
                    } else {
                        // Normal transition for Sectors 1 and 2
                        this.currentStage++;
                        const rewardAmount = Math.floor(Math.random() * (30 - 20 + 1) + 20);
                        this.player.trivium += rewardAmount;
                        this.updateHUD();
                        // Move boss back to its home
                        document.getElementById('boss-sprite-container').appendChild(bossIcon);
                        this.showFeedback(true, `Threat Neutralized! +${rewardAmount} Trivium recovered. Preparing for warp to next sector...`, "CORRECT!");
                    }
                } else {
                    this.player.food = 0; 
                    this.player.trivium = 0;
                    this.updateHUD();
                    this.showFeedback(false, "Critical failure. Simulation Reset!", "Mission Failed");
                }
            };
            grid.appendChild(btn);
        });
    },

    

    startTrivia: function(category, reward, isHard = false) {
        document.getElementById('choice-container').classList.add('hidden');
        const tBox = document.getElementById('trivia-box');
        tBox.classList.remove('hidden');
        const sourceBank = isHard ? questionBankHard : questionBank;
        const questions = sourceBank[category];
        const qData = questions[Math.floor(Math.random() * questions.length)];
        document.getElementById('category-label').innerText = category.replace(/_/g, ' ');
        document.getElementById('question-text').innerText = qData.q;
        const grid = document.getElementById('answer-grid');
        grid.innerHTML = "";

        const laserIdx = this.player.modules.findIndex(m => m?.id === 'laser');
        if (laserIdx !== -1) {
            const lBtn = document.createElement('button');
            lBtn.id = "laser-action-btn";
            lBtn.innerText = "ACTIVATE DEFENSE LASER (1-USE)";
            lBtn.onclick = () => {
                const wrong = Array.from(grid.querySelectorAll('button')).filter(b => b.innerText !== qData.correct);
                if (wrong.length > 0) wrong[Math.floor(Math.random()*wrong.length)].style.visibility = "hidden";
                this.player.modules[laserIdx] = null; 
                this.renderModules();
                lBtn.remove();
            };
            tBox.prepend(lBtn);
        }

        qData.a.forEach((opt) => {
            const btn = document.createElement('button');
            btn.innerText = opt;
            btn.onclick = () => {
                if (document.getElementById('laser-action-btn')) document.getElementById('laser-action-btn').remove();
                let isCorrect = (opt === qData.correct);
                let bonusText = "";
                let finalVal = reward.val;

                if (isCorrect && reward.type === 'Trivium' && this.player.modules.some(m => m?.id === 'accumulator')) {
                    finalVal *= 2;
                    bonusText = " (Doubled by Accumulator!)";
                }

                if (isCorrect) this.player[reward.type.toLowerCase()] += finalVal;

                let foodNet = -5;
                let triviumNet = -(5 * (this.currentSector * (this.currentSector + 1)) / 2);
                let creditNet = 0;

                this.player.modules.forEach(m => {
                    if (m?.id === 'biosphere') foodNet += 4;
                    if (m?.id === 'octopus') foodNet += 2;
                    if (m?.id === 'aardvark') creditNet += 3;
                    if (m?.id === 'content_farm') { foodNet += 2; creditNet += 4; triviumNet -= 1; }
                    if (m?.id === 'trivia_toad') { foodNet -= 1; triviumNet += 4;}
                    if (m?.id === 'bear_bot') { foodNet += 1; triviumNet += 1; creditNet += 1;}
                });

                this.player.food += foodNet;
                this.player.trivium += triviumNet;
                this.player.credits += creditNet;
                this.updateHUD();

                if (this.player.food <= 0 || this.player.trivium <= 0) {
                    this.showFeedback(false, `You ran out of Resources, and your ship drifts helplessly waiting for rescue. The correct answer was ${qData.correct}. `, "Mission Failed");
                } else {
                    this.currentStage++;
                    let msg = isCorrect ? `Correct! +${finalVal} ${reward.type}${bonusText}` : `Incorrect. The correct answer was ${qData.correct}.`;
                    this.showFeedback(isCorrect, msg, isCorrect ? "STABILIZED" : "DISSIPATED");
                }
            };
            grid.appendChild(btn);
        });
    },

    openTavern: function() {
        this.gameScreen.classList.add('hidden');
        document.getElementById('tavern-screen').classList.remove('hidden');
        const container = document.getElementById('buddy-offers');
        container.innerHTML = "";
        const available = this.buddies.filter(b => !this.player.modules.some(m => m?.id === b.id));
        const selections = available.sort(() => 0.5 - Math.random()).slice(0, 2);
        selections.forEach(buddy => {
            const div = document.createElement('div');
            div.className = 'shop-item';
            div.innerHTML = `<div style="background-image: url('${buddy.gif}'); width: 50px; height: 50px; margin: 0 auto; background-size: contain; background-repeat: no-repeat;"></div><h4>${buddy.name}</h4><p>${buddy.desc}</p><button class="buy-btn" onclick="gameState.recruitBuddy('${buddy.id}')">RECRUIT</button>`;
            container.appendChild(div);
        });
    },

    recruitBuddy: function(buddyId) {
        const buddy = this.buddies.find(b => b.id === buddyId);
        const emptySlot = this.player.modules.indexOf(null);
        if (emptySlot !== -1) {
            this.player.modules[emptySlot] = { ...buddy };
            this.renderModules();
            this.updateHUD();
            this.closeTavern(); 
        } else {
            alert("Slots full!");
        }
    },

    closeTavern: function() {
        document.getElementById('tavern-screen').classList.add('hidden');
        this.gameScreen.classList.remove('hidden');
        this.generatePlanets();
    },

    debugJumpToBoss: function() {
        // Corrected to jump to Sector 3 Boss
        this.currentSector = 3;
        this.currentStage = 10;
        this.player.food = 10;
        this.player.trivium = 10;

        const data = this.sectorData[3];
        document.body.style.backgroundImage = data.background;
        
        document.getElementById('menu-screen').classList.add('hidden');
        this.gameScreen.classList.remove('hidden');

        this.updateHUD();
        this.triggerBossEncounter();
        console.log("Debug: Warped to Sector 3 Boss.");
    },

    updateHUD: function() {
        this.player.food = Math.min(999, Math.max(0, this.player.food));
        this.player.trivium = Math.min(999, Math.max(0, this.player.trivium));
        this.player.credits = Math.min(999, Math.max(0, this.player.credits));

        document.getElementById('food-stat').innerText = this.player.food;
        document.getElementById('trivium-stat').innerText = this.player.trivium;
        document.getElementById('credits-stat').innerText = this.player.credits;

        const sectorSpan = document.getElementById('current-sector');
        if (sectorSpan) {
            sectorSpan.innerText = this.currentSector === 1 ? "SOL SYSTEM" : this.currentSector === 2 ? "MILKY WAY" : "GALACTIC CORE";
        }
        document.getElementById('current-stage').innerText = this.currentStage;
        
        let triviumNet = -(5 * (this.currentSector * (this.currentSector + 1)) / 2); 
        let foodNet = -5;
        let creditNet = 0;

        this.player.modules.forEach(m => { 
            if (m) {
                if (m.id === 'biosphere') foodNet += 4; 
                if (m.id === 'octopus') foodNet += 2;
                if (m.id === 'aardvark') creditNet += 3;
                if (m.id === 'content_farm') { foodNet += 2; creditNet += 4; triviumNet -= 1; }
                if (m.id === 'bear_bot') { foodNet += 1; triviumNet += 1; creditNet += 1;}
                if (m.id === 'trivia_toad') { foodNet -= 1; triviumNet += 4; }
            }
        });

        const fCostEl = document.getElementById('food-cost');
        const tCostEl = document.getElementById('trivium-cost');
        const cGainEl = document.getElementById('credit-gain');
        const formatNet = (val) => (val >= 0 ? `+${val}` : `${val}`);

        if (fCostEl) { fCostEl.innerText = `${formatNet(foodNet)} FOOD`; fCostEl.style.color = foodNet >= 0 ? "#00ff88" : "#ff4444"; }
        if (tCostEl) { tCostEl.innerText = `${formatNet(triviumNet)} TRIVIUM`; tCostEl.style.color = triviumNet >= 0 ? "#00ff88" : "#ff4444"; }
        if (cGainEl) { cGainEl.innerText = `${formatNet(creditNet)} CREDITS`; cGainEl.style.color = creditNet > 0 ? "#00f2ff" : "#888"; }
    },

    returnToMenu: function() {
        location.reload();
    }
};

window.onload = () => gameState.init();