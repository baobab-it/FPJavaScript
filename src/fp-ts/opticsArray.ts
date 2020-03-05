import { array } from "fp-ts/lib/Array";
import { fromTraversable, Lens } from "monocle-ts/lib/index";

interface User {
    name: string;
    login: string;
    posts: Post[];
}

interface Post {
    title: string;
    tags: string[];
    comments: PostComment[];
    attachment?: Blob;
}

interface PostComment {
    date: Date;
    text: string;
    authorName: string;
    attachment?: Blob;
}

const exampleData: User[] = [
    {
        name: "Yuriy",
        login: "yuriy",
        posts: [
            {
                title: "First post",
                tags: ["first", "post"],
                comments: [
                    {
                        date: new Date(2019, 0, 1, 0, 0, 0, 0),
                        text: "Cool post!",
                        authorName: "Vasiliy"
                    },
                    {
                        date: new Date(2019, 0, 2, 0, 0, 0, 0),
                        text: "and even better comment, my dude",
                        authorName: "Egor"
                    }
                ]
            }
        ]
    }
];

const capitalizeWord = (word: string) =>
    word[0].toLocaleUpperCase() + word.substr(1).toLocaleLowerCase();
const capitalize = (title: string) =>
    title
        .split(" ")
        .map(capitalizeWord)
        .join(" ");

////////////////////////
// Non-optics example //
////////////////////////
const modifiedDataImperative = exampleData.map(user => ({
    ...user,
    posts: user.posts.map(post => ({
        ...post,
        ...(post.attachment != null ? { attachment: post.attachment } : {}),
        comments: array.map(post.comments, comment => ({
            ...comment,
            ...(comment.attachment != null
                ? { attachment: comment.attachment }
                : {}),
            text: capitalize(comment.text)
        }))
    }))
}));

console.dir({ modifiedDataImperative }, { depth: null });

////////////////////
// Optics example //
////////////////////

const usersTraversal = fromTraversable(array)<User>();
const postsLens = Lens.fromProp<User>()("posts");
const postTraversal = fromTraversable(array)<Post>();
const comments = Lens.fromProp<Post>()("comments");
const commentTraversal = fromTraversable(array)<PostComment>();
const textLens = Lens.fromProp<PostComment>()("text");

const usersTextTraversal = usersTraversal
    .composeLens(postsLens)
    .composeTraversal(postTraversal)
    .composeLens(comments)
    .composeTraversal(commentTraversal)
    .composeLens(textLens);

const modifiedDataOptics = usersTextTraversal.modify(capitalize)(exampleData);

console.dir({ modifiedDataOptics }, { depth: null });
