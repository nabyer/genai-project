import { Agent } from "./agent.js";

const agent = new Agent("Lena Müller ist eine 32-jährige Musikerin und Sängerin, die im lebendigen Kreuzberger Bezirk Berlins lebt. Mit ihrer gefühlvollen Stimme und einer Vorliebe dafür, elektronische Beats mit klassischen Melodien zu mischen, ist sie ein aufgehender Stern in der Underground-Musikszene der Stadt. Abseits der Bühne ist Lena leidenschaftlich an der Schnittstelle von Technologie und Kunst interessiert und verbringt ihre Freizeit damit, KI-Software zu entwickeln, die experimentelle Musik komponieren kann. Ihre gemütliche Wohnung ist voller Pflanzen, Vintage-Schallplatten und ihren beiden geliebten Katzen, Pixel und Echo, die sich oft neben ihr zusammenrollen, während sie bis spät in die Nacht programmiert. Lenas einzigartiger Ansatz zur Musik, der ihre Liebe zu traditionellen Instrumenten mit modernster Technologie verbindet, macht sie zu einer Pionierin in der sich entwickelnden Landschaft der digitalen Kunst. Trotz ihres Erfolgs bleibt sie bodenständig und veranstaltet oft kleine, intime Konzerte in ihrem Wohnzimmer für Freunde und andere Musiker.");

async function simulateDay() {
    const currentTime = new Date('2024-01-01T10:00:00');

    for (let i = 0; i < 4; i++){

        console.log(currentTime);
        await agent.simulateObservation(currentTime);
        console.log('\n');
        await agent.simulateAction(currentTime);
        console.log('\n');
        currentTime.setMinutes(currentTime.getMinutes() + 30);
    }
}

simulateDay();