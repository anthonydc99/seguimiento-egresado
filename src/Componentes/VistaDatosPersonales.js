import React from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { browserHistory } from 'react-router-3';


class VistaDatosPersonales extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            codigo: this.props.codigo,
            apePaterno: "",
            apeMaterno: "",
            nombre: "",
            fechaNacimiento: "",
            domicilioActual : "",
            distrito: "",
            nTelefFijo: "",
            nTelefCelular: "",
            correoPersonal: "",
            correoLaboral: "",
        }
    }
    //RENDERIZADO INFINITO
    componentDidMount(){
        this.setState({
            apePaterno: "Diaz",
            apeMaterno: "Carpio",
            nombre: "Anthony Moisés",
            fechaNacimiento: "13-05-1999",
            domicilioActual : "",
            distrito: "",
            nTelefFijo: "",
            nTelefCelular: "",
            correoPersonal: "",
            correoLaboral: "",
        });
    }
    setField (e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div className="contenedor" style={{ height: window.innerHeight - 90 }}>
                <div className="">
                    <h2 className="titulo">Datos Personales</h2>
                    <div className="input-dato">
                        <label className="label-dato">
                            N° DE DOCUMENTO DE IDENTIDAD (DNI O CARNE DE EXTRANJERÍA):
                            <input type="text" name="name" value={this.state.codigo} disabled/>
                        </label>
                        <label className="label-dato">
                            APELLIDO PATERNO:
                            <input type="text" name="name" value={this.state.apePaterno} disabled/>
                        </label>
                        <label className="label-dato">
                            APELLIDO MATERNO:
                            <input type="text" name="name" value={this.state.apeMaterno} disabled/>
                        </label>
                        <label className="label-dato">
                            NOMBRES:
                            <input type="text" name="name" value={this.state.nombre} disabled/>
                        </label>
                        <label className="label-dato">
                            FECHA DE NACIMIENTO:
                            <input type="text" name="name" value={this.state.fechaNacimiento} disabled/>
                        </label>
                        <label className="label-dato">
                            DOMICILIO ACTUAL:
                            <input type="text" name="domicilioActual" value={this.state.domicilioActual} onChange={(e)=>this.setField(e)} required/>
                        </label>
                        <label className="label-dato">
                            DISTRITO:
                            <input type="text" name="distrito" value={this.state.distrito} onChange={(e)=>this.setField(e)} required/>
                        </label>
                        <label className="label-dato">
                            N° TELÉFONO FIJO:
                            <input type="number" name="nTelefFijo" value={this.state.nTelefFijo} onChange={(e)=>this.setField(e)} required/>
                        </label>
                        <label className="label-dato">
                            N° TELÉFONO CELULAR:
                            <input type="number" name="nTelefCelular" value={this.state.nTelefCelular} onChange={(e)=>this.setField(e)} required/>
                        </label>
                        <label className="label-dato">
                            CORREO ELECTRÓNICO PERSONAL:
                            <input type="email" name="correoPersonal" value={this.state.correoPersonal} onChange={(e)=>this.setField(e)} required/>
                        </label>
                        <label className="label-dato">
                            CORREO ELECTRÓNICO LABORAL:
                            <input type="email" name="correoLaboral" value={this.state.correoLaboral} onChange={(e)=>this.setField(e)} required/>
                        </label>
                        <input type="submit" value="Enviar" className="btn right"/>
                    </div>

                </div>
            </div>
        );
    }
}

export default VistaDatosPersonales;