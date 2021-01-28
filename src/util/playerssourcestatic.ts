import { Player } from "../types/Player"
import { PlayersInterface } from "./playersource"
import { Atlanta_Braves, Detroit_Tigers, LosAngeles_Angels, SanDiego_Padres, Washington_Nationals} from "./teams"

let players = [
    {id:'acunaro01', bpid:'105454', firstName:'Ronald', lastName:'Acuna', position:'OF', team:Atlanta_Braves},
    {id:'cabremi01', bpid:'31483', firstName:'Miguel', lastName:'Cabrera', position:'DH', team:Detroit_Tigers},
    {id:'ohtansh01', bpid:'111306', firstName:'Shohei', lastName:'Ohtani', position:'P/DH', team:LosAngeles_Angels},
    {id:'troutmi01', bpid:'59432', firstName:'Mike', lastName:'Trout', position:'OF', team:LosAngeles_Angels},
    {id:'tatisfe02', bpid:'108651', firstName:'Fernando', lastName:'Tatis', position:'SS', team:SanDiego_Padres},
    {id:'sotoju01',  bpid:'107182', firstName:'Juan', lastName:'Soto', position:'OF', team:Washington_Nationals},
]

export class StaticPlayersSource implements PlayersInterface{

    getPlayers(): Promise<Player[]> {
        return new Promise(resolve => setTimeout(() => resolve(players), 1000))
    }

}