//declaring class
var YoutubeVideo = /** @class */ (function () {
    //initializing propertis of a class
    function YoutubeVideo(videoTitle, views, publisher, subscribers, comments, category, likes, dislikes, shares) {
        var _this = this;
        this.getTitleName = function () {
            return _this.videoTitle;
        };
        this.getNumberOfViews = function () {
            return _this.views;
        };
        this.getPublisherName = function () {
            return _this.publisher;
        };
        this.getNumberOfSubscribers = function () {
            return _this.subscribers;
        };
        this.getNumberOfComments = function () {
            return _this.comments;
        };
        this.getCategoryType = function () {
            return _this.category;
        };
        this.getNumberOfLikes = function () {
            return _this.likes;
        };
        this.getNumberOfDislikes = function () {
            return _this.dislikes;
        };
        this.getSharedCount = function () {
            return _this.shares;
        };
        this.getPinnedComment = function () {
            console.log("Pinned Comment is a must read for everybody");
        };
        this.getNumberOfHeartsByPublisher = function () {
            console.log("There are so many hearts out there");
        };
        this.getPreviousUploadedVideo = function () {
            console.log("Must watch the previous one");
        };
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
    return YoutubeVideo;
}());
var mostPopularVideo = new YoutubeVideo("Land Of Dragons", 350000, "Goutam Kulabhi", 450000, 1100, "Travel", 330000, 20000, 150000);
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
