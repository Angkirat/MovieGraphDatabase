export class EntertainmentChannel {
    type!: string;
    name!: string;
    id!: string;
    photo_url!: string;
    genre!: string;

    constructor(type: string, name: string, id: string, genre: string, photo_url: string) {
        this.type = type;
        this.name = name;
        this.id = id;
        this.photo_url = photo_url;
        this.genre = genre
    }
}
