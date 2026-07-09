function createStadium(){


        // Football field

            let grass = new THREE.Mesh(

                    new THREE.BoxGeometry(
                                40,
                                            0.2,
                                                        70
                                                                ),

                                                                        new THREE.MeshLambertMaterial({
                                                                                    color:0x158000
                                                                                            })

                                                                                                );


                                                                                                    grass.position.y = -0.1;

                                                                                                        scene.add(grass);



                                                                                                            // Stadium stands

                                                                                                                createStand(0,3,-40,50,5,5);
                                                                                                                    createStand(0,3,40,50,5,5);

                                                                                                                        createStand(-25,3,0,5,5,70);
                                                                                                                            createStand(25,3,0,5,5,70);



                                                                                                                                // Goals

                                                                                                                                    createGoal(0,2,-35);
                                                                                                                                        createGoal(0,2,35);



                                                                                                                                        }



                                                                                                                                        function createStand(x,y,z,w,h,d){


                                                                                                                                            let stand = new THREE.Mesh(

                                                                                                                                                    new THREE.BoxGeometry(
                                                                                                                                                                w,
                                                                                                                                                                            h,
                                                                                                                                                                                        d
                                                                                                                                                                                                ),

                                                                                                                                                                                                        new THREE.MeshLambertMaterial({
                                                                                                                                                                                                                    color:0x555555
                                                                                                                                                                                                                            })

                                                                                                                                                                                                                                );


                                                                                                                                                                                                                                    stand.position.set(
                                                                                                                                                                                                                                            x,
                                                                                                                                                                                                                                                    y,
                                                                                                                                                                                                                                                            z
                                                                                                                                                                                                                                                                );


                                                                                                                                                                                                                                                                    scene.add(stand);

                                                                                                                                                                                                                                                                    }



                                                                                                                                                                                                                                                                    function createGoal(x,y,z){


                                                                                                                                                                                                                                                                        let postMaterial =
                                                                                                                                                                                                                                                                            new THREE.MeshLambertMaterial({
                                                                                                                                                                                                                                                                                    color:"white"
                                                                                                                                                                                                                                                                                        });


                                                                                                                                                                                                                                                                                            let post1 = new THREE.Mesh(
                                                                                                                                                                                                                                                                                                    new THREE.BoxGeometry(
                                                                                                                                                                                                                                                                                                                0.3,
                                                                                                                                                                                                                                                                                                                            4,
                                                                                                                                                                                                                                                                                                                                        0.3
                                                                                                                                                                                                                                                                                                                                                ),
                                                                                                                                                                                                                                                                                                                                                        postMaterial
                                                                                                                                                                                                                                                                                                                                                            );


                                                                                                                                                                                                                                                                                                                                                                let post2 = post1.clone();


                                                                                                                                                                                                                                                                                                                                                                    post1.position.set(
                                                                                                                                                                                                                                                                                                                                                                            x-3,
                                                                                                                                                                                                                                                                                                                                                                                    y,
                                                                                                                                                                                                                                                                                                                                                                                            z
                                                                                                                                                                                                                                                                                                                                                                                                );


                                                                                                                                                                                                                                                                                                                                                                                                    post2.position.set(
                                                                                                                                                                                                                                                                                                                                                                                                            x+3,
                                                                                                                                                                                                                                                                                                                                                                                                                    y,
                                                                                                                                                                                                                                                                                                                                                                                                                            z
                                                                                                                                                                                                                                                                                                                                                                                                                                );


                                                                                                                                                                                                                                                                                                                                                                                                                                    scene.add(post1);
                                                                                                                                                                                                                                                                                                                                                                                                                                        scene.add(post2);


                                                                                                                                                                                                                                                                                                                                                                                                                                            let bar = new THREE.Mesh(

                                                                                                                                                                                                                                                                                                                                                                                                                                                    new THREE.BoxGeometry(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                6,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            0.3,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        0.3
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ),

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        postMaterial

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            );


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                bar.position.set(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        x,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                y+2,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        z
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            );


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                scene.add(bar);


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
}