const Card = ({ id, title, image, category }) => {
  console.log(title);
  return (
    <div key={id} className="card">
      <img src={image} alt={title} className="image"/>
      <div>
        <text className="text"> Title: {title}</text>
        <span className="catagory"> Catagory: {category}</span>
      </div>
    </div>
  );
};

export default Card;
