import { Container, SimpleGrid, List, ThemeIcon, Input } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

let storeItems = [
  { name: "Kamera", src: "camera", price: 20 },
  { name: "Kaktüs", src:"flowers",  price: 15 },
  { name: "Apple Akıllı Saat", src :"iwatch" , price: 25 },
  { name: "Ruj", src :"lipstick" , price: 25 },
  { name: "Hoparlör", src :"speaker" , price: 25 },
  { name: "Saat", src :"watch" , price: 25 },
];

const App = () => {
  const [basketItems, setBasketItems] = useState([]);
  const [value, setValue] = useState("");

  const filteredItems = basketItems.filter(
    (item) =>
      item.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) >= 0
  );

  return (
    <Container>
      <SimpleGrid cols={3} className="Padding">
        {storeItems.map(({ name, src, price }) => (
          <Card
            key={name}
            name={name}
            src={src}
            price={price}
            onAdd={() => setBasketItems([...basketItems, { name }])}
          />
        ))}
      </SimpleGrid>
      <Input.Wrapper label="Filter" onChange={(e) => setValue(e.target.value)}>
        <Input />
      </Input.Wrapper>

      <List
        className="Padding"
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck size="1rem" />
          </ThemeIcon>
        }
      >
        {filteredItems.map(({ name }, index) => (
          <List.Item key={index}>{name}</List.Item>
        ))}
      </List>
    </Container>
  );
};

export default App;
