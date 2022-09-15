import ToyCard from "./Toycard"
import { Container } from "@mui/system";

function ToyContainer({toys, setSelectedToy, setCartItems, newToyInCart}) {
	// console.log(toys);
	
	const displayToys = toys.map((toy) => {
		return (
			<Container fixed key={toy.id}>
				<ToyCard setSelectedToy={setSelectedToy} toy={toy} setCartItems={setCartItems} newToyInCart = {newToyInCart}/>
			</Container>
		);
	});

	return <div>{displayToys}</div>;
}

export default ToyContainer