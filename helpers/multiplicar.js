const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base,listar=false,hasta=10) => {

    try{

        let salida = '';

        for (let i = 0; i <= hasta; i++) {
            salida += `${base} X ${i} es: ${base * i}\n`;
        }

        if(listar){
            console.log("*********************".green);
            console.log("Tabla del: " , base);
            console.log("*********************".green);
            console.log(salida);
        }

        // fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{

        //     if(err) throw err;

        //     console.log('Archivo creado correctamente');
        // })

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    }
    catch(err)
    {
        throw err;
    }

}

module.exports = {
    crearArchivo
}