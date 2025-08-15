 // Check-in — Via del Portico d’Ottavia 1D (multilingual, static images)
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // serve le immagini dalla root del repo

// ---------- COPY: TRANSLATIONS ----------
const T = {
  en: {
    langName: 'English',
    title: 'Check-in Guide — Via del Portico d’Ottavia 1D',
    addressLine: 'Address: Via del Portico d’Ottavia 1D, Rome • Intercom: left panel, 3rd button from the bottom',
    steps: [
      {
        h: 'Arriving at the Building',
        p: 'When you reach Via del Portico d’Ottavia 1D, look for the little wooden door shown below.',
        img: 'building-door.jpg',
        cap: 'Building entrance — the little wooden door.',
      },
      {
        h: 'Using the Intercom',
        p: 'Press the third button from the bottom on the intercom panel located on the left-hand side of the entrance. Then call me at +39 335 524 5756.',
        img: 'intercom.jpg',
        cap: 'Intercom — left panel, 3rd button from the bottom.',
      },
      {
        h: 'Entering the Main Door',
        p: 'Push the door once it is unlocked.',
      },
      {
        h: 'Inside the Building',
        p: 'Before the stairs on the left side there is a light button for the internal lights. It’s on a timer and turns off after ~5 minutes.',
        img: 'hallway-light.jpg',
        cap: 'Hallway — light button on the left, before the stairs.',
      },
      {
        h: 'Reaching the Apartment',
        p: 'The apartment is located on the 3rd floor.',
        img: 'apartment-door.jpg',
        cap: 'Apartment door — 3rd floor.',
      },
      {
        h: 'Get Inside the Apartment',
        p: 'Call me once you arrive in front of the apartment door and I will open it for you: +39 335 524 5756.',
      },
    ],
    help: 'Need help?',
    call: 'Call or WhatsApp:',
    footer: 'niceflatinrome.com • Quick visual guide for arrivals — Via del Portico d’Ottavia 1D',
  },
  it: {
    langName: 'Italiano',
    title: 'Guida Check-in — Via del Portico d’Ottavia 1D',
    addressLine: 'Indirizzo: Via del Portico d’Ottavia 1D, Roma • Citofono: colonna sinistra, 3º pulsante dal basso',
    steps: [
      {
        h: "Arrivo all'edificio",
        p: 'Quando arrivi in Via del Portico d’Ottavia 1D, cerca il piccolo portone in legno mostrato sotto.',
        img: 'building-door.jpg',
        cap: "Ingresso — piccolo portone in legno.",
      },
      {
        h: 'Uso del citofono',
        p: 'Premi il terzo pulsante dal basso sul pannello citofonico alla sinistra dell’ingresso. Poi chiamami al +39 335 524 5756.',
        img: 'intercom.jpg',
        cap: 'Citofono — colonna sinistra, 3º pulsante dal basso.',
      },
      { h: 'Entrare dal portone', p: 'Spingi la porta quando è sbloccata.' },
      {
        h: "All'interno",
        p: 'Prima delle scale, a sinistra, trovi il pulsante per le luci interne. È temporizzato e si spegne dopo ~5 minuti.',
        img: 'hallway-light.jpg',
        cap: 'Corridoio — pulsante luce a sinistra, prima delle scale.',
      },
      {
        h: "Raggiungere l'appartamento",
        p: "L'appartamento è al 3º piano.",
        img: 'apartment-door.jpg',
        cap: 'Porta appartamento — 3º piano.',
      },
      {
        h: "Entrare nell'appartamento",
        p: 'Chiamami quando sei davanti alla porta e la apro io: +39 335 524 5756.',
      },
    ],
    help: 'Serve aiuto?',
    call: 'Chiama o WhatsApp:',
    footer: 'niceflatinrome.com • Guida rapida arrivi — Via del Portico d’Ottavia 1D',
  },
  es: {
    langName: 'Español',
    title: 'Guía de Check-in — Via del Portico d’Ottavia 1D',
    addressLine: 'Dirección: Via del Portico d’Ottavia 1D, Roma • Portero: panel izquierdo, 3º botón empezando por abajo',
    steps: [
      {
        h: 'Llegada al edificio',
        p: 'Al llegar a Via del Portico d’Ottavia 1D, busca la pequeña puerta de madera de la foto.',
        img: 'building-door.jpg',
        cap: 'Entrada del edificio — pequeña puerta de madera.',
      },
      {
        h: 'Uso del portero automático',
        p: 'Pulsa el tercer botón empezando por abajo en el panel de la izquierda de la entrada. Después llámame al +39 335 524 5756.',
        img: 'intercom.jpg',
        cap: 'Portero — panel izquierdo, 3º botón desde abajo.',
      },
      { h: 'Entrar por la puerta principal', p: 'Empuja la puerta cuando esté desbloqueada.' },
      {
        h: 'Dentro del edificio',
        p: 'Antes de las escaleras, a la izquierda, hay un botón de luz con temporizador (~5 min).',
        img: 'hallway-light.jpg',
        cap: 'Pasillo — botón de luz a la izquierda, antes de las escaleras.',
      },
      {
        h: 'Llegar al apartamento',
        p: 'El apartamento está en la 3ª planta.',
        img: 'apartment-door.jpg',
        cap: 'Puerta del apartamento — 3ª planta.',
      },
      {
        h: 'Entrar en el apartamento',
        p: 'Llámame cuando estés delante de la puerta y te la abriré: +39 335 524 5756.',
      },
    ],
    help: '¿Necesitas ayuda?',
    call: 'Llama o WhatsApp:',
    footer: 'niceflatinrome.com • Guía visual rápida — Via del Portico d’Ottavia 1D',
  },
  fr: {
    langName: 'Français',
    title: 'Guide d’arrivée — Via del Portico d’Ottavia 1D',
    addressLine: 'Adresse : Via del Portico d’Ottavia 1D, Rome • Interphone : panneau de gauche, 3e bouton en partant du bas',
    steps: [
      {
        h: 'Arrivée à l’immeuble',
        p: 'À votre arrivée Via del Portico d’Ottavia 1D, repérez la petite porte en bois ci-dessous.',
        img: 'building-door.jpg',
        cap: 'Entrée — petite porte en bois.',
      },
      {
        h: "Utiliser l'interphone",
        p: 'Appuyez sur le troisième bouton en partant du bas sur le panneau de gauche. Puis appelez-moi au +39 335 524 5756.',
        img: 'intercom.jpg',
        cap: 'Interphone — panneau gauche, 3e bouton du bas.',
      },
      { h: 'Entrer par la porte principale', p: 'Poussez la porte une fois déverrouillée.' },
      {
        h: 'Dans l’immeuble',
        p: 'Avant les escaliers, à gauche, un bouton allume la lumière (minuterie ~5 min).',
        img: 'hallway-light.jpg',
        cap: 'Couloir — bouton lumière à gauche.',
      },
      {
        h: "Rejoindre l'appartement",
        p: 'L’appartement se trouve au 3e étage.',
        img: 'apartment-door.jpg',
        cap: 'Porte de l’appartement — 3e étage.',
      },
      {
        h: "Entrer dans l'appartement",
        p: 'Appelez-moi devant la porte et je vous ouvrirai : +39 335 524 5756.',
      },
    ],
    help: 'Besoin d’aide ?',
    call: 'Appel ou WhatsApp :',
    footer: 'niceflatinrome.com • Guide visuel — Via del Portico d’Ottavia 1D',
  },
  de: {
    langName: 'Deutsch',
    title: 'Check-in Anleitung — Via del Portico d’Ottavia 1D',
    addressLine: 'Adresse: Via del Portico d’Ottavia 1D, Rom • Klingel: linkes Panel, 3. Knopf von unten',
    steps: [
      {
        h: 'Ankunft am Gebäude',
        p: 'Wenn Sie Via del Portico d’Ottavia 1D erreichen, suchen Sie nach der kleinen Holztür unten.',
        img: 'building-door.jpg',
        cap: 'Hauseingang — kleine Holztür.',
      },
      {
        h: 'Klingelanlage benutzen',
        p: 'Drücken Sie den dritten Knopf von unten auf dem linken Panel am Eingang. Rufen Sie mich danach unter +39 335 524 5756 an.',
        img: 'intercom.jpg',
        cap: 'Klingel — linkes Panel, 3. Knopf von unten.',
      },
      { h: 'Haupteingang betreten', p: 'Drücken Sie die Tür, sobald sie entriegelt ist.' },
      {
        h: 'Im Gebäude',
        p: 'Vor der Treppe links befindet sich ein Lichtschalter mit Zeitschaltuhr (~5 Min.).',
        img: 'hallway-light.jpg',
        cap: 'Flur — Lichttaster links, vor der Treppe.',
      },
      {
        h: 'Zur Wohnung',
        p: 'Die Wohnung liegt im 3. Stock.',
        img: 'apartment-door.jpg',
        cap: 'Wohnungstür — 3. Stock.',
      },
      {
        h: 'In die Wohnung kommen',
        p: 'Rufen Sie mich an, wenn Sie vor der Wohnungstür sind, und ich öffne: +39 335 524 5756.',
      },
    ],
    help: 'Brauchen Sie Hilfe?',
    call: 'Anruf oder WhatsApp:',
    footer: 'niceflatinrome.com • Kurzanleitung — Via del Portico d’Ottavia 1D',
  },
};

