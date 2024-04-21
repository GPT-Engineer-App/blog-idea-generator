// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { FaLightbulb, FaPlus } from "react-icons/fa";

const Index = () => {
  const [interest, setInterest] = useState("");
  const [ideas, setIdeas] = useState([]);
  const toast = useToast();

  const generateIdeas = () => {
    if (!interest) {
      toast({
        title: "No interest provided",
        description: "Please enter an interest to generate blog ideas.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newIdeas = [`How to get started with ${interest}`, `The ultimate guide to ${interest}`, `Top 10 myths about ${interest}`, `${interest} trends to watch in 2023`, `Beginner mistakes in ${interest} and how to avoid them`];

    setIdeas(newIdeas);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Blog Idea Generator
        </Heading>
        <Text>Enter your interest to generate blog post ideas.</Text>
        <Stack direction={{ base: "column", md: "row" }} width="full">
          <Input placeholder="Enter your interest (e.g., cooking, tech, gardening)" value={interest} onChange={(e) => setInterest(e.target.value)} />
          <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={generateIdeas}>
            Generate
          </Button>
        </Stack>
        <Box width="full">
          {ideas.length > 0 && (
            <VStack spacing={4} align="stretch">
              {ideas.map((idea, index) => (
                <Box key={index} p={4} shadow="md" borderWidth="1px" borderRadius="md">
                  <FaLightbulb style={{ marginRight: "8px", verticalAlign: "middle" }} />
                  {idea}
                </Box>
              ))}
            </VStack>
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
