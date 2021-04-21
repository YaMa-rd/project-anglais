//QUESTION
qgen = document.getElementById("qgen");
choice = " ABCD";
constr = "";
question = [
  ["Hello, _______ Richard Smith.", "this", "I", "I’m", "It’s", "C"],
  ["What’s this?  _______ a modem.", "That", "Is", "It", "It’s", "D"],
  ["Madrid is__________ capital of Spain.", "It", "the", "a", "an", "B"],
  [
    "Is Mr stein German?:<br>Person 2: No,  ________ Austrian.",
    "He",
    "She",
    "He’s",
    "She’s",
    "C",
  ],
  [
    "Is this your pen? No, it _______.",
    "isn’t",
    "don’t",
    "doesn’t",
    "not",
    "A",
  ],
  ["________ colour is your USB key.", "Who", "Where", "How", "What", "D"],
  ["Where __________ you from?", "Do", "Are", "Is", "Come", "B"],
  ["I live______ Milan.", "In", "From", "At", "Of", "A"],
  [
    "How ________ you spell your name? R-I-C-H-A-R-D-S.",
    "Are",
    "Write",
    "Does",
    "Do",
    "D",
  ],
  [
    " Is this your office? No, I _______ work here.",
    "Am not",
    "Not",
    "Don’t",
    "Aren’t",
    "C",
  ],
  [
    " Is this a small city? No, it’s_______ big.",
    "Only",
    "Also",
    "But",
    "Quite",
    "D",
  ],
  [
    " _______ laptop is this? It’s Karen’s.",
    "How’s",
    "Who’s",
    "Whose",
    "What’s",
    "C",
  ],
  [
    " Our laptops are ________ than our main competitors’.",
    "Best",
    "better",
    "the best",
    "the better",
    "B",
  ],
  [
    " Sandra ________ for a computer company.",
    "Working",
    "Work",
    "works",
    "Worker",
    "C",
  ],
  [" This programme ______ work;", "Doesn’t", "Isn’t", "Hasn’t", "Don’t", "A"],
  [
    " Do the customers wait here? Yes that’s _______ space.",
    "Their",
    "Our",
    "Other",
    "Her",
    "A",
  ],
  [
    " The price is $515,850. That’s _______ half a million dollars.",
    "Under",
    "Over",
    "Nearly",
    "After",
    "B",
  ],
  [" Do they _______ a connection?", "Got", "Gets", "Hasn’t", "Have", "D"],
  [
    " The meeting is ________ Friday_________ the morning.",
    "On / In",
    "At / On",
    "In / At",
    "To / Of",
    "A",
  ],
  [
    " How much space is _________ in the hard drive?",
    "You",
    "They",
    "About",
    "There",
    "D",
  ],
  [
    " _______ you drive? Yes, but I haven’t got a car.",
    "Know",
    "Can",
    "Are",
    "Shall",
    "B",
  ],
  [" What _______ you like to order?", "Would", "Could", "Have", "Don’t", "A"],
  [
    " Do you sometimes go home for Lunch? No, never I _______ have lunch at work.",
    "Ever",
    "Stay",
    "Always",
    "Prefer",
    "C",
  ],
  [" What are you _____?", "Do", "Doing", "Does", "Did", "B"],
  [
    " If you see Mr Harvey, could you give _______ the fax?",
    "Her",
    "To her",
    "Him",
    "To him",
    "C",
  ],
  [
    " In IT companies, they work with ______ devices.",
    "Latest",
    "The latest",
    "The good",
    "The goodest",
    "B",
  ],
  [
    " Are there ______ jobs in this business industry? Yes, quite _______________.",
    "A lot / a few",
    "Any / good",
    "Much / a lot",
    "Many / a few",
    "D",
  ],
  [
    " Why ______ you leave at 6,00 am? Because I _______ an early appointment.",
    "Were / was",
    "Did / had",
    "Have / made",
    "Are / having",
    "B",
  ],
  [
    " What time are you meeting her?  At 12.30, we’re __________ discuss the agenda.",
    "Going to",
    "will",
    "want to",
    "Meeting",
    "A",
  ],
  [
    " I don’t think ___________ have enough time to fix this today. ",
    "We’re",
    "Will",
    "We’ll",
    "We won’t",
    "C",
  ],
  [
    " After ________ the test, we will restart the machines.",
    "Finishing",
    "Finish",
    "To finish",
    "Finished",
    "A",
  ],
  [
    " I use a special case ______ carry my computer.",
    "Which",
    "That",
    "For",
    "To",
    "D",
  ],
  [
    " If I have to work, I______ be able to go to the party.",
    "Can’t",
    "Don’t",
    "Won’t",
    "Wasn’t",
    "C",
  ],
  [
    " ______ you ever used this state of the art product?",
    "Do",
    "Have",
    "Are",
    "Did",
    "B",
  ],
  [
    " This is the key __________ opens the cabinet.",
    "What",
    "Who",
    "It",
    "That",
    "D",
  ],
  [
    " They’ve both worked here _____ over ten years.",
    "In",
    "For",
    "Since",
    "During",
    "B",
  ],
  [
    " When _____ you _________?  About an hour ago.",
    "Will / arrive",
    "Did / arrive",
    "Have / arrived",
    "Did / arrived",
    "B",
  ],
  [
    " Sales have increased_______ month.",
    "Last",
    "That",
    "During",
    "This",
    "D",
  ],
  [
    " Have you ______ to the headquarters recently? No, I haven’t had time.",
    "Been",
    "Went",
    "Gone",
    "Go",
    "A",
  ],
  [
    " You need an account but you_____________ a password.",
    "Needn’t",
    "Mustn’t",
    "Don’t have to",
    "Don’t need",
    "D",
  ],
  [
    " Sorry, I missed our appointment, I missed the bus, I ________ wait for the next one.",
    "Needed",
    "Had to",
    "Able to",
    "Should",
    "B",
  ],
  [
    " Steve often works until 9.00 pm. He works very ________________.",
    "Later",
    "Lately",
    "Hard",
    "Hardly",
    "C",
  ],
  [
    " Users over the age of 50 have ___________ hours of connection than younger people.",
    "Less",
    "Under",
    "The least",
    "Fewer",
    "D",
  ],
  [
    " Chinese ____ by 1.2 billion people.",
    "Is spoken",
    "Is speaking",
    "Has spoken",
    "Can speak",
    "A",
  ],
  [
    " I can’t find the virus, I think it ________ deleted.",
    "Has been",
    "Was being",
    "To be",
    "Got to be",
    "A",
  ],
  [
    " We’ll change the part when ________ receive it.",
    "We’ve",
    "We’ll",
    "We",
    "We’re",
    "C",
  ],
  [
    " She’s late. She said she _____________ arrive before noon.",
    "Probably",
    "Shall",
    "Will",
    "Would",
    "D",
  ],
  [
    " I ________________ the web, when suddenly the power went off.",
    "Browsed",
    "Have browsed",
    "Am browsing",
    "Was browsing",
    "D",
  ],
  [
    " It was __________ a small tool that I couldn’t use it.",
    "So much",
    "Such",
    "So",
    "Such as",
    "B",
  ],
  [
    " What ___________ you do, if you _________ offered a job abroad?",
    "Would / were",
    "Will / were",
    "Would / are",
    "Will / been",
    "A",
  ],
  [
    " Excuse me, could you tell me how much ________, please?",
    "Is this",
    "This costs",
    "Does this cost",
    "Cost this",
    "B",
  ],
  [
    " She asked _________ I ___________ to troubleshoot it.",
    "whether / wanted",
    "If / Want",
    "Did / want",
    "That / wanted",
    "A",
  ],
  [
    " Hi, I’m sorry, am I late? No, I _____________ long.",
    "Haven’t waited",
    "Haven’t been waiting",
    "Didn’t wait",
    "wasn’t waiting",
    "B",
  ],
  [
    " They haven’t made a decision. The plan is __________ considered at the moment.",
    "To be",
    "Been",
    "Having",
    "Being",
    "D",
  ],
  [
    " This is their e-mail address, isn’t it? Yes and the fax is __________ too.",
    "Their",
    "Theirs",
    "Them",
    "Of them",
    "B",
  ],
  [
    " Do you know the place? Of course, I ______________ there.",
    "Use lived",
    "Used to living",
    "Used live",
    "Used to live",
    "D",
  ],
  [
    " There were plenty of cables so I ____________________ connect everything.",
    "Ought to",
    "Able to",
    "was allowed to",
    "managed to",
    "D",
  ],
  [
    " When he told me his name, I realized I _______________ him before.",
    "Had met",
    "Was met",
    "was meeting",
    "had been meeting",
    "A",
  ],
  [
    " They’d learn the language quite quickly if they practised often, ___________?",
    "Would the",
    "Wouldn’t they",
    "Will they",
    "Hadn’t they",
    "B",
  ],
  [
    " I think Sarah likes the idea. Yes, ___________",
    "As me",
    "Doesn’t she",
    "So do I",
    "Neither do I",
    "C",
  ],
  [
    " Our customers are very _________ before the release of a new product.",
    "To excite",
    "Excitedly",
    "Exciting",
    "Excited",
    "D",
  ],
  [
    " The new machine isn’t bad but we’re not ___________ satisfied with it.",
    "Relatively",
    "Reasonably",
    "Fairly",
    "totally",
    "D",
  ],
  [
    " Danger. Do not ____________ off until the vehicle has stopped.",
    "Attempt to get",
    "Attempt get",
    "Attempt a get",
    "attempt in get",
    "A",
  ],
  [
    " It’s noisy in the office because the subway trains run directly ______ the building.",
    "Among",
    "Beyond",
    "Beneath",
    "Outdoors",
    "C",
  ],
  [
    " Remove the film from the camera in a dark room. Don’t take ___________ here.",
    "Out",
    "It out",
    "Out it",
    "It",
    "B",
  ],
  [
    " They haven’t asked me for any money. ______ they to ask, however, I’d refuse.",
    "Would",
    "Shall",
    "Were",
    "Should",
    "C",
  ],
  [
    " The crime rate is very low here. I never worry __________ home.",
    "To walk",
    "For walking",
    "About to walk",
    "About walking",
    "D",
  ],
  [
    " If the hotel ____________ been a bit quieter, we ______ enjoyed our stay.",
    "Would / have",
    "Had / would have",
    "Would have / had",
    "Has / would have",
    "B",
  ],
  [
    " You should drive more carefully. What do you mean? I _______ carefully.",
    "Do drive",
    "Very drive",
    "Ever drive",
    "Drive of course",
    "A",
  ],
  [
    " Where shall I put this plant? _________ you want. I don’t mind.",
    "Whereas",
    "Where will",
    "Where any",
    "Wherever",
    "D",
  ],
  [
    " Did you install the modem yourself? No, I ________ by a computer specialist.",
    "Had to install it",
    "Installed it",
    "Had it installed",
    "Have it installed",
    "C",
  ],
  [
    " Booking a month in advance is much cheaper. _________ booked a bit earlier.",
    "If only I have",
    "Only have I",
    "If only I had",
    "Only had I",
    "C",
  ],
  [
    " Cynthia screamed as the ______ bug crawled across the bed.",
    "Black big hairy",
    "Big black hairy",
    "Hairy black big",
    "Black hairy big",
    "B",
  ],
  [
    " The passengers,__________ business travellers, were put on a later flight.",
    "Most of whom",
    "Mostly which",
    "Many who",
    "Much of those",
    "A",
  ],
  [
    " All our employees __________ given a $500 bonus after all their hard work.",
    "ought",
    "ought to",
    "should",
    "ought to be",
    "D",
  ],
  [
    " They should be here by now. They __________ got lost.",
    "might be",
    "have to",
    "must have",
    "could be",
    "C",
  ],
  [
    " Come over for dinner next month. By then, Eric __________ decorating the house.",
    "will have been finished",
    "has finished",
    "will finish having",
    "will have finished",
    "D",
  ],
  [
    " __________ the current economic problems, the company is doing well.",
    "Although",
    "In spite of",
    "As though",
    "Even though",
    "B",
  ],
  [
    " The regulations require that all appliances __________ using the new procedure.",
    "be tested",
    "are tested",
    "are to test",
    "have tested",
    "A",
  ],
  [
    " I want to keep my plans secret, so don't tell anybody, __________?",
    "do you",
    "don't you",
    "will you",
    "won't you",
    "C",
  ],
  [
    " __________ reasonable. Let's try to find a compromise.",
    "To be",
    "You be",
    "We be",
    "Be",
    "D",
  ],
  [
    " I'm allowed to smoke in here, _______ I?",
    "am I",
    "shall I",
    "aren't I",
    "isn't it",
    "C",
  ],
  [
    " The penguin __________ the only species able to survive in such conditions.",
    "is thought to be",
    "is thinking as",
    "in thinking to be",
    "is thought that is",
    "A",
  ],
  [
    " Let's cross the road. He __________ for us on the other side of the street.",
    "maybe is waiting",
    "waits maybe",
    "might be waiting",
    "can be waiting",
    "C",
  ],
  [
    "__________ I known this was going to be so boring, I would never have come.",
    "Should",
    "Would",
    "Had",
    "If",
    "C",
  ],
  [
    " I __________ if you might like to come to the movies with me.",
    "was wondering",
    "would wonder",
    "could wonder",
    "have wondered",
    "A",
  ],
  [
    " They weren't having a conversation. They were just shouting at __________.",
    "each and other",
    "each other",
    "each another",
    "each and the other",
    "B",
  ],
  [
    " If you __________ tried to pick up that table, you __________ have a backache now.",
    "haven't / don't",
    "hadn't / wouldn't",
    "didn't have / shouldn't",
    "wouldn't have / wouldn't",
    "B",
  ],
  [
    " I don't mind watching tennis, but __________ play myself.",
    "I'd prefer",
    "I rather",
    "I'd rather",
    "I prefer",
    "C",
  ],
  [
    " __________ had it stopped raining than the sun came out.",
    "As soon as",
    "The sooner",
    "No sooner",
    "Soon as",
    "C",
  ],
  [
    " Did you remember __________ off the heat before we left?",
    "turn",
    "to turn",
    "turning",
    "turning it",
    "B",
  ],
  [
    " If we hadn't missed our flight __________ by the pool in Barbados right now.",
    "we'd sit",
    "we'd been sitting",
    "we'd have sat",
    "we'd be sitting",
    "D",
  ],
  [
    " Take extreme care __________ this surface. Do not use solvents or detergents.",
    "to clean",
    "for cleaning",
    "when to clean",
    "when cleaning",
    "D",
  ],
  [
    " Another failure! What do you _________? Bad luck?",
    "put it on",
    "put down on it",
    "put it down to",
    "put to it",
    "C",
  ],
  [
    " I can run as fast as everyone except Robin. He's the only one I can't __________.",
    "keep up",
    "keep onto",
    "keep with",
    "keep up with",
    "D",
  ],
  [
    " I'm tempted to accept, but I feel it may be inappropriate to __________.",
    "do so",
    "do such",
    "to be doing so",
    "do this so",
    "A",
  ],
  [
    " Claimants must quantify the value of any loss, __________ reasonable.",
    "as to how it is",
    "in so far as is",
    "to be as it is",
    "as for it being",
    "B",
  ],
  [
    "  __________ I would like to join you, unfortunately I have a __________ engagement.",
    "As much as / prior",
    "Be it that / priority",
    "As sure / private",
    "Seeing / previous",
    "A",
  ],
  [
    " They should remain in jail __________ time as they realize the error of their ways.",
    "during that",
    "until such",
    "beyond so much",
    "so far as a",
    "B",
  ],
  [
    "__________ the ingenious, he surreptitiously acquired himself a copy of the answer key, __________ gaining himself a pronounced advantage in the Placement Test.",
    "Ever / thereby",
    "Such / moreover",
    "Him as / here",
    "Like / so as",
    "A",
  ],
];
results = " ABCD";
for (i = 0; i < question.length; i++) {
  indice = i + 1;
  constr +=
    "<form><p id=Q" +
    indice +
    ">" +
    indice +
    " " +
    question[i][0] +
    "<span id=R" +
    indice +
    "></span></p>";
  for (j = 1; j < question[i].length - 1; j++) {
    constr +=
      '<input type="radio" id="Q' +
      indice +
      choice[j] +
      '" name="' +
      indice +
      '" value="' +
      choice[j] +
      '">';
    constr +=
      '<label for="Q' +
      indice +
      choice[j] +
      '">' +
      question[i][j] +
      "</label><br>";
  }
  constr += "</form>";
}
qgen.innerHTML = constr;
cat = document.getElementById("category");
btn = document.getElementById("validate");
ans = document.getElementById("answer");
t_score = document.getElementById("t_score");
t_cat = document.getElementById("t_cat");

