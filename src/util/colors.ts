import Team, { Atlanta_Braves, Detroit_Tigers, LosAngeles_Angels, SanDiego_Padres, Washington_Nationals} from "./teams"

export type Color = {
    primary: string;
    secondary: string;
}

let colors = new Map<Team,Color>()
colors.set(Atlanta_Braves, {primary:"#CE1141", secondary:"#13274F"} )
colors.set(Detroit_Tigers, {primary:"#0C2340", secondary:"#FA4616"} )
colors.set(LosAngeles_Angels, {primary:"#003263", secondary:"#BA0021"} )
colors.set(SanDiego_Padres, {primary:"#2F241D", secondary:"#FFC425"} )
colors.set(Washington_Nationals, {primary:"#AB0003", secondary:"#14225A"} )



class Colors {
    
    static getColor(team:Team): Color {
        return colors.get(team)
    }
    
    static getPrimary(team:Team): string {
        return colors.get(team).primary
    }

    static getSecondary(team:Team): string {
        return colors.get(team).secondary
    }
}

export default Colors