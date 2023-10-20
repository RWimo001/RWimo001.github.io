document.addEventListener("DOMContentLoaded", function() {
    var boutonContact = document.getElementById("afficher-contact");
    var infosContact = document.getElementById("infos-contact");
    var boutonTelechargerPDF = document.getElementById("telecharger-pdf");

    boutonContact.addEventListener("click", function() {
        if (infosContact.style.display === "none" || infosContact.style.display === "") {
            infosContact.style.display = "block";
            infosContact.scrollIntoView({ behavior: "smooth" });
        } else {
            infosContact.style.display = "none";
        }
    });

    boutonTelechargerPDF.addEventListener("click", function() {
        // Cacher les éléments que vous ne souhaitez pas inclure dans le PDF
        boutonContact.style.display = "none";
        boutonTelechargerPDF.style.display = "none";

        // Imprimer la page
        window.print();

        // Rétablir l'affichage des boutons après l'impression
        boutonContact.style.display = "block";
        boutonTelechargerPDF.style.display = "block";
    });
});