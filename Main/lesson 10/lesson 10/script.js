class options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let divForText = document.createElement('div');
        document.body.appendChild(divForText);
        divForText.textContent = 'Какой-то текст тут должен быть. И вот он есть.';
        divForText.style.cssText = `height: ${this.height};
                                    width: ${this.width};
                                    background: ${this.bg};
                                    font-size: ${this.fontSize};
                                    text-align: ${this.textAlign};`;
    }
    
}

const newText = new options ('250px', '250px', 'yellow', '14pt', 'center');
newText.createDiv();