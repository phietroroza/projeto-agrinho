function mudaTema() {

    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {

        corpoPagina.classList.remove("tema-escuro");

    } else {

        corpoPagina.classList.add("tema-escuro");

    }

}
