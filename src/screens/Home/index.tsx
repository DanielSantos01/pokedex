import React, {useCallback} from 'react';

const img = require('../../assets/filter.jpeg');
import pokemons from './data/pokemons.json';
import {SearchBar} from '../../components';
import {POKEMON_TITLE_URL} from '../../constants';
import {Toast} from '@ant-design/react-native';
import {
  Container,
  Image,
  ContentContainer,
  Button,
  RowContainer,
  Filter,
  Background,
  PokemonsContainer,
  Pokemon,
  NamePlace,
  Title,
} from './styles';

const Home: React.FC = () => {
  const handleOpenSidebar = useCallback(() => {
    Toast.info('Soon');
  }, []);

  const handlePress = useCallback(() => {
    Toast.info('Soon');
  }, []);

  const renderItems = useCallback(() => {
    const items: JSX.Element[] = pokemons.map(([first, second], index) => (
      <RowContainer
        key={index.toString()}
        style={{marginBottom: 25, justifyContent: 'space-between'}}>
        <Background onPress={handlePress}>
          <Pokemon source={{uri: first.url}} />
          <NamePlace>
            <Title>{first.name}</Title>
          </NamePlace>
        </Background>

        <Background onPress={handlePress}>
          <Pokemon source={{uri: second.url}} />
          <NamePlace>
            <Title>{second.name}</Title>
          </NamePlace>
        </Background>
      </RowContainer>
    ));
    return items;
  }, []);

  return (
    <Container>
      <Image source={{uri: POKEMON_TITLE_URL}} resizeMode="contain" />

      <ContentContainer>
        <RowContainer>
          <SearchBar placeholder="Buscar Pokémon" />
          <Button onPress={handleOpenSidebar}>
            <Filter source={img} />
          </Button>
        </RowContainer>

        <PokemonsContainer>{renderItems()}</PokemonsContainer>
      </ContentContainer>
    </Container>
  );
};

export default Home;
