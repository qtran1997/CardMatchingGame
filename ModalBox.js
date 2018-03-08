window.onload = function() {
    var button = document.getElementsByClassName("button");
    button[0].addEventListener("click",poop);
    var background = document.getElementsByTagName("body");
    var cards = document.getElementsByClassName("hidden");
    var points = document.getElementsByTagName("p");
    var pointCounter = 0;
    points[0].innerHTML = pointCounter + " Points";
    var table = document.getElementById("box");

    var exit = document.getElementById("exit");
    exit.addEventListener("click",function(){
        exit.style.display = "none";
        table.style.display="none";
        points[0].style.display="none";
        button[0].style.display = "block";
        button[0].innerHTML = "RETURN TO GAME";
        background[0].style.backgroundColor = "#465a67";
        for( var i=0;i<cards.length;i++)
        {
            cards[i].style.display = "none";
            double();
        }});





    for( var i=0;i<cards.length;i++)
    {

        cards[i].src = "Red_back.jpg";
    }

    function poop()
    {        
        exit.style.display="block";
        table.style.display="inline-block";
        points[0].style.display="block";
        button[0].style.display = "none";
        background[0].style.backgroundColor = "#278127";
        for( var i=0;i<cards.length;i++)
        {
            cards[i].style.display = "inline-block";
            double();



        }
    }

    var arr = [];
    function double()
    {

        var randomNum = Math.ceil((Math.random()*2) +1);
        var randomCard;
        var rand = Math.random()
        if(rand <= .25)
            randomCard = "C";
        else if(rand >.25 && rand <=.5)
            randomCard = "S";
        else if(rand >.5 && rand <=.75)
            randomCard = "D";
        else
            randomCard = "H";


        cardImage = randomNum+randomCard;

        var tmpCount = 0;
        for(var i=0;i<arr.length;i++)
        {
            if(cardImage == arr[i])
                tmpCount++;

        }
        if(tmpCount<2)
        {
            arr.push(cardImage);
            //cards[i].src = cardImage+".jpg";
            console.log(cardImage);
        }
        else
        {
            double();
        }

    }

    var flipCount=0;
    var card1="";
    var card2="";
    cards[0].addEventListener("click",function(){
        if(cards[0].disabled == false)
            cards[0].src = arr[0]+".jpg";
        if(flipCount==0)
            card1=arr[0];
        else
            card2=arr[0];
        flipCount++;
        flip();
    });
    cards[1].addEventListener("click",function(){
        if(cards[1].disabled ==false)
            cards[1].src = arr[1]+".jpg";
        if(flipCount==0)
            card1=arr[1];
        else
            card2=arr[1];
        flipCount++;
        flip();
    });
    cards[2].addEventListener("click",function(){
        if(cards[2].disabled ==false)
            cards[2].src = arr[2]+".jpg";
        if(flipCount==0)
            card1=arr[2];
        else
            card2=arr[2];
        flipCount++;
        flip();
    });
    cards[3].addEventListener("click",function(){
        if(cards[3].disabled ==false)
            cards[3].src = arr[3]+".jpg";
        if(flipCount==0)
            card1=arr[3];
        else
            card2=arr[3];
        flipCount++;
        flip();
    });
    cards[4].addEventListener("click",function(){
        if(cards[4].disabled ==false)
            cards[4].src = arr[4]+".jpg";
        if(flipCount==0)
            card1=arr[4];
        else
            card2=arr[4];
        flipCount++;
        flip();
    });
    cards[5].addEventListener("click",function(){
        if(cards[5].disabled ==false)
            cards[5].src = arr[5]+".jpg";
        if(flipCount==0)
            card1=arr[5];
        else
            card2=arr[5];
        flipCount++;
        flip();
    });
    cards[6].addEventListener("click",function(){
        if(cards[6].disabled ==false)
            cards[6].src = arr[6]+".jpg";
        if(flipCount==0)
            card1=arr[6];
        else
            card2=arr[6];
        flipCount++;
        flip();
    });
    cards[7].addEventListener("click",function(){

        if(cards[7].disabled ==false)
            cards[7].src = arr[7]+".jpg";
        if(flipCount==0)
            card1=arr[7];
        else
            card2=arr[7];
        flipCount++;
        flip();
    });
    cards[8].addEventListener("click",function(){
        if(cards[8].disabled ==false)
            cards[8].src = arr[8]+".jpg";
        if(flipCount==0)
            card1=arr[8];
        else
            card2=arr[8];
        flipCount++;
        flip();
    });
    cards[9].addEventListener("click",function(){
        if(cards[9].disabled ==false)
            cards[9].src = arr[9]+".jpg";
        if(flipCount==0)
            card1=arr[9];
        else
            card2=arr[9];
        flipCount++;
        flip();
    });
    cards[10].addEventListener("click",function(){
        if(cards[10].disabled ==false)
            cards[10].src = arr[10]+".jpg";
        if(flipCount==0)
            card1=arr[10];
        else
            card2=arr[10];
        flipCount++;
        flip();
    });
    cards[11].addEventListener("click",function(){
        if(cards[11].disabled ==false)
            cards[11].src = arr[11]+".jpg";
        if(flipCount==0)
            card1=arr[11];
        else
            card2=arr[11];
        flipCount++;
        flip();
    });
    cards[12].addEventListener("click",function(){
        if(cards[12].disabled ==false)
            cards[12].src = arr[12]+".jpg";
        if(flipCount==0)
            card1=arr[12];
        else
            card2=arr[12];
        flipCount++;
        flip();
    });
    cards[13].addEventListener("click",function(){
        if(cards[13].disabled ==false)
            cards[13].src = arr[13]+".jpg";
        if(flipCount==0)
            card1=arr[13];
        else
            card2=arr[13];
        flipCount++;
        flip();
    });
    cards[14].addEventListener("click",function(){
        if(cards[14].disabled ==false)
            cards[14].src = arr[14]+".jpg";
        if(flipCount==0)
            card1=arr[14];
        else
            card2=arr[14];
        flipCount++;
        flip();
    });
    cards[15].addEventListener("click",function(){
        if(cards[15].disabled ==false)
            cards[15].src = arr[15]+".jpg";
        if(flipCount==0)
            card1=arr[15];
        else
            card2=arr[15];
        flipCount++;
        flip();
    });


    var match = 0;
    function flip()
    {
        if(match == 2)
        {

            for(var i=0;i<cards.length;i++)
            {
                if(cards[i].disabled == false)
                    cards[i].src = "Red_back.jpg";
            }
            match = 0;

            flipCount=0;
            card1="";
            card2="";
        }

        if(flipCount==2 && card1 !="" && card2 !="")
        {
            if(card1 == card2)
            {
                for(var i=0;i<arr.length;i++)
                {
                    if(card1 == arr[i])
                    {

                        cards[i].disabled = true;
                    }
                    if(card2 == arr[i])
                    {
                        cards[i].disabled = true;
                    }
                }
                match = 1;
                pointCounter++;
                points[0].innerHTML = pointCounter + " Points"

                if(pointCounter == 8)
                {
                    points[0].style.color = "#08d155";
                    points[0].innerHTML = "You Win!";
                }
            }
            else
            {
                match = 2;
            }
            flipCount=0;
            card1="";
            card2="";
        }
    }
}