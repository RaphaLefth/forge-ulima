console.log('correcto');
document.querySelector('#boton').addEventListener('click',traerDatos);

function traerDatos(){
    console.log('dentro');
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'metadata.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            /* console.log(this.responseText); */
            let datos = JSON.parse(this.responseText);
            let mdata = datos.data.collection;
            console.log(mdata);
            
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for (let i = 100; i < 199; i++) {
            /* for (let i of mdata) { */
                console.log(mdata[i].properties.Construction["COSAPI-COTA_INFERIOR"]); 
                const element = mdata[i];
                res.innerHTML += `
                <tr>
                <th scope="row">${mdata[i].objectid}</th>
                <td>${mdata[i].properties.Text["Ele_Tipo"]}</td>
                <td>${mdata[i].properties.Text["Ele_Nivel"]}</td>
                <td>${mdata[i].properties.Text["Ele_Material"]}</td>
                <td>${mdata[i].properties.Construction["COSAPI-RUBRO"]}</td>
                <td>${mdata[i].properties.Construction["COSAPI-COTA_SUPERIOR"]}</td>
                <td>${mdata[i].properties.Construction["COSAPI-COTA_INFERIOR"]}</td>
                <td>${mdata[i].properties.Dimensions["Altura"]}</td>
                <td>${mdata[i].properties.Dimensions["Volume"]}</td>
                <td>${mdata[i].properties.Dimensions["COSAPI-IRREGULAR"]}</td>
                </tr>                
                
                `
            }
        }
        
       /*  $('#tabla').DataTable();  */
    }

}