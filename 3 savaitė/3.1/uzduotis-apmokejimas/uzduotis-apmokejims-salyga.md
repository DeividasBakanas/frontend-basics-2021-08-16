# Užuotis apmokėjimas

Pagal pateiktą aprašymą ir vizualinį pavyzdį suformuoti apmokėjimo formą.

## Formos sekcijos

Formą sudaro dvi sekcijos - `Kontaktinė informacija` ir `Apmokėjimo informacija`.

### Kontaktinė informacija

Sekcija, kurioje yra laukai susiję su kontaktinės informacijos pateikimu.

| Pavadinimas   | Validacijos reikalavimai                                                             | Pavadinimas siunčiant į serverį | Elemento tipas                   |
| ------------- | ------------------------------------------------------------------------------------ | ------------------------------- | -------------------------------- |
| `Kreipinys`   | Privalomas laukas                                                                    | `title`                         | **fieldset**, **input**, _radio_ |
| `Vardas:`     | Privalomas laukas, mažiausias teksto ilgis - 2 simboliai, didžiausias - 50 simbolių. | `name`                          | **input**, _text_                |
| `Pavardė:`    | Privalomas laukas, mažiausias teksto ilgis - 2 simboliai, didžiausias - 50 simbolių. | `lastname`                      | **input**, _text_                |
| `El. paštas:` | Privalomas laukas.                                                                   | `email`                         | **input**, _email_               |
| `Slaptažodi:` | Privalomas laukas, mažiausias ilgis - 5 simboliai.                                   | `password`                      | **input**, _password_            |

### Užklausa

Sekcija, kurioje pateikiama apmokėjimo informacija.

| Pavadinimas         | Validacijos reikalavimai                                                                    | Pavadinimas siunčiant į serverį | Elemento tipas    | Kita                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------- | ------------------------------- | ----------------- | --------------------------------------------------------------------------------------------- |
| `Kortelės tipas:`   | Privalomas laukas.                                                                          | `cardtype`                      | **select**        | Opcijos - formatu Label ('name'): Visa ('visa'), Mastercard ('mc'), American Express ('amex') |
| `Kortelės numeris:` | Privalomas laukas, turi atitikti šabloną: <https://regex101.com/r/uW8mC3/1>.                | `cardnumber`                    | **input**, _text_ | Pavyzdinės reikšmės: `4510123456781234`, `373342709912345`, `5410123412344567`                |
| `Galiojimo data:`   | Privalomas laukas, reikšmė turi būti didesnė už šios dienos datą (kortelė privalo galioti). | `expiration`                    | **input**, _date_ |                                                                                               |

## Formos pateikimas

Paspaudus mygtuką `Pateikti`, tuo atvejų kai visi į formą suvesti duomenys atitinka reikalavimus, forma turi būti pateikiama puslapiui `pridavimas.html`.
Kai vartotojas nunaviguojamas į šį puslapį, naršyklės adreso juostoje turėtų būti matomi visi duomenys, kuriuos vartotojas užpildė formoje.

## Pridavimo puslapis

Puslapio pavadinimas: `Ačiū Jums!`

Puslapio tekste turi būti pažymėta, kad užklausa gauta:

```plain
Jūsų užklausa gauta. Ačiū Jums, kad pirkote. Prekes išsiųsime gavę apmokėjimą.
```
