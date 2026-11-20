# skilog.cz

Prezentační web aplikace SkiLog na GitHub Pages s doménou `skilog.cz` (soubor `CNAME`).
Čisté HTML + CSS, bez buildu a bez frameworku, bez cookies a analytiky (proto bez cookie lišty).

```
index.html     úvodní stránka (CS)
privacy.html   zásady ochrany osobních údajů (aplikace, web, beta test)
404.html       stránka pro neexistující URL (absolutní cesty, GitHub Pages ji vrací pro libovolnou hloubku)
styles.css     styly; barvy odpovídají theme aplikace, světlý i tmavý režim
beta.js        tlačítka „Chci do bety“ otevřou formulář Tally; jeho skript se načte až po kliknutí
assets/        ikony, písmo Geist, pozadí, snímky obrazovky (WebP, 540 px)
robots.txt, sitemap.xml
```

Náhled: `python -m http.server` v kořeni repa (z `file://` se nenačte písmo).

## Až bude potřeba

- **Vydání na Google Play:** tlačítka „Chci do bety“ nahradit odkazem na listing s oficiálním
  odznakem Google Play (https://partnermarketinghub.withgoogle.com/brands/google-play/).
- **Snímky obrazovky** jsou z vývojové verze s ukázkovými daty (Špindlerův Mlýn, profil „Martin“).
  Po redesignu je nafotit znovu: emulátor, import ukázkové zálohy JSON v profilu,
  `adb exec-out screencap -p`, oříznout stavový řádek (130 px), zmenšit na šířku 540 px, uložit jako WebP.
- **Roadmapa:** při posunu fáze přesunout třídu `is-active` na další krok, předchozímu dát `is-done`,
  upravit `road__state` a v `styles.css` posunout procento v gradientu `.road::before`.
- **Písmo a ikony** jsou lokálně, web nic nenačítá z cizích serverů (kromě Tally po kliknutí):
  Geist (SIL OFL), ikony Phosphor (MIT) jako SVG sprite na začátku `index.html`. Další ikona:
  `https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/<název>.svg` jako `<symbol>`.
- **Privacy policy:** při změně zpracování upravit `privacy.html` i datum „Platné od“
  a stejně tak Data safety v Play Console.
- **Jazyky:** zatím jen čeština; SK/EN jako `sk/index.html` a `en/index.html` s `hreflang`.
