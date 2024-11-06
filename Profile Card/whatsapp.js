function sendToWhatsapp() {
    let number = "+92300433233";

    let registration = document.getElementById('registration').value;
    let chassis = document.getElementById('chassis').value;
    let engine = document.getElementById('engine').value;

    let buyerName = document.getElementById('buyerName').value;
    let buyerFather = document.getElementById('buyerFather').value;
    let cnicNo = document.getElementById('cnicNo').value;
    let cnicissueDate = document.getElementById('cnicIssueDate').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    
    var url = "https://wa.me/" + number + "?text="
    + "Registration : " +registration+ "%0a"
    + "Chassis : " +chassis+ "%0a"
    + "Engine : " +engine+ "%0a"
    + "Buyer Name : " +buyerName+ "%0a"
    + "Buyer Father : " +buyerFather+ "%0a"
    + "Cnic No : " +cnicNo+ "%0a"
    + "Cnic Issue Date : " +cnicIssueDate+ "%0a"
    + "Phone : " +phone+ "%0a"
    + "address : " +address+ "%0a"

     window.open(url, '_blank').focus();
}