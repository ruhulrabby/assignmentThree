// https://github.com/ruhulrabby/assignmentThree

// assignment task 1 

function kilometerToMeter (kilometer) {
    let meter = kilometer * 1000;
    return meter;
}

//******************* */

//assignment task 2 

function budgetCalculator (watch, phone, laptop) {
    let sumOfWatch = watch * 50;
    let sumOfPhone = phone * 100;
    let sumOfLaptop = laptop * 500;
    let total = sumOfWatch + sumOfPhone + sumOfLaptop;
    return total;
}

/**********************/

// assignment task 3

function hotelCost(stay) {
    var totalCost = 0;
    if (stay <= 10 ) {
        totalCost = stay * 100;
    }
    else if (stay <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = stay - 10;
        var secondTenDays = remaining * 80;
         totalCost = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = stay - 20;
        var nextFewDays = remainingDays * 50;
        totalCost = firstTenDays + secondTenDays + nextFewDays;
    }
    return totalCost;
}

    //***************** */

    // assignment task 4

    function megaFriend(str) {
        var strSplit = str.split(' ');
        var longestWord = strSplit[0];
        for(var i = 0; i < strSplit.length; i++){
          if(longestWord.length > strSplit[i].length){
            longestWord = strSplit;
           }
        }
        return longestWord;
      }