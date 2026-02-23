const questionBank = {
    Ancient_History: [
        { q: "Which Pharaoh's tomb was discovered nearly intact by Howard Carter in 1922?", a: ["Ramses II", "Tutankhamun", "Akhenaten", "Thutmose III"], correct: "Tutankhamun" },
        { q: "The Punic Wars were fought between Rome and which other Mediterranean power?", a: ["Persia", "Greece", "Carthage", "Egypt"], correct: "Carthage" },
        { q: "Which Mesopotamian king is credited with one of the earliest written legal codes?", a: ["Nebuchadnezzar", "Hammurabi", "Gilgamesh", "Sargon"], correct: "Hammurabi" },
        { q: "What was the primary language spoken in the Roman Empire?", a: ["Greek", "Aramaic", "Latin", "Etruscan"], correct: "Latin" },
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
        { q: "What is the common name for Sodium Chloride?", a: ["Salt", "Sugar", "Baking Soda", "Bleach"], correct: "Salt" },
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
        { q: "What is the highest-grossing film of all time (not adjusted for inflation)?", a: ["Avengers: Endgame", "Titanic", "Avatar", "Star Wars: The Force Awakens"], correct: "Avatar" },
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
        { q: "Medusa was one of three sisters known as what?", a: ["Gorgons", "Furies", "Graces", "Fates"], correct: "Gorgons" }
    ],
    Technology: [
        { q: "Who is often called the 'Father of the Computer'?", a: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], correct: "Charles Babbage" },
        { q: "In what year was the first iPhone released?", a: ["2005", "2010", "2007", "2008"], correct: "2007" },
        { q: "What does 'URL' stand for?", a: ["Uniform Resource Locator", "Universal Radio Link", "User Response Line", "Unique Remote Log"], correct: "Uniform Resource Locator" },
        { q: "Which company developed the Android operating system?", a: ["Apple", "Google", "Microsoft", "Samsung"], correct: "Google" },
        { q: "What is the main language used for styling web pages?", a: ["HTML", "CSS", "JavaScript", "Python"], correct: "CSS" },
        { q: "Which computer part is considered the 'brains' of the system?", a: ["CPU", "RAM", "GPU", "Hard Drive"], correct: "CPU" },
        { q: "What does 'Wi-Fi' stand for?", a: ["Wide Field", "Wire-Free", "Wireless Fidelity", "Wireless Fiber"], correct: "Wireless Fidelity" },
        { q: "Who co-founded Microsoft alongside Bill Gates?", a: ["Steve Wozniak", "Paul Allen", "Larry Page", "Jeff Bezos"], correct: "Paul Allen" },
        { q: "What is the most popular programming language as of recent industry surveys?", a: ["C++", "JavaScript", "COBOL", "Ruby"], correct: "JavaScript" },
        { q: "What was the first social media site to reach one million monthly active users?", a: ["Facebook", "Friendster", "MySpace", "LinkedIn"], correct: "MySpace" }
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
        { q: "Which city is hosting the 2024 Summer Olympics?", a: ["Tokyo", "Paris", "Los Angeles", "London"], correct: "Paris" }
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
        { q: "Scoville units are used to measure the heat of what?", a: ["Hot Sauces", "Chili Peppers", "Curry", "Ginger"], correct: "Chili Peppers" },
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
        { q: "What is the currency of the European Union?", a: ["Pound", "Franc", "Euro", "Mark"], correct: "Euro" },
        { q: "Who is the CEO of Berkshire Hathaway?", a: ["Warren Buffett", "Charlie Munger", "Tim Cook", "Ray Dalio"], correct: "Warren Buffett" },
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
    ]
};

