
function DisplayForm({ logInputs, message, handleSubmit, handleChange }) {
    const styleMessage = {
        color: message.type === 'failed' ? 'red' : "LightSkyBlue",
        fontSize: 'larger',
    }
    const labels = ["User Name", 'Password', "Remmber Me"]
    const keys = ["name", 'password', "rememberMe"]

    return <div className="loginDiv">
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {message && <h4 style={styleMessage} className="message">{message.body}</h4>}
            {labels.map((label, index) => {
                return <label key={label}>
                    {label}
                    <input
                        type={index === 2 ? "checkbox" : "text"}
                        name={keys[index]}
                        placeholder={label}
                        value={index !== 2 && logInputs[keys[index]]}
                        checked={index === 2 && logInputs[keys[index]]}
                        onChange={handleChange} />
                </label>

            })}
            <button type="submit">Login</button>
        </form>
    </div>
}

export default DisplayForm