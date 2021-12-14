import React, { useState } from 'react';
import Utils from '../../Utils/Index'

import {MachineList} from '../../components/MachineList/index'
import {MachineView} from '../../components/MachineView/index'
import {Modal} from '../../components/Modal/'
import { reload } from '../..';

import SVGBackground from '../../Assets/undraw_startup_life_re_8ow9.svg'
import './styles.css'


function App() {
  const [data, setData] = useState({})
  const [n, setN] = useState(0)
  const [machinesNames, setMachinesNames] = useState([])
  async function search(){
    Utils.checkInputs()
    
    const data = await Utils.processUserData() 
    const machinesNames: any = Utils.getMachinesNames([...data.machines])
    await setData(data)
    await setMachinesNames(machinesNames)
    
    Utils.closeModal()
    reload()
  }

  function changeMachine(n: number){
    setN(n)
    reload()
  }
  
  //<img id='BackgroundSVG' src={SVGBackground} alt="Imagem de background para estilização do site" />
  return (
    <div id='Background'>
      <button id='changeUserButton' onClick={Utils.changeUser}>Mudar usuário</button>
      <section id='sectionPage'>
        <MachineView data={data} id={n}/>
        <MachineList headerText='Lista de Máquinas' call={changeMachine} itens={machinesNames}/>
      </section>
      <Modal search={search} />
    </div>
  );
};

export default App;
