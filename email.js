function sendmail(){
    let parms={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
    }

    emailjs.send("service_mbvt21f","template_up9540b",parms)
}