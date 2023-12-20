import { gsap } from "gsap";
import SplitType from "split-type";

const checkIfInView = () => {
      const windowHeight = window.innerHeight;
      const insetAmount = windowHeight / 10;
      const windowTopPosition = window.scrollY;
      const windowBottomPosition = windowTopPosition + windowHeight - insetAmount;
    // console.log('checkIfInView')
      const animationElements = document.querySelectorAll('.split-heading');
    
      animationElements.forEach((element) => {
        const elementHeight = element.clientHeight;
        const elementTopPosition = element.getBoundingClientRect().top + window.scrollY;
        const elementBottomPosition = elementTopPosition + elementHeight;
    
        if (elementTopPosition <= windowBottomPosition) {
          // console.log(element);
          element.classList.add('is-visible');
        }else{
          element.classList.remove('is-visible');
        }
      });
    };

    export default checkIfInView;