document.getElementById("goButton").addEventListener("click", function () {
    var selectedMechanic = document.getElementById("mechanicDropdown").value;
    var selectedStation = document.getElementById("stationDropdown").value;

    selectedMechanic = selectedMechanic.toUpperCase().replace(" ", "_");
    selectedStation = selectedStation.toUpperCase().replace(" ", "_");

    var baseRedirectURL = "https://web.miniextensions.com/tYZFYqYIaEPdDURslY2d?prefill_Mechanic=" + selectedMechanic;

    var redirectionURLs = {
        "A1": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "A6": baseRedirectURL + "&prefill_Station=" + selectedStation
    };

    if (redirectionURLs[selectedStation]) {
        window.location.href = redirectionURLs[selectedStation];
    } else {
        alert("Wybierz prawidlowe opcje.");
    }
});
