import { useSelector, useDispatch } from "react-redux";
import { Container, Header, CardGroup, Card, Button } from "./styles";

const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  console.log(products);

  const mapProducts = products.map((value) => {
    return (
      <Card key={value.id}>
        <img src={value.img} alt=""/>
        <span>{value.product}</span>
        <Button>adding</Button>
      </Card>
    );
  });

  return (
    <Container>
        <Header>
            home
        </Header>
      <CardGroup>{mapProducts}</CardGroup>
    </Container>
  );
};

export default Home;
