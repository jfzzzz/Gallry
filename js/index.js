// 导航栏的简单tab切换
var navPage = document.querySelector('.navPage');
var nav = navPage.children[0];
var navList = navPage.children[1];
var navListDiv = navList.querySelectorAll('div');
// console.log(nav)
function onMouseover(e) {
  var e = e || window.event;
  // console.dir(e.target);
  if (e.target.tagName === 'LI') {
    // e.style.backgroundColor = '#fff'
    e.target.style.backgroundColor = '#000';
    console.dir(e.target.previousElementSibling  );
  }
}
function onMouseout(e) {
  var e = e || window.event;
  e.target.style.backgroundColor = '';
}



nav.addEventListener('mouseover', onMouseover, false);
nav.addEventListener('mouseout', onMouseout, false);