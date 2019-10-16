use bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Adam",
    emial: "sample@gmail.com"
  },
  {
    name: "Sarah",
    emial: "sample@gmail.com"
  },
  {
    name: "Niall",
    emial: "sample@gmail.com"
  }
]);
