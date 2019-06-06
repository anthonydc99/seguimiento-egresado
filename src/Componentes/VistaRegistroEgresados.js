import React from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { browserHistory } from 'react-router-3';


class VistaRegistroEgresados extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            codigo: this.props.codigo,
        }

    }

    render() {
        return (
            <div className="contenedor" style={{ height: window.innerHeight - 90 }}>
                <div className="">
                    <h2 className="titulo">Formacion Academica en Posgrado</h2>
                    <div className="input-dato">
                        <label className="label-dato">
                            CODIGO DE ESTUDIANTE:
                            <input type="text" name="name" value={this.state.codigo} disabled/>
                        </label>
                        <label className="label-dato">
                            PROGRAMA CURSADO:
                            <input type="text" name="name" required/>
                        </label>
                        <label className="label-dato">
                            SEMESTRE ACADEMICO QUE INGRESO:
                            <input type="text" name="name" required/>
                        </label>
                        <label className="label-dato">
                            SEMESTRE ACADEMICO QUE EGRESO:
                            <input type="text" name="name" required/>
                        </label>
                        <label className="label-dato">
                            SITUACION ACADEMICA ACTUAL:
                            <input type="text" name="name" required/>
                        </label>
                        <input type="submit" value="Enviar" className="btn right" required/>
                    </div>

                </div>
            </div>
        );
    }
}

export default VistaRegistroEgresados;