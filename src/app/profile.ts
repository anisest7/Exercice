export class Profile implements IProfile1{

    constructor (public id: number, public first_name: string, public last_name: string, public avatar: string) {
    }
}
interface IProfile1 {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
    //getNbInstance(): number;
}
