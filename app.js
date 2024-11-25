const $input = document.querySelector('input');
const $send = document.querySelector('.send');
const $reset = document.querySelector('.reset');
const $atemp = document.querySelector('.attemps');
const $result = document.querySelector('.result');

let generateNumber = Math.floor(Math.random() * 20 + 1);
function createApp() {
  let attemp = 5;

  $atemp.textContent = 'tienes 5 intentos';

  $send.addEventListener('click', (e) => {
    e.preventDefault();
    const getNumber = $input.value;

    if (!getNumber || getNumber < 0 || getNumber > 20) {
      $result.textContent = 'Introduce un valor válido';
      return;
    } else if (getNumber < generateNumber) {
      $result.textContent = 'El número que pienso, es mayor';
    } else {
      $result.textContent = 'El número que pienso, es menor';
    }
    if (getNumber == generateNumber) {
      $result.textContent = 'Acertaste!🎉';
      return;
    }

    attemp--;
    $atemp.textContent = `tienes ${attemp} intentos`

    if (attemp === 0) {
      $atemp.textContent = `Agotaste tus intentos, hazlo de nuevo`
      $result.textContent = `El número que estaba pensando es ${generateNumber}`;
      $send.style.display = 'none';
    }
  });

  $reset.addEventListener('click', () => {
    generateNumber = Math.floor(Math.random() * 20 + 1);
    attemp = 5;
    $input.value = '';
    $result.textContent = '';
    $atemp.textContent = 'tienes 5 intentos';
    $send.style.display = 'block';
  });
}

createApp();
