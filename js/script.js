const wrapperEl = document.getElementById('wrapper');

for(let i = 1; i <= 15; i ++){
    for( let c = 1; c <= 7; c++){
        let bgBox; 
        if((c * i) % 15 == 0){
            bgBox = 'fizzbuzz';
        } else if((c * i) % 5 == 0){
            bgBox = 'buzz';
        } else if((c * i) % 3 == 0){
            bgBox = 'fizz';
        } else {
            bgBox = 'box-normal';
        }

        console.log(c * i)
        let boxEl = document.createElement('div');
        boxEl.className = `box ${bgBox} d-flex justify-content-center align-items-center`;
        console.log(bgBox)
        boxEl.innerHTML = c * i;
        wrapperEl.append(boxEl)
    }
}