// ---------- PAGE ----------
app.get('/', (req, res) => {
  const lang = (req.query.lang || 'en').toLowerCase();
  const L = T[lang] ? lang : 'en';
  const c = T[L];

  const langLinks = Object.entries(T)
    .map(([k, v]) => `<a href="?lang=${k}" class="pill${k===L?' active':''}">${v.langName}</a>`)
    .join('');

  const stepsHtml = c.steps
    .map((s, i) => `
    <section class="card">
      <div class="step">
        <div class="num">${i + 1}</div>
        <div>
          <h2>${s.h}</h2>
          <p>${s.p}</p>
          ${s.img ? `
            <figure>
              <img src="${s.img}" alt="">
              <figcaption>${s.cap || ''}</figcaption>
            </figure>` : ''}
        </div>
      </div>
    </section>`).join('');

  const html = `<!doctype html>
<html lang="${L}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${c.title}</title>
<link rel="icon" href="building-door.jpg">
<style>
  :root{--brand:#2b2118;--ink:#1f2937;--muted:#6b7280;--bg:#f7f7f7;--card:#fff;--line:#e5e7eb}
  *{box-sizing:border-box} body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--ink)}
  .wrap{max-width:860px;margin:0 auto;padding:16px}
  header{position:sticky;top:0;background:var(--card);border-bottom:1px solid var(--line);padding:12px 14px;z-index:5}
  h1{font-size:20px;margin:0} .addr{font-size:14px;color:var(--muted);margin-top:4px}
  .langs{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}
  .pill{padding:6px 10px;border:1px solid var(--line);border-radius:999px;text-decoration:none;color:var(--ink);font-size:13px}
  .pill.active{background:var(--brand);color:#fff;border-color:var(--brand)}
  .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px;margin:14px 0}
  .step{display:flex;gap:12px;align-items:flex-start}
  .num{flex:0 0 36px;height:36px;border-radius:50%;background:var(--brand);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700}
  h2{margin:6px 0 8px 0;font-size:18px} p{margin:6px 0;line-height:1.45}
  figure{margin:10px 0} img{max-width:100%;height:auto;border-radius:10px;border:1px solid var(--line);display:block}
  figcaption{font-size:12px;color:var(--muted);margin-top:6px}
  .cta{display:inline-block;margin-top:6px;padding:10px 12px;border-radius:10px;background:var(--brand);color:#fff;text-decoration:none}
  footer{color:var(--muted);text-align:center;font-size:12px;margin:18px 0}
</style>
</head>
<body>
<header class="wrap">
  <h1>${c.title}</h1>
  <div class="addr">${c.addressLine}</div>
  <div class="langs">${langLinks}</div>
</header>

<main class="wrap">
  ${stepsHtml}

  <section class="card">
    <h2>${c.help}</h2>
    <p>${c.call} <a class="cta" href="tel:+393355245756">+39 335 524 5756</a></p>
  </section>

  <footer>${c.footer}</footer>
</main>
</body>
</html>`;

  res.setHeader('content-type', 'text/html; charset=utf-8');
  res.end(html);
});

const port = process.env.PORT || 8787;
app.listen(port, () => console.log('Guide ready on http://localhost:' + port));
