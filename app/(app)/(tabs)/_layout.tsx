import { Tabs } from 'expo-router';
import TabBar from '../../../components/TabBar';
import TabBarIcon from '../../../components/TabBarIcon';
import peopleIcon from '../../../assets/images/people-icon-white.png';
import peopleIconBlur from '../../../assets/images/people-icon-white-blur.png';
import tagsIcon from '../../../assets/images/tags-icon-white.png'
import tagsIconBlur from '../../../assets/images/tags-icon-white-blur.png'
import Header from '../../../components/Header';
export default function TabLayout() {
    return (
        <Tabs 
            tabBar={props => <TabBar {...props}/>} 
            screenOptions={{
                header: ({ navigation }) => <Header navigation={navigation} />,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} source={peopleIcon} blurSource={peopleIconBlur}/>,
                }}
            />
            <Tabs.Screen
                name="my-tags"
                options={{
                    title: 'my-tags',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} source={tagsIcon} blurSource={tagsIconBlur}/> ,
                }}
            />
        </Tabs>
    );
}