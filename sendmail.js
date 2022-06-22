function sendMail() {

    //getting values from input fields
  
    var sender = "kalpeshparmar9574@gmail.com";
  
    var password = "kp_1122001";
  
    var receiver = Form.email.value;
    var msg = document.getElementById(msg);
    var name = document.getElementById(name);
    var pname = documnet.getElementById(p - name);
    var content = name + pname + msg;
  
   
    //Sending email
  
    Email.send({
  
        Host: "smtp.gmail.com",
  
        Username: sender,
  
        Password: password,
  
        To: receiver,
  
        From: sender,
  
        Subject: "Mail from portfolio site",
  
        Body: content,
  
    }).then(function (message) {
  
        alert("Email sent successfully")
  
    });
  
}