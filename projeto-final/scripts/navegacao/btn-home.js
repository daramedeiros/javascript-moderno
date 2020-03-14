import { paginaInicial } from "../storage/paginaInicial.js";
import { carregarPagina } from "./carregar-pagina.js";

$btnHome.onclick = () => {
    carregarPagina(paginaInicial);
};