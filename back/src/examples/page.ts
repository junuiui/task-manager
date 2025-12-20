import { injectable, inject } from "inversify";
import { User } from "./user";

@injectable()
export class Page {
    constructor(@inject(User) private user: User) { }

    public createPage(url: string) {
        return {
            pageUrl: url,
            user: this.user,
        }
    }
}

