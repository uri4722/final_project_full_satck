import DeleteComment from "./DeleteComment";

export default function DisplayComments({ comment, setComments }) {
    // console.log(comment);
    return <div className="commentDiv" >
        <br />
        <h3>{comment.name}</h3>
        <h5>{comment.email}</h5>
        <p>{comment.body}</p>

        <DeleteComment commentId={comment.comments_id} setComments={setComments} />
    </div>
}