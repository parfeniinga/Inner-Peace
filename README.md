Sarcină individuală  |  Practica tehnologică  |  120 ore
Ministerul Educației și Cercetării al Republicii Moldova
IP Colegiul „Iulia Hasdeu" din Cahul
SARCINĂ INDIVIDUALĂ
pentru practica tehnologică
P.06.O.003  |  120 de ore  |  Semestrul VI, Anul III
Tema:
Site web pentru Centru de yoga „Inner Peace"
(HTML5 · CSS3 · Bootstrap 5 · JavaScript · site responsive)
Elevul:


Grupa:
AAW 2331
Conducător:
Bodlev Veaceslav

Cahul, 2026

1. Ce trebuie să realizezi
Pe parcursul celor 120 de ore ale practicii tehnologice, vei elabora un site web complet, responsive și publicat online care prezintă un Centru de yoga fictiv „Inner Peace". Site-ul va prezenta cursurile, instructorii, orarul, blogul și un timer de meditație ghidată. Toate paginile vor fi responsive (adaptate pentru desktop, tabletă și mobil) și vor utiliza HTML5, CSS3, Bootstrap 5 și JavaScript.
Aceasta sarcină este un mini-proiect web integrator. Nu vei scrie doar cod — vei parcurge toate etapele dezvoltării unui site web: planificare, design, implementare, optimizare, publicare, testare și documentare.
1.1. Tehnologiile pe care le vei utiliza
Element
Detalii
Limbaj de marcare
HTML5 (structură semantică)
Stilizare
CSS3 (Flexbox, Grid, media queries, animații)
Framework CSS
Bootstrap 5 (grid, componente, utilități)
Programare client-side
JavaScript (vanilla JS, manipulare DOM, validare)
Design
Figma / Canva / Photoshop
Editor de cod
Visual Studio Code
Versionare
Git + GitHub
Hosting
GitHub Pages / Netlify / Vercel


