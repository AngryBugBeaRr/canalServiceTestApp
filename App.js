import {NavigationContainer} from '@react-navigation/native';
import {navigationRef, RootNavigator} from './src/navigators/RootNavigator';
import {Component} from 'react';

class App extends Component {
    render() {
        return (
            <NavigationContainer ref={navigationRef}>
                <RootNavigator />
            </NavigationContainer>
        );
    }
}

export default App;