import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/MyStore';
import { addToCart, deleteFromCart, removeToCart } from '../redux/MyCartSlice';

const Cart = () => {

  const myCartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const getTotal = () => {
    let total = 0;
    myCartItems.map(item => {
      total = total + item.qty * item.price;
    })
    return total
  }
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
          backgroundColor: '#fff',
          elevation: 1,
        }}
      >
        <Text style={{ color: '#000', fontSize: 16, fontWeight: '700' }}>
          Cart
        </Text>
      </View>

      {/* flatList here */}
      <FlatList
        data={myCartItems}
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
                      }}
                      onPress={() => {
                        if (item.qty > 1) {
                          dispatch(removeToCart(item))

                        } else {
                          dispatch(deleteFromCart(item.id))
                        }
                      }}
                    >
                      <Text style={{ color: '#fff' }} >
                        -
                      </Text>
                    </TouchableOpacity>
                  )}

                  {item.qty == 0 ? null : (
                    <Text style={{ color: '#000', fontSize: 16, fontWeight: '600', marginLeft: 10 }} >
                      {item.qty}
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
                        marginLeft: 10,
                      }}
                      onPress={() => {
                        dispatch(addToCart(item))
                      }}
                      disabled= {item.qty>=10 ? true: false} 
                    >
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

      {/* cart bottom here */}
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly'
        }}
      >
        <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: '800', color: '#000' }}>
            {'Added item' + '(' + myCartItems.length + ')'}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '800', color: '#000' }}>
            {'Total :' + getTotal()}
          </Text>
        </View>

        <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              width: '70%',
              height: 35,
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 7,
            }}
            onPress={() => {
              // navigation.navigate('Cart')
            }}
          >
            <Text style={{ color: '#fff' }}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})