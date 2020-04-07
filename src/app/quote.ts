export class Quote {
    public upvote:number;
    public downvote:number;
    public showQuoteDetails:boolean;
    constructor(public id:number, public quote:string, public author:string, public publisher:string, public completeDate:Date){
        this.showQuoteDetails = false;
    }

}
