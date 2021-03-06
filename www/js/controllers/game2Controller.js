/**
 * Created by Fzwael on 26/09/16.
 */
angular.module('mainApp')
    .controller('game2Controller', function ($scope , game2factory , $timeout) {
        console.log("GAME2 Controller");
        $scope.alphabet = game2factory.alphabet();
        $scope.word = '';
        var choices = [];
        var subindex;
        console.log("all " , $scope.alphabet[25]);

        resetGame();

        $scope.check = function (index) {
            console.log("CHECK " , index);
            if(choices[index] == $scope.word[subindex]){
                console.log("TRUE");
                correct.play();
                $scope.wordsub = $scope.word.substr(0, subindex) + $scope.word[subindex] + $scope.word.substr(1 + subindex);
                // use this instead of javascript's SetTimeout to let angularJs know of $scope changes ( or use $scope.$apply())
                    $timeout(function () {
                        resetGame();
                    }, 1500);
            }else{
                wrong.play();
                console.log("FALSE");
            }
        };


        function resetGame(){
            // reset variables
            choices = [];
            $scope.word = game2factory.words();
            $scope.picture = game2factory.picture($scope.word);
            console.log("WORD " , $scope.word , "PIC" , $scope.picture);
            // substract index subindex from the selected word
            subindex = Math.floor(Math.random() * $scope.word.length);
            choices.push($scope.word[subindex]);
            $scope.wordsub = $scope.word.substr(0, subindex) + ' ' + $scope.word.substr(1 + subindex);
            for(var i=0 ; i<9 ; i++)
                choices.push($scope.alphabet[Math.floor(Math.random() * 26)]);
            console.log("choices :" , choices);
            shuffle(choices);
            console.log("choices :" , choices);
            $scope.choice1 = choices.slice(0,5);
            $scope.choice2 = choices.slice(5,10);
            console.log($scope.choice1);
            console.log($scope.choice2);
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