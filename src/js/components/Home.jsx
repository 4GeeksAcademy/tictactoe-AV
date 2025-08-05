import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [table, setTable] = useState([
		[undefined, undefined, undefined],
		[undefined, undefined, undefined],
		[undefined, undefined, undefined]
	])

	const [turn, setTurn] = useState("X")
	const [won, setWon] = useState(false)
	const changeTurn = () => setTurn(turn === "X" ? "0" : "X")

	const setValue = (i, j) => {
		//console.log(i, j)
		if (typeof table[i][j] == "undefined") {
			let aux = table
			aux[i][j] = turn
			setTable(aux)
			winner()
			changeTurn()
			console.log(table)
		} else {
			alert("toma otro lugar")
		}
	}

	const winner = () => {
		table.forEach((row, i) => {
			row.forEach((col, j) => {
				//console.log(table[i][j])
				if (typeof table[i][j] != "undefined" &&
					j > 0 && j < 2 &&
					table[i][j] == table[i][j + 1] &&
					table[i][j] == table[i][j - 1]
				) {
					setWon(turn)
					console.log("Wins!")
				}

				if (typeof table[i][j] != "undefined" &&
					i > 0 && i < 2 &&
					table[i][j] == table[i + 1][j] &&
					table[i][j] == table[i - 1][j]
				) {
					setWon(turn)
					console.log("Wins!")
				}

				if (typeof table[1][1] != "undefined" &&
					table[0][0] == table[1][1] &&
					table[0][0] == table[2][2]
				) {
					setWon(turn)
					console.log("Wins!")
				}

				if (typeof table[1][1] != "undefined" &&
					table[0][2] == table[1][1] &&
					table[0][2] == table[2][0]
				) {
					setWon(turn)
					console.log("Wins!")
				}
			})
		})
	}

	const reset = () => {
		setTable(
			[[undefined, undefined, undefined],
			[undefined, undefined, undefined],
			[undefined, undefined, undefined]]
		)
		setWon(false)
	}

	return (
		<div className="text-center d-flex flex-column w-50 mx-auto my-5">

			<h1 className="my-5">It´s {turn} turn</h1>
			<h2 className={won ? "show" : "hide"}>Winner! {turn === "X" ? "0" : "X"}</h2>
			

			<table className="my-5">
				<tbody>
					{table.map((row, i) => (
						<tr key={i}>
							{row.map((col, j) => (
								<td key={j} onClick={() => setValue(i, j)}>
									<div className="item">
										{col}
									</div>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<button className="btn btn-primary" onClick={reset}>Play</button>
		</div>
	);
};

export default Home;