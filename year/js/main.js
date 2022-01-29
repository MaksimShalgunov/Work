    let firstYear = + prompt("Введите первый год", '');
    let secondYear = + prompt("Введите второй год", '');
        if (firstYear > secondYear) {
            let first = firstYear;
            firstYear = secondYear;
            secondYear = first;
            for (let i = firstYear; i <= secondYear; i++) {
                if (i % 4 === 0) {
                    console.log(i);
                }
            }
        }
        else {
            for (let i = firstYear; i <= secondYear; i++) {
                if (i % 4 === 0) {
                    console.log(i);
                }
            }
        }