# https://figurl.org/f?v=gs://figurl/plots-1&d=sha1://5c6ec276ce9a3b20b208aaff911b037ce4052e51&label=test%20plotly

import json
import figurl as fig
import numpy as np
import plotly.express as px


def main():
    iris = px.data.iris()
    ff = px.scatter_3d(iris, x='sepal_length', y='sepal_width', z='petal_width',
                color='species')

    dd = {
        'type': 'Plotly',
        'spec': json.loads(ff.to_json())['data']
    }
    F = fig.Figure(data=dd, view_url='gs://figurl/plotly-1')
    print(F.url(label='test plotly'))

if __name__ == '__main__':
    main()
