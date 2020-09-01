/* eslint-disable prettier/prettier */
import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import LoginActivity from './Component/LoginActivity'
import OtpActivity from './Component/OtpActivity'
import ChooseServiceActivity from './Component/ChooseServiceActivity'
import WelcomeActivity from './Component/WelcomeActivity'
import Model from './Component/Model'
import BookingActivity from './Component/BookingActivity'
import OderDetailsActivity from './Component/OderDetailsActivity'
import EarningActivity from './Component/EarningActivity'
import ProfileActivity from './Component/ProfileActivity'
import UploadDocumentsActivity from './Component/UploadDocumentsActivity'
import SplashActivity from './Component/SplashActivity'
import CabBookingActivity from './Component/CabBookingActivity'
import FoodMyBookingActivity from './Component/FoodMyBookingActivity'
import MyOderTab from './Component/MyOderTab'
import UpdateOderTab from './Component/UpdateOderTab'
import AddItemActivity from './Component/AddItemActivity'
const NavStack = createStackNavigator(
  {
    // eslint-disable-next-line no-trailing-spaces

    LoginActivity: {screen: LoginActivity},
    OtpActivity: {screen: OtpActivity},
    WelcomeActivity: {screen: WelcomeActivity},
    ChooseServiceActivity: {screen: ChooseServiceActivity},
    Model: {screen: Model},
    BookingActivity: {screen: BookingActivity},
    OderDetailsActivity: {screen: OderDetailsActivity},
    EarningActivity: {screen: EarningActivity},
    ProfileActivity: {screen: ProfileActivity},
    UploadDocumentsActivity: {screen:UploadDocumentsActivity},
    SplashActivity: {screen:SplashActivity},
    CabBookingActivity: {screen:CabBookingActivity},
    FoodMyBookingActivity:{screen:FoodMyBookingActivity},
    MyOderTab:{screen:MyOderTab},
    UpdateOderTab:{screen:UpdateOderTab},
    AddItemActivity:{screen:AddItemActivity}    

    // eslint-disable-next-line no-trailing-spaces
  },
  {
    initialRouteName: 'FoodMyBookingActivity',
    headerMode: 'none',
  },
)

const Apps = createAppContainer(NavStack)

export default class App extends React.Component {
  render () {
    return <Apps />
  }
}
