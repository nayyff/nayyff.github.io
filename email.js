function sendmail(){
    let parms={
        name : document.getElementById("name").value,
        contact_number : document.getElementById("contact_number").value,
        gender : document.getElementById("gender").value,
        email : document.getElementById("email").value,
    }

    emailjs.send("service_mbvt21f","template_up9540b",parms)
}