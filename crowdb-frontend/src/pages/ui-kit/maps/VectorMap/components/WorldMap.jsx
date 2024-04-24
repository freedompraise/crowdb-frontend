import 'jsvectormap'
import 'jsvectormap/dist/maps/world.js'
import 'jsvectormap/dist/css/jsvectormap.css'

//components
import BaseVectorMap from './BaseVectorMap'
const WorldMap = ({ width, height, options }) => {
	return (
		<>
			<BaseVectorMap
				width={width}
				height={height}
				options={options}
				type="world"
			/>
		</>
	)
}
export default WorldMap
