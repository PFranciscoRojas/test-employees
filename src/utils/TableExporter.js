class TableExporter {
    constructor(table){
        this.table = table
    }

    exportCsv(){
        let content = [];
        const trs = this.table.querySelectorAll("tbody>tr")
        Array.prototype.map.call(trs, tr => {
            const tds = tr.children;
            content.push(Array.prototype.map.call(tds,td => td.innerHTML).join(";"))
        })
        content= encodeURI(content.join("\n"))
        const csvUrl = `data:text/csv;charset=utf-8,${content}`
        this.fileDownload(csvUrl,"employees.csv")
    };

    exportExcel(){
        const tableContent = this.table.outerHTML;
        const tableHtmlUrl = `data:application/vnd.ms-excel;charset-utf-8, ${tableContent}`
        this.fileDownload(tableHtmlUrl,"employees.xls")
    };

    exportPDF(){
        const tableContent = this.table.outerHTML;
        const tableHtmlUrl = `data:application/vnd.ms-excel;charset-utf-8, ${tableContent}`
        this.fileDownload(tableHtmlUrl,"employees.xls")
    };

    fileDownload(url, filename){
        const link = document.createElement("a")
        link.href = url;
        link.download = filename;
        link.click()
    }
};


export default TableExporter;