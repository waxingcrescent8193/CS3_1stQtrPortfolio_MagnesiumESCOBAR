let age = window.prompt("Enter your age : ", 14);
let maxAge = window.prompt("You will live until the ripe old age of : ", "100");
let numPerDay = window.prompt("Number of Snacks daily : ", 2);

let sure = window.confirm("Sure of your numbers?");
if (sure) {
    let totalRequired = (Number(numPerDay) * 365) * (Number(maxAge) - Number(age));
    document.write ("You will need " + totalRequired + " to last you until the ripe old age of ${maxAge}");
    console.log("You will need " + totalRequired + " to last you until the ripe old age of " + maxAge);
}
else {
    window.alert("Please click run again");
}