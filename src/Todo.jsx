import {
  Heading,
  VStack,
  Checkbox,
  HStack,
  Button,
  Input,
  FormControl,
  FormHelperText,
} from '@chakra-ui/react';
import { useState } from 'react';

function Todo() {
  const [ value, setValue ] = useState('');
  const [ items, setItems ] = useState([
    'My item 1',
    'My item 2',
  ]);
  return (
    <VStack spacing={8}>
      <Heading>
        My Todo App
      </Heading>
      <HStack
        onSubmit={(event) => {
          event.preventDefault();
          setItems([
            ...items,
            value,
          ]);
          setValue('');
          return false;
        }}
        align='start'
        as='form'
      >
        <FormControl>
          <Input
            desc
            onChange={(event) => {
              setValue(event.currentTarget.value);
            }}
            value={value}
          />
          <FormHelperText>Must be atleast 3 characters long</FormHelperText>
        </FormControl>
        <Button disabled={value.length < 3} type='submit'>
          Create Item
        </Button>
      </HStack>
      <VStack spacing={5}>
        {
          items.map((item, key) => (
            <Checkbox
              onChange={() => {
                const itemsClone = [ ...items ];
                itemsClone.splice(key, 1);
                setItems(itemsClone);
              }}
              isChecked
              key={key}
              defaultChecked
            >
              {item}
            </Checkbox>
          ))
        }
      </VStack>
    </VStack>
  );
}

export default Todo;