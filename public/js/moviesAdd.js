console.log('vinculado');
    
            document.body.style.backgroundColor = '#7f7f7f'
            document.body.classList.add('fondoMoviesList');
            const titulo = document.querySelector('.moviesAddTitulo')
            titulo.textContent += 'AGREGAR PELÍCULAS'
            titulo.classList.add('titulo');
            const articulo = document.querySelector('article');
            articulo.classList.add('fondoTransparente');
            const section = document.getElementById('formulario')
            section.classList.add('fondoCRUD')

            const botonAgregar = document.getElementById('agregar')
            const botonLista = document.getElementById('listaDePeliculas')

            botonAgregar.style.display = 'block'
            botonLista.style.display = 'block'