# Kontaktų forma

Pagal pateiktą aprašymą ir vizualinį pavyzdį suformuoti kontaktų formą.

## Formos sekcijos

Formą sudaro dvi sekcijos - `Kontaktinė informacija` ir `Užklausa`.

### Kontaktinė informacija

Sekcija, kurioje yra laukai susiję su kontaktinės informacijos pateikimu.

| Pavadinimas         | Placeholder'is          | Validacijos reikalavimai                                                                                                                | Pavadinimas siunčiant į serverį | Elemento tipas    |
| ------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ----------------- |
| `Jūsų vardas:`      | `Jūsų vardas`           | Privalomas laukas, mažiausias teksto ilgis - 2 simboliai, didžiausias - 50 simbolių.                                                    | `name`                          | **input**, _text_ |
| `Jūsų pavardė:`     | `Jūsų pavardė`          | Privalomas laukas, mažiausias teksto ilgis - 2 simboliai, didžiausias - 50 simbolių.                                                    | `lastname`                      | **input**, _text_ |
| `Telefono numeris:` | `Jūsų telefono numeris` | Privalomas laukas, mažiausias teksto ilgis - 5 simboliai, didžiausias - 11 simbolių; šablonas, kurį privalo atitiktį duomenys `\+?\d+`. | `phonenumber`                   | **input**, _text_ |

### Užklausa

Sekcija, kurioje pateikiamas žinutės laukas.

| Pavadinimas    | Placeholder'is   | Validacijos reikalavimai                                                               | Pavadinimas siunčiant į serverį | Elemento tipas |
| -------------- | ---------------- | -------------------------------------------------------------------------------------- | ------------------------------- | -------------- |
| `Jūsų žinutė:` | `Jūsų žinutė...` | Privalomas laukas, mažiausias teksto ilgis - 20 simboliai, didžiausias - 500 simbolių. | `message`                       | **textarea**   |

## Formos pateikimas

Paspaudus mygtuką `Pateikti`, tuo atvejų kai visi į formą suvesti duomenys atitinka reikalavimus, forma turi būti pateikiama puslapiui `pridavimas.html`.
Kai vartotojas nunaviguojamas į šį puslapį, naršyklės adreso juostoje turėtų būti matomi visi duomenys, kuriuos vartotojas užpildė formoje.

## Pridavimo puslapis

Puslapio pavadinimas: `Ačiū Jums!`

Puslapio tekste turi būti pažymėta, kad užklausa gauta:

```plain
Jūsų užklausa gauta. Ačiū Jums, kad susisiekėte. Jūsų pranešimą perskaitysime kada nors kai turėsime laiko nuo kitų darbų.
```
