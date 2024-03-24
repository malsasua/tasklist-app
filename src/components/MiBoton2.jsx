
function MiBoton2(props) {
	return (
		<div>
			<button className="bg-red-200 px-1 rounded-md hover:bg-red-300 "
				onClick={
					() => props.miFunc(props.id)
				}>
				{props.name}
			</button>
		</div>
	)
}
export default MiBoton2