# Dashboard

 - `/`
   - statystyki zamowien (zalne i lokalne)
   - lite eventow zaplanowanych na dzisiaj

# Logowanie

 - `/login`
   - pola na login i haslo
   - guzik do zalogowania(link do dashboard)

# Widok ostepnosci stolikow

- `/tables`
  - wybor daty i godziny
  - tabela z lista rezerwacji i wydarzen
   - kazda kolumna = 1 stolik
   - kazdy wiersz = 30 min
   - ma przypominac widok kalendaza w google gzie w kolumnach zamiast dni sa stoliki
   - po kliknieciu rezerwacji lub eventu przechodzimy do szczegolow

- `/tables/booking/:id`
  - zawiera wszystkie informacje dotyczace rezerwacji
  - umozliwiac edycje i zapisanie zmian

- `/tables/booking/new`
  - analogicznie do poprzedniej bez poczatkowych informacji

- `/tables/events/:id`
- analogicznie do poprzedniej bez poczatkowych informacji

- `/tables/events/new`
- analogicznie do poprzedniej bez poczatkowych informacji

# Widok kelnera

- `/waiter`
  - tabela w wierszach wyswietla stoliki 
  - w kolumnach ( status , czas od ostatniej aktualizacji)
  - ostatnia kolumna dostepne akcje

- `/waiter/order/new`
  - numer stolika edytowalny
  - menu produktow
  - opcje wybranego produktu
  - zamuwienie z opcjami i cenami
  - kwota zamuwienia

- `/waiter/order/:id`
  - to samo co wyzej 
# Widok kuchni

- `/kitchen`
  - wyswietlanie liste zamowien i kolejnosc ich zlozenia
  - lista musi zawierac nr stolika oraz pelne informacje dotyczace zamowionych dan
  - musi byc mozliwosc oznaczenia jako zrealizowane