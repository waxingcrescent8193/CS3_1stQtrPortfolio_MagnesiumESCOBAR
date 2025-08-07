let age, maxAge, numPerDay, totalRequired;

age = window.prompt("How old are you?");
maxAge = window.prompt("Until what age will you live?");
numPerDay = window.prompt("How much of your favorite snack do you consume daily?");

totalRequired = (numPerDay*365)*(maxAge-age);

document.write(`You will need ${totalRequired} to last you until the ripe old age of ${maxAge}`);