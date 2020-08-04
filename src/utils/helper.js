export function findPick(q, userId) {
    if (q.optionOne.votes.includes(userId)) return 1;
    if (q.optionTwo.votes.includes(userId)) return 2;
    return 0;
}