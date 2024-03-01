export function Navegacao(props){
    return (
        <div className="navegacao">
            <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onClick={() => props.atualizarPaginaSelecionada(0)}/> 
            <label htmlFor="opcao-o" >Pratos principais</label>
            <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => props.atualizarPaginaSelecionada(1)}/>
            <label htmlFor="opcao-1">Sobremesas</label>
            <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => props.atualizarPaginaSelecionada(2)}/>
            <label htmlFor="opcao-2">Bebidas</label>
        </div>
    )
}