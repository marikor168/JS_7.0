let tel = document.querySelector('#tel');

tel.addEventListener('focus', () => {
    tel.value = '(___)___-__-__';
});

tel.addEventListener('input', () => {
    let telValue = tel.value
});

tel.addEventListener('blur', () => {
    tel.value = '';

});


function setCursorPosition(pos, elem) {

    elem.focus();

    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);

    else if (elem.createTextRange) {

        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }

}


function mask(event) {
    var matrix = this.defaultValue,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function (a) {
        return val.charAt(i++) || "_";
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this);

}

var input = document.querySelector("input");
input.addEventListener("input", mask, false);