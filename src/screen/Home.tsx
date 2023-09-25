import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/MyStore';
import { addToCart } from '../redux/MyCartSlice';
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { IconButton } from 'react-native-paper';
import Modal from 'react-native-modal';

const Home: React.FC = () => {

    const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

    const myProducts = useSelector((state: RootState) => state.product.products);
    const myCartItems = useSelector((state: RootState) => state.cart.cartItems);

    const dispatch = useDispatch();

    const [isModalVisible, setModalVisible] = useState(false);
    const [message, setMessage] = useState('');

    // const addItemToCart = (item) => {
    //     dispatch(addToCart(item));
    //     setMessage(`${item.name} added to cart`);
    //     setModalVisible(true);
    //     setTimeout(() => {
    //         setModalVisible(false);
    //     }, 5000); // Hide the message after 5 seconds
    // };

    return (
        <View style={{ flex: 1 }}>
            {/* Header here */}
            <View
                style={{
                    width: '100%',
                    height: 60,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 20,
                    justifyContent: 'space-between',
                    backgroundColor: '#fff',
                    elevation: 1,
                }}
            >
                <Text style={{ color: '#000', fontSize: 16, fontWeight: '700' }}>
                    iPhone
                </Text>
                <View>
                    {myCartItems.length > 0 ? (
                        <IconButton icon="cart-arrow-down" size={30} iconColor="black" onPress={() => {
                            navigation.navigate('Cart')
                        }}
                            style={{ position: 'relative' }}
                        />) : (
                        <IconButton icon="cart" size={30} iconColor="black" onPress={() => {
                            navigation.navigate('Cart')
                        }}
                            style={{ position: 'relative' }}
                        />
                    )}
                    {myCartItems.length > 0 ? (
                        <Text style={{ color: '#FF0000', fontWeight: '800', position: 'absolute', right: 15, }}>
                            {myCartItems.length}
                        </Text>
                    ) : null}
                </View>
            </View>

            {/* flatList here */}
            <FlatList
                data={myProducts}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                width: '94%',
                                height: 120,
                                alignSelf: 'center',
                                backgroundColor: '#fff',
                                marginTop: 10,
                                borderRadius: 10,
                                elevation: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingLeft: 10
                            }}
                        >
                            <Image
                                source={{ uri: item.image }}
                                style={{ width: 100, height: 100, borderRadius: 10 }} />
                            <View style={{ paddingLeft: 10 }} >
                                <Text style={{ fontSize: 16, color: '#000', fontWeight: '600' }} >
                                    {item.name}
                                </Text>
                                <Text style={{ fontWeight: '600' }} >
                                    {item.brand}
                                </Text>
                                <Text style={{ color: 'green', fontSize: 16, fontWeight: '600' }}>
                                    {'₹' + item.price}
                                </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }} >
                                    {item.qty == 0 ? (
                                        <TouchableOpacity
                                            style={{
                                                backgroundColor: 'green',
                                                borderRadius: 7,
                                                height: 27,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                paddingLeft: 10,
                                                paddingRight: 10
                                            }}
                                            onPress={() => {
                                                dispatch(addToCart(item));
                                            }}
                                        >
                                            <Text style={{ color: '#fff' }} >
                                                Add To Cart
                                            </Text>
                                        </TouchableOpacity>
                                    ) : null}

                                    {item.qty == 0 ? null : (
                                        <TouchableOpacity
                                            style={{
                                                backgroundColor: 'green',
                                                borderRadius: 7,
                                                height: 27,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                marginLeft: 10
                                            }}>
                                            <Text style={{ color: '#fff' }} >
                                                -
                                            </Text>
                                        </TouchableOpacity>
                                    )}

                                    {item.qty == 0 ? null : (
                                        <Text style={{ color: '#000', fontSize: 16, fontWeight: '600', marginLeft: 10 }} >
                                            {0}
                                        </Text>
                                    )}

                                    {item.qty == 0 ? null : (
                                        <TouchableOpacity
                                            style={{
                                                backgroundColor: 'green',
                                                borderRadius: 7,
                                                height: 27,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                marginLeft: 10
                                            }}>
                                            <Text style={{ color: '#fff' }} >
                                                +
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>
                        </View>
                    );
                }}
            />

            {/* Conditionally show the Modal */}
            {myCartItems.length > 0 ? (
                <Modal isVisible={isModalVisible}>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{ backgroundColor: 'white', padding: 20 }}>
                            <Text>{message}</Text>
                        </View>
                    </View>
                </Modal>
            ) : null}

        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});
