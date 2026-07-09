function createTeams(){

        // BLUE TEAM

            createPlayer("blue",0,20,true); 
                // You control this player


                    createPlayer("blue",-10,15);
                        createPlayer("blue",10,15);

                            createPlayer("blue",-15,5);
                                createPlayer("blue",15,5);

                                    createPlayer("blue",-10,-10);
                                        createPlayer("blue",10,-10);

                                            createPlayer("blue",-5,-20);
                                                createPlayer("blue",5,-20);

                                                    createPlayer("blue",-15,-25);
                                                        createPlayer("blue",15,-25);



                                                            // RED TEAM

                                                                createPlayer("red",0,-20);

                                                                    createPlayer("red",-10,-15);
                                                                        createPlayer("red",10,-15);

                                                                            createPlayer("red",-15,-5);
                                                                                createPlayer("red",15,-5);

                                                                                    createPlayer("red",-10,10);
                                                                                        createPlayer("red",10,10);

                                                                                            createPlayer("red",-5,20);
                                                                                                createPlayer("red",5,20);

                                                                                                    createPlayer("red",-15,25);
                                                                                                        createPlayer("red",15,25);



                                                                                                            // Goalkeepers

                                                                                                                createPlayer("yellow",0,34);
                                                                                                                    createPlayer("yellow",0,-34);


                                                                                                                    }
}