type Props = {};
export const List = (props: Props) => {
  let data = true;
  return (
    <>
      <ul>
        <li>list item1</li>
        <li>list item2</li>
        <li>list item3</li>
      </ul>
      <p
        style={{
          color: "white",
          backgroundColor: data ? "purple" : "yellow",
          padding: "15px",
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, commodi
        tempora rem dolore saepe voluptatem mollitia ab! Tenetur tempora
        dolorem, ex iusto itaque totam neque perspiciatis eligendi, id quos
        unde!
      </p>
    </>
  );
};
// export default List;
