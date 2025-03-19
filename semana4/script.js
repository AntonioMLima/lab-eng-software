
let aluno = document.getElementById("aluno")
let professor = document.getElementById("professor")

function habitarCampos() {
    const campos = document.getElementById("campos")

    if (document.getElementById("campoAluno1") != null) {
        document.getElementById("campoAluno1").remove();
    }

    if (document.getElementById("campoProf1") != null){
        document.getElementById("campoProf1").remove();
        document.getElementById("campoProf2").remove();
    }

    if (aluno.checked) {
        const campoAluno = document.createElement("div");
        campoAluno.classList.add("col-6");
        campoAluno.id = "campoAluno1";

        const labelAlunoCurso = document.createElement("label");
        labelAlunoCurso.for = "curso";
        labelAlunoCurso.classList.add("form-label");
        labelAlunoCurso.textContent = "Curso:";

        const inputAlunoCurso = document.createElement("input");
        inputAlunoCurso.type = "text";
        inputAlunoCurso.name = "curso";
        inputAlunoCurso.id = "curso";
        inputAlunoCurso.placeholder = "Insira seu curso";
        inputAlunoCurso.classList.add("form-control")

        campoAluno.appendChild(labelAlunoCurso);
        campoAluno.appendChild(inputAlunoCurso);
        campos.appendChild(campoAluno);
    } else if (professor.checked) {
        const campoProfessorArea = document.createElement("div");
        const campoProfessorLattes = document.createElement("div");
        campoProfessorArea.classList.add("col-3");
        campoProfessorLattes.classList.add("col-3");
        campoProfessorArea.id = "campoProf1";
        campoProfessorLattes.id = "campoProf2";

        const labelProfessorArea = document.createElement("label");
        const labelProfessorLattes = document.createElement("label");
        labelProfessorArea.for = "area";
        labelProfessorLattes.for = "lattes";
        labelProfessorArea.classList.add("form-label");
        labelProfessorLattes.classList.add("form-label");

        labelProfessorArea.textContent = "Área:";
        labelProfessorLattes.textContent = "Lattes:";

        const inputProfessorArea = document.createElement("input");
        const inputProfessorLattes = document.createElement("input");
        inputProfessorArea.type = "text";
        inputProfessorArea.name = "area";
        inputProfessorArea.id = "area";
        inputProfessorArea.placeholder = "Insira sua área de atuação";
        inputProfessorArea.classList.add("form-control")

        inputProfessorLattes.type = "text";
        inputProfessorLattes.name = "lattes";
        inputProfessorLattes.id = "lattes";
        inputProfessorLattes.placeholder = "Link do currículo lattes";
        inputProfessorLattes.classList.add("form-control")

        campoProfessorArea.appendChild(labelProfessorArea);
        campoProfessorArea.appendChild(inputProfessorArea);

        campoProfessorLattes.appendChild(labelProfessorLattes)
        campoProfessorLattes.appendChild(inputProfessorLattes)
        
        campos.appendChild(campoProfessorArea);
        campos.appendChild(campoProfessorLattes);
    }
}

habitarCampos();

let form = document.getElementById("form");

aluno.addEventListener("change", function() {
    habitarCampos();
})

professor.addEventListener("change", function() {
    habitarCampos();
})

form.addEventListener("reset", function() {
    aluno.checked = true;
    habitarCampos();
})


class Pessoa {
    constructor(nome, email, dataNascimento,
    telefonef, telefonec, matricula
     ) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.telefonef = telefonef,
        this.telefonec = telefonec,
        this.matricula = matricula;
    }
 
}


class Aluno extends Pessoa{
    constructor(nome, email, dataNascimento,
    telefonef, telefonec, matricula, curso) 
    {
    super(nome, email, dataNascimento, telefonef, telefonec, matricula);
    this.curso = curso;}

    
}

class Professor extends Pessoa {
    constructor(nome, email, dataNascimento,
    telefonef, telefonec, matricula, area, lattes) {
    super(nome, email, dataNascimento, telefonef, telefonec, matricula);
    this.area = area;
    this.lattes = lattes;
    }
}

form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const dadosForm = new FormData(form)
    const divDados = document.getElementById("dados")
    divDados.innerHTML = "";

    
    let pessoa = new Pessoa();

    if (aluno.checked) {
        pessoa = new Aluno();
    } else if(aluno.checked) {
        pessoa = new Professor();
    }

    for (let [nome, valor] of dadosForm.entries()) {
        pessoa[nome] = valor;
    }

    for (const chave in pessoa) {
        let p = document.createElement("p");
        p.textContent = `${chave}: ${pessoa[chave]}`;
        divDados.appendChild(p);
    }

})












