import { fetchDataDelete } from "../function/fetchData";
const BASEURL = 'http://localhost:7500/';

function DeleteComment({ commentId, setComments }) {
    const handelDelete = async () => {
        console.log("commentId = " +    commentId);
        const URL = `${BASEURL}comments/commentId=${commentId}`
        const del = await fetchDataDelete(URL);
        if (del) {
            setComments((prev) => {
                const updateComments = prev.filter(comment => comment.comments_id !== commentId);
                return updateComments;
            })
        }
    }



    return (<>
        <button onClick={handelDelete}>Delete</button>
    </>);
}

export default DeleteComment;