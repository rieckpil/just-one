// Just One Game Logic
class JustOneGame {
    constructor() {
        this.gameData = {
            mux: [
                { en: "Free beer", de: "Freibier", fr: "Bière gratuite" },
                { en: "Schäuferla", de: "Schäuferla", fr: "Schäuferla" },
                { en: "Mustache", de: "Schnautzbart", fr: "Moustache" },
                { en: "Goalkeeper", de: "Torwart", fr: "Gardien de but" },
                { en: "Mux Party", de: "Mux Party", fr: "Mux Party" },
                { en: "Herzogenaurach", de: "Herzogenaurach", fr: "Herzogenaurach" },
                { en: "Dondörflein", de: "Dondörflein", fr: "Dondörflein" },
                { en: "League of legends", de: "League of legends", fr: "League of legends" },
                { en: "Kaisa", de: "Kaisa", fr: "Kaisa" },
                { en: "Mario party", de: "Mario party", fr: "Mario party" },
                { en: "Rocket league", de: "Rocket league", fr: "Rocket league" },
                { en: "Technical product designer", de: "Technischer produktdesigner", fr: "Concepteur de produits techniques" },
                { en: "Schaeffler", de: "Schaeffler", fr: "Schaeffler" },
                { en: "Screws", de: "Schrauben", fr: "Vis" },
                { en: "Erlangen-Bruck", de: "Erlangen-Bruck", fr: "Erlangen-Bruck" },
                { en: "Economy", de: "Wirtschaft", fr: "Économie" },
                { en: "Stable", de: "Stall", fr: "Étable" },
                { en: "Cows", de: "Kühe", fr: "Vaches" },
                { en: "Milking", de: "Melken", fr: "Traire" },
                { en: "Prague", de: "Prag", fr: "Prague" },
                { en: "Fiat Panda", de: "Fiat Panda", fr: "Fiat Panda" },
                { en: "Dasha", de: "Dasha", fr: "Dasha" },
                { en: "Tractor", de: "Traktor", fr: "Tracteur" },
                { en: "FIFA", de: "FIFA", fr: "FIFA" },
                { en: "Hookah", de: "Nargileh", fr: "Narguilé" },
                { en: "Asbach", de: "Asbach", fr: "Asbach" },
                { en: "Wampen Welle", de: "Wampen Welle", fr: "Wampen Welle" },
                { en: "Paper room", de: "Papierzimmer", fr: "Salle de papier" },
                { en: "Kerwa", de: "Kerwa", fr: "Kerwa" },
                { en: "Black beer", de: "Schwarze Maß", fr: "Bière noire" },
                { en: "One and only", de: "One and only", fr: "One and only" },
                { en: "Nosebleed section", de: "Nosebleed section", fr: "Nosebleed section" },
                { en: "KIZ", de: "KIZ", fr: "KIZ" },
                { en: "Beer", de: "Bier", fr: "Bière" },
                { en: "Edward 40 Hands", de: "Edward 40 Hands", fr: "Edward 40 Hands" },
                { en: "Crete", de: "Kreta", fr: "Crète" },
                { en: "Belly flop", de: "Bauchklatscher", fr: "Plat du ventre" },
                { en: "Brombachsee", de: "Brombachsee", fr: "Brombachsee" },
                { en: "Moped", de: "Mofa", fr: "Cyclomoteur" },
                { en: "Showering", de: "Duschen", fr: "Se doucher" },
                { en: "Dusch Das", de: "Dusch Das", fr: "Dusch Das" },
                { en: "Mustache", de: "Schnurbart", fr: "Moustache" },
                { en: "1. FC Nürnberg", de: "1. FC Nürnberg", fr: "1. FC Nürnberg" },
                { en: "Piontek (Father)", de: "Piontek (Vater)", fr: "Piontek (Père)" },
                { en: "Bushäusle", de: "Bushäusle", fr: "Bushäusle" },
                { en: "Discord", de: "Discord", fr: "Discord" },
                { en: "Penalty", de: "Elfmeter", fr: "Penalty" },
                { en: "Calculator", de: "Taschenrechner", fr: "Calculatrice" },
                { en: "Baby cats", de: "Baby Katzen", fr: "Bébés chats" },
                { en: "Veterinary office", de: "Veterinäramt", fr: "Bureau vétérinaire" },
                { en: "Relaxo", de: "Relaxo", fr: "Relaxo" },
                { en: "No dips cat", de: "No dips cat", fr: "No dips cat" },
                { en: "Lumberjack steak", de: "Holzfällersteak", fr: "Steak de bûcheron" },
                { en: "16er", de: "16er", fr: "16er" },
                { en: "Own goal", de: "Eigentor", fr: "But contre son camp" },
                { en: "Railway barrier", de: "Bahnschranke", fr: "Barrière de chemin de fer" }
            ],
            lucie: [
                { en: "Romance", de: "Romantik", fr: "Romance" },
                { en: "Kiss", de: "Kuss", fr: "Baiser" },
                { en: "Love letter", de: "Liebesbrief", fr: "Lettre d'amour" },
                { en: "Paris", de: "Paris", fr: "Paris" },
                { en: "Champagne", de: "Champagner", fr: "Champagne" },
                { en: "Rose", de: "Rose", fr: "Rose" },
                { en: "Candlelight", de: "Kerzenschein", fr: "Lueur de bougie" },
                { en: "Serenade", de: "Serenade", fr: "Sérénade" },
                { en: "Bouquet", de: "Blumenstrauß", fr: "Bouquet" },
                { en: "Chocolate", de: "Schokolade", fr: "Chocolat" },
                { en: "Heart", de: "Herz", fr: "Cœur" },
                { en: "Valentine", de: "Valentinstag", fr: "Saint-Valentin" },
                { en: "Embrace", de: "Umarmung", fr: "Étreinte" },
                { en: "Eiffel Tower", de: "Eiffelturm", fr: "Tour Eiffel" },
                { en: "Café", de: "Café", fr: "Café" },
                { en: "Baguette", de: "Baguette", fr: "Baguette" },
                { en: "Croissant", de: "Croissant", fr: "Croissant" },
                { en: "Provence", de: "Provence", fr: "Provence" },
                { en: "Lavender", de: "Lavendel", fr: "Lavande" },
                { en: "Seine", de: "Seine", fr: "Seine" },
                { en: "Versailles", de: "Versailles", fr: "Versailles" },
                { en: "Champs-Élysées", de: "Champs-Élysées", fr: "Champs-Élysées" },
                { en: "Louvre", de: "Louvre", fr: "Louvre" },
                { en: "Bordeaux", de: "Bordeaux", fr: "Bordeaux" },
                { en: "Perfume", de: "Parfüm", fr: "Parfum" },
                { en: "French kiss", de: "Französischer Kuss", fr: "Baiser français" },
                { en: "Mon amour", de: "Meine Liebe", fr: "Mon amour" },
                { en: "Chérie", de: "Schatz", fr: "Chérie" },
                { en: "Moonlight", de: "Mondschein", fr: "Clair de lune" },
                { en: "Whisper", de: "Flüstern", fr: "Chuchoter" },
                { en: "Passion", de: "Leidenschaft", fr: "Passion" },
                { en: "Sunset", de: "Sonnenuntergang", fr: "Coucher de soleil" },
                { en: "Poetry", de: "Poesie", fr: "Poésie" },
                { en: "Dancing", de: "Tanzen", fr: "Danse" },
                { en: "Wine", de: "Wein", fr: "Vin" },
                { en: "Picnic", de: "Picknick", fr: "Pique-nique" },
                { en: "Garden", de: "Garten", fr: "Jardin" },
                { en: "Butterfly", de: "Schmetterling", fr: "Papillon" },
                { en: "Starlight", de: "Sternenlicht", fr: "Lumière des étoiles" },
                { en: "Tender", de: "Zärtlich", fr: "Tendre" },
                { en: "Devotion", de: "Hingabe", fr: "Dévotion" },
                { en: "Desire", de: "Verlangen", fr: "Désir" },
                { en: "Enchantment", de: "Verzauberung", fr: "Enchantement" },
                { en: "Elegance", de: "Eleganz", fr: "Élégance" },
                { en: "Lingerie", de: "Dessous", fr: "Lingerie" },
                { en: "Intimate", de: "Intim", fr: "Intime" },
                { en: "Caress", de: "Liebkosung", fr: "Caresse" },
                { en: "Allure", de: "Anziehung", fr: "Charme" },
                { en: "Seduction", de: "Verführung", fr: "Séduction" },
                { en: "Sensual", de: "Sinnlich", fr: "Sensuel" },
                { en: "Aphrodisiac", de: "Aphrodisiakum", fr: "Aphrodisiaque" }
            ],
            standard: [
                { en: "House", de: "Haus", fr: "Maison" },
                { en: "Tree", de: "Baum", fr: "Arbre" },
                { en: "Car", de: "Auto", fr: "Voiture" },
                { en: "Water", de: "Wasser", fr: "Eau" },
                { en: "Book", de: "Buch", fr: "Livre" },
                { en: "Sun", de: "Sonne", fr: "Soleil" },
                { en: "Moon", de: "Mond", fr: "Lune" },
                { en: "Fire", de: "Feuer", fr: "Feu" },
                { en: "Ice", de: "Eis", fr: "Glace" },
                { en: "Wind", de: "Wind", fr: "Vent" },
                { en: "Bird", de: "Vogel", fr: "Oiseau" },
                { en: "Fish", de: "Fisch", fr: "Poisson" },
                { en: "Cat", de: "Katze", fr: "Chat" },
                { en: "Dog", de: "Hund", fr: "Chien" },
                { en: "Horse", de: "Pferd", fr: "Cheval" },
                { en: "Flower", de: "Blume", fr: "Fleur" },
                { en: "Stone", de: "Stein", fr: "Pierre" },
                { en: "Gold", de: "Gold", fr: "Or" },
                { en: "Silver", de: "Silber", fr: "Argent" },
                { en: "Red", de: "Rot", fr: "Rouge" },
                { en: "Blue", de: "Blau", fr: "Bleu" },
                { en: "Green", de: "Grün", fr: "Vert" },
                { en: "Yellow", de: "Gelb", fr: "Jaune" },
                { en: "Black", de: "Schwarz", fr: "Noir" },
                { en: "White", de: "Weiß", fr: "Blanc" },
                { en: "Big", de: "Groß", fr: "Grand" },
                { en: "Small", de: "Klein", fr: "Petit" },
                { en: "Fast", de: "Schnell", fr: "Rapide" },
                { en: "Slow", de: "Langsam", fr: "Lent" },
                { en: "Hot", de: "Heiß", fr: "Chaud" },
                { en: "Cold", de: "Kalt", fr: "Froid" },
                { en: "Happy", de: "Glücklich", fr: "Heureux" },
                { en: "Sad", de: "Traurig", fr: "Triste" },
                { en: "Love", de: "Liebe", fr: "Amour" },
                { en: "Time", de: "Zeit", fr: "Temps" },
                { en: "Money", de: "Geld", fr: "Argent" },
                { en: "Work", de: "Arbeit", fr: "Travail" },
                { en: "School", de: "Schule", fr: "École" },
                { en: "Music", de: "Musik", fr: "Musique" },
                { en: "Game", de: "Spiel", fr: "Jeu" }
            ],
            crete: [
                { en: "Beach", de: "Strand", fr: "Plage" },
                { en: "Taverna", de: "Taverne", fr: "Taverne" },
                { en: "Olive", de: "Olive", fr: "Olive" },
                { en: "Feta", de: "Feta", fr: "Feta" },
                { en: "Raki", de: "Raki", fr: "Raki" },
                { en: "Souvlaki", de: "Souvlaki", fr: "Souvlaki" },
                { en: "Moussaka", de: "Moussaka", fr: "Moussaka" },
                { en: "Tzatziki", de: "Tzatziki", fr: "Tzatziki" },
                { en: "Ouzo", de: "Ouzo", fr: "Ouzo" },
                { en: "Bouzouki", de: "Bouzouki", fr: "Bouzouki" },
                { en: "Monastery", de: "Kloster", fr: "Monastère" },
                { en: "Windmill", de: "Windmühle", fr: "Moulin à vent" },
                { en: "Donkey", de: "Esel", fr: "Âne" },
                { en: "Fisherman", de: "Fischer", fr: "Pêcheur" },
                { en: "Harbor", de: "Hafen", fr: "Port" },
                { en: "Yacht", de: "Yacht", fr: "Yacht" },
                { en: "Sunset", de: "Sonnenuntergang", fr: "Coucher de soleil" },
                { en: "Amphora", de: "Amphore", fr: "Amphore" },
                { en: "Mythology", de: "Mythologie", fr: "Mythologie" },
                { en: "Zeus", de: "Zeus", fr: "Zeus" },
                { en: "Poseidon", de: "Poseidon", fr: "Poséidon" },
                { en: "Minotaur", de: "Minotaurus", fr: "Minotaure" },
                { en: "Labyrinth", de: "Labyrinth", fr: "Labyrinthe" },
                { en: "Archaeologist", de: "Archäologe", fr: "Archéologue" },
                { en: "Knossos", de: "Knossos", fr: "Cnossos" },
                { en: "Minoan", de: "Minoisch", fr: "Minoen" },
                { en: "Fresco", de: "Fresko", fr: "Fresque" },
                { en: "Pottery", de: "Töpferei", fr: "Poterie" },
                { en: "Shepherd", de: "Hirte", fr: "Berger" },
                { en: "Goat", de: "Ziege", fr: "Chèvre" },
                { en: "Herbs", de: "Kräuter", fr: "Herbes" },
                { en: "Thyme", de: "Thymian", fr: "Thym" },
                { en: "Oregano", de: "Oregano", fr: "Origan" },
                { en: "Cliff", de: "Klippe", fr: "Falaise" },
                { en: "Cave", de: "Höhle", fr: "Grotte" },
                { en: "Gorge", de: "Schlucht", fr: "Gorge" },
                { en: "Hiking", de: "Wandern", fr: "Randonnée" },
                { en: "Village", de: "Dorf", fr: "Village" },
                { en: "Siesta", de: "Siesta", fr: "Sieste" },
                { en: "Festival", de: "Festival", fr: "Festival" }
            ]
        };

        this.currentGame = null;
        this.timer = null;
        this.timeRemaining = 90;
        this.confettiInterval = null;
        this.loadGame();
        this.initializeEventListeners();
        this.startConfetti();
    }

