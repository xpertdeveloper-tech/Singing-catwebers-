let gameStarted = false;

document.getElementById("playButton").onclick = function(){

    gameStarted = true;

        document.getElementById("menu").style.display = "none";
            document.getElementById("scoreboard").style.display = "block";
                document.getElementById("mobileControls").style.display = "block";

                    startScene();

                    };


                    function gameLoop(){

                        requestAnimationFrame(gameLoop);

                            if(gameStarted){

                                    updateScene();

                                        }

                                            renderScene();

                                            }


                                            gameLoop();