//RESULTS
btn.addEventListener("click", function () {
  calculateResult();
});

function calculateResult()
{
  score = 0;
  for (i = 0; i < question.length; i++) {
    ind = i + 1;
    resp = "Q" + ind + question[i][5];
    if (document.getElementById(resp).checked == true) {
      score += 1;
      document.getElementById("Q" + ind).style.color = "green";
    } else {
      document.getElementById("Q" + ind).style.color = "red";
      document.getElementById("R" + ind).innerHTML =
        " The right answer is: " +
        question[i][results.indexOf(question[i][5])] +
        ".";
    }
  }
  console.log(score);
  btn.setAttribute("disabled", "");
  t_score.removeAttribute("hidden");
  t_cat.removeAttribute("hidden");
  ans.innerHTML = "You have scored " + score + " point.";
  rank = "";
  if (score < 13) {
    rank =
      "ELEMENTARY ? A1 TOEIC 120 pts <br>Peut comprendre et utiliser des expressions quotidiennes ainsi que des énoncés très simples qui visent à satisfaire des besoins concrets. Peut se présenter ou présenter quelqu’un et poser à une personne des questions la concernant - par exemple, sur son lieu d’habitation, ses relations, ce qui lui appartient, etc. - et peut répondre au même type de questions. Peut communiquer de façon simple si l’interlocuteur parle lentement et distinctement et se montre coopératif.";
  } else if (score < 41) {
    rank =
      "PRE-INTERMEDIATE ? A2  TOEIC 225 pts<br>Peut comprendre des phrases isolées et des expressions fréquemment utilisées en relation avec des domaines immédiats de priorité (par exemple, informations personnelles et familiales simples, achats, environnement proche, travail). Peut communiquer lors de tâches simples et habituelles ne demandant qu’un échange d’informations simple et direct sur des sujets familiers et habituels. Peut décrire avec des moyens simples sa formation, son environnement immédiat et évoquer des sujets qui correspondent à des besoins immédiats.";
  } else if (score < 61) {
    rank =
      "INTERMEDIATE ? B1 TOEIC 550 pts<br>Peut comprendre les points essentiels quand un langage clair et standard est utilisé et s’il s’agit de choses familières dans le travail, à l’école, dans les loisirs, etc. Peut se débrouiller dans la plupart des situations rencontrées en voyage dans une région où la langue cible est parlée. Peut produire un discours simple et cohérent sur des sujets familiers et dans ses domaines d’intérêt. Peut raconter unévénement, une expérience ou un rêve, décrire un espoir ou un but et exposer brièvement des raisons ou explications pour un projet ou une idée.";
  } else if (score < 81) {
    rank =
      "UPPER-INTERMEDIATE ? B2 TOEIC 785 ptsPeut comprendre le contenu essentiel de sujets concrets ou abstraits dans un texte complexe, y compris une discussion technique dans sa spécialité. Peut communiquer avec un degré de spontanéité et d’aisance tel qu’une conversation avec un locuteur natif ne comportant pas de tension ni pour l’un ni pour l’autre. Peut s’exprimer de façon claire et détaillée sur une grande gamme de sujets, émettre un avis sur un sujet d’actualité et exposer les avantages et les inconvénients de différentes possibilités.";
  } else {
    rank =
      "ADVANCED ? C1 TOEIC 945 ptsPeut  comprendre  une  grande  gamme  de  textes  longs  et  exigeants,  ainsi  que  saisir  des  significations  implicites.  Peut  s’exprimer spontanément et couramment sans trop apparemment devoir chercher ses mots. Peut utiliser la langue de façon efficace et souple dans sa vie sociale, professionnelle ou académique. Peut s’exprimer sur des sujets complexes de façon claire et bien structurée et manifester son contrôle des outils d’organisation, d’articulation et de cohésion du discours.";
  }
  cat.innerHTML = rank;
  removeForm();
}
qgen = document.getElementById("qgen");
choice = " ABCD";
constr = "";
question = [
  ["Hello, _______ Richard Smith.", "this", "I", "I’m", "It’s", "C"],
  ["What’s this?  _______ a modem.", "That", "Is", "It", "It’s", "D"],
  ["Madrid is__________ capital of Spain.", "It", "the", "a", "an", "B"],
  [
    "Is Mr stein German?:<br>Person 2: No,  ________ Austrian.",
    "He",
    "She",
    "He’s",
    "She’s",
    "C",
  ],
  [
    "Is this your pen? No, it _______.",
    "isn’t",
    "don’t",
    "doesn’t",
    "not",
    "A",
  ],
  ["________ colour is your USB key.", "Who", "Where", "How", "What", "D"],
  ["Where __________ you from?", "Do", "Are", "Is", "Come", "B"],
  ["I live______ Milan.", "In", "From", "At", "Of", "A"],
  [
    "How ________ you spell your name? R-I-C-H-A-R-D-S.",
    "Are",
    "Write",
    "Does",
    "Do",
    "D",
  ],
  [
    " Is this your office? No, I _______ work here.",
    "Am not",
    "Not",
    "Don’t",
    "Aren’t",
    "C",
  ],
  [
    " Is this a small city? No, it’s_______ big.",
    "Only",
    "Also",
    "But",
    "Quite",
    "D",
  ],
  [
    " _______ laptop is this? It’s Karen’s.",
    "How’s",
    "Who’s",
    "Whose",
    "What’s",
    "C",
  ],
  [
    " Our laptops are ________ than our main competitors’.",
    "Best",
    "better",
    "the best",
    "the better",
    "B",
  ],
  [
    " Sandra ________ for a computer company.",
    "Working",
    "Work",
    "works",
    "Worker",
    "C",
  ],
  [" This programme ______ work;", "Doesn’t", "Isn’t", "Hasn’t", "Don’t", "A"],
  [
    " Do the customers wait here? Yes that’s _______ space.",
    "Their",
    "Our",
    "Other",
    "Her",
    "A",
  ],
  [
    " The price is $515,850. That’s _______ half a million dollars.",
    "Under",
    "Over",
    "Nearly",
    "After",
    "B",
  ],
  [" Do they _______ a connection?", "Got", "Gets", "Hasn’t", "Have", "D"],
  [
    " The meeting is ________ Friday_________ the morning.",
    "On / In",
    "At / On",
    "In / At",
    "To / Of",
    "A",
  ],
  [
    " How much space is _________ in the hard drive?",
    "You",
    "They",
    "About",
    "There",
    "D",
  ],
  [
    " _______ you drive? Yes, but I haven’t got a car.",
    "Know",
    "Can",
    "Are",
    "Shall",
    "B",
  ],
  [" What _______ you like to order?", "Would", "Could", "Have", "Don’t", "A"],
  [
    " Do you sometimes go home for Lunch? No, never I _______ have lunch at work.",
    "Ever",
    "Stay",
    "Always",
    "Prefer",
    "C",
  ],
  [" What are you _____?", "Do", "Doing", "Does", "Did", "B"],
  [
    " If you see Mr Harvey, could you give _______ the fax?",
    "Her",
    "To her",
    "Him",
    "To him",
    "C",
  ],
  [
    " In IT companies, they work with ______ devices.",
    "Latest",
    "The latest",
    "The good",
    "The goodest",
    "B",
  ],
  [
    " Are there ______ jobs in this business industry? Yes, quite _______________.",
    "A lot / a few",
    "Any / good",
    "Much / a lot",
    "Many / a few",
    "D",
  ],
  [
    " Why ______ you leave at 6,00 am? Because I _______ an early appointment.",
    "Were / was",
    "Did / had",
    "Have / made",
    "Are / having",
    "B",
  ],
  [
    " What time are you meeting her?  At 12.30, we’re __________ discuss the agenda.",
    "Going to",
    "will",
    "want to",
    "Meeting",
    "A",
  ],
  [
    " I don’t think ___________ have enough time to fix this today. ",
    "We’re",
    "Will",
    "We’ll",
    "We won’t",
    "C",
  ],
  [
    " After ________ the test, we will restart the machines.",
    "Finishing",
    "Finish",
    "To finish",
    "Finished",
    "A",
  ],
  [
    " I use a special case ______ carry my computer.",
    "Which",
    "That",
    "For",
    "To",
    "D",
  ],
  [
    " If I have to work, I______ be able to go to the party.",
    "Can’t",
    "Don’t",
    "Won’t",
    "Wasn’t",
    "C",
  ],
  [
    " ______ you ever used this state of the art product?",
    "Do",
    "Have",
    "Are",
    "Did",
    "B",
  ],
  [
    " This is the key __________ opens the cabinet.",
    "What",
    "Who",
    "It",
    "That",
    "D",
  ],
  [
    " They’ve both worked here _____ over ten years.",
    "In",
    "For",
    "Since",
    "During",
    "B",
  ],
  [
    " When _____ you _________?  About an hour ago.",
    "Will / arrive",
    "Did / arrive",
    "Have / arrived",
    "Did / arrived",
    "B",
  ],
  [
    " Sales have increased_______ month.",
    "Last",
    "That",
    "During",
    "This",
    "D",
  ],
  [
    " Have you ______ to the headquarters recently? No, I haven’t had time.",
    "Been",
    "Went",
    "Gone",
    "Go",
    "A",
  ],
  [
    " You need an account but you_____________ a password.",
    "Needn’t",
    "Mustn’t",
    "Don’t have to",
    "Don’t need",
    "D",
  ],
  [
    " Sorry, I missed our appointment, I missed the bus, I ________ wait for the next one.",
    "Needed",
    "Had to",
    "Able to",
    "Should",
    "B",
  ],
  [
    " Steve often works until 9.00 pm. He works very ________________.",
    "Later",
    "Lately",
    "Hard",
    "Hardly",
    "C",
  ],
  [
    " Users over the age of 50 have ___________ hours of connection than younger people.",
    "Less",
    "Under",
    "The least",
    "Fewer",
    "D",
  ],
  [
    " Chinese ____ by 1.2 billion people.",
    "Is spoken",
    "Is speaking",
    "Has spoken",
    "Can speak",
    "A",
  ],
  [
    " I can’t find the virus, I think it ________ deleted.",
    "Has been",
    "Was being",
    "To be",
    "Got to be",
    "A",
  ],
  [
    " We’ll change the part when ________ receive it.",
    "We’ve",
    "We’ll",
    "We",
    "We’re",
    "C",
  ],
  [
    " She’s late. She said she _____________ arrive before noon.",
    "Probably",
    "Shall",
    "Will",
    "Would",
    "D",
  ],
  [
    " I ________________ the web, when suddenly the power went off.",
    "Browsed",
    "Have browsed",
    "Am browsing",
    "Was browsing",
    "D",
  ],
  [
    " It was __________ a small tool that I couldn’t use it.",
    "So much",
    "Such",
    "So",
    "Such as",
    "B",
  ],
  [
    " What ___________ you do, if you _________ offered a job abroad?",
    "Would / were",
    "Will / were",
    "Would / are",
    "Will / been",
    "A",
  ],
  [
    " Excuse me, could you tell me how much ________, please?",
    "Is this",
    "This costs",
    "Does this cost",
    "Cost this",
    "B",
  ],
  [
    " She asked _________ I ___________ to troubleshoot it.",
    "whether / wanted",
    "If / Want",
    "Did / want",
    "That / wanted",
    "A",
  ],
  [
    " Hi, I’m sorry, am I late? No, I _____________ long.",
    "Haven’t waited",
    "Haven’t been waiting",
    "Didn’t wait",
    "wasn’t waiting",
    "B",
  ],
  [
    " They haven’t made a decision. The plan is __________ considered at the moment.",
    "To be",
    "Been",
    "Having",
    "Being",
    "D",
  ],
  [
    " This is their e-mail address, isn’t it? Yes and the fax is __________ too.",
    "Their",
    "Theirs",
    "Them",
    "Of them",
    "B",
  ],
  [
    " Do you know the place? Of course, I ______________ there.",
    "Use lived",
    "Used to living",
    "Used live",
    "Used to live",
    "D",
  ],
  [
    " There were plenty of cables so I ____________________ connect everything.",
    "Ought to",
    "Able to",
    "was allowed to",
    "managed to",
    "D",
  ],
  [
    " When he told me his name, I realized I _______________ him before.",
    "Had met",
    "Was met",
    "was meeting",
    "had been meeting",
    "A",
  ],
  [
    " They’d learn the language quite quickly if they practised often, ___________?",
    "Would the",
    "Wouldn’t they",
    "Will they",
    "Hadn’t they",
    "B",
  ],
  [
    " I think Sarah likes the idea. Yes, ___________",
    "As me",
    "Doesn’t she",
    "So do I",
    "Neither do I",
    "C",
  ],
  [
    " Our customers are very _________ before the release of a new product.",
    "To excite",
    "Excitedly",
    "Exciting",
    "Excited",
    "D",
  ],
  [
    " The new machine isn’t bad but we’re not ___________ satisfied with it.",
    "Relatively",
    "Reasonably",
    "Fairly",
    "totally",
    "D",
  ],
  [
    " Danger. Do not ____________ off until the vehicle has stopped.",
    "Attempt to get",
    "Attempt get",
    "Attempt a get",
    "attempt in get",
    "A",
  ],
  [
    " It’s noisy in the office because the subway trains run directly ______ the building.",
    "Among",
    "Beyond",
    "Beneath",
    "Outdoors",
    "C",
  ],
  [
    " Remove the film from the camera in a dark room. Don’t take ___________ here.",
    "Out",
    "It out",
    "Out it",
    "It",
    "B",
  ],
  [
    " They haven’t asked me for any money. ______ they to ask, however, I’d refuse.",
    "Would",
    "Shall",
    "Were",
    "Should",
    "C",
  ],
  [
    " The crime rate is very low here. I never worry __________ home.",
    "To walk",
    "For walking",
    "About to walk",
    "About walking",
    "D",
  ],
  [
    " If the hotel ____________ been a bit quieter, we ______ enjoyed our stay.",
    "Would / have",
    "Had / would have",
    "Would have / had",
    "Has / would have",
    "B",
  ],
  [
    " You should drive more carefully. What do you mean? I _______ carefully.",
    "Do drive",
    "Very drive",
    "Ever drive",
    "Drive of course",
    "A",
  ],
  [
    " Where shall I put this plant? _________ you want. I don’t mind.",
    "Whereas",
    "Where will",
    "Where any",
    "Wherever",
    "D",
  ],
  [
    " Did you install the modem yourself? No, I ________ by a computer specialist.",
    "Had to install it",
    "Installed it",
    "Had it installed",
    "Have it installed",
    "C",
  ],
  [
    " Booking a month in advance is much cheaper. _________ booked a bit earlier.",
    "If only I have",
    "Only have I",
    "If only I had",
    "Only had I",
    "C",
  ],
  [
    " Cynthia screamed as the ______ bug crawled across the bed.",
    "Black big hairy",
    "Big black hairy",
    "Hairy black big",
    "Black hairy big",
    "B",
  ],
  [
    " The passengers,__________ business travellers, were put on a later flight.",
    "Most of whom",
    "Mostly which",
    "Many who",
    "Much of those",
    "A",
  ],
  [
    " All our employees __________ given a $500 bonus after all their hard work.",
    "ought",
    "ought to",
    "should",
    "ought to be",
    "D",
  ],
  [
    " They should be here by now. They __________ got lost.",
    "might be",
    "have to",
    "must have",
    "could be",
    "C",
  ],
  [
    " Come over for dinner next month. By then, Eric __________ decorating the house.",
    "will have been finished",
    "has finished",
    "will finish having",
    "will have finished",
    "D",
  ],
  [
    " __________ the current economic problems, the company is doing well.",
    "Although",
    "In spite of",
    "As though",
    "Even though",
    "B",
  ],
  [
    " The regulations require that all appliances __________ using the new procedure.",
    "be tested",
    "are tested",
    "are to test",
    "have tested",
    "A",
  ],
  [
    " I want to keep my plans secret, so don't tell anybody, __________?",
    "do you",
    "don't you",
    "will you",
    "won't you",
    "C",
  ],
  [
    " __________ reasonable. Let's try to find a compromise.",
    "To be",
    "You be",
    "We be",
    "Be",
    "D",
  ],
  [
    " I'm allowed to smoke in here, _______ I?",
    "am I",
    "shall I",
    "aren't I",
    "isn't it",
    "C",
  ],
  [
    " The penguin __________ the only species able to survive in such conditions.",
    "is thought to be",
    "is thinking as",
    "in thinking to be",
    "is thought that is",
    "A",
  ],
  [
    " Let's cross the road. He __________ for us on the other side of the street.",
    "maybe is waiting",
    "waits maybe",
    "might be waiting",
    "can be waiting",
    "C",
  ],
  [
    "__________ I known this was going to be so boring, I would never have come.",
    "Should",
    "Would",
    "Had",
    "If",
    "C",
  ],
  [
    " I __________ if you might like to come to the movies with me.",
    "was wondering",
    "would wonder",
    "could wonder",
    "have wondered",
    "A",
  ],
  [
    " They weren't having a conversation. They were just shouting at __________.",
    "each and other",
    "each other",
    "each another",
    "each and the other",
    "B",
  ],
  [
    " If you __________ tried to pick up that table, you __________ have a backache now.",
    "haven't / don't",
    "hadn't / wouldn't",
    "didn't have / shouldn't",
    "wouldn't have / wouldn't",
    "B",
  ],
  [
    " I don't mind watching tennis, but __________ play myself.",
    "I'd prefer",
    "I rather",
    "I'd rather",
    "I prefer",
    "C",
  ],
  [
    " __________ had it stopped raining than the sun came out.",
    "As soon as",
    "The sooner",
    "No sooner",
    "Soon as",
    "C",
  ],
  [
    " Did you remember __________ off the heat before we left?",
    "turn",
    "to turn",
    "turning",
    "turning it",
    "B",
  ],
  [
    " If we hadn't missed our flight __________ by the pool in Barbados right now.",
    "we'd sit",
    "we'd been sitting",
    "we'd have sat",
    "we'd be sitting",
    "D",
  ],
  [
    " Take extreme care __________ this surface. Do not use solvents or detergents.",
    "to clean",
    "for cleaning",
    "when to clean",
    "when cleaning",
    "D",
  ],
  [
    " Another failure! What do you _________? Bad luck?",
    "put it on",
    "put down on it",
    "put it down to",
    "put to it",
    "C",
  ],
  [
    " I can run as fast as everyone except Robin. He's the only one I can't __________.",
    "keep up",
    "keep onto",
    "keep with",
    "keep up with",
    "D",
  ],
  [
    " I'm tempted to accept, but I feel it may be inappropriate to __________.",
    "do so",
    "do such",
    "to be doing so",
    "do this so",
    "A",
  ],
  [
    " Claimants must quantify the value of any loss, __________ reasonable.",
    "as to how it is",
    "in so far as is",
    "to be as it is",
    "as for it being",
    "B",
  ],
  [
    "  __________ I would like to join you, unfortunately I have a __________ engagement.",
    "As much as / prior",
    "Be it that / priority",
    "As sure / private",
    "Seeing / previous",
    "A",
  ],
  [
    " They should remain in jail __________ time as they realize the error of their ways.",
    "during that",
    "until such",
    "beyond so much",
    "so far as a",
    "B",
  ],
  [
    "__________ the ingenious, he surreptitiously acquired himself a copy of the answer key, __________ gaining himself a pronounced advantage in the Placement Test.",
    "Ever / thereby",
    "Such / moreover",
    "Him as / here",
    "Like / so as",
    "A",
  ],
];
results = " ABCD";
for (i = 0; i < question.length; i++) {
  indice = i + 1;
  constr +=
    "<form><p id=Q" +
    indice +
    ">" +
    indice +
    " " +
    question[i][0] +
    "<span id=R" +
    indice +
    "></span></p>";
  for (j = 1; j < question[i].length - 1; j++) {
    constr +=
      '<input type="radio" id="Q' +
      indice +
      choice[j] +
      '" name="' +
      indice +
      '" value="' +
      choice[j] +
      '">';
    constr +=
      '<label for="Q' +
      indice +
      choice[j] +
      '">' +
      question[i][j] +
      "</label><br>";
  }
  constr += "</form>";
}
qgen.innerHTML = constr;
cat = document.getElementById("category");
btn = document.getElementById("validate");
ans = document.getElementById("answer");
t_score = document.getElementById("t_score");
t_cat = document.getElementById("t_cat");
btn.addEventListener("click", function () {
  score = 0;
  for (i = 0; i < question.length; i++) {
    ind = i + 1;
    resp = "Q" + ind + question[i][5];
    if (document.getElementById(resp).checked == true) {
      score += 1;
      document.getElementById("Q" + ind).style.color = "green";
    } else {
      document.getElementById("Q" + ind).style.color = "red";
      document.getElementById("R" + ind).innerHTML =
        " The right answer is: " +
        question[i][results.indexOf(question[i][5])] +
        ".";
    }
  }
  console.log(score);
  btn.setAttribute("disabled", "");
  t_score.removeAttribute("hidden");
  t_cat.removeAttribute("hidden");
  ans.innerHTML = "You have scored " + score + " point.";
  rank = "";
  if (score < 13) {
    rank =
      "ELEMENTARY ? A1 TOEIC 120 pts <br>Peut comprendre et utiliser des expressions quotidiennes ainsi que des énoncés très simples qui visent à satisfaire des besoins concrets. Peut se présenter ou présenter quelqu’un et poser à une personne des questions la concernant - par exemple, sur son lieu d’habitation, ses relations, ce qui lui appartient, etc. - et peut répondre au même type de questions. Peut communiquer de façon simple si l’interlocuteur parle lentement et distinctement et se montre coopératif.";
  } else if (score < 41) {
    rank =
      "PRE-INTERMEDIATE ? A2  TOEIC 225 pts<br>Peut comprendre des phrases isolées et des expressions fréquemment utilisées en relation avec des domaines immédiats de priorité (par exemple, informations personnelles et familiales simples, achats, environnement proche, travail). Peut communiquer lors de tâches simples et habituelles ne demandant qu’un échange d’informations simple et direct sur des sujets familiers et habituels. Peut décrire avec des moyens simples sa formation, son environnement immédiat et évoquer des sujets qui correspondent à des besoins immédiats.";
  } else if (score < 61) {
    rank =
      "INTERMEDIATE ? B1 TOEIC 550 pts<br>Peut comprendre les points essentiels quand un langage clair et standard est utilisé et s’il s’agit de choses familières dans le travail, à l’école, dans les loisirs, etc. Peut se débrouiller dans la plupart des situations rencontrées en voyage dans une région où la langue cible est parlée. Peut produire un discours simple et cohérent sur des sujets familiers et dans ses domaines d’intérêt. Peut raconter unévénement, une expérience ou un rêve, décrire un espoir ou un but et exposer brièvement des raisons ou explications pour un projet ou une idée.";
  } else if (score < 81) {
    rank =
      "UPPER-INTERMEDIATE ? B2 TOEIC 785 ptsPeut comprendre le contenu essentiel de sujets concrets ou abstraits dans un texte complexe, y compris une discussion technique dans sa spécialité. Peut communiquer avec un degré de spontanéité et d’aisance tel qu’une conversation avec un locuteur natif ne comportant pas de tension ni pour l’un ni pour l’autre. Peut s’exprimer de façon claire et détaillée sur une grande gamme de sujets, émettre un avis sur un sujet d’actualité et exposer les avantages et les inconvénients de différentes possibilités.";
  } else {
    rank =
      "ADVANCED ? C1 TOEIC 945 ptsPeut  comprendre  une  grande  gamme  de  textes  longs  et  exigeants,  ainsi  que  saisir  des  significations  implicites.  Peut  s’exprimer spontanément et couramment sans trop apparemment devoir chercher ses mots. Peut utiliser la langue de façon efficace et souple dans sa vie sociale, professionnelle ou académique. Peut s’exprimer sur des sujets complexes de façon claire et bien structurée et manifester son contrôle des outils d’organisation, d’articulation et de cohésion du discours.";
  }
  cat.innerHTML = rank;
});

