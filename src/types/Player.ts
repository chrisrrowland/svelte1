import Team from "../util/teams"

export class Player {
    id: string
    bpid: string
    firstName: string
    lastName: string
    position: string
    team: Team

    constructor(id:string, bpid:string, firstName:string, lastName:string, position:string, team:Team) {
        this.id = id
        this.bpid = bpid
        this.firstName = firstName
        this.lastName = lastName
        this.position = position
        this.team = team
    }

}
