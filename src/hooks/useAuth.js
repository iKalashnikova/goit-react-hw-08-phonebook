import { useSelector } from "react-redux";
import {selectIsLoggedIn, selectUser, selectIsRefreshing} from '../components/redux/auth/authSelectors';


export const useAuth = () => {
    return{
        isLoggedIn: useSelector(selectIsLoggedIn),
        isRefreshing: useSelector(selectIsRefreshing),
        user: useSelector(selectUser),
    }
}