//FONCTION AJOUTE
function removeForm()
{
  let questions = document.querySelectorAll("form");
  let questionsArray = Array.from(questions);
  for (let i=0; i<questionsArray.length; i++)
  {
    questionsArray[i].remove();
  }
  document.querySelector("#validate").remove();
  document.querySelector("h2").remove();

  showAllDescriptif();
}

function showAllDescriptif()
{
  console.log("test")
  let allDescriptifContainer = document.createElement("div");
  allDescriptifContainer.setAttribute("id", "allDescriptifContainer");

  let allDescriptifTitle = document.createElement("h2");
  allDescriptifTitle.innerHTML = "All descriptions";

  let elementaryContainer = document.createElement("div");
  elementaryContainer.innerHTML = "<h3>ELEMENTARY 0 - 13 </h3><br><h4>A1 TOEIC 120 pts</h4><br><p>Peut comprendre et utiliser des expressions quotidiennes ainsi que des énoncés très simples qui visent à satisfaire des besoins concrets. Peut se présenter ou présenter quelqu’un et poser à une personne des questions la concernant - par exemple, sur son lieu d’habitation, ses relations, ce qui lui appartient, etc. - et peut répondre au même type de questions. Peut communiquer de façon simple si l’interlocuteur parle lentement et distinctement et se montre coopératif.</p>";
  
  let preelementaryContainer = document.createElement("div");
  preelementaryContainer.innerHTML = "<h3>PRE-INTERMEDIATE 13 - 41 </h3><br><h4>A2  TOEIC 225 pts</h4><br><p>Peut comprendre des phrases isolées et des expressions fréquemment utilisées en relation avec des domaines immédiats de priorité (par exemple, informations personnelles et familiales simples, achats, environnement proche, travail). Peut communiquer lors de tâches simples et habituelles ne demandant qu’un échange d’informations simple et direct sur des sujets familiers et habituels. Peut décrire avec des moyens simples sa formation, son environnement immédiat et évoquer des sujets qui correspondent à des besoins immédiats.</p>";
  
  let intermediateContainer = document.createElement("div");
  intermediateContainer.innerHTML = "<h3>INTERMEDIATE 41 - 61</h3> <br><h4>B1 TOEIC 550 pts</h4><br><p><br>Peut comprendre les points essentiels quand un langage clair et standard est utilisé et s’il s’agit de choses familières dans le travail, à l’école, dans les loisirs, etc. Peut se débrouiller dans la plupart des situations rencontrées en voyage dans une région où la langue cible est parlée. Peut produire un discours simple et cohérent sur des sujets familiers et dans ses domaines d’intérêt. Peut raconter unévénement, une expérience ou un rêve, décrire un espoir ou un but et exposer brièvement des raisons ou explications pour un projet ou une idée.</p>";
  
  let upperIntermediateContainer = document.createElement("div");
  upperIntermediateContainer.innerHTML = "<h3>UPPER-INTERMEDIATE 61 - 81</h3><br><h4>B2 TOEIC 785 pts</h4><br><p>Peut comprendre le contenu essentiel de sujets concrets ou abstraits dans un texte complexe, y compris une discussion technique dans sa spécialité. Peut communiquer avec un degré de spontanéité et d’aisance tel qu’une conversation avec un locuteur natif ne comportant pas de tension ni pour l’un ni pour l’autre. Peut s’exprimer de façon claire et détaillée sur une grande gamme de sujets, émettre un avis sur un sujet d’actualité et exposer les avantages et les inconvénients de différentes possibilités.</p>";
  
  let advancedContainer = document.createElement("div");
  advancedContainer.innerHTML = "<h3>ADVANCED >81 </h3> <br> <h4>C1 TOEIC 945 pts</h4><br><p>Peut  comprendre  une  grande  gamme  de  textes  longs  et  exigeants,  ainsi  que  saisir  des  significations  implicites.  Peut  s’exprimer spontanément et couramment sans trop apparemment devoir chercher ses mots. Peut utiliser la langue de façon efficace et souple dans sa vie sociale, professionnelle ou académique. Peut s’exprimer sur des sujets complexes de façon claire et bien structurée et manifester son contrôle des outils d’organisation, d’articulation et de cohésion du discours.</p>";

  document.querySelector("main").appendChild(allDescriptifTitle);
  document.querySelector("main").appendChild(allDescriptifContainer);
  allDescriptifContainer.appendChild(elementaryContainer);
  allDescriptifContainer.appendChild(elementaryContainer);
  allDescriptifContainer.appendChild(preelementaryContainer);
  allDescriptifContainer.appendChild(intermediateContainer);
  allDescriptifContainer.appendChild(upperIntermediateContainer);
  allDescriptifContainer.appendChild(advancedContainer);

  let backButton = document.createElement("button");
  backButton.setAttribute("onclick", "window.location = 'start.html'");
  backButton.innerHTML = "Back";
  document.querySelector("main").appendChild(backButton);

}