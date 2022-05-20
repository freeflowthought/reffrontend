import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";

export const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useHotkeys("cmd+k", () => {
    inputRef.current?.focus();
  });
  return (
    <InputGroup maxW="800px" size="md">
      <Input ref={inputRef} pr="4.5rem" placeholder="Search jobs" />
      <InputRightElement width="4.5rem">
        <Button h="100%" size="sm">
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
