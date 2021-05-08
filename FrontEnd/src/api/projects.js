import axios from 'axios'

export function listarProjects(){
    return axios({
        method:"GET",
        url:"http://localhost:8000/api/projects",
    })
}

export function inserirProjects(project){
    return axios({
        method:"POST",
        url:"http://localhost:8393/api/projects",
        data:project
    })
}

export function removerProjects(id_project){
    return axios({
        method:"DELETE",
        url:"http://localhost:8393/api/projects/"+id_project
    })
}