// MindClimber — USA Edition question bank
// 1064 questions across 9 categories (easy / medium / hard).
// Facts checked against trusted U.S. sources, including: USCIS 2025 Civics Test (uscis.gov),
// NASA (science.nasa.gov, spaceplace.nasa.gov), National Park Service (nps.gov), NOAA, Smithsonian,
// Library of Congress, National Archives, the Pulitzer Prizes, the Academy of Motion Picture Arts and
// Sciences, the American Film Institute, the Rock & Roll Hall of Fame, the American Psychological
// Association, and official league records (NFL, MLB, NBA, NHL).
// Image Recognition: world flags plus real country maps drawn from Natural Earth data (public domain).
// Format: q = question, o = three options, a = correct option letter, img = optional local image.

window.QUESTION_CATEGORIES = [
  "History & Mythology",
  "Geography",
  "Science & Nature",
  "Arts & Literature",
  "Entertainment & Pop Culture",
  "Sports",
  "Psychology & Human Behavior",
  "Image Recognition",
  "ONLY USA"
];

window.QUESTION_BANK = {
 "History & Mythology": {
  "easy": [
   {
    "q": "Who was the first President of the United States?",
    "o": [
     "John Adams",
     "George Washington",
     "Thomas Jefferson"
    ],
    "a": "B"
   },
   {
    "q": "In what year was the Declaration of Independence adopted?",
    "o": [
     "1812",
     "1776",
     "1787"
    ],
    "a": "B"
   },
   {
    "q": "Who was president during the Civil War?",
    "o": [
     "Ulysses S. Grant",
     "Andrew Johnson",
     "Abraham Lincoln"
    ],
    "a": "C"
   },
   {
    "q": "Which ship carried the Pilgrims to America in 1620?",
    "o": [
     "Santa María",
     "Endeavour",
     "Mayflower"
    ],
    "a": "C"
   },
   {
    "q": "Which ancient civilization built the pyramids of Giza?",
    "o": [
     "Egyptians",
     "Romans",
     "Aztecs"
    ],
    "a": "A"
   },
   {
    "q": "Who was the first person to walk on the Moon?",
    "o": [
     "John Glenn",
     "Neil Armstrong",
     "Buzz Aldrin"
    ],
    "a": "B"
   },
   {
    "q": "Which country gave the Statue of Liberty to the United States?",
    "o": [
     "England",
     "Spain",
     "France"
    ],
    "a": "C"
   },
   {
    "q": "Who delivered the \"I Have a Dream\" speech in 1963?",
    "o": [
     "John F. Kennedy",
     "Martin Luther King Jr.",
     "Malcolm X"
    ],
    "a": "B"
   },
   {
    "q": "In Greek mythology, who is the king of the gods?",
    "o": [
     "Zeus",
     "Poseidon",
     "Apollo"
    ],
    "a": "A"
   },
   {
    "q": "What wooden trick did the Greeks use to get inside Troy?",
    "o": [
     "A secret tunnel",
     "The Trojan Horse",
     "A giant ladder"
    ],
    "a": "B"
   },
   {
    "q": "Which war did the United States fight against Great Britain from 1775 to 1783?",
    "o": [
     "Civil War",
     "War of 1812",
     "Revolutionary War"
    ],
    "a": "C"
   },
   {
    "q": "Which famous ship sank on its maiden voyage in 1912?",
    "o": [
     "Britannic",
     "Lusitania",
     "Titanic"
    ],
    "a": "C"
   },
   {
    "q": "Which Egyptian queen was famously linked to Julius Caesar and Mark Antony?",
    "o": [
     "Nefertiti",
     "Cleopatra",
     "Hatshepsut"
    ],
    "a": "B"
   },
   {
    "q": "Who was the Greek god of the sea?",
    "o": [
     "Ares",
     "Hades",
     "Poseidon"
    ],
    "a": "C"
   },
   {
    "q": "Which wall, a symbol of the Cold War, fell in 1989?",
    "o": [
     "Hadrian's Wall",
     "Great Wall of China",
     "Berlin Wall"
    ],
    "a": "C"
   },
   {
    "q": "In Norse mythology, which god carries a hammer called Mjölnir?",
    "o": [
     "Loki",
     "Thor",
     "Odin"
    ],
    "a": "B"
   },
   {
    "q": "Which explorer's 1492 voyage reached the Americas?",
    "o": [
     "Vasco da Gama",
     "Ferdinand Magellan",
     "Christopher Columbus"
    ],
    "a": "C"
   },
   {
    "q": "Who was the British prime minister during most of World War II?",
    "o": [
     "Winston Churchill",
     "Neville Chamberlain",
     "Clement Attlee"
    ],
    "a": "A"
   },
   {
    "q": "Which city was the capital of the Roman Empire?",
    "o": [
     "Athens",
     "Rome",
     "Carthage"
    ],
    "a": "B"
   },
   {
    "q": "What attack on December 7, 1941, brought the U.S. into World War II?",
    "o": [
     "Midway",
     "Pearl Harbor",
     "D-Day"
    ],
    "a": "B"
   },
   {
    "q": "Which hero of Greek myth performed twelve labors?",
    "o": [
     "Perseus",
     "Jason",
     "Heracles (Hercules)"
    ],
    "a": "C"
   },
   {
    "q": "Who was the French emperor defeated at Waterloo in 1815?",
    "o": [
     "Charlemagne",
     "Napoleon Bonaparte",
     "Louis XIV"
    ],
    "a": "B"
   },
   {
    "q": "What was the name of the NASA program that landed astronauts on the Moon?",
    "o": [
     "Gemini",
     "Mercury",
     "Apollo"
    ],
    "a": "C"
   },
   {
    "q": "Which amendment to the U.S. Constitution abolished slavery?",
    "o": [
     "13th Amendment",
     "1st Amendment",
     "19th Amendment"
    ],
    "a": "A"
   },
   {
    "q": "Which Greek goddess is associated with wisdom and the city of Athens?",
    "o": [
     "Hera",
     "Athena",
     "Aphrodite"
    ],
    "a": "B"
   },
   {
    "q": "In which country did the samurai serve as warriors?",
    "o": [
     "Korea",
     "Japan",
     "China"
    ],
    "a": "B"
   },
   {
    "q": "What was the name of the famous U.S. document signed by delegates in 1787?",
    "o": [
     "The Mayflower Compact",
     "The Emancipation Proclamation",
     "The Constitution"
    ],
    "a": "C"
   },
   {
    "q": "Which ancient wonder stood in the city of Babylon?",
    "o": [
     "Lighthouse of Alexandria",
     "Hanging Gardens",
     "Colossus of Rhodes"
    ],
    "a": "B"
   },
   {
    "q": "Who led the Continental Army during the American Revolution?",
    "o": [
     "Benjamin Franklin",
     "George Washington",
     "Alexander Hamilton"
    ],
    "a": "B"
   },
   {
    "q": "Which empire was ruled by Genghis Khan?",
    "o": [
     "Persian Empire",
     "Mongol Empire",
     "Ottoman Empire"
    ],
    "a": "B"
   },
   {
    "q": "What did the 19th Amendment give American women in 1920?",
    "o": [
     "The right to own land",
     "The right to vote",
     "The right to serve in Congress"
    ],
    "a": "B"
   },
   {
    "q": "In Roman mythology, what was the name of the god of war?",
    "o": [
     "Mercury",
     "Mars",
     "Jupiter"
    ],
    "a": "B"
   },
   {
    "q": "Which famous speech begins \"Four score and seven years ago\"?",
    "o": [
     "Gettysburg Address",
     "First Inaugural Address",
     "Farewell Address"
    ],
    "a": "A"
   },
   {
    "q": "Which ancient Greek city-state was famous for its warriors?",
    "o": [
     "Sparta",
     "Athens",
     "Corinth"
    ],
    "a": "A"
   },
   {
    "q": "Which U.S. president delivered the \"Emancipation Proclamation\"?",
    "o": [
     "Abraham Lincoln",
     "James Monroe",
     "Andrew Jackson"
    ],
    "a": "A"
   },
   {
    "q": "What creature in Greek myth had snakes for hair?",
    "o": [
     "The Sphinx",
     "Medusa",
     "The Hydra"
    ],
    "a": "B"
   },
   {
    "q": "Which empire was ruled by Julius Caesar?",
    "o": [
     "Roman",
     "Persian",
     "Greek"
    ],
    "a": "A"
   },
   {
    "q": "In what year did World War II end in Europe (V-E Day)?",
    "o": [
     "1944",
     "1946",
     "1945"
    ],
    "a": "C"
   },
   {
    "q": "Which U.S. President resigned because of the Watergate scandal?",
    "o": [
     "Gerald Ford",
     "Richard Nixon",
     "Lyndon B. Johnson"
    ],
    "a": "B"
   }
  ],
  "medium": [
   {
    "q": "Who was the principal author of the Declaration of Independence?",
    "o": [
     "Benjamin Franklin",
     "Thomas Jefferson",
     "John Adams"
    ],
    "a": "B"
   },
   {
    "q": "Which U.S. president bought the Louisiana Territory from France in 1803?",
    "o": [
     "John Adams",
     "Thomas Jefferson",
     "James Madison"
    ],
    "a": "B"
   },
   {
    "q": "What was the name of the Allied invasion of Normandy on June 6, 1944?",
    "o": [
     "Operation Barbarossa",
     "D-Day",
     "Battle of the Bulge"
    ],
    "a": "B"
   },
   {
    "q": "Which battle in 1863 is often called the turning point of the Civil War?",
    "o": [
     "Gettysburg",
     "Bull Run",
     "Antietam"
    ],
    "a": "A"
   },
   {
    "q": "Who wrote the famous pamphlet \"Common Sense\" in 1776?",
    "o": [
     "Thomas Paine",
     "Patrick Henry",
     "Samuel Adams"
    ],
    "a": "A"
   },
   {
    "q": "In Egyptian mythology, which god had the head of a jackal?",
    "o": [
     "Horus",
     "Ra",
     "Anubis"
    ],
    "a": "C"
   },
   {
    "q": "Which president led the U.S. through the Great Depression and most of World War II?",
    "o": [
     "Herbert Hoover",
     "Franklin D. Roosevelt",
     "Harry S. Truman"
    ],
    "a": "B"
   },
   {
    "q": "What was the Underground Railroad?",
    "o": [
     "The first U.S. subway",
     "A network helping enslaved people escape",
     "A Civil War supply line"
    ],
    "a": "B"
   },
   {
    "q": "Which woman refused to give up her bus seat in Montgomery, Alabama, in 1955?",
    "o": [
     "Sojourner Truth",
     "Rosa Parks",
     "Harriet Tubman"
    ],
    "a": "B"
   },
   {
    "q": "Who was the Greek hero who killed the Minotaur?",
    "o": [
     "Theseus",
     "Odysseus",
     "Achilles"
    ],
    "a": "A"
   },
   {
    "q": "Which general accepted Robert E. Lee's surrender at Appomattox in 1865?",
    "o": [
     "Ulysses S. Grant",
     "William T. Sherman",
     "George McClellan"
    ],
    "a": "A"
   },
   {
    "q": "Which document from 1215 limited the power of the English king?",
    "o": [
     "Treaty of Paris",
     "Magna Carta",
     "Bill of Rights"
    ],
    "a": "B"
   },
   {
    "q": "What was the first permanent English settlement in America?",
    "o": [
     "Jamestown",
     "Plymouth",
     "Roanoke"
    ],
    "a": "A"
   },
   {
    "q": "Which explorers led the 1804–1806 expedition to the Pacific Northwest?",
    "o": [
     "Marquette and Joliet",
     "Lewis and Clark",
     "Daniel Boone and Davy Crockett"
    ],
    "a": "B"
   },
   {
    "q": "Who was the Shoshone woman who guided the Lewis and Clark expedition?",
    "o": [
     "Pocahontas",
     "Sacagawea",
     "Sitting Bull"
    ],
    "a": "B"
   },
   {
    "q": "In Greek mythology, who stole fire from the gods and gave it to humans?",
    "o": [
     "Hermes",
     "Prometheus",
     "Atlas"
    ],
    "a": "B"
   },
   {
    "q": "Which Soviet leader was in power during the Cuban Missile Crisis?",
    "o": [
     "Nikita Khrushchev",
     "Leonid Brezhnev",
     "Joseph Stalin"
    ],
    "a": "A"
   },
   {
    "q": "Which war was fought between the U.S. and Great Britain from 1812 to 1815?",
    "o": [
     "Seven Years' War",
     "War of 1812",
     "Mexican–American War"
    ],
    "a": "B"
   },
   {
    "q": "Which U.S. state was purchased from Russia in 1867?",
    "o": [
     "Alaska",
     "Hawaii",
     "Washington"
    ],
    "a": "A"
   },
   {
    "q": "What was the name of the plan to rebuild Western Europe after World War II?",
    "o": [
     "New Deal",
     "Truman Doctrine",
     "Marshall Plan"
    ],
    "a": "C"
   },
   {
    "q": "Which famous female aviator disappeared over the Pacific in 1937?",
    "o": [
     "Amelia Earhart",
     "Sally Ride",
     "Bessie Coleman"
    ],
    "a": "A"
   },
   {
    "q": "Who was the first woman appointed to the U.S. Supreme Court?",
    "o": [
     "Ruth Bader Ginsburg",
     "Sonia Sotomayor",
     "Sandra Day O'Connor"
    ],
    "a": "C"
   },
   {
    "q": "In Norse mythology, what is the name of the great hall of slain warriors?",
    "o": [
     "Asgard",
     "Valhalla",
     "Midgard"
    ],
    "a": "B"
   },
   {
    "q": "Which ancient city was buried by the eruption of Mount Vesuvius in 79 AD?",
    "o": [
     "Sparta",
     "Pompeii",
     "Troy"
    ],
    "a": "B"
   },
   {
    "q": "Which Roman general crossed the Rubicon in 49 BC?",
    "o": [
     "Pompey",
     "Julius Caesar",
     "Mark Antony"
    ],
    "a": "B"
   },
   {
    "q": "What was the name of the 1950s–60s space race rival of the United States?",
    "o": [
     "China",
     "Soviet Union",
     "Germany"
    ],
    "a": "B"
   },
   {
    "q": "Which Carthaginian general crossed the Alps with elephants?",
    "o": [
     "Scipio",
     "Hannibal",
     "Hamilcar"
    ],
    "a": "B"
   },
   {
    "q": "Who was the first U.S. president to live in the White House?",
    "o": [
     "Thomas Jefferson",
     "John Adams",
     "George Washington"
    ],
    "a": "B"
   },
   {
    "q": "Which famous 1773 protest took place in Boston Harbor?",
    "o": [
     "Stamp Act Riot",
     "Boston Massacre",
     "Boston Tea Party"
    ],
    "a": "C"
   },
   {
    "q": "Which Greek hero's only weak spot was his heel?",
    "o": [
     "Hector",
     "Ajax",
     "Achilles"
    ],
    "a": "C"
   },
   {
    "q": "Which Chinese dynasty built most of the Great Wall that stands today?",
    "o": [
     "Ming dynasty",
     "Tang dynasty",
     "Qin dynasty"
    ],
    "a": "A"
   },
   {
    "q": "Who was the first American to orbit the Earth, in 1962?",
    "o": [
     "Alan Shepard",
     "John Glenn",
     "Gus Grissom"
    ],
    "a": "B"
   },
   {
    "q": "Which president signed the Civil Rights Act of 1964?",
    "o": [
     "Lyndon B. Johnson",
     "Richard Nixon",
     "John F. Kennedy"
    ],
    "a": "A"
   },
   {
    "q": "Which American inventor is credited with the practical light bulb and the phonograph?",
    "o": [
     "Thomas Edison",
     "Alexander Graham Bell",
     "Nikola Tesla"
    ],
    "a": "A"
   },
   {
    "q": "What name was given to the 1849 rush of settlers to California?",
    "o": [
     "Land Run",
     "Gold Rush",
     "Great Migration"
    ],
    "a": "B"
   },
   {
    "q": "In Roman mythology, what is the name of the goddess of love?",
    "o": [
     "Juno",
     "Diana",
     "Venus"
    ],
    "a": "C"
   },
   {
    "q": "Which ancient wonder was located in Alexandria, Egypt?",
    "o": [
     "Lighthouse (Pharos)",
     "Colossus of Rhodes",
     "Hanging Gardens"
    ],
    "a": "A"
   },
   {
    "q": "The Magna Carta was signed in which country?",
    "o": [
     "Spain",
     "France",
     "England"
    ],
    "a": "C"
   },
   {
    "q": "Who was the first woman to fly solo across the Atlantic Ocean?",
    "o": [
     "Harriet Quimby",
     "Bessie Coleman",
     "Amelia Earhart"
    ],
    "a": "C"
   },
   {
    "q": "Which civilization built Machu Picchu?",
    "o": [
     "Inca",
     "Aztec",
     "Maya"
    ],
    "a": "A"
   },
   {
    "q": "Who was known as the \"Maid of Orléans\"?",
    "o": [
     "Marie Antoinette",
     "Joan of Arc",
     "Catherine de' Medici"
    ],
    "a": "B"
   },
   {
    "q": "In Greek myth, who flew too close to the sun with wax wings?",
    "o": [
     "Daedalus",
     "Icarus",
     "Perseus"
    ],
    "a": "B"
   }
  ],
  "hard": [
   {
    "q": "Which Supreme Court case in 1954 ended legal segregation in public schools?",
    "o": [
     "Plessy v. Ferguson",
     "Brown v. Board of Education",
     "Marbury v. Madison"
    ],
    "a": "B"
   },
   {
    "q": "Which 1803 Supreme Court case established judicial review?",
    "o": [
     "Gibbons v. Ogden",
     "Marbury v. Madison",
     "McCulloch v. Maryland"
    ],
    "a": "B"
   },
   {
    "q": "Who was the first U.S. president to serve two non-consecutive terms?",
    "o": [
     "Grover Cleveland",
     "Martin Van Buren",
     "Benjamin Harrison"
    ],
    "a": "A"
   },
   {
    "q": "Which treaty ended the American Revolutionary War in 1783?",
    "o": [
     "Treaty of Versailles",
     "Treaty of Paris",
     "Treaty of Ghent"
    ],
    "a": "B"
   },
   {
    "q": "What was the name of the U.S. policy of containing communism announced in 1947?",
    "o": [
     "Truman Doctrine",
     "Eisenhower Doctrine",
     "Monroe Doctrine"
    ],
    "a": "A"
   },
   {
    "q": "Which battle in 1781 effectively ended major fighting in the Revolutionary War?",
    "o": [
     "Bunker Hill",
     "Saratoga",
     "Yorktown"
    ],
    "a": "C"
   },
   {
    "q": "Who was the first Chief Justice of the United States?",
    "o": [
     "Roger Taney",
     "John Marshall",
     "John Jay"
    ],
    "a": "C"
   },
   {
    "q": "What was the code name for the U.S. project that developed the atomic bomb?",
    "o": [
     "Manhattan Project",
     "Project Mercury",
     "Operation Overlord"
    ],
    "a": "A"
   },
   {
    "q": "Which compromise of 1820 admitted Missouri as a slave state and Maine as a free state?",
    "o": [
     "Missouri Compromise",
     "Compromise of 1850",
     "Great Compromise"
    ],
    "a": "A"
   },
   {
    "q": "Which 1857 Supreme Court decision ruled that enslaved people were not citizens?",
    "o": [
     "Worcester v. Georgia",
     "Plessy v. Ferguson",
     "Dred Scott v. Sandford"
    ],
    "a": "C"
   },
   {
    "q": "What was the name of the forced removal of the Cherokee people in 1838–1839?",
    "o": [
     "Trail of Tears",
     "Long Walk",
     "Great Migration"
    ],
    "a": "A"
   },
   {
    "q": "Which Egyptian pharaoh's nearly intact tomb was found by Howard Carter in 1922?",
    "o": [
     "Tutankhamun",
     "Ramesses II",
     "Khufu"
    ],
    "a": "A"
   },
   {
    "q": "Which Mesopotamian king is famous for an early written law code?",
    "o": [
     "Hammurabi",
     "Nebuchadnezzar",
     "Sargon"
    ],
    "a": "A"
   },
   {
    "q": "In Greek mythology, who was the ferryman of the dead across the river Styx?",
    "o": [
     "Charon",
     "Cerberus",
     "Hermes"
    ],
    "a": "A"
   },
   {
    "q": "Which president issued the Monroe Doctrine in 1823?",
    "o": [
     "James Madison",
     "James Monroe",
     "John Quincy Adams"
    ],
    "a": "B"
   },
   {
    "q": "Which English king was forced to sign the Magna Carta in 1215?",
    "o": [
     "King John",
     "Richard the Lionheart",
     "Henry VIII"
    ],
    "a": "A"
   },
   {
    "q": "Who was the Byzantine emperor who built the Hagia Sophia?",
    "o": [
     "Theodosius I",
     "Constantine the Great",
     "Justinian I"
    ],
    "a": "C"
   },
   {
    "q": "Which battle in 1066 made William the Conqueror king of England?",
    "o": [
     "Battle of Hastings",
     "Battle of Bosworth",
     "Battle of Agincourt"
    ],
    "a": "A"
   },
   {
    "q": "What was the name of Martin Luther's 1517 list of arguments against the Church?",
    "o": [
     "The Institutes",
     "The Articles of Confederation",
     "The Ninety-five Theses"
    ],
    "a": "C"
   },
   {
    "q": "Which Aztec ruler met the Spanish conquistador Hernán Cortés?",
    "o": [
     "Atahualpa",
     "Moctezuma II",
     "Cuauhtémoc"
    ],
    "a": "B"
   },
   {
    "q": "Which state was the first to ratify the U.S. Constitution?",
    "o": [
     "Virginia",
     "Delaware",
     "Pennsylvania"
    ],
    "a": "B"
   },
   {
    "q": "What name is given to the Norse \"twilight of the gods,\" the end of the world?",
    "o": [
     "Bifröst",
     "Ragnarök",
     "Yggdrasil"
    ],
    "a": "B"
   },
   {
    "q": "Which Greek historian is often called the \"Father of History\"?",
    "o": [
     "Plutarch",
     "Thucydides",
     "Herodotus"
    ],
    "a": "C"
   },
   {
    "q": "Which Spartan king led the 300 at Thermopylae in 480 BC?",
    "o": [
     "Lycurgus",
     "Leonidas",
     "Agis"
    ],
    "a": "B"
   },
   {
    "q": "Which U.S. president was the only one to resign from office?",
    "o": [
     "Bill Clinton",
     "Richard Nixon",
     "Andrew Johnson"
    ],
    "a": "B"
   },
   {
    "q": "Who was the first African American to serve on the U.S. Supreme Court?",
    "o": [
     "Ketanji Brown Jackson",
     "Thurgood Marshall",
     "Clarence Thomas"
    ],
    "a": "B"
   },
   {
    "q": "Which 1848 treaty ended the Mexican–American War?",
    "o": [
     "Gadsden Purchase",
     "Treaty of Guadalupe Hidalgo",
     "Adams–Onís Treaty"
    ],
    "a": "B"
   },
   {
    "q": "What was the name of the Egyptian sun god?",
    "o": [
     "Thoth",
     "Ra",
     "Osiris"
    ],
    "a": "B"
   },
   {
    "q": "Which Roman emperor legalized Christianity with the Edict of Milan in 313?",
    "o": [
     "Nero",
     "Augustus",
     "Constantine"
    ],
    "a": "C"
   },
   {
    "q": "Who was the only president elected to four terms?",
    "o": [
     "Woodrow Wilson",
     "Franklin D. Roosevelt",
     "Theodore Roosevelt"
    ],
    "a": "B"
   },
   {
    "q": "Which 1919 treaty formally ended World War I with Germany?",
    "o": [
     "Treaty of Versailles",
     "Treaty of Paris",
     "Treaty of Brest-Litovsk"
    ],
    "a": "A"
   },
   {
    "q": "Which woman led enslaved people to freedom and was called \"Moses\"?",
    "o": [
     "Sojourner Truth",
     "Mary McLeod Bethune",
     "Harriet Tubman"
    ],
    "a": "C"
   },
   {
    "q": "Which document created a weak national government before the Constitution?",
    "o": [
     "Federalist Papers",
     "Articles of Confederation",
     "Bill of Rights"
    ],
    "a": "B"
   },
   {
    "q": "Who was the Greek goddess of the harvest and mother of Persephone?",
    "o": [
     "Artemis",
     "Demeter",
     "Hestia"
    ],
    "a": "B"
   },
   {
    "q": "The Opium Wars were primarily fought between Britain and which country?",
    "o": [
     "Japan",
     "India",
     "China"
    ],
    "a": "C"
   },
   {
    "q": "Who was the last queen of France before the French Revolution?",
    "o": [
     "Josephine",
     "Marie Antoinette",
     "Catherine de' Medici"
    ],
    "a": "B"
   },
   {
    "q": "The Meiji Restoration modernized which country in the 19th century?",
    "o": [
     "Korea",
     "Japan",
     "China"
    ],
    "a": "B"
   },
   {
    "q": "Which battle in 1066 changed English history?",
    "o": [
     "Battle of Bosworth",
     "Battle of Agincourt",
     "Battle of Hastings"
    ],
    "a": "C"
   }
  ]
 },
 "Geography": {
  "easy": [
   {
    "q": "What is the largest ocean on Earth?",
    "o": [
     "Indian Ocean",
     "Pacific Ocean",
     "Atlantic Ocean"
    ],
    "a": "B"
   },
   {
    "q": "What is the capital of Canada?",
    "o": [
     "Vancouver",
     "Ottawa",
     "Toronto"
    ],
    "a": "B"
   },
   {
    "q": "What is the largest U.S. state by area?",
    "o": [
     "California",
     "Alaska",
     "Texas"
    ],
    "a": "B"
   },
   {
    "q": "What is the smallest U.S. state by area?",
    "o": [
     "Rhode Island",
     "Connecticut",
     "Delaware"
    ],
    "a": "A"
   },
   {
    "q": "Which river flows through Egypt?",
    "o": [
     "Amazon",
     "Tigris",
     "Nile"
    ],
    "a": "C"
   },
   {
    "q": "What is the capital of Mexico?",
    "o": [
     "Cancún",
     "Guadalajara",
     "Mexico City"
    ],
    "a": "C"
   },
   {
    "q": "On which continent is the Sahara Desert?",
    "o": [
     "Africa",
     "Asia",
     "Australia"
    ],
    "a": "A"
   },
   {
    "q": "What is the tallest mountain in the world above sea level?",
    "o": [
     "Mount Everest",
     "Mount Kilimanjaro",
     "K2"
    ],
    "a": "A"
   },
   {
    "q": "What is the capital of Japan?",
    "o": [
     "Kyoto",
     "Osaka",
     "Tokyo"
    ],
    "a": "C"
   },
   {
    "q": "Which country has the largest area in the world?",
    "o": [
     "Canada",
     "Russia",
     "China"
    ],
    "a": "B"
   },
   {
    "q": "What is the capital of Australia?",
    "o": [
     "Melbourne",
     "Canberra",
     "Sydney"
    ],
    "a": "B"
   },
   {
    "q": "Which U.S. state is made up entirely of islands?",
    "o": [
     "Alaska",
     "Florida",
     "Hawaii"
    ],
    "a": "C"
   },
   {
    "q": "Which ocean lies off the East Coast of the United States?",
    "o": [
     "Arctic Ocean",
     "Atlantic Ocean",
     "Pacific Ocean"
    ],
    "a": "B"
   },
   {
    "q": "What is the capital of Italy?",
    "o": [
     "Milan",
     "Rome",
     "Venice"
    ],
    "a": "B"
   },
   {
    "q": "Which country contains the largest share of the Amazon rainforest?",
    "o": [
     "Brazil",
     "Colombia",
     "Peru"
    ],
    "a": "A"
   },
   {
    "q": "Which country borders the United States to the north?",
    "o": [
     "Mexico",
     "Canada",
     "Greenland"
    ],
    "a": "B"
   },
   {
    "q": "What is the capital of the United Kingdom?",
    "o": [
     "London",
     "Manchester",
     "Edinburgh"
    ],
    "a": "A"
   },
   {
    "q": "How many continents are there on Earth?",
    "o": [
     "Six",
     "Five",
     "Seven"
    ],
    "a": "C"
   },
   {
    "q": "Which of the Great Lakes is the largest?",
    "o": [
     "Lake Erie",
     "Lake Michigan",
     "Lake Superior"
    ],
    "a": "C"
   },
   {
    "q": "In which U.S. state is the Grand Canyon?",
    "o": [
     "Utah",
     "Nevada",
     "Arizona"
    ],
    "a": "C"
   },
   {
    "q": "What is the capital of France?",
    "o": [
     "Paris",
     "Marseille",
     "Lyon"
    ],
    "a": "A"
   },
   {
    "q": "Which continent is also a country?",
    "o": [
     "Australia",
     "Greenland",
     "Antarctica"
    ],
    "a": "A"
   },
   {
    "q": "What is the capital of Spain?",
    "o": [
     "Madrid",
     "Seville",
     "Barcelona"
    ],
    "a": "A"
   },
   {
    "q": "Which U.S. city is known as the \"Windy City\"?",
    "o": [
     "Denver",
     "Chicago",
     "Boston"
    ],
    "a": "B"
   },
   {
    "q": "What is the capital of Germany?",
    "o": [
     "Munich",
     "Berlin",
     "Frankfurt"
    ],
    "a": "B"
   },
   {
    "q": "Which country is shaped like a boot?",
    "o": [
     "Italy",
     "Greece",
     "Portugal"
    ],
    "a": "A"
   },
   {
    "q": "Which is the coldest continent?",
    "o": [
     "Antarctica",
     "Asia",
     "Europe"
    ],
    "a": "A"
   },
   {
    "q": "What is the capital of Texas?",
    "o": [
     "Austin",
     "Dallas",
     "Houston"
    ],
    "a": "A"
   },
   {
    "q": "What is the capital of Florida?",
    "o": [
     "Tallahassee",
     "Orlando",
     "Miami"
    ],
    "a": "A"
   },
   {
    "q": "What is the capital of New York State?",
    "o": [
     "Albany",
     "New York City",
     "Buffalo"
    ],
    "a": "A"
   },
   {
    "q": "Which country has the most people in the world?",
    "o": [
     "India",
     "China",
     "United States"
    ],
    "a": "A"
   },
   {
    "q": "Which U.S. state is called the \"Sunshine State\"?",
    "o": [
     "California",
     "Arizona",
     "Florida"
    ],
    "a": "C"
   },
   {
    "q": "What is the largest country in South America?",
    "o": [
     "Argentina",
     "Brazil",
     "Peru"
    ],
    "a": "B"
   },
   {
    "q": "What is the capital of Egypt?",
    "o": [
     "Giza",
     "Alexandria",
     "Cairo"
    ],
    "a": "C"
   },
   {
    "q": "Which mountain range runs along the western U.S. and Canada?",
    "o": [
     "Andes",
     "Rocky Mountains",
     "Appalachian Mountains"
    ],
    "a": "B"
   },
   {
    "q": "What is the smallest continent by land area?",
    "o": [
     "Antarctica",
     "Europe",
     "Australia"
    ],
    "a": "C"
   }
  ],
  "medium": [
   {
    "q": "What is the longest river in the United States?",
    "o": [
     "Missouri River",
     "Mississippi River",
     "Colorado River"
    ],
    "a": "A"
   },
   {
    "q": "What is the capital of California?",
    "o": [
     "San Francisco",
     "Sacramento",
     "Los Angeles"
    ],
    "a": "B"
   },
   {
    "q": "What is the longest river in the world by most measurements?",
    "o": [
     "Amazon",
     "Yangtze",
     "Nile"
    ],
    "a": "C"
   },
   {
    "q": "Which U.S. state has the most people?",
    "o": [
     "Florida",
     "Texas",
     "California"
    ],
    "a": "C"
   },
   {
    "q": "Which country has the most natural lakes?",
    "o": [
     "Canada",
     "Russia",
     "United States"
    ],
    "a": "A"
   },
   {
    "q": "What is the tallest mountain in North America?",
    "o": [
     "Mount Whitney",
     "Denali",
     "Mount Rainier"
    ],
    "a": "B"
   },
   {
    "q": "What is the capital of Brazil?",
    "o": [
     "São Paulo",
     "Brasília",
     "Rio de Janeiro"
    ],
    "a": "B"
   },
   {
    "q": "Which river forms part of the border between the U.S. and Mexico?",
    "o": [
     "Rio Grande",
     "Colorado River",
     "Pecos River"
    ],
    "a": "A"
   },
   {
    "q": "What is the largest desert in the world, including polar deserts?",
    "o": [
     "Gobi",
     "Sahara",
     "Antarctic Desert"
    ],
    "a": "C"
   },
   {
    "q": "Which African country has the largest population?",
    "o": [
     "Nigeria",
     "Ethiopia",
     "Egypt"
    ],
    "a": "A"
   },
   {
    "q": "What is the capital of South Korea?",
    "o": [
     "Seoul",
     "Pyongyang",
     "Busan"
    ],
    "a": "A"
   },
   {
    "q": "Which U.S. state has the longest coastline?",
    "o": [
     "Florida",
     "Alaska",
     "California"
    ],
    "a": "B"
   },
   {
    "q": "Which strait separates Alaska from Russia?",
    "o": [
     "Bering Strait",
     "Strait of Gibraltar",
     "Strait of Magellan"
    ],
    "a": "A"
   },
   {
    "q": "What is the capital of Turkey?",
    "o": [
     "Istanbul",
     "Izmir",
     "Ankara"
    ],
    "a": "C"
   },
   {
    "q": "In which U.S. state is Mount Rushmore?",
    "o": [
     "South Dakota",
     "Wyoming",
     "North Dakota"
    ],
    "a": "A"
   },
   {
    "q": "Which city is located on both Europe and Asia?",
    "o": [
     "Istanbul",
     "Athens",
     "Moscow"
    ],
    "a": "A"
   },
   {
    "q": "What is the capital of Argentina?",
    "o": [
     "Córdoba",
     "Buenos Aires",
     "Montevideo"
    ],
    "a": "B"
   },
   {
    "q": "Which is the largest island in the world?",
    "o": [
     "New Guinea",
     "Greenland",
     "Borneo"
    ],
    "a": "B"
   },
   {
    "q": "What is the deepest point in the world's oceans?",
    "o": [
     "Challenger Deep (Mariana Trench)",
     "Puerto Rico Trench",
     "Tonga Trench"
    ],
    "a": "A"
   },
   {
    "q": "Which U.S. national park was the first in the world?",
    "o": [
     "Grand Canyon",
     "Yosemite",
     "Yellowstone"
    ],
    "a": "C"
   },
   {
    "q": "Which country has three capital cities: Pretoria, Cape Town and Bloemfontein?",
    "o": [
     "Namibia",
     "Botswana",
     "South Africa"
    ],
    "a": "C"
   },
   {
    "q": "What is the capital of Washington State?",
    "o": [
     "Spokane",
     "Seattle",
     "Olympia"
    ],
    "a": "C"
   },
   {
    "q": "Which body of water lies between Saudi Arabia and Africa?",
    "o": [
     "Red Sea",
     "Arabian Sea",
     "Persian Gulf"
    ],
    "a": "A"
   },
   {
    "q": "Which U.S. state is known as the \"Land of 10,000 Lakes\"?",
    "o": [
     "Wisconsin",
     "Michigan",
     "Minnesota"
    ],
    "a": "C"
   },
   {
    "q": "What is the lowest point in North America?",
    "o": [
     "Grand Canyon",
     "Death Valley",
     "Salton Sea"
    ],
    "a": "B"
   },
   {
    "q": "Which European river flows through Vienna, Budapest and Belgrade?",
    "o": [
     "Elbe",
     "Danube",
     "Rhine"
    ],
    "a": "B"
   },
   {
    "q": "What is the capital of Nevada?",
    "o": [
     "Reno",
     "Las Vegas",
     "Carson City"
    ],
    "a": "C"
   },
   {
    "q": "Which country is home to Machu Picchu?",
    "o": [
     "Chile",
     "Bolivia",
     "Peru"
    ],
    "a": "C"
   },
   {
    "q": "Which Canadian province is mostly French-speaking?",
    "o": [
     "Quebec",
     "Manitoba",
     "Ontario"
    ],
    "a": "A"
   },
   {
    "q": "What is the capital of Illinois?",
    "o": [
     "Chicago",
     "Springfield",
     "Peoria"
    ],
    "a": "B"
   },
   {
    "q": "Which country contains the ancient city of Petra?",
    "o": [
     "Israel",
     "Egypt",
     "Jordan"
    ],
    "a": "C"
   },
   {
    "q": "What is the largest lake in Africa?",
    "o": [
     "Lake Victoria",
     "Lake Malawi",
     "Lake Tanganyika"
    ],
    "a": "A"
   },
   {
    "q": "Which U.S. state has a panhandle and borders the Gulf of Mexico to the south?",
    "o": [
     "Alabama",
     "Florida",
     "Georgia"
    ],
    "a": "B"
   },
   {
    "q": "What is the capital of Pennsylvania?",
    "o": [
     "Philadelphia",
     "Pittsburgh",
     "Harrisburg"
    ],
    "a": "C"
   },
   {
    "q": "Which mountain range separates Europe from Asia?",
    "o": [
     "Alps",
     "Ural Mountains",
     "Carpathians"
    ],
    "a": "B"
   },
   {
    "q": "Which U.S. state is home to the Everglades?",
    "o": [
     "Florida",
     "Georgia",
     "Louisiana"
    ],
    "a": "A"
   },
   {
    "q": "The Andes mountains are primarily in which continent?",
    "o": [
     "Europe",
     "North America",
     "South America"
    ],
    "a": "C"
   },
   {
    "q": "Which sea is located between Europe and Africa?",
    "o": [
     "Red Sea",
     "Black Sea",
     "Mediterranean Sea"
    ],
    "a": "C"
   },
   {
    "q": "Mount Kilimanjaro is in which country?",
    "o": [
     "Tanzania",
     "Kenya",
     "Uganda"
    ],
    "a": "A"
   }
  ],
  "hard": [
   {
    "q": "What is the capital of Kentucky?",
    "o": [
     "Frankfort",
     "Louisville",
     "Lexington"
    ],
    "a": "A"
   },
   {
    "q": "Which state is the only one to border just one other state?",
    "o": [
     "Florida",
     "Maine",
     "Washington"
    ],
    "a": "B"
   },
   {
    "q": "Which U.S. state has the most counties?",
    "o": [
     "Kentucky",
     "Texas",
     "Georgia"
    ],
    "a": "B"
   },
   {
    "q": "What is the largest saltwater lake in the Western Hemisphere?",
    "o": [
     "Salton Sea",
     "Great Salt Lake",
     "Mono Lake"
    ],
    "a": "B"
   },
   {
    "q": "Which two U.S. states do not observe daylight saving time?",
    "o": [
     "Hawaii and Arizona",
     "Alaska and Hawaii",
     "Arizona and Utah"
    ],
    "a": "A"
   },
   {
    "q": "What is the capital of South Dakota?",
    "o": [
     "Rapid City",
     "Sioux Falls",
     "Pierre"
    ],
    "a": "C"
   },
   {
    "q": "Which country has the longest coastline in the world?",
    "o": [
     "Canada",
     "Australia",
     "Russia"
    ],
    "a": "A"
   },
   {
    "q": "Which river carved the Grand Canyon?",
    "o": [
     "Green River",
     "Snake River",
     "Colorado River"
    ],
    "a": "C"
   },
   {
    "q": "Which African country was formerly called Abyssinia?",
    "o": [
     "Sudan",
     "Ethiopia",
     "Somalia"
    ],
    "a": "B"
   },
   {
    "q": "What is the capital of Vermont, the least-populated state capital?",
    "o": [
     "Concord",
     "Burlington",
     "Montpelier"
    ],
    "a": "C"
   },
   {
    "q": "Which state is NOT part of the Four Corners?",
    "o": [
     "Utah",
     "New Mexico",
     "Nevada"
    ],
    "a": "C"
   },
   {
    "q": "Which U.S. city sits at the confluence of the Allegheny and Monongahela rivers?",
    "o": [
     "Pittsburgh",
     "St. Louis",
     "Cincinnati"
    ],
    "a": "A"
   },
   {
    "q": "Which is the only continent with no active volcanoes?",
    "o": [
     "Antarctica",
     "Europe",
     "Australia"
    ],
    "a": "C"
   },
   {
    "q": "Which U.S. state has the highest average elevation?",
    "o": [
     "Colorado",
     "Utah",
     "Wyoming"
    ],
    "a": "A"
   },
   {
    "q": "What is the capital of Kazakhstan?",
    "o": [
     "Tashkent",
     "Astana",
     "Almaty"
    ],
    "a": "B"
   },
   {
    "q": "Which body of water is the world's largest lake by area?",
    "o": [
     "Caspian Sea",
     "Lake Baikal",
     "Lake Superior"
    ],
    "a": "A"
   },
   {
    "q": "Which lake is the deepest in the world?",
    "o": [
     "Crater Lake",
     "Lake Baikal",
     "Lake Tanganyika"
    ],
    "a": "B"
   },
   {
    "q": "Which is the deepest lake in the United States?",
    "o": [
     "Lake Tahoe",
     "Lake Superior",
     "Crater Lake"
    ],
    "a": "C"
   },
   {
    "q": "Which country is entirely surrounded by South Africa?",
    "o": [
     "Lesotho",
     "Eswatini",
     "Botswana"
    ],
    "a": "A"
   },
   {
    "q": "What is the capital of New Zealand?",
    "o": [
     "Christchurch",
     "Auckland",
     "Wellington"
    ],
    "a": "C"
   },
   {
    "q": "Which U.S. state was once an independent country called the Republic of Texas?",
    "o": [
     "Texas",
     "Vermont",
     "California"
    ],
    "a": "A"
   },
   {
    "q": "What is the southernmost point of the 50 U.S. states?",
    "o": [
     "Ka Lae, Hawaii",
     "Brownsville, Texas",
     "Key West, Florida"
    ],
    "a": "A"
   },
   {
    "q": "Which desert covers much of southern Mongolia and northern China?",
    "o": [
     "Gobi",
     "Taklamakan",
     "Karakum"
    ],
    "a": "A"
   },
   {
    "q": "What is the capital of Montana?",
    "o": [
     "Billings",
     "Missoula",
     "Helena"
    ],
    "a": "C"
   },
   {
    "q": "Which country has the most time zones, including overseas territories?",
    "o": [
     "Russia",
     "United States",
     "France"
    ],
    "a": "C"
   },
   {
    "q": "Which U.S. state capital is the only one with three words in its name?",
    "o": [
     "Carson City",
     "Salt Lake City",
     "Jefferson City"
    ],
    "a": "B"
   },
   {
    "q": "What is the highest waterfall in the world?",
    "o": [
     "Angel Falls",
     "Niagara Falls",
     "Victoria Falls"
    ],
    "a": "A"
   },
   {
    "q": "What is the capital of Oregon?",
    "o": [
     "Portland",
     "Eugene",
     "Salem"
    ],
    "a": "C"
   },
   {
    "q": "Which waterway connects the Atlantic Ocean to the Great Lakes?",
    "o": [
     "St. Lawrence Seaway",
     "Erie Canal",
     "Hudson River"
    ],
    "a": "A"
   },
   {
    "q": "Which U.S. territory is the largest by population?",
    "o": [
     "Puerto Rico",
     "Guam",
     "U.S. Virgin Islands"
    ],
    "a": "A"
   },
   {
    "q": "What is the capital of Iowa?",
    "o": [
     "Davenport",
     "Des Moines",
     "Cedar Rapids"
    ],
    "a": "B"
   },
   {
    "q": "Which desert is the largest hot desert in the world?",
    "o": [
     "Sahara",
     "Arabian",
     "Gobi"
    ],
    "a": "A"
   },
   {
    "q": "Which strait separates Asia from North America?",
    "o": [
     "Strait of Malacca",
     "Bering Strait",
     "Strait of Gibraltar"
    ],
    "a": "B"
   }
  ]
 },
 "Science & Nature": {
  "easy": [
   {
    "q": "Which planet is known as the Red Planet?",
    "o": [
     "Mars",
     "Venus",
     "Jupiter"
    ],
    "a": "A"
   },
   {
    "q": "What gas do plants absorb from the air to make food?",
    "o": [
     "Nitrogen",
     "Oxygen",
     "Carbon dioxide"
    ],
    "a": "C"
   },
   {
    "q": "What is the chemical formula for water?",
    "o": [
     "O2",
     "CO2",
     "H2O"
    ],
    "a": "C"
   },
   {
    "q": "What is the largest planet in our solar system?",
    "o": [
     "Saturn",
     "Neptune",
     "Jupiter"
    ],
    "a": "C"
   },
   {
    "q": "Which planet is closest to the Sun?",
    "o": [
     "Mercury",
     "Venus",
     "Earth"
    ],
    "a": "A"
   },
   {
    "q": "How many legs does a spider have?",
    "o": [
     "Six",
     "Eight",
     "Ten"
    ],
    "a": "B"
   },
   {
    "q": "What is the largest organ of the human body?",
    "o": [
     "Heart",
     "Liver",
     "Skin"
    ],
    "a": "C"
   },
   {
    "q": "What is the boiling point of water at sea level in Fahrenheit?",
    "o": [
     "180°F",
     "212°F",
     "100°F"
    ],
    "a": "B"
   },
   {
    "q": "What force keeps us on the ground?",
    "o": [
     "Friction",
     "Gravity",
     "Magnetism"
    ],
    "a": "B"
   },
   {
    "q": "What is the hardest natural substance?",
    "o": [
     "Quartz",
     "Gold",
     "Diamond"
    ],
    "a": "C"
   },
   {
    "q": "Which animal is the largest mammal on Earth?",
    "o": [
     "African elephant",
     "Giraffe",
     "Blue whale"
    ],
    "a": "C"
   },
   {
    "q": "What do bees make from flower nectar?",
    "o": [
     "Honey",
     "Wax",
     "Pollen"
    ],
    "a": "A"
   },
   {
    "q": "How many bones are in the adult human body?",
    "o": [
     "180",
     "206",
     "250"
    ],
    "a": "B"
   },
   {
    "q": "What part of the plant makes food using sunlight?",
    "o": [
     "Leaves",
     "Stem",
     "Roots"
    ],
    "a": "A"
   },
   {
    "q": "What is the center of an atom called?",
    "o": [
     "Nucleus",
     "Electron",
     "Shell"
    ],
    "a": "A"
   },
   {
    "q": "Which organ pumps blood through the body?",
    "o": [
     "Heart",
     "Kidneys",
     "Lungs"
    ],
    "a": "A"
   },
   {
    "q": "What is the closest star to Earth?",
    "o": [
     "Sirius",
     "Polaris",
     "The Sun"
    ],
    "a": "C"
   },
   {
    "q": "Which planet has the most famous rings?",
    "o": [
     "Mars",
     "Saturn",
     "Mercury"
    ],
    "a": "B"
   },
   {
    "q": "What are animals that eat only plants called?",
    "o": [
     "Herbivores",
     "Omnivores",
     "Carnivores"
    ],
    "a": "A"
   },
   {
    "q": "What is the freezing point of water in Fahrenheit?",
    "o": [
     "0°F",
     "10°F",
     "32°F"
    ],
    "a": "C"
   },
   {
    "q": "Which is the fastest land animal?",
    "o": [
     "Lion",
     "Cheetah",
     "Pronghorn"
    ],
    "a": "B"
   },
   {
    "q": "What does a caterpillar turn into?",
    "o": [
     "Butterfly or moth",
     "Beetle",
     "Dragonfly"
    ],
    "a": "A"
   },
   {
    "q": "What is the name of the natural satellite that orbits Earth?",
    "o": [
     "The Moon",
     "Titan",
     "Phobos"
    ],
    "a": "A"
   },
   {
    "q": "What gas do humans need to breathe to survive?",
    "o": [
     "Helium",
     "Oxygen",
     "Carbon dioxide"
    ],
    "a": "B"
   },
   {
    "q": "What type of animal is a frog?",
    "o": [
     "Amphibian",
     "Reptile",
     "Mammal"
    ],
    "a": "A"
   },
   {
    "q": "How many planets are in our solar system?",
    "o": [
     "Eight",
     "Seven",
     "Nine"
    ],
    "a": "A"
   },
   {
    "q": "What is the main gas in Earth's atmosphere?",
    "o": [
     "Nitrogen",
     "Oxygen",
     "Argon"
    ],
    "a": "A"
   },
   {
    "q": "Which instrument measures temperature?",
    "o": [
     "Thermometer",
     "Speedometer",
     "Barometer"
    ],
    "a": "A"
   },
   {
    "q": "What is the largest bird in the world?",
    "o": [
     "Albatross",
     "Ostrich",
     "Bald eagle"
    ],
    "a": "B"
   },
   {
    "q": "What is the process by which water turns into vapor?",
    "o": [
     "Freezing",
     "Condensation",
     "Evaporation"
    ],
    "a": "C"
   },
   {
    "q": "What do we call a baby kangaroo?",
    "o": [
     "Cub",
     "Kid",
     "Joey"
    ],
    "a": "C"
   },
   {
    "q": "Which planet is known for its Great Red Spot?",
    "o": [
     "Uranus",
     "Mars",
     "Jupiter"
    ],
    "a": "C"
   },
   {
    "q": "Which part of the body contains the retina?",
    "o": [
     "Ear",
     "Eye",
     "Nose"
    ],
    "a": "B"
   },
   {
    "q": "What is the chemical symbol for gold?",
    "o": [
     "Au",
     "Ag",
     "Gd"
    ],
    "a": "A"
   },
   {
    "q": "What kind of energy comes from the Sun?",
    "o": [
     "Solar energy",
     "Geothermal energy",
     "Wind energy"
    ],
    "a": "A"
   },
   {
    "q": "What is the tallest animal in the world?",
    "o": [
     "Elephant",
     "Moose",
     "Giraffe"
    ],
    "a": "C"
   },
   {
    "q": "How many legs does an insect typically have?",
    "o": [
     "10",
     "6",
     "8"
    ],
    "a": "B"
   },
   {
    "q": "What is H2O more commonly known as?",
    "o": [
     "Water",
     "Salt",
     "Hydrogen peroxide"
    ],
    "a": "A"
   },
   {
    "q": "What force keeps planets in orbit around the Sun?",
    "o": [
     "Magnetism",
     "Friction",
     "Gravity"
    ],
    "a": "C"
   }
  ],
  "medium": [
   {
    "q": "What is the powerhouse of the cell?",
    "o": [
     "Nucleus",
     "Ribosome",
     "Mitochondria"
    ],
    "a": "C"
   },
   {
    "q": "What does DNA stand for?",
    "o": [
     "Deoxyribonucleic acid",
     "Dual nucleic acid",
     "Dinitrogen acid"
    ],
    "a": "A"
   },
   {
    "q": "What is the chemical symbol for sodium?",
    "o": [
     "So",
     "Na",
     "Sd"
    ],
    "a": "B"
   },
   {
    "q": "Which planet has the most known moons?",
    "o": [
     "Jupiter",
     "Uranus",
     "Saturn"
    ],
    "a": "C"
   },
   {
    "q": "What is the largest moon in the solar system?",
    "o": [
     "The Moon",
     "Ganymede",
     "Titan"
    ],
    "a": "B"
   },
   {
    "q": "Which blood type is known as the universal donor?",
    "o": [
     "O negative",
     "AB positive",
     "A negative"
    ],
    "a": "A"
   },
   {
    "q": "What is the speed of light, approximately?",
    "o": [
     "186,000 miles per second",
     "18,600 miles per second",
     "1,860 miles per second"
    ],
    "a": "A"
   },
   {
    "q": "Who developed the theory of general relativity?",
    "o": [
     "Niels Bohr",
     "Albert Einstein",
     "Isaac Newton"
    ],
    "a": "B"
   },
   {
    "q": "What is the most abundant element in the universe?",
    "o": [
     "Helium",
     "Oxygen",
     "Hydrogen"
    ],
    "a": "C"
   },
   {
    "q": "What is the study of earthquakes called?",
    "o": [
     "Meteorology",
     "Volcanology",
     "Seismology"
    ],
    "a": "C"
   },
   {
    "q": "Which vitamin does the human body make when exposed to sunlight?",
    "o": [
     "Vitamin A",
     "Vitamin C",
     "Vitamin D"
    ],
    "a": "C"
   },
   {
    "q": "Which gland produces insulin?",
    "o": [
     "Pituitary",
     "Pancreas",
     "Thyroid"
    ],
    "a": "B"
   },
   {
    "q": "What is the hottest planet in our solar system?",
    "o": [
     "Mercury",
     "Venus",
     "Mars"
    ],
    "a": "B"
   },
   {
    "q": "Which scientist proposed the theory of evolution by natural selection?",
    "o": [
     "Louis Pasteur",
     "Gregor Mendel",
     "Charles Darwin"
    ],
    "a": "C"
   },
   {
    "q": "What is the pH of pure water?",
    "o": [
     "7",
     "14",
     "1"
    ],
    "a": "A"
   },
   {
    "q": "Which layer of the atmosphere contains the ozone layer?",
    "o": [
     "Troposphere",
     "Mesosphere",
     "Stratosphere"
    ],
    "a": "C"
   },
   {
    "q": "What kind of rock is formed from cooled lava?",
    "o": [
     "Metamorphic",
     "Sedimentary",
     "Igneous"
    ],
    "a": "C"
   },
   {
    "q": "How many chambers does the human heart have?",
    "o": [
     "Two",
     "Four",
     "Three"
    ],
    "a": "B"
   },
   {
    "q": "Which element has the atomic number 1?",
    "o": [
     "Oxygen",
     "Helium",
     "Hydrogen"
    ],
    "a": "C"
   },
   {
    "q": "Which animal is known to have the longest lifespan among mammals?",
    "o": [
     "Elephant",
     "Galápagos tortoise",
     "Bowhead whale"
    ],
    "a": "C"
   },
   {
    "q": "What is the name of NASA's rover that landed on Mars in 2021?",
    "o": [
     "Curiosity",
     "Perseverance",
     "Opportunity"
    ],
    "a": "B"
   },
   {
    "q": "Which scientist is famous for the laws of motion and gravity?",
    "o": [
     "Galileo Galilei",
     "Isaac Newton",
     "Johannes Kepler"
    ],
    "a": "B"
   },
   {
    "q": "What is the largest artery in the human body?",
    "o": [
     "Femoral artery",
     "Carotid artery",
     "Aorta"
    ],
    "a": "C"
   },
   {
    "q": "Which moon of Saturn has a thick atmosphere?",
    "o": [
     "Mimas",
     "Titan",
     "Enceladus"
    ],
    "a": "B"
   },
   {
    "q": "What is the unit of electrical resistance?",
    "o": [
     "Ohm",
     "Ampere",
     "Volt"
    ],
    "a": "A"
   },
   {
    "q": "What type of animal is a dolphin?",
    "o": [
     "Mammal",
     "Fish",
     "Reptile"
    ],
    "a": "A"
   },
   {
    "q": "Which part of the brain controls balance and coordination?",
    "o": [
     "Cerebrum",
     "Brainstem",
     "Cerebellum"
    ],
    "a": "C"
   },
   {
    "q": "What is the process by which cells divide into two identical cells?",
    "o": [
     "Osmosis",
     "Mitosis",
     "Meiosis"
    ],
    "a": "B"
   },
   {
    "q": "Which U.S. agency tracks hurricanes through the National Hurricane Center?",
    "o": [
     "NOAA",
     "NASA",
     "EPA"
    ],
    "a": "A"
   },
   {
    "q": "What is the most common element in Earth's crust?",
    "o": [
     "Oxygen",
     "Iron",
     "Silicon"
    ],
    "a": "A"
   },
   {
    "q": "What is the name for a scientist who studies fossils?",
    "o": [
     "Archaeologist",
     "Geologist",
     "Paleontologist"
    ],
    "a": "C"
   },
   {
    "q": "Which dwarf planet was reclassified from planet status in 2006?",
    "o": [
     "Pluto",
     "Eris",
     "Ceres"
    ],
    "a": "A"
   },
   {
    "q": "What do you call animals that are active at night?",
    "o": [
     "Nocturnal",
     "Crepuscular",
     "Diurnal"
    ],
    "a": "A"
   },
   {
    "q": "What is the smallest unit of life?",
    "o": [
     "Cell",
     "Molecule",
     "Atom"
    ],
    "a": "A"
   },
   {
    "q": "Which planet spins on its side?",
    "o": [
     "Saturn",
     "Uranus",
     "Neptune"
    ],
    "a": "B"
   },
   {
    "q": "Sound travels fastest through which medium?",
    "o": [
     "Steel",
     "Water",
     "Air"
    ],
    "a": "A"
   },
   {
    "q": "What type of animal is a Komodo dragon?",
    "o": [
     "Reptile",
     "Amphibian",
     "Mammal"
    ],
    "a": "A"
   }
  ],
  "hard": [
   {
    "q": "What is the most abundant gas in the Sun?",
    "o": [
     "Oxygen",
     "Hydrogen",
     "Helium"
    ],
    "a": "B"
   },
   {
    "q": "Which element has the chemical symbol W?",
    "o": [
     "Tin",
     "Tungsten",
     "Titanium"
    ],
    "a": "B"
   },
   {
    "q": "What is the approximate age of the universe?",
    "o": [
     "100 billion years",
     "4.5 billion years",
     "13.8 billion years"
    ],
    "a": "C"
   },
   {
    "q": "Which scientist discovered penicillin in 1928?",
    "o": [
     "Jonas Salk",
     "Louis Pasteur",
     "Alexander Fleming"
    ],
    "a": "C"
   },
   {
    "q": "Who developed the first successful polio vaccine in the U.S.?",
    "o": [
     "Jonas Salk",
     "Edward Jenner",
     "Albert Sabin"
    ],
    "a": "A"
   },
   {
    "q": "What is the name of the boundary around a black hole beyond which nothing escapes?",
    "o": [
     "Singularity",
     "Event horizon",
     "Photon sphere"
    ],
    "a": "B"
   },
   {
    "q": "Which NASA telescope, launched in 2021, observes mainly in infrared light?",
    "o": [
     "Spitzer Space Telescope",
     "Hubble Space Telescope",
     "James Webb Space Telescope"
    ],
    "a": "C"
   },
   {
    "q": "What particle has no electric charge?",
    "o": [
     "Electron",
     "Neutron",
     "Proton"
    ],
    "a": "B"
   },
   {
    "q": "What is the name of the protein that carries oxygen in red blood cells?",
    "o": [
     "Hemoglobin",
     "Insulin",
     "Keratin"
    ],
    "a": "A"
   },
   {
    "q": "Which is the only mammal capable of true flight?",
    "o": [
     "Flying squirrel",
     "Sugar glider",
     "Bat"
    ],
    "a": "C"
   },
   {
    "q": "What is the densest naturally occurring element?",
    "o": [
     "Lead",
     "Osmium",
     "Gold"
    ],
    "a": "B"
   },
   {
    "q": "What is the name of the supercontinent that existed about 300 million years ago?",
    "o": [
     "Gondwana",
     "Pangaea",
     "Laurasia"
    ],
    "a": "B"
   },
   {
    "q": "Which gas makes up about 21% of Earth's atmosphere?",
    "o": [
     "Carbon dioxide",
     "Oxygen",
     "Nitrogen"
    ],
    "a": "B"
   },
   {
    "q": "What is the SI unit of force?",
    "o": [
     "Watt",
     "Joule",
     "Newton"
    ],
    "a": "C"
   },
   {
    "q": "Which mission first landed humans on the Moon, in July 1969?",
    "o": [
     "Apollo 13",
     "Gemini 7",
     "Apollo 11"
    ],
    "a": "C"
   },
   {
    "q": "What is the largest living structure on Earth?",
    "o": [
     "Amazon rainforest",
     "General Sherman tree",
     "Great Barrier Reef"
    ],
    "a": "C"
   },
   {
    "q": "Which scientist first described the three laws of planetary motion?",
    "o": [
     "Johannes Kepler",
     "Tycho Brahe",
     "Nicolaus Copernicus"
    ],
    "a": "A"
   },
   {
    "q": "What does \"RNA\" stand for?",
    "o": [
     "Reactive nitrogen acid",
     "Ribonucleic acid",
     "Ribosomal nuclear agent"
    ],
    "a": "B"
   },
   {
    "q": "Which part of the cell contains chlorophyll?",
    "o": [
     "Vacuole",
     "Chloroplast",
     "Golgi apparatus"
    ],
    "a": "B"
   },
   {
    "q": "What is the name of the closest star system to the Sun?",
    "o": [
     "Sirius",
     "Betelgeuse",
     "Alpha Centauri"
    ],
    "a": "C"
   },
   {
    "q": "What is absolute zero in degrees Celsius?",
    "o": [
     "−273.15 °C",
     "−459.67 °C",
     "−100 °C"
    ],
    "a": "A"
   },
   {
    "q": "Which element is liquid at room temperature and is a metal?",
    "o": [
     "Gallium",
     "Bromine",
     "Mercury"
    ],
    "a": "C"
   },
   {
    "q": "What type of bond involves the sharing of electron pairs between atoms?",
    "o": [
     "Hydrogen bond",
     "Ionic bond",
     "Covalent bond"
    ],
    "a": "C"
   },
   {
    "q": "Which U.S. park contains the geyser Old Faithful?",
    "o": [
     "Yosemite National Park",
     "Glacier National Park",
     "Yellowstone National Park"
    ],
    "a": "C"
   },
   {
    "q": "What is the scientific name for humans?",
    "o": [
     "Homo erectus",
     "Homo habilis",
     "Homo sapiens"
    ],
    "a": "C"
   },
   {
    "q": "What is the largest organ inside the human body?",
    "o": [
     "Lungs",
     "Liver",
     "Brain"
    ],
    "a": "B"
   },
   {
    "q": "Which planet has a day longer than its year?",
    "o": [
     "Mars",
     "Mercury",
     "Venus"
    ],
    "a": "C"
   },
   {
    "q": "Which famous NASA probes launched in 1977 are now in interstellar space?",
    "o": [
     "Pioneer 10 and 11",
     "Voyager 1 and 2",
     "Viking 1 and 2"
    ],
    "a": "B"
   },
   {
    "q": "What is the chemical formula for table salt?",
    "o": [
     "KCl",
     "NaOH",
     "NaCl"
    ],
    "a": "C"
   },
   {
    "q": "What is the name of the tallest tree species in the world?",
    "o": [
     "Coast redwood",
     "Douglas fir",
     "Giant sequoia"
    ],
    "a": "A"
   },
   {
    "q": "Which insect is responsible for spreading malaria?",
    "o": [
     "Anopheles mosquito",
     "Tsetse fly",
     "Housefly"
    ],
    "a": "A"
   },
   {
    "q": "What is the name of the layer of Earth between the crust and the core?",
    "o": [
     "Lithosphere",
     "Mantle",
     "Asthenosphere"
    ],
    "a": "B"
   },
   {
    "q": "What is the nearest large spiral galaxy to the Milky Way?",
    "o": [
     "Whirlpool",
     "Andromeda",
     "Triangulum"
    ],
    "a": "B"
   },
   {
    "q": "What unit is used to measure the loudness of sound?",
    "o": [
     "Hertz",
     "Pascal",
     "Decibel"
    ],
    "a": "C"
   },
   {
    "q": "What is the approximate speed of light in a vacuum?",
    "o": [
     "1,000,000 km/s",
     "150,000 km/s",
     "300,000 km/s"
    ],
    "a": "C"
   },
   {
    "q": "Newton's second law relates force, mass, and what?",
    "o": [
     "Velocity",
     "Momentum",
     "Acceleration"
    ],
    "a": "C"
   },
   {
    "q": "Which particle has a positive charge?",
    "o": [
     "Proton",
     "Neutron",
     "Electron"
    ],
    "a": "A"
   }
  ]
 },
 "Arts & Literature": {
  "easy": [
   {
    "q": "Who painted the \"Mona Lisa\"?",
    "o": [
     "Leonardo da Vinci",
     "Michelangelo",
     "Raphael"
    ],
    "a": "A"
   },
   {
    "q": "Who wrote \"Romeo and Juliet\"?",
    "o": [
     "Jane Austen",
     "Charles Dickens",
     "William Shakespeare"
    ],
    "a": "C"
   },
   {
    "q": "Who wrote \"The Adventures of Tom Sawyer\"?",
    "o": [
     "Mark Twain",
     "Herman Melville",
     "Jack London"
    ],
    "a": "A"
   },
   {
    "q": "Which artist painted \"The Starry Night\"?",
    "o": [
     "Vincent van Gogh",
     "Pablo Picasso",
     "Claude Monet"
    ],
    "a": "A"
   },
   {
    "q": "Who wrote the \"Harry Potter\" series?",
    "o": [
     "Suzanne Collins",
     "J.K. Rowling",
     "Stephenie Meyer"
    ],
    "a": "B"
   },
   {
    "q": "Who is the author of \"The Cat in the Hat\"?",
    "o": [
     "Maurice Sendak",
     "Dr. Seuss",
     "Eric Carle"
    ],
    "a": "B"
   },
   {
    "q": "Who painted the ceiling of the Sistine Chapel?",
    "o": [
     "Michelangelo",
     "Donatello",
     "Leonardo da Vinci"
    ],
    "a": "A"
   },
   {
    "q": "Which author created Sherlock Holmes?",
    "o": [
     "Arthur Conan Doyle",
     "Edgar Allan Poe",
     "Agatha Christie"
    ],
    "a": "A"
   },
   {
    "q": "Who wrote \"Charlotte's Web\"?",
    "o": [
     "E.B. White",
     "Roald Dahl",
     "Beverly Cleary"
    ],
    "a": "A"
   },
   {
    "q": "In \"The Wizard of Oz,\" what color is the road Dorothy follows?",
    "o": [
     "Green",
     "Yellow",
     "Red"
    ],
    "a": "B"
   },
   {
    "q": "Who wrote \"The Raven\"?",
    "o": [
     "Walt Whitman",
     "Robert Frost",
     "Edgar Allan Poe"
    ],
    "a": "C"
   },
   {
    "q": "Which American artist is known for Campbell's Soup Cans?",
    "o": [
     "Roy Lichtenstein",
     "Andy Warhol",
     "Jackson Pollock"
    ],
    "a": "B"
   },
   {
    "q": "What kind of animal is Moby Dick?",
    "o": [
     "Giant squid",
     "Shark",
     "Whale"
    ],
    "a": "C"
   },
   {
    "q": "Who wrote \"Little Women\"?",
    "o": [
     "Emily Dickinson",
     "Louisa May Alcott",
     "Harriet Beecher Stowe"
    ],
    "a": "B"
   },
   {
    "q": "Which fictional boy never grows up?",
    "o": [
     "Peter Pan",
     "Tom Sawyer",
     "Oliver Twist"
    ],
    "a": "A"
   },
   {
    "q": "What is the name of the wizard school in \"Harry Potter\"?",
    "o": [
     "Durmstrang",
     "Camp Half-Blood",
     "Hogwarts"
    ],
    "a": "C"
   },
   {
    "q": "Who wrote \"The Hunger Games\"?",
    "o": [
     "Veronica Roth",
     "Lois Lowry",
     "Suzanne Collins"
    ],
    "a": "C"
   },
   {
    "q": "In which city is the Louvre Museum?",
    "o": [
     "Rome",
     "Paris",
     "London"
    ],
    "a": "B"
   },
   {
    "q": "Who wrote \"A Christmas Carol\"?",
    "o": [
     "Charles Dickens",
     "Lewis Carroll",
     "Mark Twain"
    ],
    "a": "A"
   },
   {
    "q": "Which author wrote \"Where the Wild Things Are\"?",
    "o": [
     "Shel Silverstein",
     "Dr. Seuss",
     "Maurice Sendak"
    ],
    "a": "C"
   },
   {
    "q": "Who wrote \"Alice's Adventures in Wonderland\"?",
    "o": [
     "Lewis Carroll",
     "C.S. Lewis",
     "J.M. Barrie"
    ],
    "a": "A"
   },
   {
    "q": "What is a poem with 14 lines called?",
    "o": [
     "Haiku",
     "Sonnet",
     "Limerick"
    ],
    "a": "B"
   },
   {
    "q": "Which Greek poet is credited with the \"Iliad\" and the \"Odyssey\"?",
    "o": [
     "Virgil",
     "Sophocles",
     "Homer"
    ],
    "a": "C"
   },
   {
    "q": "Who wrote \"The Lion, the Witch and the Wardrobe\"?",
    "o": [
     "C.S. Lewis",
     "J.R.R. Tolkien",
     "Roald Dahl"
    ],
    "a": "A"
   },
   {
    "q": "Who wrote \"The Hobbit\"?",
    "o": [
     "George R.R. Martin",
     "J.R.R. Tolkien",
     "C.S. Lewis"
    ],
    "a": "B"
   },
   {
    "q": "Which art museum in New York City is known as \"the Met\"?",
    "o": [
     "Guggenheim Museum",
     "Museum of Modern Art",
     "Metropolitan Museum of Art"
    ],
    "a": "C"
   },
   {
    "q": "Who wrote \"Charlie and the Chocolate Factory\"?",
    "o": [
     "Roald Dahl",
     "E.B. White",
     "Beverly Cleary"
    ],
    "a": "A"
   },
   {
    "q": "Which Japanese form of poetry has three lines of 5, 7 and 5 syllables?",
    "o": [
     "Haiku",
     "Limerick",
     "Tanka"
    ],
    "a": "A"
   },
   {
    "q": "Who wrote \"Green Eggs and Ham\"?",
    "o": [
     "Arnold Lobel",
     "Shel Silverstein",
     "Dr. Seuss"
    ],
    "a": "C"
   },
   {
    "q": "What is the name of the bear in A.A. Milne's stories?",
    "o": [
     "Winnie-the-Pooh",
     "Baloo",
     "Paddington"
    ],
    "a": "A"
   },
   {
    "q": "Which famous Dutch artist cut off part of his own ear?",
    "o": [
     "Rembrandt",
     "Johannes Vermeer",
     "Vincent van Gogh"
    ],
    "a": "C"
   },
   {
    "q": "What is the first book of the Bible?",
    "o": [
     "Psalms",
     "Genesis",
     "Exodus"
    ],
    "a": "B"
   },
   {
    "q": "Who wrote the play \"Hamlet\"?",
    "o": [
     "Ben Jonson",
     "Christopher Marlowe",
     "William Shakespeare"
    ],
    "a": "C"
   },
   {
    "q": "Which famous statue by Michelangelo stands in Florence?",
    "o": [
     "The Thinker",
     "David",
     "Venus de Milo"
    ],
    "a": "B"
   },
   {
    "q": "Who wrote \"The Very Hungry Caterpillar\"?",
    "o": [
     "Eric Carle",
     "Dr. Seuss",
     "Mo Willems"
    ],
    "a": "A"
   },
   {
    "q": "In \"Frankenstein,\" who created the monster?",
    "o": [
     "Dr. Jekyll",
     "Dracula",
     "Victor Frankenstein"
    ],
    "a": "C"
   }
  ],
  "medium": [
   {
    "q": "Who wrote \"To Kill a Mockingbird\"?",
    "o": [
     "John Steinbeck",
     "Harper Lee",
     "Truman Capote"
    ],
    "a": "B"
   },
   {
    "q": "Who wrote \"The Great Gatsby\"?",
    "o": [
     "William Faulkner",
     "Ernest Hemingway",
     "F. Scott Fitzgerald"
    ],
    "a": "C"
   },
   {
    "q": "Who wrote \"The Grapes of Wrath\"?",
    "o": [
     "John Steinbeck",
     "Sinclair Lewis",
     "Upton Sinclair"
    ],
    "a": "A"
   },
   {
    "q": "Which American poet wrote \"The Road Not Taken\"?",
    "o": [
     "Robert Frost",
     "Langston Hughes",
     "Carl Sandburg"
    ],
    "a": "A"
   },
   {
    "q": "Who painted \"American Gothic,\" showing a farmer with a pitchfork?",
    "o": [
     "Edward Hopper",
     "Grant Wood",
     "Norman Rockwell"
    ],
    "a": "B"
   },
   {
    "q": "Who wrote \"Uncle Tom's Cabin\"?",
    "o": [
     "Frederick Douglass",
     "Harriet Beecher Stowe",
     "Louisa May Alcott"
    ],
    "a": "B"
   },
   {
    "q": "Who wrote \"The Old Man and the Sea\"?",
    "o": [
     "Jack London",
     "John Steinbeck",
     "Ernest Hemingway"
    ],
    "a": "C"
   },
   {
    "q": "Which poet wrote \"Leaves of Grass\"?",
    "o": [
     "Walt Whitman",
     "Henry Wadsworth Longfellow",
     "Emily Dickinson"
    ],
    "a": "A"
   },
   {
    "q": "Which American painter created \"Nighthawks\"?",
    "o": [
     "Andrew Wyeth",
     "Edward Hopper",
     "Georgia O'Keeffe"
    ],
    "a": "B"
   },
   {
    "q": "Who wrote the novel \"1984\"?",
    "o": [
     "George Orwell",
     "Aldous Huxley",
     "Ray Bradbury"
    ],
    "a": "A"
   },
   {
    "q": "Which artist is famous for \"drip\" paintings?",
    "o": [
     "Willem de Kooning",
     "Jackson Pollock",
     "Mark Rothko"
    ],
    "a": "B"
   },
   {
    "q": "Who wrote \"Pride and Prejudice\"?",
    "o": [
     "Charlotte Brontë",
     "Jane Austen",
     "Mary Shelley"
    ],
    "a": "B"
   },
   {
    "q": "What is the name of the narrator in \"Moby-Dick\"?",
    "o": [
     "Ishmael",
     "Queequeg",
     "Ahab"
    ],
    "a": "A"
   },
   {
    "q": "Who wrote \"The Catcher in the Rye\"?",
    "o": [
     "Jack Kerouac",
     "Kurt Vonnegut",
     "J.D. Salinger"
    ],
    "a": "C"
   },
   {
    "q": "Which American artist is famous for paintings of flowers and the New Mexico desert?",
    "o": [
     "Georgia O'Keeffe",
     "Mary Cassatt",
     "Frida Kahlo"
    ],
    "a": "A"
   },
   {
    "q": "Who wrote \"Fahrenheit 451\"?",
    "o": [
     "Philip K. Dick",
     "Isaac Asimov",
     "Ray Bradbury"
    ],
    "a": "C"
   },
   {
    "q": "Which Harlem Renaissance poet wrote \"The Negro Speaks of Rivers\"?",
    "o": [
     "Countee Cullen",
     "Claude McKay",
     "Langston Hughes"
    ],
    "a": "C"
   },
   {
    "q": "Which painter is known for \"The Persistence of Memory\" with melting clocks?",
    "o": [
     "René Magritte",
     "Salvador Dalí",
     "Joan Miró"
    ],
    "a": "B"
   },
   {
    "q": "Who wrote \"Of Mice and Men\"?",
    "o": [
     "Sinclair Lewis",
     "William Faulkner",
     "John Steinbeck"
    ],
    "a": "C"
   },
   {
    "q": "Who wrote \"Beloved,\" which won the Pulitzer Prize for Fiction?",
    "o": [
     "Maya Angelou",
     "Toni Morrison",
     "Alice Walker"
    ],
    "a": "B"
   },
   {
    "q": "Who wrote the memoir \"I Know Why the Caged Bird Sings\"?",
    "o": [
     "Zora Neale Hurston",
     "Maya Angelou",
     "Toni Morrison"
    ],
    "a": "B"
   },
   {
    "q": "Which American illustrator was famous for Saturday Evening Post covers?",
    "o": [
     "Winslow Homer",
     "Norman Rockwell",
     "Grant Wood"
    ],
    "a": "B"
   },
   {
    "q": "Which French Impressionist painted a famous series of water lilies?",
    "o": [
     "Edgar Degas",
     "Paul Cézanne",
     "Claude Monet"
    ],
    "a": "C"
   },
   {
    "q": "Who wrote \"The Scarlet Letter\"?",
    "o": [
     "Nathaniel Hawthorne",
     "Herman Melville",
     "Washington Irving"
    ],
    "a": "A"
   },
   {
    "q": "Who wrote \"The Legend of Sleepy Hollow\"?",
    "o": [
     "Washington Irving",
     "James Fenimore Cooper",
     "Edgar Allan Poe"
    ],
    "a": "A"
   },
   {
    "q": "Which Spanish artist co-founded Cubism?",
    "o": [
     "Pablo Picasso",
     "Francisco Goya",
     "Salvador Dalí"
    ],
    "a": "A"
   },
   {
    "q": "In which city is the Art Institute that owns \"American Gothic\"?",
    "o": [
     "Chicago",
     "Boston",
     "Philadelphia"
    ],
    "a": "A"
   },
   {
    "q": "Who wrote \"The Handmaid's Tale\"?",
    "o": [
     "Ursula K. Le Guin",
     "Octavia Butler",
     "Margaret Atwood"
    ],
    "a": "C"
   },
   {
    "q": "Which American author wrote \"The Call of the Wild\"?",
    "o": [
     "Jack London",
     "Mark Twain",
     "Stephen Crane"
    ],
    "a": "A"
   },
   {
    "q": "What prize is awarded yearly by Columbia University for journalism, books and music?",
    "o": [
     "Nobel Prize",
     "Booker Prize",
     "Pulitzer Prize"
    ],
    "a": "C"
   },
   {
    "q": "Which Mexican painter is famous for her self-portraits?",
    "o": [
     "Remedios Varo",
     "Diego Rivera",
     "Frida Kahlo"
    ],
    "a": "C"
   },
   {
    "q": "Who wrote \"Brave New World\"?",
    "o": [
     "George Orwell",
     "Aldous Huxley",
     "H.G. Wells"
    ],
    "a": "B"
   },
   {
    "q": "Which Shakespeare play features the characters Iago and Desdemona?",
    "o": [
     "King Lear",
     "Othello",
     "Macbeth"
    ],
    "a": "B"
   },
   {
    "q": "Who wrote \"Slaughterhouse-Five\"?",
    "o": [
     "Kurt Vonnegut",
     "Norman Mailer",
     "Joseph Heller"
    ],
    "a": "A"
   },
   {
    "q": "Which famous author wrote \"The Shining\" and \"It\"?",
    "o": [
     "Stephen King",
     "Anne Rice",
     "Dean Koontz"
    ],
    "a": "A"
   }
  ],
  "hard": [
   {
    "q": "Who was the first American to win the Nobel Prize in Literature, in 1930?",
    "o": [
     "Sinclair Lewis",
     "Ernest Hemingway",
     "William Faulkner"
    ],
    "a": "A"
   },
   {
    "q": "Which poet wrote \"Because I could not stop for Death\"?",
    "o": [
     "Elizabeth Bishop",
     "Emily Dickinson",
     "Sylvia Plath"
    ],
    "a": "B"
   },
   {
    "q": "Which novel begins with the line \"Call me Ishmael\"?",
    "o": [
     "Moby-Dick",
     "Treasure Island",
     "The Old Man and the Sea"
    ],
    "a": "A"
   },
   {
    "q": "Which American novelist wrote \"The Sound and the Fury\"?",
    "o": [
     "John Dos Passos",
     "William Faulkner",
     "Thomas Wolfe"
    ],
    "a": "B"
   },
   {
    "q": "Which Harlem Renaissance author wrote \"Their Eyes Were Watching God\"?",
    "o": [
     "Zora Neale Hurston",
     "Nella Larsen",
     "Jessie Fauset"
    ],
    "a": "A"
   },
   {
    "q": "Which American painter is known for \"Whistler's Mother\"?",
    "o": [
     "Thomas Eakins",
     "John Singer Sargent",
     "James McNeill Whistler"
    ],
    "a": "C"
   },
   {
    "q": "Who wrote \"Invisible Man\" (1952), winner of the National Book Award?",
    "o": [
     "James Baldwin",
     "Ralph Ellison",
     "Richard Wright"
    ],
    "a": "B"
   },
   {
    "q": "Which poet wrote \"Howl,\" a key work of the Beat Generation?",
    "o": [
     "Jack Kerouac",
     "Allen Ginsberg",
     "Lawrence Ferlinghetti"
    ],
    "a": "B"
   },
   {
    "q": "Which American painter created \"Christina's World\"?",
    "o": [
     "Winslow Homer",
     "Edward Hopper",
     "Andrew Wyeth"
    ],
    "a": "C"
   },
   {
    "q": "Which play by Arthur Miller is set during the Salem witch trials?",
    "o": [
     "All My Sons",
     "Death of a Salesman",
     "The Crucible"
    ],
    "a": "C"
   },
   {
    "q": "Who wrote the play \"A Streetcar Named Desire\"?",
    "o": [
     "Eugene O'Neill",
     "Tennessee Williams",
     "Edward Albee"
    ],
    "a": "B"
   },
   {
    "q": "Which Hudson River School painter created \"The Oxbow\"?",
    "o": [
     "Thomas Cole",
     "Albert Bierstadt",
     "Frederic Church"
    ],
    "a": "A"
   },
   {
    "q": "Who wrote \"Walden,\" about living simply near a pond?",
    "o": [
     "Nathaniel Hawthorne",
     "Henry David Thoreau",
     "Ralph Waldo Emerson"
    ],
    "a": "B"
   },
   {
    "q": "Which novel by Cormac McCarthy won the 2007 Pulitzer Prize for Fiction?",
    "o": [
     "Blood Meridian",
     "The Road",
     "No Country for Old Men"
    ],
    "a": "B"
   },
   {
    "q": "Which Russian author wrote \"Crime and Punishment\"?",
    "o": [
     "Fyodor Dostoevsky",
     "Leo Tolstoy",
     "Anton Chekhov"
    ],
    "a": "A"
   },
   {
    "q": "Which artist painted \"The Girl with a Pearl Earring\"?",
    "o": [
     "Johannes Vermeer",
     "Frans Hals",
     "Rembrandt"
    ],
    "a": "A"
   },
   {
    "q": "Who wrote the epic poem \"Paradise Lost\"?",
    "o": [
     "Geoffrey Chaucer",
     "John Milton",
     "Edmund Spenser"
    ],
    "a": "B"
   },
   {
    "q": "Which Italian poet wrote \"The Divine Comedy\"?",
    "o": [
     "Boccaccio",
     "Petrarch",
     "Dante Alighieri"
    ],
    "a": "C"
   },
   {
    "q": "Which pop artist painted comic-strip style works like \"Whaam!\"?",
    "o": [
     "Andy Warhol",
     "Roy Lichtenstein",
     "Keith Haring"
    ],
    "a": "B"
   },
   {
    "q": "Who wrote \"The Age of Innocence,\" the first Pulitzer-winning novel by a woman?",
    "o": [
     "Edith Wharton",
     "Pearl S. Buck",
     "Willa Cather"
    ],
    "a": "A"
   },
   {
    "q": "Which American architect designed Fallingwater?",
    "o": [
     "Frank Lloyd Wright",
     "Louis Sullivan",
     "I.M. Pei"
    ],
    "a": "A"
   },
   {
    "q": "Which architect designed the glass pyramid at the Louvre?",
    "o": [
     "Frank Gehry",
     "I.M. Pei",
     "Zaha Hadid"
    ],
    "a": "B"
   },
   {
    "q": "Who wrote the novel \"One Hundred Years of Solitude\"?",
    "o": [
     "Gabriel García Márquez",
     "Isabel Allende",
     "Jorge Luis Borges"
    ],
    "a": "A"
   },
   {
    "q": "Which Shakespeare play contains the line \"Out, damned spot!\"?",
    "o": [
     "Othello",
     "Hamlet",
     "Macbeth"
    ],
    "a": "C"
   },
   {
    "q": "Which American poet was the first U.S. Poet Laureate under the modern title (1986)?",
    "o": [
     "Richard Wilbur",
     "Robert Frost",
     "Robert Penn Warren"
    ],
    "a": "C"
   },
   {
    "q": "Who painted \"Washington Crossing the Delaware\" (1851)?",
    "o": [
     "Emanuel Leutze",
     "John Trumbull",
     "Gilbert Stuart"
    ],
    "a": "A"
   },
   {
    "q": "Who painted the unfinished portrait of George Washington used on the $1 bill?",
    "o": [
     "John Singleton Copley",
     "Charles Willson Peale",
     "Gilbert Stuart"
    ],
    "a": "C"
   },
   {
    "q": "Which author wrote \"The Jungle,\" exposing the meatpacking industry?",
    "o": [
     "Upton Sinclair",
     "Theodore Dreiser",
     "Frank Norris"
    ],
    "a": "A"
   },
   {
    "q": "Which Toni Morrison novel was her first, published in 1970?",
    "o": [
     "The Bluest Eye",
     "Sula",
     "Song of Solomon"
    ],
    "a": "A"
   },
   {
    "q": "Which novel features the character Holden Caulfield?",
    "o": [
     "On the Road",
     "A Separate Peace",
     "The Catcher in the Rye"
    ],
    "a": "C"
   },
   {
    "q": "Which Norwegian painter created \"The Scream\"?",
    "o": [
     "Edvard Munch",
     "Gustav Klimt",
     "Egon Schiele"
    ],
    "a": "A"
   },
   {
    "q": "Who composed the opera \"Porgy and Bess\"?",
    "o": [
     "Leonard Bernstein",
     "Aaron Copland",
     "George Gershwin"
    ],
    "a": "C"
   },
   {
    "q": "Which James Fenimore Cooper novel features Hawkeye and Uncas?",
    "o": [
     "The Last of the Mohicans",
     "The Deerslayer",
     "The Pioneers"
    ],
    "a": "A"
   },
   {
    "q": "Who wrote \"Things Fall Apart\"?",
    "o": [
     "Chinua Achebe",
     "Ngũgĩ wa Thiong'o",
     "Wole Soyinka"
    ],
    "a": "A"
   }
  ]
 },
 "Entertainment & Pop Culture": {
  "easy": [
   {
    "q": "Which cartoon mouse was created by Walt Disney?",
    "o": [
     "Mighty Mouse",
     "Mickey Mouse",
     "Jerry"
    ],
    "a": "B"
   },
   {
    "q": "What is the name of the toy cowboy in \"Toy Story\"?",
    "o": [
     "Jessie",
     "Buzz",
     "Woody"
    ],
    "a": "C"
   },
   {
    "q": "Which superhero is known as the \"Man of Steel\"?",
    "o": [
     "Batman",
     "Iron Man",
     "Superman"
    ],
    "a": "C"
   },
   {
    "q": "What is the name of Batman's home city?",
    "o": [
     "Metropolis",
     "Star City",
     "Gotham City"
    ],
    "a": "C"
   },
   {
    "q": "Which singer is known as the \"King of Pop\"?",
    "o": [
     "Elvis Presley",
     "Prince",
     "Michael Jackson"
    ],
    "a": "C"
   },
   {
    "q": "Which singer is known as the \"King of Rock and Roll\"?",
    "o": [
     "Elvis Presley",
     "Chuck Berry",
     "Little Richard"
    ],
    "a": "A"
   },
   {
    "q": "What color is SpongeBob SquarePants?",
    "o": [
     "Pink",
     "Blue",
     "Yellow"
    ],
    "a": "C"
   },
   {
    "q": "In \"Frozen,\" what is the name of the snowman?",
    "o": [
     "Sven",
     "Kristoff",
     "Olaf"
    ],
    "a": "C"
   },
   {
    "q": "Which family lives at 742 Evergreen Terrace?",
    "o": [
     "The Flintstones",
     "The Griffins",
     "The Simpsons"
    ],
    "a": "C"
   },
   {
    "q": "What is the name of the lion cub hero of \"The Lion King\"?",
    "o": [
     "Simba",
     "Nala",
     "Mufasa"
    ],
    "a": "A"
   },
   {
    "q": "Which British band sang \"Hey Jude\"?",
    "o": [
     "The Rolling Stones",
     "Queen",
     "The Beatles"
    ],
    "a": "C"
   },
   {
    "q": "Who lives in a pineapple under the sea?",
    "o": [
     "SpongeBob SquarePants",
     "Squidward",
     "Patrick Star"
    ],
    "a": "A"
   },
   {
    "q": "Which toy brand makes colorful interlocking plastic bricks?",
    "o": [
     "LEGO",
     "Hasbro",
     "Mattel"
    ],
    "a": "A"
   },
   {
    "q": "What is the name of Harry Potter's owl?",
    "o": [
     "Crookshanks",
     "Errol",
     "Hedwig"
    ],
    "a": "C"
   },
   {
    "q": "Which movie features a shark terrorizing Amity Island?",
    "o": [
     "The Meg",
     "Deep Blue Sea",
     "Jaws"
    ],
    "a": "C"
   },
   {
    "q": "Which character says \"To infinity and beyond!\"?",
    "o": [
     "Buzz Lightyear",
     "Woody",
     "Mr. Potato Head"
    ],
    "a": "A"
   },
   {
    "q": "What is the name of the famous plumber in Nintendo games?",
    "o": [
     "Wario",
     "Luigi",
     "Mario"
    ],
    "a": "C"
   },
   {
    "q": "Which superhero team includes Iron Man, Thor and Captain America?",
    "o": [
     "Justice League",
     "X-Men",
     "The Avengers"
    ],
    "a": "C"
   },
   {
    "q": "Which \"Star Wars\" character is a small green Jedi Master?",
    "o": [
     "R2-D2",
     "Yoda",
     "Chewbacca"
    ],
    "a": "B"
   },
   {
    "q": "What is the name of the statuette given at the Academy Awards?",
    "o": [
     "Oscar",
     "Emmy",
     "Grammy"
    ],
    "a": "A"
   },
   {
    "q": "Which TV show features friends Rachel, Ross, Monica, Chandler, Joey and Phoebe?",
    "o": [
     "Friends",
     "How I Met Your Mother",
     "Seinfeld"
    ],
    "a": "A"
   },
   {
    "q": "What is the name of the blue video game hedgehog?",
    "o": [
     "Crash",
     "Sonic",
     "Knuckles"
    ],
    "a": "B"
   },
   {
    "q": "Which animated movie features a clownfish searching for his son?",
    "o": [
     "Shark Tale",
     "The Little Mermaid",
     "Finding Nemo"
    ],
    "a": "C"
   },
   {
    "q": "Which sitcom was set in the Dunder Mifflin paper company?",
    "o": [
     "Parks and Recreation",
     "The Office",
     "30 Rock"
    ],
    "a": "B"
   },
   {
    "q": "Which fairy tale features a glass slipper?",
    "o": [
     "Snow White",
     "Cinderella",
     "Sleeping Beauty"
    ],
    "a": "B"
   },
   {
    "q": "What kind of animal is Scooby-Doo?",
    "o": [
     "Bulldog",
     "Beagle",
     "Great Dane"
    ],
    "a": "C"
   },
   {
    "q": "Which city is home to Hollywood?",
    "o": [
     "Las Vegas",
     "San Diego",
     "Los Angeles"
    ],
    "a": "C"
   },
   {
    "q": "Which Muppet is a green frog?",
    "o": [
     "Fozzie",
     "Kermit",
     "Gonzo"
    ],
    "a": "B"
   },
   {
    "q": "What video game involves building with blocks in a pixelated world?",
    "o": [
     "Tetris",
     "Fortnite",
     "Minecraft"
    ],
    "a": "C"
   },
   {
    "q": "Which \"Star Wars\" villain wears a black helmet and breathes heavily?",
    "o": [
     "Kylo Ren",
     "Darth Vader",
     "Boba Fett"
    ],
    "a": "B"
   },
   {
    "q": "What is Mickey Mouse's girlfriend's name?",
    "o": [
     "Clarabelle Cow",
     "Minnie Mouse",
     "Daisy Duck"
    ],
    "a": "B"
   },
   {
    "q": "Which pop star performed the Super Bowl LX halftime show in 2026?",
    "o": [
     "Bad Bunny",
     "Kendrick Lamar",
     "Usher"
    ],
    "a": "A"
   },
   {
    "q": "Which children's TV show is set on Sesame Street?",
    "o": [
     "Blue's Clues",
     "Sesame Street",
     "Mister Rogers' Neighborhood"
    ],
    "a": "B"
   },
   {
    "q": "What is the name of the ogre in the 2001 DreamWorks hit?",
    "o": [
     "Fiona",
     "Donkey",
     "Shrek"
    ],
    "a": "C"
   },
   {
    "q": "Which girl follows the Yellow Brick Road in \"The Wizard of Oz\"?",
    "o": [
     "Alice",
     "Wendy",
     "Dorothy"
    ],
    "a": "C"
   },
   {
    "q": "In which film does a boy befriend an alien and say \"E.T. phone home\"?",
    "o": [
     "Super 8",
     "Close Encounters of the Third Kind",
     "E.T. the Extra-Terrestrial"
    ],
    "a": "C"
   },
   {
    "q": "Which streaming service produced \"Stranger Things\"?",
    "o": [
     "Netflix",
     "Hulu",
     "Disney+"
    ],
    "a": "A"
   },
   {
    "q": "Which superhero is known as the \"Caped Crusader\"?",
    "o": [
     "Batman",
     "Superman",
     "Spider-Man"
    ],
    "a": "A"
   },
   {
    "q": "What instrument did Louis Armstrong famously play?",
    "o": [
     "Saxophone",
     "Piano",
     "Trumpet"
    ],
    "a": "C"
   },
   {
    "q": "Which animated movie features a snowman named Olaf?",
    "o": [
     "Moana",
     "Frozen",
     "Tangled"
    ],
    "a": "B"
   }
  ],
  "medium": [
   {
    "q": "Which film won the first Academy Award for Best Picture?",
    "o": [
     "The Jazz Singer",
     "Wings",
     "Sunrise"
    ],
    "a": "B"
   },
   {
    "q": "Which film is ranked #1 on AFI's list of the 100 greatest American movies?",
    "o": [
     "The Godfather",
     "Casablanca",
     "Citizen Kane"
    ],
    "a": "C"
   },
   {
    "q": "Who directed \"Jaws,\" \"E.T.\" and \"Jurassic Park\"?",
    "o": [
     "James Cameron",
     "George Lucas",
     "Steven Spielberg"
    ],
    "a": "C"
   },
   {
    "q": "Which actor played Jack in \"Titanic\" (1997)?",
    "o": [
     "Matt Damon",
     "Leonardo DiCaprio",
     "Brad Pitt"
    ],
    "a": "B"
   },
   {
    "q": "Which band recorded the album \"Rumours\" (1977)?",
    "o": [
     "Eagles",
     "The Doobie Brothers",
     "Fleetwood Mac"
    ],
    "a": "C"
   },
   {
    "q": "Which singer is known as the \"Queen of Soul\"?",
    "o": [
     "Whitney Houston",
     "Diana Ross",
     "Aretha Franklin"
    ],
    "a": "C"
   },
   {
    "q": "Which TV series follows chemistry teacher Walter White?",
    "o": [
     "Better Call Saul",
     "Ozark",
     "Breaking Bad"
    ],
    "a": "C"
   },
   {
    "q": "Which film features the line \"Here's looking at you, kid\"?",
    "o": [
     "The Maltese Falcon",
     "Casablanca",
     "Gone with the Wind"
    ],
    "a": "B"
   },
   {
    "q": "Which musical is about Alexander Hamilton?",
    "o": [
     "Rent",
     "Wicked",
     "Hamilton"
    ],
    "a": "C"
   },
   {
    "q": "Who created the TV show \"The Twilight Zone\"?",
    "o": [
     "Alfred Hitchcock",
     "Rod Serling",
     "Gene Roddenberry"
    ],
    "a": "B"
   },
   {
    "q": "Which Disney film was the first full-length cel-animated feature, released in 1937?",
    "o": [
     "Fantasia",
     "Pinocchio",
     "Snow White and the Seven Dwarfs"
    ],
    "a": "C"
   },
   {
    "q": "Which rapper starred in the movie \"8 Mile\"?",
    "o": [
     "Ice Cube",
     "50 Cent",
     "Eminem"
    ],
    "a": "C"
   },
   {
    "q": "What is the name of the fictional African nation in \"Black Panther\"?",
    "o": [
     "Genovia",
     "Wakanda",
     "Zamunda"
    ],
    "a": "B"
   },
   {
    "q": "Which singer's 1982 album \"Thriller\" is one of the best-selling of all time?",
    "o": [
     "Prince",
     "Madonna",
     "Michael Jackson"
    ],
    "a": "C"
   },
   {
    "q": "Which movie franchise follows the Corleone crime family?",
    "o": [
     "Goodfellas",
     "Scarface",
     "The Godfather"
    ],
    "a": "C"
   },
   {
    "q": "Which country music legend wrote \"Jolene\" and \"9 to 5\"?",
    "o": [
     "Reba McEntire",
     "Loretta Lynn",
     "Dolly Parton"
    ],
    "a": "C"
   },
   {
    "q": "Which TV show's characters meet at Central Perk coffee shop?",
    "o": [
     "Seinfeld",
     "Friends",
     "Frasier"
    ],
    "a": "B"
   },
   {
    "q": "Which film director made \"Psycho\" (1960)?",
    "o": [
     "Stanley Kubrick",
     "Alfred Hitchcock",
     "Orson Welles"
    ],
    "a": "B"
   },
   {
    "q": "Which rock band was fronted by Freddie Mercury?",
    "o": [
     "Queen",
     "The Who",
     "Led Zeppelin"
    ],
    "a": "A"
   },
   {
    "q": "Which late-night show has been hosted by Johnny Carson and Jimmy Fallon?",
    "o": [
     "Late Show",
     "Saturday Night Live",
     "The Tonight Show"
    ],
    "a": "C"
   },
   {
    "q": "What is the name of the coffee-loving FBI agent in \"Twin Peaks\"?",
    "o": [
     "Dale Cooper",
     "Clarice Starling",
     "Fox Mulder"
    ],
    "a": "A"
   },
   {
    "q": "Which movie won Best Picture at the 1995 Oscars and features a man on a bench with a box of chocolates?",
    "o": [
     "The Shawshank Redemption",
     "Pulp Fiction",
     "Forrest Gump"
    ],
    "a": "C"
   },
   {
    "q": "Which science fiction show featured the starship USS Enterprise?",
    "o": [
     "Lost in Space",
     "Battlestar Galactica",
     "Star Trek"
    ],
    "a": "C"
   },
   {
    "q": "Which TV comedy sketch show has aired live from New York since 1975?",
    "o": [
     "Saturday Night Live",
     "In Living Color",
     "Mad TV"
    ],
    "a": "A"
   },
   {
    "q": "Which singer released the albums \"1989\" and \"Folklore\"?",
    "o": [
     "Taylor Swift",
     "Adele",
     "Katy Perry"
    ],
    "a": "A"
   },
   {
    "q": "In \"The Wizard of Oz\" (1939), who played Dorothy?",
    "o": [
     "Shirley Temple",
     "Julie Andrews",
     "Judy Garland"
    ],
    "a": "C"
   },
   {
    "q": "Which animated series is set in the town of South Park, Colorado?",
    "o": [
     "Family Guy",
     "King of the Hill",
     "South Park"
    ],
    "a": "C"
   },
   {
    "q": "Which Pixar film follows a rat who dreams of being a chef in Paris?",
    "o": [
     "Coco",
     "Ratatouille",
     "Luca"
    ],
    "a": "B"
   },
   {
    "q": "Which actor voiced Genie in Disney's 1992 \"Aladdin\"?",
    "o": [
     "Eddie Murphy",
     "Robin Williams",
     "Jim Carrey"
    ],
    "a": "B"
   },
   {
    "q": "Which jazz trumpeter sang \"What a Wonderful World\"?",
    "o": [
     "Miles Davis",
     "Dizzy Gillespie",
     "Louis Armstrong"
    ],
    "a": "C"
   },
   {
    "q": "Which famous music festival took place in upstate New York in August 1969?",
    "o": [
     "Woodstock",
     "Coachella",
     "Lollapalooza"
    ],
    "a": "A"
   },
   {
    "q": "Which Nintendo character is a pink puffball?",
    "o": [
     "Kirby",
     "Jigglypuff",
     "Yoshi"
    ],
    "a": "A"
   },
   {
    "q": "Which \"Star Wars\" character is Luke Skywalker's father?",
    "o": [
     "Darth Vader",
     "Emperor Palpatine",
     "Obi-Wan Kenobi"
    ],
    "a": "A"
   },
   {
    "q": "Which band performed \"Bohemian Rhapsody\"?",
    "o": [
     "The Beatles",
     "Queen",
     "Led Zeppelin"
    ],
    "a": "B"
   }
  ],
  "hard": [
   {
    "q": "Which film won the Academy Award for Best Picture for 1939?",
    "o": [
     "The Wizard of Oz",
     "Gone with the Wind",
     "Mr. Smith Goes to Washington"
    ],
    "a": "B"
   },
   {
    "q": "Which actress holds the record for the most Academy Awards for acting, with four?",
    "o": [
     "Katharine Hepburn",
     "Meryl Streep",
     "Ingrid Bergman"
    ],
    "a": "A"
   },
   {
    "q": "Which film was the first to win all five major Oscars (Picture, Director, Actor, Actress, Screenplay)?",
    "o": [
     "It Happened One Night",
     "One Flew Over the Cuckoo's Nest",
     "The Silence of the Lambs"
    ],
    "a": "A"
   },
   {
    "q": "Which singer was the first woman inducted into the Rock & Roll Hall of Fame, in 1987?",
    "o": [
     "Aretha Franklin",
     "Janis Joplin",
     "Tina Turner"
    ],
    "a": "A"
   },
   {
    "q": "Which sitcom tied \"Frasier\" by winning the Emmy for Outstanding Comedy Series five years in a row?",
    "o": [
     "The Mary Tyler Moore Show",
     "Cheers",
     "Modern Family"
    ],
    "a": "C"
   },
   {
    "q": "Which director made \"2001: A Space Odyssey\"?",
    "o": [
     "Francis Ford Coppola",
     "Stanley Kubrick",
     "Ridley Scott"
    ],
    "a": "B"
   },
   {
    "q": "Which 1927 film is known as the first feature-length \"talkie\"?",
    "o": [
     "Metropolis",
     "Wings",
     "The Jazz Singer"
    ],
    "a": "C"
   },
   {
    "q": "Which \"M*A*S*H\" episode drew one of the largest audiences in U.S. TV history in 1983?",
    "o": [
     "The Christmas special",
     "The pilot",
     "The series finale"
    ],
    "a": "C"
   },
   {
    "q": "Which band released the album \"The Dark Side of the Moon\"?",
    "o": [
     "Genesis",
     "Pink Floyd",
     "The Doors"
    ],
    "a": "B"
   },
   {
    "q": "Which Broadway musical, which opened in 1982, ran for nearly 18 years at the Winter Garden Theatre?",
    "o": [
     "Cats",
     "Les Misérables",
     "A Chorus Line"
    ],
    "a": "A"
   },
   {
    "q": "Which American composer wrote the music for \"Star Wars\" and \"Jaws\"?",
    "o": [
     "John Williams",
     "Hans Zimmer",
     "Danny Elfman"
    ],
    "a": "A"
   },
   {
    "q": "Which Seattle band released \"Nevermind\" in 1991?",
    "o": [
     "Soundgarden",
     "Nirvana",
     "Pearl Jam"
    ],
    "a": "B"
   },
   {
    "q": "Which film won the first Oscar for Best Animated Feature, in 2002?",
    "o": [
     "Monsters, Inc.",
     "Shrek",
     "Spirited Away"
    ],
    "a": "B"
   },
   {
    "q": "Which actor played the Joker in \"The Dark Knight\" and won a posthumous Oscar?",
    "o": [
     "Heath Ledger",
     "Jack Nicholson",
     "Joaquin Phoenix"
    ],
    "a": "A"
   },
   {
    "q": "Which 2019 South Korean film was the first non-English film to win Best Picture?",
    "o": [
     "Parasite",
     "Minari",
     "Roma"
    ],
    "a": "A"
   },
   {
    "q": "Which rapper won the Pulitzer Prize for Music in 2018?",
    "o": [
     "Kanye West",
     "Jay-Z",
     "Kendrick Lamar"
    ],
    "a": "C"
   },
   {
    "q": "Which TV series was set in the fictional town of Hawkins, Indiana?",
    "o": [
     "Riverdale",
     "Stranger Things",
     "Twin Peaks"
    ],
    "a": "B"
   },
   {
    "q": "Which Hollywood studio's logo features a roaring lion?",
    "o": [
     "Metro-Goldwyn-Mayer",
     "Universal",
     "Paramount"
    ],
    "a": "A"
   },
   {
    "q": "Which singer sang \"Over the Rainbow\" in \"The Wizard of Oz\"?",
    "o": [
     "Deanna Durbin",
     "Judy Garland",
     "Liza Minnelli"
    ],
    "a": "B"
   },
   {
    "q": "Which Motown group was led by Diana Ross?",
    "o": [
     "The Ronettes",
     "The Supremes",
     "Martha and the Vandellas"
    ],
    "a": "B"
   },
   {
    "q": "Which director won Best Director for \"The Hurt Locker,\" a first for a woman?",
    "o": [
     "Sofia Coppola",
     "Kathryn Bigelow",
     "Jane Campion"
    ],
    "a": "B"
   },
   {
    "q": "What was the first feature film made entirely with computer animation (1995)?",
    "o": [
     "Antz",
     "A Bug's Life",
     "Toy Story"
    ],
    "a": "C"
   },
   {
    "q": "Which film trilogy won 17 Oscars, including 11 for its final installment?",
    "o": [
     "The Godfather",
     "Star Wars",
     "The Lord of the Rings"
    ],
    "a": "C"
   },
   {
    "q": "Which classic Western starred Gary Cooper as a marshal awaiting a noon train?",
    "o": [
     "Shane",
     "High Noon",
     "Rio Bravo"
    ],
    "a": "B"
   },
   {
    "q": "Which \"I Love Lucy\" star co-founded the Desilu production company?",
    "o": [
     "Mary Tyler Moore",
     "Lucille Ball",
     "Vivian Vance"
    ],
    "a": "B"
   },
   {
    "q": "Which country singer is known as \"The Man in Black\"?",
    "o": [
     "Willie Nelson",
     "Johnny Cash",
     "Merle Haggard"
    ],
    "a": "B"
   },
   {
    "q": "Which 1980s arcade game features a yellow character eating dots in a maze?",
    "o": [
     "Pac-Man",
     "Frogger",
     "Donkey Kong"
    ],
    "a": "A"
   },
   {
    "q": "Which actor has played James Bond the most times in the official Eon series (seven films)?",
    "o": [
     "Roger Moore",
     "Daniel Craig",
     "Sean Connery"
    ],
    "a": "A"
   },
   {
    "q": "Which band's album \"Abbey Road\" features the members crossing a street?",
    "o": [
     "The Kinks",
     "The Beatles",
     "The Beach Boys"
    ],
    "a": "B"
   },
   {
    "q": "Which Beach Boys album from 1966 is often ranked among the greatest ever?",
    "o": [
     "Surfin' Safari",
     "Pet Sounds",
     "Smiley Smile"
    ],
    "a": "B"
   },
   {
    "q": "Which Alfred Hitchcock film features Jimmy Stewart and a fear of heights?",
    "o": [
     "North by Northwest",
     "Rear Window",
     "Vertigo"
    ],
    "a": "C"
   },
   {
    "q": "Which TV network aired the original \"The Ed Sullivan Show,\" where the Beatles debuted in America?",
    "o": [
     "ABC",
     "NBC",
     "CBS"
    ],
    "a": "C"
   },
   {
    "q": "Who composed \"The Four Seasons\"?",
    "o": [
     "Mozart",
     "Vivaldi",
     "Bach"
    ],
    "a": "B"
   },
   {
    "q": "Which Broadway musical is based on a book by Victor Hugo?",
    "o": [
     "Phantom of the Opera",
     "Les Misérables",
     "Chicago"
    ],
    "a": "B"
   },
   {
    "q": "What year did the first Star Wars film (A New Hope) release?",
    "o": [
     "1977",
     "1975",
     "1979"
    ],
    "a": "A"
   }
  ]
 },
 "Sports": {
  "easy": [
   {
    "q": "How many players does a baseball team have on the field on defense?",
    "o": [
     "Nine",
     "Seven",
     "Eleven"
    ],
    "a": "A"
   },
   {
    "q": "In which sport would you score a touchdown?",
    "o": [
     "Baseball",
     "Basketball",
     "American football"
    ],
    "a": "C"
   },
   {
    "q": "How many points is a basket from beyond the three-point line worth?",
    "o": [
     "Four",
     "Three",
     "Two"
    ],
    "a": "B"
   },
   {
    "q": "What is the championship game of the NFL called?",
    "o": [
     "Super Bowl",
     "Stanley Cup Final",
     "World Series"
    ],
    "a": "A"
   },
   {
    "q": "What trophy is awarded to the NHL champion?",
    "o": [
     "Commissioner's Trophy",
     "Larry O'Brien Trophy",
     "Stanley Cup"
    ],
    "a": "C"
   },
   {
    "q": "Which sport is played at Wimbledon?",
    "o": [
     "Cricket",
     "Tennis",
     "Golf"
    ],
    "a": "B"
   },
   {
    "q": "How many holes are played in a standard round of golf?",
    "o": [
     "12",
     "9",
     "18"
    ],
    "a": "C"
   },
   {
    "q": "What is the MLB championship series called?",
    "o": [
     "Super Bowl",
     "World Series",
     "Final Four"
    ],
    "a": "B"
   },
   {
    "q": "In which sport do players use a puck?",
    "o": [
     "Lacrosse",
     "Curling",
     "Ice hockey"
    ],
    "a": "C"
   },
   {
    "q": "How many players are on the court for one basketball team?",
    "o": [
     "Seven",
     "Six",
     "Five"
    ],
    "a": "C"
   },
   {
    "q": "Which country hosts the Tour de France?",
    "o": [
     "Italy",
     "France",
     "Spain"
    ],
    "a": "B"
   },
   {
    "q": "What color jacket does the winner of the Masters golf tournament receive?",
    "o": [
     "Blue",
     "Green",
     "Red"
    ],
    "a": "B"
   },
   {
    "q": "Which sport is known as \"America's pastime\"?",
    "o": [
     "Football",
     "Baseball",
     "Basketball"
    ],
    "a": "B"
   },
   {
    "q": "How often are the Summer Olympic Games held?",
    "o": [
     "Every two years",
     "Every four years",
     "Every year"
    ],
    "a": "B"
   },
   {
    "q": "In bowling, what is it called when you knock down all ten pins on the first throw?",
    "o": [
     "Spare",
     "Split",
     "Strike"
    ],
    "a": "C"
   },
   {
    "q": "Which famous boxer called himself \"The Greatest\"?",
    "o": [
     "Mike Tyson",
     "Muhammad Ali",
     "Joe Frazier"
    ],
    "a": "B"
   },
   {
    "q": "What shape is home plate in baseball?",
    "o": [
     "Square",
     "Pentagon",
     "Triangle"
    ],
    "a": "B"
   },
   {
    "q": "Which sport features the Indianapolis 500?",
    "o": [
     "Horse racing",
     "Auto racing",
     "Cycling"
    ],
    "a": "B"
   },
   {
    "q": "How many points is a touchdown worth in American football?",
    "o": [
     "Six",
     "Seven",
     "Three"
    ],
    "a": "A"
   },
   {
    "q": "Which sport is Michael Phelps famous for?",
    "o": [
     "Swimming",
     "Track and field",
     "Gymnastics"
    ],
    "a": "A"
   },
   {
    "q": "What do you call three goals scored by one player in a hockey or soccer game?",
    "o": [
     "Hat trick",
     "Triple double",
     "Grand slam"
    ],
    "a": "A"
   },
   {
    "q": "Which sport is Serena Williams famous for?",
    "o": [
     "Tennis",
     "Volleyball",
     "Golf"
    ],
    "a": "A"
   },
   {
    "q": "How many bases are there on a baseball field, including home plate?",
    "o": [
     "Four",
     "Five",
     "Three"
    ],
    "a": "A"
   },
   {
    "q": "What is the maximum score in a single game of ten-pin bowling?",
    "o": [
     "200",
     "300",
     "250"
    ],
    "a": "B"
   },
   {
    "q": "Which sport uses the terms \"birdie\" and \"bogey\"?",
    "o": [
     "Tennis",
     "Badminton",
     "Golf"
    ],
    "a": "C"
   },
   {
    "q": "Which horse race is known as \"The Run for the Roses\"?",
    "o": [
     "Kentucky Derby",
     "Preakness Stakes",
     "Belmont Stakes"
    ],
    "a": "A"
   },
   {
    "q": "What is the national sport of Canada in winter?",
    "o": [
     "Skiing",
     "Ice hockey",
     "Curling"
    ],
    "a": "B"
   },
   {
    "q": "Which NBA legend wore number 23 for the Chicago Bulls?",
    "o": [
     "Dennis Rodman",
     "Michael Jordan",
     "Scottie Pippen"
    ],
    "a": "B"
   },
   {
    "q": "How many rings are on the Olympic flag?",
    "o": [
     "Five",
     "Six",
     "Four"
    ],
    "a": "A"
   },
   {
    "q": "In which sport can you hit a home run?",
    "o": [
     "Baseball",
     "Golf",
     "Cricket"
    ],
    "a": "A"
   },
   {
    "q": "Which team won Super Bowl LX in February 2026?",
    "o": [
     "New England Patriots",
     "Kansas City Chiefs",
     "Seattle Seahawks"
    ],
    "a": "C"
   },
   {
    "q": "What is the playing surface of an ice hockey game called?",
    "o": [
     "Court",
     "Rink",
     "Pitch"
    ],
    "a": "B"
   },
   {
    "q": "How many innings are in a regulation MLB game?",
    "o": [
     "Seven",
     "Ten",
     "Nine"
    ],
    "a": "C"
   },
   {
    "q": "What is the name of the NCAA men's basketball tournament's final weekend?",
    "o": [
     "Sweet Sixteen",
     "Elite Eight",
     "Final Four"
    ],
    "a": "C"
   },
   {
    "q": "In basketball, how many points is a free throw worth?",
    "o": [
     "2",
     "1",
     "3"
    ],
    "a": "B"
   },
   {
    "q": "Which country hosted the 2024 Summer Olympics?",
    "o": [
     "Japan",
     "USA",
     "France"
    ],
    "a": "C"
   },
   {
    "q": "How many bases are there on a baseball diamond?",
    "o": [
     "4",
     "5",
     "3"
    ],
    "a": "A"
   }
  ],
  "medium": [
   {
    "q": "Which NFL team won the first Super Bowl in 1967?",
    "o": [
     "New York Jets",
     "Green Bay Packers",
     "Kansas City Chiefs"
    ],
    "a": "B"
   },
   {
    "q": "Which baseball player broke Babe Ruth's career home run record in 1974?",
    "o": [
     "Mickey Mantle",
     "Willie Mays",
     "Hank Aaron"
    ],
    "a": "C"
   },
   {
    "q": "Who broke baseball's color barrier with the Brooklyn Dodgers in 1947?",
    "o": [
     "Jackie Robinson",
     "Satchel Paige",
     "Larry Doby"
    ],
    "a": "A"
   },
   {
    "q": "Which city is home to the NFL team called the Steelers?",
    "o": [
     "Pittsburgh",
     "Philadelphia",
     "Cleveland"
    ],
    "a": "A"
   },
   {
    "q": "How many Olympic gold medals did Michael Phelps win in his career?",
    "o": [
     "28",
     "18",
     "23"
    ],
    "a": "C"
   },
   {
    "q": "Which golfer has won the most major championships?",
    "o": [
     "Arnold Palmer",
     "Tiger Woods",
     "Jack Nicklaus"
    ],
    "a": "C"
   },
   {
    "q": "Which city hosted the 1996 Summer Olympics?",
    "o": [
     "Atlanta",
     "Los Angeles",
     "Sydney"
    ],
    "a": "A"
   },
   {
    "q": "Which NBA team has the nickname \"Lakers\" and plays in Los Angeles?",
    "o": [
     "Los Angeles Lakers",
     "Los Angeles Clippers",
     "Sacramento Kings"
    ],
    "a": "A"
   },
   {
    "q": "What is the distance of a marathon?",
    "o": [
     "30 miles",
     "26.2 miles",
     "24 miles"
    ],
    "a": "B"
   },
   {
    "q": "Which sport's championship is called the \"America's Cup\"?",
    "o": [
     "Rowing",
     "Polo",
     "Sailing"
    ],
    "a": "C"
   },
   {
    "q": "Which U.S. gymnast has won the most world and Olympic medals?",
    "o": [
     "Mary Lou Retton",
     "Simone Biles",
     "Gabby Douglas"
    ],
    "a": "B"
   },
   {
    "q": "Which Boston Celtics legend won 11 NBA championships as a player?",
    "o": [
     "John Havlicek",
     "Larry Bird",
     "Bill Russell"
    ],
    "a": "C"
   },
   {
    "q": "Which three races make up horse racing's Triple Crown?",
    "o": [
     "Kentucky Derby, Preakness, Belmont",
     "Kentucky Derby, Breeders' Cup, Belmont",
     "Preakness, Travers, Dubai World Cup"
    ],
    "a": "A"
   },
   {
    "q": "Which MLB team plays home games at Fenway Park?",
    "o": [
     "Boston Red Sox",
     "Chicago Cubs",
     "New York Yankees"
    ],
    "a": "A"
   },
   {
    "q": "Which MLB team plays home games at Wrigley Field?",
    "o": [
     "St. Louis Cardinals",
     "Chicago Cubs",
     "Chicago White Sox"
    ],
    "a": "B"
   },
   {
    "q": "Which hockey player is known as \"The Great One\"?",
    "o": [
     "Mario Lemieux",
     "Gordie Howe",
     "Wayne Gretzky"
    ],
    "a": "C"
   },
   {
    "q": "Which Olympian won four gold medals at the 1936 Berlin Games?",
    "o": [
     "Carl Lewis",
     "Jim Thorpe",
     "Jesse Owens"
    ],
    "a": "C"
   },
   {
    "q": "How long is an NBA regulation game, excluding overtime?",
    "o": [
     "48 minutes",
     "40 minutes",
     "60 minutes"
    ],
    "a": "A"
   },
   {
    "q": "Which city's NFL team is the \"Packers\"?",
    "o": [
     "Green Bay",
     "Minneapolis",
     "Milwaukee"
    ],
    "a": "A"
   },
   {
    "q": "Which American tennis player won 23 Grand Slam singles titles?",
    "o": [
     "Serena Williams",
     "Chris Evert",
     "Venus Williams"
    ],
    "a": "A"
   },
   {
    "q": "What is the name of the famous NASCAR race held in Florida each February?",
    "o": [
     "Daytona 500",
     "Indianapolis 500",
     "Coca-Cola 600"
    ],
    "a": "A"
   },
   {
    "q": "Which college sport's national championship is decided by the College Football Playoff?",
    "o": [
     "Football",
     "Basketball",
     "Baseball"
    ],
    "a": "A"
   },
   {
    "q": "Which NFL quarterback won seven Super Bowls?",
    "o": [
     "Tom Brady",
     "Peyton Manning",
     "Joe Montana"
    ],
    "a": "A"
   },
   {
    "q": "Which city is home to the NBA's Celtics?",
    "o": [
     "Boston",
     "New York",
     "Philadelphia"
    ],
    "a": "A"
   },
   {
    "q": "Which sport uses a \"shuttlecock\"?",
    "o": [
     "Table tennis",
     "Squash",
     "Badminton"
    ],
    "a": "C"
   },
   {
    "q": "How many players are on a soccer team on the field?",
    "o": [
     "Ten",
     "Eleven",
     "Twelve"
    ],
    "a": "B"
   },
   {
    "q": "What is the name of the trophy awarded to the NBA champion?",
    "o": [
     "Stanley Cup",
     "Larry O'Brien Trophy",
     "Vince Lombardi Trophy"
    ],
    "a": "B"
   },
   {
    "q": "Which honor did Seahawks running back Kenneth Walker III win at Super Bowl LX?",
    "o": [
     "Walter Payton Award",
     "Rookie of the Year",
     "Super Bowl MVP"
    ],
    "a": "C"
   },
   {
    "q": "Which U.S. city hosted the 1980 Winter Olympics and the \"Miracle on Ice\"?",
    "o": [
     "Squaw Valley",
     "Salt Lake City",
     "Lake Placid"
    ],
    "a": "C"
   },
   {
    "q": "Which sport is played in the Stanley Cup Playoffs?",
    "o": [
     "Basketball",
     "Lacrosse",
     "Ice hockey"
    ],
    "a": "C"
   },
   {
    "q": "What does NBA stand for?",
    "o": [
     "National Ball Association",
     "National Basketball Association",
     "North Basketball Alliance"
    ],
    "a": "B"
   },
   {
    "q": "Which baseball player was nicknamed \"The Bambino\"?",
    "o": [
     "Lou Gehrig",
     "Ty Cobb",
     "Babe Ruth"
    ],
    "a": "C"
   },
   {
    "q": "In soccer (football), how long is each half in professional matches?",
    "o": [
     "45 minutes",
     "40 minutes",
     "50 minutes"
    ],
    "a": "A"
   },
   {
    "q": "Which athlete is nicknamed \"King James\"?",
    "o": [
     "Kobe Bryant",
     "Michael Jordan",
     "LeBron James"
    ],
    "a": "C"
   },
   {
    "q": "The Tour de France is a famous competition in which sport?",
    "o": [
     "Cycling",
     "Running",
     "Skiing"
    ],
    "a": "A"
   },
   {
    "q": "How many Grand Slam tournaments are there in tennis each year?",
    "o": [
     "4",
     "5",
     "3"
    ],
    "a": "A"
   }
  ],
  "hard": [
   {
    "q": "Which pitcher holds MLB's career strikeout record?",
    "o": [
     "Nolan Ryan",
     "Randy Johnson",
     "Roger Clemens"
    ],
    "a": "A"
   },
   {
    "q": "Who holds MLB's career home run record?",
    "o": [
     "Barry Bonds",
     "Hank Aaron",
     "Babe Ruth"
    ],
    "a": "A"
   },
   {
    "q": "Which NBA player has scored the most career points?",
    "o": [
     "Kareem Abdul-Jabbar",
     "Karl Malone",
     "LeBron James"
    ],
    "a": "C"
   },
   {
    "q": "Which Yankees first baseman played 2,130 straight games and was called \"The Iron Horse\"?",
    "o": [
     "Lou Gehrig",
     "Don Mattingly",
     "Joe DiMaggio"
    ],
    "a": "A"
   },
   {
    "q": "Which player broke Lou Gehrig's consecutive games streak in 1995?",
    "o": [
     "Cal Ripken Jr.",
     "Derek Jeter",
     "Tony Gwynn"
    ],
    "a": "A"
   },
   {
    "q": "Which Yankees great had a 56-game hitting streak in 1941?",
    "o": [
     "Ted Williams",
     "Joe DiMaggio",
     "Mickey Mantle"
    ],
    "a": "B"
   },
   {
    "q": "Who was the last MLB player to hit .400 in a season, in 1941?",
    "o": [
     "Stan Musial",
     "Joe DiMaggio",
     "Ted Williams"
    ],
    "a": "C"
   },
   {
    "q": "Which NFL running back holds the career rushing yards record?",
    "o": [
     "Emmitt Smith",
     "Walter Payton",
     "Barry Sanders"
    ],
    "a": "A"
   },
   {
    "q": "What is the name of the NFL's championship trophy?",
    "o": [
     "Pete Rozelle Trophy",
     "George Halas Trophy",
     "Vince Lombardi Trophy"
    ],
    "a": "C"
   },
   {
    "q": "Which Native American athlete won the pentathlon and decathlon at the 1912 Olympics?",
    "o": [
     "Jim Thorpe",
     "Jesse Owens",
     "Billy Mills"
    ],
    "a": "A"
   },
   {
    "q": "Which U.S. city hosted the 1932 and 1984 Summer Olympics?",
    "o": [
     "Los Angeles",
     "Atlanta",
     "St. Louis"
    ],
    "a": "A"
   },
   {
    "q": "What was the first U.S. city to host the Summer Olympics, in 1904?",
    "o": [
     "Chicago",
     "Los Angeles",
     "St. Louis"
    ],
    "a": "C"
   },
   {
    "q": "Which horse won the Triple Crown in 1973 and set records that still stand?",
    "o": [
     "Seabiscuit",
     "Secretariat",
     "American Pharoah"
    ],
    "a": "B"
   },
   {
    "q": "Which NHL team has won the most Stanley Cups?",
    "o": [
     "Montreal Canadiens",
     "Detroit Red Wings",
     "Toronto Maple Leafs"
    ],
    "a": "A"
   },
   {
    "q": "Which college has won the most NCAA Division I men's basketball titles?",
    "o": [
     "Kentucky",
     "UCLA",
     "North Carolina"
    ],
    "a": "B"
   },
   {
    "q": "Which basketball coach led UCLA to 10 NCAA titles?",
    "o": [
     "Dean Smith",
     "Mike Krzyzewski",
     "John Wooden"
    ],
    "a": "C"
   },
   {
    "q": "Which boxer was nicknamed \"The Brown Bomber\"?",
    "o": [
     "Joe Louis",
     "Sugar Ray Robinson",
     "Jack Dempsey"
    ],
    "a": "A"
   },
   {
    "q": "Which tennis player won the 1973 \"Battle of the Sexes\" match?",
    "o": [
     "Martina Navratilova",
     "Chris Evert",
     "Billie Jean King"
    ],
    "a": "C"
   },
   {
    "q": "Which NFL team finished the 1972 season undefeated, including the Super Bowl?",
    "o": [
     "Pittsburgh Steelers",
     "Dallas Cowboys",
     "Miami Dolphins"
    ],
    "a": "C"
   },
   {
    "q": "Who scored 100 points in a single NBA game in 1962?",
    "o": [
     "Wilt Chamberlain",
     "Bill Russell",
     "Elgin Baylor"
    ],
    "a": "A"
   },
   {
    "q": "Which Olympic event combines cross-country skiing and rifle shooting?",
    "o": [
     "Nordic combined",
     "Modern pentathlon",
     "Biathlon"
    ],
    "a": "C"
   },
   {
    "q": "Which U.S. sprinter won gold in the 100 m, 200 m and long jump at the 1984 Olympics?",
    "o": [
     "Michael Johnson",
     "Maurice Greene",
     "Carl Lewis"
    ],
    "a": "C"
   },
   {
    "q": "Which quarterback threw the \"Immaculate Reception\" pass for the Steelers in 1972?",
    "o": [
     "Terry Bradshaw",
     "Joe Namath",
     "Roger Staubach"
    ],
    "a": "A"
   },
   {
    "q": "In what year did the Seattle Seahawks win their first Super Bowl?",
    "o": [
     "2006",
     "2015",
     "2014"
    ],
    "a": "C"
   },
   {
    "q": "Which American swimmer won seven gold medals at the 1972 Munich Olympics?",
    "o": [
     "Matt Biondi",
     "Mark Spitz",
     "Ryan Lochte"
    ],
    "a": "B"
   },
   {
    "q": "Which woman was the first to run the Boston Marathon as an official registered entrant, in 1967?",
    "o": [
     "Bobbi Gibb",
     "Kathrine Switzer",
     "Joan Benoit"
    ],
    "a": "B"
   },
   {
    "q": "Which MLB team is nicknamed the \"Bronx Bombers\"?",
    "o": [
     "Boston Red Sox",
     "New York Mets",
     "New York Yankees"
    ],
    "a": "C"
   },
   {
    "q": "Which NBA center was nicknamed \"The Dream\"?",
    "o": [
     "David Robinson",
     "Hakeem Olajuwon",
     "Patrick Ewing"
    ],
    "a": "B"
   },
   {
    "q": "What is the length of an Olympic swimming pool?",
    "o": [
     "50 meters",
     "100 meters",
     "25 meters"
    ],
    "a": "A"
   },
   {
    "q": "Which golfer won the Masters a record six times?",
    "o": [
     "Arnold Palmer",
     "Jack Nicklaus",
     "Tiger Woods"
    ],
    "a": "B"
   },
   {
    "q": "Which U.S. figure skater won Olympic gold in 1988 and was known for \"Battle of the Brians\"?",
    "o": [
     "Scott Hamilton",
     "Brian Orser",
     "Brian Boitano"
    ],
    "a": "C"
   },
   {
    "q": "Which Kentucky Derby winner in 2015 ended a 37-year Triple Crown drought?",
    "o": [
     "California Chrome",
     "American Pharoah",
     "Justify"
    ],
    "a": "B"
   },
   {
    "q": "In which sport would you perform a \"slam dunk\"?",
    "o": [
     "Basketball",
     "Volleyball",
     "Handball"
    ],
    "a": "A"
   },
   {
    "q": "Which country has won the most FIFA World Cups?",
    "o": [
     "Germany",
     "Italy",
     "Brazil"
    ],
    "a": "C"
   }
  ]
 },
 "Psychology & Human Behavior": {
  "easy": [
   {
    "q": "What is the scientific study of the mind and behavior called?",
    "o": [
     "Anthropology",
     "Sociology",
     "Psychology"
    ],
    "a": "C"
   },
   {
    "q": "Which organ is the center of the nervous system and controls behavior?",
    "o": [
     "Brain",
     "Heart",
     "Liver"
    ],
    "a": "A"
   },
   {
    "q": "What is a strong, irrational fear of something called?",
    "o": [
     "Mania",
     "Phobia",
     "Habit"
    ],
    "a": "B"
   },
   {
    "q": "What is the fear of spiders called?",
    "o": [
     "Arachnophobia",
     "Acrophobia",
     "Claustrophobia"
    ],
    "a": "A"
   },
   {
    "q": "What is the fear of heights called?",
    "o": [
     "Acrophobia",
     "Hydrophobia",
     "Agoraphobia"
    ],
    "a": "A"
   },
   {
    "q": "What is the fear of small, enclosed spaces called?",
    "o": [
     "Claustrophobia",
     "Arachnophobia",
     "Xenophobia"
    ],
    "a": "A"
   },
   {
    "q": "Which stage of sleep is linked to vivid dreaming?",
    "o": [
     "REM sleep",
     "Light sleep",
     "Deep sleep"
    ],
    "a": "A"
   },
   {
    "q": "What do we call a feeling of worry or unease about something uncertain?",
    "o": [
     "Joy",
     "Boredom",
     "Anxiety"
    ],
    "a": "C"
   },
   {
    "q": "How many basic senses are traditionally said humans have?",
    "o": [
     "Three",
     "Five",
     "Seven"
    ],
    "a": "B"
   },
   {
    "q": "What does \"IQ\" stand for?",
    "o": [
     "Intelligence quotient",
     "Inner quality",
     "Instant question"
    ],
    "a": "A"
   },
   {
    "q": "Which famous Austrian doctor founded psychoanalysis?",
    "o": [
     "Alfred Adler",
     "Carl Jung",
     "Sigmund Freud"
    ],
    "a": "C"
   },
   {
    "q": "What do we call copying the behavior of others?",
    "o": [
     "Hibernation",
     "Isolation",
     "Imitation"
    ],
    "a": "C"
   },
   {
    "q": "What is the term for a person who is energized by being alone rather than with groups?",
    "o": [
     "Ambivert",
     "Extrovert",
     "Introvert"
    ],
    "a": "C"
   },
   {
    "q": "What is the term for a person who gains energy from being around others?",
    "o": [
     "Extrovert",
     "Loner",
     "Introvert"
    ],
    "a": "A"
   },
   {
    "q": "What do we call the ability to understand and share another person's feelings?",
    "o": [
     "Sympathy",
     "Apathy",
     "Empathy"
    ],
    "a": "C"
   },
   {
    "q": "What is the name for memories of events from your own life?",
    "o": [
     "Working memory",
     "Muscle memory",
     "Autobiographical memory"
    ],
    "a": "C"
   },
   {
    "q": "Which chemical messenger is often called the \"feel-good\" hormone linked to reward?",
    "o": [
     "Dopamine",
     "Insulin",
     "Adrenaline"
    ],
    "a": "A"
   },
   {
    "q": "What is the \"fight-or-flight\" response?",
    "o": [
     "A type of dream",
     "The body's reaction to danger",
     "A memory trick"
    ],
    "a": "B"
   },
   {
    "q": "What is peer pressure?",
    "o": [
     "Pressure from the weather",
     "Influence from people your own age",
     "A type of exercise"
    ],
    "a": "B"
   },
   {
    "q": "About how many hours of sleep do health experts recommend for adults each night?",
    "o": [
     "4 to 5",
     "10 to 12",
     "7 or more"
    ],
    "a": "C"
   },
   {
    "q": "What is a habit?",
    "o": [
     "A one-time decision",
     "A behavior repeated until it becomes automatic",
     "A type of dream"
    ],
    "a": "B"
   },
   {
    "q": "Which hormone is released during stress?",
    "o": [
     "Insulin",
     "Melatonin",
     "Cortisol"
    ],
    "a": "C"
   },
   {
    "q": "Which hormone helps regulate the sleep–wake cycle?",
    "o": [
     "Adrenaline",
     "Cortisol",
     "Melatonin"
    ],
    "a": "C"
   },
   {
    "q": "What do we call a mental picture of something not present?",
    "o": [
     "Imagination",
     "Reflex",
     "Instinct"
    ],
    "a": "A"
   },
   {
    "q": "What is procrastination?",
    "o": [
     "Doing tasks early",
     "Working in groups",
     "Putting off tasks"
    ],
    "a": "C"
   },
   {
    "q": "What is the tendency to see faces in clouds or objects called?",
    "o": [
     "Pareidolia",
     "Déjà vu",
     "Insomnia"
    ],
    "a": "A"
   },
   {
    "q": "What is the feeling of having already experienced the present moment called?",
    "o": [
     "Déjà vu",
     "Nostalgia",
     "Amnesia"
    ],
    "a": "A"
   },
   {
    "q": "What is the name for loss of memory?",
    "o": [
     "Anemia",
     "Amnesia",
     "Insomnia"
    ],
    "a": "B"
   },
   {
    "q": "What is insomnia?",
    "o": [
     "Dreaming too much",
     "Trouble falling or staying asleep",
     "Sleepwalking"
    ],
    "a": "B"
   },
   {
    "q": "Which part of the body sends and receives signals through nerves?",
    "o": [
     "Nervous system",
     "Skeletal system",
     "Digestive system"
    ],
    "a": "A"
   },
   {
    "q": "What is a \"white lie\"?",
    "o": [
     "A lie told in winter",
     "A lie under oath",
     "A small, harmless lie"
    ],
    "a": "C"
   },
   {
    "q": "What does \"body language\" mean?",
    "o": [
     "Sign language only",
     "Communication through gestures and posture",
     "Speaking loudly"
    ],
    "a": "B"
   },
   {
    "q": "What is the term for a strong feeling of longing for the past?",
    "o": [
     "Anxiety",
     "Nostalgia",
     "Envy"
    ],
    "a": "B"
   },
   {
    "q": "What kind of scientist studies human behavior and mental processes?",
    "o": [
     "Botanist",
     "Psychologist",
     "Geologist"
    ],
    "a": "B"
   }
  ],
  "medium": [
   {
    "q": "Which psychologist conditioned dogs to salivate at the sound of a bell?",
    "o": [
     "B.F. Skinner",
     "John Watson",
     "Ivan Pavlov"
    ],
    "a": "C"
   },
   {
    "q": "Which American psychologist is known for operant conditioning and the \"Skinner box\"?",
    "o": [
     "Ivan Pavlov",
     "Albert Bandura",
     "B.F. Skinner"
    ],
    "a": "C"
   },
   {
    "q": "Which psychologist created the \"hierarchy of needs\" pyramid?",
    "o": [
     "Abraham Maslow",
     "Erik Erikson",
     "Carl Rogers"
    ],
    "a": "A"
   },
   {
    "q": "What is at the top of Maslow's hierarchy of needs?",
    "o": [
     "Self-actualization",
     "Safety",
     "Love and belonging"
    ],
    "a": "A"
   },
   {
    "q": "What is \"cognitive dissonance\"?",
    "o": [
     "A memory disorder",
     "Discomfort from holding conflicting beliefs",
     "A type of learning disability"
    ],
    "a": "B"
   },
   {
    "q": "What is the \"placebo effect\"?",
    "o": [
     "A side effect of medicine",
     "Fear of doctors",
     "Improvement from a treatment with no active ingredient"
    ],
    "a": "C"
   },
   {
    "q": "Which psychologist is known for the Bobo doll experiment on observational learning?",
    "o": [
     "Stanley Milgram",
     "Jean Piaget",
     "Albert Bandura"
    ],
    "a": "C"
   },
   {
    "q": "Which Swiss psychologist studied the stages of children's cognitive development?",
    "o": [
     "Jean Piaget",
     "Lev Vygotsky",
     "Carl Jung"
    ],
    "a": "A"
   },
   {
    "q": "What is \"confirmation bias\"?",
    "o": [
     "Trusting experts blindly",
     "Favoring information that supports what you already believe",
     "Remembering only happy events"
    ],
    "a": "B"
   },
   {
    "q": "What is the \"bystander effect\"?",
    "o": [
     "People copy leaders",
     "Crowds make people braver",
     "People are less likely to help when others are present"
    ],
    "a": "C"
   },
   {
    "q": "Which American psychologist is known as the father of American psychology?",
    "o": [
     "G. Stanley Hall",
     "John Dewey",
     "William James"
    ],
    "a": "C"
   },
   {
    "q": "What does the \"Big Five\" model in psychology describe?",
    "o": [
     "Personality traits",
     "Stages of sleep",
     "Types of memory"
    ],
    "a": "A"
   },
   {
    "q": "Which famous 1971 study at Stanford simulated a prison?",
    "o": [
     "Marshmallow Test",
     "Milgram Experiment",
     "Stanford Prison Experiment"
    ],
    "a": "C"
   },
   {
    "q": "Which Yale psychologist studied obedience to authority with fake electric shocks?",
    "o": [
     "Solomon Asch",
     "Philip Zimbardo",
     "Stanley Milgram"
    ],
    "a": "C"
   },
   {
    "q": "Which part of the brain is most associated with forming new memories?",
    "o": [
     "Cerebellum",
     "Medulla",
     "Hippocampus"
    ],
    "a": "C"
   },
   {
    "q": "Which part of the brain is linked to fear and emotional responses?",
    "o": [
     "Hippocampus",
     "Amygdala",
     "Occipital lobe"
    ],
    "a": "B"
   },
   {
    "q": "What is \"short-term memory\" often said to hold, on average?",
    "o": [
     "About 2 items",
     "About 50 items",
     "About 7 items"
    ],
    "a": "C"
   },
   {
    "q": "Which psychologist introduced the ideas of the introvert and extrovert?",
    "o": [
     "Carl Jung",
     "Sigmund Freud",
     "Hans Eysenck"
    ],
    "a": "A"
   },
   {
    "q": "What is \"Stockholm syndrome\"?",
    "o": [
     "Seasonal sadness",
     "Fear of cold weather",
     "Hostages developing positive feelings toward captors"
    ],
    "a": "C"
   },
   {
    "q": "What does SAD stand for in mental health?",
    "o": [
     "Seasonal affective disorder",
     "Social anxiety disorder",
     "Sudden attention deficit"
    ],
    "a": "A"
   },
   {
    "q": "Which experiment tested children's ability to delay eating a treat?",
    "o": [
     "The Marshmallow Test",
     "The Little Albert Study",
     "The Bobo Doll Study"
    ],
    "a": "A"
   },
   {
    "q": "What is the term for learning by watching others?",
    "o": [
     "Observational learning",
     "Habituation",
     "Classical conditioning"
    ],
    "a": "A"
   },
   {
    "q": "Which lobe of the brain mainly processes vision?",
    "o": [
     "Frontal lobe",
     "Temporal lobe",
     "Occipital lobe"
    ],
    "a": "C"
   },
   {
    "q": "What is the \"halo effect\"?",
    "o": [
     "One good trait shaping our overall opinion of someone",
     "A religious experience",
     "Fear of bright lights"
    ],
    "a": "A"
   },
   {
    "q": "In Freud's theory, which part of the mind acts on basic instincts?",
    "o": [
     "Superego",
     "Ego",
     "Id"
    ],
    "a": "C"
   },
   {
    "q": "What is \"groupthink\"?",
    "o": [
     "A group making poor decisions to keep harmony",
     "Telepathy",
     "Brainstorming alone"
    ],
    "a": "A"
   },
   {
    "q": "What does ADHD stand for?",
    "o": [
     "Attention-deficit/hyperactivity disorder",
     "Anxiety and distress health disorder",
     "Acute depressive hormone disorder"
    ],
    "a": "A"
   },
   {
    "q": "What is the term for gradually becoming less responsive to a repeated stimulus?",
    "o": [
     "Habituation",
     "Sensitization",
     "Extinction"
    ],
    "a": "A"
   },
   {
    "q": "Which U.S. crisis line can people call or text by dialing 988?",
    "o": [
     "Poison Control",
     "Suicide & Crisis Lifeline",
     "Emergency weather line"
    ],
    "a": "B"
   },
   {
    "q": "What is the \"Dunning–Kruger effect\"?",
    "o": [
     "Fear of public speaking",
     "People with low skill overestimating their ability",
     "Experts forgetting basics"
    ],
    "a": "B"
   },
   {
    "q": "Which neurotransmitter is most associated with mood regulation and targeted by many antidepressants?",
    "o": [
     "Acetylcholine",
     "Histamine",
     "Serotonin"
    ],
    "a": "C"
   },
   {
    "q": "What is the name for a mental shortcut used to make quick decisions?",
    "o": [
     "Algorithm",
     "Heuristic",
     "Hypothesis"
    ],
    "a": "B"
   }
  ],
  "hard": [
   {
    "q": "Which psychologist conducted the \"Little Albert\" experiment on conditioned fear?",
    "o": [
     "Edward Thorndike",
     "B.F. Skinner",
     "John B. Watson"
    ],
    "a": "C"
   },
   {
    "q": "Which psychologist proposed eight stages of psychosocial development?",
    "o": [
     "Jean Piaget",
     "Lawrence Kohlberg",
     "Erik Erikson"
    ],
    "a": "C"
   },
   {
    "q": "Who conducted conformity experiments with lines of different lengths in the 1950s?",
    "o": [
     "Leon Festinger",
     "Stanley Milgram",
     "Solomon Asch"
    ],
    "a": "C"
   },
   {
    "q": "Which psychologist developed the theory of cognitive dissonance?",
    "o": [
     "Kurt Lewin",
     "Solomon Asch",
     "Leon Festinger"
    ],
    "a": "C"
   },
   {
    "q": "Who proposed the theory of multiple intelligences?",
    "o": [
     "Howard Gardner",
     "Alfred Binet",
     "Robert Sternberg"
    ],
    "a": "A"
   },
   {
    "q": "Which French psychologist co-created an early intelligence test in 1905?",
    "o": [
     "Pierre Janet",
     "Jean Piaget",
     "Alfred Binet"
    ],
    "a": "C"
   },
   {
    "q": "What manual published by the American Psychiatric Association classifies mental disorders?",
    "o": [
     "APA Style Guide",
     "DSM",
     "ICD"
    ],
    "a": "B"
   },
   {
    "q": "Which psychologist is known for client-centered therapy?",
    "o": [
     "Aaron Beck",
     "Carl Rogers",
     "Albert Ellis"
    ],
    "a": "B"
   },
   {
    "q": "Which therapist founded cognitive therapy, a basis of CBT?",
    "o": [
     "Carl Rogers",
     "Viktor Frankl",
     "Aaron Beck"
    ],
    "a": "C"
   },
   {
    "q": "Which psychologist studied attachment in infant rhesus monkeys with cloth and wire \"mothers\"?",
    "o": [
     "Mary Ainsworth",
     "John Bowlby",
     "Harry Harlow"
    ],
    "a": "C"
   },
   {
    "q": "What is the name for a patient who famously lost the ability to form new memories after brain surgery in 1953?",
    "o": [
     "H.M. (Henry Molaison)",
     "Phineas Gage",
     "Little Hans"
    ],
    "a": "A"
   },
   {
    "q": "Which 19th-century railroad worker survived an iron rod through his brain, changing his personality?",
    "o": [
     "Phineas Gage",
     "Henry Molaison",
     "Kitty Genovese"
    ],
    "a": "A"
   },
   {
    "q": "Which psychologist described the \"forgetting curve\"?",
    "o": [
     "Wilhelm Wundt",
     "Hermann Ebbinghaus",
     "George Miller"
    ],
    "a": "B"
   },
   {
    "q": "Who opened the first psychology laboratory in Leipzig in 1879?",
    "o": [
     "Hermann von Helmholtz",
     "William James",
     "Wilhelm Wundt"
    ],
    "a": "C"
   },
   {
    "q": "What is the term for attributing others' behavior to personality rather than circumstances?",
    "o": [
     "Self-serving bias",
     "Fundamental attribution error",
     "Hindsight bias"
    ],
    "a": "B"
   },
   {
    "q": "Which developmental psychologist created the \"Strange Situation\" procedure?",
    "o": [
     "Diana Baumrind",
     "Harry Harlow",
     "Mary Ainsworth"
    ],
    "a": "C"
   },
   {
    "q": "What is the term for the tendency to rely too heavily on the first piece of information given?",
    "o": [
     "Framing effect",
     "Anchoring bias",
     "Availability heuristic"
    ],
    "a": "B"
   },
   {
    "q": "What name is given to the reward chemical pathway linking the VTA and the nucleus accumbens?",
    "o": [
     "Nigrostriatal pathway",
     "Mesolimbic pathway",
     "Corticospinal tract"
    ],
    "a": "B"
   },
   {
    "q": "What is the name of the brain region most associated with producing speech?",
    "o": [
     "Wernicke's area",
     "Hippocampus",
     "Broca's area"
    ],
    "a": "C"
   },
   {
    "q": "What is the name of the brain region most associated with understanding language?",
    "o": [
     "Wernicke's area",
     "Thalamus",
     "Broca's area"
    ],
    "a": "A"
   },
   {
    "q": "Which Austrian psychiatrist and Holocaust survivor wrote \"Man's Search for Meaning\"?",
    "o": [
     "Alfred Adler",
     "Viktor Frankl",
     "Bruno Bettelheim"
    ],
    "a": "B"
   },
   {
    "q": "What is the \"availability heuristic\"?",
    "o": [
     "Choosing what's cheapest",
     "Remembering the last item best",
     "Judging likelihood by how easily examples come to mind"
    ],
    "a": "C"
   },
   {
    "q": "Which effect describes remembering items at the beginning and end of a list best?",
    "o": [
     "Mere-exposure effect",
     "Serial position effect",
     "Zeigarnik effect"
    ],
    "a": "B"
   },
   {
    "q": "What is the \"Zeigarnik effect\"?",
    "o": [
     "Remembering unfinished tasks better than finished ones",
     "Forgetting names",
     "Fear of numbers"
    ],
    "a": "A"
   },
   {
    "q": "Which psychologist proposed stages of moral development?",
    "o": [
     "Lawrence Kohlberg",
     "Carol Gilligan",
     "Erik Erikson"
    ],
    "a": "A"
   },
   {
    "q": "Which psychologist is best known for research on \"learned helplessness\"?",
    "o": [
     "Daniel Kahneman",
     "Martin Seligman",
     "Daniel Gilbert"
    ],
    "a": "B"
   },
   {
    "q": "Which psychologist won the Nobel Prize in Economics in 2002 for work on judgment and decision-making?",
    "o": [
     "Daniel Kahneman",
     "Amos Tversky",
     "Herbert Simon"
    ],
    "a": "A"
   },
   {
    "q": "What is the largest professional organization of psychologists in the United States?",
    "o": [
     "American Medical Association",
     "National Science Foundation",
     "American Psychological Association"
    ],
    "a": "C"
   },
   {
    "q": "What is the \"mere-exposure effect\"?",
    "o": [
     "Fear of new things",
     "Liking things more simply because they are familiar",
     "Forgetting after one exposure"
    ],
    "a": "B"
   },
   {
    "q": "Which theory says emotions come from our interpretation of body changes, named for two scientists?",
    "o": [
     "Yerkes–Dodson law",
     "Cannon–Bard theory",
     "James–Lange theory"
    ],
    "a": "C"
   },
   {
    "q": "What law states performance improves with arousal only up to a point?",
    "o": [
     "Law of effect",
     "Weber's law",
     "Yerkes–Dodson law"
    ],
    "a": "C"
   },
   {
    "q": "Who formulated the \"law of effect\" using cats in puzzle boxes?",
    "o": [
     "Clark Hull",
     "B.F. Skinner",
     "Edward Thorndike"
    ],
    "a": "C"
   }
  ]
 },
 "Image Recognition": {
  "easy": [
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Iceland",
     "Sweden",
     "Finland"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_finlandia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Norway",
     "Denmark",
     "Switzerland"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_dania.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Canada",
     "USA",
     "Austria"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_kanadas.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Russia",
     "Slovenia",
     "Serbia"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_rosia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Egypt",
     "Syria",
     "Yemen"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_aigyptos.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Sweden",
     "Iceland",
     "Norway"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_norvigia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Australia",
     "Fiji",
     "New Zealand"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_nea_zilandia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Romania",
     "Belgium",
     "Germany"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_velgio.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Austria",
     "Latvia",
     "Lebanon"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_aystria.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Vietnam",
     "China",
     "Thailand"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_kina.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Ecuador",
     "Bolivia",
     "Peru"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_peroy.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Malta",
     "Cyprus",
     "Greece"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_malta.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "USA",
     "Liberia",
     "Malaysia"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_ipa.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Malaysia",
     "Singapore",
     "Indonesia"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_sigkapoyri.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Denmark",
     "Austria",
     "Switzerland"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_elvetia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Lebanon",
     "Malta",
     "Cyprus"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_kypros.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Australia",
     "United Kingdom",
     "New Zealand"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_aystralia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Panama",
     "Costa Rica",
     "Chile"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_chili.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Cuba",
     "Puerto Rico",
     "Panama"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_koyva.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Hungary",
     "Italy",
     "Mexico"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_mexiko.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Italy",
     "Spain",
     "Portugal"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_portogalia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Japan",
     "South Korea",
     "Bangladesh"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_iaponia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Mexico",
     "Italy",
     "Ireland"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_italia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Argentina",
     "Colombia",
     "Brazil"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_vrazilia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "France",
     "Netherlands",
     "Luxembourg"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_ollandia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Cameroon",
     "Ghana",
     "Nigeria"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_nigiria.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Germany",
     "Spain",
     "Belgium"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_germania.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Australia",
     "United Kingdom",
     "New Zealand"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_inomeno_vasileio.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Italy",
     "Ireland",
     "Ivory Coast"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_irlandia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Turkey",
     "Tunisia",
     "Algeria"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_toyrkia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Netherlands",
     "Luxembourg",
     "France"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_gallia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Ecuador",
     "Colombia",
     "Venezuela"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_kolomvia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Finland",
     "Norway",
     "Sweden"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_soyidia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Indonesia",
     "Monaco",
     "Poland"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_polonia.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Belize",
     "Canada",
     "United States"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_united_states.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Bahamas",
     "Canada",
     "Mexico"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_canada.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "United States",
     "Mexico",
     "Belize"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_mexico.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Brazil",
     "Uruguay",
     "Bolivia"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_brazil.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Papua New Guinea",
     "Australia",
     "Solomon Islands"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_australia.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Pakistan",
     "India",
     "Bhutan"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_india.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Bangladesh",
     "Mongolia",
     "China"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_china.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Taiwan",
     "Japan",
     "South Korea"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_japan.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Montenegro",
     "Italy",
     "Bosnia and Herzegovina"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_italy.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Belgium",
     "Switzerland",
     "France"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_france.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Ireland",
     "Netherlands",
     "United Kingdom"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_united_kingdom.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Egypt",
     "Jordan",
     "Libya"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_egypt.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Russia",
     "Mongolia",
     "Kyrgyzstan"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_russia.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Bolivia",
     "Chile",
     "Argentina"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_chile.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Tunisia",
     "Spain",
     "France"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_spain.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Bolivia",
     "Argentina",
     "Paraguay"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_argentina.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Botswana",
     "South Africa",
     "Lesotho"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_south_africa.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Bulgaria",
     "Greece",
     "North Macedonia"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_greece.svg"
   }
  ],
  "medium": [
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Puerto Rico",
     "Philippines",
     "Cuba"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_filippines.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "North Macedonia",
     "Bulgaria",
     "Serbia"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_voreia_makedonia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Kazakhstan",
     "Ukraine",
     "Sweden"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_oykrania.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Kosovo",
     "Montenegro",
     "Albania"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_alvania.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Libya",
     "Algeria",
     "Tunisia"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_tynisia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Senegal",
     "Guinea",
     "Mali"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_mali.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Lebanon",
     "Latvia",
     "Austria"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_letonia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Serbia",
     "Russia",
     "Slovenia"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_servia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Chile",
     "Chad",
     "Romania"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_roymania.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Philippines",
     "Paraguay",
     "Czech Republic"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_tsechia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Russia",
     "Slovakia",
     "Slovenia"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_slovenia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Israel",
     "El Salvador",
     "Argentina"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_israil.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Mozambique",
     "Angola",
     "Namibia"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_agkola.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Hungary",
     "Liberia",
     "Bulgaria"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_voylgaria.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Kenya",
     "Nigeria",
     "South Africa"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_notia_afriki.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Norway",
     "Iceland",
     "Denmark"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_islandia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Egypt",
     "South Sudan",
     "Sudan"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_soydan.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Pakistan",
     "Bangladesh",
     "Iran"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_pakistan.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "United Arab Emirates",
     "Oman",
     "Qatar"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_oman.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Argentina",
     "Uruguay",
     "Chile"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_argentini.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Hungary",
     "Bulgaria",
     "Italy"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_oyggaria.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Croatia",
     "Monaco",
     "Poland"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_kroatia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Jordan",
     "Lebanon",
     "Syria"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_livanos.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Costa Rica",
     "Panama",
     "Nicaragua"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_kosta_rika.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "France",
     "Luxembourg",
     "Netherlands"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_loyxemvoyrgo.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Venezuela",
     "Ecuador",
     "Colombia"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_ekoyador.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Monaco",
     "Poland",
     "Indonesia"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_indonisia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Panama",
     "Costa Rica",
     "Cuba"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_panamas.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "India",
     "Pakistan",
     "Bangladesh"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_mpangklantes.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Malaysia",
     "Thailand",
     "Singapore"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_malaisia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Cambodia",
     "Thailand",
     "Laos"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_tailandi.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Egypt",
     "Sudan",
     "Libya"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_livyi.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Algeria",
     "Tunisia",
     "Libya"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_algeria.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Lithuania",
     "Ethiopia",
     "Ghana"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_lithoyania.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Ghana",
     "Cameroon",
     "Senegal"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_kameroyn.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Morocco",
     "Tunisia",
     "Algeria"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_maroko.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Palestine",
     "Kuwait",
     "Jordan"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_iordania.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Russia",
     "Slovakia",
     "Slovenia"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_slovakia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Honduras",
     "El Salvador",
     "Somalia"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_somalia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Ethiopia",
     "Kenya",
     "Somalia"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_aithiopia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Iraq",
     "Saudi Arabia",
     "Jordan"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_saoydiki_aravia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Ivory Coast",
     "Nigeria",
     "Ghana"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_gkana.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Angola",
     "Zambia",
     "Mozambique"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_mozamviki.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "North Korea",
     "Japan",
     "South Korea"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_notia_korea.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Venezuela",
     "Colombia",
     "Ecuador"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_venezoyela.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Afghanistan",
     "Iran",
     "Iraq"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_iran.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Vietnam",
     "Laos",
     "China"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_vietnam.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Tanzania",
     "South Africa",
     "Kenya"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_kenya.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Guinea",
     "Mali",
     "Senegal"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_senegali.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Latvia",
     "Finland",
     "Estonia"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_esthonia.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Netherlands",
     "Austria",
     "Germany"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_germany.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Peru",
     "Ecuador",
     "Bolivia"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_peru.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Colombia",
     "Panama",
     "Ecuador"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_colombia.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Cuba",
     "Bahamas",
     "Haiti"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_cuba.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Norway",
     "Sweden",
     "Finland"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_norway.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Sweden",
     "Denmark",
     "Latvia"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_sweden.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Finland",
     "Sweden",
     "Lithuania"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_finland.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Ireland",
     "Iceland",
     "United Kingdom"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_iceland.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Ireland",
     "United Kingdom",
     "France"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_ireland.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "France",
     "Portugal",
     "Spain"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_portugal.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Jordan",
     "Turkey",
     "Armenia"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_turkey.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Iran",
     "United Arab Emirates",
     "Azerbaijan"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_iran.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Saudi Arabia",
     "United Arab Emirates",
     "Yemen"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_saudi_arabia.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Philippines",
     "Indonesia",
     "East Timor"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_indonesia.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Fiji",
     "Solomon Islands",
     "New Zealand"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_new_zealand.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "East Timor",
     "Taiwan",
     "Philippines"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_philippines.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Laos",
     "Thailand",
     "Vietnam"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_thailand.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Japan",
     "Mongolia",
     "South Korea"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_south_korea.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Belarus",
     "Ukraine",
     "Romania"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_ukraine.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Slovakia",
     "Poland",
     "Czech Republic"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_poland.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Malawi",
     "Madagascar",
     "Mozambique"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_madagascar.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Nigeria",
     "Togo",
     "Equatorial Guinea"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_nigeria.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Kenya",
     "Rwanda",
     "Tanzania"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_kenya.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Mauritania",
     "Algeria",
     "Morocco"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_morocco.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Myanmar",
     "Cambodia",
     "Vietnam"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_vietnam.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Nepal",
     "Kyrgyzstan",
     "Pakistan"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_pakistan.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Sri Lanka",
     "Nepal",
     "Bangladesh"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_sri_lanka.svg"
   }
  ],
  "hard": [
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Ukraine",
     "Russia",
     "Belarus"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_leykorosia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Bahrain",
     "Kuwait",
     "Qatar"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_mpachrein.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Romania",
     "Moldova",
     "Ukraine"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_moldavia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Kazakhstan",
     "Kyrgyzstan",
     "Uzbekistan"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_kazakstan.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Azerbaijan",
     "Georgia",
     "Armenia"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_armenia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Djibouti",
     "Ethiopia",
     "Eritrea"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_erythraia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Azerbaijan",
     "Georgia",
     "Armenia"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_azermpaitzan.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Iran",
     "Afghanistan",
     "Pakistan"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_afganistan.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Kiribati",
     "Tuvalu",
     "Nauru"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_kirimpati.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Ecuador",
     "Peru",
     "Bolivia"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_volivia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Vatican City",
     "Andorra",
     "San Marino"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_san_marino.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Paraguay",
     "Uruguay",
     "Bolivia"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_paragoyai.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Barbados",
     "Jamaica",
     "Trinidad and Tobago"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_tzamaika.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Kenya",
     "Tanzania",
     "Uganda"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_tanzania.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Uganda",
     "Rwanda",
     "Burundi"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_royanta.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Suriname",
     "Guyana",
     "Venezuela"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_soyrinam.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Tajikistan",
     "Turkmenistan",
     "Uzbekistan"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_tatzikistan.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Turkmenistan",
     "Uzbekistan",
     "Kazakhstan"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_oyzmpekistan.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Moldova",
     "Andorra",
     "Romania"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_andora.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Jordan",
     "Kuwait",
     "Iraq"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_koyveit.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Zimbabwe",
     "Zambia",
     "Mozambique"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_zampia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Namibia",
     "Angola",
     "Botswana"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_namimpia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "United Arab Emirates",
     "Bahrain",
     "Qatar"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_katar.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Liechtenstein",
     "Monaco",
     "Andorra"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_lichtenstain.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Uganda",
     "Kenya",
     "Tanzania"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_oygkanta.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Zimbabwe",
     "Botswana",
     "Namibia"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_mpotsoyana.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Kazakhstan",
     "Kyrgyzstan",
     "Mongolia"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_moggolia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Sri Lanka",
     "India",
     "Maldives"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_sri_lanka.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "India",
     "Bhutan",
     "Nepal"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_nepal.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Georgia",
     "Armenia",
     "Azerbaijan"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_georgia.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Thailand",
     "Myanmar",
     "Laos"
    ],
    "a": "B",
    "img": "Assets/questions_pics/flag_mianmar.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Bhutan",
     "Nepal",
     "Myanmar"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_mpoytan.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Zambia",
     "Botswana",
     "Zimbabwe"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_zimpampoye.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Uruguay",
     "Argentina",
     "Paraguay"
    ],
    "a": "A",
    "img": "Assets/questions_pics/flag_oyroygoyai.svg"
   },
   {
    "q": "Which country does this flag belong to?",
    "o": [
     "Mozambique",
     "Zimbabwe",
     "Madagascar"
    ],
    "a": "C",
    "img": "Assets/questions_pics/flag_madagaskari.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Netherlands",
     "Germany",
     "United Kingdom"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_netherlands.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "France",
     "Belgium",
     "Switzerland"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_switzerland.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Moldova",
     "Romania",
     "Serbia"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_romania.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Austria",
     "Slovenia",
     "Czech Republic"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_austria.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Hungary",
     "Serbia",
     "Austria"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_hungary.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Germany",
     "Czech Republic",
     "Austria"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_czech_republic.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Brazil",
     "Uruguay",
     "Bolivia"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_bolivia.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Venezuela",
     "Guyana",
     "Dominican Republic"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_venezuela.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Peru",
     "Ecuador",
     "Panama"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_ecuador.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Uzbekistan",
     "Afghanistan",
     "Tajikistan"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_afghanistan.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Kuwait",
     "Armenia",
     "Iraq"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_iraq.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Ethiopia",
     "Djibouti",
     "Somalia"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_ethiopia.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Ethiopia",
     "Kenya",
     "Somalia"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_somalia.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "China",
     "Mongolia",
     "North Korea"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_mongolia.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Kazakhstan",
     "Uzbekistan",
     "Kyrgyzstan"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_kazakhstan.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "India",
     "Nepal",
     "Bangladesh"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_nepal.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Thailand",
     "Laos",
     "Cambodia"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_cambodia.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Laos",
     "Vietnam",
     "Myanmar"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_laos.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Vietnam",
     "Cambodia",
     "Malaysia"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_malaysia.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Algeria",
     "Tunisia",
     "Morocco"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_algeria.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Tunisia",
     "Egypt",
     "Libya"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_libya.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Malawi",
     "Tanzania",
     "Burundi"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_tanzania.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Angola",
     "Namibia",
     "Congo"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_angola.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Botswana",
     "Lesotho",
     "Namibia"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_namibia.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Germany",
     "Switzerland",
     "Belgium"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_belgium.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Germany",
     "Denmark",
     "Netherlands"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_denmark.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Croatia",
     "Bosnia and Herzegovina",
     "Austria"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_croatia.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Uruguay",
     "Argentina",
     "Bolivia"
    ],
    "a": "A",
    "img": "Assets/questions_pics/maps/map_uruguay.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Argentina",
     "Uruguay",
     "Paraguay"
    ],
    "a": "C",
    "img": "Assets/questions_pics/maps/map_paraguay.svg"
   },
   {
    "q": "Which country is highlighted in red on the map?",
    "o": [
     "Jordan",
     "Syria",
     "Iraq"
    ],
    "a": "B",
    "img": "Assets/questions_pics/maps/map_syria.svg"
   }
  ]
 },
 "ONLY USA": {
  "easy": [
   {
    "q": "How many stars are on the U.S. flag?",
    "o": [
     "50",
     "48",
     "52"
    ],
    "a": "A"
   },
   {
    "q": "How many stripes are on the U.S. flag?",
    "o": [
     "12",
     "50",
     "13"
    ],
    "a": "C"
   },
   {
    "q": "What do the 13 stripes on the flag represent?",
    "o": [
     "The original colonies",
     "The first presidents",
     "The Founding Fathers"
    ],
    "a": "A"
   },
   {
    "q": "What is the national anthem of the United States?",
    "o": [
     "God Bless America",
     "America the Beautiful",
     "The Star-Spangled Banner"
    ],
    "a": "C"
   },
   {
    "q": "What is the capital of the United States?",
    "o": [
     "Washington, D.C.",
     "New York City",
     "Philadelphia"
    ],
    "a": "A"
   },
   {
    "q": "When do Americans celebrate Independence Day?",
    "o": [
     "July 14",
     "July 4",
     "June 14"
    ],
    "a": "B"
   },
   {
    "q": "How many U.S. states are there?",
    "o": [
     "52",
     "48",
     "50"
    ],
    "a": "C"
   },
   {
    "q": "Where does the President of the United States live and work?",
    "o": [
     "The Capitol",
     "The Pentagon",
     "The White House"
    ],
    "a": "C"
   },
   {
    "q": "What is the national bird of the United States?",
    "o": [
     "Wild turkey",
     "Bald eagle",
     "Red-tailed hawk"
    ],
    "a": "B"
   },
   {
    "q": "Whose face is on the $1 bill?",
    "o": [
     "Benjamin Franklin",
     "Abraham Lincoln",
     "George Washington"
    ],
    "a": "C"
   },
   {
    "q": "Whose face is on the $100 bill?",
    "o": [
     "Alexander Hamilton",
     "Benjamin Franklin",
     "Ulysses S. Grant"
    ],
    "a": "B"
   },
   {
    "q": "Which monument in South Dakota shows the faces of four presidents?",
    "o": [
     "Mount Rushmore",
     "Crazy Horse Memorial",
     "Stone Mountain"
    ],
    "a": "A"
   },
   {
    "q": "In which city is the Golden Gate Bridge?",
    "o": [
     "Los Angeles",
     "Seattle",
     "San Francisco"
    ],
    "a": "C"
   },
   {
    "q": "Which city is nicknamed \"The Big Apple\"?",
    "o": [
     "Boston",
     "Chicago",
     "New York City"
    ],
    "a": "C"
   },
   {
    "q": "What holiday on the fourth Thursday of November celebrates the harvest?",
    "o": [
     "Labor Day",
     "Thanksgiving",
     "Veterans Day"
    ],
    "a": "B"
   },
   {
    "q": "What is the name of the U.S. lawmaking body made of the Senate and House?",
    "o": [
     "Supreme Court",
     "Cabinet",
     "Congress"
    ],
    "a": "C"
   },
   {
    "q": "Who is the \"Father of Our Country\"?",
    "o": [
     "Abraham Lincoln",
     "Thomas Jefferson",
     "George Washington"
    ],
    "a": "C"
   },
   {
    "q": "Which U.S. state is known as the \"Lone Star State\"?",
    "o": [
     "Texas",
     "Arizona",
     "Montana"
    ],
    "a": "A"
   },
   {
    "q": "In which city is the Liberty Bell?",
    "o": [
     "Washington, D.C.",
     "Philadelphia",
     "Boston"
    ],
    "a": "B"
   },
   {
    "q": "Which ocean is on the West Coast of the United States?",
    "o": [
     "Indian Ocean",
     "Atlantic Ocean",
     "Pacific Ocean"
    ],
    "a": "C"
   },
   {
    "q": "Which theme park opened in Anaheim, California, in 1955?",
    "o": [
     "Disneyland",
     "Six Flags",
     "Universal Studios"
    ],
    "a": "A"
   },
   {
    "q": "Which U.S. city is famous for its casinos and \"the Strip\"?",
    "o": [
     "Atlantic City",
     "Las Vegas",
     "Reno"
    ],
    "a": "B"
   },
   {
    "q": "What is the name of the famous clock-like geyser in Yellowstone?",
    "o": [
     "Steamboat",
     "Grand Geyser",
     "Old Faithful"
    ],
    "a": "C"
   },
   {
    "q": "Which famous road ran from Chicago to Santa Monica?",
    "o": [
     "Pacific Coast Highway",
     "Route 66",
     "Interstate 95"
    ],
    "a": "B"
   },
   {
    "q": "What day honors those who died serving in the U.S. military?",
    "o": [
     "Veterans Day",
     "Memorial Day",
     "Flag Day"
    ],
    "a": "B"
   },
   {
    "q": "What food is traditionally eaten at Thanksgiving dinner?",
    "o": [
     "Lobster",
     "Ham",
     "Turkey"
    ],
    "a": "C"
   },
   {
    "q": "What is the name of the president's official airplane?",
    "o": [
     "Air Force One",
     "Eagle One",
     "Marine One"
    ],
    "a": "A"
   },
   {
    "q": "Which U.S. state is famous for its potatoes?",
    "o": [
     "Ohio",
     "Iowa",
     "Idaho"
    ],
    "a": "C"
   },
   {
    "q": "What are the first ten amendments to the Constitution called?",
    "o": [
     "The Articles",
     "The Preamble",
     "The Bill of Rights"
    ],
    "a": "C"
   },
   {
    "q": "Which city is home to the Space Needle?",
    "o": [
     "Seattle",
     "Portland",
     "Denver"
    ],
    "a": "A"
   },
   {
    "q": "What is the name of the national park famous for its huge canyon in Arizona?",
    "o": [
     "Grand Canyon National Park",
     "Zion National Park",
     "Bryce Canyon National Park"
    ],
    "a": "A"
   },
   {
    "q": "In which city is the famous Hollywood Sign?",
    "o": [
     "Las Vegas",
     "San Diego",
     "Los Angeles"
    ],
    "a": "C"
   },
   {
    "q": "Which U.S. state is known as the \"Aloha State\"?",
    "o": [
     "Florida",
     "California",
     "Hawaii"
    ],
    "a": "C"
   },
   {
    "q": "Which U.S. state is known as the \"Peach State\"?",
    "o": [
     "Alabama",
     "Georgia",
     "South Carolina"
    ],
    "a": "B"
   },
   {
    "q": "Which U.S. holiday celebrates the Declaration of Independence?",
    "o": [
     "Memorial Day",
     "Independence Day",
     "Veterans Day"
    ],
    "a": "B"
   },
   {
    "q": "How many branches are in the U.S. federal government?",
    "o": [
     "2",
     "4",
     "3"
    ],
    "a": "C"
   },
   {
    "q": "Which ocean is on the west coast of the USA?",
    "o": [
     "Pacific",
     "Arctic",
     "Atlantic"
    ],
    "a": "A"
   }
  ],
  "medium": [
   {
    "q": "What is the supreme law of the land?",
    "o": [
     "The Declaration of Independence",
     "The U.S. Constitution",
     "The Bill of Rights"
    ],
    "a": "B"
   },
   {
    "q": "How many amendments does the U.S. Constitution have?",
    "o": [
     "27",
     "26",
     "33"
    ],
    "a": "A"
   },
   {
    "q": "How many U.S. senators are there?",
    "o": [
     "50",
     "435",
     "100"
    ],
    "a": "C"
   },
   {
    "q": "How many voting members are in the U.S. House of Representatives?",
    "o": [
     "435",
     "100",
     "538"
    ],
    "a": "A"
   },
   {
    "q": "For how many years is a U.S. senator elected?",
    "o": [
     "Four",
     "Six",
     "Two"
    ],
    "a": "B"
   },
   {
    "q": "For how many years is a U.S. representative elected?",
    "o": [
     "Six",
     "Two",
     "Four"
    ],
    "a": "B"
   },
   {
    "q": "For how many years is the President elected?",
    "o": [
     "Six",
     "Four",
     "Eight"
    ],
    "a": "B"
   },
   {
    "q": "What are the three branches of the U.S. government?",
    "o": [
     "Legislative, executive, judicial",
     "Federal, state, local",
     "House, Senate, President"
    ],
    "a": "A"
   },
   {
    "q": "Who is the Commander in Chief of the U.S. military?",
    "o": [
     "The President",
     "The Secretary of Defense",
     "The Vice President"
    ],
    "a": "A"
   },
   {
    "q": "Who signs bills to become laws?",
    "o": [
     "The President",
     "The Speaker of the House",
     "The Chief Justice"
    ],
    "a": "A"
   },
   {
    "q": "Who vetoes bills?",
    "o": [
     "The Senate",
     "The Supreme Court",
     "The President"
    ],
    "a": "C"
   },
   {
    "q": "What is the highest court in the United States?",
    "o": [
     "The Court of Appeals",
     "The Supreme Court",
     "The District Court"
    ],
    "a": "B"
   },
   {
    "q": "How many justices are on the U.S. Supreme Court?",
    "o": [
     "Seven",
     "Nine",
     "Twelve"
    ],
    "a": "B"
   },
   {
    "q": "If the President can no longer serve, who becomes President?",
    "o": [
     "The Chief Justice",
     "The Speaker of the House",
     "The Vice President"
    ],
    "a": "C"
   },
   {
    "q": "What are the first three words of the Constitution?",
    "o": [
     "Four score and",
     "In God We Trust",
     "We the People"
    ],
    "a": "C"
   },
   {
    "q": "What is the minimum age to vote in U.S. federal elections?",
    "o": [
     "16",
     "21",
     "18"
    ],
    "a": "C"
   },
   {
    "q": "In what month do Americans vote for President?",
    "o": [
     "October",
     "January",
     "November"
    ],
    "a": "C"
   },
   {
    "q": "Which amendment protects freedom of speech and religion?",
    "o": [
     "5th Amendment",
     "2nd Amendment",
     "1st Amendment"
    ],
    "a": "C"
   },
   {
    "q": "Which colony was founded by William Penn?",
    "o": [
     "Maryland",
     "Georgia",
     "Pennsylvania"
    ],
    "a": "C"
   },
   {
    "q": "Who wrote the words to \"The Star-Spangled Banner\"?",
    "o": [
     "John Philip Sousa",
     "Irving Berlin",
     "Francis Scott Key"
    ],
    "a": "C"
   },
   {
    "q": "Which document freed enslaved people in the Confederacy in 1863?",
    "o": [
     "Bill of Rights",
     "Emancipation Proclamation",
     "Gettysburg Address"
    ],
    "a": "B"
   },
   {
    "q": "What territory did the U.S. buy from France in 1803?",
    "o": [
     "Louisiana",
     "Florida",
     "Oregon"
    ],
    "a": "A"
   },
   {
    "q": "How many original colonies were there?",
    "o": [
     "15",
     "10",
     "13"
    ],
    "a": "C"
   },
   {
    "q": "Which city was the first capital of the United States under the Constitution?",
    "o": [
     "Philadelphia",
     "New York City",
     "Boston"
    ],
    "a": "B"
   },
   {
    "q": "What is the name of the building where Congress meets?",
    "o": [
     "Library of Congress",
     "White House",
     "U.S. Capitol"
    ],
    "a": "C"
   },
   {
    "q": "What is the official national motto of the United States?",
    "o": [
     "In God We Trust",
     "Land of the Free",
     "Liberty and Justice for All"
    ],
    "a": "A"
   },
   {
    "q": "Which U.S. state was the last to join the Union, in 1959?",
    "o": [
     "Arizona",
     "Hawaii",
     "Alaska"
    ],
    "a": "B"
   },
   {
    "q": "Which famous American inventor flew the first powered airplane at Kitty Hawk?",
    "o": [
     "Wright brothers",
     "Charles Lindbergh",
     "Glenn Curtiss"
    ],
    "a": "A"
   },
   {
    "q": "Which city is known as the \"Motor City\"?",
    "o": [
     "Cleveland",
     "Pittsburgh",
     "Detroit"
    ],
    "a": "C"
   },
   {
    "q": "Which city hosts a famous Mardi Gras celebration?",
    "o": [
     "Miami",
     "Memphis",
     "New Orleans"
    ],
    "a": "C"
   },
   {
    "q": "What is the capital of Hawaii?",
    "o": [
     "Lahaina",
     "Hilo",
     "Honolulu"
    ],
    "a": "C"
   },
   {
    "q": "Which state's license plates say \"Live Free or Die\"?",
    "o": [
     "Vermont",
     "Maine",
     "New Hampshire"
    ],
    "a": "C"
   },
   {
    "q": "What is the Vice President's role in the Senate?",
    "o": [
     "President of the Senate",
     "Majority Leader",
     "Senate Clerk"
    ],
    "a": "A"
   },
   {
    "q": "Which U.S. national park has the highest peak in North America?",
    "o": [
     "Denali National Park",
     "Mount Rainier National Park",
     "Glacier National Park"
    ],
    "a": "A"
   },
   {
    "q": "What does the Statue of Liberty hold in her raised right hand?",
    "o": [
     "A flag",
     "A torch",
     "A sword"
    ],
    "a": "B"
   },
   {
    "q": "What is the name of the national cemetery in Virginia for U.S. military veterans?",
    "o": [
     "Arlington National Cemetery",
     "Gettysburg National Cemetery",
     "Fort Myer Cemetery"
    ],
    "a": "A"
   },
   {
    "q": "Who is on the face of the $20 bill?",
    "o": [
     "Andrew Jackson",
     "Alexander Hamilton",
     "Ulysses S. Grant"
    ],
    "a": "A"
   },
   {
    "q": "What is the nickname of Texas?",
    "o": [
     "The Lone Star State",
     "The Golden State",
     "The Empire State"
    ],
    "a": "A"
   },
   {
    "q": "What year did the United States land astronauts on the Moon?",
    "o": [
     "1971",
     "1967",
     "1969"
    ],
    "a": "C"
   }
  ],
  "hard": [
   {
    "q": "Who is known as the \"Father of the Constitution\"?",
    "o": [
     "Alexander Hamilton",
     "George Washington",
     "James Madison"
    ],
    "a": "C"
   },
   {
    "q": "Which three people wrote the Federalist Papers?",
    "o": [
     "Hamilton, Madison and Jay",
     "Jefferson, Adams and Franklin",
     "Washington, Madison and Monroe"
    ],
    "a": "A"
   },
   {
    "q": "Which amendment gave women the right to vote?",
    "o": [
     "15th Amendment",
     "19th Amendment",
     "21st Amendment"
    ],
    "a": "B"
   },
   {
    "q": "Which amendment limits the President to two terms?",
    "o": [
     "22nd Amendment",
     "25th Amendment",
     "20th Amendment"
    ],
    "a": "A"
   },
   {
    "q": "Which amendment lowered the voting age to 18?",
    "o": [
     "23rd Amendment",
     "24th Amendment",
     "26th Amendment"
    ],
    "a": "C"
   },
   {
    "q": "Which amendment grants citizenship to people born in the United States?",
    "o": [
     "14th Amendment",
     "15th Amendment",
     "13th Amendment"
    ],
    "a": "A"
   },
   {
    "q": "Which amendment ended Prohibition?",
    "o": [
     "19th Amendment",
     "18th Amendment",
     "21st Amendment"
    ],
    "a": "C"
   },
   {
    "q": "How many electoral votes are needed to win the presidency?",
    "o": [
     "300",
     "270",
     "268"
    ],
    "a": "B"
   },
   {
    "q": "How many total electoral votes are there?",
    "o": [
     "535",
     "538",
     "500"
    ],
    "a": "B"
   },
   {
    "q": "Who was the President during World War I?",
    "o": [
     "Woodrow Wilson",
     "Theodore Roosevelt",
     "William Howard Taft"
    ],
    "a": "A"
   },
   {
    "q": "Who was President at the end of World War II, when atomic bombs were used?",
    "o": [
     "Dwight D. Eisenhower",
     "Franklin D. Roosevelt",
     "Harry S. Truman"
    ],
    "a": "C"
   },
   {
    "q": "Which general became President in 1953 after leading the Allies in Europe?",
    "o": [
     "George Marshall",
     "Douglas MacArthur",
     "Dwight D. Eisenhower"
    ],
    "a": "C"
   },
   {
    "q": "Which U.S. territory is the largest by area in the Caribbean?",
    "o": [
     "U.S. Virgin Islands",
     "Puerto Rico",
     "Navassa Island"
    ],
    "a": "B"
   },
   {
    "q": "Near which Pennsylvania town did United Flight 93 crash on September 11, 2001?",
    "o": [
     "Scranton",
     "Gettysburg",
     "Shanksville"
    ],
    "a": "C"
   },
   {
    "q": "Which President purchased Alaska through his Secretary of State William Seward?",
    "o": [
     "Abraham Lincoln",
     "Andrew Johnson",
     "Ulysses S. Grant"
    ],
    "a": "B"
   },
   {
    "q": "Which war was fought between the North and the South?",
    "o": [
     "Revolutionary War",
     "War of 1812",
     "Civil War"
    ],
    "a": "C"
   },
   {
    "q": "Who was the first Speaker of the House?",
    "o": [
     "Henry Clay",
     "Frederick Muhlenberg",
     "James Madison"
    ],
    "a": "B"
   },
   {
    "q": "Which state was the first to ratify the Constitution in 1787?",
    "o": [
     "New Jersey",
     "Georgia",
     "Delaware"
    ],
    "a": "C"
   },
   {
    "q": "What is the name of the U.S. military academy at West Point?",
    "o": [
     "U.S. Military Academy",
     "The Citadel",
     "U.S. Naval Academy"
    ],
    "a": "A"
   },
   {
    "q": "What was the first national monument, designated in 1906?",
    "o": [
     "Devils Tower",
     "Statue of Liberty",
     "Muir Woods"
    ],
    "a": "A"
   },
   {
    "q": "Which state has the nickname \"The Last Frontier\"?",
    "o": [
     "Wyoming",
     "Montana",
     "Alaska"
    ],
    "a": "C"
   },
   {
    "q": "Which city was the capital of the Confederacy for most of the Civil War?",
    "o": [
     "Richmond",
     "Atlanta",
     "Charleston"
    ],
    "a": "A"
   },
   {
    "q": "Which President signed the Homestead Act of 1862?",
    "o": [
     "Andrew Johnson",
     "Abraham Lincoln",
     "James Buchanan"
    ],
    "a": "B"
   },
   {
    "q": "Which Founding Father is on the $10 bill?",
    "o": [
     "John Adams",
     "Benjamin Franklin",
     "Alexander Hamilton"
    ],
    "a": "C"
   },
   {
    "q": "Who is on the U.S. nickel?",
    "o": [
     "Thomas Jefferson",
     "Abraham Lincoln",
     "Franklin D. Roosevelt"
    ],
    "a": "A"
   },
   {
    "q": "Who is on the U.S. dime?",
    "o": [
     "George Washington",
     "John F. Kennedy",
     "Franklin D. Roosevelt"
    ],
    "a": "C"
   },
   {
    "q": "Which U.S. national park was the most visited in recent years, straddling Tennessee and North Carolina?",
    "o": [
     "Shenandoah",
     "Great Smoky Mountains",
     "Grand Canyon"
    ],
    "a": "B"
   },
   {
    "q": "What is the oldest U.S. city continuously occupied by European settlers, founded in 1565?",
    "o": [
     "Santa Fe, New Mexico",
     "St. Augustine, Florida",
     "Jamestown, Virginia"
    ],
    "a": "B"
   },
   {
    "q": "Which President created the first national monument and expanded national forests?",
    "o": [
     "Theodore Roosevelt",
     "William McKinley",
     "Woodrow Wilson"
    ],
    "a": "A"
   },
   {
    "q": "What is the Latin motto on the Great Seal meaning \"Out of many, one\"?",
    "o": [
     "Annuit Coeptis",
     "Novus Ordo Seclorum",
     "E Pluribus Unum"
    ],
    "a": "C"
   },
   {
    "q": "Which two states were the last to join the Union?",
    "o": [
     "Arizona and New Mexico",
     "Utah and Oklahoma",
     "Alaska and Hawaii"
    ],
    "a": "C"
   },
   {
    "q": "Which President is on the $50 bill?",
    "o": [
     "Ulysses S. Grant",
     "Benjamin Franklin",
     "Andrew Jackson"
    ],
    "a": "A"
   },
   {
    "q": "Which Federalist Paper author later became President?",
    "o": [
     "John Jay",
     "Alexander Hamilton",
     "James Madison"
    ],
    "a": "C"
   },
   {
    "q": "The Missouri Compromise of 1820 dealt mainly with what issue?",
    "o": [
     "Tariffs",
     "Slavery in new territories",
     "Native American lands"
    ],
    "a": "B"
   },
   {
    "q": "The Erie Canal connected the Hudson River to which of the Great Lakes?",
    "o": [
     "Lake Michigan",
     "Lake Erie",
     "Lake Ontario"
    ],
    "a": "B"
   }
  ]
 }
};
