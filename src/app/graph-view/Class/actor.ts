export class Actor {
    id!: string;
    name!: string;
    image!: string;
    birthday!: string;

    constructor(id: string, name: string, birthday: string, image: string) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.birthday = birthday;
    }
}