import getData from "../utils/getData.js"

const Home = async () =>{
    const employees = await getData();
    employees.sort((a, b) => {
        if (a.Nombre.toLowerCase() > b.Nombre.toLowerCase()) return 1;
        if (a.Nombre.toLowerCase() < b.Nombre.toLowerCase()) return -1;
        return 0;
      });

    const view = `
    ${employees.map(employee =>`
        <tr>
            <td>${employee.Nombre} </td>
            <td>${employee.Cargo} </td>
            <td>${employee.Supervisor} </td>
            <td>${employee.Clase} </td>
            <td>${employee.Subsidiaria} </td>
            <td>${employee.Departamento} </td>
        </tr>
        `).join('')}
    `;

    return view;
}

export default Home;
