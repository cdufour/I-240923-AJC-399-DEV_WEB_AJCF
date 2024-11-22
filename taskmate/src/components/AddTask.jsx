function AddTask(props) {
    return (
        <section className="addTask">
            <form onSubmit={props.handleSubmit}>
                <input type="text" />
                <button type="submit">{ props.test }</button>
            </form>
        </section>
    )
}

export default AddTask;