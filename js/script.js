let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i=1; i<101; i++) {
    let excel = document.createElement('div');
    field.appendChild(excel);
    excel.classList.add('excel');
}

let excel = document.querySelectorAll('excel');
let x = 1,
    y = 10;

for (let i=0; i<excel.length; i++) {
    if (x>10) {
        x=1;
        y--;
    }

    excel[i].setAttribute('posX', x);
    excel[i].setAttribute('posY', y);
    x++;
}