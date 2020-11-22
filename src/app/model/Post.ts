export default class Post {
    constructor(
        public id:string,
        public firstName:string,
        public lastName:string,
        public image:string,
        public content:string,
        public likes:number,
        public comments:number,
        public shared:number,
        public views:number
    ){
        
    }
}