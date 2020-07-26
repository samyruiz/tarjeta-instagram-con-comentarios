/**
 * El usuario escriba su comentario
 * Escuchar cuando lo envíe
 * Guardar ese valor en JS
 * Imprimir ese valor en el formato 
 */

const comentForm = document.querySelector('#comment-form');
const commentsMainContainer = document.querySelector('#comments-main-container');


comentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    //Guardar el mensaje en una variable
    const message = document.querySelector('#comment-textarea').value;
    const commentTemplate = ` 
        
            <div class="contenedor-comentarios" id="comments-main-container">
                <div class="usuario">
                    <img class="img-principal" src="images/perfil1.jpg" alt="">
                </div>
                <div class="nombre-usuario">
                    <a href="#">carmen</a>
                </div>
                <div class="descripcion">
                    <p>${message}</p>
                </div>
            </div>
            <div class="corazon">
                <i class="far fa-heart"></i>
            </div>
        
        `;

    commentsMainContainer.innerHTML = commentsMainContainer.innerHTML + commentTemplate;

    //console.log(commentMainContainer.innerHTML);
});

