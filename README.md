
# Måste vara med: 
* En knapp som återställer allt till originalutseendet
* Alla ändringar som du har gjort ska ändras tillbaka
* Byt ut minst ett foto
* Ändra bakgrundsfärg på minst ett element
* Ändra text på minst ett element
* Ändra färg på minst en knapp
* Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen)
* Lägg till en lista var som helst i DOMen (måste tas bort med resetknappen)
* Listan ska innehålla flera li element
* Varje li element ska ha en synlig border. (Valfritt utseende)


# Tips
Var metodisk! Ett steg i taget. Återställ det du håller på med innan du börjar med nästa. 
Fråga om du sitter fast!
Ta pauser!


# Vad mina funktion gör (jag använder arrow functions):
Setup() är min start-up function! 
Den ska ladda in allt och under proccessen gör en kallese när det behövs (tex onClick event).

clickThisButton() är min kallese function för klick på specifik knapp (första buy knappen) som jag target main 
först och sedan hämtar barnet som finns i main.

Där efter gör jag vad uppgifterna säger. Därefter hämtar med hjälp av .querySelector() de element/class/id jag behöver och bygger på.

resetBack() är min kallese på min universala reset knapp jag la till på hemsidan. Uppgiften är att återkalla allt jag ändrade tillbaka till normala läge.

Har också gjort säkerhets checkups, tex: Va händer när jag trycker på reset knappen när det inte finns nåt att reset:a?? fix för sånt!

