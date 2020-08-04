import React from "react";

export default function Block(props) {
    const {title, imageInfo, innerContent} = props;
    return (
        <div className='block-box'>
            {title && <div className='block-bar'>{title}</div>}
            <div className='block-body'>
                {imageInfo && <div className='block-image-wrapper'>
                    <div className='block-image'>
                        <img src={imageInfo.url} alt={imageInfo.alt}/>
                    </div>
                </div>}
                <div className='block-content'>
                    {innerContent}
                </div>
            </div>
        </div>
    )
}