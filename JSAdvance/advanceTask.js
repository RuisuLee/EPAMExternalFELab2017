//Промисификация
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function compare(value1, value2) {
  return new Promise(function(resolve, reject) {
    if(!isNumeric(value1)||!isNumeric(value2)){
      var error = 'Недопустимое значение параметра';
      reject(error);
    } else {
      setTimeout(function(){
        var result = Math.sign(value1-value2);
        resolve(result);
      },1000);
    }
  });
}

compare(2,1)
.then(function(result){console.log(result)})
.catch(function(error){console.log(error)});


//цепочка промисов a
function random(sumWith) {
    return new Promise(function(resolve) {
      var timeout = Math.random()*3000;
      setTimeout(function(){
        resolve(Math.random()*3+ sumWith);
    }, timeout)
  })
}
random(0)
.then(function(result) {
  console.log(result);
  return result;
})
.then(function(result){
  return random(result);
})
.then(function(result) {
  console.log(result);
  return random(result);
})
.then(function(result) {
  console.log(result);
})

//цепочка промисов b
function random() {
    return new Promise(function(resolve) {
      var timeout = Math.random()*3000;
      setTimeout(function(){
        resolve(Math.random()*3);
    }, timeout)
  })
}
Promise.all([random(), random(), random(), random(), random(), random(), random()]).then(results => {console.log(results);});


//замыкания
var counter = {
  next: function() {
    var currentCount = 1;
    return function() {
        counter.history.push(currentCount);
        return currentCount++;
    };
  },
  prev: function() {
    var currentCount = 10;
    return function() {
        counter.history.push(currentCount);
        return currentCount--;
    };
  },
  history: []
}
var next = counter.next();
var prev = counter.prev();
alert(next());
alert(next());
alert(next());
alert(next());
alert(next());
alert(next());
alert(next());
alert(next());
alert(next());
alert(next());
alert(prev());
alert(prev());
alert(prev());
alert(prev());
alert(prev());
alert(prev());
alert(prev());
alert(prev());
alert(prev());
alert(prev());
alert(prev());
alert(prev());
console.log(counter.history);

//контекст вызова и карринг
//контекст вызова через встроенный bind
function sumWith(number) {
  return this.currentValue += number;
}
var number = 2;
alert(sumWith.bind({currentValue:3})(number));

//контекст вызова через call
function sumWith(number) {
  return this.currentValue += number;
}
var number = 2;
var value = {
  currentValue:3
};
alert(sumWith.call(value,number));

//карринг
function sumWith(number) {
  return this.currentValue += number;
}
var number = 2;
var myFunk = sumWith.bind({currentValue:-1}, 2);
alert(myFunk(number));
alert(myFunk(number));
alert(myFunk(number));
alert(myFunk(number));


//setInterval через 2 секунды
var count = 0;
var myFunc = setInterval(function() {
  count++;
  alert( "Выводить текст.." );
  if (count >= 5) {
    clearInterval(myFunc);
  }
}, 2000);

//setInterval через 1,3,5,7,9 секунд
// var count = 0;
// var interval = 1000;
// var sInterval = setInterval(myFunction(count), interval);
// function myFunction(count) {
//     count++;
//     alert("Выводить текст..");
//     console.log(interval);
//     clearInterval(sInterval);
//     if(count < 5){
//       interval += 2000;
//       run = setInterval(myFunction(count), interval);
//     } else {
//       clearInterval(sInterval);
//     }
// }
