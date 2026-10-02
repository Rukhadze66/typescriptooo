console.log("Hotel Reservation System - [Luka Rukhadze]");

// 2.1
const accommodationType = "Single Room";
const roomLevel = 8;
const roomAvailable = true;
const nightlyRate = 120;

console.log(accommodationType);
console.log(roomLevel);
console.log(roomAvailable);
console.log(nightlyRate);


// 2.2
function showRoomDetails() {
    return `ოთახი: ${accommodationType}, სართული: ${roomLevel}, ხელმისაწვდომია: ${roomAvailable}, ფასი ღამეში: ${nightlyRate}`;
}

console.log(showRoomDetails());


// 2.3
function classifyRoom(priceValue: number) {
    if (priceValue < 100) {
        console.log("economy");
    } else if (priceValue <= 250) {
        console.log("Standard");
    } else {
        console.log("Luxury");
    }
}

classifyRoom(80);
classifyRoom(300);


// 2.4 - მასივი და ციკლი
const cities: string[] = [
    "Tbilisi",
    "Batumi",
    "Kutaisi",
    "Rustavi",
    "Gori"
];

for (let i = 0; i < cities.length; i++) {
    console.log(`${i} - ${cities[i]}`);
}


// 2.5 - საშუალო შეფასება
const ratings: number[] = [8, 9, 7, 10];

let totalRating = 0;

for (const rating of ratings) {
    totalRating += rating;
}

const averageRating = totalRating / ratings.length;

console.log("საშუალო შეფასება:", averageRating);


// 3.1 - Type Alias
type TRoom = {
    id: number;
    name: string;
    type: string;
    capacity: number;
    price: number;
};


// 3.2 - Interface
interface IHotel {
    name: string;
    city: string;
    country: string;
    foundedYear: number;
    website?: string;
}


// 3.3 - ობიექტები
const hotel: IHotel = {
    name: "Grand Hotel",
    city: "Tbilisi",
    country: "Georgia",
    foundedYear: 2015,
    website: "www.grandhotel.ge"
};

const room: TRoom = {
    id: 1,
    name: "Deluxe Room",
    type: "Double",
    capacity: 2,
    price: 150
};

console.log(hotel);
console.log(room);


// 3.4 - ობიექტების მასივი
const rooms: TRoom[] = [
    {
        id: 1,
        name: "Sea View",
        type: "Double",
        capacity: 2,
        price: 180
    },
    {
        id: 2,
        name: "City View",
        type: "Single",
        capacity: 1,
        price: 100
    },
    {
        id: 3,
        name: "Family Room",
        type: "Suite",
        capacity: 4,
        price: 250
    }
];

rooms.forEach((room) => {
    console.log(`${room.name} - ${room.price} ლარი`);
});


// 4.1 - Guest კლასი
class Guest {
    public firstName: string;
    public lastName: string;
    public email: string;
    private age: number;

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }


    // 4.4 - getProfile
    public getProfile(): string {
        return `სტუმარი: ${this.firstName} ${this.lastName}, ელ-ფოსტა: ${this.email}, ასაკი: ${this.age}`;
    }
}
 

// 4.2 - Guest ობიექტი
const guest = new Guest(
    "Luka",
    "Rukhadze",
    "luka@mail.com",
    22
);

console.log(guest.firstName);
console.log(guest.lastName);
console.log(guest.email);


// 4.3 - მემკვიდრეობა
class VipGuest extends Guest {
    private bookedRooms: string[];

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        bookedRooms: string[]
    ) {
        super(firstName, lastName, email, age);
        this.bookedRooms = bookedRooms;
    }

    public getBookedRooms(): string[] {
        return this.bookedRooms;
    }
}


// VipGuest ობიექტი
const vipGuest = new VipGuest(
    "Nika",
    "Beridze",
    "nika@mail.com",
    30,
    ["Sea View", "Family Room"]
);


// 4.4 - ორივე ობიექტის ინფორმაცია
console.log(guest.getProfile());

console.log(vipGuest.getProfile());

console.log(vipGuest.getBookedRooms());
