import { createTheme } from '@mui/material';
import { palette } from './utilities/palette';
import { typography } from './utilities/typography';

export const theme = createTheme({
    palette,
    typography,
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                },
            },
        },
    },
});