import {ReactComponent as StarFull} from 'assets/img/icons/star-score-avaluation-full.svg';
import {ReactComponent as StarHalf} from 'assets/img/icons/star-score-avaluation-half.svg';
import {ReactComponent as StarEmpty} from 'assets/img/icons/star-score-avaluation-empty.svg';
import './styles.css';

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;