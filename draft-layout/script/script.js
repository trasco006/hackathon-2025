const buttonNewPetition = document.querySelector('.button_new-petition');
const newAddressSection = document.querySelector('.container_new-address');
const buttonNewAddress = document.querySelector('.button_address');
const newPetitionSection = document.querySelector('.container_petition')
const addAddressForm = document.querySelector('.form_address');
const picCategoryForm = document.querySelector('.form_category');
const picCategorySection = document.querySelector('.container_category');
const addPhotoSection = document.querySelector('.container_photo');
const addDescriptionSection = document.querySelector('.container_description');
const buttonAddPhoto = document.querySelector('.button_add-photo');
const buttonNoPhoto = document.querySelector('.button_no-photo');
const buttonAddDescription = document.querySelector('.button_add-description');
const addStringForm = document.querySelector('.form__add-string');
const submitPetitionForm = document.querySelector('.form__submit-petition');
const submitPetitionSection = document.querySelector('.container_submit-petition');
const confirmationSection = document.querySelector('.container_confirmation');
const buttonAddPetitionSmall = document.querySelector('.button_new-petition-s');

const toggleSection = (sectionToClose, sectionToOpen) => {
  sectionToClose.classList.add('container_hide');
  sectionToOpen.classList.remove('container_hide');
}

buttonNewPetition.addEventListener('click', () => {
  toggleSection(newPetitionSection, newAddressSection);
});

buttonNewAddress.addEventListener('click', (evt) => {
  evt.preventDefault();
  toggleSection(newAddressSection, picCategorySection);
});

picCategoryForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  toggleSection(picCategorySection, addPhotoSection);
});

//здесь должна открываться камера или форма захвата фото из галереи устройства, поэтому пока показываем ту же секцию
buttonAddPhoto.addEventListener('click', (evt) => {
  evt.preventDefault();
  toggleSection(addPhotoSection, addPhotoSection);
});

buttonNoPhoto.addEventListener('click', (evt) => {
  evt.preventDefault();
  toggleSection(addPhotoSection, addDescriptionSection);
});

buttonAddDescription.addEventListener('click', (evt) => {
  evt.preventDefault();
  addStringForm.classList.remove('container_hide');
  buttonAddDescription.classList.add('container_hide');
});

addStringForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  toggleSection(addDescriptionSection, submitPetitionSection);
});

submitPetitionForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  toggleSection(submitPetitionSection, confirmationSection);
});

buttonAddPetitionSmall.addEventListener('click', (evt) => {
  evt.preventDefault();
  toggleSection(confirmationSection, newPetitionSection);
});