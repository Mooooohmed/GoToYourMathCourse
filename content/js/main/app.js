const stages = document.querySelector(".stages");
const stagesBtn = document.querySelector(".stages__btn--defualt");
const stagesMenu = document.querySelector(".stages__menu");
const stagesMenuButtons = document.querySelectorAll(".stages__menu button"); // all buttons in the list (gives array)
// console.log(stagesMenuButtons);
// const btnStagesAttr = [];
// for (let ele of stagesMenuButtons) {
//   const attr = ele.getAttribute("data-stage");
//   btnStagesAttr.push(attr);
// }
//   console.log(btnStagesAttr);
const btnStagesAttr = [];
stagesMenuButtons.forEach(function (btn) {
  // console.log(btn);
  btnStagesAttr.push(btn.getAttribute("data-stage"));
  // console.log(btnStagesAttr); // every element in array (function معرفة داخل ال )
});
// console.log(btnStagesAttr); // all element in single array (function معرفة خارج ال )
const btnStagesNames = [];
stagesMenuButtons.forEach(function (btn) {
  // console.log(btn);
  btnStagesNames.push(btn.textContent.trim()); // .trim() لازالة المسافات
});
// console.log(BtnStagesNames);
// .................................primary selectors..................................
const primGrades = document.querySelector(".prim-grades");
const primSelectorBtn = document.querySelector(".prim-grades__btn");
const primGradesMenu = document.querySelector(".prim-grades__menu");
// console.log(primGradesButtons);
const primGradesButtons = document.querySelectorAll(
  ".prim-grades__menu button"
);
const btnPrimGradeAttr = [];
primGradesButtons.forEach(function (btn) {
  btnPrimGradeAttr.push(btn.getAttribute("data-grade"));
});
const btnPrimGradesNames = [];
primGradesButtons.forEach(function (btn) {
  btnPrimGradesNames.push(btn.textContent.trim());
});
// .............................prep selectors.......................................
const prepGrades = document.querySelector(".prep-grades ");
const prepSelectorBtn = document.querySelector(".prep-grades__btn");
const prepGradesMenu = document.querySelector(".prep-grades__menu");
const prepGradesButtons = document.querySelectorAll(
  ".prep-grades__menu button"
);
const btnPrepGradeAttr = [];
prepGradesButtons.forEach(function (btn) {
  btnPrepGradeAttr.push(btn.getAttribute("data-grade"));
});
const btnPrepGradesNames = [];
prepGradesButtons.forEach(function (btn) {
  btnPrepGradesNames.push(btn.textContent.trim());
});
// ...............................secondary selectors....................................
const secGrades = document.querySelector(".sec-grades");
const secSelectorBtn = document.querySelector(".sec-grades__btn");
const secGradesMenu = document.querySelector(".sec-grades__menu");
const secGradesButtons = document.querySelectorAll(".sec-grades__menu button");
const btnSecGradeAttr = [];
secGradesButtons.forEach(function (btn) {
  btnSecGradeAttr.push(btn.getAttribute("data-grade"));
});
// console.log(btnSecGradeAttr);
const btnSecGradesNames = [];
secGradesButtons.forEach(function (btn) {
  btnSecGradesNames.push(btn.textContent.trim());
});
// ..............................term selectors.....................................
const termChoose = document.querySelector(".select-term");
const termSelectorBtn = document.querySelector(".select__btn");
const termMenu = document.querySelector(".select-term__menu");
const termButtons = document.querySelectorAll(".select-term__menu button");
const btnTermAttr = [];
termButtons.forEach(function (btn) {
  const attr = btn.getAttribute("data-term");
  btnTermAttr.push(attr);
});
// console.log(btnTermAttr);
const btnTermNames = [];
termButtons.forEach(function (btn) {
  const name = btn.textContent.trim();
  btnTermNames.push(name);
});
// console.log(btnTermNames);
// ..............................Got to your course selectors.....................................
const GoYourCourseButtons = document.querySelectorAll(".Go-course button"); // all buttons in the list
// console.log(stagesMenuButtons);
const GoYourCourseAttr = [];
GoYourCourseButtons.forEach(function (btn) {
  // console.log(btn);
  GoYourCourseAttr.push(btn.getAttribute("data-course")); // all attributes in the buttons in single array
});
// console.log(GoYourCourseAttr);
// ------------------------------------------------------------------------
const angleIconMenu = document.querySelector(".stages #angle-icon");
const angleIconPrim = document.querySelector(".prim-grades  #angle-icon");
const angleIconPrep = document.querySelector(".prep-grades #angle-icon");
const angleIconSec = document.querySelector(".sec-grades  #angle-icon");
const angleIconTerm = document.querySelector(".select-term #angle-icon");
// ------------------------------------------------------------------------
let primGradesTarget; // انظر التفسير السطر رقم 163
let prepGradesTarget;
let secGradesTarget;
let courseTarget;
// ---------------------- functions --------------------------------------------------
function clear() {
  GoYourCourseButtons.forEach(function (ele) {
    ele.classList.remove("active");
  });
}
// ------------------------------------------------------------------------
// // لو داس في اي مكان فاضي يقفل القايمة
// function defualt(menu) {
//   document.addEventListener("click", function (event) {
//     let isClickInsideMenu = menu.contains(event.target); // retrun true or false
//     console.log(isClickInsideMenu);
//     // If the clicked element is not inside the menu (false), close the menu
//     if (!isClickInsideMenu) {
//       menu.classList.remove("active");
//     }
//   });
// }
//  مش هتنفع  للاسف لان المنيو اللي هتقفل مختلفة عن المنيو المفتوحة
// ------------------------------------------------------------------------
// لتغير شكل السهم الصغير مع الفتح و القفل
function openClose(icon) {
  if (icon.classList.contains("fa-angle-left")) {
    icon.classList.replace("fa-angle-left", "fa-angle-down");
  } else if (icon.classList.contains("fa-angle-down")) {
    icon.classList.replace("fa-angle-down", "fa-angle-left");
  }
}
// ------------------------------------------------------------------------
// stagesBtn.addEventListener("click", function () {
//   console.log("Hellow world");
// }); // شغال click للتأكد ان ال
// ------------------------------------stage select------------------------------------
stagesBtn.addEventListener("click", function () {
  stagesMenu.classList.toggle("active");
  stages.classList.remove("fade");
  primGrades.classList.remove("active", "fade");
  prepGrades.classList.remove("active", "fade");
  secGrades.classList.remove("active", "fade");
  primGradesMenu.classList.remove("active");
  prepGradesMenu.classList.remove("active");
  secGradesMenu.classList.remove("active");
  termChoose.classList.remove("active");
  clear();
  stagesBtn.querySelector("span").textContent = `Please select your stage`;
  primSelectorBtn.querySelector(
    "span"
  ).textContent = `Please choose your primary grad`;
  prepSelectorBtn.querySelector(
    "span"
  ).textContent = `Please choose your prep grad`;
  secSelectorBtn.querySelector(
    "span"
  ).textContent = `Please choose your secondary grad`;
  termChoose.querySelector("span").textContent = `Please select the term`;
  // لو داس في اي مكان فاضي يقفل القايمة
  document.addEventListener("click", function (event) {
    let isClickInsideMenu = stagesBtn.contains(event.target); // retrun true or false
    // console.log(isClickInsideMenu);
    // If the clicked element is not inside the menu (false), close the menu
    if (!isClickInsideMenu) {
      stagesMenu.classList.remove("active");
    }
    // اتغير شكل السهم الصغير مع الفتح و القفل
  });
  openClose(angleIconMenu);
});
// ------------------------------------stage menu------------------------------------
stagesMenu.addEventListener("click", function (ele) {
  if (ele.target.getAttribute("data-stage") === btnStagesAttr[0]) {
    stagesBtn.querySelector(
      "span"
    ).textContent = `Welcome to ${btnStagesNames[0]}`;
    stagesMenu.classList.remove("active");
    stages.classList.add("fade");
    primGrades.classList.add("active");
    prepGradesTarget = undefined;
    secGradesTarget = undefined;
  } else if (ele.target.getAttribute("data-stage") === btnStagesAttr[1]) {
    stagesBtn.querySelector(
      "span"
    ).textContent = `Welcome to ${btnStagesNames[1]}`;
    stagesMenu.classList.remove("active");
    stages.classList.add("fade");
    prepGrades.classList.add("active");
    primGradesTarget = undefined;
    secGradesTarget = undefined;
  } else if (ele.target.getAttribute("data-stage") === btnStagesAttr[2]) {
    stagesBtn.querySelector(
      "span"
    ).textContent = `Welcome to ${btnStagesNames[2]}`;
    secGrades.classList.add("active");
    stages.classList.add("fade");
    stagesMenu.classList.remove("active");
    primGradesTarget = undefined;
    prepGradesTarget = undefined;
  }
  angleIconMenu.className =
    "stages__text d-block fa-solid fa-angle-left fa-angle-down--size";
});
// ----------------------------------(pirm menu)------------------------------------------
primSelectorBtn.addEventListener("click", function () {
  primGradesMenu.classList.toggle("active");
  primGrades.classList.remove("fade");
  termChoose.classList.remove("active");
  clear();
  primSelectorBtn.querySelector(
    "span"
  ).textContent = `Please choose your primary grad`;
  termChoose.querySelector("span").textContent = `Please select the term`;
  // لو داس في اي مكان فاضي يقفل القايمة
  document.addEventListener("click", function (event) {
    let isClickInsideMenu = primSelectorBtn.contains(event.target); // retrun true or false
    // console.log(isClickInsideMenu);
    // If the clicked element is not inside the menu (false), close the menu
    if (!isClickInsideMenu) {
      primGradesMenu.classList.remove("active");
    }
  });
  openClose(angleIconPrim);
});
// ----------------------------------(pirm grade)------------------------------------------
primGradesMenu.addEventListener("click", function (ele) {
  // let primGradesTarget = ele.target.getAttribute("data-grade"); هذا خطا لانه مش هيحتفظ بالقيمة بعدين
  primGradesTarget = ele.target.getAttribute("data-grade"); // في السطر رقم 151 addEventListener لذلك تم تعريفه قبل ال
  // console.log(primGradesTarget);
  // console.log(ele.target.getAttribute("data-grade") === BtnGradeAttr[0]);
  if (primGradesTarget === btnPrimGradeAttr[0]) {
    primGrades.querySelector(
      "span"
    ).textContent = `Your are in ${btnPrimGradesNames[0]}`;
    primGradesMenu.classList.remove("active");
    primGrades.classList.add("fade");
    termChoose.classList.add("active");
    primGradesTarget = btnPrimGradeAttr[0];
  } else if (primGradesTarget === btnPrimGradeAttr[1]) {
    primGrades.querySelector(
      "span"
    ).textContent = `Your are in ${btnPrimGradesNames[1]}`;
    primGradesMenu.classList.remove("active");
    primGrades.classList.add("fade");
    termChoose.classList.add("active");
    primGradesTarget = btnPrimGradeAttr[1];
  } else if (primGradesTarget === btnPrimGradeAttr[2]) {
    primGrades.querySelector(
      "span"
    ).textContent = `Your are in ${btnPrimGradesNames[2]}`;
    primGradesMenu.classList.remove("active");
    primGrades.classList.add("fade");
    termChoose.classList.add("active");
    primGradesTarget = btnPrimGradeAttr[2];
  } else if (primGradesTarget === btnPrimGradeAttr[3]) {
    primGrades.querySelector(
      "span"
    ).textContent = `Your are in ${btnPrimGradesNames[3]}`;
    primGradesMenu.classList.remove("active");
    primGrades.classList.add("fade");
    termChoose.classList.add("active");
    primGradesTarget = btnPrimGradeAttr[3];
  } else if (primGradesTarget === btnPrimGradeAttr[4]) {
    primGrades.querySelector(
      "span"
    ).textContent = `Your are in ${btnPrimGradesNames[4]}`;
    primGradesMenu.classList.remove("active");
    primGrades.classList.add("fade");
    termChoose.classList.add("active");
    primGradesTarget = btnPrimGradeAttr[4];
  } else if (primGradesTarget === btnPrimGradeAttr[5]) {
    primGrades.querySelector(
      "span"
    ).textContent = `Your are in ${btnPrimGradesNames[5]}`;
    primGradesMenu.classList.remove("active");
    primGrades.classList.add("fade");
    termChoose.classList.add("active");
    primGradesTarget = btnPrimGradeAttr[5];
  }
  angleIconPrim.className =
    "stages__text d-block fa-solid fa-angle-left fa-angle-down--size";
});
// ----------------------------------(pep menu)------------------------------------------
prepSelectorBtn.addEventListener("click", function () {
  prepGradesMenu.classList.toggle("active");
  prepGrades.classList.remove("fade");
  termChoose.classList.remove("active");
  clear();
  prepSelectorBtn.querySelector(
    "span"
  ).textContent = `Please choose your prep grade`;
  termChoose.querySelector("span").textContent = `Please select the term`;
  document.addEventListener("click", function (event) {
    let isClickInsideMenu = prepSelectorBtn.contains(event.target); // retrun true or false
    // console.log(isClickInsideMenu);
    // If the clicked element is not inside the menu (false), close the menu
    if (!isClickInsideMenu) {
      prepGradesMenu.classList.remove("active");
    }
  });
  openClose(angleIconPrep);
});
// ----------------------------------(pep grade)------------------------------------------
prepGradesMenu.addEventListener("click", function (ele) {
  prepGradesTarget = ele.target.getAttribute("data-grade");
  if (prepGradesTarget === btnPrepGradeAttr[0]) {
    prepGrades.querySelector(
      "span"
    ).textContent = `Your are in ${btnPrepGradesNames[0]}`;
    prepGradesMenu.classList.remove("active");
    prepGrades.classList.add("fade");
    termChoose.classList.add("active");
    prepGradesTarget = btnPrepGradeAttr[0];
  } else if (prepGradesTarget === btnPrepGradeAttr[1]) {
    prepGrades.querySelector(
      "span"
    ).textContent = `Your are in ${btnPrepGradesNames[1]}`;
    prepGradesMenu.classList.remove("active");
    prepGrades.classList.add("fade");
    termChoose.classList.add("active");
    prepGradesTarget = btnPrepGradeAttr[1];
  } else if (prepGradesTarget === btnPrepGradeAttr[2]) {
    prepGrades.querySelector(
      "span"
    ).textContent = `Your are in ${btnPrepGradesNames[2]}`;
    prepGradesMenu.classList.remove("active");
    prepGrades.classList.add("fade");
    termChoose.classList.add("active");
    prepGradesTarget = btnPrepGradeAttr[2];
  }
  angleIconPrep.className =
    "stages__text d-block fa-solid fa-angle-left fa-angle-down--size";
});
// ----------------------------------(seconadry menu)------------------------------------------
secSelectorBtn.addEventListener("click", function () {
  secGradesMenu.classList.toggle("active");
  secGrades.classList.remove("fade");
  termChoose.classList.remove("active");
  clear();
  secSelectorBtn.querySelector(
    "span"
  ).textContent = `Please choose your secondary grade`;
  termChoose.querySelector("span").textContent = `Please select the term`;
  document.addEventListener("click", function (event) {
    let isClickInsideMenu = secSelectorBtn.contains(event.target); // retrun true or false
    console.log(isClickInsideMenu);
    // If the clicked element is not inside the menu (false), close the menu
    if (!isClickInsideMenu) {
      secGradesMenu.classList.remove("active");
    }
  });
  openClose(angleIconSec);
});
// ----------------------------------(secondary grade)------------------------------------------
secGradesMenu.addEventListener("click", function (ele) {
  secGradesTarget = ele.target.getAttribute("data-grade");
  if (secGradesTarget === btnSecGradeAttr[0]) {
    secGrades.querySelector(
      "span"
    ).textContent = `Your are in ${btnSecGradesNames[0]}`;
    secGradesMenu.classList.remove("active");
    secGrades.classList.add("fade");
    termChoose.classList.add("active");
    secGradesTarget = btnSecGradeAttr[0];
  } else if (secGradesTarget === btnSecGradeAttr[1]) {
    secGrades.querySelector(
      "span"
    ).textContent = `Your are in ${btnSecGradesNames[1]}`;
    secGradesMenu.classList.remove("active");
    secGrades.classList.add("fade");
    termChoose.classList.add("active");
    secGradesTarget = btnSecGradeAttr[1];
  } else if (secGradesTarget === btnSecGradeAttr[2]) {
    secGrades.querySelector(
      "span"
    ).textContent = `Your are in ${btnSecGradesNames[2]}`;
    secGradesMenu.classList.remove("active");
    secGrades.classList.add("fade");
    secGradesTarget = btnSecGradeAttr[2];
    // termChoose.classList.add("active"); مفيش ترم اول و تاني في تالة ثانوي
    const secThreeBtn = document.querySelector('[data-course="sec three"]');
    console.log(secThreeBtn);
    secThreeBtn.classList.add("active");
    secThreeBtn.setAttribute("data-bs-toggle", "modal");
    secThreeBtn.setAttribute("data-bs-target", "#staticBackdrop");
  }
  angleIconSec.className =
    "stages__text d-block fa-solid fa-angle-left fa-angle-down--size";
});
// ----------------------------------(term select)------------------------------------------
termSelectorBtn.addEventListener("click", function () {
  termMenu.classList.toggle("active");
  termChoose.classList.remove("fade");
  termChoose.querySelector("span").textContent = `Please select the term`;
  clear();
  // secGrades.classList.remove("fade");
  // secSelectorBtn.querySelector("span").textContent = `Please select your grade`;
  openClose(angleIconTerm);
});
// ----------------------------------(term menu)------------------------------------------
termMenu.addEventListener("click", function (ele) {
  // console.log(ele.target.getAttribute("data-term") === btnTermAttr[0]);
  courseTarget = ele.target.getAttribute("data-term");
  if (courseTarget === btnTermAttr[0]) {
    termChoose.querySelector("span").textContent = `${btnTermNames[0]}`;
    termMenu.classList.remove("active");
    termChoose.classList.add("fade");
  } else if (courseTarget === btnTermAttr[1]) {
    termChoose.querySelector("span").textContent = `${btnTermNames[1]}`;
    termMenu.classList.remove("active");
    termChoose.classList.add("fade");
  }
  // console.log(primGradesTarget + " " + courseTarget);
  // console.log(prepGradesTarget + " " + courseTarget);
  // console.log(secGradesTarget + " " + courseTarget);
  let FinalBtnTarget;
  for (let ele of GoYourCourseAttr) {
    // console.log(ele);
    if (ele === primGradesTarget + " " + courseTarget) {
      FinalBtnTarget = ele;
      // console.log(FinalBtnTarget);
    } else if (ele === prepGradesTarget + " " + courseTarget) {
      FinalBtnTarget = ele;
      // console.log(FinalBtnTarget);
    } else if (ele === secGradesTarget + " " + courseTarget) {
      FinalBtnTarget = ele;
      // console.log(FinalBtnTarget);
    }
  }
  // console.log(FinalBtnTarget);
  // console.log(document.querySelector('[data-course="primary one first term"]')); // value direct
  // console.log(document.querySelector('[data-course="' + FinalBtnTarget + '"]')); // value form variable
  const FinalBtnCourse = document.querySelector(
    '[data-course="' + FinalBtnTarget + '"]'
  );
  FinalBtnCourse.classList.add("active");
  // console.log(FinalBtnCourse.getAttribute("data-course"));
  if (
    FinalBtnCourse.getAttribute("data-course") !== "prep three first term" &&
    FinalBtnCourse.getAttribute("data-course") !== "prep three second term"
  ) {
    // console.log("hello");
    FinalBtnCourse.setAttribute("data-bs-toggle", "modal");
    FinalBtnCourse.setAttribute("data-bs-target", "#staticBackdrop");
  }
  // console.log(FinalBtnCourse);
  angleIconTerm.className =
    "stages__text d-block fa-solid fa-angle-left fa-angle-down--size";
});
// -----------------------------------------------------------------------------------
const currentSpanYear = document.getElementById("current-year");
console.log(currentSpanYear);
currentSpanYear.textContent = new Date().getFullYear();
