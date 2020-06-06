console.log('It works!')

$(document).ready(function () {
    $(document.getElementById("submitBtn")).click(function(event){
        console.log('Clicked button')

        var fullName = $(document.getElementById("fullName")).val()
        var email = $(document.getElementById("email")).val()
        var phone = $(document.getElementById("phone")).val()
        var message = $(document.getElementById("question")).val()
        var statusElm = $('.statusElm')
        statusElm.empty()

        if(fullName.length>5 ) {
            statusElm.append('<div>Full Name is valid<div/>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Full Name is not valid<div/>')
        }
        if(email.length>5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid<div/>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid<div/>')
        }
        if(phone.length>5 ) {
            statusElm.append('<div>Phone is valid<div/>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Phone is not valid<div/>')
        }
        if(message.length>20 ) {
            statusElm.append('<div>Message is valid<div/>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid<div/>')
        }
        document.getElementById("contactForm").submit();
        })
})