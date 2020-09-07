import html2PDF from "html2pdf.js"

class TableExporter {
    constructor(table){
        this.table = table
    }

    exportCsv(){
        let content = [];
        let trs = document.getElementsByClassName("table-row")
        if(trs.length <= 0){
            trs = document.querySelectorAll("#table-content tr")
        }

        Array.prototype.map.call(trs, tr => {
            const tds = tr.children;
            content.push(Array.prototype.map.call(tds,td => td.innerHTML).join(";"))
        })
        content= encodeURI(content.join("\n"))
        const csvUrl = `data:text/csv;charset=utf-8,${content}`
        this.fileDownload(csvUrl,"employees.csv")
    };

    exportExcel(){
        const newTableFiltered = this.filterData();
        const tableHtmlUrl = `data:application/vnd.ms-excel;charset-utf-8, ${newTableFiltered.outerHTML.replace(/ /g,"%20")}`
        this.fileDownload(tableHtmlUrl,"employees.xls")
    };

    exportPDF(){
        const newTableFiltered = this.filterData();

        var opt = {
        margin:       0.5,
        filename:     'Employees.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait'},
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };

        html2PDF(newTableFiltered, opt);
    };

    fileDownload(url, filename){
        const link = document.createElement("a")
        link.href = url;
        link.download = filename;
        link.click()
    }

    filterData(){

        let dataFiltered = document.getElementsByClassName("table-row")
        if(dataFiltered.length <= 0){
            dataFiltered = this.table
            return dataFiltered;
        }
        const newTable   = document.createElement("table");
        const tblBody = document.createElement("tbody");
        Array.prototype.filter.call(dataFiltered, (tr)=>{
            let trClone = tr.cloneNode(true);
            tblBody.appendChild(trClone);
        });
        newTable.appendChild(tblBody);

        return newTable;
    }
};


export default TableExporter;