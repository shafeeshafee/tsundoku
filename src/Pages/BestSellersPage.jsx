import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchBestsellers} from '../Actions/bestsellersActions';
import Bestsellers from '../Components/Bestsellers'

const BestSellersPage = () => {

  const dispatch = useDispatch()

  const initialBestsellers = useSelector((state) => {
    return state.bestsellers
  })

  const {bestsellers} = initialBestsellers;

  useEffect(() => {
    dispatch(fetchBestsellers())
  }, [dispatch])

  const renderBestsellers = () => {
    if (bestsellers.loading) return <p> Loading BestSellers...</p>
    if (bestsellers.hasErrors) return <p>An error has occurred</p>
    return bestsellers;
  }
  
  return (
    <div>
      <Bestsellers bestsellerslist={renderBestsellers()}/>
    </div>
  )
}

export default BestSellersPage;