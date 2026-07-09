// =====================
// CAMERA SYSTEM
// =====================

function updateCamera(){

    if(!camera || !controlledPlayer)
            return;


                let target = controlledPlayer.mesh.position;


                    camera.position.x = target.x;
                        camera.position.y = target.y + 8;
                            camera.position.z = target.z + 12;


                                camera.lookAt(target);

                                }



                                // =====================
                                // MATCH SYSTEM
                                // =====================

                                let blueScore = 0;
                                let redScore = 0;

                                let matchTime = 300; // 5 minutes


                                function updateMatch(){

                                    if(matchTime <= 0)
                                            return;


                                                matchTime -= 1/60;


                                                    let minutes = Math.floor(matchTime / 60);
                                                        let seconds = Math.floor(matchTime % 60);


                                                            document.getElementById("timer").innerHTML =
                                                                "TIME: " +
                                                                    minutes + ":" +
                                                                        (seconds < 10 ? "0":"") +
                                                                            seconds;

                                                                            }



                                                                            function goal(team){

                                                                                if(team === "blue"){
                                                                                        blueScore++;
                                                                                            }
                                                                                                else{
                                                                                                        redScore++;
                                                                                                            }


                                                                                                                document.querySelector("#scoreboard div")
                                                                                                                    .innerHTML =
                                                                                                                        "BLUE FC " +
                                                                                                                            blueScore +
                                                                                                                                " - " +
                                                                                                                                    redScore +
                                                                                                                                        " RED FC";


                                                                                                                                            ball.position.set(0,0.5,0);
                                                                                                                                                ballVelocity.set(0,0,0);


                                                                                                                                                }



                                                                                                                                                // =====================
                                                                                                                                                // MENU SYSTEM
                                                                                                                                                // =====================

                                                                                                                                                function openMenu(){

                                                                                                                                                    document.getElementById("menu")
                                                                                                                                                        .style.display="flex";

                                                                                                                                                        }



                                                                                                                                                        function closeMenu(){

                                                                                                                                                            document.getElementById("menu")
                                                                                                                                                                .style.display="none";

                                                                                                                                                                }



                                                                                                                                                                // =====================
                                                                                                                                                                // SOUND SYSTEM
                                                                                                                                                                // =====================

                                                                                                                                                                let crowdSound;
                                                                                                                                                                let kickSound;
                                                                                                                                                                let goalSound;



                                                                                                                                                                function loadSounds(){

                                                                                                                                                                    crowdSound = new Audio(
                                                                                                                                                                            "assets/sounds/crowd.mp3"
                                                                                                                                                                                );


                                                                                                                                                                                    kickSound = new Audio(
                                                                                                                                                                                            "assets/sounds/kick.mp3"
                                                                                                                                                                                                );


                                                                                                                                                                                                    goalSound = new Audio(
                                                                                                                                                                                                            "assets/sounds/goal.mp3"
                                                                                                                                                                                                                );


                                                                                                                                                                                                                    crowdSound.loop = true;
                                                                                                                                                                                                                        crowdSound.volume = 0.3;

                                                                                                                                                                                                                        }



                                                                                                                                                                                                                        function playCrowd(){

                                                                                                                                                                                                                            if(crowdSound)
                                                                                                                                                                                                                                    crowdSound.play();

                                                                                                                                                                                                                                    }



                                                                                                                                                                                                                                    function playKick(){

                                                                                                                                                                                                                                        if(kickSound)
                                                                                                                                                                                                                                                kickSound.play();

                                                                                                                                                                                                                                                }



                                                                                                                                                                                                                                                function playGoal(){

                                                                                                                                                                                                                                                    if(goalSound)
                                                                                                                                                                                                                                                            goalSound.play();

                                                                                                                                                                                                                                                            }