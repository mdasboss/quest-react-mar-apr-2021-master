import React, { useState } from 'react';
import {useSpring, animated, config} from 'react-spring';

function ChainingAnimations( { type } ) {
    const props = useSpring({
        from: {
            opacity: 0, color: 'red'
        },
        to: [
            {
                opacity: 1,
                color: '#ffaaee'
            },
            {
                opacity: 0,
                color: 'rgb(14,26,19)'
            }
        ]
    });

    return <animated.div style={props}>I will fade in and out</animated.div>
}

export default ChainingAnimations;