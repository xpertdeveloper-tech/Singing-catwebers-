let ball;
let ballVelocity = new THREE.Vector3(0,0,0);


function createBall(){

    ball = new THREE.Mesh(

            new THREE.SphereGeometry(
                        0.45,
                                    16,
                                                16
                                                        ),

                                                                new THREE.MeshLambertMaterial({
                                                                            color:"white"
                                                                                    })

                                                                                        );


                                                                                            ball.position.set(
                                                                                                    0,
                                                                                                            0.5,
                                                                                                                    0
                                                                                                                        );


                                                                                                                            scene.add(ball);

                                                                                                                            }



                                                                                                                            function updateBall(){

                                                                                                                                if(!ball) return;


                                                                                                                                    ball.position.add(ballVelocity);


                                                                                                                                        // slow down ball
                                                                                                                                            ballVelocity.multiplyScalar(0.98);


                                                                                                                                                // keep ball on ground
                                                                                                                                                    if(ball.position.y < 0.5){
                                                                                                                                                            ball.position.y = 0.5;
                                                                                                                                                                }

                                                                                                                                                                }