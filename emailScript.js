
// get the  values from the email feilds

var btn = document.getElementById('contact_btn')


document.getElementById("contact").addEventListener("submit", function(event) {
    // Prevent form from being submitted and page from being reloaded
    event.preventDefault();
    debugger
   
    var fname = document.getElementById('name').value;
   
    var email = document.getElementById('email').value;
    var project = document.getElementById('project').value
    var msg = document.getElementById('msg').value;

    let body = { // corrected const declaration
        name: fname,
        proejct:project,
        email: email,
        message: msg
    };
    if (_formValidate(body)) {
        btn.innerText='Mail is sending...'
        console.log(body);
        sendMail(body)
   } 
    // Optionally, you can manually submit the form after processing the data
    // event.target.submit();
  
  });

function _formValidate(data){
    
    if (data.name == "") { 
        alert("Please enter your first name");
        return false

    }
   

    if(!data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    )) {
        alert("enter valid contact email")
    }
    return true
}


// Load the EmailJS library

  
    
    // Send the email
    // Send the email
    async function sendMail(body) {
        try {
            const service_id = "service_90b7imp";
            const template_id = "template_i84dit8";
            const btn = document.getElementById('contact_btn');
            await emailjs.send(service_id, template_id, body);
            
            
            btn.innerText = 'Mail sent';
            alert("success");
            document.getElementById('contact').reset();
        } catch (err) {
            console.log(err)
           
        }
          
    }

