import React, {Component} from 'react'
console.disableYellowBox = true

import {
  StyleSheet,
  View,
  Text,
  Picker,
  TouchableOpacity,
  Image,
  images,
  TextInput,
  SafeAreaView,
} from 'react-native'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import resp from 'rn-responsive-font'

class UploadDocumentsActivity extends Component {
  constructor (props) {
    super(props)
  }

  state = {user: ''}
  updateUser = user => {
    this.setState({user: user})
  }
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.container3}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Model')
              }}>
              <Image
                source={require('../images/menu.png')}
                style={styles.MenuHomeIconStyle}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.container4}>
            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.screentitle}>Upload Documents</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container5}></View>
        </View>

        <View style={styles.container}>
          <View style={styles.serviceBox}>
            <Text style={styles.name}>Documents Type</Text>

            <TextInput
              placeholder='Documents Type'
              placeholderTextColor='#000'
              underlineColorAndroid='transparent'
              style={styles.input}
            />
            <Text style={styles.name}>Select</Text>
            <View>
              <Picker
                selectedValue={this.state.user}
                onValueChange={this.updateUser}>
                <Picker.Item label='Pan Card' value=' Pan Card' />
                <Picker.Item label='Adhar Card' value='Adhar Card' />
                <Picker.Item label='Passport' value='Passport' />
              </Picker>
            </View>

            <Text style={styles.name}>Documents Type</Text>

            <TextInput
              placeholder='Documents Type'
              placeholderTextColor='#000'
              underlineColorAndroid='transparent'
              style={styles.input}
            />
            <Text style={styles.name}>Select</Text>
            <View>
              <Picker
                selectedValue={this.state.user}
                onValueChange={this.updateUser}>
                <Picker.Item label='Pan Card' value=' Pan Card' />
                <Picker.Item label='Adhar Card' value='Adhar Card' />
                <Picker.Item label='Passport' value='Passport' />
              </Picker>
            </View>
         
          <TouchableOpacity
            style={styles.loginButtonStyle}
            activeOpacity={0.2}
            onPress={() => {
              this.props.navigation.navigate('UploadDocumentsActivity')
            }}>
            <Text style={styles.buttonWhiteTextStyle}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F9FE',
  },
  serviceBox: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10,
    backgroundColor: '#F6F9FE',
  },

  container3: {
    flex: 0.2,
    marginLeft: 10,
    backgroundColor: 'black',
  },
  container4: {
    flex: 0.6,
    backgroundColor: 'black',
  },
  container5: {
    flex: 0.2,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
  },
  loading: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading_text: {
    fontSize: RFValue(10, 580),
    textAlign: 'center',
    color: '#FFC33B',
    fontWeight: 'bold',
  },
  listItem: {
    marginTop: 2,
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
  },
  bottomactivetextstyle: {
    color: '#FB3954',
    fontSize: 8,
    marginTop: 5,
    textAlign: 'center',
  },
  item: {
    color: '#000',
    fontSize: 25,
    margin: 15,
    marginLeft: 30,
  },
  buttonWhiteTextStyle: {
    textAlign: 'center',
    fontSize: resp(16),
    color: 'white',
    alignContent: 'center',
  },
  loginButtonStyle: {
    marginTop: 50,
    marginBottom: resp(180),
    width: 320,
    height: 50,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  name: {
    marginTop: 10,
    marginLeft: 8,
    fontSize: resp(20),
    color: '#333',
  },
  inputView1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
    elevation: 20,
    shadowColor: 'black',
    elevation: 20,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
  },
  input: {
    color: '#000',
    width: '95%',
    height: resp(50),
    padding: 10,
    borderWidth: 0,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    fontSize: 25,
    margin: 15,
    marginLeft: 30,
  },
  bottominactivetextstyle: {
    color: '#887F82',
    fontSize: 8,
    marginTop: 3,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  StyleHomeTab: {
    marginTop: 5,
    width: 30,
    height: 28,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  StyleVideoTab: {
    marginTop: 11,
    marginRight: 10,
    width: 38,
    height: 23,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomvideotextstyle: {
    color: '#887F82',
    fontSize: 8,
    marginRight: 10,
    marginTop: 3,
    textAlign: 'center',
  },
  styleNotificationTab: {
    marginTop: 9,
    width: 30,
    height: 30,
    marginLeft: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomnotificationtextstyle: {
    color: '#887F82',
    fontSize: 8,
    marginLeft: 10,
    marginTop: 3,
    textAlign: 'center',
  },
  StyleProfileTab: {
    marginTop: 9,
    width: 30,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabStyle: {
    flexDirection: 'row',
    backgroundColor: '#000',
    height: 60,
    margin: 4,
    shadowColor: '#ecf6fb',
    elevation: 20,
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  tabButtonStyle: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  headerView: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#000',
  },
  headerView1: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#000',
  },
  screentitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: resp(25),
    textAlign: 'center',
  },
  ServiceTitle: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  CircleShapeView: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginBottom: 50,
    backgroundColor: 'white',
    shadowColor: '#ecf6fb',
    elevation: 20,
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
  image: {
    margin: 10,
    width: 50,
    height: 50,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  iconFonts: {
    color: 'gray',
  },
  red: {
    color: '#FF4500',
  },
  box: {
    marginTop: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  plusiconstyle: {
    height: 30,
    width: 30,
    marginTop: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoBottomView: {
    height: 50,
    width: 400,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    shadowColor: '#ecf6fb',
    elevation: 20,
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  textblacktextstyle: {
    fontSize: 15,
    color: '#1B273E',
    fontWeight: 'bold',
  },
  textpinktextstyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FB3954',
    textAlign: 'right',
    marginRight: 10,
  },
  playiconstyle: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MenuHomeIconStyle: {
    margin: 10,
    height: 50,
    width: 50,
  },
  MenuHomeUserIconStyle: {
    height: 30,
    width: 25,
    margin: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallcircleshapeview: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    shadowColor: '#ecf6fb',
    elevation: 20,
    color: 'black',
    textAlign: 'center',
    shadowColor: 'grey',
    shadowOpacity: 1,
    alignItems: 'center',
  },

  smallcircletext: {
    shadowColor: '#ecf6fb',
    elevation: 20,
    margin: 15,
    color: 'black',
    textAlign: 'center',
    shadowColor: 'grey',
    shadowOpacity: 1,
    alignItems: 'center',
  },
  GridViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 40,
    margin: 5,
    backgroundColor: '#fff',
  },
  GridViewTextLayout: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: '#fff',
    padding: 10,
  },
})

export default UploadDocumentsActivity
