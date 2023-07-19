import Image ,{ImageProps} from "next/image"
import React from 'react';
const isNextImage  = (child: React.ReactNode):child is React.ReactElement<ImageProps> => {
    return React.isValidElement(child) && child.type  === Image;
}

export default isNextImage;