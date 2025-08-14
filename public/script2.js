function clickedButton() {
    let age = document.getElementById("age").value;
    let maxAge = document.getElementById("maxage").value;
    let numPerDay = document.getElementById("numPerDay").value;

    let totalRequired = (Number(numPerDay) * 365) * (Number(maxAge) - Number(age));
    document.getElementById("resultthere").innerHTML = `You will need ${totalRequired} to last you until the ripe old age of ${maxAge}`;
}