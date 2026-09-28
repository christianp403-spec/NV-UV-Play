'use strict';
(() => {
  const dialog=document.querySelector('#story-image-dialog');
  if(!dialog) return;
  let trigger=null;
  document.querySelectorAll('[data-story-image]').forEach(button=>button.addEventListener('click',()=>{
    trigger=button;
    const image=document.querySelector('#story-full-image');
    image.src=button.dataset.storyImage;
    image.alt=button.dataset.storyAlt;
    dialog.showModal();document.body.classList.add('story-image-open');
  }));
  document.querySelector('#close-story-image').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{
    if(event.target!==dialog) return;
    const r=dialog.getBoundingClientRect();
    if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dialog.close();
  });
  dialog.addEventListener('close',()=>{document.body.classList.remove('story-image-open');trigger?.focus({preventScroll:true});});
})();
