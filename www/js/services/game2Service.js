/**
 * Created by Fzwael on 01/10/16.
 */
angular.module('mainApp')
    .factory('game2factory' , function () {
        console.log("GAME 2 FACTORY !");
        var alphabet = ['أ' , 'ب' , 'ت' , 'ث' , 'ج' , 'ح' , 'خ' , 'د' , 'ذ' , 'ر' , 'ز' , 'س' , 'ش' , 'ص' , 'ط' , 'ظ' , 'ع' ,'ف' , 'ق' , 'ك' , 'ل' , 'م' , 'ن' , 'ه' , 'و' , 'ي'];
        var words=['أسد' , 'قط' , 'ثعلب' , 'فيل' , 'ذئب' , 'أرنب' , 'دب' , 'كلب' , 'تفاح' , 'موز' , 'إجاص' , 'باب' , 'منزل' , 'فأر' , 'حمار' , 'جمل' , 'طاولة' , 'كرسي' , 'هاتف' , 'حاسوب' , 'سيارة' , 'منزل' , 'خبز' , 'خروف' , 'خوخ' , 'لوحة' , 'حلوى' , 'سكين' , 'مصاصة' , 'دجاجة' , 'سمكة' , 'كنغر' , 'ضفدع'  , 'زرافة' , 'فراش' , 'ميزان' , 'عنب'];
        var words=['بنع' , 'نازيم' , 'شارف' , 'ةفارز' ,  'عدفض' , 'رغنك' , 'ةكمس' , 'ةجاجد' , 'ةصاصم' , 'نيكس' , 'ىولح' , 'ةحول' , 'خوخ' , 'فورخ' , 'زبخ' , 'لزنم' , 'ةرايس' , 'بوساح' , 'فتاه' , 'يسرك' , 'ةلواط' , 'لمج' , 'رامح' , 'رأف' , 'لزنم' , 'باب' , 'صاجإ' , 'زوم' , 'حافت' , 'بلك' , 'بد' , 'بنرأ' , 'بئذ' , 'ليف' , 'بلعث' , 'طق' , 'دسأ'];
        var pics =['grapes.png' , 'balance.png' , 'bed.png' , 'giraffe.png' , 'frog.png' , 'kangoro.png' , 'fish.png' , 'chicken.png' , 'jawbreaker.png' , 'knife.png' , 'candy.png' , 'board.png' , 'peach.png' , 'sheep.png' , 'baguette.png' , 'house.png' , 'car.png' , 'laptop.png' , 'telephone.png' , 'chair.png' , 'table.png' , 'camel.png' , 'donkey.png' , 'mouse.png' , 'house.png' , 'door.png' , 'pear.png' , 'banana.png' , 'apple.png' , 'dog.png' , 'bear.png' ,'rabbit.png' , 'wolf.png' , 'elephant.png' , 'fox.png' , 'cat.png' , 'lion.png'];
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