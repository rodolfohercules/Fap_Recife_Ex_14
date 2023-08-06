// Variáveis para armazenar os votos de cada candidato, nulo e branco.
let votosCandidatoX = 0;
let votosCandidatoY = 0;
let votosCandidatoZ = 0;
let votosBranco = 0;
let votosNulo = 0;


function votar() {
    const voto = prompt("Digite o número do candidato: (1 - Candidato X, 2 - Candidato Y, 3 - Candidato Z, 4 - Branco, 5 - Nulo) ou digite 's' para finalizar a votação:");

    if (voto === "s") {
        return false; // Encerra a votação
    }

    const votoInt = parseInt(voto);
    if (isNaN(votoInt) || votoInt < 1 || votoInt > 5) {
        console.log("Voto inválido. Digite um número válido correspondente ao candidato ou 's' para finalizar a votação.");
        return true; 
    }

    switch (votoInt) {
        case 1:
            votosCandidatoX++;
            break;
        case 2:
            votosCandidatoY++;
            break;
        case 3:
            votosCandidatoZ++;
            break;
        case 4:
            votosBranco++;
            break;
        case 5:
            votosNulo++;
            break;
    }

    return true;
}


function exibirResultado() {
    console.log("Resultados da votação:");
    console.log(`Candidato X: ${votosCandidatoX} votos`);
    console.log(`Candidato Y: ${votosCandidatoY} votos`);
    console.log(`Candidato Z: ${votosCandidatoZ} votos`);
    console.log(`Votos em branco: ${votosBranco}`);
    console.log(`Votos nulos: ${votosNulo}`);

    const totalVotosCandidatos = votosCandidatoX + votosCandidatoY + votosCandidatoZ;
    const totalVotosValidos = totalVotosCandidatos + votosBranco;

    if (totalVotosCandidatos === 0 && votosBranco === 0) {
        console.log("Nenhum voto válido foi registrado. Eleição não possui vencedor.");
    } else if (votosCandidatoX > votosCandidatoY && votosCandidatoX > votosCandidatoZ) {
        console.log("O vencedor da eleição é o Candidato X.");
    } else if (votosCandidatoY > votosCandidatoX && votosCandidatoY > votosCandidatoZ) {
        console.log("O vencedor da eleição é o Candidato Y.");
    } else if (votosCandidatoZ > votosCandidatoX && votosCandidatoZ > votosCandidatoY) {
        console.log("O vencedor da eleição é o Candidato Z.");
    } else {
        console.log("A eleição terminou em empate entre dois ou mais candidatos.");
    }
}


function main() {
    console.log("Votação iniciada. Digite o número do candidato (1 - Candidato X, 2 - Candidato Y, 3 - Candidato Z, 4 - Branco, 5 - Nulo) ou digite 's' para finalizar a votação.");

    while (votar()) { }

    exibirResultado();
}

main();
