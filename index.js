// Check-in — Via del Portico d’Ottavia 1D (static guide)
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Serviamo i file statici (le immagini stanno nella root del repo)
app.use(express.static('.'));

// Pagina unica
app.get('/', (_req, res) => {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Check-in Guide — Via del Portico d’Ottavia 1D</title>
<link rel="icon" href="building-door.jpg">
<style>
  :root { --brand:#2b2118; --ink:#1f2937; --muted:#6b7280; --bg:#f7f7f7; --card:#ffffff; --line:#e5e7eb; }
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--ink)}
  .wrap{max-width:860px;margin:0 auto;padding:16px}
  header{position:sticky;top:0;background:var(--card);border-bottom:1px solid var(--line);padding:12px 14px;z-index:5}
  h1{font-size:20px;margin:0}
  .addr{font-size:14px;color:var(--muted)}
  .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px;margin:14px 0}
  .step{display:flex;gap:12px;align-items:flex-start}
  .num{flex:0 0 36px;height:36px;border-radius:50%;background:var(--brand);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700}
  h2{margin:6px 0 8px 0;font-size:18px}
  p{margin:6px 0;line-height:1.45}
  figure{margin:10px 0}
  img{max-width:100%;height:auto;border-radius:10px;border:1px solid var(--line);display:block}
  figcaption{font-size:12px;color:var(--muted);margin-top:6px}
  .cta{display:inline-block;margin-top:6px;padding:10px 12px;border-radius:10px;background:var(--brand);color:#fff;text-decoration:none}
  footer{color:var(--muted);text-align:center;font-size:12px;margin:18px 0}
</style>
</head>
<body>
<header class="wrap">
  <h1>Check-in Guide — Via del Portico d’Ottavia 1D</h1>
  <div class="addr">Address: Via del Portico d’Ottavia 1D, Rome • Intercom: left panel, <b>3rd button from the bottom</b></div>
</header>

<main class="wrap">
  <!-- 1 -->
  <section class="card">
    <div class="step">
      <div class="num">1</div>
      <div>
        <h2>Arriving at the Building</h2>
        <p>When you reach <b>Via del Portico d’Ottavia 1D</b>, look for the <b>little wooden door</b> shown below.</p>
        <figure>
          <img src="building-door.jpg" alt="Little wooden door — Via del Portico d’Ottavia 1D">
          <figcaption>Building entrance — the little wooden door.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- 2 -->
  <section class="card">
    <div class="step">
      <div class="num">2</div>
      <div>
        <h2>Using the Intercom</h2>
        <p>Press the <b>third button from the bottom</b> on the intercom panel located on the <b>left-hand side</b> of the entrance.</p>
        <p>Then call me at <a class="cta" href="tel:+393355245756">+39 335 524 5756</a>.</p>
        <figure>
          <img src="intercom.jpg" alt="Intercom — left panel, third button from the bottom">
          <figcaption>Intercom — left panel, 3rd button from the bottom.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- 3 -->
  <section class="card">
    <div class="step">
      <div class="num">3</div>
      <div>
        <h2>Entering the Main Door</h2>
        <p><b>Push the door once it is unlocked.</b></p>
      </div>
    </div>
  </section>

  <!-- 4 -->
  <section class="card">
    <div class="step">
      <div class="num">4</div>
      <div>
        <h2>Inside the Building</h2>
        <p>Before the stairs on the <b>left side</b> there is a <b>light button</b> for the internal lights. It’s on a timer and turns off after ~5 minutes.</p>
        <figure>
          <img src="hallway-light.jpg" alt="Hallway with light button before the stairs">
          <figcaption>Hallway — light button on the left, before the stairs.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- 5 -->
  <section class="card">
    <div class="step">
      <div class="num">5</div>
      <div>
        <h2>Reaching the Apartment</h2>
        <p>The apartment is located on the <b>3rd floor</b>.</p>
        <figure>
          <img src="apartment-door.jpg" alt="Apartment door">
          <figcaption>Apartment door — 3rd floor.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- 6 -->
  <section class="card">
    <div class="step">
      <div class="num">6</div>
      <div>
        <h2>Get Inside the Apartment</h2>
        <p><b>Call me once you arrive in front of the apartment door</b> and I will open it for you: <a class="cta" href="tel:+393355245756">+39 335 524 5756</a>.</p>
      </div>
    </div>
  </section>

  <section class="card">
    <h2>Need help?</h2>
    <p>Call or WhatsApp: <a class="cta" href="tel:+393355245756">+39 335 524 5756</a></p>
  </section>

  <footer>niceflatinrome.com • Quick visual guide for arrivals — Via del Portico d’Ottavia 1D</footer>
</main>
</body>
</html>`;
  res.setHeader('content-type','text/html; charset=utf-8');
  res.end(html);
});

const port = process.env.PORT || 8787;
app.listen(port, () => console.log('Check-in guide running on http://localhost:'+port));
