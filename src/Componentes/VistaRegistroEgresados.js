import React from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { browserHistory } from 'react-router-3';


class VistaRegistroEgresados extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            codigo: this.props.codigo,
            
            datos: Array.from([
                "FECHA DE INICIO",
                "FECHA DE CULMINACIÓN",
                "SITUACIÓN",
            ]),

            columnas: Array.from([
                Array.from([
                    "INGLES",
                    "16-05-1999",
                    "16-05-2000",
                    "FINALIZADO",
                ]),
                Array.from([
                    "PROTUGUES",
                    "16-05-2001",
                    "16-05-2002",
                    "FINALIZADO",
                ]),
            ]),

        }

    }

    render() {
        return (
            <div className="contenedor">
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
                        <br></br>
                        <input type="submit" value="Enviar" className="btn right" required/>
                        <br></br><br></br>
                        <label className="label-dato">
                            VALORE LOS SERVICIOS UNIVERSITARIOS RECIBIDOS:
                            <table className="table">
                                <thead>
                                        <tr>
                                            <td></td>
                                            {this.state.datos.map(da =>
                                            <td>{da}</td>
                                            )}
                                        </tr>
                                </thead>
                                <tbody>

                                    {this.state.columnas.map( (col,index) =>
                                        <tr className="centrar-contenido">
                                            <td>{col[0]}</td>
                                            <td>{col[1]}</td>
                                            <td>{col[2]}</td>
                                            <td>{col[3]}</td>
                                        </tr>
                                    )}

                                </tbody>


                            </table>
                        </label>
                        
                    </div>

                </div>
            </div>
        );
    }
}

export default VistaRegistroEgresados;