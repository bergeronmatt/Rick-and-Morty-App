import React from 'react'
import {connect} from 'react-redux'

const CharactersList = props => {
    return ( 
    <>
        {props.error ? (<div className='error'>{props.error}</div>) :  props.characters.map(character => (
            <div className="characterCard">
                <img src={`https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`} alt={`${character.name}`}/>
                
                <div className='character-bio'>
                    <h1>{character.name}</h1>
                    <p>{character.species}</p>
                    <p>{character.gender}</p>
                    <p>{character.origin.name}</p>
                </div>
            </div>
            ))}
    </>
    );
};
    

const mapPropstoState = state => {
    return {
        characters: state.characters,
        error: state.error
    }
}

export default connect(
    mapPropstoState, 
    {}
)(CharactersList);