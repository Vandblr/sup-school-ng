export interface UsuarioResponse {
    id: number;
    nome: string;
    email: string;
    telefone: number;
    endereco: string;
}

export interface  UsuarioCadastroRequest {

    id: number;
    nome: string;
    email: string;
    telefone: number;
    endereco: string;
}


export interface UsuarioEditarRequest {
    id: number;
    nome: string;
    email: string;
    telefone: number;
    endereco: string;
}
