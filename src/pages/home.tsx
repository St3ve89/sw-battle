import { useQuery } from '@apollo/client';
import React, { CSSProperties, useState } from 'react';
import { getRandomItemFromArray } from '../helpers/utils';
import { ALL_PERSON } from '../queries/people';
import { ALL_STARSHIPS } from '../queries/starships';
import { IPeople, IStarShips } from '../types/types';
import Select from 'react-select';
import { dropdownValue, initialPlayerValue } from '../constants';
import { Card } from '../components/card';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const customStyles = {
  option: (provided: any) => ({
    ...provided,
    color: 'black',
  }),
  control: () => ({
    width: 200,
    display: 'flex',
    background: 'white',
    margin: 28,
  }),
};

export default function Home() {
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
      setPersonOne({
        name: getRandomPeopleOne.name,
        value: getRandomPeopleOne.height,
      });
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
      return <h1>Player One Wins</h1>;
    } else if (personOne.value === personTwo.value) {
      return <h1>The points are equal</h1>;
    } else {
      return <h1>Player Two Wins</h1>;
    }
  };
  return (
    <>
      <Select
        options={dropdownValue}
        styles={customStyles}
        onChange={handleOnDropdownChange}
        value={value}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => onClickHandler(value.value)}
      >
        Generate fight
      </Button>
      {personOne.name !== '' && personTwo.name !== '' ? (
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item>
            <Card>
              <h2>Player One</h2>
              <h3>Name: {personOne.name}</h3>
              <h3>
                {value.value === 'people' ? 'height' : 'hyperdrive-rating'}{' '}
                {personTwo.value}
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
          <Grid container justify="center" alignItems="center">
            <Grid item>{whoWins()}</Grid>
          </Grid>
        </Grid>
      ) : null}

      {/* <Grid>
        <Card></Card>

        <Card></Card>
      </Grid> */}
    </>
  );
}
