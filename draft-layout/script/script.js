const hideSection = document.querySelector('.container_hide');
const buttonNewPetition = document.querySelector('.button_new-petition');
const newAddressSection = document.querySelector('.container_new-address');
const newPetitionSection = document.querySelector('.container_petition')
const addAddressForm = document.querySelector('.form_address');
const picCategoryForm = document.querySelector('.form_category');
const picCategorySection = document.querySelector('.container_category');
const addPhotoSection = document.querySelector('.container_photo');
const addDescriptionSection = document.querySelector('.container_description');
const buttonAddPhoto = document.querySelector('.button_add-photo');
const buttonNoPhoto = document.querySelector('.button_no-photo');


const toggleSection = (sectionToClose, sectionToOpen) => {
  sectionToClose.classList.add('container_hide');
  sectionToOpen.classList.remove('container_hide');
}

buttonNewPetition.addEventListener('click', () => {
  toggleSection(newPetitionSection, newAddressSection);
});

addAddressForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  toggleSection(newAddressSection, picCategorySection);
});

picCategoryForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  toggleSection(picCategorySection, addPhotoSection);
});

//здесь должна открываться камера или форма захвата фото из галереи устройства, поэтому пока просто перезагрузка той же страницы
buttonAddPhoto.addEventListener('click', (evt) => {
  evt.preventDefault();
  toggleSection(addPhotoSection, addPhotoSection);
});

buttonNoPhoto.addEventListener('click', (evt) => {
  evt.preventDefault();
  toggleSection(addPhotoSection, addDescriptionSection);
});