import { HeadshotInterface } from "./headshot"
const baseUrl = "https://legacy.baseballprospectus.com/card/images/headshot_$id$.jpg"

export class BaseballProspectusHelper implements HeadshotInterface{
    getHeadshotUrl(bpId: string): string {
        return baseUrl.replace("$id$", bpId);
    }
}

export default BaseballProspectusHelper