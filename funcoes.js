/*******************************************************************************
 * Objetivo: Criar funções relacionadas aos arquivos de alunos e cursos para realização da atividade final
 * Data: 22/11/2024
 * Autor: Ana Júlia Macedo
 * Versão: 1.0
 *******************************************************************************/

var listaDeCursos = require ('../cursos')
var listaDeAlunos = require ('../alunos')

//1
const getCursos = function(){
    let resposta = {}
    let dentroCursos = listaDeCursos.cursos
    let cursos = []
    let atributos ={}
    dentroCursos.forEach(function(item){
        atributos.nome = item.nome
        atributos.sigla = item.sigla
        atributos.carga = item.carga
        cursos.push (atributos)
    })
    resposta.cursos = cursos
    return resposta
}

//console.log (getCursos())


//2
const getAlunos = function(){
    let dentroAlunos = listaDeAlunos.alunos
    dentroCursos = listaDeAlunos.alunos.curso
    console.log(dentroCursos)
    let resposta = {}
    let alunos = []
    let atributos = {}

    dentroAlunos.forEach(function(item){
        atributos.nome = item.nome
        atributos.matricula = item.matricula
        atributos.sexo = item.sexo
        atributos.status = item.status
        alunos.push (atributos)

        item.curso.forEach(function(item){
            atributos.curso = item.nome
            alunos.push(atributos)
        })
    })
    resposta.alunos = alunos
    return resposta
}
//console.log(getAlunos())


//3
const getFiltroMatricula = function(matricula){
    let dentroAlunos = listaDeAlunos.alunos
    let matriculaDigitada = matricula
    let status = false
    resposta = {}

    dentroAlunos.forEach(function(item){
        if(matriculaDigitada == String(item.matricula).toUpperCase()){
            resposta.nome = item.nome
            resposta.matricula = item.matricula
            resposta.sexo = item.sexo
            resposta.status = item.status
            status = true

            item.curso.forEach(function(item){
                resposta.curso = item.nome
            })
        }
    })

    if(status == true){
        return resposta
    }else{
        return status
    }


}

//console.log(getFiltroMatricula(20151001001))

//4
const getAlunosCurso = function(sigla) {
    let siglaDigitada = String(sigla).toUpperCase() 
    let dentroAlunos = listaDeAlunos.alunos 
    let resposta = {} 
    let alunos = []
    let status = false

    
    dentroAlunos.forEach(function(aluno) {
        
        aluno.curso.forEach(function(dentroCurso) {
            
            if (siglaDigitada == String(dentroCurso.sigla).toUpperCase()) {
                
                alunos.push({
                    nome: aluno.nome,
                    matricula: aluno.matricula,
                    sexo: aluno.sexo,
                    curso: dentroCurso.nome,
                    sigla: dentroCurso.sigla
                })
                status = true
            }
        })
    })


    resposta.alunos = alunos
    if(status == true){
        return resposta
    }else{
        return status
    }
}

//console.log(getAlunosCurso("ds"))

//5
const getAlunosStatus = function (statusAluno) {
    let statusDigitado = String(statusAluno).toUpperCase()
    let dentroAlunos = listaDeAlunos.alunos
    let resposta = {}
    let alunos = []
    let status = false


    dentroAlunos.forEach(function (aluno) {

        if (statusDigitado == String(aluno.status).toUpperCase()) {
            status = true
            //let nomeCurso = []
            
            aluno.curso.forEach(function (curso) {
                alunos.push({
                    nome: aluno.nome,
                    matricula: aluno.matricula,
                    sexo: aluno.sexo,
                    curso: curso.nome,
                    status: aluno.status,
                    //cursos: dentroCurso.nome
                })
                //alunos.push({curso: dentroCurso.nome})
            })

            
        }
    })


    resposta.alunos = alunos
    if(status == true){
        return resposta
    }else{
        return status
    }
}
//console.log(getAlunosStatus("FINALIZADO"))


//6
const getAlunosStatusDisciplinas = function(sigla, statusAluno) {
    let siglaDigitada = String(sigla).toUpperCase()
    let statusDigitado = String(statusAluno).toUpperCase()
    let dentroAlunos = listaDeAlunos.alunos
    let resposta = {}
    let alunos = []
    let status = false
    //console.log('1')

    dentroAlunos.forEach(function(aluno) {
        aluno.curso.forEach(function(cursoAluno) {
            if (siglaDigitada === String(cursoAluno.sigla).toUpperCase()) { //VERIFICA SE A SIGLA É A MSM, SE FOR FAZ O FOREACH NA DICIPLINA PRA CONSEGUIR CHEGAR NO STATUS DA DICIPLINA E VER SE É O MSM TBEM. 
                let dadosAluno = {
                    nome: aluno.nome,
                    matricula: aluno.matricula,
                    sexo: aluno.sexo,
                    curso: cursoAluno.nome,
                    disciplinas: []
                }
                //console.log('3')
                cursoAluno.disciplinas.forEach(function(disciplina) {
                    
                    if (String(disciplina.status).toUpperCase() === statusDigitado) {
                        status = true


                        dadosAluno.disciplinas.push({
                            nome: disciplina.nome,
                            status: disciplina.status,
                            carga: disciplina.carga
                        });

                    }
                })

                alunos.push(dadosAluno)
            }
        })
    })

    resposta.alunos = alunos
    if(status == true){
        return resposta
    }else{
        return status
    }

}
//console.log(getAlunosStatusDisciplinas('ds', 'Aprovado'))


//7
const getAlunosCursoConclusao = function(sigla, ano){
    let siglaDigitada = String(sigla).toUpperCase()
    let anoDigitado = String(ano).toUpperCase()
    let dentroAlunos = listaDeAlunos.alunos
    let resposta = {}
    let alunos = []
    let status = false

    dentroAlunos.forEach(function(aluno){
        aluno.curso.forEach(function(cursoAluno){
            if (siglaDigitada === String(cursoAluno.sigla).toUpperCase()) {
                if(anoDigitado === String(cursoAluno.conclusao).toUpperCase()){
                    let dadosAluno = {
                        nome: aluno.nome,
                        matricula: aluno.matricula,
                        sexo: aluno.sexo,
                        curso: cursoAluno.nome,
                        conclusao: cursoAluno.conclusao
                    }
                    status = true

                    alunos.push(dadosAluno)
                }
            }
        })
    })

    resposta.alunos = alunos 
    if(status == true){
        return resposta
    }else{
        return status
    }
}

//console.log(getAlunosCursoConclusao('DS', '2022'))


module.exports = {
    getCursos,
    getAlunos,
    getFiltroMatricula,
    getAlunosCurso,
    getAlunosStatus,
    getAlunosStatusDisciplinas,
    getAlunosCursoConclusao
}

console.log(listaDeCursos)