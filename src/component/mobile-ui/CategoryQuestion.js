import Dropdown from "./Dropdown";

const CategoryQuestion = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <Dropdown />
    </div>
  );
};

export default CategoryQuestion;
