const imgContainer = document.querySelector(".index-info-imgContainer");
const img = document.querySelector(".index-info-img");
const infoTop = document.querySelector("#info").offsetTop;
const infoBottom = infoTop + document.querySelector("#info").offsetHeight;
const infoSecondTop = document.querySelector(".index-info-02").offsetTop;
const infoThirdTop = document.querySelector(".index-info-03").offsetTop;
const infoFirstHeight = document.querySelector(".index-info-01").offsetHeight;
const infoSecondHeight = document.querySelector(".index-info-02").offsetHeight;
const infoThirdHeight = document.querySelector(".index-info-03").offsetHeight;
const step2 = document.querySelector(".index-steps-2");
const step2Line = document.querySelector(".index-line-steps-2");
const step3 = document.querySelector(".index-steps-3");
const step3Line = document.querySelector(".index-line-steps-3");
const procressbar = document.querySelector(".procressbar");
const procressbarIcon = document.querySelector(".procressbar-icon-img");
const headerHeight = document.querySelector("header").offsetHeight;
const infoHeight = document.querySelector("#info").offsetHeight;
const themeTop = document.querySelector("#theme").offsetTop;
const themeHeight = document.querySelector("#theme").offsetHeight;
const toolTop = document.querySelector("#tool").offsetTop;
const toolHeight = document.querySelector("#tool").offsetHeight;

addEventListener("scroll", (e) => {
  // procressbar status
  if (window.scrollY > headerHeight * 0.9) {
    procressbar.style.opacity = 1;
  } else {
    procressbar.style.opacity = 0;
  }

  if (window.scrollY < headerHeight * 0.8) {
    procressbarIcon.className = "procressbar-icon-img position-absolute top-0";
  } else if (
    window.scrollY > headerHeight * 0.8 &&
    window.scrollY <= infoTop + (infoHeight * 0.8)
  ) {
    procressbarIcon.className = "procressbar-icon-img position-absolute top-20";
  } else if (
    window.scrollY > infoTop + infoHeight * 0.8 &&
    window.scrollY <= themeTop + (themeHeight * 0.8)
  ) {
    procressbarIcon.className = "procressbar-icon-img position-absolute top-40";
  } else if (
    window.scrollY > themeTop + themeHeight * 0.8 &&
    window.scrollY <= toolTop + (toolHeight * 0.8)
  ) {
    procressbarIcon.className = "procressbar-icon-img position-absolute top-60";
  } else if (
    window.scrollY > toolTop + (toolHeight * 0.8)) {
    procressbarIcon.className = "procressbar-icon-img position-absolute top-80";
  }

  if ( window.scrollY <= infoTop + (infoHeight * 0.7)) {
    procressbar.classList.add("light");
    procressbar.classList.remove("black");
    procressbar.classList.remove("dark");
  } else if (
    window.scrollY > infoTop + infoHeight * 0.7 &&
    window.scrollY <= toolTop + (toolHeight * 0.7)
  ) {
    procressbar.classList.add("dark");
    procressbar.classList.remove("light");
    procressbar.classList.remove("black");
  } else if (
    window.scrollY > toolTop + (toolHeight * 0.7)) {
    procressbar.classList.add("black");
    procressbar.classList.remove("light");
    procressbar.classList.remove("dark");

  }

  // info img fixed
  if (window.scrollY <= infoTop) {
    imgContainer.className =
      "info-imgContainer position-absolute top-0 position-y-0";
  } else if (
    window.scrollY >= infoTop &&
    window.scrollY <= infoBottom - imgContainer.offsetHeight
  ) {
    imgContainer.className = "info-imgContainer fixed-top top-0 position-y-0";
  } else {
    imgContainer.className =
      "info-imgContainer position-absolute bottom-0 position-y-0";
  }

  // info img change
  if (
    window.scrollY >= infoTop &&
    window.scrollY <= infoTop + infoFirstHeight * 0.9
  ) {
    img.src = "../assets/images/index/index-info-01.svg";
    img.alt = "羅列五大主題";
    step2.classList.remove("active");
    step2Line.classList.remove("active");
    step3.classList.remove("active");
    step3Line.classList.remove("active");
  } else if (
    window.scrollY > infoTop + infoFirstHeight * 0.9 &&
    window.scrollY <= infoTop + infoSecondTop + infoSecondHeight * 0.9
  ) {
    img.src = "../assets/images/index/index-info-02.svg";
    img.alt = "如影隨形伴隨你";
    step2.classList.add("active");
    step2Line.classList.add("active");
    step3.classList.remove("active");
    step3Line.classList.remove("active");
  } else if (
    window.scrollY >
    infoTop + infoSecondTop + infoSecondHeight * 0.9
  ) {
    img.src = "../assets/images/index/index-info-03.svg";
    img.alt = "釋放腦中記憶體";
    step3.classList.add("active");
    step3Line.classList.add("active");
  }
});
