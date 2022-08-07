
let arrBGColors = ['black','#A1BDD5','#64635F','#EAD6B9','#E60000']
let arrColors = ['#fff','black','#fff','black','black']

let showingImg = document.getElementById('showingImg');
let imgs = document.querySelectorAll('.options img');
for(let i=0; i<imgs.length;i++)
{
 imgs[i].addEventListener('click',function(e){
  let imgSrc  = e.target.src;
    showingImg.src=imgSrc;
    document.body.style.backgroundColor =arrBGColors[i]
    document.body.style.color =arrColors[i]
 })
}
