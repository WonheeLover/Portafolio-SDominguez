const btn = document.getElementById("btn-enviar");

if (btn) {
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Gracias por contactarme, te responderé lo más pronto posible.");
    });
}
