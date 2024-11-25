document.getElementById('orderForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  let mobile = document.getElementById('mobile').value.trim();
  const address = document.getElementById('address').value;
  const order = document.getElementById('order').value;
  const total = document.getElementById('total').value;

  // Ensure the mobile number starts with +94
  if (!mobile.startsWith('+94')) {
    if (mobile.startsWith('0')) {
      // Replace leading 0 with +94
      mobile = '+94' + mobile.slice(1);
    } else {
      // Add +94 as prefix
      mobile = '+94' + mobile;
    }
  }

  // Prepare the WhatsApp message
  const message = `
    *Order Details:*
    Name: ${name}
    Mobile: ${mobile}
    Address: ${address}
    Order: ${order}
    Total Price: Rs.${total}
  `;

  // WhatsApp URL with the message
  const whatsappURL = `https://wa.me/${mobile}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp in a new tab
  window.open(whatsappURL, '_blank');
});
