const vip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];


let vipTavolo = vip.map((element,i) => {
    return {
        tableName: 'Tavolo Vip',
        guestName: element,
        place: i,
    };
});



console.log(vipTavolo)