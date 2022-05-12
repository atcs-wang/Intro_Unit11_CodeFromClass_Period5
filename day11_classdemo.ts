class CellPhone {
    userName : string;
    brand : string;
    phoneNumber : number; 
    batteryLife : number;
    passcode? : number;

    constructor(userName : string, brand : string, phoneNumber : number,
                batteryLife : number = 100, passcode? : number) {
        this.userName = userName;
        this.brand = brand;
        this.phoneNumber = phoneNumber;
        this.batteryLife = batteryLife;
        this.passcode = passcode;
    }

    recharge(chargeAmount : number) : void {
        this.batteryLife += chargeAmount;
    }

    confirmPassCode(enteredCode : number) : boolean {
        return enteredCode === this.passcode;
    }
}

let phone1 : CellPhone = new CellPhone("Juniiii", "Apple", 1234567890);
let phone2 : CellPhone = new CellPhone("Parth", "Samsung", 9876543210, 50, 111111);

console.log(phone1);
console.log(phone2);

phone1.recharge(10);
phone2.recharge(20);

console.log(phone1.batteryLife);
console.log(phone2.batteryLife);

console.log(phone2.confirmPassCode(11123));
console.log(phone2.confirmPassCode(111111));
