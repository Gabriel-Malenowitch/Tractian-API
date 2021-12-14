import links from "../Routes/API"

const Utils = {
    changeUser: ()=>{
        window.location.reload()
    },
    checkInputs: ()=>{
        const email = document.getElementById('email') as HTMLInputElement
        
        if(email.value){
            const regExp = /.+@([a-z]+\.)+.+/
            if(regExp.test(email.value as string)){
               return true 
            }else{
                alert("E-mail inválido")
                return false
            }
        }else{
            alert("Por favor preencha o campo de email")
            return false
        }
    },
    closeModal: async()=>{
        const modalDiv = document.getElementById('modalDiv') as HTMLDivElement
        modalDiv.className = 'invisible'
    },
    processUserData: async ()=>{
        const users = await Tools.getData(links.users)
        const assets = await Tools.getData(links.assets)
        const companys = await Tools.getData(links.companies)
        const unitis = await Tools.getData(links.units)

        const userData = Tools.processUser(users)
        const companyName = Tools.foreachCompany(Number(userData.company), companys)
        const unityName = Tools.foreachCompany(Number(userData.unity), unitis)
        const MachineList = Tools.getMachineList(userData, assets)

        return {
            company: companyName,
            unity: unityName,
            machines: MachineList
        }
    },
    getMachinesNames: (db: any[])=>{
        const data: string[] = []
        db.forEach(e=>{
            data.push(e.name)
        })
        return data
    }
}

const Tools = {
    getData: async (e: string)=>{
        const data = await fetch(e)
        const json = await data.json()
        return(json)
    },
    processUser: (u: any[])=>{
        const email = document.getElementById('email') as HTMLInputElement
        let i = 0
        while (String(u[i].email) !== String(email.value)) {
            i++
        }
        return {
            name: u[i].name, 
            unity: u[i].unitId,
            company: u[i].companyId,
        }
    },
    foreachCompany: (idCompany: number, companys: any[])=>{
        let i = 0
        try {
            while (companys[i].id !== Number(idCompany)) {
                i++
            }
        } catch (error) {
            console.log(error)
        }
        return companys[i].name
    },
    getMachineList: (e: any, assets: any[])=>{
        const data: any[] = []
        assets.forEach(asset=>{
            try {
                if(Number(asset.unitId) === e.unity && Number(asset.companyId) === e.company){
                    data.push(asset)
                }
            } catch (error) {
                console.log(error)
            }
        })
        return data
    }
}

export default Utils
