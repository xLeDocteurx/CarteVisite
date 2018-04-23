function popup() {

    document.getElementById("pop-up").style.display = "block";
}

function closepanel() {

    document.getElementById("pop-up").style.display = "none";
}

function printimg(){

    var popup = document.getElementById("pop-up");

    function closePrint () {
        if ( popup ) {
            popup.close();
        }
    }

    popup = window.open("printable.png");
    popup.onbeforeunload = closePrint;
    popup.onafterprint = closePrint;
    popup.focus(); // Required for IE
    popup.print();
}