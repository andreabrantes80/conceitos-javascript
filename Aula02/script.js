function calculate(operation) {
    var num1 = parseFloat(prompt('Digite o primeiro número: '))

    if (!confirm("Você digitou: " + num1 + ". Confirma?")) {
        return;
    }

    var num2 = parseFloat(prompt('Digite o segundo número: '))

    if (!confirm("Você digitou: " + num2 + ". Confirma?")) {
        return;
    }

    var result;
    if (operation === 'add') {
        result = num1 + num2;
        alert("O resultado da adição é: " + result);
    } else if (operation === 'sub') {
        result = num1 - num2;
        alert("O resultado da subtração é: " + result);
    } else if (operation === 'mult') {
        result = num1 * num2;
        alert("O resultado da multiplicação é: " + result);
    } else if (operation === 'div') {
        if (num2 === 0) {
            alert("O resultado da divisão por zero: ");
            result;
        }
    }
    result = num1 / num2;
    alert("O resultado da divisão é: " + result);

}


// const disciplina = "Python";
// switch(disciplina) {
//     case "Excel":
//         console.log("Esse é um aluno impressionador de Excel da Hashtag!");
//     case "Power BI":
//         console.log("Esse é um aluno impressionador de Power BI da Hashtag!");
//     case "PowerPoint":
//         console.log("Esse é um aluno impressionador de PowerPoint da Hashtag!");
//     case "Python":
//         console.log("Esse é um aluno impressionador de Python da Hashtag!");
//     case "Html/CSS":
//         console.log("Esse é um aluno impressionador de Html/CSS da Hashtag!");
//     case "VBA":
//         console.log("Esse é um aluno impressionador de VBA da Hashtag!");
//     case "SQL":
//         console.log("Esse é um aluno impressionador de SQL da Hashtag!");
//     case "JavaScript":
//         console.log("Esse é um aluno impressionador de JavaScript da Hashtag!");
// }
