# Užduotis meteorologija

Sukurti puslapį iš šešių sekcijų:

-   Navigacija
-   Vėjai
-   Sinoptiko komentaras
-   LHMT veiklos sritys
-   Remarkos
-   Kontaktai

## Logotipas

-   Prieš visą puslapio turinį turi būti įdėtas LHTM logotipas (paveikslėlio nuoroda <http://www.meteo.lt/meteo-theme/images/lt_LT/logo100.png>).
-   Paveikslėliui turi būti nustatytas alternatyvus tekstas "LHMT logotipas".
-   Paspaudus paveikslėlį vartotojui naujame skirtuke turi būti atidaromas originalus LHMT puslapis <http://meteo.lt>.

## Navigacija

Navigacijoje turi būti nuorodos į visas sekcijas (įskaitant ir "Navigacija"). Į vidines sekcijas kreipiančios nuorodoms naudokite `id` atributą ir `#` nuorodos funkcionalumą.
Navigacijoje taip pat turi būti nuoroda į originalų LHMT puslapį pasiekiamą internete - <http://www.meteo.lt/>.

## Vėjai

Vėjų pavadinimai turi būti paaiškinti naudojant Definition List sąrašą (dl).

## Sinoptiko komentaras

Sinoptiko komentarui naudokite citatų išskyrimui skirtus HTML elementus. Tekstas cituojamas iš <http://www.meteo.lt/lt>.

Laikui nurodyti naudokite time elementą (tiksli data "2021-08-20 03:51").

## LHMT veiklos sritys

LHMT pavadinimui naudokite santrumpoms skirtą **abbv** elementą.

Veiklas aprašykite nerikiuotu sąrašu.

Išnašoms naudokite laipsniams skirtą elementą **sup**.

## Remarkos

Remarkų sekcijoje taip pat naudokite **sup**. Nepamirškite nurodyti cituojamo teksto šaltinių:

-   meteorologija <https://tzz.lt/m/meteorologija/>
-   hidrologija <https://tzz.lt/h/hidrologija/>
-   ultravioletinis <https://tzz.lt/u/ultravioletinis/>

## Kontaktai

Kontaktams panaudokite adreso HTML elementą **address**, o telefono numeriui ir el. paštui specialias jiems skirtas nuorodas (tel, mailto).

## Bendri reikalavimai

-   Puslapio pavadinimui ir sekcijų pavadinimams naudoti HTML headings (h1, h2).
