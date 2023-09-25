import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AppNavigator from '../AppNavigator'
import { addMyProduct } from '../redux/MyProductSlice'
import { items } from '../redux/MyProductSlice'

const Main = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        items.map(item =>{
            dispatch(addMyProduct)
        });
    },[]);

    return (
    <AppNavigator/>
  )
}

export default Main
const styles = StyleSheet.create({})