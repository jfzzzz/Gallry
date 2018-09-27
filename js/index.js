// 导航栏的简单tab切换
var navPage = document.querySelector('.navPage');
var nav = navPage.children[0];
var lis = document.querySelectorAll('.nav li');
var navList = navPage.children[1];
var navListDiv = navList.querySelectorAll('div');
// console.log(nav)
// console.dir(ul.children);
console.dir(navListDiv)

var lis = document.querySelectorAll('.nav li');
lis.forEach(function(item,index){
  item.index = index;
})

function onMouseover(e) {
  var e = e || window.event;
  // console.dir(e.target);
  if (e.target.tagName === 'LI') {
    // e.style.backgroundColor = '#fff'
    e.target.style.backgroundColor = '#000';
    navListDiv[e.target.index].className = 'play';
    // console.log(e.target.index);
  }
}

function onMouseout(e) {
  var e = e || window.event;
  e.target.style.backgroundColor = '';
  navListDiv[e.target.index].className = '';
}

nav.addEventListener('mouseover', onMouseover, false);
nav.addEventListener('mouseout', onMouseout, false);
var a ;