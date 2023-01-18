import { useWindowDimensions } from '@figurl/core-utils';
import { getFigureData, SetupUrlState, startListeningToParent } from '@figurl/interface';
import { useEffect, useMemo, useState } from 'react';
import View from './View';

const urlSearchParams = new URLSearchParams(window.location.search)
const queryParams = Object.fromEntries(urlSearchParams.entries())

function App() {
  const [data, setData] = useState<any>()
  const [errorMessage, setErrorMessage] = useState<string>()
  const {width, height} = useWindowDimensions()

  useEffect(() => {
    if (queryParams.test === '1') {
      // To test without using the figurl parent
      // for example, with no internet connection,
      // use http://localhost:3000?test=1
      // setData({type: 'Test1'})
    }
    else {
      getFigureData().then((data: any) => {
        if (!data) {
          setErrorMessage(`No data returned by getFigureData()`)
          return
        }
        setData(data)
      }).catch((err: any) => {
        setErrorMessage(`Error getting figure data`)
        console.error(`Error getting figure data`, err)
      })
    }
  }, [])

  const opts = useMemo(() => ({}), [])

  if (!queryParams.figureId) {
    const style0 = {padding: 20}
    return (
      <div style={style0}>
        <h2>This page is not being embedded as a figurl figure.</h2>
      </div>
    )
  }

  if (errorMessage) {
    const style0 = {color: 'red'}
    return <div style={style0}>{errorMessage}</div>
  }

  if (!data) {
    return <div>Waiting for data</div>
  }

  return (
    <SetupUrlState>
        <View
          data={data}
          opts={opts}
          width={width - 10}
          height={height - 5}
        />
    </SetupUrlState>
  )
}

startListeningToParent()

export default App;