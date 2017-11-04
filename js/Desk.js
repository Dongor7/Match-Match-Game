class Desk{

    constructor(cards) {
        this.cards = cards;
        this.width = cards.length === 8 ? "800px" : "85%";
    }

    createDeskHtml(){

        let divDesk = document.createElement('div');
        divDesk.className = "desk";
        divDesk.style.width = this.width;

        for (let i = 0; i < this.cards.length; i++){
            divDesk.appendChild(this.cards[i].createCardHtml());
        }

        document.querySelector('.content').appendChild(divDesk);
    }

     static cardsCountCheck(cards){

        let self = this;

        self.interval = setTimeout(function run() {
            if(document.querySelectorAll(".hide").length === cards.length){

                let time = Game.timerStop();
                setTimeout(function () {
                    let h2 = document.querySelector('.popup h2'),
                        [p1, p2] = document.querySelectorAll('.popup p');

                    h2.innerHTML = "";
                    h2.innerHTML = "You won!";
                    p1.innerHTML = "";
                    p1.innerHTML = "Your time is " + time;
                    p2.innerHTML = "";

                    document.querySelector('.overlay').style.display='block'
                }, 1500)
            }else {
                self.interval = setTimeout(run, 16);
            }

        }, 16);
    }

    static clear(){
        document.getElementsByClassName('desk').item(0).remove();
        clearTimeout(this.interval);
    }
}
