function createMatrix(cols, rows) {
    const startArray = [];

    for (let i = 0; i < rows * cols; i++) {
        startArray[i] = i + 1;
    }

    const matrix = [];
    let innerArray = [];

    for (let i = 0; i < startArray.length; i += cols) {
        innerArray = startArray.slice(i, i + cols);
        matrix.push(innerArray);
    }

    return matrix;
}


function makeSpiralTraverse(cols, rows, colStartPos, rowStartPos, direction) {
    const matrix = createMatrix(cols, rows);

    let colIndex = colStartPos - 1;
    let rowIndex = rowStartPos - 1;
    let colMinIndex = colStartPos - 1;
    let colMaxIndex = colStartPos - 1;
    let rowMinIndex = rowStartPos - 1;
    let rowMaxIndex = rowStartPos - 1;
    
    let result = '';
    let counter = 0;

    while (counter < rows * cols) {
        if ((colIndex >= 0 && colIndex < cols) && (rowIndex >= 0 && rowIndex < rows)) {
            result += `${matrix[rowIndex][colIndex]}.`;
            counter++;
        }

        switch (direction) {
            case 'left':
                colIndex -= 1;
                if (colIndex < colMinIndex) {
                    direction = 'up';
                    colMinIndex = colIndex;
                }
                break;

            case 'up':
                rowIndex -= 1;
                if (rowIndex < rowMinIndex) {
                    direction = 'right';
                    rowMinIndex = rowIndex;
                }
                break;

            case 'right':
                colIndex += 1;
                if (colIndex > colMaxIndex) {
                    direction = 'down';
                    colMaxIndex = colIndex;
                }
                break;

            case 'down':
                rowIndex += 1;
                if (rowIndex > rowMaxIndex) {
                    direction = 'left';
                    rowMaxIndex = rowIndex;
                }
        }
    }

    result = result.slice(0, -1);

    return result;
}


console.log(createMatrix(5, 6));
console.log('\n');

console.log(makeSpiralTraverse(5, 6, 2, 4, 'left'), "\nTest for - makeSpiralTraverse(5, 6, 2, 4, 'left');");
console.log('\n');

console.log(makeSpiralTraverse(5, 6, 1, 1, 'left'), "\nTest for - makeSpiralTraverse(5, 6, 1, 1, 'left');");
console.log('\n');

console.log(makeSpiralTraverse(5, 6, 5, 6, 'left'), "\nTest for - makeSpiralTraverse(5, 6, 5, 6, 'left');");
console.log('\n');

console.log(makeSpiralTraverse(5, 6, 8, 8, 'left'), "\nTest for - makeSpiralTraverse(5, 6, 8, 8, 'left');");
console.log('\n');

console.log(makeSpiralTraverse(5, 6, 0, 0, 'left'), "\nTest for - makeSpiralTraverse(5, 6, 0, 0, 'left');");
console.log('\n');


console.log(createMatrix(5, 6));
console.log('\n');

console.log(makeSpiralTraverse(5, 6, 2, 4, 'up'), "\nTest for - makeSpiralTraverse(5, 6, 2, 4, 'up');");
console.log('\n');

console.log(makeSpiralTraverse(5, 6, 2, 4, 'right'), "\nTest for - makeSpiralTraverse(5, 6, 2, 4, 'right');");
console.log('\n');

console.log(makeSpiralTraverse(5, 6, 2, 4, 'down'), "\nTest for - makeSpiralTraverse(5, 6, 2, 4, 'down');");
console.log('\n');


console.log(createMatrix(0, 0));
console.log(makeSpiralTraverse(0, 0, 2, 4, 'up'), "\nTest for - makeSpiralTraverse(0, 0, 2, 4, 'up');");
console.log('\n');

console.log(createMatrix(1, 1));
console.log(makeSpiralTraverse(1, 1, 2, 4, 'up'), "\nTest for - makeSpiralTraverse(1, 1, 2, 4, 'up');");
console.log('\n');

console.log(createMatrix(2, 2));
console.log(makeSpiralTraverse(2, 2, 2, 4, 'up'), "\nTest for - makeSpiralTraverse(2, 2, 2, 4, 'up');");
console.log('\n');

console.log(createMatrix(3, 3));
console.log(makeSpiralTraverse(3, 3, 2, 2, 'right'), "\nTest for - makeSpiralTraverse(3, 3, 2, 2, 'right');");
console.log('\n');


console.log(createMatrix(0, 5));
console.log(makeSpiralTraverse(0, 5, 2, 4, 'up'), "\nTest for - makeSpiralTraverse(0, 5, 2, 4, 'up');");
console.log('\n');

console.log(createMatrix(5, 0));
console.log(makeSpiralTraverse(5, 0, 2, 4, 'up'), "\nTest for - makeSpiralTraverse(5, 0, 2, 4, 'up');");
console.log('\n');
