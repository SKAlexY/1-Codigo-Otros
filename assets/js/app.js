const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

//Esta funcion trae la informacion de un susario de la api de github
function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

//Esta funcion muestra un error en caso de no encontrar informacion
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

//Llama a la funcion displayUser para mostrar la informacion del usuario 
displayUser('stolinski').catch(handleError);