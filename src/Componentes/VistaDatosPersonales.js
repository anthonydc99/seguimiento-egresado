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
            <div className="contenedor" style={{ height: window.innerHeight-90}}>
                    <div className="">
                        <h1>Datos Personales</h1>
                        <h1>Datos Personales</h1><h1>Datos Personales</h1><h1>Datos Personales</h1><h1>Datos Personales</h1>
                        <h1>Datos Personales</h1><h1>Datos Personales</h1><h1>Datos Personales</h1><h1>Datos Personales</h1>
                        <h1>Datos Personales</h1><h1>Datos Personales</h1><h1>Datos Personales</h1>
                        <h1>Datos Personales</h1><h1>Datos Personales</h1><h1>Datos Personales</h1>

                    </div>
                </div>
        );
    }
}

export default VistaDatosPersonales;