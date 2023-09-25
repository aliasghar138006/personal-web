import Title from '@elements/Title';
import MyCom from '@modules/MyCom';
import { DataContext } from 'context/Context';
import { useContext } from 'react';

function MyCommendations(props) {
    const {commendationsData} = useContext(DataContext)
    return (
        <div className="my-[100px] w-[80%] mx-auto text-white">
            <Title title='تقدیرنامه ها' />
            <div className='inline-grid md:grid-cols-3'>
                {commendationsData && commendationsData.map(item => (
                    <MyCom key={item.id} image={item.image} url={item.url} />
                ))}
            </div>
        </div>
    );
}

export default MyCommendations;