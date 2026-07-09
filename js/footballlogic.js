let shootPower = 0.7;



// SHOOTING

function shoot(){

    if(!controlledPlayer || !ball)
            return;


                let distance =
                    controlledPlayer.mesh.position.distanceTo(
                            ball.position
                                );


                                    if(distance < 2){


                                            let direction =
                                                    new THREE.Vector3(0,0,-1);


                                                            direction.applyQuaternion(
                                                                        controlledPlayer.mesh.quaternion
                                                                                );


                                                                                        ballVelocity =
                                                                                                direction.multiplyScalar(
                                                                                                            shootPower
                                                                                                                    );


                                                                                                                        }

                                                                                                                        }




                                                                                                                        // PASSING

                                                                                                                        function passBall(){

                                                                                                                            if(!controlledPlayer || !ball)
                                                                                                                                    return;


                                                                                                                                        let closest = null;
                                                                                                                                            let shortest = 999;


                                                                                                                                                players.forEach(p=>{

                                                                                                                                                        if(
                                                                                                                                                                p.team === controlledPlayer.team &&
                                                                                                                                                                        p !== controlledPlayer
                                                                                                                                                                                ){

                                                                                                                                                                                            let d =
                                                                                                                                                                                                        p.mesh.position.distanceTo(
                                                                                                                                                                                                                    controlledPlayer.mesh.position
                                                                                                                                                                                                                                );


                                                                                                                                                                                                                                            if(d < shortest){

                                                                                                                                                                                                                                                            shortest=d;
                                                                                                                                                                                                                                                                            closest=p;

                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                    });



                                                                                                                                                                                                                                                                                                        if(closest){

                                                                                                                                                                                                                                                                                                                let direction =
                                                                                                                                                                                                                                                                                                                        new THREE.Vector3()
                                                                                                                                                                                                                                                                                                                                .subVectors(
                                                                                                                                                                                                                                                                                                                                            closest.mesh.position,
                                                                                                                                                                                                                                                                                                                                                        ball.position
                                                                                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                                                                                                        .normalize();


                                                                                                                                                                                                                                                                                                                                                                                ballVelocity =
                                                                                                                                                                                                                                                                                                                                                                                        direction.multiplyScalar(0.5);

                                                                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                                                            }




                                                                                                                                                                                                                                                                                                                                                                                            // BASIC AI

                                                                                                                                                                                                                                                                                                                                                                                            function updateAI(){


                                                                                                                                                                                                                                                                                                                                                                                            players.forEach(player=>{


                                                                                                                                                                                                                                                                                                                                                                                                if(player.user)
                                                                                                                                                                                                                                                                                                                                                                                                        return;



                                                                                                                                                                                                                                                                                                                                                                                                            if(!ball)
                                                                                                                                                                                                                                                                                                                                                                                                                    return;



                                                                                                                                                                                                                                                                                                                                                                                                                        let direction =
                                                                                                                                                                                                                                                                                                                                                                                                                            new THREE.Vector3()
                                                                                                                                                                                                                                                                                                                                                                                                                                .subVectors(
                                                                                                                                                                                                                                                                                                                                                                                                                                        ball.position,
                                                                                                                                                                                                                                                                                                                                                                                                                                                player.mesh.position
                                                                                                                                                                                                                                                                                                                                                                                                                                                    )
                                                                                                                                                                                                                                                                                                                                                                                                                                                        .normalize();



                                                                                                                                                                                                                                                                                                                                                                                                                                                            // move toward ball

                                                                                                                                                                                                                                                                                                                                                                                                                                                                player.mesh.position.add(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        direction.multiplyScalar(0.02)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            );



                                                                                                                                                                                                                                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }