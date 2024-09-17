

import { rotateAnimation } from "src/styles/animations";
import { styled } from "src/styles/stitches.config";
import { ResponsiveImage } from 'utils/functions';

export const backgroundImage = styled(ResponsiveImage,{
    width:"12px",
    height:"12px",
});

export const circleWrapper = styled("div",{
    display:"flex",
    width:"500px",
    height:"500px",
    background:"blue",
    borderRadius:"50%",
    overflow:"hidden",
    transform: "rotateX(70deg) translate(-50%,-50%)",
    top:"60%",
    left:"50%",
    right:"50%",
    mixBlendMode:"lighten",
    position:"absolute",
})

export const characterWrapper = styled("div",{
    position:"absolute",
    width:"350px",
    height:"525px",
    overflow:"hidden",
    top:"50%",
    left:"50%",
    right:"50%",
    transform:"translate(-50%,-50%)",
})

