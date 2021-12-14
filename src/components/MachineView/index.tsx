import React from "react";
import links from "../../Routes/API";
import './styles.css'

type Props = {
    image: string
    sensor: string
    model: string
    status: string 
    healtScore: number
    specifications: any[]
    metrics: any 
} 

function check(data: any){
    return data.status === 'inAlert'? 'yellow': data.status === 'inOperation' ? 'green' : 'red'
}

export function MachineView(props: any){
    let data;
    try {
        
        data = props.data.machines[props.id]
        // const {image, sensor, model, status, healtScore, specifications, metrics}: Props = data
        return(
            <div id="MachineView">
                <div>
                    <img style={{borderColor: check(data)}} id="MachineViewImage" src={data.image} alt="Foto do equipamento" />
                </div>
                <div>
                    <p>Sensor: {data.sensors}</p>
                    <p>Modelo: {data.model}</p>
                    <p>Status: <div id="statusIndicator" style={{background: check(data)}}></div></p>
                    <br />
                    <h4>Medidas:</h4>
                    <ul>
                        <li>Tempo de atividade total da coleta: {data.metrics.totalCollectsUptime}</li>
                        <li>Tempo total: {Number(data.metrics.totalUptime).toFixed(2)}</li>
                        <li>Atualizado da ultima vez em: {data.metrics.lastUptimeAt}</li>
                    </ul>
                </div>                
            </div>
        )
    } catch (error) {
        console.log(error)
        return(
            <div></div>
        )
    }
}
