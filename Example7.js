function appartament(input) {
    class Houses {
        constructor(town, area, size, price) {
            this.town = town;
            this.area = area
            this.size = size;
            this.price = price
        }
        houseInfo() {
            console.log(`The Appartament is in ${this.town}. Arae is ${this.area}. It is with size of ${this.size} m2, and the price is ${this.price}!`)
        }
    }
    for (let i = 0; i < input.length; i++) {
        let data = input[i].split(`, `)
        let town, area, size, price
        [town, area, size, price]=[data[0], data[1], data[2], data[3]]

        let info = new Houses(town, area, size, price)
        info.houseInfo()
    }
    console.log();
}
appartament([`Plovdiv, Trakiq, 98, 46000`, `Plovdiv, Iztochen, 123, 57000`, `Plovdiv, Smirnenski, 62, 36000`, `Plovdiv, Smirnenski, 103, 45000`]);