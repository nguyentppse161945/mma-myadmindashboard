import React from 'react'

const LinearGradient = () => {
    
  return (
   <LinearGradient start={{ x: 0.0, y: 0.4 }} end={{ x: 0.5, y: 1.0 }} location={[0, 1]} colors={['#2D97DA', '#2249D6']} style={{ flex: 1.2, flexDirection: 'column' }}>
        <View style={{ flexDirection: 'column', marginTop: hp('10%'), paddingHorizontal: '5%' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            {/* Welcome message and name */}
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: '#fff' }}>Welcome Back</Text>
              <Text style={{ fontFamily: 'Roboto-Medium', color: '#fff', fontSize: 22 }}>Yaser</Text>
            </View>
            {/* Bell icon and profile pic */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name='bell' size={30} color="#fff" />
              <Image source={require('../assets/images/avatar.jpg')} resizeMode='cover' style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 15 }} />
            </View>
          </View>
          {/* amount */}
          <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Amount */}
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: '#fff', fontSize: 28, fontFamily: 'Roboto-Bold' }}>$32,7456.68</Text>
              <Text style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Roboto-Regular-Italic', fontSize: 14 }}>Updated 2 mins ago</Text>
            </View>
            {/* profit loss indicator */}
            <ProfitIndicator type="I" percentage_change={portfolioData.changes} />
          </View>
        </View>
      </LinearGradient>
  )
}

export default LinearGradient