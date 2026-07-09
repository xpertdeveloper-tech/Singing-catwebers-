let joystick = {
        x:0,
            y:0
            };


            let stick = document.getElementById("stick");



            document.addEventListener(
            "touchmove",
            function(event){


                let touch = event.touches[0];


                    let x =
                        touch.clientX - 100;


                            let y =
                                touch.clientY - 
                                    (window.innerHeight-100);



                                        joystick.x = x/100;
                                            joystick.y = y/100;



                                                stick.style.left =
                                                    35 + joystick.x*30 + "px";


                                                        stick.style.top =
                                                            35 + joystick.y*30 + "px";


                                                            });



                                                            document.addEventListener(
                                                            "touchend",
                                                            function(){


                                                                joystick.x=0;
                                                                    joystick.y=0;


                                                                        stick.style.left="35px";
                                                                            stick.style.top="35px";


                                                                            });



                                                                            function updateControls(){


                                                                                if(controlledPlayer){


                                                                                        controlledPlayer.mesh.position.x +=
                                                                                                joystick.x *
                                                                                                        controlledPlayer.speed;


                                                                                                                controlledPlayer.mesh.position.z +=
                                                                                                                        joystick.y *
                                                                                                                                controlledPlayer.speed;


                                                                                                                                    }


                                                                                                                                    }
}