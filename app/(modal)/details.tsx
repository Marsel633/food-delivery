import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import ParallaxScrollView from '@/Components/ParallaxScrollView'
import Colors from '@/constants/Colors'
import { restaurant } from '@/assets/data/restaurant'
import { useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'


const Details = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: '',
            headerTintColor: Colors.primary,
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.roundButton}>
                    <Ionicons name='arrow-back' color={Colors.primary} size={24}/>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={styles.bar}>
                     <TouchableOpacity style={styles.roundButton}>
                    <Ionicons name='share-outline' color={Colors.primary} size={24}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.roundButton}>
                    <Ionicons name='search-outline' color={Colors.primary} size={24}/>
                </TouchableOpacity>
                </View>
            )
        })
    }, [])
  return (
    <>
     <ParallaxScrollView
     backgroundColor={'#fff'}
     parallaxHeaderHeight={250}
     stickyHeaderHeight={100}
     contentBackgroundColor={Colors.lightGrey}
     renderBackground={() => <Image source={restaurant.img} style={{width: '100%', height: 300}}/>}
     renderStickyHeader={() => (
        <View key='sticky-header' style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{restaurant.name}</Text>
        </View>
     )}
     style={{flex:1}}
     >
        <View style={styles.detailsContainer}>
            <Text>Details</Text>
        </View>
     </ParallaxScrollView>

    </>
  )
}

const styles = StyleSheet.create({
    detailsContainer: {
        backgroundColor: Colors.lightGrey,
    },
    stickySection: {
        backgroundColor: '#fff',
        marginLeft: 70,
        height: 100,
        justifyContent: 'flex-end',
        
    },
    roundButton: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    stickySectionText: {
        fontSize: 20,
        margin: 10,
    }
})

export default Details