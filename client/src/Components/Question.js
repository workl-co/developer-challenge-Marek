const Question = props => {
    const title = props.data;

    return (
        <div>
            <h5>{title}</h5>
        </div>
    );
}

export default Question;