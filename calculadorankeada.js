const winsTest = 30;
const lossesTest = 10;
calculateRankLevel(winsTest, lossesTest);

function calculateRankLevel(wins, losses) {
    const winLossDifference = wins - losses;
    let rankLevel;

    if (wins < 10) {
        rankLevel = "Iron";
    } else if (wins >= 11 && wins <= 20) {
        rankLevel = "Bronze";
    } else if (wins >= 21 && wins <= 50) {
        rankLevel = "Silver";
    } else if (wins >= 51 && wins <= 80) {
        rankLevel = "Gold";
    } else if (wins >= 81 && wins <= 90) {
        rankLevel = "Diamond";
    } else if (wins >= 91 && wins <= 100) {
        rankLevel = "Legendary";
    } else {
        rankLevel = "Immortal";
    }

    console.log(`The Hero has a win-loss difference of ${winLossDifference} and is at the ${rankLevel} level`);
}


