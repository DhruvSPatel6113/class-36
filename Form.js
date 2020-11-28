class Form{

    constructor(){

    }

    display(){

        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(400 , 10);

        var input = createInput("Name");
        input.position(400,160);

        var button = createButton("play");
        button.position(450 , 200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var greeting = createElement('h3');
            var name = input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("hello "+ name);
            greeting.position(450,160);
        })

    }

}