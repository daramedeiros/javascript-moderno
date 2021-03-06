//import { aceitouSalvar } from './pedeAceitouSalvar.js'
import { aceitouSalvar } from '../storage/aceitouSalvar.js'
import { paginaInicial, setPaginaInicial } from '../storage/paginaInicial.js';
import { formataEndereco } from '../endereco/formataEndereco.js';


if (aceitouSalvar === true)
{
    let pagina = paginaInicial;

    if (!pagina) {
        pagina = prompt('Escolha a página inicial:');
    }

    if (pagina) 
    {
        pagina = formataEndereco(pagina);
        $janelaPrincipal.src = pagina;
        $inputEndereco.value = pagina;
        setPaginaInicial(pagina);
    }
};
