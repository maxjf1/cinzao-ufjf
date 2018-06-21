import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blueGrey, red } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';
import "typeface-roboto"

const theme = createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: red
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
            </MuiThemeProvider>
        );
    }
}

export default App;
