import { Player } from "../types/Player"
import { PlayerPageInterface } from "./playerpage"

const basePlayerPageUrl = "https://www.baseball-reference.com/players/$lastInitial$/$brId$.shtml"

export class BaseballReferenceHelper implements PlayerPageInterface{
    getPlayerPage(player:Player) : string {
        return basePlayerPageUrl
            .replace("$lastInitial$", player.lastName.substring(0.1))
            .replace("$brId$", player.id)
    }
}