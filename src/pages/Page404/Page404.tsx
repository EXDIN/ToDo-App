import { Link } from 'react-router-dom';
import Pages from '../../routing/pages-enum';


function Page404() {
  return (
    <div className='text-center p-5 flex flex-col gap-y-3 justify-center'>
      <p className='dark:text-white'>Сторінку не знайдено =(</p>
      <Link className='rounded-lg bg-gray-400 align-self: center; py-2 px-3 self-center dark:bg-beige' to={Pages.Home}>Повернутись на головну</Link>
    </div>
  )
}


export default Page404;