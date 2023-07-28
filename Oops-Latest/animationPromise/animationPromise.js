function move(element) {
  element.classList.toggle("active");
}

const animationPromise = (element,animationFunc) => {
  return new Promise((resolve, reject) => {
    animationFunc(element);
    const func = () => {
      resolve();
      element.removeEventListener("animationend", func);
    };

    element.addEventListener("animationend", func);
  });
};


