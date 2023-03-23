import { useState, useRef, useEffect } from 'react';
import { MaterialIcons, AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated, StyleSheet, View, Text, Image, TouchableOpacity, StatusBar, TextInput, FlatList, Platform } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import TopSheet from './TopSheet';

const MyScreen = () => {

    const [isTopSheetOpen, setIsTopSheetOpen] = useState(false);

    const handleToggleTopSheet = () => {
        setIsTopSheetOpen(!isTopSheetOpen);
    };

    const data = require('./data/cities.json');

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [selectedItem, setSelectedItem] = useState('Tezpur');
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const [temp, setTemp] = useState('')
    const [feels_like, setFeelsLike] = useState('');
    const [humidity, setHumidity] = useState('');
    const [min_temp, setMinTemp] = useState('');
    const [max_temp, setMaxTemp] = useState('');
    const [cloud_pct, setCloudpct] = useState('');
    const [wind_speed, setWindSpeed] = useState('');
    const [wind_degrees, setWindDegrees] = useState('');
    const [sunrise, setSunrise] = useState('');
    const [sunset, setSunset] = useState('');

    const fetchApiCall = (city) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'cf3b237613msh23324aef37fa69ep121f5ajsn2634c13124aa',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
            .then(response => response.json())
            .then(response => {
                setTemp(response.temp);
                setCloudpct(response.cloud_pet);
                setFeelsLike(response.feels_like);
                setHumidity(response.humidity);
                setMinTemp(response.min_temp);
                setMaxTemp(response.max_temp)
                setWindSpeed(response.wind_speed);
                setWindDegrees(response.wind_degrees);
                setSunrise(response.sunrise);
                setSunset(response.sunset)
            })
            .catch(err => console.error(err));
        // console.log(temp, cloud_pct, feels_like, humidity, min_temp, max_temp, wind_speed, wind_degrees, sunrise, sunset)
        // console.log(temp, city)
    }
    useEffect(() => {
        fetchApiCall(selectedItem)
    }, [])

    const handleSearch = (text) => {
        setSearchTerm(text);
        if (text.trim() === '') {
            setFilteredData([]);
        } else {
            const newData = data.filter((item) =>
                item.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredData(newData);
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }
    };

    const handleSelectItem = (item) => {
        setSelectedItem(item.name);
        setSearchTerm('');
        setFilteredData([]);
        fetchApiCall(item.name)
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
        setFilteredData([]);
    };

    const clearBack = () => {
        setFilteredData([]);
        setSearchTerm('');
    }

    const renderItem = ({ item }) => (
        <>
            <View style={{ paddingHorizontal: 25, paddingRight: 20 }}>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: StyleSheet.hairlineWidth }} />
            </View>
            <TouchableOpacity style={styles.item} onPress={() => { handleSelectItem(item); handleToggleTopSheet(); }}>
                <View style={{ marginRight: 10, backgroundColor: '#eff1f5b5', padding: 8, borderRadius: 10 }}>
                    <MaterialIcons name='location-pin' size={20} />
                </View>
                <Text >{item.name}, {item.country}</Text>
            </TouchableOpacity>
        </>
    );


    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={'white'} />
            <View style={styles.container} colors={['white', 'white']}>

                <TopSheet visible={isTopSheetOpen}>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <TouchableOpacity style={{ marginHorizontal: 10, marginTop: 2 }} onPress={() => { clearBack(); handleToggleTopSheet(); }}>
                            <Ionicons name='arrow-back' size={25} color='#616161' />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#555555' }}>Search for city</Text>
                    </View>
                    <View style={{ backgroundColor: 'white' }}>
                        <View style={styles.inputview}>
                            <MaterialIcons style={{ marginTop: 5, marginRight: 10 }} name='search' size={20} color='black' />
                            <TextInput onChangeText={handleSearch} autoFocus={true} placeholder="Search City" value={searchTerm} style={styles.search} />

                            {searchTerm !== '' ? (
                                <TouchableOpacity onPress={handleClearSearch} style={{ marginTop: 4 }}>
                                    <MaterialIcons name='close' size={20} color='#616161' />
                                </TouchableOpacity>
                            ) : null}
                        </View>
                    </View>

                    <Animated.View style={{ opacity: fadeAnim, top: -10, zIndex: -10, maxHeight: 440 }}>
                        {filteredData.length > 0 ? (
                            <FlatList
                                style={styles.flatList}
                                data={filteredData}
                                renderItem={renderItem}
                                showsVerticalScrollIndicator={false}
                            // keyExtractor={(item) => item.id.toString()}
                            />
                        ) : null}
                    </Animated.View>
                </TopSheet>

                <View style={{ padding: 20, flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 20 }}>
                    <View style={{ justifyContent: 'flex-start', width: '90%', flexDirection: 'row' }}>
                        <Text style={{ color: '#616161', fontSize: 20, fontWeight: 'bold' }}>{selectedItem}</Text>
                        <MaterialIcons name='location-on' size={22} color='#616161' style={{ marginTop: 3, marginLeft: 5 }} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '10%' }}>
                        <TouchableOpacity
                            onPress={handleToggleTopSheet}
                            // onPressIn={setFilteredData([])}
                            style={{ marginRight: 0 }}
                            activeOpacity={0.5}>
                            <MaterialIcons name="search" color='#616161' size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 5, marginLeft: 5 }}>
                            <Entypo name='dots-three-vertical' size={22} color='#616161' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <ScrollView style={{ paddingHorizontal: 15 }}>
                <LinearGradient style={{ flex: 1, borderRadius: 20, marginTop: 20, }} colors={['#5b9af9', '#206bdb']}>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', paddingTop: 40 }}>
                        <Image source={require('./img/weather.png')} style={styles.imgStyle} />
                    </View>
                    <View style={[styles.degree, { padding: 40, }]}>
                        <Text style={{ fontSize: 70, color: 'white' }}>{temp}</Text>
                        <Text style={{ fontSize: 40, color: 'white', marginTop: 5 }}>°</Text>
                        <Text style={{ fontSize: 30, color: 'white', marginTop: 3 }}>c</Text>
                    </View>
                    <View style={[styles.degree, { marginBottom: 20 }]}>
                        <Text style={{ fontSize: 30, color: 'white' }}>Feels Like {feels_like}</Text>
                        <Text style={{ fontSize: 25, color: 'white', marginTop: 2 }}>°</Text>
                        <Text style={{ fontSize: 20, color: 'white' }}>c</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 0 }}>
                        <View style={styles.card}>
                            <Text style={{ color: 'white', marginBottom: 10 }}>Temperature</Text>
                            <Text style={{ color: 'white' }}>{temp} °C</Text>
                        </View>
                        <View style={styles.verticleLine}></View>
                        <View style={styles.card}>
                            <Text style={{ color: 'white', marginBottom: 10 }}>Humidity</Text>
                            <Text style={{ color: 'white' }}>{humidity}</Text>
                        </View>
                        <View style={styles.verticleLine}></View>
                        <View style={styles.card}>
                            <Text style={{ color: 'white', marginBottom: 10 }}>Wind Speed</Text>
                            <Text style={{ color: 'white' }}>{wind_speed}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20, paddingHorizontal: 20 }}>
                        <View style={styles.card}>
                            <Image style={{ width: 70, height: 70 }} source={require('./img/sunrise.png')} />
                            <Text style={{ color: 'white' }}>Sunrise</Text>
                            <Text style={{ color: 'white', marginTop: 5 }}>{sunrise}</Text>
                        </View>
                        <View style={{ width: 1, backgroundColor: 'white', height: '70%', marginTop: 40 }}></View>
                        <View style={[styles.card, { marginTop: 10 }]}>
                            <Image style={{ width: 50, height: 50, marginBottom: 10 }} source={require('./img/sea.png')} />
                            <Text style={{ color: 'white' }}>Sunset</Text>
                            <Text style={{ color: 'white', marginTop: 5 }}>{sunset}</Text>
                        </View>
                    </View>
                </LinearGradient>



            </ScrollView>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        // marginBottom: 30,
        zIndex: 1000,
        marginTop: Platform.OS === "ios" ? 50 : 0,
    },
    clearButton: {
        fontSize: 20,
        marginLeft: 10,
        color: '#ccc',
    },
    inputview: {
        flexDirection: 'row',
        marginTop: 10,
        zIndex: 1000,
        paddingHorizontal: 15,
        paddingRight: 25,
        paddingVertical: 10,
        backgroundColor: '#eff1f5b5',
        borderRadius: 10,
        marginHorizontal: 20,
        marginRight: 15,
        marginBottom: 10,
    },
    search: {
        zIndex: 1000,
        fontWeight: 'medium',
        fontSize: 13,
        width: '85%',
    },
    imgStyle: {
        width: 200,
        height: 200,
        justifyContent: 'center'
    },
    handle: {
        width: 40,
        height: 4,
        backgroundColor: 'lightgray',
        borderRadius: 2,
        alignSelf: 'center',
        marginTop: 'auto',
    },
    degree: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    card: {
        // backgroundColor: 'rgb(193 192 221)',
        paddingVertical: 30,
        // margin: 5,
        // borderRadius: 10,
        width: 120,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    verticleLine: {
        height: '80%',
        width: 1,
        backgroundColor: 'white',
        marginTop: 10
    },
    flatList: {
        width: '100%',
    },
    item: {
        flexDirection: 'row',
        padding: 8,
        marginVertical: 6,
        marginHorizontal: 16,
        alignItems: 'center'
    },
    selectedItem: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default MyScreen;
