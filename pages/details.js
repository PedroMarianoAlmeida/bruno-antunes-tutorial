import Link from 'next/link'

const people = [
    { v: 'car', name:'bruno' },
    { v: 'bike', name:'john' },
    { v: 'airplain', name:'mike' },
]

const Details = () => {
    return (
        <div>
            <h2>Teste</h2>
            {people.map( e => (
                <div>
                <Link href='/[vehicle]/[person]' as={`${e.v}/${e.name}`}>
                    <a>Navigate to {e.name}'s {e.v}</a>
                </Link>
                </div>
            ))}

        </div>
    );
}

export default Details;