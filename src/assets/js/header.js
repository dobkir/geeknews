'use strict';

//================ Search field on the header ================//
const searchIcon = document.querySelector('.search__icon');
const searchField = document.querySelector('.search__field');
const searchInput = document.querySelector('.search__field input[type=text]');
//================ End of search field on the header ================//

//================ Mobile navigation ================//
const mobileMenuButton = document.querySelector('.menu__mobile--button');
const barsIcon = document.querySelector('.bars');
const crossIcon = document.querySelector('.cross');
/**
 * Create a mobile clone of the main menu
 */
const mainMenu = document.querySelector('.menu__main');
const mobileMenu = mainMenu.cloneNode(true);
mobileMenu.id = 'menu__mobile';  // For identification by mobile menu button
/**
 * Append to the header as a child the clone of the main menu
 * to using it as a menu on mobile devices
 */
document.querySelector('.header').appendChild(mobileMenu);
/**
 * Hidden the mobile menu before some events
 */
mobileMenu.classList.add('hidden');

/**
 * Append the listener for media query 'max-width: 991px'. 
 * When window width is less than 991px the main menu 
 * should be hidden and the mobile menu should be shown.
 * If window width is more than 991px the main menu
 * should be shown and the mobile menu should be hidden
 */
const mediaQueryToggleMenu = window.matchMedia('(max-width: 991px)')

function handleTabletChange(e) {
  if (e.matches) {
    mainMenu.classList.add('hidden');
  } else {
    mainMenu.classList.remove('hidden');
    mobileMenu.classList.add('hidden');
  }
}
mediaQueryToggleMenu.addListener(handleTabletChange)
handleTabletChange(mediaQueryToggleMenu)

//================ End of Mobile navigation ================//

const toggleButtons = [searchIcon, mobileMenuButton];
const elements = [searchField, mobileMenu];

//================ Functions for work with events ================//

const showElement = (element) => {

  /**
   * set the visibility to the element
   */
  element.classList.remove('hidden');

  /**
   * if an element has an input field, focus on it
   */
  if (element == searchField) {
    return searchInput.focus();
  }
  return element;
}

const hiddenElement = (element) => {

  /**
   * remove the visibility of the element
   */
  element.classList.add('hidden');

  /**
   *  if an element has an input field, remove focus from it
   * and clear its value
   */
  if (element == searchField) {
    searchInput.blur();
    searchInput.value = '';
  }
  return element;
}

/**
 * If the clicked button is mobileMenuButton, show barsIcon,
 * and hidden crossIcon and hides the mobile menu. 
 */
const showBarsIcon = (toggleButton) => {
  if (toggleButton === mobileMenuButton) {
    /**
     * Hide the clone of the main menu.
     */
    mobileMenu.classList.add('hidden');

    barsIcon.classList.remove('hidden');
    crossIcon.classList.add('hidden');
  }
  return barsIcon;
}

/**
 * If the clicked button is mobileMenuButton, show crossIcon,
 * and hidden barsIcon and shows the mobile menu.
 */
const showCrosssIcon = (toggleButton) => {
  if (toggleButton === mobileMenuButton) {
    mobileMenu.classList.remove('hidden');

    barsIcon.classList.add('hidden');
    crossIcon.classList.remove('hidden');
  }
  return crossIcon;
}

/**
 * Toggle visibility of the element by clicking to toggle button
 */
const toggleVisibilityByButton = (toggleButton, element) => {
  toggleButton.addEventListener('click', () => {
    if (element.classList.contains('hidden')) {
      showCrosssIcon(toggleButton);
      showElement(element);
    } else {
      showBarsIcon(toggleButton);
      hiddenElement(element);
    }
    return element;
  })
}

/**
 * Remove the visibility of the element by pressing 'Escape' on the keyboard
 */
const hiddenByEscapeKey = (element) => {
  document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
      showBarsIcon(mobileMenuButton);
      hiddenElement(element);
    }
    return element;
  })
}

/**
 * Remove the visibility of the element by clicking
 * anywhere but only not on element or toggle button
 */
const hiddenByClickAnywhere = (toggleButton, element) => {
  document.addEventListener('click', (event) => {
    if (mediaQueryToggleMenu &&
      !element.contains(event.target) &&
      !toggleButton.contains(event.target)) {
      showBarsIcon(toggleButton);
      hiddenElement(element);
    }
    return element;
  })
}

//================ End of Functions for work with events ================//

/**
 * Heandel function for toggle elements 
 * on Header page
 */
export function header() {

  toggleButtons.forEach(button => {

    elements.forEach(element => {

      if (button.id === element.id) {
        toggleVisibilityByButton(button, element);
        hiddenByClickAnywhere(button, element);
        hiddenByEscapeKey(element);
        return true;
      }
    })
  })
}
