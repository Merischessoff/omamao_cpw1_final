// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "")  {
        alert("O campo Nome deve ser preenchido");
		myForm.firstname.focus();
        return false;
	}
	var x = document.forms["myForm"]["lname"].value;
    if (x == "")  {
        alert("O campo Segundo Nome deve ser preenchido");
		myForm.lastname.focus();
        return false;
    }
	var x = document.forms["myForm"]["subject"].value;
    if (x == "")  {
        alert("O campo Mensagem deve ser preenchido");
		myForm.subject.focus();
        return false;
    }
	else{
	alert('Mensagem enviada com sucesso!');
	document.myForm.reset()
}
	
}
