  function toggleHighlight(element) {
    var lis = document.querySelectorAll("#menu li");
    lis.forEach(li => {
      li.classList.remove("active");
    })
    element.classList.add("active");
  }

  window.onload = function() {
    var firstMenuItem = document.getElementById("menucenter-1");
    toggleHighlight(firstMenuItem);
  };
// see more
const openseemore = document.getElementById('see-more1')
const seemore = document.getElementById('see-more-menu1')
const closeseemore = document.getElementById('close-see-more1')
openseemore.addEventListener("click",function(){
  if (seemore.style.display === "none") {
    seemore.style.display ="block";
    openseemore.style.display ="none";
    } else {
      seemore.style.display ="none";
      openseemore.style.display ="flex";
    }
  });
closeseemore.addEventListener("click",function(){
  if (seemore.style.display === "block") {
    seemore.style.display ="none";
    openseemore.style.display ="flex";
    }
  });
const openseemore2 = document.getElementById('see-more2')
const seemore2 = document.getElementById('see-more-menu2')
const closeseemore2= document.getElementById('close-see-more2')
openseemore2.addEventListener("click",function(){
  if (seemore2.style.display === "none") {
    seemore2.style.display ="block";
    openseemore2.style.display ="none";
    } else {
      seemore2.style.display ="none";
      openseemore2.style.display ="flex";
    }
  });
closeseemore2.addEventListener("click",function(){
  if (seemore2.style.display === "block") {
    seemore2.style.display ="none";
    openseemore2.style.display ="flex";
    }
  });
//next slide
const leftoff=document.querySelector('.lefta')
const rightoff=document.querySelector('.righta')
const imgnumber=document.querySelectorAll('.story-img-people a')
let index=0
let i=0
rightoff.addEventListener("click",function(){
    index=index+1
    if(index>imgnumber.length/3-1)
    {
      index=imgnumber.length/3-1
    }
    if(index>0)
    {
      leftoff.style.opacity="1"
    }
    else
    {
      leftoff.style.opacity="0"
    }
    if(index>=imgnumber.length/3.5-1)
    {
      rightoff.style.opacity="0"
    }
    else
    {
      rightoff.style.opacity="1"
    }
    i=i+1
    document.querySelector(".story-img-people").style.right=(index*60+"vh");
})
leftoff.addEventListener("click", function(){
    index=index-1
    if(index<=0)
    {
        index=0
        leftoff.style.opacity="0"
    }
    if(index<imgnumber.length/3-1)
    {
      rightoff.style.opacity="1"
    }
    document.querySelector(".story-img-people").style.right=index*60+"vh"
});
// hight like

function toggleHighlightlike(element) {
  const hidenContent = element.parentElement.parentElement.querySelector('.Hider-content p');
  const hidenContent1 = element.parentElement.parentElement.querySelector('.number p');
  element.classList.toggle("light-like");
  hidenContent.style.display = (hidenContent.style.display === "block") ? "none" : "block";
  hidenContent1.style.display = (hidenContent.style.display === "none") ? "block" : "none"  ;
}
  

  
