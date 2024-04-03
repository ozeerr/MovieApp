import * as Progress from 'react-native-progress';
import {  Text, View } from 'react-native'
import React from 'react'
import { height, width } from '../utils/constants'
import { theme } from '../theme';

const Loading = () => {
  return (
    <View style={{height,width}} className='absolute flex-row justify-center items-center'>
      <Progress.CircleSnail thickness={12} size={160} color={theme.background} />
    </View>
  )
}

export default Loading

