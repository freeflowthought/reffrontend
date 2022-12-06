import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useStore } from "store/index";

export const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { indexController } = useStore();
  useHotkeys("cmd+k", () => {
    inputRef.current?.focus();
  });
  return (
    <InputGroup maxW="800px" size="md">
      <Input
        ref={inputRef}
        borderRadius="10px"
        pr="4.5rem"
        placeholder="Search jobs"
      />
      <InputRightElement width="4.5rem">
        <Button
          h="100%"
          size="sm"
          onClick={() => {
            if (inputRef.current?.value) {
              indexController.seachJobs({
                tags: [inputRef.current?.value],
              });
            }
          }}
        >
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
