/* applyAnimation.addEventListener("click", () => {
  animationPromise(document.querySelector("div.animation"), move)
    .then(() => {
      console.log("red ended");
      return animationPromise(document.querySelector("div.animation2"), move);
    })
    .then(() => {
      console.log("green ended");
      return animationPromise(document.querySelector("div.animation3"), move);
    })
    .then(() => {
      console.log("all ended");
    });
});
 */

const getPromiseWrapper = (animationFunc)=>{
    return (element) => animationPromise(element, animationFunc);
}

applyAnimation.addEventListener("click", async () => {
    const wrapper = getPromiseWrapper(move);
    const animation1 = wrapper(document.querySelector("div.animation"))
    const animation2 = wrapper(document.querySelector("div.animation2"))
    const animation3 = wrapper(document.querySelector("div.animation3"))

    await Promise.all([animation1,animation2,animation3])
    /* await animationPromise(document.querySelector("div.animation"), move)
    await animationPromise(document.querySelector("div.animation2"), move)
    await animationPromise(document.querySelector("div.animation3"), move); */
    console.log("ended")
  });