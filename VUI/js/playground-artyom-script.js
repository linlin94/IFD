window.addEventListener("load", function () {
    var artyom = new Artyom();
    let room = document.getElementById("room");

    artyom.addCommands({
        indexes: ["suche mir den aktuellen Wert dieser Karte aus Farben Schock"],
        smart: false,
        action: function (i, wildcard) {
            let newElement = document.createElement("p");
            newElement.setAttribute("class", "element");
            let newResponse = document.createElement("p");
            newResponse.setAttribute("class", "response");
            newElement.innerHTML = "Suche mir den aktuellen Wert dieser Karte aus Farbenschock.";
            newResponse.innerHTML = "Meinst du Celebi mit der Kartennummer 009/185?";
            room.appendChild(newElement);
            room.appendChild(newResponse);
        }
    });

    artyom.addCommands({
        indexes: ["wo finde ich die Kartennummer"],
        smart: false,
        action: function (i, wildcard) {
            let newElement = document.createElement("p");
            newElement.setAttribute("class", "element");
            let newResponse = document.createElement("p");
            newResponse.setAttribute("class", "response");
            newElement.innerHTML = "Wo finde ich die Kartennummer?";
            newResponse.innerHTML = "Die Kartennummer befindet sich auf der Vorderseite der Karte in der linken unteren Ecke.";
            room.appendChild(newElement);
            room.appendChild(newResponse);
        }
    });

    artyom.addCommands({
        indexes: ["ja das ist die Karte"],
        smart: false,
        action: function (i, wildcard) {
            let newElement = document.createElement("p");
            newElement.setAttribute("class", "element");
            let newResponse = document.createElement("p");
            newResponse.setAttribute("class", "response");
            newElement.innerHTML = "Ja, das ist die Karte.";
            newResponse.innerHTML = "Die Karte hat einen aktuellen Wert von 5,30€.";
            room.appendChild(newElement);
            room.appendChild(newResponse);
        }
    });

    artyom.addCommands({
        indexes: ["welche Seltenheit hat die Karte"],
        smart: false,
        action: function (i, wildcard) {
            let newElement = document.createElement("p");
            newElement.setAttribute("class", "element");
            let newResponse = document.createElement("p");
            newResponse.setAttribute("class", "response");
            newElement.innerHTML = "Welche Seltenheit hat die Karte?";
            newResponse.innerHTML = "Die Karte hat die Seltenheitsstufe 'Amazing Rare'.";
            room.appendChild(newElement);
            room.appendChild(newResponse);
        }
    });

    artyom.addCommands({
        indexes: ["welchen Wert hatte die Karte gestern"],
        smart: false,
        action: function (i, wildcard) {
            let newElement = document.createElement("p");
            newElement.setAttribute("class", "element");
            let newResponse = document.createElement("p");
            newResponse.setAttribute("class", "response");
            newElement.innerHTML = "Welchen Wert hatte die Karte gestern?";
            newResponse.innerHTML = "Diese Karte hatte gestern zur selben Uhrzeit einen Wert von 5,11€.";
            room.appendChild(newElement);
            room.appendChild(newResponse);
        }
    });

    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=playground-artyom-script.js.map