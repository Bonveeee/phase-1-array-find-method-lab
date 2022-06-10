// code your solution here
const record = [{
        year: "2018",
        result: "N/A"
    }, {
        year: "2015",
        result: "W"
    }, {
        year: "2013",
        result: "L"
    },

]

function superbowlWin(record) {
let recordWin = record.find(record => record.result === "W");
    if (recordWin) {
        return recordWin.year;
    } else {
        return undefined;
    }
}