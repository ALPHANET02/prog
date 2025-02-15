function fonction_random(tmp) {
    for (let i = tmp.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [tmp[i], tmp[j]] = [tmp[j], tmp[i]];
    }
}


const adjectifs = ["charmant", "passionné", "tendre", "romantique", "inspirant"];
const noms = ["cœur", "amour", "rose", "étoile", "rêve"];
const verbes = ["embellir", "aimer", "câliner", "sourire", "chérir"];

fonction_random(adjectifs);
fonction_random(noms);
fonction_random(verbes);

const emojis = ["❤️", "✨", "🌹", "💫"];
const nombreLignes = Math.floor(Math.random() * (8 - 4 + 1)) + 4;

fonction_random(emojis)
console.log("💖 Poème d'amour généré 💖\n");

let par = document.createElement("p");

for (let i = 0; i < nombreLignes; i++) {
    let emoji = emojis[i % emojis.length];
    let adj = adjectifs[i % adjectifs.length];
    let nom = noms[i % noms.length];
    let verbe = verbes[i % verbes.length];
    
    console.log(`${emoji} Un ${nom} ${adj} ${verbe}`);    
    par.textContent =`${emoji} Un ${nom} ${adj} ${verbe}`
    document.body.appendChild(par)
}


console.log("\n💞 Fin du poème 💞");

