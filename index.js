let sdannyye_gr = '(?:-(sdannyye))?'; //9
let sdannyye_exc = 'sdannyye';
let stroyashchiyesya_gr = '(?:-(stroyashchiyesya))?'; //10
let stroyashchiyesya_exc = 'stroyashchiyesya';

let type_gr = '(?:-(kvartiry|kottedzhi|taunkhausy|pomeshcheniya))?'; //11
let type_exc = 'kvartiry|kottedzhi|taunkhausy|pomeshcheniya';

let class_gr = '(?:-(ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium))?'; //12
let class_exc = 'ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium';

let rooms_gr = '(?:-(odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye))?'; //13
let rooms_exc = 'odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye';

let rassrochka_gr = '(?:-(rassrochka))?'; //14
let rassrochka_exc = 'rassrochka';

let sremontom_gr = '(?:-(s-remontom))?'; //15
let sremontom_exc = 's-remontom';

let exceptions_gr = sdannyye_exc + '|' + stroyashchiyesya_exc + '|' + type_exc + '|' + class_exc + '|' + rooms_exc + '|' + rassrochka_exc + '|' + sremontom_exc;

let lang_gr = '\/(ru|uk)\/novostroyki'; //1

let oblast_gr = '(?:-(\\w*-?\\w*skaya)(?:-oblast))?'; //2
//(?!(' + exceptions_gr + '))
let city_gr = '(?:-(\\w*-?(?:(?!' + exceptions_gr + ')\\w*)))?'; //3
let city_gr_2 = '(kiev|vinnitsa)?'; // як варіант добавити усі міста (аналогія до областей, але багато)

let rayon_gr = '(?:(?:-rayon-)(\\w*))|'; //4

let metro_gr = '(?:(?:-metro-)(\\w*))|'; //5

let bereg_gr = '(?:-(levyy-bereg|pravyy-bereg))|'; //6

let vozle_gr = '(?:-(vozle-metro))|'; //7

let ulitsa_gr = '(?:(?:-ulitsa-)(\\w*-?(?:(?!' + exceptions_gr + ')\\w*)))?'; //8
           
let reg_exp = new RegExp('^' + lang_gr + oblast_gr + city_gr + '(?:' + rayon_gr + metro_gr + bereg_gr + vozle_gr + ulitsa_gr + ')' + sdannyye_gr + stroyashchiyesya_gr + type_gr + class_gr + rooms_gr + rassrochka_gr + sremontom_gr + '$');

let result = reg_exp.exec("/ru/novostroyki-ivano-frankovskaya-oblast-uzgorod-vozle-metro-s-remontom");

console.log(result);