
function MiBoton(props) {
	return (
		<div>
			<button className='bg-red500'
				onClick={
					() => props.miFunc(1)
				}>
				{props.name}
			</button>
		</div>
	)
}
export default MiBoton 