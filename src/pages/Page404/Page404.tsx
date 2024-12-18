import { Link } from 'react-router-dom';
import Pages from '../../routing/pages-enum';

function Page404() {
  return (
    <div>
      <p className=''>Сторінку не знайдено =(</p>
      <Link className='' to={Pages.Home}>Повернутись назад</Link>
    </div>
  )
}

export default Page404;
