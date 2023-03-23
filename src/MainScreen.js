import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, TouchableHighlight, Image, Dimensions, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
// import Animated, { Easing } from 'react-native-reanimated';
// const { Value, timing } = Animated
// const width = Dimensions.get('window').width
// const height = Dimensions.get('window').height

class MainScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isFocsed: false,
            keyword: ''
        }
        this._input_box_translate_x = new Value(width)
        this._back_button_opacity = new Value(0)
        this._content_translate_y = new Value(height)
        this._content_opacity = new Value(0)
    }

    _onFocus = () => {
        this.setState({ isFocsed: true })
        const input_box_translate_x_config = {
            duration: 200,
            toValue: 0,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease)
        }
        const back_button_opacity_config = {
            duration: 200,
            toValue: 1,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease)
        }
        const content_translate_y_config = {
            duration: 0,
            toValue: 0,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease)
        }
        const content_opacity_config = {
            duration: 200,
            toValue: 1,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease)
        }
        timing(this._input_box_translate_x, input_box_translate_x_config).start()
        timing(this._back_button_opacity, back_button_opacity_config).start()
        timing(this._content_translate_y, content_translate_y_config).start()
        timing(this._content_opacity, content_opacity_config).start()
    }

    _onBlur = () => {

    }

    render() {
        return (
            <LinearGradient style={styles.header_safe_area} colors={['#fff', '#42464b']}>
                <View style={styles.header}>
                    <View style={styles.header_inner}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20 }}>Tezpur</Text>
                            <MaterialIcons name="location-on" size={20} style={{ marginTop: 5 }} />
                        </View>
                        <TouchableHighlight activeOpacity={1} underlayColor={"#ccd0d5"} onPress={this._onFocus}
                            style={styles.search_icon_box}>
                            <MaterialIcons name="search" size={25} color="#000000" />
                        </TouchableHighlight>
                        <Animated.View
                            style={[styles.input_box, { transform: [{ translateX: this._input_box_translate_x }] }]}
                        >
                            <Animated.View style={{ opacity: this._back_button_opacity }}>
                                <TouchableHighlight
                                    activeOpacity={1}
                                    underlayColor={'#ccd0d5'}
                                    onPress={this._onBlur()}
                                    style={styles.back_icon_box}
                                >
                                    <MaterialIcons name="arrow-back" size={28} color='white' />
                                </TouchableHighlight>
                            </Animated.View>
                            <TextInput
                                ref="input"
                                placeholder="Search ..."
                                cleaButtonMode="always"
                                value={this.state.keyword}
                                onChangeText={(value) => this.setState({ keyword: value })}
                                style={styles.input}
                            />
                        </Animated.View>
                    </View>
                </View>
                <Animated.View style={[styles.content, { opacity: this._content_opacity, transform: [{ translateY: this._content_translate_y }] }]}>
                    <SafeAreaView style={styles.content_safe_area}>
                        <View state={styles.content_inner}>
                            <View style={styles.separator}>
                                {
                                    this.state.keyword
                                        ?
                                        <View style={styles.image_placeholder_container}>
                                            <MaterialIcons style={styles.image_placeholder} name="bookmark" size={22} />
                                            <Text style={styles.image_placeholder_text}>Enter a few words{'\n'}to search on facebook</Text>
                                        </View>
                                        :
                                        <ScrollView>
                                            <View style={styles.search_item}>
                                                <MaterialIcons style={styles.item_icon} name="search" size={16} color="white" />
                                                <Text>Fake result 1</Text>
                                            </View>
                                            <View style={styles.search_item}>
                                                <MaterialIcons style={styles.item_icon} name="search" size={16} color="white" />
                                                <Text>Fake result 2</Text>
                                            </View>
                                            <View style={styles.search_item}>
                                                <MaterialIcons style={styles.item_icon} name="search" size={16} color="white" />
                                                <Text>Fake result 3</Text>
                                            </View>
                                            <View style={styles.search_item}>
                                                <MaterialIcons style={styles.item_icon} name="search" size={16} color="white" />
                                                <Text>Fake result 4</Text>
                                            </View>
                                        </ScrollView>
                                }
                            </View>
                        </View>
                    </SafeAreaView>
                </Animated.View>
            </LinearGradient>


        )
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    header_safe_area: {
        flex: 1,
        zIndex: 1000,
    },
    header: {
        height: 50,
        paddingHorizontal: 16,
        margin: 20
    },
    header_inner: {
        flex: 1,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
    },
    search_icon_box: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: '#ee6eb',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input_box: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'white',
        width: width - 32,
    },
    back_icon_box: {
        width: 40,
        height: 40,
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: '#e4e6eb',
        borderRadius: 16,
        paddingHorizontal: 16,
        fontSize: 15
    },
    content: {
        width: width,
        height: height,
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: 999,
    },
    content_safe_area: {
        flex: 1,
        backgroundColor: 'white',

    },
    content_inner: {
        flex: 1,
        paddingTop: 50
    },
    separator: {
        marginTop: 5,
        height: 1,
        backgroundColor: '#ebe4eb',
    },
    image_placeholder_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '-50%'
    },
    image_placeholder: {
        width: 150,
        height: 113,
        alignSelf: 'center'
    },
    image_placeholder_text: {
        textAlign: 'center',
        color: 'grey',
        marginTop: 5
    },
    search_item: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e4eb',
        marginLeft: 16
    },
    item_icon: {
        marginLeft: 15
    }
})