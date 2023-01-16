console.log('vinculado');
        const change = confirm('Desea el modo oscuro')
        
        if (change) {
            document.body.style.backgroundColor = '#7f7f7f'
            document.body.classList.add('fondoMoviesList');
            const listado = document.querySelector('.moviesListTitulo')
            listado.textContent += 'LISTADO DE PELÍCULAS'
            listado.style.color = '#ffffff'
            listado.style.backgroundColor= 'teal'
            listado.style.padding = '20px'


        }
  