import React from 'react';
import { useSpring, animated } from 'react-spring';

function CustomComponent( props ) {
    return <div {...props}>{props.children}</div>;
}

const AnimatedCustomComponent = animated( CustomComponent );

function FadeInCustomComponent() {
    const props = useSpring({
        opacity: 1,
        from: {
            opacity: 0
        }
    });

    return <AnimatedCustomComponent style={props}>I will fade in</AnimatedCustomComponent>;
}

export default FadeInCustomComponent;