const Header = () => {
    const view = `
        <p>
            <button id="btnExportExcel">Export Excel</button>
            <button id="btnExportCsv">Export XLS</button>
        </p>
        <p>
            Supervisor: <input type="text" />
            Clases: <input type="text" />
            Departamento: <input type="text" />
            Subsidiaria: <input type="text" />
            <button> Filtrar </button>
        </p>
        `

    return view;
}

export default Header;