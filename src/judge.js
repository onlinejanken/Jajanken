module.exports = (people) => {
    const number = people.length;

    if (number == 2) {
        const judge = (people[0].hand - people[1].hand + 3) % 3;
        if (judge == 0) {
            people[0].judge = people[1].judge = 0;  // 引き分け
        } else if (judge == 1) {
            people[0].judge = -1;  // 負け
            people[1].judge = 1;   // 勝ち
        } else {
            people[0].judge = 1;  // 勝ち
            people[1].judge = -1;   // 負け
        }
    }

    return people;
};