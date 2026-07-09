let players = [];
let controlledPlayer;


function createPlayer(color, x, z, isUser=false){

    let body = new THREE.Mesh(

            new THREE.CapsuleGeometry(
                        0.5,
                                    1.2,
                                                4,
                                                            8
                                                                    ),

                                                                            new THREE.MeshLambertMaterial({
                                                                                        color: color
                                                                                                })

                                                                                                    );


                                                                                                        body.position.set(
                                                                                                                x,
                                                                                                                        1,
                                                                                                                                z
                                                                                                                                    );


                                                                                                                                        scene.add(body);


                                                                                                                                            let player = {
                                                                                                                                                    mesh: body,
                                                                                                                                                            speed: 0.15,
                                                                                                                                                                    user: isUser,
                                                                                                                                                                            team: color
                                                                                                                                                                                };


                                                                                                                                                                                    players.push(player);


                                                                                                                                                                                        if(isUser){
                                                                                                                                                                                                controlledPlayer = player;
                                                                                                                                                                                                    }


                                                                                                                                                                                                        return player;

                                                                                                                                                                                                        }



                                                                                                                                                                                                        function updatePlayers(){

                                                                                                                                                                                                            players.forEach(player=>{

                                                                                                                                                                                                                    // AI will be added later

                                                                                                                                                                                                                        });

                                                                                                                                                                                                                        }