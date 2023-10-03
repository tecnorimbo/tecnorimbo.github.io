
    // Assume cursos is your array of course data
   // Obtener todas las secciones de cursos
   const seccionesCursos = document.querySelectorAll('.servicio');
        
   // Crear un array para almacenar la información de los cursos
   const cursos = [];

   // Iterar sobre cada sección y extraer la información
   seccionesCursos.forEach(seccion => {
       const titulo = seccion.querySelector('.tecnorimbo-1 p:first-child').textContent.trim();
       const descripcion = seccion.querySelector('.tecnorimbo-1 p:nth-child(2)').textContent.trim();
       const imagen = seccion.querySelector('.tecnorimbo-2 img').getAttribute('src').replace(".png", ".jpg");
       console.log(imagen)

       // Crear un objeto con la información del curso y agregarlo al array
       const curso = {
           titulo: titulo,
           descripcion: descripcion,
           imagen: imagen
       };

       cursos.push(curso);
   });

   // Convertir el array de cursos a JSON
   const cursosJSON = JSON.stringify(cursos, null, 2);

   // Mostrar el JSON en la consola
   console.log(cursosJSON);

    // Reference to the carousel indicators and inner content
    const indicatorsContainer = document.getElementById('carousel-indicators');
    const carouselInner = document.getElementById('carousel-inner');

    // Populate carousel indicators and slides
    cursos.forEach((curso, index) => {
        // Create indicator button
        const indicatorButton = document.createElement('button');
        indicatorButton.type = 'button';
        indicatorButton.dataset.bsTarget = '#carouselExampleCaptions';
        indicatorButton.dataset.bsSlideTo = index;
        indicatorButton.className = index === 0 ? 'active' : '';

        // Create carousel item
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');

        // Create image element
        const imageElement = document.createElement('img');
        imageElement.src = curso.imagen;
        imageElement.className = 'd-block w-100';
        imageElement.alt = curso.titulo;

        // Create carousel caption
        const carouselCaption = document.createElement('div');
        carouselCaption.className = 'carousel-caption mt-5  d-md-block';
        carouselCaption.innerHTML = `<h5>${curso.titulo}</h5><p>${curso.descripcion}</p>`;


          // Crea un elemento de enlace
    const linkElement = document.createElement("a");

    // Configura los atributos del enlace
    linkElement.href = "https://wa.me/5491138852847";
    linkElement.classList.add("cta");
    linkElement.target = "_blank";
    linkElement.textContent = "Más Información";

    // Obtiene el contenedor donde se insertará el botón
    

    // Inserta el enlace en el contenedor
   
        // Append elements to DOM
        indicatorsContainer.appendChild(indicatorButton);
        carouselItem.appendChild(imageElement);
        carouselCaption.appendChild(linkElement);
        carouselItem.appendChild(carouselCaption);
        
        carouselInner.appendChild(carouselItem);
    });

