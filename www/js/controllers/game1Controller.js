/**
 * Created by Fzwael on 26/09/16.
 */
angular.module('mainApp')
    .controller('game1Controller', function ($scope) {
        console.log("GAME1 Controller");
        var a = 0 ;
        var i = 0 ;
        $scope.cardsArray = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
        shuffle($scope.cardsArray);




        $scope.check = function (index , choice) {
            console.log("CHECKING");
            if(a == 0){
                a = choice;
                i = index;
                document.getElementById("flipper" + i).style.transform = "rotateY(180deg)";
            }
            else {
                console.log("CHECKING " , a , " = " , choice);
                document.getElementById("flipper" + index).style.transform = "rotateY(180deg)";
                if(a == choice){
                    // good choice
                    a=0;
                }
                else{
                    // wrong choice
                    setTimeout(function() {
                        console.log("LOOOOOOOOOOST");
                        document.getElementById("flipper" + i).style.transform = "rotateY(0deg)";
                        document.getElementById("flipper" + index).style.transform = "rotateY(0deg)";
                        a=0;
                        // i=0;
                    }, 500);
                }
            }
        };



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