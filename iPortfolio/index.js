function sendEmail() {
  Username = "oluwadarasimiweb@gmail.com";
  Password = "portfolio123!";
  To = "okeniyidarasimi123@gmail.com";
  From = document.getElementById("email").value;
  Subject = document.getElementById("subject").value;
  Body = document.getElementById("message").value;

  Email.send({
    Host: "smtp.gmail.com",
    Username,
    Password,
    To,
    From,
    Subject,
    Body,
  }).then((message) => alert("mail sent successfully"));
}
