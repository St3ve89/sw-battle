import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { generateRandomId, getRandomItemFromArray } from '../helpers/utils';
import { ALL_PERSON } from '../queries/people';
import { ALL_STARSHIPS } from '../queries/starships';
import { IPeople, IStarShips } from '../types/types';
import Select from 'react-select';
import { dropdownValue, initialPlayerValue } from '../constants';
import { Card } from '../components/card';
import { Box, Grid } from '@material-ui/core';
import { Container, Button, CustomButtonLink, Title } from './home.style';
import * as ROUTES from '../constants/routes';

const customStyles = {
  option: (provided: any) => ({
    ...provided,
    color: 'black',
    fontWeight: 'bold',
  }),
  control: () => ({
    width: 200,
    display: 'flex',
    background: 'white',
    margin: 28,
  }),
};

interface IPropHome {
  addResult(result: any): void;
}

const Home: React.FC<IPropHome> = ({ addResult }) => {
  const { data: person, loading: personLoading, error: personError } = useQuery(
    ALL_PERSON
  );
  const {
    data: starship,
    loading: starshipLoading,
    error: starshipError,
  } = useQuery(ALL_STARSHIPS);
  const [value, setValue] = useState({ value: 'people', label: 'People' });
  const [personOne, setPersonOne] = useState(initialPlayerValue);
  const [personTwo, setPersonTwo] = useState(initialPlayerValue);
  const randomId = generateRandomId();

  useEffect(() => {
    if (personOne.name !== '' && personTwo.name !== '') {
      addResult({
        personOne,
        personTwo,
        id: randomId(),
      });
    }
  }, [personOne, personTwo]);

  const handleOnDropdownChange = (target: any) => {
    setValue({ value: target.value, label: target.label });
    setPersonOne(initialPlayerValue);
    setPersonTwo(initialPlayerValue);
  };

  const onClickHandler = (fightType: any) => {
    let getRandomPeopleOne: IPeople;
    let getRandomPeopleTwo: IPeople;
    let getRandomStarshipOne: IStarShips;
    let getRandomStarshipTwo: IStarShips;
    if (fightType === 'people') {
      getRandomPeopleOne = getRandomItemFromArray(person.allPeople.people);
      getRandomPeopleTwo = getRandomItemFromArray(person.allPeople.people);
      setPersonOne((prevState) => ({
        ...prevState,
        name: getRandomPeopleOne.name,
        value: getRandomPeopleOne.height,
      }));
      setPersonTwo({
        name: getRandomPeopleTwo.name,
        value: getRandomPeopleTwo.height,
      });
    } else {
      getRandomStarshipOne = getRandomItemFromArray(
        starship.allStarships.starships
      );
      getRandomStarshipTwo = getRandomItemFromArray(
        starship.allStarships.starships
      );
      setPersonOne({
        name: getRandomStarshipOne.name,
        value: getRandomStarshipOne.hyperdriveRating,
      });
      setPersonTwo({
        name: getRandomStarshipTwo.name,
        value: getRandomStarshipTwo.hyperdriveRating,
      });
    }
  };

  const whoWins = () => {
    if (personOne.value > personTwo.value) {
      return <Title>Player One Wins</Title>;
    } else if (personOne.value === personTwo.value) {
      return <Title>The points are equal</Title>;
    } else {
      return <Title>Player Two Wins</Title>;
    }
  };

  if (personLoading || starshipLoading) {
    return <Title>Your fighters will be loaded soon..</Title>;
  }

  if (personError || starshipError) {
    return <Title>Something went wrong!</Title>;
  }
  return (
    <Container>
      <Box marginBottom={8}>
        <Grid container spacing={8} alignItems="center" justify="center">
          <Grid item>
            <Select
              options={dropdownValue}
              styles={customStyles}
              onChange={handleOnDropdownChange}
              value={value}
            />
          </Grid>
          <Grid item>
            <Button
              onClick={() => onClickHandler(value.value)}
              data-testId="generateFightButton"
            >
              Generate fight
            </Button>
          </Grid>
          <Grid item>
            <CustomButtonLink to={ROUTES.RESULTS}>See Result</CustomButtonLink>
          </Grid>
        </Grid>
      </Box>
      {personOne.name !== '' && personTwo.name !== '' ? (
        <>
          <Grid container justify="center" alignItems="center">
            <Box marginBottom={8}>
              <Grid item>{whoWins()}</Grid>
            </Box>
          </Grid>
          <Grid container justify="center" alignItems="center" spacing={8}>
            <Grid item>
              <Card>
                <h2>Player One</h2>
                <h3>Name: {personOne.name}</h3>
                <h3>
                  {value.value === 'people' ? 'height' : 'hyperdrive-rating'}{' '}
                  {personOne.value}
                </h3>
              </Card>
            </Grid>
            <Grid item>
              <h2>VS</h2>
            </Grid>
            <Grid item>
              <Card>
                <h2>Player Two</h2>
                <h3>Name: {personTwo.name}</h3>
                <h3>
                  {value.value === 'people' ? 'height' : 'hyperdrive-rating'}{' '}
                  {personTwo.value}
                </h3>
              </Card>
            </Grid>
          </Grid>
        </>
      ) : null}
    </Container>
  );
};

export { Home };
