function skiTrip(input) {

    let daysToStay = Number(input[0]);
    let typeOfRoom = input[1];
    let assessment = input[2];

    let nights = daysToStay - 1;

    let price = 0

    if (typeOfRoom === "room for one person") {
        price = nights * 18.00;
    } else if (typeOfRoom === "apartment") {
        price = nights * 25.00;
        if (daysToStay < 10) {
            price = price - (price * 0.30);
        } else if (daysToStay >= 10 && daysToStay <= 15) {
            price = price - (price * 0.35);
        } else if (daysToStay > 15) {
            price = price - (price * 0.50);
        }
    } else if (typeOfRoom === "president apartment") {
        price = nights * 35.00;
        if (daysToStay < 10) {
            price = price - (price * 0.10);
        } else if (daysToStay >= 10 && daysToStay <= 15) {
            price = price - (price * 0.15);
        } else if (daysToStay > 15) {
            price = price - (price * 0.20);
        }
    }

    if (assessment === "positive") {
        price = price + (price * 0.25);
    } else if (assessment === "negative") {
        price = price - (price * 0.10);
    }

    console.log(price.toFixed(2));
}

skiTrip(["30", "president apartment", "negative"]);