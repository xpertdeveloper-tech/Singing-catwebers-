let scene;
let camera;
let renderer;
let light;


function startScene(){

    scene = new THREE.Scene();

        scene.background = new THREE.Color(0x87ceeb);


            camera = new THREE.PerspectiveCamera(
                    75,
                            window.innerWidth / window.innerHeight,
                                    0.1,
                                            1000
                                                );


                                                    renderer = new THREE.WebGLRenderer({
                                                            antialias:true
                                                                });


                                                                    renderer.setSize(
                                                                            window.innerWidth,
                                                                                    window.innerHeight
                                                                                        );


                                                                                            document.body.appendChild(
                                                                                                    renderer.domElement
                                                                                                        );


                                                                                                            light = new THREE.DirectionalLight(
                                                                                                                    0xffffff,
                                                                                                                            2
                                                                                                                                );

                                                                                                                                    light.position.set(
                                                                                                                                            10,
                                                                                                                                                    20,
                                                                                                                                                            10
                                                                                                                                                                );


                                                                                                                                                                    scene.add(light);


                                                                                                                                                                        createStadium();


                                                                                                                                                                            camera.position.set(
                                                                                                                                                                                    0,
                                                                                                                                                                                            15,
                                                                                                                                                                                                    25
                                                                                                                                                                                                        );


                                                                                                                                                                                                            camera.lookAt(
                                                                                                                                                                                                                    0,
                                                                                                                                                                                                                            0,
                                                                                                                                                                                                                                    0
                                                                                                                                                                                                                                        );

                                                                                                                                                                                                                                        }



                                                                                                                                                                                                                                        function renderScene(){

                                                                                                                                                                                                                                            if(renderer && scene && camera){

                                                                                                                                                                                                                                                    renderer.render(
                                                                                                                                                                                                                                                                scene,
                                                                                                                                                                                                                                                                            camera
                                                                                                                                                                                                                                                                                    );

                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                        }



                                                                                                                                                                                                                                                                                        function updateScene(){

                                                                                                                                                                                                                                                                                            // Later:
                                                                                                                                                                                                                                                                                                // player movement
                                                                                                                                                                                                                                                                                                    // AI
                                                                                                                                                                                                                                                                                                        // ball physics

                                                                                                                                                                                                                                                                                                        }