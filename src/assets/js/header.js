export function header() {

  //================ Search field on the header ================//
  const searchIcon = document.querySelector('.search__icon');
  const searchField = document.querySelector('.search__field');
  const searchInput = document.querySelector('.search__field input[type=text]');
  //================ End of search field on the header ================//


  //================ Mobile navigation ================//
  const mobileMenuButton = document.querySelector('.menu__mobile--button');
  const mainMenu = document.querySelector('.menu__main');
  //================ End of Mobile navigation ================//

  const toggleButtons = [searchIcon, mobileMenuButton];
  const elements = [searchField, mainMenu];

  //================ Functions for work with events ================//

  function showElement(element) {
    // set the visibility to the element
    element.classList.remove('hidden');
    if (element == searchField) {
      return searchInput.focus();
    }
  }

  function hiddenElement(element) {
    // remove the visibility of the element
    element.classList.add('hidden');
    if (element == searchField) {
      searchInput.blur();
      searchInput.value = '';
    }
    return element;
  }

  // Toggle visibility of the element by clicking to toggle button
  function toggleVisibilityByButton(toggleButton, element) {
    toggleButton.onclick = () => {
      if (element.classList.contains('hidden')) {
        return showElement(element);
      } else {
        return hiddenElement(element);
      }
    }
  }

  // remove the visibility of the element by pressing 'Escape' on the keyboard
  function hiddenByEscapeKey(element) {
    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 27) {
        return hiddenElement(element);
      }
    })
  }

  // remove the visibility of the element
  // by clicking anywhere but not on element or toggle button
  function hiddenByClickAnywhere(toggleButton, element) {
    document.addEventListener('click', (event) => {
      if (!element.contains(event.target) && !toggleButton.contains(event.target)) {
        return hiddenElement(element);
      }
    })
  }
  //================ End of Functions for work with events ================//


  toggleButtons.forEach(button => {

    button.addEventListener('click', () => {

      elements.forEach(element => {

        if (button.id === element.id) {
          toggleVisibilityByButton(button, element);
          hiddenByClickAnywhere(button, element);
          hiddenByEscapeKey(element);
          return element;
        }
      })
    })
  })

}
