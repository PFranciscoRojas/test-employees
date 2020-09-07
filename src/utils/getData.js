const DATA = 'datosEmpleados.json';

const getData = async () => {
    try{
        const response = await fetch(DATA);
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error('Fetch Error',error);
    }
}

export default getData;