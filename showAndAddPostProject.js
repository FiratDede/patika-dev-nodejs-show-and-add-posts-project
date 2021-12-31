let allPosts = [{ title: "Title 1", content: " Content 1", author: "Author 1" }, { title: "Title 2", content: " Content 2", author: "Author 2" }];
async function addPost(title, content, author) {
    allPosts.push({ title: title, content: content, author: author });
    return allPosts;
}
function showPosts() {
    console.log("All Posts:")
    allPosts.map((post) => {
        console.log("title: " + post.title + " content: " + post.content + " author: " + post.content + ".");
    })

}
async function main() {
    try {
        showPosts();
        await addPost("Title 3","Content 3","Author 3");
        showPosts();

    }
    catch (error) {
        console.log(error);

    }
}
main();