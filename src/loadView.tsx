import { ViewComponentProps } from "@figurl/core-views"
import { FunctionComponent } from "react"
import PlotlyView from "./view-Plotly/PlotlyView"
import { isPlotlyViewData } from "./view-Plotly/PlotlyViewData"

const loadView = (o: {data: any, width: number, height: number, opts: any, ViewComponent: FunctionComponent<ViewComponentProps>}) => {
    const {data, width, height} = o
    if (isPlotlyViewData(data)) {
        return <PlotlyView data={data} width={width} height={height} />
    }
    else return undefined
}

export default loadView