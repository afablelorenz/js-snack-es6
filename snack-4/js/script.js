const squadre = [
    {
        nome: 'squadra1',
        puntiFatti: 0,
        falliSubiti:0,
    },
    {
        nome: 'squadra2',
        puntiFatti: 0,
        falliSubiti:0,
    },
    {
        nome: 'squadra3',
        puntiFatti: 0,
        falliSubiti:0,
    },
    {
        nome: 'squadra4',
        puntiFatti: 0,
        falliSubiti:0,
    },
    {
        nome: 'squadra5',
        puntiFatti: 0,
        falliSubiti:0,
    },
];

squadre.forEach(squadre =>{
    squadre.puntiFatti = generateRandom(0,10);
    squadre.falliSubiti = generateRandom(0,10);
});

console.log(squadre);

const squadreNomeFalli = squadre.map(({
    nome,
    falliSubiti,
}) => ({
    nome,
    falliSubiti
}));

console.log(squadreNomeFalli);

function generateRandom(min, max){
    return Math.floor(Math.random()*(max-min)+1)+min;
};