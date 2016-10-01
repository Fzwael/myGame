/**
 * Created by Fzwael on 26/09/16.
 */
angular.module('mainApp')
    .controller('game3Controller', function ($scope, $ionicModal) {
        console.log("GAME3 Controller");
        // LOAD AUDIOS

        var index;
        resetGame();
        addColor();

        function resetGame() {
            $scope.sequence = [];
            index = 0;
            $scope.score = 0;
        }

        $scope.replayGame3 = function () {
            // START OVER
            console.log("REPLAY CLICKED !");
            resetGame();
            addColor();
            $scope.modal.hide();
        };


        function addColor() {
            var rand = Math.floor((Math.random() * 4) + 1);
            $scope.sequence.push(rand);
            index = 0;
            displaySequence();
        }

        /*this function displays the sequence in form of lights*/

        function displaySequence() {

            var i = 0;                     //  set your counter to 1
            function myLoop() {           //  create a loop function
                setTimeout(function () {    //  call a 1s setTimeout when the loop is called

                    if (i % 2 == 0) {
                        document.getElementById("color" + $scope.sequence[i / 2]).style.filter = "invert(100%)";
                        playAudio($scope.sequence[i / 2]);
                    }
                    else {
                        document.getElementById("color" + $scope.sequence[(i - 1) / 2]).style.filter = "none";
                    }

                    i++;                     //  increment the counter
                    if (i < $scope.sequence.length * 2) {            //  if the counter < lenght, call the loop function
                        myLoop();             //  ..  again which will trigger another
                    }                        //  ..  setTimeout()
                }, 500); // no need for time because sound is playing and thus delays execusion
            }

            myLoop();                      //  start the loop
        }

        function playAudio(color) {
            if (color == 1)
                audio1.play();
            else if (color == 2)
                audio2.play();
            else if (color == 3)
                audio3.play();
            else
                audio4.play();
        }

        $scope.replay = function () {
            resetGame();
            $scope.modal.hide();
        };

        $scope.check = function (color) {

            var i = 0;                     //  set your counter to 1
            document.getElementById("color" + color).style.filter = "invert(100%)";
            i++;
            function myLoop() {           //  create a loop function
                setTimeout(function () {    //  call a 1s setTimeout when the loop is called
                    if (i % 2 == 0) {
                        document.getElementById("color" + color).style.filter = "invert(100%)";
                    }
                    else {
                        document.getElementById("color" + color).style.filter = "none";
                    }
                    i++;                     //  increment the counter
                    if (i < 2) {            //  if the counter < lenght, call the loop function
                        myLoop();             //  ..  again which will trigger another
                    }                        //  ..  setTimeout()
                }, 500); // no need for time because sound is playing and thus delays execusion
            }

            myLoop();                      //  start the loop

            if ($scope.sequence[index] == color) {
                index++;
                if (index == $scope.sequence.length) {
                    $scope.score++;
                    setTimeout(function () {
                        addColor();
                    }, 1500);
                }

            } else {
                // alert("GAME OVER !!  Your Score Is " + $scope.score);
                $ionicModal.fromTemplateUrl('winlose-modal', {
                    scope: $scope,
                    animation: 'jelly'
                }).then(function (modal) {
                    $scope.modal = modal;
                    $scope.modal.show();
                });

            }
        }
    });