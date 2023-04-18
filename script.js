let h1 = document.createElement("h1");
h1.textContent = "Game Of Thrones";
h1.className = "display-4 text-center py-5 text-white";
h1.style.backgroundColor = "#220c0c";
h1.style.backgroundRepeat = "no-repeat";
h1.style.backgroundSize = "cover";
document.body.append(h1);

let label = document.createElement("label");
label.textContent = "Search for Character Names from Game of Thrones";
label.setAttribute("for", "search");
label.className = "mt-4";
label.style.fontSize = "18px";
let input = document.createElement("input");
input.className = "form-control";
input.setAttribute("id", "search");
input.setAttribute("placeholder", "Try 'sansa stark'");
let button = document.createElement("button");
button.textContent = "Search";
button.className = "text-center btn btn-dark btn-lg mt-2";
button.style.margin = "0 45%";

let container = document.createElement("div");
container.className = "container";
let row = document.createElement("row");
row.className = "row my-5";

document.body.append(container);
container.append(label, input, button, row);

function init() {
  row.innerHTML += `<div class="col-md-4">
  <div class="card" style="width: 18rem;">
    <img src="jon.jpg" class="card-img-top" style="max-height:180px;" alt="...">
    <div class="card-body">
    <h3 class="card-title">Jon Snow</h3>
    </div>
  </div>
  </div><div class="col-md-4">
  <div class="card" style="width: 18rem;">
    <img src="queen.jpeg" class="card-img-top" style="max-height:250px;" alt="...">
    <div class="card-body">
    <h3 class="card-title">Daenerys Targaryen</h3>
    </div>
  </div>
  </div><div class="col-md-4">
  <div class="card" style="width: 18rem;">
    <img src="arya.jpeg" class="card-img-top" style="max-height:250px;" alt="...">
    <div class="card-body">
    <h3 class="card-title">Arya Stark</h3>
    </div>
  </div>
  </div>`;
}
init();
async function fetchURL() {
  try {
    let userinput = input.value.toLowerCase();
    console.log(userinput);
    let fetchlink = await fetch(
      `https://www.anapioficeandfire.com/api/characters/?name=${userinput}`
    );
    let result = await fetchlink.json();
    input.value = "";
    for (let i = 0; i < result.length; i++) {
      row.innerHTML = `<div class="col-md-4" >
      <img src="https://wallpapers.com/images/hd/iron-throne-of-game-of-thrones-nf79q124fikj37px.webp" class="card-img-top" alt="...">
      
    </div>
    <div class="col-md-8 pt-3">
    <h3 class="card-title">${result[i].name}</h3>
    <p class="card-text pt-2"><b>Title : </b>${result[i].titles[0]}</p>
    <p class="card-text"><b>Played By : </b>${result[i].playedBy}</p>
    <p class="card-text"><b>Culture : </b>${result[i].culture}</p>
  </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}
button.addEventListener("click", fetchURL);
