import {useForm} from "react-hook-form";
import { useState, useEffect } from "react";
import { api } from "../config_axios";
import ItemListaEditora from "./ItemListaEditora";  

const ManutencaoEditora = () => {
    const {register, handleSubmit, reset} = useForm();
    const [editora, setEditora] = useState([]);

    const obterLista = async () => {
        try{
            const lista = await api.get("editora");
            setEditora(lista.data);
        }catch(error){
            alert(`Erro: ..Não foi possível obter os dados: ${error}`);
        }
    }


//define o método que será executado assim que o componente for renderizado
useEffect(() => {
    obterLista();
},[]);

const filtrarLista = async (campos) => {
    try{
        const lista = await api.get(`editora/filtro/${campos.palavra}`);
        lista.data.length
        ? setEditora(lista.data)
        : alert("Não há editoras cadastradas com a palavra chave pesquisada");
    }catch(error){
        alert(`Erro: ..Não foi possível obter os dados: ${error}`);
    }
    

}

const excluir = async(id,nome) => {
    if(!window.confirm(`Confirma a exclusão da editora ${nome}?`)){
        return;
    }
    try{
        await api.delete(`editora/${id}`);
        setEditora(editora.filter(editora => editora.id !== id));
        
    }catch(error){
        alert(`Erro: ..Não foi possível excluir a editora ${nome}: ${error}`);
    }
}

//alterar os registros
const alterar = async (id,nome,index) => {
    const novaEditora = prompt(`Digite o novo nome da editora ${nome}`);
 
    try{//captura os erros 
        //chamando o backend e passando os dados
        await api.put(`editora/${id}`,{nome: novaEditora});
        const EditorasAtualizadas = [...editora];
        const indiceEditora = EditorasAtualizadas.findIndex(editora => editora.id === id);
        EditorasAtualizadas[indiceEditora].nome = novaEditora;
        setEditora(EditorasAtualizadas);
        obterLista();
    }catch(error){
        alert(`Erro: ..Não foi possível alterar o nome da editora ${nome}: ${error}`);
    }
}

    return (
       <div className="container">
        <div className="row">
            <div className="col-sm-7">
                <h4 className="fst-italic mt-3">Manutenção</h4>
            </div>
            <div className="col-sm-5">
                <form onSubmit={handleSubmit(filtrarLista)}>
                    <div className="input-group mt-3">
                        <input type="text" className="form-control" placeholder="Nome da editora" required {...register("palavra")} />
                        <input type="submit" className="btn btn-primary" value="Pesquisar" />
                        <input type="button" className="btn btn-danger" value="Todos" onClick={()=>{reset({palavra:""});obterLista();}}/>
                    </div>
                </form>
            </div>
        </div>

        <table className="table table-striped mt-3">
            <thead>
                <tr>
                    <th>Cód.</th>
                    <th>Nome</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                    <th>Telefone</th>
                    <th>Rua</th>
                    <th>CEP</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {editora.map((editora) => (
                    <ItemListaEditora
                        key={editora.id}
                        id={editora.id}
                        nome={editora.nome}
                        cidade={editora.cidade}
                        estado={editora.estado}
                        telefone={editora.telefone}
                        rua={editora.rua}
                        cep={editora.cep}
                        excluirClick={()=>excluir(editora.id,editora.nome)}
                        alterarClick={()=>alterar(editora.id,editora.nome)}
                    />
                ))}
            </tbody>
        </table>

       </div> 
    );
};

export default ManutencaoEditora;