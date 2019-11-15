import { User } from "./models/User";
import { Post } from "./models/Post";
import { UserComment } from "./models/Comment";

export const user: User = {
    id: "123",
    name: "MarioFrigi",
    username: "@MarioFrigi",
    description: "Algunos copian, otros imitan, pero mi pedazo de twitter no se puede igualar.",
    email: "mariofrigi@gmail.com",
    location: "Madriz, Spain",
    webpage: "www.youtube.com/user/mariofrigi",
    picture: "https://yt3.ggpht.com/a/AGF-l79HsXrKv5vLONH0SjrLpNdHYSsWFeq7VpHmVg=s900-mo-c-c0xffffffff-rj-k-no",
    backImage: "https://png.pngtree.com/thumb_back/fw800/back_pic/05/07/43/02597581402a11d.jpg",
    followers: 3.791,
    followed: 172,
    tweets: 1.451
};

export const allUsers: User[] = [user];

export const comment: UserComment = { id: "321", content: "LOL", userId: "123" };

export const allComments: UserComment[] = [comment];

export const post: Post = {
    id: "54345",
    timestamp: new Date(),
    userId: "123",
    content: "Me han amenazao, no saben con quien se meten...",
    comments: [comment],
    likes: [user],
    picture: "https://yt3.ggpht.com/a/AGF-l79HsXrKv5vLONH0SjrLpNdHYSsWFeq7VpHmVg=s900-mo-c-c0xffffffff-rj-k-no"
};

export const allPosts: Post[] = [post];
