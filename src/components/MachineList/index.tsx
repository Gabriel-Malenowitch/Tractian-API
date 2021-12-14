import React from "react";
import './styles.css'

type Props = {
    headerText: string,
    itens: string[],
    call: any
}

export function MachineList({headerText, itens, call}: Props){
    return(
        <>
            <table id="MachineList">
                <thead>
                    <tr>
                        <th>{headerText}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itens.map((item, k)=>(
                            <tr key={k}>
                                <th>
                                    <button className="machineListButton" onClick={()=>call(k)}>{item}</button>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div id="footer"></div>
        </>
    )
}