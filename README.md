# Mas Menos app
Esta app es el resultado de un desafío técnico.

## Consigna
El desafío consiste en crear una función que reciba un array numérico y devuelva otro con las siguientes fracciones en el orden especificado:
1. La fracción de números que son positivos
2. La fracción de números que son cero
3. La fracción de números que son negativos

**Opcional:** Montar el proyecto en forma de API en algún servicio de despliegue serverless. (Heroku)

## Solución
El desafío fue resuelto utilizando NodeJs + Express + Typescript. Se creo una estructura API REST escalable con una entidad llamada 'mas-menos' que se encarga de realizar los cálculos necesarios. La API fue publicada en heroku.

### Endpoint
Podés hacer peticiones POST al endpoint: <br/>
`https://mas-menos.herokuapp.com/api/masMenos` <br/>
Adjunto colección de postman de ejemplo para realizar las peticiones. [Colección](https://www.mediafire.com/file/t9oc3316hzcwohc/Mas_Menos.postman_collection.json/file) 

## Despliegue Local
1. Es necesario tener instalado NodeJs y Git
2. Debe clonar este proyecto con `$ git clone https://github.com/francodder/desafio-mas-menos.git`
3. Dentro del directorio del proyecto ejecutar el comando `npm install`
4. Ejecutar `npm start`
5. Listo! El proyecto estará corriendo en el puerto 8080
