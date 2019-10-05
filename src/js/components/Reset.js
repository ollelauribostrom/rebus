import { createComponent} from '../mini';
import { resetStorage} from '../rebuses';

export function Reset(){
    return createComponent({render(){
        return(
        
        `<button className="resetButton" onClick=${resetStorage()}>Reset</button>`)}
        });   
}