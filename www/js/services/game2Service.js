/**
 * Created by Fzwael on 01/10/16.
 */
angular.module('mainApp')
    .factory('game2factory' , function () {
        console.log("GAME 2 FACTORY !");
        var alphabet = ['أ' , 'ب' , 'ت' , 'ث' , 'ج' , 'ح' , 'خ' , 'د' , 'ذ' , 'ر' , 'ز' , 'س' , 'ش' , 'ص' , 'ط' , 'ظ' , 'ع' ,'ف' , 'ق' , 'ك' , 'ل' , 'م' , 'ن' , 'ه' , 'و' , 'ي'];
        //var words=['أسد' , 'قط' , 'ثعلب' , 'فيل' , 'ذئب' , 'أرنب' , 'دب' , 'كلب' , 'تفاح' , 'موز' , 'إجاص'];
        var words=['صاجإ' , 'زوم' , 'حافت' , 'بلك' , 'بد' , 'بنرأ' , 'بئذ' , 'ليف' , 'بلعث' , 'طق' , 'دسأ'];
        var pics =['pear.jpg' , 'banane.jpg' , 'apple.jpg' , 'dog.png' , 'bear.png' ,'rabbit.png' , 'wolf.png' , 'elephant.png' , 'fox.png' , 'cat.png' , 'lion.png'];
        return {
            alphabet: function () {
                return alphabet;
            },
            words: function () {
                return words[Math.floor(Math.random() * words.length)];
            },
            picture: function (animal) {
                return pics[words.indexOf(animal)];
            }
        }
    });