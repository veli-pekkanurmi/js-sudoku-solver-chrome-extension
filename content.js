//const sudokusolver = require('./sudokusolver');

console.log("Extention go!");

let sudoku = [];
let solvedSudoku = [];
let webSudokuGrid;
let webSudokuGridCSSselector = "#letour div:not(#yunex82)";

function importSudoku() {
    console.log("import sudoku");
    webSudokuGrid = document.querySelectorAll(webSudokuGridCSSselector);
    //x.forEach(y => console.log(y.getAttribute("value")));

    for (let i of webSudokuGrid) {
        let value = i.innerHTML;
        sudoku.push(value);
        //console.log(value);
    }
    console.log(sudoku);
}

function solveSudoku() {
    console.log("solve sudoku");
    solvedPromise = playSudoku(sudoku)
        .then((solved) => solved)
        .catch((err) => console.error(err));;
    // solvedSudoku = await Promise.all(solvedPromise);

    // .then((solved) => sudokuprint(solved))
    // .catch((err) => console.log(err));

    console.log(solvedPromise);
}

function exportSudoku(solvedSudoku) {
    console.log("export sudoku");
    for (let i = 0; i < webSudokuGrid.length; i++) {
        webSudokuGrid[i].innerHTML = solvedSudoku[i];
    }
}


function fillSudokuToPopUp() {
    // todo fill the table in popup. Should this be in popup.js?
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);

    switch (message.txt) {
        case 'import':
            console.log("import content");
            importSudoku();
            break;
        case 'solve':
            console.log("solve content");
            solveSudoku();
            break;
        case 'export':
            console.log("export content");
            exportSudoku();
            break;
        default:
            console.error("Unknown method receved to content.js");
    }

}
