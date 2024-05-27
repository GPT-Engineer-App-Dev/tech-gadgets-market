import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, HStack, Input, InputGroup, InputRightElement, IconButton, Select } from "@chakra-ui/react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 699,
    image: "https://via.placeholder.com/150",
    brand: "BrandA",
    rating: 4,
  },
  {
    id: 2,
    name: "Laptop",
    price: 999,
    image: "https://via.placeholder.com/150",
    brand: "BrandB",
    rating: 5,
  },
  {
    id: 3,
    name: "Headphones",
    price: 199,
    image: "https://via.placeholder.com/150",
    brand: "BrandC",
    rating: 3,
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 299,
    image: "https://via.placeholder.com/150",
    brand: "BrandD",
    rating: 4,
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = !priceFilter || (priceFilter === "0-199" && product.price <= 199) || (priceFilter === "200-499" && product.price >= 200 && product.price <= 499) || (priceFilter === "500-999" && product.price >= 500 && product.price <= 999) || (priceFilter === "1000+" && product.price >= 1000);
    const matchesBrand = !brandFilter || product.brand === brandFilter;
    const matchesRating = !ratingFilter || product.rating >= parseInt(ratingFilter);
    return matchesSearchQuery && matchesPrice && matchesBrand && matchesRating;
  });

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

      <Box as="section" bg="gray.100" p={4} mb={6}>
        <Heading as="h3" size="lg" mb={4}>Filter Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Box>
            <Text mb={2}>Price</Text>
            <Select placeholder="Select price" value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
              <option value="0-199">$0 - $199</option>
              <option value="200-499">$200 - $499</option>
              <option value="500-999">$500 - $999</option>
              <option value="1000+">$1000+</option>
            </Select>
          </Box>
          <Box>
            <Text mb={2}>Brand</Text>
            <Select placeholder="Select brand" value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)}>
              <option value="BrandA">Brand A</option>
              <option value="BrandB">Brand B</option>
              <option value="BrandC">Brand C</option>
              <option value="BrandD">Brand D</option>
            </Select>
          </Box>
          <Box>
            <Text mb={2}>Ratings</Text>
            <Select placeholder="Select rating" value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
              <option value="1">1 Star & Up</option>
              <option value="2">2 Stars & Up</option>
              <option value="3">3 Stars & Up</option>
              <option value="4">4 Stars & Up</option>
              <option value="5">5 Stars</option>
            </Select>
          </Box>
        </SimpleGrid>
      </Box>

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
                  ${product.price}
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