function calculateInsurance() {
    
    country = document.getElementById("country").value,
    yourName = document.getElementById("yourName").value,
    age = document.getElementById("age").value,
    horse_power = document.getElementById("horsepower").value,
    insurance = horse_power * 100 / age + 150,
    cent = insurance / 100,
    total =  Math.floor(insurance);
    centx  =  Math.floor(cent);
    
    if (horse_power > 608 || horse_power < 30) {
        document.getElementById("An").innerHTML = "Sorry Inter  Horse Power";
    } else if (age > 90 || age < 17) { 
             document.getElementById("An").innerHTML = "Sorry Inter Age";
        } else {
    document.getElementById("An").innerHTML = "Hello mr/mrs: " + yourName + " and insurance of car " + total +","+ centx + " € per year.";}
    
}