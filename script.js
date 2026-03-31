// Baza 20 wyzwań
const challenges = [
    "Zrób 10 pompek",
    "Napisz komuś miły komentarz",
    "Spędź godzinę bez telefonu",
    "Uśmiechnij się do 5 nieznajomych",
    "Zrób 20 przysiadów",
    "Przeczytaj 10 stron książki",
    "Zadzwoń do starego przyjaciela",
    "Zrób porządek w szafie",
    "Naucz się nowego słowa",
    "Zagotuj zdrowy posiłek",
    "Zrób spacer na świeżym powietrzu",
    "Napisz listę rzeczy, za które jesteś wdzięczny",
    "Poćwicz głębokie oddychanie przez 5 minut",
    "Zrób coś kreatywnego rękami",
    "Pomóż komuś bezinteresownie",
    "Posłuchaj nowej muzyki",
    "Zrób plany na jutro",
    "Uczyń komplement bliskiej osobie",
    "Spróbuj nowej aktywności fizycznej",
    "Zrelaksuj się w ciszy przez 15 minut"
];

// Klucze LocalStorage
const TODAY_CHALLENGE_KEY = 'todayChallenge';
const COMPLETED_CHALLENGES_KEY = 'completedChallenges';
const LAST_RESET_KEY = 'lastReset';

// Elementy DOM
const drawChallengeBtn = document.getElementById('przycisk-losowania-wyzwania');
const challengeDisplay = document.getElementById('wyswietlacz-wyzwania');
const challengeText = document.getElementById('tekst-wyzwania');
const completeBtn = document.getElementById('przycisk-ukonczenia');
const showHistoryBtn = document.getElementById('przycisk-pokazania-historii');
const historyDisplay = document.getElementById('wyswietlacz-historii');
const historyList = document.getElementById('lista-historii');

// Funkcje pomocnicze
function getTodayString() {
    return new Date().toDateString();
}

function getCurrentTime() {
    return new Date().getTime();
}

function shouldResetData() {
    const lastReset = localStorage.getItem(LAST_RESET_KEY);
    const today = getTodayString();

    if (!lastReset || lastReset !== today) {
        // Reset danych o północy
        localStorage.removeItem(TODAY_CHALLENGE_KEY);
        localStorage.removeItem(COMPLETED_CHALLENGES_KEY);
        localStorage.setItem(LAST_RESET_KEY, today);
        return true;
    }
    return false;
}

function getRandomChallenge() {
    const todayChallenge = localStorage.getItem(TODAY_CHALLENGE_KEY);

    if (todayChallenge) {
        return todayChallenge;
    }

    // Wybierz losowe wyzwanie
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const selectedChallenge = challenges[randomIndex];

    // Zapisz na dziś
    localStorage.setItem(TODAY_CHALLENGE_KEY, selectedChallenge);
    return selectedChallenge;
}

function isChallengeCompleted() {
    const todayChallenge = localStorage.getItem(TODAY_CHALLENGE_KEY);
    const completedChallenges = JSON.parse(localStorage.getItem(COMPLETED_CHALLENGES_KEY) || '[]');

    return completedChallenges.includes(todayChallenge);
}

function markChallengeCompleted() {
    const todayChallenge = localStorage.getItem(TODAY_CHALLENGE_KEY);
    if (!todayChallenge) return;

    const completedChallenges = JSON.parse(localStorage.getItem(COMPLETED_CHALLENGES_KEY) || '[]');

    if (!completedChallenges.includes(todayChallenge)) {
        completedChallenges.push(todayChallenge);
        localStorage.setItem(COMPLETED_CHALLENGES_KEY, JSON.stringify(completedChallenges));
    }
}

function getCompletedChallenges() {
    return JSON.parse(localStorage.getItem(COMPLETED_CHALLENGES_KEY) || '[]');
}

function updateUI() {
    const todayChallenge = localStorage.getItem(TODAY_CHALLENGE_KEY);
    const completed = isChallengeCompleted();

    if (todayChallenge) {
        challengeText.textContent = todayChallenge;
        challengeDisplay.classList.remove('ukryty');

        if (completed) {
            challengeText.classList.add('completed');
            completeBtn.classList.add('ukryty');
        } else {
            challengeText.classList.remove('completed');
            completeBtn.classList.remove('ukryty');
        }
    } else {
        challengeDisplay.classList.add('ukryty');
    }
}

function updateHistory() {
    const completedChallenges = getCompletedChallenges();
    historyList.innerHTML = '';

    if (completedChallenges.length === 0) {
        historyList.innerHTML = '<li class="empty-history">Brak ukończonych wyzwań w tej sesji</li>';
        return;
    }

    completedChallenges.forEach(challenge => {
        const li = document.createElement('li');
        li.textContent = challenge;
        historyList.appendChild(li);
    });
}

// Funkcje obsługi zdarzeń
function handleDrawChallenge() {
    // Sprawdź czy trzeba zresetować dane
    shouldResetData();

    // Dodaj animację losowania
    drawChallengeBtn.classList.add('drawing');

    setTimeout(() => {
        drawChallengeBtn.classList.remove('drawing');

        // Pobierz wyzwanie
        const challenge = getRandomChallenge();
        challengeText.textContent = challenge;
        challengeDisplay.classList.remove('ukryty');

        // Sprawdź czy już ukończone
        if (isChallengeCompleted()) {
            challengeText.classList.add('completed');
            completeBtn.classList.add('ukryty');
        } else {
            challengeText.classList.remove('completed');
            completeBtn.classList.remove('ukryty');
        }
    }, 1000);
}

function handleCompleteChallenge() {
    const todayChallenge = localStorage.getItem(TODAY_CHALLENGE_KEY);
    if (!todayChallenge) return;

    // Oznacz jako ukończone
    markChallengeCompleted();

    // Zaktualizuj UI
    challengeText.classList.add('completed');
    completeBtn.classList.add('ukryty');

    // Pokaż komunikat
    alert('Gratulacje! Wyzwanie wykonane 🎉');

    // Zaktualizuj historię
    updateHistory();
}

function handleShowHistory() {
    const isHidden = historyDisplay.classList.contains('ukryty');

    if (isHidden) {
        updateHistory();
        historyDisplay.classList.remove('ukryty');
        showHistoryBtn.textContent = 'Ukryj historię';
    } else {
        historyDisplay.classList.add('ukryty');
        showHistoryBtn.textContent = '📋 Pokaż historię';
    }
}

// Dodaj nasłuchiwacze zdarzeń
drawChallengeBtn.addEventListener('click', handleDrawChallenge);
completeBtn.addEventListener('click', handleCompleteChallenge);
showHistoryBtn.addEventListener('click', handleShowHistory);

// Inicjalizacja aplikacji
document.addEventListener('DOMContentLoaded', () => {
    // Sprawdź czy trzeba zresetować dane
    shouldResetData();

    // Zaktualizuj UI
    updateUI();
});
