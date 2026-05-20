function mudaTema() {

    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {

        corpoPagina.classList.remove("tema-escuro");

    } else {

        corpoPagina.classList.add("tema-escuro");

    }

}
let curtidas = 0;
let dislikes = 0;

function curtir() {
  curtidas++;
  document.getElementById("curtidas").innerText = curtidas;
}

function dislike() {
  dislikes++;
  document.getElementById("dislikes").innerText = dislikes;
}
