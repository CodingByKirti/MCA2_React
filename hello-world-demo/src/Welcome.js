export const Welcome = ({ fname, lname }) => {
  return (
    <>
      <h1>
        Welcome {fname} {lname}
      </h1>
    </>
  );
};

const greet = (props) => {
  const { fname, lname } = props;
  return (
    <>
      <h1>
        {" "}
        Greetings {fname} {lname}{" "}
      </h1>
    </>
  );
};
