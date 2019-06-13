import React from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { browserHistory } from 'react-router-3';
import './App.css';

class VistaEjercicioProfesional extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            codigo: this.props.codigo,
            apePaterno: "",
            apeMaterno: "",
            nombre: "",
            fechaNacimiento: "",
            domicilioActual: "",
            distrito: "",
            nTelefFijo: "",
            nTelefCelular: "",
            correoPersonal: "",
            correoLaboral: "",
            entidades: Array.from([
                "PUBLICA",
                "PRIVADA",
                "OTRO :"
            ]),
            vinculoLaboral: Array.from([
                "DEPENDIENTE",
                "INDEPENDIENTE",
                "CAS",
                "POR SERVICIO",
                "OTRO :"
            ])
        }
    }
    //RENDERIZADO INFINITO
    componentDidMount() {
        this.setState({
            apePaterno: "Diaz",
            apeMaterno: "Carpio",
            nombre: "Anthony Moisés",
            fechaNacimiento: "13-05-1999",
            domicilioActual: "",
            distrito: "",
            nTelefFijo: "",
            nTelefCelular: "",
            correoPersonal: "",
            correoLaboral: "",
        });
    }
    setField(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    inputs() {
        this.state.entidades.map(function (item, i) {
            console.log('test');
            return <li key={i}>Test</li>
        })
    }

    render() {
        return (
            <div className="contenedor" style={{ height: window.innerHeight - 90 }}>
                <div className="">
                    <h2 className="titulo">EJERCICIO PROFESIONAL O DOCENTE</h2>
                    <p>Consigne el desempeño profesional o desempeño docente: Entidaden la que labora, Cargo que desempeña, tiempo (años, meses) del servicio. [El mas reciente]</p>
                    <div className="input-dato">
                        <label className="label-dato">
                            ENTIDAD:
                            <input type="text" name="name" value={this.state.codigo} disabled />
                        </label>
                        <label className="label-dato">
                            TIPO

                            {this.state.entidades.map(entidad =>
                                <label>
                                    <input name="group1" type="radio" />
                                    {entidad!="OTRO :" ? (
                                        <span>{entidad}</span>
                                    ) : (
                                        <span class="entidad-input"> {entidad}
                                        
                                        <label className="label-dato">
                                                
                                                <input type="text" name="name" />
                                            </label>    
                                        </span>         
                                                                   
                                    )}
                                </label>
                            )}
                        </label>
                        <br></br>
                        <label className="label-dato">
                            CARGO
                            <input type="text" name="name" />
                        </label>
                        <label className="label-dato">
                            PRINCIPALES FUNCIONES QUE DESEMPEÑA
                            <p>Comente las principales funciones que desempeña</p>
                            <input type="text" name="name" />
                        </label>
                        
                        <label className="label-dato">
                            TIPO DE VINCULO LABORAL

                            {this.state.vinculoLaboral.map(vinculo =>
                                <label>
                                    <input name="group1" type="radio" />
                                    {vinculo!="OTRO :" ? (
                                        <span>{vinculo}</span>
                                    ) : (
                                        <span class="entidad-input"> {vinculo}
                                        
                                        <label className="label-dato">
                                                
                                                <input type="text" name="name" />
                                            </label>    
                                        </span>         
                                                                   
                                    )}
                                </label>
                            )}
                        </label>
                        
                        <br></br>
                        <label className="label-dato">
                            N° DE AÑOS
                            <p>Indique el N° de Años que se desempeña en la Entidad</p>
                            <input type="text" name="name" />
                        </label>
                        <label className="label-dato">
                            N° DE MESES
                            <p>Indique el N° de Meses que se desempeña en la Entidad</p>
                            <input type="text" name="name" />
                        </label>
                        <label className="label-dato">
                            NOMBRE DE SU JEFE INMEDIATO SUPERIOR
                            <input type="text" name="name" />
                        </label>
                        
                        <label className="label-dato">
                            CORREO ELECTRÓNICO DE SU JEFE INMEDIATO SUPERIOR
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Enviar" className="btn right" />
                    </div>

                </div>
            </div>
        );
    }
}

export default VistaEjercicioProfesional;