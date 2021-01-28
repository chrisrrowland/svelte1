class Team {
    id: string
    name: string;

    constructor(id:string, name:string) {
        this.id = id;
        this.name = name;
    }
}

export const Atlanta_Braves = new Team("atl", "braves")
export const Detroit_Tigers = new Team("det", "tigers")
export const LosAngeles_Angels = new Team("laa", "angels")
export const SanDiego_Padres = new Team("sdp", "padres")
export const Washington_Nationals = new Team("was", "nationals")



export default Team