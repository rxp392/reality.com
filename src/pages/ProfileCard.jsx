import  {   
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  SlideFade,
  Badge}  from '@chakra-ui/react'

// import { useSession } from "next-auth/react";

export default function ProfileCard() {

  return (
    <SlideFade in={true} offsetY="20px">
      <Center py={6}>
        <Box
          maxW={"320px"}
          bg={"white"}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            src='my-app/src/assets/2.jpg'
            bg={"red"}
            color={"white"}
            mb={4}
            pos={"relative"}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {/* isUser ? `${name} (you)` : name */}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            @{'hi'}
          </Text>
          <Text textAlign={"center"} color={"gray.700"}>
            {/* {isUser ? "You" : `${name}`} {isUser ? "have" : "has"} <br /> asked{" "}
            <span style={{ fontWeight: "bold", color: "#0a304e" }}>
              {totalQuestions}
            </span>{" "}
            question{totalQuestions === 1 ? "" : "s"},<br /> answered{" "}
            <span style={{ fontWeight: "bold", color: "#0a304e" }}>
              {answers.length}
            </span>{" "}
            question
            {answers.length === 1 ? "" : "s"}, <br /> and belong
            {isUser ? "" : "s"} to{" "}
            <span style={{ fontWeight: "bold", color: "#0a304e" }}>
              {courses.length}
            </span>{" "}
            course
            {courses.length === 1 ? "" : "s"}. */}
          </Text>

          <Stack
            align={"center"}
            justify={"center"}
            direction={"row"}
            flexWrap="wrap"
            gap={1}
            mt={6}
          >
            <Badge
              px={2}
              py={1}
              fontWeight={"400"}
              rounded="md"
              bg="red"
              color="white"
            >
              {'Premium'} Plan
            </Badge>
            <Badge
              px={2}
              py={1}
              fontWeight={"400"}
              rounded="md"
              bg="red"
              color="white"
            >
              {/* Created {new Date(accountCreated).toLocaleDateString("en-us")} */}
            </Badge>
          </Stack>
        </Box>
      </Center>
    </SlideFade>
  );
}
