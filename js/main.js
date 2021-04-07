window.addEventListener('keydown',(e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("border-purple-500", "transform" ,"scale-110","transition","duration-500","ease-in-out");
});

function removeTransition(e){
    if(e.propertyName !== 'transform') return;

    this.classList.remove("border-purple-500", "transform" ,"scale-110","transition","duration-100","ease-in-out");
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));