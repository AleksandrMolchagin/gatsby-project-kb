import './emoji.css'
import React from 'react'

interface EmojiProps{
    name: String;
    type: String
}

const Emoji: React.FC<EmojiProps> = (props) => {
    
    switch(props.type){
        case "h1":
            return (
                <span>
                    <img 
                        src={require(`./emojis/${props.name}.png`).default} 
                        className="inline-emoji-h1" 
                        alt={`Emoji: ${props.name}`}></img>
                </span>
            );
        default:
            return (
                <span>
                    <img 
                        src={require(`./emojis/${props.name}.png`).default} 
                        className="inline-emoji" 
                        alt={`Emoji: ${props.name}`}></img>
                </span>
            )
    }
}
export default Emoji

