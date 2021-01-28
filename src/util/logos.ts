import Team, { Atlanta_Braves, Detroit_Tigers, LosAngeles_Angels, SanDiego_Padres, Washington_Nationals } from "./teams"

let logos = new Map<Team,string>()
logos.set(Atlanta_Braves,"Atlanta_Braves")
logos.set(Detroit_Tigers,"Detroit_Tigers")
logos.set(LosAngeles_Angels,"LosAngeles_Angels")
logos.set(SanDiego_Padres,"SanDiego_Padres")
logos.set(Washington_Nationals,"Washington_Nationals")



const baseUrl:string = 'https://www.capsinfo.com/images/MLB_Team_Logos/$id$.png'

export class Logos {
    static getLogoUrl(team:Team):string {
        return baseUrl.replace("$id$", logos.get(team))
    }
}


