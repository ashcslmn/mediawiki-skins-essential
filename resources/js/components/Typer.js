/* eslint-disable */
window.Typer = function(props) {
    return {
        human: false,
        typeInterval: 50,
        pauseInterval: 2000,
        words: true,
        text: '',
        index: 0,
        init: function() {
            this.addLetter();
        },
        removeLetter: function () {
            var al = this;
            // this sets the text to itself but minus a letter
            this.text = this.text.slice(0, this.text.length - 1);
            if (this.text.length > 0) {
                // We still have text left
                setTimeout(function () { al.removeLetter() }, this.typeInterval * 0.75);
            } else {
                // Nothing left!
                // go to the next word in the array
                // if the next word doesn't exist, we go back to the first
                this.index += 1;
                if (this.index >= props.words.length) {
                    this.index = 0;
                }
                // pause after the word is erased
                setTimeout(function () { al.addLetter() }, this.pauseInterval * 0.3);
            }
        },
        addLetter: function () {
            var al = this;
            var nextLetter = props.words[this.index][this.text.length];
            // Adds the next letter in a word
            this.text = this.text + nextLetter;
            if (this.text === props.words[this.index]) {
                // We're done with the word
                setTimeout(function () { al.removeLetter() }, this.pauseInterval);
            } else {
                // We're still typing
                var humanFactor = this.human
                    ? Math.random() * this.typeInterval * 3
                    : 0;
                setTimeout(function () { al.addLetter() }, this.typeInterval + humanFactor);
            }
        }
    }
};