const bici = [
    {
        nome:'bici1',
        peso:7.2,
    },
    {
        nome:'bici2',
        peso:7.7,
    },
    {
        nome:'bici3',
        peso:7.1,
    },
    {
        nome:'bici4',
        peso:6.2,
    },
    {
        nome:'bici5',
        peso:8.2,
    },
];

//const minBiciPeso = Math.min(...bici.map(bici => bici.peso));
const [, , , bici4] = bici


console.log(`La bici piu leggera: ${bici4.nome}, Peso: ${bici4.peso}`)