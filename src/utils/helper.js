export function findPick(q, userId) {
    if (q.optionOne.votes.includes(userId)) return 1;
    if (q.optionTwo.votes.includes(userId)) return 2;
    return 0;
}

//ES6 lambda to add proper suffix by @Camilo Martin
//export const nth = n => n + (n % 10 === 1 && n % 100 !== 11 ? 'st' : n % 10 === 2 && n % 100 !== 12 ? 'nd' : n % 10 === 3 && n % 100 !== 13 ? 'rd' : 'th');


export const nth = n => n + (n % 100 - n % 10 === 10 || n % 10 < 1 || n % 10 > 3 ? 'th' : [0, 'st', 'nd', 'rd'][n % 10]);