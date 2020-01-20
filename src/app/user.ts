export class User {
    constructor(
        public id: number,
        public name: string,
        public username: string,
        public bio: string,
        public avatarUrl: string,
        public followers: number,
        public following: number,
        public githubUrl: string
        ) { }
}
