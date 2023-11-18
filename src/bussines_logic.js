document.getElementById('add_object_button').addEventListener('click', function() {
    // Leer valores de los campos de texto
    var objectName = document.getElementById('lost_object').value;
    var description = document.getElementById('description').value;
    var foundPlace = document.getElementById('found_place').value;

    // Generar un ID aleatorio
    var randomId = 'card-' + Math.random().toString(36).substr(2, 9);

    // Crear la tarjeta HTML
    var newCardHtml = `
        <article class="card text-dark bg-light m-3 col-3" id="${randomId}">
            <h3 class="card-header">${objectName}</h3>
            <div class="card-body">
                <h6 class="card-title">Descripción</h6>
                <p class="card-text">${description}</p>
                <h6 class="card-title">Lugar donde se encontro</h6>
                <p class="card-text">${foundPlace}</p>
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Ver objeto
                </button>
            </div>
        </article>
    `;

    // Agregar la tarjeta al DOM
    var mainElement = document.querySelector('main');
    mainElement.insertAdjacentHTML('beforeend', newCardHtml);

    // Opcional: Limpiar los campos de texto después de agregar la tarjeta
    document.getElementById('lost_object').value = '';
    document.getElementById('description').value = '';
    document.getElementById('found_place').value = '';

    $('#new_object_modal').modal('hide');
});
//carga de imagen
