export interface User {
  name: string;
  age: number;
  hobby: string;
}

const Card = ({ name, age, hobby }: User) => {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{hobby}</li>
      </ul>
    </div>
  );
};

export default Card;
