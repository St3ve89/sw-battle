export interface IPeople {
  id: string;
  name: string;
  height: number;
}

export interface IStarShips {
  id: string;
  name: string;
  hyperdriveRating: number;
}

export interface IPropsForToggle {
  toggleTheme(): void;
}
