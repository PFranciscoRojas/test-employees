import router from "./routes/route.js"
import TableExport from "./utils/TableExporter.js"

window.addEventListener('load',router);


let tableExporter;
let btnExportExcel = document.getElementById("btnExportExcel")
let btnExportCsv = document.getElementById("btnExportCsv")

btnExportExcel.onclick = () => {
    tableExporter.exportExcel()
};

btnExportCsv.onclick = () => {
    tableExporter.exportCsv()
}

tableExporter = new TableExport(document.querySelector('table'))
