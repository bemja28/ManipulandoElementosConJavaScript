console.log('vinculado');
      const main = document.getElementById('mainContainer');
      setTimeout(() => {
        main.style.display = 'block'
      }, 2000);

      const nombre = prompt('Decime tu nombre');

      if (nombre) {
        document.querySelector('.subtitulo').textContent += nombre
      } else {
        document.querySelector('.subtitulo').textContent += 'INVITADO'
      }
      document.querySelector('.subtitulo').style.textTransform = 'uppercase';
      document.getElementById('lista').style.color = '#E51B3E';

      const change = confirm('Queres cambiar el color de fondo')
      
      if (change) {
        document.body.classList.add('fondo')
      }

      const parrafos = document.querySelectorAll('p');

      parrafos.forEach((parrafo, index) => {
        if ((index + 1) % 2 === 0) {
          parrafo.classList.add('destacadoPar')
        } else {
          parrafo.classList.add('destacadoImpar')

        }
      });