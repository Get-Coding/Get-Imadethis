function Sum(Left, Right) {
    let sum = Left + Right;
    console.log(sum);
}

Sum(2, 3);
let SelectorId = 0;

function ChangeOperator(id) {
    SelectorId = Id;

    switch  (selectorId) {
        case 0:

            document.getElementById('tegn').innerHTML = '+';

            break;

        case 1:

            document.getElementById('tegn').innerHTML = '-';

            break;

        case 2:

            document.getElementById('tegn').innerHTML = '*';

            break;
                        
        case 3:
            document.getElementById('tegn').innerHTML = '/'
            
            break;
    }
}

function Calculate() {
    let Left = Number(document.getElementById('left').value);
    let Right = Number(document.getElementById('right').value);
    let Calc;

    switch(SelectorId) {

        case 0:
            Calc = Left + Right;
            break;
            
        case 1:
            Calc = Left - Right;
            break;

        case 2:
            Calc = Left * Right;
            break;

        case 3:
            Calc = Left / Right;
            break;


    }
    document.getElementById('sum').value = Calc;
}