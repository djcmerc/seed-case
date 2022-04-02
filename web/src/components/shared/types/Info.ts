import { SnackbarTypes } from './Enums';

export interface SnackbarAlert {
  snackbarType: SnackbarTypes;
  snackbarMessage: string;
}
