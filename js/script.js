const wrapperEl = document.getElementById('row');

for(let i = 1; i <= 105; i ++){

    let bgBox; 
    if(i % 15 == 0){
        bgBox = 'fizzbuzz';
    } else if(i % 5 == 0){
        bgBox = 'buzz';
    } else if(i % 3 == 0){
        bgBox = 'fizz';
    } else {
        bgBox = 'box-normal';
    }

    console.log(i)
    let boxEl = document.createElement('div');
    boxEl.className = `box ${bgBox} d-flex justify-content-center align-items-center text-uppercase`;
    console.log(bgBox)
    if (bgBox === 'box-normal'){
        boxEl.innerHTML = i;
    } else {
        boxEl.innerHTML = bgBox;
    }
    wrapperEl.append(boxEl)
}
