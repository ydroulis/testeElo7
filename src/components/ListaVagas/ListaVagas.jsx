import React, {useState, useEffect} from 'react';
import './ListaVagas.css'


function ListaVagas() {
    const [vagas, setVagas] = useState([]);
  
    
    useEffect(() => {
      fetch("http://www.mocky.io/v2/5d6fb6b1310000f89166087b")
        .then(res => res.json())
        .then(
          (result) => {
            setVagas(result.vagas);
          },          
        )
    }, [])
  
   
    const getPositions = () => {
        return vagas.map((vaga, index) => {
            if (!vaga.ativa) return null;
            console.log(vaga)
            //debugger
            return(
                <div key={index}>
                    <div className = 'itemLista'>
                        <a className = "vaga" href={vaga.link}>{vaga.cargo}</a>
                        <span className = 'localizacao'>{
                            vaga.localizacao? 
                            vaga.localizacao.bairro + ' - ' + vaga.localizacao.cidade + ', ' + vaga.localizacao.pais: "Remoto"
                            }</span>
                    </div>
                    
                </div>
            )
        })
    }

    return (
        <>
            <h2 className = "titulo">Desenvolvimento</h2>
            {getPositions()}
        </>
    )
}

export default ListaVagas
































/*export default class ListaVagas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vagas: [],
        };
    }
    componentDidMount() {
        fetch("http://www.mocky.io/v2/5d6fb6b1310000f89166087b")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        vagas: result.vagas,

                    });
                }
            )
    }

    render() {
        const { vagas } = this.state

        const formatLocallizacao = (localizacao) =>{
            return (
                <div>
                    `${localizacao.bairro} - ${localizacao.cidade}, ${localizacao.pais}`
                </div>
            )
        }

        const getPositions = () => {
            return vagas.map((vaga, index) => {
                if (!vaga.ativa) return null;

                return (
                    <div key={index}>
                        {vaga.cargo}
                        <div>{vaga.localizacao.bairro}</div>
                    </div>
                )
            })
            
        }
        export default getPositions    
    }

    
}
*/