import {
  Container,
  SimpleGrid,
  List,
  ThemeIcon,
  Input,
  Button,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

let storeItems = [
  { name: "Kamera", src: "camera", price: 20 },
  { name: "Kaktüs", src: "flowers", price: 15 },
  { name: "Apple Akıllı Saat", src: "iwatch", price: 25 },
  { name: "Ruj", src: "lipstick", price: 25 },
  { name: "Hoparlör", src: "speaker", price: 25 },
  { name: "Saat", src: "watch", price: 25 },
];

const App = () => {
  const [basketItems, setBasketItems] = useState([]);
  const [value, setValue] = useState("");

  const filteredItems = storeItems.filter(
    (item) =>
      item.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) >= 0
  );

  return (
    <Container>
      <SimpleGrid>
        <Input.Wrapper label="Filter">
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
          <Button onClick={() => setValue("")}>Delete</Button>
        </Input.Wrapper>
      </SimpleGrid>

      <SimpleGrid cols={3} className="Padding">
        {filteredItems.map(({ name, src, price }) => (
          <Card
            key={name}
            name={name}
            src={src}
            price={price}
            onAdd={() => setBasketItems([...basketItems, { name }])}
          />
        ))}
      </SimpleGrid>

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
        {basketItems.map(({ name }, index) => (
          <List.Item key={index}>{name}</List.Item>
        ))}
      </List>
    </Container>
  );
};

export default App;
