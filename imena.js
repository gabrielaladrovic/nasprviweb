const pokaziAndriju = () => {
  document.getElementById("andrija").classList.add("podigni");
  document.getElementById("andrija").classList.remove("spusti");
};
const vratiAndriju = () => {
  document.getElementById("andrija").classList.add("spusti");
  document.getElementById("andrija").classList.remove("podigni");
};

const pokaziGabriela = () => {
  document.getElementById("andrija").classList.add("izbaci");
  document.getElementById("gabriel").classList.add("podigni");
  document.getElementById("gabriel").classList.remove("spusti");
};
const vratiGabriela = () => {
  document.getElementById("gabriel").classList.add("spusti");
  document.getElementById("gabriel").classList.remove("podigni");
  document.getElementById("andrija").classList.remove("izbaci");
};

const pokaziMarina = () => {
  document.getElementById("andrija").classList.add("izbaci");
  document.getElementById("gabriel").classList.add("izbaci");
  document.getElementById("marin").classList.add("podigni");
  document.getElementById("marin").classList.remove("spusti");
};
const vratiMarina = () => {
  document.getElementById("marin").classList.add("spusti");
  document.getElementById("marin").classList.remove("podigni");
  document.getElementById("andrija").classList.remove("izbaci");
  document.getElementById("gabriel").classList.remove("izbaci");
};

let andrija = document.getElementById("box-andrija");
let gabriel = document.getElementById("box-gabriel");
let marin = document.getElementById("box-marin");
andrija.addEventListener("mouseenter", pokaziAndriju);
andrija.addEventListener("mouseleave", vratiAndriju);
gabriel.addEventListener("mouseenter", pokaziGabriela);
gabriel.addEventListener("mouseleave", vratiGabriela);
marin.addEventListener("mouseenter", pokaziMarina);
marin.addEventListener("mouseleave", vratiMarina);
