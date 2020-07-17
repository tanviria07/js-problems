/** 1.feetToMile */
    function feetToMile(feet){
       var mile =  feet / 5280;
       return mile;
    }
    var result = feetToMile(26400);
    console.log(result);
            //
/** 2.woodCalculator */
    function woodCalculator(chair, table, bed){
        var chairWoodCount = chair * 8;
        var tableWoodCount = table * 18;
        var bedWoodCount = bed * 24;
        var totalWood = chairWoodCount + tableWoodCount + bedWoodCount;
        return totalWood;
    }
    var result = woodCalculator(4, 2, 1);
    console.log(result);
            //
/** 3.brickCalculator */
    function brickCalculator(firstFloor, secondFloor, thirdFloor, fourthFloor, fifthFloor){
        var firstFloorBricks = firstFloor * 200;
        var secondFloorBricks = secondFloor * 200;
        var thirdFloorBricks = thirdFloor * 200;
        var fourthFloorBricks = fourthFloor * 200;
        var fifthFloorBricks = fifthFloor * 200;
        var totalBricks = firstFloorBricks + secondFloorBricks + thirdFloorBricks + fourthFloorBricks + fifthFloorBricks;
        return totalBricks;
    }
    var result = brickCalculator(1, 1, 1, 1, 1);
    console.log(result);
             //
/** 4.tinyFriends */
    
function tinyFriends(friends) {

    let shortest = null;

    if(friends.length > 0){
        for(let i = 0; i < friends.length; i++){
           if(typeof friends[i] === 'string'){
                if(shortest == null)
                    shortest = friends[i];
                else if(friends[i].length < shortest.length){
                    shortest = friends[i];
                }
            }
        }
    }
    return shortest;
}
var output = tinyFriends(['shopto', 'abid', 'shopto', 'rafid']);
console.log(output);
               //the end