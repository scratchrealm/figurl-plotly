import { FunctionComponent } from "react";
import { PlotlyViewData } from "./PlotlyViewData";
import Plot from 'react-plotly.js'

type Props = {
	data: PlotlyViewData
	width: number
	height: number
}

const PlotlyView: FunctionComponent<Props> = ({data, width, height}) => {
	const {spec} = data

    return (
        <div style={{width: width - 15, height: height - 15}}>
            <Plot
				data={spec}
                layout={{width: width - 30, height: height - 30}}
            />
        </div>
    )
}

export default PlotlyView