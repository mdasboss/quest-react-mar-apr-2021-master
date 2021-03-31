import React from 'react';
import ReactDOM from 'react-dom';

import FadeInDiv from './01-01-FadeInDiv';
import FadeInCustomComponent from './01-02-FadeInCustomComponent';
import AnimateDifferentValues from './02-AnimateDifferentValues'
import ViewInterpolation from './03-ViewInterpolation';
import EmulatingKeyframes from './04-EmulatingKeyframes';
import ConfigDemo from './05-ConfigDemo';
import ChainingAnimations from './06-01-ChainingAnimations';
// import ChainingAnimations from './06-02-ChainingAnimations';
import AnimatedCard from './07-AnimatedCard';
import FlipCard from './08-FlipCard';

ReactDOM.render(
    <React.Fragment>
        {/* <FadeInDiv /> */}
        {/* <FadeInCustomComponent /> */}
        {/* <AnimateDifferentValues /> */}
        {/* <ViewInterpolation /> */}
        {/* <EmulatingKeyframes /> */}
        {/* <ConfigDemo type="gentle" />
        <ConfigDemo type="wobbly" />
        <ConfigDemo type="stiff" />
        <ConfigDemo type="slow" />
        <ConfigDemo type="molasses" /> */}
        {/* <ChainingAnimations /> */}
        {/* <AnimatedCard /> */}
        <FlipCard />
    </React.Fragment>,
    document.getElementById('root')
);