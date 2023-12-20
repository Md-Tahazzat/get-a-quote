"use client";
import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";
import { usePathname } from 'next/navigation'

import checkIfInView from "@/utility/checkIfInView";
import checkWindowInView from "@/utility/checkWindowInView";

/* function raf(lenis: Lenis) {
  return function (time: any) {
    lenis.raf(time / 1.5);
    requestAnimationFrame(raf(lenis));
  };
} */
const LenisSmooth = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname() 
 /*  if (typeof window !== "undefined") {
    // lenis
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", (e: any) => {
      // console.log(e);
    });
    const rafCallback = raf(lenis);
    requestAnimationFrame(rafCallback);
  } */
  useEffect(() => {
    const splitHeading = document?.querySelectorAll(".split-heading") || [];

    /* get the text and add class line words word start*/
    let splitWords = function (selector: string) {
      let elements = document.querySelectorAll(selector);

      elements.forEach(function (el) {
        // Type-cast el to HTMLElement
        let element = el as HTMLElement;

        if (element.textContent !== null) {
          element.dataset.splitText = element.textContent;
          element.innerHTML = element.textContent
            .split(/\s/)
            .map(function (word) {
              return word
                .split("-")
                .map(function (word) {
                  return '<dfn class="word">' + word + "</dfn>";
                })
                .join('<dfn class="hyphen">-</dfn>');
            })
            .join('<dfn class="whitespace"> </dfn>');
        }
      });
    };

    let splitLines = function (selector: string) {
      let elements = document.querySelectorAll(selector);

      splitWords(selector);

      elements.forEach(function (el) {
        let lines = getLines(el);

        let wrappedLines = "";
        lines.forEach(function (wordsArr) {
          wrappedLines += '<dfn class="line"><dfn class="words">';
          wordsArr.forEach(function (word) {
            wrappedLines += word.outerHTML;
          });
          wrappedLines += "</dfn></dfn>";
        });
        el.innerHTML = wrappedLines;
      });
    };

    let getLines = function (el: Element) {
      let lines = [];
      let line: HTMLElement[] = [];
      let words = el.querySelectorAll("dfn");
      let lastTop;
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.offsetTop != lastTop) {
          // Don't start with whitespace
          if (!word.classList.contains("whitespace")) {
            lastTop = word.offsetTop;

            line = [];
            lines.push(line);
          }
        }
        line.push(word);
      }
      return lines;
    };

    splitLines(".split-heading");
    /* get the text and add class line words word end*/

    //  add style on words
    splitHeading.forEach((element) => {
      const words = element.querySelectorAll(".words");
      words.forEach((wrd, i) => {
        const word = wrd as HTMLElement;
        word.style.transition =
          "transform 1.2s cubic-bezier(0.19, 1, 0.22, 1) 0s";
        word.style.transitionDelay = `${0 + i * 0.2}s`;
      });
    });

    // on window event then check if in view or not
    window.addEventListener("scroll", checkIfInView);
    window.addEventListener("orientationchange", checkIfInView);
    window.addEventListener("resize", checkIfInView);
    window.addEventListener("load", checkIfInView);

    window.addEventListener("scroll", checkWindowInView);
    window.addEventListener("resize", checkWindowInView);
    window.addEventListener("load", checkWindowInView);

    return () => {
      window.removeEventListener("scroll", checkIfInView);
      window.removeEventListener("orientationchange", checkIfInView);
      window.removeEventListener("resize", checkIfInView);
      window.removeEventListener("scroll", checkWindowInView);
      window.removeEventListener("resize", checkWindowInView);
      window.removeEventListener("load", checkWindowInView);
    }; // cleanup
  }, []);

  useEffect(() => {
    checkIfInView();
    checkWindowInView();
  }, [pathName]);
  return <>{children}</>;
};

export default LenisSmooth;
