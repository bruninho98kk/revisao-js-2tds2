let armas = ["laser", "míssil", "granada", "espada", "metralhadora", "Chicotada", "sniper", "Minigun" ]

let ataques = [];

ataques.push("Mr. CyberPotato Dev");
ataques.push(armas[5]);
ataques.push(armas[0]);
ataques.push(armas[3]);
ataques.push(armas[5]);

// console.log("Nome do Robô: " + ataques[0]);

for (let i = 0; i < ataques.length; i++) {;
    if (i == 0) {
        console.log(`Nome do robô: ${ataques[i]}`);
    } else {
        console.log(`Ataque ${i}: ${ataques[i]}`);
    }
}
