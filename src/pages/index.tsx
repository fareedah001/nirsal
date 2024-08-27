import { Box, Container, Flex, px, Text } from "@mantine/core";
import { Button } from "@mantine/core";
import React, { useRef } from "react";
import signHere from "@/assets/Sign_Here.png";
import { Image } from "@mantine/core";
import ReactSignatureCanvas from "react-signature-canvas";
import classes from "@/styles/custom.module.scss";

function index() {
  const clearSignRef = () => {
    signRef.current?.clear();
  };
  const signRef = useRef<ReactSignatureCanvas | null>(null);
  return (
    <Container size={350}>
      <Flex justify={"space-between"} direction="column">
        <Flex align="center" justify="space-between">
          <Box h={50} w={100}>
            <Image
              src={signHere.src}
              alt="no image"
              w="100%"
              h="100%"
              fit="contain"
            />
          </Box>
          <Text fz={10}>Sign ID: ABC12345XYZ</Text>
        </Flex>
        <Box></Box>
      </Flex>
      <Box px={20} py={20} bg={"#F3F4F6"}>
        <ReactSignatureCanvas
          ref={signRef}
          penColor="blue"
          canvasProps={{
            className: `${classes.memoSignContainerTwo}`,
          }}
        />
        <Box c={"gray"} mt={10}>
          <Flex justify={"space-between"}>
            <Button
              bg={"#D9D9D9"}
              c={"black"}
              fw={400}
              radius={0}
              onClick={clearSignRef}
            >
              CLEAR
            </Button>
            <Button
              variant="filled "
              bg={"#D9D9D9"}
              c={"black"}
              fw={400}
              radius={0}
            >
              SAVE
            </Button>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
}

export default index;
