window.addEventListener('DOMContentLoaded', () => {
    const collapseButton = document.getElementById('collapseButton');
    const collapseContainer = document.getElementById('linksContainer');

    collapseButton.addEventListener('click', () => {
        collapseContainer.classList.toggle('dropdown-animation');
    })
})