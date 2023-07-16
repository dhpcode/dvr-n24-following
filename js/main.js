const elButtonNotification = document.querySelector('#notification-on');
const elModalOpen = document.querySelector('#modal-notification');
elButtonNotification.addEventListener('click', function() {
    elModalOpen.classList.add('modal-open')
});

const elModalClose = document.querySelector('.modal-close');

elModalClose.addEventListener('click', function() {
    elModalOpen.classList.remove('modal-open')
});