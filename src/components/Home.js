import React from 'react'
import { View ,StyleSheet , ScrollView , Button} from 'react-native';
import { Text, Card, Icon } from 'react-native-elements';
import { style } from 'styled-system';



export function Home({ navigation }) {
    return (
        <ScrollView>
        <View style={styles.container}>
                <Card style={style.card} containerStyle={{backgroundColor:'003f5c',width:400,borderWidth:0}}>
                    <Card.Title style={{paddingBottom:20,color:'#fb5b5a'}}>Package Deal #1</Card.Title>
                    <Card.Divider />
                    <Text style={styles.fonts,{paddingBottom:20,color:'white'}} h4>
                        Price : 20000 PKR
                    </Text>
                    <Button
                        onPress={() => navigation.navigate('Booking')}
                        style={{padding:'55px'}}
                        title="View Details"
                        color="#fb5b5a"
                        />
                    
                </Card>
                <Card style={style.card} containerStyle={{backgroundColor:'003f5c',width:400,borderWidth:0}}>
                    <Card.Title style={{paddingBottom:20,color:'#fb5b5a'}}>Package Deal #2</Card.Title>
                    <Card.Divider />
                    <Text style={styles.fonts,{paddingBottom:20,color:'white'}} h4>
                        Price : 15000 PKR
                    </Text>
                    <Button
                        onPress={() => navigation.navigate('Booking')}
                        style={{padding:'55px'}}
                        title="View Details"
                        color="#fb5b5a"
                        />
                    
                </Card>
                <Card style={style.card} containerStyle={{backgroundColor:'003f5c',width:400,borderWidth:0}}>
                    <Card.Title style={{paddingBottom:20,color:'#fb5b5a'}}>Package Deal #3</Card.Title>
                    <Card.Divider />
                    <Text style={styles.fonts,{paddingBottom:20,color:'white'}} h4>
                        Price : 25000 PKR
                    </Text>
                    <Button
                        onPress={() => navigation.navigate('Booking')}
                        style={{padding:'55px'}}
                        title="View Details"
                        color="#fb5b5a"
                        />
                    
                </Card>
                <Card style={style.card} containerStyle={{backgroundColor:'003f5c',width:400,borderWidth:0}}>
                    <Card.Title style={{paddingBottom:20,color:'#fb5b5a'}}>Package Deal #4</Card.Title>
                    <Card.Divider />
                    <Text style={styles.fonts,{paddingBottom:20,color:'white'}} h4>
                        Price : 40000 PKR
                    </Text>
                    <Button
                        onPress={() => navigation.navigate('Booking')}
                        style={{padding:'55px'}}
                        title="View Details"
                        color="#fb5b5a"
                        />
                </Card>
            
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
      },
    card:{
        flex:1,
        backgroundColor: '#003f5c',
        color:'#003f5c'
    }
});

export default Home;
