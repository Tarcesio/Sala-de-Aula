window.addEventListener("load", function() {
    fetch("html/menu.html")
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            document.getElementById("dm1").innerHTML = data;
        })
        .catch(function(error) {
            console.error("Erro ao carregar o menu:", error);
        });
});
