//шахматная доска
function chessBoard(boardW,boardH) {
  var str="";
    for (var h = 0; h < boardH; h++) {
       for (var w = 0; w < boardW; w++) {
         if (h%2==0) {
           if (w%2==0) {
             str+="#";
           }
           else {
             str+=" ";
           }
         }
         else {
           if (w%2!=0) {
             str+="#";
           }
           else {
             str+=" ";
           }
         }
       }
       str+="\n";
     }
     return str;
}
var string = chessBoard(8, 8);
console.log(string);

//подсчет букв
function countChar(str, sym) {
  var newStr = str.toUpperCase();
  var newSym = sym.toUpperCase();
  var count = 0;
  for (var i = 0; i < newStr.length; i++) {
    if (newStr[i]==newSym) {
      count++;
    }
  }
  return count;
}
console.log(countChar('My Random String', 'm'));

//диапазон
function makeArray(start,end,step) {
  var arr = [];
  if (step==null) {
    step=1;
  }
  if (start>end) {
    for (var i = 0; i < start; i-=step) {
        arr.push(start-i);
    }
  }
  else {
    for (var i = 0; i < end; i+=step) {
        arr.push(i+1);
    }
  }
  return arr;
}
console.log(makeArray(1, 10));
console.log(makeArray(1, 10, 3));
console.log(makeArray(10, 1, -2));

//наоборот
function reverseArray(inArr) {
  var outArr = [];
  for (var i = 0; i < inArr.length; i++) {
    outArr[i]=inArr[inArr.length - i - 1];
  }
  return outArr;
}
console.log(reverseArray([1, 2, 3, 4]));

function reverseArrayInPlace(array) {
  var newArr = array.slice();
  for (var i = 0; i < newArr.length; i++) {
    array[i]=newArr[newArr.length - i - 1];
  }
}
var array = ['A', 'B', 'C', 'D'];
reverseArrayInPlace(array);
console.log(array);

//свертка
function mergeArrays(...array) {
  var arr = [];
  for (var item in array) {
    arr = arr.concat(array[item]);
  }
  arr = arr.filter(function(item, pos) {
      return arr.indexOf(item) == pos;
  })
  return arr;
}
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
console.log(mergeArrays([1, 2], [2, 4], [4, 6]));


//Every и some
function every(array, fun) {
  var count = 0;
  var f;
  for (var i = 0; i < array.length; i++) {
    if (fun(array[i])){
      count++;
    }
  }
  if (count == array.length) {
    f = true;
  }
  else {
    f = false;
  }
  return f;
}
console.log(every([1, 4, NaN, 6], Number.isNaN));
console.log(every([NaN, NaN], Number.isNaN));

function some(array, fun) {
  var f;
  for (var i = 0; i < array.length; i++) {
    if (fun(array[i])) {
      f = true;
      break;
    }
    else {
      f = false;
    }
  }
  return f;
}
console.log(some([1, 2, 6], Number.isNaN);
console.log(some([1, 4, NaN, 6], Number.isNaN);


//повтор
function multiplyOrThrow(a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw 'MultiplicatorUnitFailure';
  }
}
function callAgain(a,b) {
  var result;
  try {
    result = multiplyOrThrow(a,b);
  } catch (e) {
    result = callAgain(a,b);
  }
  return result;
}
console.log(callAgain(10,5));


//глубокое сравнение
function deepCompare(ob1,ob2) {
  var ob1keys = Object.keys(ob1);
  var ob2keys = Object.keys(ob2);
  var f;
  var count = 0;
  if (ob1keys.length != ob2keys.length) {
    f = false;
  } else {
    for (var i = 0; i < ob1keys.length; i++) {
      if ((ob1keys[i]!=ob2keys[i])||(ob1[ob1keys[i]]!==ob2[ob2keys[i]])) {
        f = false;
        break;
      }
      else {
        f = true;
      }
    }
  }
  return f;
}
console.log(deepCompare({ one: 1, two: '2' }, { one: 1, two: '2' }));
console.log(deepCompare({ one: 1, two: '2' }, { two: '2' }));
console.log(deepCompare({ one: 1, two: '2' }, { one: 1, two: 2 }));


//кавычки в тексте
function replaceQuotes(string) {
  return string.replace(/'/g,"\"");
}
console.log(replaceQuotes("I’m the 'hero'"));


//найти числа
function findNumbers(arr) {
  var retArr = [];
  var re = /^(-|\+)?((\d+(e(-|\+)?\d+)?)|(\.\d+(e(-|\+)?\d+)?)|(\d+\.)|(\d+\.\d+(e(-|\+)?\d+)?))$/i;
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      retArr.push(arr[i]);
    }
  }
  return retArr;
}
console.log(findNumbers(["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]));
console.log(findNumbers(["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]));

//день и месяц
function getNames(date) {
  var monthNum = date.getMonth();
  var dayNum = date.getDay();
  var month;
  var day;
  switch (monthNum) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'December';
      break;
  }
  switch (dayNum) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
  }
  return month+", "+day;
}
console.log(getNames(new Date()));


//разница в годах
function differenceInYears(date1, date2) {
  var ms1 = date1.getTime();
  var ms2 = date2.getTime();
  var result = Math.abs(Math.round((ms1-ms2)/31536000000)).toFixed(1);
  return result;
}
console.log(differenceInYears(new Date(2014,10,2), new Date(2016,10,2)));
