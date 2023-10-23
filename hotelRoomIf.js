function hotelRoom(input) {

    let month = input[0];
    let nights = Number(input[1]);

    let apartment = 0;
    let studio = 0;

    if (month === "May" || month === "October") {
        apartment = 65;
        studio = 50;
        if (nights > 7 && nights <= 14) {
            studio *= 0.95;
        } else if (nights > 14) {
            studio *= 0.7;
            apartment *= 0.9;
        }
    } else if (month === "June" || month === "September") {
        apartment = 68.70;
        studio = 75.20;
        if (nights > 14) {
            studio *= 0.8;
            apartment *= 0.9;
        }
    } else if (month === "July" || month === "August") {
        apartment = 77;
        studio = 76;
        if (nights > 14) {
            apartment *= 0.9;
        }
    }
    
    apartment *= nights;
    studio *= nights;

    console.log(`Apartment: ${(apartment).toFixed(2)} lv.`);
    console.log(`Studio: ${(studio).toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);