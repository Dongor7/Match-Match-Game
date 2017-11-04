let count = 0;
let countCards = 0;

class Card{

    constructor(backSide, frontSide){
        this.backSides = ['gryffindor', 'ravenclaw', 'hufflepuff', 'slytherin'];
        this.backSide = this.backSides[backSide];
        this.frontSide = frontSide;
    }

    createCardHtml(){

        let flipContainer = document.createElement('div');
        flipContainer.classList.add("flip-container");

        let card = document.createElement('div');
        card.classList.add("card");
        card.addEventListener('click', Card.flip);

        let front = document.createElement('div');
        front.classList.add("front", this.frontSide);

        let back = document.createElement('div');
        back.classList.add("back",this.backSide);

        card.appendChild(back);
        card.appendChild(front);
        flipContainer.appendChild(card);

        return flipContainer;
    }

    static shuffle(cards){
        let currentIndex = cards.length, temporaryValue, randomIndex;
        countCards = cards.length;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = cards[currentIndex];
            cards[currentIndex] = cards[randomIndex];
            cards[randomIndex] = temporaryValue;
        }

        return cards;
    }

    static flip() {
        event.target.parentNode.classList.toggle('flipped');

        setTimeout(function () {

            let items = document.querySelectorAll('.flipped');

            if(items.length === 2){

                if(items[0].firstChild.classList[1] === items[1].firstChild.classList[1]) {

                    count++;

                    items[0].style.animation = "hideThat 2s forwards";
                    items[0].classList.add("hide");
                    items[1].style.animation = "hideThat 2s forwards";
                    items[1].classList.add("hide");
                }

                items[0].classList.toggle('flipped');
                items[1].classList.toggle('flipped');
            }
        }, 400)
    }

}

