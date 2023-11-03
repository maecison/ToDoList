import { Button } from 'react-native';
import MainLayout from '../../layouts/MainLayout';

function HomeScreen({ navigation }) {
    // ...

    return (
        <MainLayout>
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </MainLayout>
    );
}