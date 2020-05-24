import React from 'react';

export default class ListaVagas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lista: []
        };
    }
    componentDidMount() {
        fetch("http://www.mocky.io/v2/5d6fb6b1310000f89166087b")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        lista: result.vagas
                    });
                }
            )
    }

    render() {
        const { lista } = this.state;

        return (
            <React.Fragment>
                <h2>Desenvolvimento</h2>
                <div>
                    {lista.map(item => (
                        <p>{item.cargo}</p>
                    ))}
                </div>
            </React.Fragment>
        );

    }
}
