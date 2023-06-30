import { connect } from "react-redux"
import Card from "./Card";

function Favorites(props){
    const { myFavorites } = props;
    return (
        <>
        <div>
            {myFavorites.map((e) => (
                <Card
                id={e.id}
                key = {e.id}
                name = {e.name}
                status = {e.status}
                species = {e.species}
                gender = {e.gender}
                origin = {e.origin.name}
                image = {e.image}
                />
            ))}
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
    myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);