class Team {
    id: string
    name: string;

    constructor(id:string, name:string) {
        this.id = id;
        this.name = name;
    }
}

export const Atlanta_Braves = new Team("atl", "Braves")
export const Detroit_Tigers = new Team("det", "Tigers")
export const LosAngeles_Angels = new Team("laa", "Angels")
export const SanDiego_Padres = new Team("sdp", "Padres")
export const Washington_Nationals = new Team("was", "Nationals")



export default Team