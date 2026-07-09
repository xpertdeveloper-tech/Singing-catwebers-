let goalkeepers=[];



function createGoalkeeper(team,z){


    let gk = createPlayer(
            "yellow",
                    0,
                            z
                                );


                                    gk.isGoalkeeper=true;


                                        goalkeepers.push(gk);


                                        }



                                        function updateGoalkeepers(){


                                            goalkeepers.forEach(gk=>{


                                                    if(!ball)
                                                                return;



                                                                        let distance =
                                                                                Math.abs(
                                                                                            ball.position.z -
                                                                                                        gk.mesh.position.z
                                                                                                                );



                                                                                                                        // Move toward ball

                                                                                                                                if(distance < 15){


                                                                                                                                            let direction =
                                                                                                                                                        new THREE.Vector3()
                                                                                                                                                                    .subVectors(
                                                                                                                                                                                    ball.position,
                                                                                                                                                                                                    gk.mesh.position
                                                                                                                                                                                                                )
                                                                                                                                                                                                                            .normalize();



                                                                                                                                                                                                                                        gk.mesh.position.x +=
                                                                                                                                                                                                                                                    direction.x * 0.05;


                                                                                                                                                                                                                                                            }



                                                                                                                                                                                                                                                                    // random save chance

                                                                                                                                                                                                                                                                            if(
                                                                                                                                                                                                                                                                                    ball.position.distanceTo(
                                                                                                                                                                                                                                                                                                gk.mesh.position
                                                                                                                                                                                                                                                                                                        ) < 2
                                                                                                                                                                                                                                                                                                                ){

                                                                                                                                                                                                                                                                                                                            let save =
                                                                                                                                                                                                                                                                                                                                        Math.random();


                                                                                                                                                                                                                                                                                                                                                    if(save > 0.4){

                                                                                                                                                                                                                                                                                                                                                                    ballVelocity.multiplyScalar(-0.5);

                                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                                        }


                                                                                                                                                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                                                                                                                                            }