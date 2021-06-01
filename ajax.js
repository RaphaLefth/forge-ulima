console.log("correcto");
document.querySelector("#boton").addEventListener("click", traerDatos);

function traerDatos() {
  console.log("dentro");
  const xhttp = new XMLHttpRequest();
  /* xhttp.open('GET', 'metadata.json',true); */
  xhttp.open("GET", "mdUlimav1.json", true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      /* console.log(this.responseText); */
      let datos = JSON.parse(this.responseText);
      let mdata = datos.data.collection;
      console.log(mdata);
      let res = document.querySelector("#res");
      res.innerHTML = "";
      for (let i of mdata) {
        if (i.properties.Datos !== undefined) {
          console.log(i.properties.Datos["COSAPI-EXPORTAR"]);
          if (
            i.properties.Datos["COSAPI-EXPORTAR"] !== undefined &&
            i.properties.Datos["COSAPI-EXPORTAR"] == "Yes"
          ) {
            res.innerHTML += ` 
                    <tr>
                    <th scope="row">${i.properties.Datos["COSAPI-ID_ELEMENTO"]}</th>
                    <td>${i.properties.Construcción["COSAPI-COTA_INFERIOR"]}</td>
                    <td>${i.properties.Construcción["COSAPI-COTA_SUPERIOR"]}</td>
                    <td>${i.properties.Construcción["COSAPI-DIM_A"]}</td>
                    <td>${i.properties.Construcción["COSAPI-DIM_B"]}</td>
                    <td>${i.properties.Construcción["COSAPI-DIM_C"]}</td>
                    <td>${i.properties.Construcción["COSAPI-VOLUMEN"]}</td>
                    <td>${i.properties.Construcción["COSAPI-ID_CRONOGRAMA"]}</td>
                    <td>${i.properties.Construcción["COSAPI-ACTIVIDAD_CRONOGRAMA"]}</td>
                    <td>${i.properties.Construcción["COSAPI-NIVEL"]}</td>
                    <td>${i.properties.Construcción["COSAPI-WBS_NIVEL_1"]}</td>
                    <td>${i.properties.Construcción["COSAPI-DESCRIPCIÓN_WBS_NIVEL_1"]}</td>
                    <td>${i.properties.Construcción["COSAPI-WBS_NIVEL_2"]}</td>
                    <td>${i.properties.Construcción["COSAPI-DESCRIPCIÓN_WBS_NIVEL_2"]}</td>
                    <td>${i.properties.Construcción["COSAPI-WBS_NIVEL_3"]}</td>
                    <td>${i.properties.Construcción["COSAPI-DESCRIPCIÓN_WBS_NIVEL_3"]}</td>
                    <td>${i.properties.Construcción["COSAPI-WBS_NIVEL_4"]}</td>
                    <td>${i.properties.Construcción["COSAPI-DESCRIPCIÓN_WBS_NIVEL_4"]}</td>
                    <td>${i.properties.Construcción["COSAPI-WBS_NIVEL_5"]}</td>
                    <td>${i.properties.Construcción["COSAPI-DESCRIPCIÓN_WBS_NIVEL_5"]}</td>
                    <td>${i.properties.Construcción["COSAPI-SECTOR"]}</td>
                    <td>${i.properties.Construcción["COSAPI-DESCRIPCIÓN_SECTOR"]}</td>
                    <td>${i.properties.Construcción["COSAPI-ÁREA"]}</td>
                    <td>${i.properties.Construcción["COSAPI-DESCRIPCIÓN_ÁREA"]}</td>
                    <td>${i.properties.Construcción["COSAPI-LOTE"]}</td>
                    <td>${i.properties.Construcción["COSAPI-DESCRIPCIÓN_LOTE"]}</td>
                    <td>${i.properties.Construcción["COSAPI-SUBLOTE"]}</td>
                    <td>${i.properties.Construcción["COSAPI-DESCRIPCIÓN_SUBLOTE"]}</td>
                    <td>${i.properties.Construcción["COSAPI-CAMPO_FRENTE"]}</td>
                    <td>${i.properties.Construcción["COSAPI-DESCRIPCIÓN_FRENTE"]}</td>
                    <td>${i.properties.Construcción["COSAPI-ID_PARTIDA"]}</td>
                    <td>${i.properties.Construcción["COSAPI-DESCRIPCIÓN_PARTIDA"]}</td>
                    <td>${i.properties.Construcción["COSAPI-PLANO_CONSTRUCCIÓN"]}</td>
                    <td>${i.properties.Construcción["COSAPI-REV_PLANO_CONSTRUCCIÓN"]}</td>
                    <td>${i.properties.Construcción["COSAPI-PLANO_DETALLE"]}</td>
                    <td>${i.properties.Construcción["COSAPI-REV_PLANO_DETALLE"]}</td>
                    <td>${i.properties.Construcción["COSAPI-DESCRIPCIÓN_ELEMENTO_PRINCIPAL"]}</td>
                    <td>${i.properties.Construcción["COSAPI-MARCA_ELEMENTO_PRINCIPAL"]}</td>
                    <td>${i.properties.Construcción["COSAPI-DESCRIPCIÓN_ELEMENTO"]}</td>
                    <td>${i.properties.Construcción["COSAPI-COD_TÍPICO_ELEMENTO"]}</td>
                    <td>${i.properties.Construcción["COSAPI-MARCA_ELEMENTO"]}</td>
                    <td>${i.properties.Construcción["COSAPI-EJE_H"]}</td>
                    <td>${i.properties.Construcción["COSAPI-EJE_V"]}</td>
                    <td>${i.properties.Construcción["COSAPI-RUBRO"]}</td>
                    <td>${i.properties.Construcción["COSAPI-ESPECIFICACIÓN_TÉCNICA"]}</td>
                    <td>${i.properties.Construcción["COSAPI-UNIDAD"]}</td>

                    </tr>                
                    
                    `;
          }
        }
      }

      /* for (let i = 100; i < 199; i++) {
            /* for (let i of mdata) { 
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
            } */
    }

    /*  $('#tabla').DataTable();  */
  };
}
