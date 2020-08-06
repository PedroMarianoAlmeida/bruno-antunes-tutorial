import Link from 'next/link'

const Details = () => {
    return (
        <div>
            <Link href='/[vehicle]/[person]' as='/car/bruno'>
                <a>Navigate to Bruno's Car</a>
            </Link>
        </div>
      );
}
 
export default Details;