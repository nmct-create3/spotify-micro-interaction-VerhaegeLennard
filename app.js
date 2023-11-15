function toggleIcons() {
    console.log('toggleIcons() called');
    // Toggle visibility of icons

    button.classList.toggle('added');
}

const button = document.querySelector('.js-toggle');

button.addEventListener('click', toggleIcons);