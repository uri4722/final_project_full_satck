
export default function DisplayComments({ comment }) {

    return <div className="commentDiv" >
        <br />
        <h3>{comment.name}</h3>
        <h5>{comment.email}</h5>
        <p>{comment.body}</p>

    </div>
}