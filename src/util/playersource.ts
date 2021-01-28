import { Player } from "../types/Player"

export interface PlayersInterface {
    getPlayers() : Promise<Player[]>;
}


