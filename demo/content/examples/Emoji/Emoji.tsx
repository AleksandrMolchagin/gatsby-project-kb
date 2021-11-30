import './emoji.css'
import React from 'react'

interface EmojiProps{
    name: String;
}

const Emoji: React.FC<EmojiProps> = (props) => {

     
    return (
        <span>
            <img 
                src={require(`./emojis/${props.name}.png`).default} 
                className="inline-emoji" 
                alt={`Emoji: ${props.name}`}></img>
        </span>
    )
}
export default Emoji

