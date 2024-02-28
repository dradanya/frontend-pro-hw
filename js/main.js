let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () { // shows current step
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().showStep(); // Виведе 1