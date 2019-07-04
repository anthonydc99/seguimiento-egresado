import React from 'react';
import Select from 'react-select'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


const opciones = [
    { value: 'Programa 1', label: 'Programa 1' },
    { value: 'Programa 2', label: 'Programa 2' },
    { value: 'Programa 3', label: 'Programa 3' }
];
class VistaRegistroEgresados extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: { value: 'Programa 1', label: 'Programa 1' },
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
            programaValue: 'Programa 1',

        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (selectedOption) => {
        
            this.setState({
                value: selectedOption,
                programaValue: selectedOption.value,
            });
    }
    render() {
        return (
            <div className="contenedor">
                <div className="">
                    <h2 className="titulo">Formacion Academica en Posgrado</h2>

                    <div className="input-dato">
                        <label className="label-dato">
                            CODIGO DE ESTUDIANTE:
                            <input type="text" name="name" value={this.state.codigo} disabled />
                        </label>
                        <label className="label-dato">
                            PROGRAMA CURSADO:
                            <div className="SplitPane row">
                                <div className="col-xs-12">
                                    <div className="col-xs-8">
                                        <Select value={this.state.value} onChange={this.handleChange} options={opciones} clearable={false}/>
                                    </div>
                                </div>
                            </div>
                        </label>
                        <label className="label-dato">
                            SEMESTRE ACADEMICO QUE INGRESO:
                            <input type="text" name="name" required />
                        </label>
                        <label className="label-dato">
                            SEMESTRE ACADEMICO QUE EGRESO:
                            <input type="text" name="name" required />
                        </label>
                        <label className="label-dato">
                            SITUACION ACADEMICA ACTUAL:
                            <input type="text" name="name" required />
                        </label>
                        <br></br>
                        <input type="submit" value="Enviar" className="btn right" required />
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

                                    {this.state.columnas.map((col, index) =>
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