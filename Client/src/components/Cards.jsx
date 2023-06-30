import Card from './Card';

export default function Cards(props) {
   const { characters } = props
   const { onClose } = props
   return (
   <div>
      {characters.map(character => (
         <Card 
         id={character.id}
         key = {character.id}
         name = {character.name}
         status = {character.status}
         species = {character.species}
         gender = {character.gender}
         origin = {character.origin.name}
         image = {character.image}
         onClose = {onClose}
      />
      ))}
   </div>
   );
}
