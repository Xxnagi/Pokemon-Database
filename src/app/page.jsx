import PokemonList from "./component/PokemonList";
import Container from "./component/util/Container";

export default function Home() {
  return (
    <>
      <Container>
        <PokemonList />
      </Container>
    </>
  );
}
