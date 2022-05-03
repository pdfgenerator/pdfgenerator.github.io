import { jsPDF } from "jspdf";
import { DataService } from "./DataService";
import { DateTime } from "./Date";
import logo from "../Assets/logo.png";

function PDF() {
    const doc = new jsPDF();
    // console.log(doc.getFontList())
    
    const Font = (type) => { doc.setFont("Helvetica", type); }
    const Size = (num) => { doc.setFontSize(num); }

    /* Title */
    Size(13)
    Font("Bold")
    doc.text("Fasana Export - Import S.L.", 6 , 12);
    doc.line(6, 13, 105, 13);

    /* Date */
    Size(10)
    doc.text("DATE", 141 , 12);
    doc.line(141, 13, 151, 13);

    Size(10.5)
    Font("")
    doc.text(DateTime().date, 141 , 17.5);

    /* Time */
    Size(10)
    Font("Bold")
    doc.text("TIME", 171 , 12);
    doc.line(171, 13, 180, 13);

    Size(10.5)
    Font("")
    doc.text(DateTime().time, 171 , 17.5);

    /* Logo */
    doc.addImage(logo, "PNG", 10, 18, 54, 15, "logo", "NONE", 0);

    /* Proforma Invoice */
    Size(10)
    Font("Bold")
    doc.text("PROFORMA INVOICE", 88, 25);
    doc.line(88, 26, 124, 26);

            /* Code */
    Size(11)
    doc.text(DataService.header.proformaInvoice.code, 80, 31);

            /* Date */    
    Size(10.5)
    doc.text(DateTime().date, 114 , 31);

            /* Page IF CONDITIONAL */
    Size(10)
    Font("")
    doc.text(`PAGE: ${DataService.header.proformaInvoice.page}`, 98, 36);

    /* Delivery Adress */
    Size(11)
    Font("Bold")
    doc.text("--- Delivery Adress ---", 30, 47);
    doc.line(6, 48, 95, 48);

    Font("")
    doc.text(`${DataService.header.deliveryAdress.code}`, 15, 53);
    doc.text(`${DataService.header.deliveryAdress.adress}`, 15, 58);
    doc.text(`${DataService.header.deliveryAdress.country}`, 15, 80);

    /* Invoice Adress */
    Size(11)
    Font("Bold")
    doc.text("--- Invoice Adress ---", 141, 47);
    doc.line(114, 48, 200, 48);

    Font("")
    doc.text(`${DataService.header.invoiceAdress.code}`, 127, 53);
    doc.text(`${DataService.header.invoiceAdress.adress}`, 127, 58);
    doc.text(`${DataService.header.invoiceAdress.country}`, 127, 80);

    /* Header table */
    doc.text("Delivery:", 6, 93)
    doc.text("REF.OC D-3*2021", 6, 97.5)

    doc.text("Invoice:", 63, 93)

    doc.text("PAYMENT: 50% pay cash up front 50% CAD", 105, 93)
    doc.text("PAYMENT INSTRUMENT: L/C", 105, 97.6)






    doc.save("prueba1.pdf");
}

export default PDF;