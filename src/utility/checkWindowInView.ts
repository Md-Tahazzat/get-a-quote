import React from 'react';

const checkWindowInView = () => {
      const windowHeight = window.innerHeight;
  const windowTopPosition = window.scrollY;
  const windowBottomPosition = windowTopPosition + windowHeight;
  const animationElements = document.querySelectorAll('.animate-from-bottom');
  animationElements.forEach((element) => {
      const elementHeight = element.clientHeight;
      const elementTopPosition = element.getBoundingClientRect().top + window.scrollY;
      const elementBottomPosition = elementTopPosition + elementHeight;
  
      if (elementTopPosition <= windowBottomPosition) {
        element.classList.add('in-view');
      } else {
        element.classList.remove('in-view');
      }
    });
};

export default checkWindowInView;