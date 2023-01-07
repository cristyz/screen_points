import { IPoint } from "../interfaces/IPoint";

export function Point(point: IPoint) {
    return (
        <div className='point' style={{ left: point.x, top: point.y, backgroundColor: point.color, color: point.color }} key={point.id}>
        </div>
    )
}