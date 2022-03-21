const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

crearArchivo(argv.b,argv.l,argv.h)
.then(archivo=>{
    console.log(archivo.rainbow , 'creado correctamente');;
})
.catch(err=>console.log(err));