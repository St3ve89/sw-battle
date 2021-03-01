import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container } from './result.style';
import { CustomButtonLink, Title } from './home.style';
import * as ROUTES from '../constants/routes';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Results: React.FC<any> = ({ results }) => {
  const classes = useStyles();

  const winner = (personOne: any, personTwo: any) => {
    if (personOne.value > personTwo.value) {
      return <div>Player One Wins</div>;
    } else if (personOne.value === personTwo.value) {
      return <div>The points are equal</div>;
    } else {
      return <div>Player Two Wins</div>;
    }
  };

  return (
    <Container>
      <Grid container>
        <Grid item>
          <CustomButtonLink to={ROUTES.HOME} marginBottom={24}>
            Go back to fight
          </CustomButtonLink>
        </Grid>
      </Grid>
      <Grid container>
        {results.length ? (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Player One</TableCell>
                  <TableCell>Player One Value</TableCell>
                  <TableCell>Player Two</TableCell>
                  <TableCell>Player Two Value</TableCell>
                  <TableCell>Winner</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results.map((result: any) => (
                  <TableRow key={result.id}>
                    <TableCell component="th" scope="row">
                      {result.personOne.name}
                    </TableCell>
                    <TableCell align="right">
                      {result.personOne.value}
                    </TableCell>
                    <TableCell>{result.personTwo.name}</TableCell>
                    <TableCell align="right">
                      {result.personTwo.value}
                    </TableCell>
                    <TableCell>
                      {winner(result.personOne, result.personTwo)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Grid item>
            <Title>No Fighting result yet...</Title>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export { Results };
