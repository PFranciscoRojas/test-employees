import getData from "../utils/getData.js"

const Home = async () =>{
    const employees = await getData();
    employees.sort((a, b) => {
      if (a.Nombre.toLowerCase() > b.Nombre.toLowerCase()) return 1;
      if (a.Nombre.toLowerCase() < b.Nombre.toLowerCase()) return -1;
      return 0;
    });
    employees.sort((a, b) => {
        if (a.Supervisor.toLowerCase() > b.Supervisor.toLowerCase()) return 1;
        if (a.Supervisor.toLowerCase() < b.Supervisor.toLowerCase()) return -1;
        return 0;
      });
    let titleRepeat,trTitle;
    const view = `
    ${employees.map(employee => {
        if(employee.Supervisor !== titleRepeat){
            trTitle = `
                `

            titleRepeat = employee.Supervisor;
         }else{
            trTitle = "";
         }
         return  `${trTitle}<tr>
            <td><strong>${employee.Supervisor}</strong> </td>
            <td>${employee.Nombre} </td>
            <td>${employee.Cargo} </td>
            <td>${employee.Clase} </td>
            <td>${employee.Subsidiaria} </td>
            <td>${employee.Departamento} </td>
        </tr>
        `
        }).join(" ")}`;
    return view;
}

export default Home;
