import ToyCard from "./Toycard"
import { Container } from "@mui/system";
import Box from "@mui/material/Box";

function ToyContainer({toys, setSelectedToy}) {
	// Mapping thru the data to display toy cards
	const displayToys = toys.map((toy) => {
		return (
			<Container  fixed key={toy.id}>
				<ToyCard setSelectedToy={setSelectedToy} toy={toy} />
			</Container>
		);
	});

	return (
		<Box
		// CSS for cards on main page.
			sx={{
				p: 2,
				display: "grid",
				flexWrap: "wrap",
				gridTemplateColumns: {
					sm: ".5fr",
					md: ".5fr .5fr",
					lg: ".5fr .5fr .5fr",
					xl: ".5fr .5fr .5fr .5fr"
				},
				"& > :not(style)": {
					m: 1,
				},
			}}
		>
			{displayToys}
		</Box>
	);
}

export default ToyContainer