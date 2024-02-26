import './Card.css'
const Card = ({selectActors, remaing, totalCredit}) => {
    console.log(selectActors)
    return (
        <div> 
            <h2 className='text'>Credit Hour Remaining:{remaing}</h2>
            <hr />
            <h3>Course Name</h3>
        {selectActors.map((actor) => (
            <li key={actor.id}>{actor.coursename}</li>
        ))}
        <hr />
            <h3>Total Credit Hour:{totalCredit}</h3>
            <hr />
        </div>
    );
};

export default Card;