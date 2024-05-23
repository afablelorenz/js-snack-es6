let studenti = [
    {
        id: 213,
        name: 'Giuseppina della Rovere',
        grades: 78, 
    },
    {
        id: 110,
        name: 'Paola Cortelessa',
        grades: 96, 
    },
    {
        id: 250,
        name: 'Andrea mantegna',
        grades: 48, 
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74, 
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68, 
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50, 
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84, 
    },
];
let arr70 = [];
let arr70120 = [];

for(let i=0; i < studenti.length; i++){
    studenti[i].name = studenti[i].name.toUpperCase();
}

studenti.forEach((element,i) => {
    if(studenti[i].grades > 70 && studenti[i].id > 120){
        arr70120.push(studenti[i]);
    }else if(studenti[i].grades > 70){
        arr70.push(studenti[i]);
    }
});

console.log(studenti);
console.log(arr70);
console.log(arr70120);