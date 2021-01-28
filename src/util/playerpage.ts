import {Player} from "../types/Player"

export interface PlayerPageInterface {
    getPlayerPage(player:Player): string;
}

// export default PlayerPageInterface