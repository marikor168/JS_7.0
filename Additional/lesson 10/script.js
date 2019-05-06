let telPlaceholder = "(___) ___-____";
let tel = document.querySelector('#tel');
let numsOnly ="";

tel.addEventListener('focus', () => {
    if (numsOnly.length !== 10){
        tel.value = telPlaceholder;
    }
});

tel.addEventListener('input', () => {
    let rawTel = tel.value;
    numsOnly = rawTel.replace(/\D/g, "");
    
    let result = telPlaceholder.split("");
    for (let i = 0, j = 0; i < result.length; i++) {
        if (i == 0 || i == 4 || i == 5 || i == 9){
            continue;
        }
        
        let tmp = numsOnly[j++];
        if (tmp !== undefined){
            result[i] = tmp;
        } 
    }
    
    tel.value = result.join("");

    if (numsOnly.length > 10) {
        numsOnly = numsOnly.substr(0, 10);
    } 

    setCursorPosition();
});

function setCursorPosition(){
    let length = numsOnly.length;
    if (length >= 0 && length <= 3) {
        tel.setSelectionRange(length + 1, length + 1);
    } else if (length >= 4 && length <= 6){
        tel.setSelectionRange(length + 3, length + 3);
    } else {
        tel.setSelectionRange(length + 4, length + 4);
    }
}

tel.addEventListener('blur', () => {
    if (numsOnly.length !== 10){
        tel.value = '';    
    }
});