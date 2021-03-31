import React, { useState } from 'react';
import {useSpring, animated, config} from 'react-spring';

function ChainingAnimations( { type } ) {
    const props = useSpring({
        from: {
            opacity: 0, color: 'red'
        },
        to: async ( next, cancel ) => {
            await next({
                opacity: 1,
                color: '#ffaaee',
                config: {
                    duration: 5000
                }
            });
            await next({
                opacity: 0,
                color: 'rgb(14,26,19)',
                config: {
                    duration: 2000
                }
            })
        }
    });

    return <animated.div style={props}>I will fade in and out</animated.div>
}

export default ChainingAnimations;