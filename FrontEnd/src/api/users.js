import axios from 'axios'

export function listarUsers(){
    return axios({
        method:"GET",
        url:"http://localhost:8000/api/usuarios",
    })
}

export function buscarUserPorId(id_usuario){
    return axios({
        method:"GET",
        url:"http://localhost:8000/api/usuarios/"+id_usuario,
    })
}

export function inserirUser(usuario){
    return axios({
        method:"POST",
        url:"http://localhost:8393/api/usuarios",
        data:usuario
    })
}

export function removerUser(id_usuario){
    return axios({
        method:"DELETE",
        url:"http://localhost:8393/api/usuarios/"+id_usuario
    })
}