import React, { useState } from 'react';
import { Text } from 'react-native';

const Title = () => {
    const [titleText, setTitleText] = useState("My first React-Native app (click this title)");

    const onPressTitle = () => {
        setTitleText("My updated first React-Native app");
    };

    return (
        <Text onPress={onPressTitle}>{titleText}</Text>
    );
};


export default (Title);