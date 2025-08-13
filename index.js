const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname)); // Serve le immagini nella stessa cartella

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Check-in Guide – Portico d’Ottavia</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; line-height: 1.6; }
          h1 { text-align: center; }
          h2 { color: #444; margin-top: 30px; }
          img { display: block; margin: 10px auto; max-width: 50%; height: auto; border-radius: 8px; }
        </style>
      </head>
      <body>
        <h1>Check-in Guide – Portico d’Ottavia</h1>

        <h2>1️⃣ Arriving at the Building</h2>
        <p>When you reach Via del Portico d’Ottavia, look for the little wooden door under the lion sculpture.</p>
        <img src="building-door.jpg" alt="Building Door">

        <h2>2️⃣ Using the Intercom</h2>
        <p>Press the <strong>third button from the bottom</strong> on the intercom panel, located on the left-hand side of the building entrance.<br>
        Then call me at <strong>+39 335 524 5756</strong> and wait for the click.</p>
        <img src="intercom.jpg" alt="Intercom">

        <h2>3️⃣ Entering the Main Door</h2>
        <p>Push the door firmly once it is unlocked.</p>

        <h2>4️⃣ Inside the Building</h2>
        <p>Before the stairs, on the left-hand side, there is a button for the internal lights. The button is on a timer and will turn off after 5 minutes.</p>
        <img src="hallway-light.jpg" alt="Hallway Light">

        <h2>5️⃣ Reaching the Apartment</h2>
        <p>The apartment is located on the <strong>third floor</strong>.</p>

        <h2>6️⃣ Get Inside the Apartment</h2>
        <p>Call me once you arrive in front of the apartment door and I will open it for you.</p>
        <img src="apartment-door.jpg" alt="Apartment Door">

      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Check-in guide available at http://localhost:${port}`);
}); 
