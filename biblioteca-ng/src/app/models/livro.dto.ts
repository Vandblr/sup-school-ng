export interface LivroCadastroRequest{
    titulo: string;
    autorId: number | null;
    categoriaId: number | null;
    anoPublicacao: number | null;
    quantidade: number | null;
    descricao: string;
    resumo: string;
}