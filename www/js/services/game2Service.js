/**
 * Created by Fzwael on 01/10/16.
 */
angular.module('mainApp')
    .factory('game2factory' , function () {
        console.log("GAME 2 FACTORY !");
        var alphabet = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z'];
        var words = ['cat' , 'lion' , 'mouse'];
        
        return {
            alphabet: function () {
                return alphabet;
            },
            words: function () {
                return words[1];
            }
        }
    });