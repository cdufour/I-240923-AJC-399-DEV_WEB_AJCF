var h1 = document.createElement('h1');
h1.innerText = 'Exemple 2';
document.body.appendChild(h1);

for (i=1; i<4; i++) {
    var p = document.createElement('p');
    p.innerText = 'Paragraphe ' + i;
    document.body.appendChild(p);
}

