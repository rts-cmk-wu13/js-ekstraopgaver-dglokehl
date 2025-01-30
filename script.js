// Lav dine funktioner her:

function assignmentA(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}


function assignmentB(opgaveB) {
    console.log(opgaveB.slice(-3));
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
    console.log(Math.min(...[...arrayD].filter((val) => val > 0)));
    
    return Math.min(...[...arrayD].filter((val) => val > 0));
}


function assignmentE(arrayE) {
    const firstLetter = arrayE.map(string => {
        return string[0];
    });

    if (firstLetter.includes("B" || "b")) {
        let filteredArray = arrayE.filter(x => ["B", "b"].includes(x));
        let newArray = filteredArray.sort()
        
        // console.log(newArray);
        return newArray;
    } else {
        return false;
    }
}


function assignmentF(opgaveF) {
    if (!isNaN(opgaveF)) {
		console.log(opgaveF + " = " + Math.sqrt(opgaveF));
        return Math.sqrt(opgaveF);
    } else if (isNaN(opgaveF)) {
        const onlyNums = opgaveF.filter(Number);
        let sum = 0;
        onlyNums.forEach(num => {
            sum += num;
        });

		console.log(onlyNums + " = " + Math.sqrt(sum));
        return Math.sqrt(sum);
    }
}