import React from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { browserHistory } from 'react-router-3';


class VistaDatosPersonales extends React.Component {
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
                    <h2 className="titulo">Datos Personales</h2>
                    <div className="input-dato">
                        <label className="label-dato">
                            N° DE DOCUMENTO DE IDENTIDAD (DNI O CARNE DE EXTRANJERÍA):
                            <input type="text" name="name" required/>
                        </label>
                        <label className="label-dato">
                            APELLIDO PATERNO:
                            <input type="text" name="name" required/>
                        </label>
                        <label className="label-dato">
                            APELLIDO MATERNO:
                            <input type="text" name="name" required/>
                        </label>
                        <label className="label-dato">
                            NOMBRES:
                            <input type="text" name="name" required/>
                        </label>
                        <label className="label-dato">
                            FECHA DE NACIMIENTO:
                            <input type="text" name="name" required/>
                        </label>
                        <label className="label-dato">
                            DOMICILIO ACTUAL:
                            <input type="text" name="name" required/>
                        </label>
                        <label className="label-dato">
                            DISTRITO:
                            <input type="text" name="name" required/>
                        </label>
                        <label className="label-dato">
                            N° TELÉFONO FIJO:
                            <input type="text" name="name" required/>
                        </label>
                        <label className="label-dato">
                            N° TELÉFONO CELULAR:
                            <input type="text" name="name" required/>
                        </label>
                        <label className="label-dato">
                            CORREO ELECTRÓNICO PERSONAL:
                            <input type="text" name="name" required/>
                        </label>
                        <label className="label-dato">
                            CORREO ELECTRÓNICO LABORAL:
                            <input type="text" name="name" required/>
                        </label>
                        <input type="submit" value="Enviar" className="btn right" required/>
                    </div>

                </div>
            </div>
        );
    }
}

export default VistaDatosPersonales;