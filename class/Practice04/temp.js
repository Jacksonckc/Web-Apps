// for (i =0; i < 1000; i++) {
//     console.log(i)
// }

function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here
    var feet = 0;
    var count = 0;


    while(feet < depth) {
        count++;
        
        feet += 7;
        if (feet >= depth){
            console.log(count)
            break
            }
        feet -= 2;
    } 

}

main()