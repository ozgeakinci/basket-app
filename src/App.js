import { Container, SimpleGrid, List, ThemeIcon, Input } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

let storeItems = [
  { name: "Küpe", price: 20 },
  { name: "Bileklik", price: 15 },
  { name: "Halhal", price: 25 },
];

const App = () => {
  const [basketItems, setBasketItems] = useState([]);
  const [value , setValue] = useState('')

  const filteredItems = basketItems.filter(item => item.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) >= 0)

  return (
    <Container>
      <SimpleGrid cols={3} className="Padding">
        {storeItems.map(({ name, price }) => (
          <Card
            key={name}
            name={name}
            price={price}
            onAdd={() => setBasketItems([...basketItems, { name }])}
          />
        ))}
      </SimpleGrid>
      <Input.Wrapper label="Filter" onChange={(e)=>setValue(e.target.value)}>
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
