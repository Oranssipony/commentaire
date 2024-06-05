document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const firstNameInput = form.querySelector('input[name="first-name"]');
    const lastNameInput = form.querySelector('input[name="last-name"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const commentList = document.querySelector('#comment-list');
    const errorMessage = document.querySelector('#error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Empêche le rechargement de la page

        // Récupère les valeurs des champs
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const message = messageInput.value.trim();

        // Vérifie que tous les champs sont remplis
        if (firstName && lastName && message) {
            // Cache le message d'erreur si visible
            if (errorMessage.style.display === 'block') {
                errorMessage.style.display = 'none';
            }

            // Crée un nouvel élément de commentaire
            const newComment = document.createElement('div');
            newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');
            newComment.innerHTML = `
                <div class="flex-1 py-10 border-t border-gray-200">
                    <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
                    <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                        <p>${message}</p>
                    </div>
                </div>
            `;

            // Ajoute le nouveau commentaire au début de la liste des commentaires
            commentList.appendChild(newComment, commentList.firstChild);

            // Réinitialise les champs du formulaire
            firstNameInput.value = '';
            lastNameInput.value = '';
            messageInput.value = '';
        } else {
            // Affiche un message d'erreur
            errorMessage.style.display = 'block';
        }
    });
});