//Ahmet Talha Kılıç : 21902412
$(function(){
    var cntShe = 0;
    var cntAce = 0;
    var cntChase = 0;
    var cntEach = 0;
    var cntCase = 0;

    var array = ["A","C","H","S","E"];
    var wordArray = ["SHE","ACE","CHASE","EACH","CASE"];
    var word="";
    const shuffleArray = array =>{
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array [i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    
    $(".one").text(array[0]);
    $(".two").text(array[1]);
    $(".three").text(array[2]);
    $(".four").text(array[3]);
    $(".five").text(array[4]);

    $(".fa-shuffle").click(function(){
        if(word.length == 0){
            $(".one").text(array[0]);
            $(".two").text(array[1]);
            $(".three").text(array[2]);
            $(".four").text(array[3]);
            $(".five").text(array[4]);
                shuffleArray(array);
                console.log(array);
        }
        else{
            $(".fa-shuffle").effect("shake",{times:4},300);
            return;
        }
    })

    $(".one").click(function(){
        word += $(".one").text();
        $(".input").text(word)
        $(".one").css({"background": "red", "color": "white"});
        console.log(word);
    })

    $(".two").click(function(){
        word += $(".two").text();
        $(".input").text(word);
        $(".two").css({"background": "red", "color": "white"});
        console.log(word);
    })

    $(".three").click(function(){
        word += $(".three").text();
        $(".input").text(word);
        $(".three").css({"background": "red", "color": "white"});
        console.log(word);
    })

    $(".four").click(function(){
        word += $(".four").text();
        $(".input").text(word);
        $(".four").css({"background": "red", "color": "white"});
        console.log(word);
    })
    
    $(".five").click(function(){
        word += $(".five").text();
        $(".input").text(word);
        $(".five").css({"background": "red", "color": "white"});
        console.log(word);
    })

    $('body').click(function(e){

        if(e.target.id == "panelcontainer"){
            return;
        }
        if($(e.target).closest('#panelcontainer').length)
        return;
        else{

            if(word == "SHE"){
                console.log("true");
                if(cntShe === 0){
                    $(".she").css("background","red")
                    cntShe++;
                }
                else{
                    $(".she").fadeOut(150)
                             .fadeIn(150)
                             .fadeOut(150)
                             .fadeIn(150)
                }

            }
            else  if(word == "ACE"){
                console.log("true");
                    if(cntAce === 0){
                    $(".ace").css("background","red")
                    cntAce++;
                }
                else{
                    $(".ace").fadeOut(150)
                             .fadeIn(150)
                             .fadeOut(150)
                             .fadeIn(150)
                }
            }
            else if(word == "CHASE"){
                console.log("true");
                if(cntChase === 0){
                    $(".chase").css("background","red")
                    cntChase++;
                }
                else{
                    $(".chase").fadeOut(150)
                             .fadeIn(150)
                             .fadeOut(150)
                             .fadeIn(150)
                }
            }
            else if(word == "EACH"){
                console.log("true");
                if(cntEach === 0){
                    $(".each").css("background","red")
                    cntEach++;
                }
                else{
                    $(".each").fadeOut(150)
                             .fadeIn(150)
                             .fadeOut(150)
                             .fadeIn(150)
                }
            }
            else if(word == "CASE"){
                console.log("true");
                if(cntCase === 0){
                    $(".case").css("background","red")
                    cntCase++;
                }
                else{
                    $(".case").fadeOut(150)
                             .fadeIn(150)
                             .fadeOut(150)
                             .fadeIn(150)
                }
            }

                if(word != "SHE" && word != "ACE" && word != "CASE"&& word != "EACH" && word != "CHASE"){
                    $(".input").effect("shake",{times:4},300);
          }

            word = "";
            $(".input").text(word);
            $(".one").css({"background": "none", "color": "black"});
            $(".two").css({"background": "none", "color": "black"});
            $(".three").css({"background": "none", "color": "black"});
            $(".four").css({"background": "none", "color": "black"});
            $(".five").css({"background": "none", "color": "black"});
        }
    });

    $(".fa-lightbulb").click(function(){
        $("td").css("color","lightgrey")
        .css("transition","all 1s ease")
        .css("color","lightgrey").delay(2500).queue(function() {
            $("td").css("color","");
            $("td").dequeue()
        }); 
    })
})