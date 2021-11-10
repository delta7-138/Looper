$(document).ready(function(){
    var flag = true
    $("#Start").click(function(){
        var x4 = document.getElementById("drum4")
        var x3 = document.getElementById("drum3")
        var x2 = document.getElementById("drum2")
        var x1 = document.getElementById("drum1")

        var b1 = document.getElementById("b1")
        var b2 = document.getElementById("b2")
        var b3 = document.getElementById("b3")
        var b4 = document.getElementById("b4")
        if(flag){
            keyList = {}
            $(document).keydown(function(event){
                if(!keyList[event.which]){
                    keyList[event.which] = new Date().getTime()
                    switch(event.key){
                        case 'w':
                            x1.play();
                            b1.classList.add("padonaction")
                            break;
                        case 'a':
                            x2.play();
                            b2.classList.add("padonaction")
                            break;
                        case 's':
                            x3.play();
                            b3.classList.add("padonaction")
                            break;
                        case 'd':
                            x4.play();
                            b4.classList.add("padonaction")
                            break;
                    }
                }
            })
            $(document).keyup(function(event){
                if(keyList[event.which]){
                    keyList[event.which] = new Date().getTime() - keyList[event.which]
                    console.log("You pressed " + event.key + " for time  = " + (keyList[event.which]).toString())
                    delete keyList[event.which] 
                    switch(event.key){
                        case 'w':
                            x1.pause();
                            x1.currentTime = 0;
                            b1.classList.remove("padonaction")
                            break;
                        case 'a':
                            x2.pause();
                            x2.currentTime = 0;
                            b2.classList.remove("padonaction")
                            break;
                        case 's':
                            x3.pause();
                            x3.currentTime = 0;
                            b3.classList.remove("padonaction")
                            break;
                        case 'd':
                            x4.pause();
                            x4.currentTime = 0;
                            b4.classList.remove("padonaction")
                            break;
                    }
                }
            })
        }
        $("#Stop").click(function(){
            flag = False
        })    
        console.log(flag)
    })
})

var audio_file = new Audio('drum1.mp3')
audio_file.addEventListener('timeupdate', function(){
    var buffer = .44
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
