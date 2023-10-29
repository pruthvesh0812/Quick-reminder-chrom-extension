const messages = [
    "stability",
    "Be still and silent!",
    "Exercise! 10 pushups and 10 squats",
    "Drink water",
    "Relax eyes",
    "Intensity",
    "shambho.. devi .. sadhguru .. bajarangbali",
  ];

//   function showPopup(message) {
//     const popup = document.getElementById('popup');
//     const messageElement = document.getElementById('message');
//     messageElement.innerText = message;
//     popup.style.display = 'block'; // Show the popup
//     setTimeout(() => {
//       popup.style.display = 'none'; // Hide the popup after a delay
//     }, 3000); // Adjust the delay as needed (e.g., 3000 milliseconds = 3 seconds)
//   }

  function showNotification(message) {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'images/icon48.png', // Replace with your icon URL
      title: 'Quick Reminders!',
      message: message,
    });
  }
  

function chooseMessage() {
    const message = messages[Math.floor(Math.random() * messages.length)];
    chrome.storage.local.set({ message: message });
    chrome.action.setPopup({popup:'popup.html'})
    console.log(message)
    // chrome.action.openPopup(); // this dosent work, function is not defined
    showNotification(message);

  }
//   24 * 60 * 60 * 1000
  chooseMessage()
  // Run chooseMessage once an hour
  setInterval(chooseMessage,  1 * 60 * 60 * 1000 );


  