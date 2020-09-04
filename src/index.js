import router from "./routes/route.js"
import TableExport from "./utils/TableExporter.js"

window.addEventListener('load',router);


let tableExporter;
let btnExportExcel = document.getElementById("btnExportExcel")
let btnExportCsv = document.getElementById("btnExportCsv")
let btnExportPDF = document.getElementById("btnExportPDF")

btnExportExcel.onclick = () => {
    tableExporter.exportExcel()
};

btnExportCsv.onclick = () => {
    tableExporter.exportCsv()
}

btnExportPDF.onclick = () => {
    tableExporter.exportPDF()
}

tableExporter = new TableExport(document.querySelector('table'))
