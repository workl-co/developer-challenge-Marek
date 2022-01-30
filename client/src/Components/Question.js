const Question = props => {
    const { title } = props.data;

    return (
        <div className="question">
            <h5>{title}</h5>
        </div>
    );
}

export default Question;