    initializeEventListeners() {
        $('#new-game-btn').on('click', () => this.showDeckSelection());
        $('.deck-btn').on('click', (e) => this.startNewGame($(e.currentTarget).data('deck')));
        $('#correct-btn').on('click', () => this.handleAnswer('correct'));
        $('#skip-btn').on('click', () => this.handleAnswer('skip'));
        $('#wrong-btn').on('click', () => this.handleAnswer('wrong'));
        $(document).on('click', '.word-item', (e) => this.selectWord($(e.currentTarget)));
    }

    showDeckSelection() {
        this.stopTimer();
        this.currentGame = null;
        // Clear any saved game data when starting fresh
        localStorage.removeItem('justOneGame');
        $('#game-screen').addClass('hidden');
        $('#game-over').addClass('hidden');
        $('#deck-selection').removeClass('hidden');
        this.startConfetti();
    }

    startNewGame(deckType) {
        this.stopConfetti();
        const allWords = this.gameData[deckType];

        // Safety check for deck data
        if (!allWords || !Array.isArray(allWords) || allWords.length < 13) {
            console.error(`Invalid or insufficient deck data for '${deckType}'`);
            alert(`Sorry, the ${deckType} deck is not available or has insufficient words.`);
            return;
        }

        const shuffledWords = this.shuffleArray([...allWords]);
        const selectedCards = shuffledWords.slice(0, 13);

        this.currentGame = {
            deckType: deckType,
            cards: selectedCards,
            currentCardIndex: 0,
            score: 0,
            selectedWordIndex: null
        };

        this.saveGame();
        this.showGameScreen();
        this.displayCurrentCard();
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    showGameScreen() {
        $('#deck-selection').addClass('hidden');
        $('#game-over').addClass('hidden');
        $('#game-screen').removeClass('hidden').addClass('fade-in');
        this.updateGameStats();
    }

    displayCurrentCard() {
        if (!this.currentGame || this.currentGame.currentCardIndex >= this.currentGame.cards.length) {
            this.endGame();
            return;
        }

        const wordList = $('#word-list');
        wordList.empty().addClass('card-flip');

        // Get 5 different random words from the current deck
        const allWords = this.gameData[this.currentGame.deckType];

        // Safety check for deck data
        if (!allWords || !Array.isArray(allWords) || allWords.length < 5) {
            console.error(`Invalid deck data for '${this.currentGame.deckType}'`);
            this.endGame();
            return;
        }

        const shuffledAllWords = this.shuffleArray([...allWords]);
        const fiveRandomWords = shuffledAllWords.slice(0, 5);

        fiveRandomWords.forEach((card, index) => {
            const wordElement = $(`
                <div class="word-item word-item-${index + 1} bg-white rounded-md border-l-4 shadow-sm hover:shadow-md transition-all cursor-pointer p-2 md:p-3" data-index="${index + 1}">
                    <div class="flex items-center">
                        <span class="text-lg md:text-xl font-bold text-gray-400 mr-2 flex-shrink-0">${index + 1}</span>
                        <div class="flex-1 grid grid-cols-3 gap-1 text-left">
                            <div class="text-xs font-medium text-gray-800">
                                <div class="bg-blue-100 text-blue-800 px-1 py-0.5 rounded text-xs text-center mb-0.5">EN</div>
                                <div class="text-xs md:text-sm">${card.en}</div>
                            </div>
                            <div class="text-xs font-medium text-gray-800">
                                <div class="bg-red-100 text-red-800 px-1 py-0.5 rounded text-xs text-center mb-0.5">DE</div>
                                <div class="text-xs md:text-sm">${card.de}</div>
                            </div>
                            <div class="text-xs font-medium text-gray-800">
                                <div class="bg-green-100 text-green-800 px-1 py-0.5 rounded text-xs text-center mb-0.5">FR</div>
                                <div class="text-xs md:text-sm">${card.fr}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
            wordList.append(wordElement);
        });

        this.currentGame.selectedWordIndex = null;
        $('#selected-word').text('None');
        this.updateActionButtons();
        this.updateGameStats();

        setTimeout(() => {
            wordList.removeClass('card-flip');
        }, 600);
    }

    selectWord($element) {
        $('.word-item').removeClass('selected');
        $element.addClass('selected');

        this.currentGame.selectedWordIndex = $element.data('index');
        $('#selected-word').text(this.currentGame.selectedWordIndex);
        this.updateActionButtons();
        this.saveGame();

        // Start the timer when a word is selected
        this.startTimer();
    }

    updateActionButtons() {
        const hasSelection = this.currentGame.selectedWordIndex !== null;
        $('#correct-btn, #skip-btn, #wrong-btn').prop('disabled', !hasSelection);
    }

    updateGameStats() {
        $('#score').text(this.currentGame.score);
        $('#cards-remaining').text(this.currentGame.cards.length - this.currentGame.currentCardIndex - 1);
    }

    handleAnswer(result) {
        if (this.currentGame.selectedWordIndex === null) return;

        // Stop the timer when an answer is given
        this.stopTimer();

        switch (result) {
            case 'correct':
                this.currentGame.score++;
                this.currentGame.currentCardIndex++;
                break;
            case 'skip':
                this.currentGame.currentCardIndex++;
                break;
            case 'wrong':
                // Move to next card and remove one card from the end of the deck
                this.currentGame.currentCardIndex++;
                if (this.currentGame.cards.length > 0) {
                    this.currentGame.cards.pop(); // Remove last card from deck
                }
                break;
        }

        this.saveGame();

        if (this.currentGame.currentCardIndex >= this.currentGame.cards.length) {
            this.endGame();
        } else {
            this.displayCurrentCard();
        }
    }

    endGame() {
        this.stopTimer();
        $('#final-score').text(this.currentGame.score);
        $('#game-screen').addClass('hidden');
        $('#game-over').removeClass('hidden').addClass('fade-in');
    }

    startTimer() {
        this.timeRemaining = 90;
        $('#timer-container').removeClass('hidden');
        $('#timer-text').text(this.timeRemaining);
        $('#timer-bar').css('width', '100%').removeClass('bg-red-500 bg-yellow-500').addClass('bg-green-500');

        this.timer = setInterval(() => {
            this.timeRemaining--;
            $('#timer-text').text(this.timeRemaining);

            const percentage = (this.timeRemaining / 90) * 100;
            $('#timer-bar').css('width', percentage + '%');

            // Change color based on time remaining
            if (this.timeRemaining <= 10) {
                $('#timer-bar').removeClass('bg-green-500 bg-yellow-500').addClass('bg-red-500');
            } else if (this.timeRemaining <= 30) {
                $('#timer-bar').removeClass('bg-green-500 bg-red-500').addClass('bg-yellow-500');
            }

            if (this.timeRemaining <= 0) {
                this.handleTimerExpiration();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        $('#timer-container').addClass('hidden');
    }

    handleTimerExpiration() {
        this.stopTimer();
        // Auto-skip when timer expires
        this.handleAnswer('skip');
    }

    saveGame() {
        localStorage.setItem('justOneGame', JSON.stringify(this.currentGame));
    }

    startConfetti() {
        const container = $('#confetti-container');
        container.removeClass('hidden');

        this.confettiInterval = setInterval(() => {
            for (let i = 0; i < 3; i++) {
                const confetti = $('<div class="confetti"></div>');
                confetti.css({
                    left: Math.random() * 100 + 'vw',
                    top: '-10px',
                    backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`
                });
                container.append(confetti);

                // Remove confetti after animation
                setTimeout(() => {
                    confetti.remove();
                }, 4000);
            }
        }, 100);
    }

    stopConfetti() {
        if (this.confettiInterval) {
            clearInterval(this.confettiInterval);
            this.confettiInterval = null;
        }
        $('#confetti-container').addClass('hidden').empty();
    }

    loadGame() {
        const savedGame = localStorage.getItem('justOneGame');
        if (savedGame) {
            try {
                const parsedGame = JSON.parse(savedGame);

                // Validate the saved game data before using it
                if (parsedGame &&
                    parsedGame.deckType &&
                    parsedGame.cards &&
                    Array.isArray(parsedGame.cards) &&
                    typeof parsedGame.currentCardIndex === 'number' &&
                    typeof parsedGame.score === 'number' &&
                    this.gameData[parsedGame.deckType]) {

                    this.currentGame = parsedGame;

                    if (this.currentGame.currentCardIndex < this.currentGame.cards.length) {
                        this.stopConfetti();
                        this.showGameScreen();
                        this.displayCurrentCard();
                    } else {
                        this.stopConfetti();
                        this.endGame();
                    }
                } else {
                    console.warn('Invalid saved game data, clearing localStorage');
                    localStorage.removeItem('justOneGame');
                    this.currentGame = null;
                }
            } catch (e) {
                console.error('Error loading saved game:', e);
                localStorage.removeItem('justOneGame');
                this.currentGame = null;
            }
        }
    }
}

// Initialize the game when the document is ready
$(document).ready(() => {
    window.justOneGame = new JustOneGame();
});
