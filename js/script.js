// Add custom JavaScript here
const navBarOb = document.querySelector(".navbar");

function incrementStats() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    counter.innerText = 0;
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;
      const increment = target / 200;
      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}
incrementStats();

var replace = new ReplaceMe(document.querySelector(".replace-me"), {
  animation: "animated fadeIn",
  speed: 2000,
  separator: ",",
  hoverStop: false,
  clickChange: false,
  loopCount: "infinite",
  autoRun: true,
  onInit: false,
  onChange: false,
  onComplete: false,
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to open WhatsApp chat
  function openWhatsAppChat() {
    // Replace '1234567890' with your actual WhatsApp number
    var phoneNumber = "+971521555203";

    // Construct the WhatsApp URL
    var whatsappURL = "https://wa.me/" + phoneNumber;

    // Open a new window or tab with the WhatsApp chat
    window.open(whatsappURL, "_blank");
  }

  // Create WhatsApp button container
  var whatsappContainer = document.createElement("div");
  whatsappContainer.className = "whatsapp-container";

  // Create WhatsApp button
  var whatsappButton = document.createElement("div");
  whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i> ';
  whatsappButton.className = "whatsapp-button";
  whatsappButton.addEventListener("click", openWhatsAppChat);

  // Append the button to the container
  whatsappContainer.appendChild(whatsappButton);

  // Append the container to the body
  document.body.appendChild(whatsappContainer);
});
