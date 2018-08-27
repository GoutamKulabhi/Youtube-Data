//declaring class

class YoutubeVideo{
    public videoTitle: string;
    public views: number;
    public publisher: string;
    public subscribers: number;
    public comments: number;
    public category: string;
    public likes: number;
    public dislikes: number;
    public shares: number;

//initializing propertis of a class

    constructor(videoTitle:string, views:number, publisher: string, subscribers:number, comments:number,
        category: string, likes:number, dislikes:number, shares:number){

            this.videoTitle = videoTitle;
            this.views = views;
            this.publisher = publisher;
            this.subscribers = subscribers;
            this.comments = comments;
            this.category = category;
            this.likes = likes;
            this.dislikes = dislikes;
            this.shares = shares;
        } //constructor declaration ends here
    
    getTitleName = ()=>{
        return this.videoTitle;
    }
    getNumberOfViews = ()=>{
        return this.views;
    }
    getPublisherName = ()=>{
        return this.publisher;
    }
    getNumberOfSubscribers = ()=>{
        return this.subscribers;
    }
    getNumberOfComments = ()=>{
        return this.comments;
    }
    getCategoryType = ()=>{
        return this.category;
    }
    getNumberOfLikes = ()=>{
        return this.likes;
    }
    getNumberOfDislikes = ()=>{
        return this.dislikes;
    }
    getSharedCount = ()=>{
        return this.shares;
    }
    getPinnedComment = ()=>{
        console.log("Pinned Comment is a must read for everybody");
    }
    getNumberOfHeartsByPublisher = ()=>{
        console.log("There are so many hearts out there");
    }
    getPreviousUploadedVideo =()=>{
        console.log("Must watch the previous one");
    }
  
}

let mostPopularVideo = new YoutubeVideo("Land Of Dragons", 350000, "Goutam Kulabhi", 450000, 1100, "Travel",330000, 20000, 150000);
console.log("Video Title is" + " " + mostPopularVideo.getTitleName());
console.log("Number of Views is" + " " + mostPopularVideo.views);
console.log("The video is published by" + " " + mostPopularVideo.publisher);
console.log("Number of Subscribers are" + " " + mostPopularVideo.subscribers);
console.log("Number of Comments are" + " " + mostPopularVideo.comments);
console.log("This video fall under" + " " + mostPopularVideo.category + "category");
console.log("Total number of likes are" + " " + mostPopularVideo.likes);
console.log("Total number of dislikes are" + " " + mostPopularVideo.dislikes);
console.log("Number of people who shared this video are" + " " + mostPopularVideo.views);
mostPopularVideo.getPinnedComment();
mostPopularVideo.getNumberOfHeartsByPublisher();
mostPopularVideo.getPreviousUploadedVideo();