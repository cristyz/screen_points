import { MouseEvent, useState } from 'react'
import { Point } from './components/Point'
import { IPoint } from './interfaces/IPoint'
import { generateRandomColor } from './utils/color'

function App() {
  const [points, setPoints] = useState<Array<IPoint>>([])
  const [isActivePaintMove, setIsActivePaintMove] = useState<boolean>(false)
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false)

  function addNewPoint(event: MouseEvent<HTMLDivElement>) {
    if (event.type === 'mousemove' && !isActivePaintMove && !isMouseDown) return

    const newPoint: IPoint = {
      id: Math.random(),
      x: event.pageX,
      y: event.pageY,
      color: generateRandomColor()
    }

    setPoints((prevPoints) => [...prevPoints, newPoint])
  }

  function generateRandomPoints(event: MouseEvent<HTMLButtonElement>) {
    const randomPoints: Array<IPoint> = []

    for (let i = 0; i < 25; i++) {
      const newPoint: IPoint = {
        id: Math.random(),
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
        color: generateRandomColor()
      }

      randomPoints.push(newPoint)
    }

    setPoints(prevPoints => [...prevPoints, ...randomPoints])
  }

  function togglePaintMove(event: MouseEvent<HTMLButtonElement>) {
    setIsActivePaintMove(!isActivePaintMove)
  }

  return (
    <>
      <div className="pointer-header">
        <button onClick={() => setPoints([])}>Clear Points</button>
        <button onClick={generateRandomPoints}>Random Points</button>
        <button onClick={togglePaintMove}>{isActivePaintMove ? 'Disable' : 'Active'} Paint Move</button>
      </div>
      <div className="pointer-container"
        onClick={addNewPoint}
        onMouseMove={addNewPoint}
        onMouseDown={() => setIsMouseDown(true)}
        onMouseUp={() => setIsMouseDown(false)}
      >
        {points.map((point, idx) => Point(point))}
      </div>
    </>
  )
}

export default App
