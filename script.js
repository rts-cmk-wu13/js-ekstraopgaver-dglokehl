// Lav dine funktioner her:

function assignmentA(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}


function assignmentB(opgaveB) {
    return opgaveB.slice(-3);
}


function assignmentC(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}


function assignmentD(arrayD) {
    return Math.min(...[...arrayD].filter((val) => val > 0));
}


function assignmentE(arrayE) {
    const firstLetter = arrayE.map(string => {
        return string[0];
    });

    if (firstLetter.includes("B" || "b")) {
        let filteredArray = arrayE.filter(x => ["B", "b"].includes(x));
        let newArray = [...filteredArray].sort((a, b) => a.localeCompare(b));
        return newArray;
    } else {
        return false;
    }
}


function assignmentF(opgaveF) {
    if (!isNaN(opgaveF)) {
        return Math.sqrt(opgaveF);
    } else if (isNaN(opgaveF)) {
        const onlyNums = opgaveF.filter(Number);
        let sum = 0;
        onlyNums.forEach(num => {
            sum += num;
        });
        return Math.sqrt(sum);
    }
}