import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, HStack, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: "$699",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Laptop",
    price: "$999",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Headphones",
    price: "$199",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: "$299",
    image: "https://via.placeholder.com/150",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <HStack spacing={4} alignItems="center">
          <InputGroup maxW="400px" ml="4">
            <Input
              placeholder="Search for products"
              value={searchQuery}
              onChange={handleSearch}
              bg="white"
              color="black"
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<FaSearch />}
                onClick={() => {}}
                bg="blue.800"
                color="white"
              />
            </InputRightElement>
          </InputGroup>
          <Link href="#" display="flex" alignItems="center">
            <FaUser />
            <Text ml={2}>Account</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaShoppingCart />
            <Text ml={2}>Cart</Text>
          </Link>
        </HStack>
      </Flex>

      <Box as="main" py={10}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Featured Products
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text fontSize="xl" color="blue.800">
                  {product.price}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box as="footer" bg="blue.800" color="white" py={6} textAlign="center">
        <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;