2. Structura site-ului (paginile obligatorii)
Site-ul tău va conține minimum 6 pagini HTML interconectate:
2.1. Pagina Acasă (index.html)
Hero section cu imagine zen + text + buton CTA „Încearcă o clasă gratuită".
Secțiune „Tipuri de yoga" — 3-4 carduri (Hatha, Vinyasa, Yin, Meditație).
Secțiune „De ce Inner Peace?" — avantaje.
Secțiune „Testimoniale" — slider.
Secțiune „Counter" — practicanți, instructori, clase/săpt, ani.
2.2. Pagina Cursuri (courses.html)
Grid carduri cursuri (minim 8).
Fiecare: imagine, tip yoga, nivel, durată, instructor, preț.
Filtrare pe nivel (începător/intermediar/avansat).
Accordion detalii curs.
2.3. Pagina Instructori (instructors.html)
Carduri cu foto, nume, specializare, filozofie.
Filtrare pe tip yoga.
Secțiune certificări.
Citatori inspiraționale.
2.4. Pagina Orar (schedule.html)
Tabel orar pe zile.
Tabs pe zile ale săptămânii.
Filtrare pe tip yoga sau instructor.
Indicatori locuri.
2.5. Pagina Blog (blog.html)
Articole despre yoga, meditație, wellness.
Timer meditație ghidată interactiv (cu countdown).
Secțiune resurse utile.
Filtrare articole pe categorie.
2.6. Pagina Contact (contact.html)
Formular de probă gratuită: Nume, Email, Telefon, Tip yoga (dropdown), Experiență (dropdown), Mesaj.
Validare completă.
Informații contact.
Hartă interactivă.
Linkuri social media.
3. Cerințe privind design-ul
Element de design
Specificație
Paletă de culori
Culoare principală: lavandă (#7E57C2) + accent: auriu deschis (#FFD54F) + neutre bej
Fonturi
Titluri: Cormorant Garamond sau Josefin Sans │ Corp text: Open Sans sau Raleway (Google Fonts)
Imagini
Fotografii de calitate, tematica site-ului, optimizate (max 200KB/imagine)
Iconițe
Font Awesome 6 sau Bootstrap Icons
Layout
Bootstrap 5 grid system + CSS Flexbox/Grid
Responsive
3 breakpoint-uri: mobil (<768px), tabletă (768-1199px), desktop (≥1200px)
Navigare
Meniu fixed top, colaps hamburger pe mobil, active state pe pagina curentă
Footer
Logo, linkuri rapide, contact, social media, copyright


4. Cerințe JavaScript obligatorii
Pe lângă funcționalitățile specifice fiecărei pagini, trebuie să implementezi:
Nr.
Funcționalitate
Unde se aplică
1
Validare formular de probă gratuită
contact.html
2
Meniu responsive
Toate paginile
3
Slider testimoniale
index.html
4
Smooth scroll
Toate paginile
5
Buton Back to Top
Toate paginile
6
Filtrare cursuri pe nivel
courses.html
7
Tabs orar pe zile
schedule.html
8
Timer meditație ghidată interactiv
blog.html
9
Counter animat
index.html
10
Accordion detalii cursuri
courses.html


5. Cerințe privind optimizarea
5.1. SEO on-page
Tag <title> unic și descriptiv pe fiecare pagină (max 60 caractere).
Meta description unic pe fiecare pagină (max 160 caractere).
Heading-uri ierarhice: un singur <h1> per pagină, apoi <h2>, <h3> etc.
Atribut alt descriptiv pe toate imaginile.
Linkuri interne între pagini cu text-ancoră relevant.
URL-uri descriptive (denumiri clare ale fișierelor HTML).
5.2. Responsive design
Testat pe minim 3 rezoluții: 375px (mobil), 768px (tabletă), 1440px (desktop).
Imagini responsive (max-width: 100%, height: auto).
Text lizibil pe toate dispozitivele (font-size minim 16px pe mobil).
Butoane și linkuri cu zonă de click suficientă pe mobil (minim 44x44px).
5.3. Performanță
Imagini comprimate (TinyPNG, Squoosh).
CSS organizat, fără reguli duplicate.
JavaScript la sfârșit de <body> sau cu atribut defer.
Testare cu Google PageSpeed Insights (scor minim 70 pe mobil).
6. Organizarea proiectului (structura folderelor)
Folder
Fișier
Descriere
/ (inner-peace/)
index.html
Pagina Acasă


courses.html
Pagina Cursuri


instructors.html
Pagina Instructori


schedule.html
Pagina Orar


blog.html
Pagina Blog


contact.html
Pagina Contact


favicon.ico
Iconiță browser (tab)


README.md
Documentație proiect
css/


Folder pentru stiluri CSS


style.css
Stiluri personalizate
js/


Folder pentru scripturi JavaScript


main.js
Funcționalități comune


validation.js
Validare formular


timer.js
Timer meditație


courses.js
Filtrare cursuri
img/


Folder pentru imagini


logo.png
Logo-ul site-ului
img/hero/


Imagini hero
img/courses/


Imagini courses
img/instructors/


Imagini instructors
img/blog/


Imagini blog
img/gallery/


Imagini gallery


7. Planul de lucru recomandat (120 de ore)
Urmează acest plan pas cu pas. Nu sari direct la cod — începe cu planificarea și design-ul!
Etapa
Ore
Ce faci în această etapă
I
6
Analiza sarcinii. Definirea publicului-țintă. Elaborarea planului de dezvoltare. Instalarea instrumentelor (VS Code, Git, extensii).
II
8
Planificarea site-ului: elaborarea hărții (sitemap), crearea machetelor (mockup) în Figma/pe hârtie.
III
10
Crearea design-ului grafic: paleta de culori, tipografia, elementele vizuale, design-ul paginilor.
IV
6
Procesarea materiilor prime: selectarea și optimizarea imaginilor, pregătirea textelor, iconițelor.
V
12
Construirea structurii HTML: toate paginile cu structură semantică completă.
VI
18
Stilizarea cu CSS și Bootstrap: layout, grid, componente, responsive design.
VII
18
Implementarea JavaScript: validare, slider, filtrare, galerie, counter, back-to-top.
VIII
12
Optimizare responsive: testare pe 3+ rezoluții, ajustări media queries.
IX
6
Optimizare SEO + performanță: meta-taguri, alt-uri, comprimare imagini, validare W3C.
X
4
Publicarea site-ului pe GitHub Pages / Netlify. Configurarea domeniului.
XI
4
Testarea site-ului publicat: cross-browser, cross-device, PageSpeed Insights.
XII
8
Elaborarea raportului de practică cu capturi de ecran și documentație.
XIII
8
Pregătirea și susținerea publică a proiectului.
TOTAL
120




8. Ce predai la final
Nr.
Produs
Detalii
1
Site-ul web publicat online
Link activ, funcțional pe desktop, tabletă și mobil.
2
Codul sursă complet
Fișiere HTML, CSS, JS, imagini — structurate în foldere, pe GitHub.
3
Design-ul paginilor
Machetele grafice (.jpg/.fig) pentru minim 3 pagini.
4
Harta site-ului (sitemap)
Schema logică a structurii site-ului.
5
Raportul de practică
Conform structurii din secțiunea 9.
6
Agenda practicii completată
Activitățile zilnice pe parcursul celor 120 de ore.


9. Structura raportului de practică
1. Introducere — scopul practicii, tema site-ului, publicul-țintă, tehnologiile utilizate.
2. Planul de dezvoltare — obiectivele site-ului, instrumentele selectate, planificarea etapelor.
3. Planificarea site-ului — harta site-ului (sitemap), machetele (mockup), structura navigării.
4. Design-ul paginilor — paleta de culori, tipografia, elementele grafice, motivarea alegerilor.
5. Implementarea — descrierea structurii HTML, stilurilor CSS, funcționalităților JavaScript. Fragmente de cod comentate.
6. Optimizarea — responsive design, SEO, performanță, validare HTML/CSS.
7. Publicarea și testarea — procesul de publicare, rezultatele testării pe dispozitive și browsere.
8. Concluzii — ce ai învățat, dificultăți, posibilități de dezvoltare ulterioară.
9. Bibliografie — sursele utilizate.
10. Anexe — capturi de ecran pe diferite dispozitive, listing cod sursă.
10. Cum vei fi evaluat
Ce se evaluează
Pondere
Planificarea (sitemap, mockup, plan de dezvoltare)
10%
Design-ul grafic al paginilor web
10%
Implementarea HTML5 și structura semantică
15%
Stilizarea CSS3/Bootstrap și design responsive
20%
Funcționalitățile JavaScript (interactivitate)
15%
Optimizare SEO și performanță
10%
Raportul de practică și documentația
10%
Publicarea, testarea și susținerea site-ului
10%
TOTAL
100%


11. Sfaturi practice
Nu sari la cod! Primele 20 de ore sunt pentru planificare și design. O machetă bună te scutește de ore de refactorizare.
Testează frecvent. După fiecare pagină sau funcționalitate, verifică pe mobil și desktop.
Folosește Git: fă commit-uri regulate cu mesaje descriptive.
Comentează codul: fiecare secțiune HTML, bloc CSS important și funcție JS trebuie comentate.
Validează frecvent cu W3C Validator — nu lăsa erorile să se acumuleze.
Folosește Chrome DevTools (F12) — inspectează, depanează, testează responsive.
Optimizează imaginile înainte de a le adăuga în proiect (TinyPNG, Squoosh).
Nu hardcoda dimensiuni în pixeli — folosește unități relative (%, rem, vh/vw) și Bootstrap grid.
Învață de la site-uri reale — analizează structura, design-ul și funcționalitățile lor.

Succes la practica tehnologică!
