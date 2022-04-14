import {Sub} from '../types'

interface Props {
    subs: Array<Sub>
}

export default function List(props: Props) {
    const {subs} =props
    return (
        <ul>
            {
                subs.length === 0 ? <div>loading....</div> :
                    subs.map(sub => {
                        return (
                            <li key={sub.nick}>
                                <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                                <p>{sub.description?.substring(0, 100)}</p>
                            </li>
                        )
                    })
            }
        </ul>
    )
}