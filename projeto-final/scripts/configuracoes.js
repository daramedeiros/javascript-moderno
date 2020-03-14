import { paginaInicial, setPaginaInicial } from './storage/paginaInicial.js';
import { aceitouSalvar, setAceitouSalvar } from './storage/aceitouSalvar.js'
import { formataEndereco } from './endereco/formataEndereco.js';

$inputPaginaInicial.value = paginaInicial;
$inputPermitirSalvar.checked = aceitouSalvar;

$btnSalvar.onclick = () => {
    let permitirSalvar = $inputPermitirSalvar.checked;
    let paginaNova = formataEndereco($inputPaginaInicial.value);
    setPaginaInicial(paginaNova);
    setAceitouSalvar(permitirSalvar);
    alert('Configurações salvas com sucesso!');
    window.location.reload();

}