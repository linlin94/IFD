declare var Artyom: any;

window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
    
    artyom.addCommands({
        indexes: ["Hallo *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("Name: " + wildcard);
            artyom.say("Hello" + wildcard);
        }
    },
    {   
        indexes: ["Welchen Wert hat die Karte?"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("20 EURO");
        }
    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();
    
});