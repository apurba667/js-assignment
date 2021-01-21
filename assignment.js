// https://github.com/apurba667/js-assignment



//Assignment 1 kilometer to meter 
function kilometerToMeter(km){
    if(km>0){
        var result = km*1000;
    return result;
    }
    else{
        console.log("Please Enter positive Value")
    }
}
var kmToM = kilometerToMeter(100);
var kmToM2 = kilometerToMeter(-100);
var kmToM3 = kilometerToMeter(5.24444);
console.log(kmToM);
console.log(kmToM2);
console.log(kmToM3);





// Assignment 2 Budget Calculator 
function budgetCalculator(watchNum, phoneNum, laptopNum){
    if(watchNum>0 && phoneNum>0 && laptopNum>0){
        var watchCost = watchNum*50;
        var phoneCost = phoneNum*100;
        var laptopCost = laptopNum*500;
        var budget = watchCost+phoneCost+laptopCost;
        return budget;
    }
    else{
        console.log("Please Enter positive Integer value")
    }
}
    var result = budgetCalculator(2 , 3 , 4);
    var result2 = budgetCalculator(-1,-2,5);
    console.log(result);
    console.log(result2);





//Assignment 3 Hotel Cost 
function hotelCost(numberOfNightSpend){
    if(numberOfNightSpend>0){
        if(numberOfNightSpend>=10 && numberOfNightSpend<=20){
            var first10Nights = 10*100;
            var otherNights = (numberOfNightSpend-10)*80;
            var totalCost = first10Nights+otherNights;
            return totalCost;
        }
        else if(numberOfNightSpend>20){
            var first10Nights2 = 10*100;
            var second10Nights =10*80;
            var otherNights2 = (numberOfNightSpend-20)*50;
            var totalCost2 = first10Nights2+second10Nights+otherNights2;
            return totalCost2;
        }
        else{
            var totalCost3 = numberOfNightSpend*100;
            return totalCost3;
        }
    }
    else{
        console.log("Please enter positive Integer value!!")
    }
    
}
var cost = hotelCost(8);
var cost2 = hotelCost(12);
var cost3 = hotelCost(25);
var cost4 = hotelCost(-2);
console.log(cost);
console.log(cost2);
console.log(cost3);
console.log(cost4);






//Assignment 4 Mega Friend
function megaFriend(str_ara) {
    let max = str_ara[0].length;
    str_ara.map(v => max = Math.max(max, v.length));
    result = str_ara.filter(v => v.length == max);
    return result;
  }
  
  var maxStr=megaFriend(['apurba','anik','rahim','karim']);
  console.log(maxStr);
