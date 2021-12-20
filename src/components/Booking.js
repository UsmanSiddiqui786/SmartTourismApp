import React from 'react'
import { View ,StyleSheet , ScrollView , Button , Alert} from 'react-native';
import { Text, Card, Icon } from 'react-native-elements';
import { style } from 'styled-system';

export function Booking({ navigation }){
    
    const simpleAlertHandler = () => {
        //function to make simple alert
        alert('Booked!');
        navigation.navigate('Home')
      };
    return(
        <ScrollView style={{backgroundColor: '#003f5c'}}>
            
            <View style={styles.container}>
                <Text h3 style={{color:'#fb5b5a',marginTop:20}}>
                    Package Details
                </Text>
                <Card style={style.card} containerStyle={{backgroundColor:'003f5c',width:400,borderWidth:0}}>
                    
                    <Card.Divider />
                    <Text style={styles.fonts,{paddingBottom:20,color:'white'}} h4>
                        Routes: Islamabad , Kaghan , Naran , Hunza 
                    </Text>
                    <Text style={styles.fonts,{paddingBottom:20,color:'white'}} h4>
                        Price : 20000
                    </Text>
                    <Button
                        onPress={()=>simpleAlertHandler()}
                        title="Book"
                        color="#fb5b5a"
                        />
                    
                </Card>

            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
});