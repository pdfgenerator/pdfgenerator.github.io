import { DateTime } from "./Date"

export let DataService = {
    header:{ 
        proformaInvoice: {
            code:"6604962",
            dateInit: DateTime().date,
            page:1
        },
        initInvoice: {
            dateInit: DateTime().date,
            timeInit:DateTime().time,
            // printed:"15:29:35",
            // dateRequest:"30/04/2022"
        },
        deliveryAdress: {
            code: 200446,
            adress: "NIC INTERNATIONAL\nCENTRAL PLAZA (5TH FLOOR)\nROOM NUMBER-01 O.R. NIZAMROAD\nCHITAGONG",
            country:"Bangladesh"
        },
        invoiceAdress: {
            code: 200446,
            adress: "NIC INTERNATIONAL\nCALLE BALMES 266\n08006-BARCELONA",
            country: "Spain"
        }
    },
    table:[
        {
            id: 1,
            code: "1",
            description: "example",
            cases: 0,
            un: "0",
            net: "0.000",
            gross: "0.000",
            price: 0.00,
            amount: 0.00,
        } ,
        {
            id: 2,
            code: "2",
            description: "example",
            cases: 0,
            un: "0",
            net: "0.000",
            gross: "0.000",
            price: 0.00,
            amount: 0.00,
        },
    ],
    totals:{
        amount: 0.00,
        vat: 0.00,
        gross: 0.000,
        net: 0.000,
        cases: 0,
        un: 0.000,
        totalLiters: 0.000,
    },
    footer:{
        code: "B02877926",
        direction: "CALLE BALMES 266 08006 - Barcelona, Spain.",
        numberPhone: "+34 647 972 933",
        email: "nazrulgb@yahoo.com"
    }
}


let array = DataService.table
let atributtes = ["cases", "un", "net", "gross", "amount"]

export function calculateAmount(param) {
    param.forEach(
        row => row.amount = row.cases*row.price
    )
}

export function updateTotals() {
    const sum = (param) => {
        let arrayParam = array.map(
            row => (parseFloat(row[param]))
        )

        let initialValue = 0;

        let totalParam = arrayParam.reduce(
            (value1, value2) => value1 + value2,
            initialValue  
        );

        return totalParam
    }

    atributtes.forEach(
        atributte => DataService.totals[atributte] = sum(atributte)
    )
    
   

    // console.log(DataService.totals, DataService.totals["amount"] = sum("amount"))
}
