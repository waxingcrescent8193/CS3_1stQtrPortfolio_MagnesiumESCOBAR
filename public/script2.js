let sure = window.confirm("Sure of your numbers?");
if (sure) {
    let totalRequired = (Number(numPerDay) * 365) * (Number(maxAge) - Number(age));
    document.write ("You will need " + totalRequired +  " to last you until the ripe old age of " + maxAge); //display
    alert(`You will need ${totalRequired} to last you until the ripe old age of ${maxAge}`); //pop-up
    console.log("You will need " + totalRequired + " to last you until the ripe old age of " + maxAge); //console
}
else {
    window.alert("Please click run again");
}