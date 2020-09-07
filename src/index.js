import router from "./routes/route.js"
import TableExport from "./utils/TableExporter.js"

window.addEventListener('load',router);


let tableExporter;
let btnExportExcel = document.getElementById("btnExportExcel")
let btnExportCsv = document.getElementById("btnExportCsv")
let btnExportPDF = document.getElementById("btnExportPDF")
let txtItemSupervisor = document.getElementById("txtItemSupervisor")
let txtItemClase = document.getElementById("txtItemClase")
let txtItemDepartamento = document.getElementById("txtItemDepartamento")
let txtItemSubsidiaria = document.getElementById("txtItemSubsidiaria")

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

    const tableMain = document.getElementById("table-main");
    const rows = document.querySelectorAll("#table-content tr")

    rows.forEach(row => {
        const columnsByRow = row.querySelectorAll("td")
        let valueTxtFilter = "",text ="";
        // const valueTxtFilter = txtItemFilter.value.toLowerCase()
        // const text = row.textContent.toLowerCase()
        console.log(columnsByRow.length)
        if(columnsByRow.length > 1){
            if(txtItemSupervisor.value !== ""){
                text = columnsByRow[0].textContent.toLowerCase()
                valueTxtFilter = txtItemSupervisor.value.toLowerCase()

            } 
            if(txtItemClase.value !== "") {
                text = columnsByRow[3].textContent.toLowerCase()
                valueTxtFilter = txtItemClase.value.toLowerCase()

            }
            if(txtItemDepartamento.value !== "") {
                text = columnsByRow[5].textContent.toLowerCase()
                valueTxtFilter = txtItemDepartamento.value.toLowerCase()
            }
            if(txtItemSubsidiaria.value !== "") {
                text = columnsByRow[4].textContent.toLowerCase()
                valueTxtFilter = txtItemSubsidiaria.value.toLowerCase()
            }

            if(text.includes(valueTxtFilter)){
                row.style.display="table-row"
                row.classList.add("table-row")
            }  else{

                row.style.display="none"
                row.classList.remove("table-row")
            }
        }
    })

   

    return tableMain
}

tableExporter = new TableExport(tableFilter())

txtItemSupervisor.addEventListener("keyup", () =>  {
    tableFilter()
})
txtItemClase.addEventListener("keyup", () =>  {
    tableFilter()
})
txtItemDepartamento.addEventListener("keyup", () =>  {
    tableFilter()
})

txtItemSubsidiaria.addEventListener("keyup", () =>  {
    tableFilter()
})