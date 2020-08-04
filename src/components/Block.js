import React from "react";

export default function Block(props) {
    const {title, imageInfo, innerContent, corner, centerTitle} = props;
    return (
        <div className='block-box'>
            {corner && <div className='block-corner'>{corner}</div>}
            {title && <div style={{textAlign:centerTitle?'center':'auto'}} className='block-bar'>{title}</div>}
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