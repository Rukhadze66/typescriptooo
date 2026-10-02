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
function classifyRoom(priceValue) {
    if (priceValue < 100) {
        console.log("economy");
    }
    else if (priceValue <= 250) {
        console.log("Standard");
    }
    else {
        console.log("Luxury");
    }
}
classifyRoom(80);
classifyRoom(300);
// 2.4 - მასივი და ციკლი
const cities = [
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
const ratings = [8, 9, 7, 10];
let totalRating = 0;
for (const rating of ratings) {
    totalRating += rating;
}
const averageRating = totalRating / ratings.length;
console.log("საშუალო შეფასება:", averageRating);
// 3.3 - ობიექტები
const hotel = {
    name: "Grand Hotel",
    city: "Tbilisi",
    country: "Georgia",
    foundedYear: 2015,
    website: "www.grandhotel.ge"
};
const room = {
    id: 1,
    name: "Deluxe Room",
    type: "Double",
    capacity: 2,
    price: 150
};
console.log(hotel);
console.log(room);
// 3.4 - ობიექტების მასივი
const rooms = [
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
    firstName;
    lastName;
    email;
    age;
    constructor(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    // 4.4 - getProfile
    getProfile() {
        return `სტუმარი: ${this.firstName} ${this.lastName}, ელ-ფოსტა: ${this.email}, ასაკი: ${this.age}`;
    }
}
// 4.2 - Guest ობიექტი
const guest = new Guest("Luka", "Rukhadze", "luka@mail.com", 22);
console.log(guest.firstName);
console.log(guest.lastName);
console.log(guest.email);
// 4.3 - მემკვიდრეობა
class VipGuest extends Guest {
    bookedRooms;
    constructor(firstName, lastName, email, age, bookedRooms) {
        super(firstName, lastName, email, age);
        this.bookedRooms = bookedRooms;
    }
    getBookedRooms() {
        return this.bookedRooms;
    }
}
// VipGuest ობიექტი
const vipGuest = new VipGuest("Nika", "Beridze", "nika@mail.com", 30, ["Sea View", "Family Room"]);
// 4.4 - ორივე ობიექტის ინფორმაცია
console.log(guest.getProfile());
console.log(vipGuest.getProfile());
console.log(vipGuest.getBookedRooms());
export {};
//# sourceMappingURL=main.js.map