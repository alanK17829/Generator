#  Generator Codziennych Wyzwań

Interaktywna aplikacja webowa do codziennych wyzwań, która pomaga użytkownikom wprowadzać pozytywne zmiany w życiu poprzez codzienne zadania.

##  Funkcjonalności

### Losowanie wyzwania dnia
- **Jedno wyzwanie dziennie** - aplikacja zapewnia, że użytkownik dostaje tylko jedno wyzwanie na dzień
- **Animacja losowania** - przyjemna animacja podczas wyboru wyzwania
- **Blokada ponownego losowania** - tego samego dnia nie można wylosować nowego wyzwania

### Oznaczanie jako wykonane
- **Przycisk "Ukończone!"** - po wylosowaniu wyzwania pojawia się możliwość oznaczenia go jako wykonane
- **Wizualne oznaczenie** - ukończone wyzwanie dostaje zielone podkreślenie
- **Komunikat gratulacyjny** 

### Historia sesji
- **Lista ukończonych wyzwań** - pokazuje wszystkie wyzwania ukończone w bieżącej sesji
- **Automatyczny reset** - historia jest resetowana o północy
- **Przyjazny interfejs** - przycisk "Pokaż historię" z przełączaniem widoczności

##  Technologie

- **HTML5** - Semantyczna struktura strony
- **CSS3** - Nowoczesne style z animacjami i responsywnością
- **JavaScript (ES6+)** - Logika aplikacji z wykorzystaniem LocalStorage
- **LocalStorage** - Przechowywanie danych bez serwera

##  Struktura plików

```
generator/
├── index.html      # Główna struktura HTML
├── styl.css        # Style CSS z animacjami
├── script.js       # Logika JavaScript
└── README.md       # Dokumentacja projektu
```

### Wygląd i UX

### Design
- **Minimalistyczny** - Czysty, nowoczesny interfejs
- **Responsywny** - Poprawne działanie na wszystkich urządzeniach
- **Kolorystyka** - Gradienty i przyjemne dla oka kolory

### Animacje
- **Fade-in** - Płynne pojawianie się elementów
- **Hover efekty** - Interaktywne przyciski
- **Pulse animacja** - Dla karty wyzwania
- **Losowanie** - Animacja podczas wyboru wyzwania

### Typografia
- **Czytelna** - Przyjazna czcionka systemowa
- **Hierarchia** - Jasna struktura nagłówków
- **Ikony/Emotikony** - Dla lepszego UX w komunikatach

##  Jak uruchomić

1. **Pobierz pliki** - Skopiuj wszystkie pliki do jednego folderu
2. **Otwórz w przeglądarce** - Kliknij dwukrotnie `index.html`
3. **Gotowe!** - Aplikacja działa lokalnie bez serwera

##  Jak używać

1. **Wylosuj wyzwanie** - Kliknij przycisk " Wylosuj wyzwanie!"
2. **Wykonaj zadanie** - Spróbuj zrealizować wylosowane wyzwanie
3. **Oznacz jako wykonane** - Kliknij " Ukończone!" po wykonaniu
4. **Sprawdź historię** - Kliknij " Pokaż historię" aby zobaczyć ukończone zadania

##  Funkcje techniczne

### LocalStorage
- `todayChallenge` - Dzisiejsze wyzwanie
- `completedChallenges` - Lista ukończonych wyzwań
- `lastReset` - Data ostatniego resetu

### Reset danych
- **Automatyczny** - Resetuje się o północy
- **Sesyjny** - Historia tylko z bieżącego dnia

### Baza wyzwań
20 predefiniowanych wyzwań w języku polskim:
- Zdrowie i fitness
- Rozwój osobisty
- Kreatywność
- Relaks i mindfulness
- Aktywność społeczna

##  Cele projektu

- **Motywacja** - Pomoc w wprowadzaniu pozytywnych nawyków
- **Prostota** - Łatwa w użyciu aplikacja
- **Niezależność** - Działa bez internetu po pierwszym załadowaniu
- **Responsywność** - Działa na wszystkich urządzeniach

##  Możliwe rozszerzenia

- [ ] Kategorie wyzwań
- [ ] Statystyki postępów
- [ ] Powiadomienia push
- [ ] Udostępnianie wyzwań
- [ ] Motywacyjne cytaty
- [ ] Integracja z kalendarzem

---

**Czas realizacji:** ~4-8 godzin  
**Poziom trudności:** Średni  
**Technologie:** HTML, CSS, JavaScript