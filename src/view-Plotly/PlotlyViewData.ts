import { isEqualTo, validateObject } from "@figurl/core-utils"

export type PlotlyViewData = {
    type: 'Plotly',
    spec: any
}

export const isPlotlyViewData = (x: any): x is PlotlyViewData => {
    return validateObject(x, {
        type: isEqualTo('Plotly'),
        spec: () => (true)
    })
}