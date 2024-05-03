function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener('keypress', e => {
      if (e.key !== 'Enter') return;
      this.realizaConta();
    });
  };

  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  };

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);
      if (typeof conta === 'undefined' || isNaN(conta)) {
        alert('Conta Inválida');
        return;
      }
      this.display.value = conta;
    } catch (e) {
      alert('Conta Inválida');
      return;
    }
  };

  this.addNumDisplay = el => (this.display.value += el.innerText);
  this.clear = () => (this.display.value = '');
  this.del = () => (this.display.value = this.display.value.slice(0, -1));
}

const calculadora = new Calculadora();
calculadora.inicia();
