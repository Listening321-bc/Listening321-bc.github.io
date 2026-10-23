// 主题切换
const themeBtn = document.querySelector('.theme-btn');
themeBtn?.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
});

// Tab选项卡
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const parent = btn.closest('.tab-group');
    const index = Array.from(parent.querySelectorAll('.tab-btn')).indexOf(btn);
    parent.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    parent.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
    btn.classList.add('active');
    parent.querySelectorAll('.tab-content')[index].classList.add('active');
  })
})

// 分屏对比滑块
function initSlider(){
  const container = document.querySelector('.slider-container');
  if(!container) return;
  const divider = container.querySelector('.slider-divider');
  const leftWrap = container.querySelector('.slider-left');
  let isDrag = false;

  function move(e){
    if(!isDrag) return;
    const rect = container.getBoundingClientRect();
    let x = (e.clientX || e.touches[0].clientX) - rect.left;
    let percent = Math.max(0,Math.min(100,(x / rect.width)*100));
    leftWrap.style.width = percent + "%";
    divider.style.left = percent + "%";
  }
  divider.addEventListener('mousedown',()=>isDrag=true);
  window.addEventListener('mouseup',()=>isDrag=false);
  window.addEventListener('mousemove',move);
  //移动端触摸支持
  divider.addEventListener('touchstart',()=>isDrag=true);
  window.addEventListener('touchend',()=>isDrag=false);
  window.addEventListener('touchmove',(e)=>{e.preventDefault();move(e);});
}
window.onload = initSlider;
