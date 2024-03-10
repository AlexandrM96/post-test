
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postElementActions } from '../store/post/post.slice';

const AllActions = {
    ...postElementActions,
}

const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(AllActions, dispatch)
}

export default useActions