const gameState = {
    // 1. DATA TRACKING
    player: {
        name: "",
        food: 0,
        trivium: 0,
        credits: 0,
        type: "",
        modules: [null, null, null, null, null, null]
    },
    currentStage: 1,
    categories: [
        "Ancient_History", "Biology", "World_Geography", "Literature", 
        "Art_History", "Music", "Chemistry", "Movies", "Mythology", 
        "Technology", "Sports", "Philosophy", "Food_and_Drink", 
        "Politics", "Space_Exploration", "Language", "Business", 
        "Geology", "Psychology", "Modern_History"
    ],

    // Module Definitions
    shopModules: [
        { id: 'accumulator', name: "Adv. Accumulator", cost: 15, desc: "50% chance to double rewards.", icon: "✨" },
        { id: 'laser', name: "Defense Laser", cost: 5, desc: "1-Use: Remove a wrong answer.", icon: "🔫" },
        { id: 'biosphere', name: "Biosphere", cost: 10, desc: "Reduces jump food cost by 4.", icon: "🌿" }
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
        this.introScreen.onclick = () => this.skipIntro();
        this.introTimer = setTimeout(() => {
            this.showMenu();
        }, 9000);
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
        if (choice === 'latke') {
            this.player = { name: "Latke", food: 20, trivium: 10, credits: 0, type: "latke", modules: [null, null, null, null, null, null] };
        } else {
            this.player = { name: "Glenn", food: 10, trivium: 20, credits: 0, type: "glenn", modules: [null, null, null, null, null, null] };
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

    // --- SHOP LOGIC ---
    // Inside gameState...

openShop: function() {
    this.gameScreen.classList.add('hidden');
    this.shopScreen.classList.remove('hidden');
    
    const container = document.getElementById('shop-offers');
    container.innerHTML = "";
    
    // Pick 2 random modules for this visit
    const shuffled = [...this.shopModules].sort(() => 0.5 - Math.random());
    const selections = shuffled.slice(0, 2);

    selections.forEach((mod, index) => {
        const canAfford = this.player.credits >= mod.cost;
        const item = document.createElement('div');
        // Give it a unique ID so we can target it during purchase
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
        // 1. Process the transaction
        this.player.credits -= mod.cost;
        this.player.modules[emptySlot] = { ...mod }; 
        
        // 2. Update the UI
        this.renderModules();
        this.updateHUD();

        // 3. Clear the shop slot so it stays empty
        const itemDiv = document.getElementById(`shop-item-${shopIndex}`);
        if (itemDiv) {
            itemDiv.innerHTML = `<div class="sold-out">SOLD OUT</div>`;
            itemDiv.style.opacity = "0.5";
            itemDiv.style.borderStyle = "dashed";
        }
    } else if (emptySlot === -1) {
        alert("No module slots available! Sell or replace a module first.");
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
                    slot.innerText = mod.icon;
                    slot.setAttribute('data-tooltip', mod.name);
                } else {
                    slot.classList.remove('equipped');
                    slot.innerText = "";
                    slot.setAttribute('data-tooltip', "Empty Slot");
                }
            }
        });
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
        
        if (this.player.food <= 0 || this.player.trivium <= 0) {
            this.returnToMenu();
        } 
        else if (this.currentStage === 5 || this.currentStage === 9) {
            this.openShop();
        }
        else if (this.currentStage > 10) {
            this.showFeedback(true, "Sol System Cleared. Engaging Hyperdrive...", "VICTORY");
            this.currentStage = 1;
        } 
        else {
            this.generatePlanets();
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

            const card = document.createElement('div');
            card.className = 'planet-card';
            card.innerHTML = `
                <h3>${cat.replace(/_/g, ' ')} Node</h3>
                <span class="reward-tag">+${amount} ${resType}</span>
            `;
            card.onclick = () => this.startTrivia(cat, {type: resType, val: amount});
            container.appendChild(card);
        }
    },

    startTrivia: function(category, reward) {
        document.getElementById('choice-container').classList.add('hidden');
        const tBox = document.getElementById('trivia-box');
        tBox.classList.remove('hidden');
        
        const questions = questionBank[category];
        const qData = questions[Math.floor(Math.random() * questions.length)];
        
        document.getElementById('category-label').innerText = category.replace(/_/g, ' ');
        document.getElementById('question-text').innerText = qData.q;
        
        const grid = document.getElementById('answer-grid');
        grid.innerHTML = "";

        // Defense Laser Logic
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

                // Accumulator Logic
                if (isCorrect && this.player.modules.some(m => m?.id === 'accumulator')) {
                    if (Math.random() > 0.5) {
                        finalVal *= 2;
                        bonusText = " (ACCUMULATOR DOUBLED!)";
                    }
                }

                if (isCorrect) {
                    this.player[reward.type.toLowerCase()] += finalVal;
                }

                // Biosphere Logic (Drain Calculation)
                let foodDrain = 5;
                this.player.modules.forEach(m => { if(m?.id === 'biosphere') foodDrain -= 4; });
                
                this.player.food -= Math.max(0, foodDrain);
                this.player.trivium -= 5;
                this.updateHUD();

                if (this.player.food <= 0 || this.player.trivium <= 0) {
                    const cause = this.player.food <= 0 ? "starving to death" : "running out of brain fuel";
                    this.showFeedback(false, `You drifted into the void while ${cause}. Stagnant Earth awaits your return.`, "MISSION ABORTED");
                } else {
                    this.currentStage++;
                    let msg = isCorrect ? `Correct! +${finalVal} ${reward.type}${bonusText}` : `Incorrect. The correct answer was ${qData.correct}.`;
                    this.showFeedback(isCorrect, msg, isCorrect ? "STABILIZED" : "DISSIPATED");
                }
            };
            grid.appendChild(btn);
        });
    },

    updateHUD: function() {
        const foodEl = document.getElementById('food-stat');
        const trivEl = document.getElementById('trivium-stat');
        const credEl = document.getElementById('credits-stat');

        foodEl.innerText = this.player.food;
        trivEl.innerText = this.player.trivium;
        credEl.innerText = this.player.credits;

        this.player.food <= 10 ? foodEl.classList.add('low-resource') : foodEl.classList.remove('low-resource');
        this.player.trivium <= 10 ? trivEl.classList.add('low-resource') : trivEl.classList.remove('low-resource');
    },

    returnToMenu: function() {
        this.gameScreen.classList.add('hidden');
        this.menuScreen.classList.remove('hidden');
    }
};

window.onload = () => gameState.init();

