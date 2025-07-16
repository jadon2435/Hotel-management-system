const bookings = [];

function bookRoom() {
  const guestName = document.getElementById("guestName").value.trim();
  const roomType = document.getElementById("roomType").value;

  if (!guestName) {
    alert("Please enter a guest name.");
    return;
  }

  const booking = { guestName, roomType };
  bookings.push(booking);
  displayBookings();
  document.getElementById("guestName").value = '';
}

function displayBookings() {
  const bookingList = document.getElementById("bookingList");
  bookingList.innerHTML = "";

  bookings.forEach((booking, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${booking.guestName} - ${booking.roomType} Room`;
    bookingList.appendChild(li);
  });
}
