const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

```
if(topBtn){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

}
```

});

/* Powrót na górę */

if(topBtn){

```
topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});
```

}

/* Animacje przy przewijaniu */

const observer = new IntersectionObserver((entries)=>{

```
entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }

});
```

},{
threshold:0.15
});

document.querySelectorAll(
".card,.feature,.server-card"
).forEach(el=>{

```
el.classList.add("hidden");

observer.observe(el);
```

});

/* Efekt wpisywania tytułu */

const title = document.querySelector(".hero h1");

if(title){

```
const text = title.innerText;

title.innerText = "";

let i = 0;

function typeEffect(){

    if(i < text.length){

        title.innerText += text.charAt(i);

        i++;

        setTimeout(typeEffect,80);

    }

}

setTimeout(typeEffect,500);
```

}
