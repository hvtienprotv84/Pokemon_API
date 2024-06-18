import {
  ActionIcon,
  Box,
  Button,
  Container,
  Image,
  useMantineColorScheme,
} from "@mantine/core";
import Link from "next/link";
import { MoonStars, Sun, BrandGithub } from "tabler-icons-react";

function Navbar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === "light" ? "#ef5350" : "green",
        height: "3.125rem",
      })}
    >
      <Container
        size="lg"
        sx={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image src="/pokeapi.png" width="100px" alt="logo" />

        <Box sx={() => ({ display: "flex", alignItems: "center" })}>
          <Link href="https://github.com/hvtienprotv84" passHref>
            <Button
              compact
              component="a"
              variant="white"
              sx={{ color: "black",width:"50px", height:"40px" }}
            >
              <BrandGithub width="50px" height="40px"/>
            </Button>
          </Link>

          <ActionIcon
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            variant="transparent"
            ml="md"
          >
            {dark ? <Sun size={24} /> : <MoonStars size={24} />}
          </ActionIcon>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
