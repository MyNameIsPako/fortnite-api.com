/*
/$$$$$$$           /$$                
| $$__  $$         | $$                
| $$  \ $$ /$$$$$$ | $$   /$$  /$$$$$$ 
| $$$$$$$/|____  $$| $$  /$$/ /$$__  $$
| $$____/  /$$$$$$$| $$$$$$/ | $$  \ $$
| $$      /$$__  $$| $$_  $$ | $$  | $$
| $$     |  $$$$$$$| $$ \  $$|  $$$$$$/
|__/      \_______/|__/  \__/ \______/ 

=================== INFO ==================
==> Guia creada por !Pako (@mynameispako)
==> Unete a mi servidor para mas ayuda: https://dsc.gg/pakosarmy
*/

//! ====================[ PRINCIPAL ]====================

// En esta guía, utilizaremos la API de fortnite-api.com. Necesitarás una Key que encontrarás en la dashboard aquí: https://dash.fortnite-api.com.

// Empezamos agregando el módulo que necesitamos a través de npm y algunos parametros que requerimos para el uso
const axios = require("axios");
const lenguaje = "es"; // puedes añadir varios idiomas por defecto esta en ingles si no se añade
const key = "123456789"; // aqui pondras la key

// Creamos el código de ejemplo que servirá como base para cualquier otra tarea. Únicamente se modificará la URL u otros parámetros esenciales. También implementaremos un bloque "try" para manejar posibles errores durante la ejecución del código.
try {
  const respuesta = await axios.get(
    `Aqui pones la url donde quieras extraer los datos de la API`, // la url esta en la web
    {
      headers: {
        Authorization: key, // la Key esta en la dash
      },
    }
  );

  // Este código manejará la situación en la que la web no responda como se espera. Por ejemplo, si se requiere un nombre de usuario y dicho usuario no existe, se mostrará el siguiente mensaje de error.
  if (!respuesta.data.result) {
    console.log(
      `[ERROR] :: No se encontro ningun resultado en la respuesta de la API`
    );
  }

  // Si la respuesta es correcta, imprimirá el resultado aquí.
  const datos = respuesta.data;

  // En esta sección, visualizaremos los datos en la consola. Al revisar los resultados, podrás extraer la información que desees. Por ejemplo, si la API tiene un parámetro llamado "id", podríamos acceder a él mediante la sintaxis datos.id para ver el valor correspondiente a la id.
  console.log(datos);
} catch (error) {
  console.error(
    "[ERROR] :: Ocurrio un error al obtener la respuesta, el error a sido: 👇",
    error
  );
}

//! ====================[ GUIAS DE CODIGOS ]====================

// Ahora, en esta sección, crearemos las respuestas correspondientes para cada caso. Estas respuestas serán colocadas sobre el primer código que hemos elaborado.

// AES => Devuelve la Key AES aes actual
const AES = await axios.get(`https://fortnite-api.com/v2/aes`, {
  headers: {
    Authorization: key,
  },
});
console.log(AES.data);

// BANNERS => Retorna un array de los banners
const BANNERS = await axios.get(`https://fortnite-api.com/v1/banners`, {
  headers: {
    Authorization: key,
  },
  params: {
    lenguaje,
  },
});
console.log(BANNERS.data);

// Estos ejemplos ilustran el funcionamiento general; simplemente revisa los parámetros específicos y ajusta según sea necesario. Puedes agregar o eliminar parámetros según la documentación de la API.

// COSMETIC => Retorna un cosmetico una una ID que proporciones

// Aquí tenemos un nuevo parámetro ${cosmético}, el cual se encuentra en muchos otros parámetros. Esto se debe a la búsqueda; simplemente necesitas identificar qué se requiere, ya sea un ID o un nombre, y agregarlo. En este caso, hemos introducido una constante con un nombre y el ID del elemento. Ahora te corresponde ajustar tu comando en función de estos valores.

const cosmetico = "473847324738973824732894279328473";
const COSMETIC = await axios.get(
  `https://fortnite-api.com/v2/cosmetics/br/${cosmetico}`,
  {
    headers: {
      Authorization: key,
    },
    params: {
      lenguaje,
    },
  }
);
console.log(COSMETIC.data);

//! ====================[ PARTE FINAL ]====================

// Muchos de los parámetros dependen de otros, algunos son obligatorios y deben ser incluidos, mientras que otros son opcionales. Toda esta información se encuentra detallada en la documentación de la web. Si tienes alguna pregunta o duda, no dudes en visitar mi servidor, estaré encantado de ayudarte sin ningún problema.
