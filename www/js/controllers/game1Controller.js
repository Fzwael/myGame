/**
 * Created by Fzwael on 26/09/16.
 */
angular.module('mainApp')
    .controller('game1Controller', function ($scope , $ionicModal) {
        console.log("GAME1 Controller");
        var solved , a , i;
        $scope.cardsArray = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
        resetGame();


        $scope.replay = function () {
            resetGame();
            $scope.modal.hide();
        };

        $scope.check = function (index , choice) {
            // console.log("CHECKING");
            $scope.clicks ++;
            if(a == 0){
                a = choice;
                i = index;
                document.getElementById("flipper" + i).style.transform = "rotateY(180deg)";
            }
            else {
                // console.log("CHECKING " , a , " = " , choice);
                document.getElementById("flipper" + index).style.transform = "rotateY(180deg)";
                if(a == choice){
                    // good choice
                    correct.play();
                    solved ++ ;
                    a=0;
                }
                else{
                    // wrong choice
                    setTimeout(function() {
                        // console.log("LOOOOOOOOOOST");
                        document.getElementById("flipper" + i).style.transform = "rotateY(0deg)";
                        document.getElementById("flipper" + index).style.transform = "rotateY(0deg)";
                        a=0;
                        // i=0;
                    }, 500);
                }
            }
            // console.log("N of solved cards" , solved);
            if(solved == 8){
                // when you solve all 8
                // console.log("you wiiiiiiiiiiiiin !");

                $ionicModal.fromTemplateUrl('winlose-modal', {
                    scope: $scope,
                    animation: 'jelly'
                }).then(function(modal) {
                    $scope.modal = modal;
                    $scope.modal.show();
                });

                // $window.location.reload(true);
            }
        };

        function resetGame() {
            $scope.clicks = 0;
            solved = 0;
            a = 0 ;
            i = 0 ;
            shuffle($scope.cardsArray);
            for(var i=1 ; i<17 ; i++){
                document.getElementById("flipper" + i).style.transform = "rotateY(0deg)";
            }
        }

        function shuffle(a) {
            var j, x, i;
            for (i = a.length; i; i--) {
                j = Math.floor(Math.random() * i);
                x = a[i - 1];
                a[i - 1] = a[j];
                a[j] = x;
            }
        }
    });