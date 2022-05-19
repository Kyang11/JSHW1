//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

  function findWords(){
      if(dog_string.includes(dog_names)){
          console.log("Match Dog_name")

      }else{
          console.log("No Match")
      }
  }
  console.log(findWords());
  
//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given 

let name_of_list = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    // for loop to get all name
    // and replace with even index
    for (let i =0; i < name_of_list.length; i++) {
        if(i%2 ==0){
            name_of_list.splice(i,1, "even index");
        }
    }
    return name_of_list
}
console.log(replaceEvens())


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]