// Router.js
import React from 'react';
import { Router, Stack } from 'react-native-router-flux';
// Replace "book" with the name of the resource type
import HealthmetriclogRoutes from './routes/healthmetriclog';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                {HealthmetriclogRoutes}
            </Stack>
        </Router>
    );
};

export default RouterComponent;