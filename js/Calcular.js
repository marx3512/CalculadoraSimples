
const Resultado = document.querySelector('#resultado');

function Calcular(){
    const Num1 = document.querySelector('#a').value;
    const Num2 = document.querySelector('#b').value;
    const Sinal = document.querySelector('#Aritmetica').value;
    const N1 = parseInt(Num1,10);
    const N2 = parseInt(Num2,10);
    
    if(Sinal == '+'){
        const Soma = N1 + N2;
        Resultado.innerHTML = Soma;
    }
    else if(Sinal == '-'){
        const Dim = N1 - N2;
        Resultado.innerHTML = Dim;
    }
    else if(Sinal == '*'){
        const Mult = N1 * N2;
        Resultado.innerHTML = Mult;
    }
    else if(Sinal == '÷'){
        const Div = N1 / N2;
        Resultado.innerHTML = Div;
    }
}

const bot = document.querySelector('#Botao').onclick = Calcular;