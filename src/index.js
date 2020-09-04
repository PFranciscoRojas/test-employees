import router from "./routes/route.js"
import TableExport from "./utils/TableExporter.js"

window.addEventListener('load',router);


let tableExporter;
let btnExportExcel = document.getElementById("btnExportExcel")
let btnExportCsv = document.getElementById("btnExportCsv")
let btnExportPDF = document.getElementById("btnExportPDF")
let txtItemFilter = document.getElementById("txtItemFilter")

btnExportExcel.onclick = () => {
    tableExporter.exportExcel()
    
};

btnExportCsv.onclick = () => {
    tableExporter.exportCsv()
}

btnExportPDF.onclick = () => {
    tableExporter.exportPDF()
}

const tableFilter = () => {

    const tableMain = document.querySelector("table");
    const rows = document.querySelectorAll("tbody tr")
    rows.forEach(row => {
        const valueTxtFilter = txtItemFilter.value.toLowerCase()
        const text = row.textContent.toLowerCase()

        if(text.includes(valueTxtFilter)){
            row.style.display="table-row"
            row.classList.add("hola")
        }  else{

            row.style.display="none"
            row.classList.remove("hola")
        }
    })

    return tableMain
}

tableExporter = new TableExport(tableFilter())

txtItemFilter.addEventListener("keyup", () =>  {
    tableFilter()
})