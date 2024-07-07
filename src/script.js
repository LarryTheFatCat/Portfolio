const darkModeCheckBox = document.getElementById("theme_switcher_checkbox");
const darkModeCheckBoxMobile = document.getElementById("theme_switcher_checkbox_mobile");
const isDark = JSON.parse(localStorage.getItem('isdark'));

/**
 * Saves for theme only
 */

darkModeCheckBox.checked = isDark;
darkModeCheckBoxMobile.checked = isDark
darkModeCheckBox.addEventListener('change', function () {
  localStorage.setItem('isdark', JSON.stringify(darkModeCheckBox.checked));
  localStorage.setItem("isdarkMobile", JSON.stringify(darkModeCheckBoxMobile.checked));
});

