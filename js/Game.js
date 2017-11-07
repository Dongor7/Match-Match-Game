class Game {

    constructor (){
        this.isDeskExist = false;
    };

    static startNewGame() {
        if(this.isDeskExist){
            Desk.clear();
            Game.timerStop();
        }

        let frontSide = document.querySelector('input[type="radio"][name="frontSide"]:checked').value;
        let level = document.querySelector('input[type="radio"][name="level"]:checked').value;

        let cards = [];
        for(let i = 0; i < level / 4; i++){
            for(let j = 0; j < 4; j++){
                cards.push(new Card(j, frontSide));
            }
        }

        cards = Card.shuffle(cards);

        let desk = new Desk(cards);
        desk.createDeskHtml();
        Desk.cardsCountCheck(cards);
        Game.startGameTimer();

        this.isDeskExist = true;
    };

    static startGameTimer(){

        this.time = 0;
        let self = this;

        self.timer = setTimeout(function run() {

            self.time++;

            let mins = Math.floor(self.time / 10 / 60),
                secs = Math.floor(self.time / 10 % 60);

            if(mins < 10) mins = "0" + mins;
            if(secs < 10) secs = "0" + secs;


            document.querySelector(".timer-output").innerHTML = mins + " : " + secs;

            self.timer = setTimeout(run, 100);
        }, 100);

    }

    static timerStop(){
        let time = Math.floor(this.time / 10 / 60) + " : " + Math.floor(this.time / 10 % 60);
        clearTimeout(this.timer);
        document.querySelector(".timer-output").innerHTML = "00 : 00";

        return time;
    }

    static musicStop(){

        this.audio = document.querySelector(".music");
        this.button = document.querySelector(".button-music");

            if (this.isPlay){
                this.isPlay = false;
                this.audio.play()
            }else{
                this.isPlay = true;
                this.audio.pause();
            }
    }
}

setTimeout("document.querySelector('.overlay').style.display='block'", 0);


