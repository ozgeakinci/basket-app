import { Card, Image, Text, Button, Group, } from "@mantine/core";

const CardComponent = ({ name, onAdd, price, src }) => {
  return (
    <div>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src ={ `./assets/images/${src}.jpg`}
            height={200}
            alt="Norway"
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{name}</Text>
          {/* <Badge color="pink" variant="light">
            {price}
          </Badge> */}
        </Group>

        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={onAdd}
        >
          Ekle
        </Button>
      </Card>
    </div>
  );
};

export default CardComponent;
