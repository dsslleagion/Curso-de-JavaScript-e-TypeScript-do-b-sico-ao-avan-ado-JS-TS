import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function(){
const gera = new GeraCPF();
const cpfGerado = document.querySelector();
cpfGerado.innerHTML = gera.geraNovoCpf();

})();