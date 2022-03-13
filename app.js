let obj = []
let show = document.querySelector("main");
let _html=(title,h2,paragraph,img)=>{
  let section = document.createElement("section");
   section.setAttribute("class", "testimonial");
  let add = show.appendChild(section);
  section.innerHTML=`
      <div class="figure"><img src="${img}" alt=""><h5>${title}</h5></div>
      <h1>${h2}</h1>
      <p>${paragraph}</p>
   `;
}
let _LOOP = (fet) => {
  for (let i in fet) {
    let title = fet[i].title;
    let h2 = fet[i].h2;
    let paragraph = fet[i].paragraph;
    let img=fet[i].img;
    console.log(title,h2,paragraph);
    _html(title,h2,paragraph,img);
  }
}
fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    let strin = JSON.stringify(data);
    obj = JSON.parse(strin);
    _LOOP(obj);
  })


